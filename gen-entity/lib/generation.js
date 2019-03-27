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
    let struct_primary = '';
    let struct_coluns = '';
    item.columns.forEach(item2 => {
        let type = checkType(item2);
        let foreign = checkForeign(item2);
        if (checkPrimary(item2)) {
            struct_primary += '\n\n\t@PrimaryGeneratedColumn(' + (!checkForeign(item2) ? '{name : \'' + item2['column_name'] + '\'}' : '') + ')'
                + (!checkForeign(item2) ? '\n\t' + literaltoCamelcase(item2['column_name']) + ' : ' + type + ';' : '');
            if (foreign) {
                struct_primary += '\n\t@ManyToOne(type => ' + literaltoCamelcase(foreign['table'], true) + ', { nullable : ' + (item2['is_nullable'] === 'NO' ? 'false' : 'true') + ' })'
                + '\n\t@JoinColumn({name : \'' + item2['column_name'] + '\'})'
                + '\n\t' + literaltoCamelcase(item2['column_name']) + ' : ' + literaltoCamelcase(foreign['table'], true) + ';'
            }
        } else if (foreign) {
            struct_foreign += '\n\n\t@ManyToOne(type => ' + literaltoCamelcase(foreign['table'], true) + ', { nullable : ' + (item2['is_nullable'] === 'NO' ? 'false' : 'true') + ' })'
                + '\n\t@JoinColumn({name : \'' + item2['column_name'] + '\'})'
                + '\n\t' + literaltoCamelcase(item2['column_name']) + ' : ' + literaltoCamelcase(foreign['table'], true) + ';'
        }else {
            struct_coluns += (checkPrimary(item2) ? '\n\t@PrimaryGeneratedColumn({name : \'' + item2['column_name'] + '\'})' :
                '\n\n\t@Column(\'' + checkInrregular(item2['udt_name']) + '\', {name : \'' + item2['column_name'] + '\'' + (item2['length'] === null ? '' : ', length : ' + item2['length']) + ', nullable : ' + (item2['is_nullable'] === 'NO' ? 'false' : 'true') + '})')
                + '\n\t' + literaltoCamelcase(item2['column_name']) + ' : ' + type + ';'
        }
    });

    struct = struct_primary + '\n' + struct_coluns + '\n' + struct_foreign;
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

checkForeign = (column) => {
    let primaryKey = null;
    column.constraints.forEach(item => {
        if (item['constraint_type'] === 'FOREIGN KEY') primaryKey = { table: item['table_name_foreign'], column: item['column_name_foreign'] };
    });
    return primaryKey;
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

checkImport = (table) => {
    let foreing = [];
    let result = '';
    let count = 0;
    table.columns.forEach(item => {
        item.constraints.forEach(item2 => {
            if (item2['constraint_type'] === 'FOREIGN KEY'
                && !checkincludes(item2['table_name_foreign'], foreing, (obj, res) => { if (obj === res['table']) return true; })) {
                count++;
            }
            if (item2['constraint_type'] === 'FOREIGN KEY'
                && !checkincludes(item2['table_name_foreign'], foreing, (obj, res) => { if (obj === res['table']) return true; })
                && item2['table_name_foreign'] !== item2['table_name']) {
                foreing.push({ table: item2['table_name_foreign'] });
            }
        });
    });
    foreing.forEach(item => {
        result += '\nimport {' + literaltoCamelcase(item.table, true) + '} from \'./' + literaltoCamelcase(item.table, true) + '\';';
    });
    return { result, count };
};

checkincludes = (obj, list, validate) => {
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
        let imports = checkImport(item);
        let serialization = `import { Entity, PrimaryGeneratedColumn, Column ${imports['count'] > 0 ? ', ManyToOne, JoinColumn ' : ''}} from \'typeorm\';`
            + `${imports['result']}`
            + `\n\n@Entity({name : '${item['table_name']}'})`
            + `\nexport class ${literaltoCamelcase(item['table_name'], true)} {`
            + `\n ${struct}`
            + `\n}`;

        createFile('./src/' + folder_name + '/' + literaltoCamelcase(item['table_name'], true) + '.ts', serialization);
        console.log('create entity ./src/' + folder_name + '/' + literaltoCamelcase(item['table_name'], true) + '.ts');
    });
};
