let pg;

module.exports = async (config) => {
    if(config.database_type === 'postgres'){
        pg = require('./pg');
    }
	let tables;
	await pg.tables(config).then(res => {
		tables = res;
	});

	for(let i = 0 ; i < tables.length; i++){
		await pg.columns(config, tables[i]['table_name']).then(res => {
			tables[i].columns = res;
		});
		for(let x = 0; x < tables[i].columns.length; x++){
			await pg.constraints(config, tables[i]['table_name'], tables[i].columns[x]['column_name']).then(res => {
				tables[i].columns[x].constraints = res;
			});
		}
    }	    
    return tables;	
};