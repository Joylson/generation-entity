const connect = require('./connect/connecion');
const generation = require('./generation');
const types = require('./types');

const config = {
	host: 'localhost',
	user: 'postgres',
	password: 'a',
	database: 'teste_gen_entity',
	port: 5432,
	database_type: 'postgres'
};

module.exports = async () => {
	connect(config).then(res => {
		generation('entity', res)
	});
};

