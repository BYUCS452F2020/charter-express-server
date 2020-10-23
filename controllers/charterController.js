const db = require('../db/db')

module.exports = {
  
  submitCharter: async(req, res) => {
    try{
      let results = await db.submitCharter(req.body.start_date, req.body.end_date, req.body.company_id, req.body.seats_available, req.body.cost)
      res.status(200).send({status: "200"})
    } catch (err){
      res.status(400).send({"error": "Could not submit charter"})
    }
  }
}
