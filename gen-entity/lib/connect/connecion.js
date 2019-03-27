let database;

module.exports = async (config) => {
    if(config.database_type === 'postgres'){
        database = require('./pg');
    }
	let tables;
	await database.tables(config).then(res => {
		tables = res;
	});

	for(let i = 0 ; i < tables.length; i++){
		await database.columns(config, tables[i]['table_name']).then(res => {
			tables[i].columns = res;
			
		});

		await database.refConstraints(config, tables[i]['table_name']).then(res => {
			tables[i].refConstraints = res;
		});

		for(let x = 0; x < tables[i].columns.length; x++){
			await database.constraints(config, tables[i]['table_name'], tables[i].columns[x]['column_name']).then(res => {
				tables[i].columns[x].constraints = res;
			});
			
		}
    }	    
    return tables;	
};