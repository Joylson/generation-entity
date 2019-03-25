const connect = require('./connect/connecion');
const generation = require('./generation');
const types = require('./types');

const config = {
	host: 'localhost',
	user: 'postgres',
	password: 'a',
	database: 'itbi_caconde',
	port: 5432,
	database_type: 'postgres'
};

teste = async (name) => {
	connect(config).then(res => {
		generation('entity', res)
	});
};


teste();