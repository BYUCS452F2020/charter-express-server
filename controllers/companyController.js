const db = require('../db/db')

module.exports = {

  login: async(req, res) => {
    try{
      let results = await db.getPerson(req.body.username, req.body.password)
      res.status(200).send(results[0])
    }catch (err){//err needs to be destructured still
      res.status(400).send({"error": err})
    }
  },
  
}