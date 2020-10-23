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
    await con.end()
    return rows
  },

  async registerCompany(name, type, level) {
    let sql = 'INSERT INTO company (name, type, level) Values (?, ?, ?)'
    let con = await mysqlprom.createConnection(connData)
    await con.execute(sql, [name, type, level])
    await con.end()
  },

  async registerPerson(type, username, password, company_id, email, access_level) {
    let sql = 'INSERT INTO person (type, username, password, company_id, email, access_level) VALUES (?, ?, ?, ?, ?, ?)'
    let con = await mysqlprom.createConnection(connData)
    await con.execute(sql, [type, username, password, company_id, email, access_level])
    await con.end()
  },

  async submitCharter(start_date, end_date, company_id, seats_available, cost) {
    let sql = 'INSERT INTO charter (start_date, end_date, company_id, seats_available, cost) VALUES (?, ?, ?, ?, ?)'
    let con = await mysqlprom.createConnection(connData)
    await con.execute(sql, [start_date, end_date, company_id, seats_available, cost])
    await con.end()
  }
};
