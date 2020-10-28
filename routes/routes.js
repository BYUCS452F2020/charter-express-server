const company = require('../controllers/companyController')
const charter = require('../controllers/charterController')

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.send(`Hi! Server is listening`);
  })

  app.post("/register/company", async(req, res) =>{
    company.registerCompany(req, res);
  })

  app.post("/register/person", async(req, res) =>{
    company.registerPerson(req, res);
  })

  app.post("/login", async(req, res)=>{
    company.login(req, res)
  })

  app.post("/submit/charter", async(req, res) => {
    charter.submitCharter(req, res)
  })

  app.get("/locations", async(req, res) => {
    charter.getLocations(req, res)
  })

  app.get("/charters", async(req, res) => {
    charter.getCharters(req, res)
  })

  app.get("/charters/:id", async(req, res) => {
    charter.getCharter(req, res)
  })

}
