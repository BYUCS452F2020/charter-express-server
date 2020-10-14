const conn = require('../db/db')

module.exports = {

  example: async(req, res) => {
    let sql = `INSERT INTO company
      (id,
      relatedUserId,
      relatedAccountId,
      role)
      VALUES
      (?, ?, ?, ?)`
    await conn.promise().query(sql, ["exampleid23652365", "4626772", "32654362", "member"])
      .then( () => {
        res.send(results)
      })
      .catch(error => {
        console.log(error)
        res.status(400)
      })
  },
}