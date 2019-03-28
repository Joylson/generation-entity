const fs = require('fs');
const types = require('./types');


createFolder = (caminho) => {
    fs.mkdir(caminho, (err) => {
        if (err && err.code !== 'EEXIST') throw err;
    });
};

createFile = (file, dados) => {
    fs.writeFile(file, dados, (err) => {
        if (err && err.code !== 'EEXIST') throw err;
    });
};

loopStruct = (item) => {
    let struct = '';
    let struct_foreign = '';
    let struct_ref_foreign = '';
    let struct_primary = '';
    let struct_coluns = '';
    item.columns.forEach(item2 => {
        let type = checkType(item2);
        let lst_foreign = createForeign(checkForeign(item2), item2['']);
        if (checkPrimary(item2)) {
            struct_primary += '\n\n\t@PrimaryGeneratedColumn(' + (!lst_foreign ? '{name : \'' + item2['column_name'] + '\'}' : '') + ')'
                + (!lst_foreign ? '\n\t' + literaltoCamelcase(item2['column_name']) + ' : ' + type + ';' : '');
            if (lst_foreign) {
                lst_foreign.forEach(foreign => {
                    struct_primary += '\n\t@ManyToOne(type => ' + literaltoCamelcase(foreign['table'], true) + ', ' + literaltoCamelcase(foreign['table']) + ' => ' + literaltoCamelcase(foreign['table']) + '.' + lowerCase(literaltoCamelcase(removeId(item2['column_name'] + '_' + item2['table_name']) + 's'), 0) + ')'
                        + '\n\t@JoinColumn(' + foreign['foreignRef'] + ')'
                        + '\n\t' + literaltoCamelcase(checkConcatenation(item2['column_name'], foreign['table'], true)) + ' : ' + literaltoCamelcase(foreign['table'], true) + ';' + (lst_foreign.length > 1 ? '\n' : '');
                });
            }
        } else if (lst_foreign) {
            lst_foreign.forEach(foreign => {
                struct_foreign += '\n\n\t@ManyToOne(type => ' + literaltoCamelcase(foreign['table'], true) + ', ' + literaltoCamelcase(foreign['table']) + ' => ' + literaltoCamelcase(foreign['table']) + '.' + lowerCase(literaltoCamelcase(removeId(item2['column_name'] + '_' + item2['table_name']) + 's'), 0)
                    + ', { nullable : ' + (item2['is_nullable'] === 'NO' ? 'false' : 'true') + ' })'
                    + '\n\t@JoinColumn(' + foreign['foreignRef'] + ')'
                    + '\n\t' + literaltoCamelcase(checkConcatenation(item2['column_name'], foreign['table'], true)) + ' : ' + literaltoCamelcase(foreign['table'], true) + ';';
            });
        } else {
            struct_coluns += (checkPrimary(item2) ? '\n\t@PrimaryGeneratedColumn({name : \'' + item2['column_name'] + '\'})' :
                '\n\n\t@Column(\'' + checkInrregular(item2['udt_name']) + '\', {name : \'' + item2['column_name'] + '\'' + (item2['length'] === null ? '' : ', length : ' + item2['length']) + ', nullable : ' + (item2['is_nullable'] === 'NO' ? 'false' : 'true') + '})')
                + '\n\t' + literaltoCamelcase(item2['column_name']) + ' : ' + type + ';';
        }
    });

    let tables_ref = [];
    item.refConstraints.forEach(item => {
        if (!checkIncludes({ foreing: item['constraint_name'], table: item['table_name'], column: item['column_name'] }, tables_ref, (obj, res) => {
            if (obj['foreing'] === res['foreing'] && obj['table'] === res['table'] && obj['column'] === res['column']) {
                return true;
            }
        })) {
            struct_ref_foreign += '\n\n\t@OneToMany(type => ' + literaltoCamelcase(item['table_name'], true) + ', ' + literaltoCamelcase(item['table_name']) + ' => ' + literaltoCamelcase(item['table_name']) + '.' + literaltoCamelcase(checkConcatenation(item['column_name'], item['table_name_foreign'], true)) + ' )'
                + '\n\t' +  lowerCase(literaltoCamelcase(removeId(item['column_name'] + '_' + item['table_name']) + 's'), 0) + ' : ' + literaltoCamelcase(item['table_name'], true) + '[]; ';
            tables_ref.push({ foreing: item['constraint_name'], table: item['table_name'], column: item['column_name'] });
        }
    });

    struct = struct_primary + '\n' + struct_coluns + '\n' + struct_foreign + '\n' + struct_ref_foreign;
    return struct;
};


checkInrregular = (type) => {
    let type_result;
    Object.keys(typeIrregular).forEach(res => {
        typeIrregular[res].forEach(res2 => {
            if (type === res2) type_result = res;
        });
    });
    return type_result ? type_result : type;
};

typeIrregular = {
    'char': ['bpchar']
};

checkType = (column) => {
    let type;
    Object.keys(types).forEach((item) => {
        types[item].forEach(item2 => {
            if (checkInrregular(column['udt_name']) === item2) type = item;
        })
    });
    return type === null ? 'string' : type;
};

checkPrimary = (column) => {
    let primaryKey = false;
    column.constraints.forEach(item => {
        if (item['constraint_type'] === 'PRIMARY KEY') primaryKey = true;
    });
    return primaryKey;
}

