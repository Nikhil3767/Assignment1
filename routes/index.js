var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index', { title: 'Index', name:"nikhil" });
});

router.get("/about", (req, res, next)=>{
  res.render("about",  { title: "About" });
});

router.get("/services",(req, res, next)=>{
  res.render("services", { title: "Services"})
});

router.get("/contact",(req, res, next)=>{
  res.render("contact", 
  { 
    title: "Contact",
    action: "/thankyou", //post action for the form
    fields: [
      {name:'name',type:'text',property:'required'},    //first field for the form
      {name:'email',type:'text',property:'required'},   //second field for the form
      {name:'mobile',type:'number',property:'required'}   //another field for the form
      ]
  });
});


router.get("/projects",(req, res, next)=>{
  res.render("projects", { title: "Project"})
});

module.exports = router;
