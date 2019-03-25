const fs = require('fs');
const types = require('./types');


createFolder = (caminho) => {
    fs.mkdir(__dirname + caminho, (err) => {
        if (err && err.code !== 'EEXIST') throw err;
    });
};

createFile = (file, dados) => {
    fs.writeFile(__dirname + file, dados, (err) => {
        if (err && err.code !== 'EEXIST') throw err;
    });
};

loopStruct = (item) => {
    let struct = '';
    item.columns.forEach(item2 => {
        let type = checkType(item2);
        struct += (checkPrimary(item2) ? '\n\t@PrimaryGeneratedColumn()' :
            '\n\t@Column({ type : \'' + item2['udt_name'] + '\'' + (item2['length'] === null ? '' : ', length : ' + item2['length']) + '})')
            + '\n\t' + literaltoCamelcase(item2['column_name']) + ' : ' + type + ';'
    })
    return struct;
};

checkType = (column) => {
    let type;
    Object.keys(types).forEach((item) => {
        types[item].forEach(item2 => {
            if (column['udt_name'] === item2) type = item;
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

literaltoCamelcase = (text) => {
    let text_return = '';
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) !== '_') {
            text_return += text.charAt(i);
        }else{
            text_return += text.charAt(++i).toUpperCase();
        }
    }
    return text_return;
};

checkImport = (table) => {
        let foreing = [];
        let result = '';
        table.columns.forEach(item => {
            item.constraints.forEach(item2 => {
                if(item2['constraint_type'] === 'FOREIGN KEY' && !foreing.includes({table: item2['table_name_foreign']})){
                    foreing.push({table: item2['table_name_foreign']});
                }
            });
        });
        foreing.forEach(item => {
            result += '\nimport ' + literaltoCamelcase(item.table) + ' from \'./' + literaltoCamelcase(item.table) + '\';';
        });
        return result;
};

module.exports = async (folder_name, tables) => {
    await createFolder('/src');
    await createFolder('/src/' + folder_name);
    tables.forEach(item => {
        let struct = loopStruct(item);
        let imports = checkImport(item);
        let serialization = `import { Entity, PrimaryGeneratedColumn, Column } from \"typeorm\";`
            + `${imports}`
            + `\n\n@Entity()`
            + `\nexport class ${item['table_name']} {`
            + `\n ${struct}`
            + `\n}`;

        createFile('/src/' + folder_name + '/' + literaltoCamelcase(item['table_name']) + '.js', serialization);
    });
};