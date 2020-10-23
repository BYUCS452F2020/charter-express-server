const db = require('../db/db')

module.exports = {

  login: async(req, res) => {
    try{
      let results = await db.getPerson(req.body.username, req.body.password)
      res.status(200).send({username: results[0].username, access_level: results[0].access_level})
    } catch (err){
      res.status(400).send({"error": "Could not log user in"})
    }
  },

  registerCompany: async(req, res) => {
    try {
      let results = await db.registerCompany(req.body.name, req.body.type, req.body.level)
      res.status(200).send({status: 200})
    } catch (err) {
      res.status(400).send({"error": "Could not register company"})
    }
  },

  registerPerson: async(req, res) => {
    try {
      let results = await db.registerPerson(req.body.type, req.body.username,
                      req.body.password, req.body.company_id, req.body.email, req.body.access_level)
      res.status(200).send({status: 200})
    } catch (err) {
      res.status(400).send({"error": "Could not register person"})
    }
  }

}
