const company = require('../controllers/companyController')

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.send(`Hi! Server is listening`);
  })

  app.post("/example", async (req, res) => {
    company.example(req, res)
  })

}