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

  async getCompanyFromName(company_name){
    let sql = 'SELECT * FROM company WHERE name = ?'
    let con = await mysqlprom.createConnection(connData)
    let [rows, fields] = await con.execute(sql, [company_name])
    return rows[0]
  },

  async registerCompany(name, type, level) {
    let sql = 'INSERT INTO company (name, type, level) Values (?, ?, ?)'
    let con = await mysqlprom.createConnection(connData)
    await con.execute(sql, [name, type, level])
    await con.end()
  },

  async registerPerson(type, username, password, company_id, access_level) {
    let sql = 'INSERT INTO person (type, username, password, company_id, access_level) VALUES (?, ?, ?, ?, ?)'
    let con = await mysqlprom.createConnection(connData)
    //Just a precaution more than anything
    company_id = company_id!==undefined ? company_id : null
    await con.execute(sql, [type, username, password, company_id, access_level])
    await con.end()
  },

  async submitCharter(start_date, end_date, company_id, seats_available, cost) {
    let sql = 'INSERT INTO charter (start_date, end_date, company_id, seats_available, cost) VALUES (?, ?, ?, ?, ?)'
    let con = await mysqlprom.createConnection(connData)
    //Just a precaution more than anything
    start_date = start_date!==undefined ? start_date : null
    end_date = end_date!==undefined ? end_date : null
    company_id = company_id!==undefined ? company_id : null
    seats_available = seats_available!==undefined ? seats_available : null
    cost = cost!==undefined ? cost : null
    await con.execute(sql, [start_date, end_date, company_id, seats_available, cost])
    await con.end()
  },

  async insertPersonInfo(email, address, phone){
    let sql = 'INSERT INTO personal_info (email, address, phone) VALUES (?, ?, ?)'
    let con = await mysqlprom.createConnection(connData)
    //Just a precaution more than anything
    email = email!==undefined ? email : null
    address = address!==undefined ? address : null
    phone = phone!==undefined ? phone : null
    let result = await con.execute(sql, [email, address, phone])
    await con.end()
    return result
  }
};
