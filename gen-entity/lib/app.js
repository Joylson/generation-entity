const connect = require('./connect/connecion');
const generation = require('./generation');
const types = require('./types');

let time = 1;
const config = {
	host: 'localhost',
	user: 'postgres',
	password: 'a',
	database: 'itbi_caconde',
	port: 5432,
	database_type: 'postgres'
};

module.exports = async () => {
	let loadI = setInterval(load, 1000);
	connect(config).then(res => {
		clearInterval(loadI)
		generation('entity', res, true)
	});
};

load = () => {
	process.stdout.write('\033c');
	console.log('consulting database ' + (time === 1 ? '.' : time === 2 ? '..' : '...'));
	if (time === 3) time = 0;
	time++;
};

