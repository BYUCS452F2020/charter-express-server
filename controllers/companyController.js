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
      let company_id =null
      if(req.body.company_name !== undefined){
        console.log("Need to create a new company")
        company_id = await db.getCompanyFromName(req.body.company_name)
        if(company_id == undefined){
          await db.registerCompany(req.body.company_name, null, 0)
          company_id = await db.getCompanyFromName(req.body.company_name)
        }
      }
      let persInsert = await db.registerPerson(req.body.type, req.body.username,
                      req.body.password, company_id.id, req.body.access_level)
      let infoInsert = await db.insertPersonInfo(req.body.email, req.body.address, req.body.phone)
      res.status(200).send({
        user: req.body.username,
        access_level: req.body.access_level
        })
    } catch (err) {
      res.status(400).send({"error": "Could not register person"})
    }
  }

}
