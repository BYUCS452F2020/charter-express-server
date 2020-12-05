const company = require('../controllers/companyControllerMongo')
const charter = require('../controllers/charterControllerMongo')

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
    charter.getCharter(req, res)
  })

  app.get("/charters/:id", async(req, res) => {
    charter.getCharter(req, res)
  })
  
  app.get("/company/:id", async(req, res) => {
    company.getCompanyById(req, res)
  })
  
}
