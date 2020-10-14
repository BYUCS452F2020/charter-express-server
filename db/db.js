var mysql = require('mysql2');

var conn = mysql.createConnection({
  host: 'charter-express.mysql.database.azure.com',
	user: 'charteradmin@charter-express',
	password: 'Charter-Express',
	database: 'prod',
	port: 3306
});

module.exports = conn;