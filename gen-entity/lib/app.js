const connect = require('./connect/connecion');
const generation = require('./generation');
const chalk = require('chalk');

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
	let loadI = setInterval(load, 700);
	connect(config).then(res => {
		clearInterval(loadI)
		generation('entity', res, true).then(res => {
			console.log(chalk.green.bold('entities created successfully'));
		}).catch(err => {
			console.error(chalk.red.bold('exception when creating entities!!!'));
			console.error(err);			
		})
	}).catch(err => {
		clearInterval(loadI);
		console.error(chalk.red.bold('exception when creating entities!!!'));
		console.error(err);
	});
};

load = () => {
	process.stdout.write('\033c');
	console.log('consulting database ' + (time === 1 ? '.' : time === 2 ? '..' : '...'));
	if (time === 3) time = 0;
	time++;
};