createForeign = (foreign) => {
    if (foreign.length > 0) {
        foreign.forEach((item, key) => {
            let foreign_ref = '';
            foreign_ref = item.columns.length > 1 ? '[' : '';
            let count = 0;
            item.columns.forEach(item2 => {
                if (count > 0) foreign_ref += ', ';
                foreign_ref += '{ name : \'' + item2['columnName'] + '\', referencedColumnName: \'' + literaltoCamelcase(item2['columnRef']) + '\'}';
                count++;
            });
            foreign_ref += item.columns.length > 1 ? ']' : '';
            foreign[key]['foreignRef'] = foreign_ref;
        });
        return foreign;
    } else {
        return null;
    }
};

checkForeign = (column) => {
    let foreignKey = [];
    column.constraints.forEach(item => {
        if (item['constraint_type'] === 'FOREIGN KEY' && !checkIncludes(item['constraint_name'], foreignKey, (obj, res, key) => {
            if (obj === res['fkName']) {
                foreignKey[key].columns.push({columnName: item['column_name'], columnRef : item['column_name_foreign']});
                return true;
            }
        })) {
            foreignKey.push({ fkName: item['constraint_name'], table: item['table_name_foreign'], columns: [{columnName: item['column_name'], columnRef : item['column_name_foreign']}] });
        }
    });
    return foreignKey;
}

literaltoCamelcase = (text, first) => {
    let text_return = '';
    for (var i = 0; i < text.length; i++) {
        if (first && i === 0 && text.charAt(i) !== '_') {
            text_return += text.charAt(i).toUpperCase();
        } else if (text.charAt(i) !== '_') {
            text_return += text.charAt(i);
        } else {
            text_return += text.charAt(++i).toUpperCase();
        }
    }
    return text_return;
};

checkConcatenation = (text_base, text_conc, base) => {
    if (!literaltoCamelcase(text_base).toUpperCase().includes(literaltoCamelcase(text_conc).toUpperCase())) {
        return text_base +  '_' + text_conc ;
    }
    return base ? text_base : text_conc;
};

removeId = (text) =>{
    if(text.length > 2){
        if((text.charAt(0) + text.charAt(1)).toUpperCase() === 'ID'){
            return text.slice(2);
        }else if((text.charAt(text.length - 2) + text.charAt(text.length - 1)).toUpperCase() === 'ID') {
            return text.slice(0, text.length - 2)
        }
        return text;
    }
}

lowerCase = (text, index) => {
    let text_return = '';
    for(let i = 0; i < text.length ; i++){
        if(i === index){
            text_return += text.charAt(i).toLowerCase();
        }else{
            text_return += text.charAt(i);
        }
    }
    return text_return;
};

checkImportForeign = (table) => {
    let foreing = [];
    let result = '';
    let count = 0;
    let count_ref = 0;
    table.columns.forEach(item => {
        item.constraints.forEach(item2 => {
            count++;
            if (item2['constraint_type'] === 'FOREIGN KEY'
                && !checkIncludes(item2['table_name_foreign'], foreing, (obj, res) => obj === res['table'])
                && item2['table_name_foreign'] !== item2['table_name']) {
                foreing.push({ table: item2['table_name_foreign'] });
            }
        });
    });
    table.refConstraints.forEach(item2 => {
        count_ref++;
        if (!checkIncludes(item2['table_name'], foreing, (obj, res) => { if (obj === res['table']) return true; })
            && item2['table_name_foreign'] !== item2['table_name']) {
            foreing.push({ table: item2['table_name'] });
        }
    });
    foreing.forEach(item => {
        result += '\nimport {' + literaltoCamelcase(item.table, true) + '} from \'./' + literaltoCamelcase(item.table, true) + '\';';
    });
    return { result, count, count_ref };
};

checkIncludes = (obj, list, validate) => {
    let test = false
    list.forEach((res, key) => {
        if (validate(obj, res, key)) test = true;
    })
    return test;
}

module.exports = async (folder_name, tables, camel_case) => {
    if (!camel_case) {
        literaltoCamelcase = (text, first) => {
            let text_return = '';
            for (var i = 0; i < text.length; i++) {
                if (first && i === 0) {
                    text_return += text.charAt(i).toUpperCase();
                }
            }
            return text_return;
        };
    }
    await createFolder('./src');
    await createFolder('./src/' + folder_name);
    tables.forEach(item => {
        let struct = loopStruct(item);
        let importsForeing = checkImportForeign(item);
        let serialization = `import { Entity, PrimaryGeneratedColumn, Column ${importsForeing['count'] > 0 ? ', ManyToOne, JoinColumn ' : ''}${importsForeing['count_ref'] > 0 ? ', OneToMany ' : ''}} from \'typeorm\';`
            + `${importsForeing['result']}`
            + `\n\n@Entity({name : '${item['table_name']}'})`
            + `\nexport class ${literaltoCamelcase(item['table_name'], true)} {`
            + `\n ${struct}`
            + `\n}`;

        createFile('./src/' + folder_name + '/' + literaltoCamelcase(item['table_name'], true) + '.ts', serialization);
        console.log('create entity ./src/' + folder_name + '/' + literaltoCamelcase(item['table_name'], true) + '.ts');
    });
};
