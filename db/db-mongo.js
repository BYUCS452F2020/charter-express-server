const mongoUtil = require('../mongoUtil');


module.exports = {

  async getPerson(username, password){
    var db = mongoUtil.getDb();
    var collection = db.collection("person");
    var person = await collection.findOne({username: username, password: password})
    .then(person => {
      return person
    })
    return person
  },

  async getCompanyFromName(company_name){
    var db = mongoUtil.getDb();
    var collection = db.collection("company");
    var company = await collection.findOne({name: company_name})
    .then(company => {
      return company
    })
    return company
  },

  async getCompany(company_id){
    var db = mongoUtil.getDb();
    var collection = db.collection("company");
    var company = await collection.findOne({id: company_id})
    .then(company => {
      return company
    })
    return company
  },

  async getLocations(){
    var db = mongoUtil.getDb();
    var collection = db.collection("location");
    return new Promise(function(resolve, reject) {
      collection.find({}).toArray((err, result) => {
        if (err) reject(err);
        return resolve(result)
      })
    })
  },

  async registerCompany(name, type, level) {
    var db = mongoUtil.getDb();
    var collection = db.collection("company");
    return new Promise(function(resolve, reject) {
      collection.insertOne({name: name, type: type, level: level}, (err, result) => {
        if (err) reject(err);
        console.log(result)
        return resolve(result)
      })
    })
  },

  async registerPerson(type, username, password, company_id, access_level) {
    var db = mongoUtil.getDb();
    var collection = db.collection("person");
    return new Promise(function(resolve, reject) {
      collection.insertOne({username: username, password: password, type: type, company_id: company_id, access_level: access_level}, (err, result) => {
        if (err) reject(err);
        console.log(result)
        return resolve(result)
      })
    })
  },

  async submitCharter(start_date, end_date, company_id, seats_available, cost) {
    var db = mongoUtil.getDb();
    var collection = db.collection("charter");
    return new Promise(function(resolve, reject) {
      collection.insertOne({start_date: start_date, end_date: end_date, seats_available: seats_available, company_id: company_id, cost: cost}, (err, result) => {
        if (err) reject(err);
        console.log(result)
        return resolve(result)
      })
    })
  },

  async insertPersonInfo(email, address, phone){
    var db = mongoUtil.getDb();
    var collection = db.collection("personInfo");
    return new Promise(function(resolve, reject) {
      collection.insertOne({email: email, address: address, phone: phone}, (err, result) => {
        if (err) reject(err);
        console.log(result)
        return resolve(result)
      })
    })
  },

  async getCharter(id) {
    var db = mongoUtil.getDb();
    var collection = db.collection("charter");
    if (typeof id !== 'undefined') {
      var charter = await collection.findOne({id: id})
      .then(charter => {
        return charter
      })
      return charter
    } else {
      return new Promise(function(resolve, reject) {
        collection.find({}).toArray((err, result) => {
          if (err) reject(err);
          return resolve(result)
        })
      })
    }
  }
};