var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index', { title: 'Index' });
});

router.get("/about", (req, res, next)=>{
  res.render("about",  { title: "About" });
});

router.get("/services",(req, res, next)=>{
  res.render("services", { title: "Services"})
});

router.get("/contact",(req, res, next)=>{
  res.render("contact", { title: "Contact"})
});

router.get("/projects",(req, res, next)=>{
  res.render("projects", { title: "Project"})
});

module.exports = router;
