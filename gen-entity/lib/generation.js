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
        let foreign = createForeign(checkForeign(item2));
        if (checkPrimary(item2)) {
            struct_primary += '\n\n\t@PrimaryGeneratedColumn(' + (!foreign ? '{name : \'' + item2['column_name'] + '\'}' : '') + ')'
                + (!foreign ? '\n\t' + literaltoCamelcase(item2['column_name']) + ' : ' + type + ';' : '');
            if (foreign) {
                struct_primary += '\n\t@ManyToOne(type => ' + literaltoCamelcase(foreign['table'], true) + ', ' + literaltoCamelcase(foreign['table']) + ' => ' + literaltoCamelcase(foreign['table']) + '.' + literaltoCamelcase(item2['table_name'] + 's') + ')'
                    + '\n\t@JoinColumn(' + foreign['foreignRef'] + ')'
                    + '\n\t' + literaltoCamelcase(item2['column_name']) + ' : ' + literaltoCamelcase(foreign['table'], true) + ';'
            }
        } else if (foreign) {
            struct_foreign += '\n\n\t@ManyToOne(type => ' + literaltoCamelcase(foreign['table'], true) + ', ' + literaltoCamelcase(foreign['table']) + ' => ' + literaltoCamelcase(foreign['table']) + '.' + literaltoCamelcase(item2['table_name'] + 's')
                + ', { nullable : ' + (item2['is_nullable'] === 'NO' ? 'false' : 'true') + ' })'
                + '\n\t@JoinColumn(' + foreign['foreignRef'] + ')'
                + '\n\t' + literaltoCamelcase(item2['column_name']) + ' : ' + literaltoCamelcase(foreign['table'], true) + ';'
        } else {
            struct_coluns += (checkPrimary(item2) ? '\n\t@PrimaryGeneratedColumn({name : \'' + item2['column_name'] + '\'})' :
                '\n\n\t@Column(\'' + checkInrregular(item2['udt_name']) + '\', {name : \'' + item2['column_name'] + '\'' + (item2['length'] === null ? '' : ', length : ' + item2['length']) + ', nullable : ' + (item2['is_nullable'] === 'NO' ? 'false' : 'true') + '})')
                + '\n\t' + literaltoCamelcase(item2['column_name']) + ' : ' + type + ';'
        }
    });

    let tables_ref = [];
    item.refConstraints.forEach(item => {
        if (!checkIncludes(item['table_name'], tables_ref, (obj, res) => obj === res)) {
            struct_ref_foreign += '\n\n\t@OneToMany(type => ' + literaltoCamelcase(item['table_name'], true) + ', ' + literaltoCamelcase(item['table_name']) + ' => ' + literaltoCamelcase(item['table_name']) + '.' + literaltoCamelcase(item['column_name']) + ' )'
                + '\n\t' + literaltoCamelcase(item['table_name']) + 's : ' + literaltoCamelcase(item['table_name'], true) + '[];';
            tables_ref.push(item['table_name']);
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
    let foreign_ref = '';
    if (foreign.length > 0) {
        foreign_ref = foreign.length > 1 ? '[' : '';
        let count = 0;
        foreign.forEach(item => {
            if(count > 0) foreign_ref += ', ';
            foreign_ref += '{ name : \'' + item['column'] + '\', referencedColumnName: \'' + literaltoCamelcase(item['column']) + '\'}';
            count++;
        });
        foreign_ref += foreign.length > 1 ? ']' : '';
        return { table: foreign[0]['table'], column: foreign[0]['column'], foreignRef: foreign_ref }
    } else {
        return null;
    }
};

checkForeign = (column) => {
    let foreignKey = [];
    column.constraints.forEach(item => {
        if (item['constraint_type'] === 'FOREIGN KEY') foreignKey.push({ table: item['table_name_foreign'], column: item['column_name_foreign'] });
    });
    return foreignKey;
}

literaltoCamelcase = (text, first) => {
    let text_return = '';
    for (var i = 0; i < text.length; i++) {
        if (first && i === 0) {
            text_return += text.charAt(i).toUpperCase();
        } else if (text.charAt(i) !== '_') {
            text_return += text.charAt(i);
        } else {
            text_return += text.charAt(++i).toUpperCase();
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
    list.forEach(res => {
        if (validate(obj, res)) test = true;
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
