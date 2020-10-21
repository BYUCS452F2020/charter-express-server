const mysqlprom = require('mysql2/promise');
const bluebird = require('bluebird')

const connData = {
  host: 'charter-express.mysql.database.azure.com',
	user: 'charteradmin@charter-express',
	password: 'Charter-Express',
	database: 'prod',
  port: 3306,
  Promise: bluebird
}

module.exports = {
  
  async getPerson(username, password){
    let sql = 'SELECT * FROM `person` WHERE `username` = ? AND `password` = ?'
    let con = await mysqlprom.createConnection(connData)
    let [rows, fields] = await con.execute(sql, [username, password])
    await con.end();
    return rows
  }
};