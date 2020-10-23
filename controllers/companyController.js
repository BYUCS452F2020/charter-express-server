const db = require('../db/db')

module.exports = {

  login: async(req, res) => {
    try{
      let results = await db.getPerson(req.body.username, req.body.password)
      res.status(200).send({username: results[0].username, access_level: results[0].access_level})
    }catch (err){
      res.status(400).send({"error": "Could not log user in"})
    }
  },
  
}