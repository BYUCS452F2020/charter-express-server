const company = require('../controllers/companyController')

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.send(`Hi! Server is listening`);
  })

  app.post("/example", async (req, res) => {
    company.example(req, res)
  })
  
  app.post("/register/company", async(req, res) =>{
    company.register(req, res);
    res.send();
  })
  
  app.post("/login", async(req, res)=>{
    company.login(req, res)
  })

}