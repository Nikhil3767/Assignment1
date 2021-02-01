var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index', 
      { 
        title: 'Index', name:"nikhil", 
        Github:"https://github.com/Nikhil3767", 
        Linkedin:"https://in.linkedin.com/",
        FaceBook: "https://www.facebook.com/"
      }
  );
});

/* GET About page. */
router.get("/about", (req, res, next)=>{
  res.render("about",  
    { 
      title: "About" ,
      Github:"https://github.com/Nikhil3767", 
      Linkedin:"https://in.linkedin.com/",
      FaceBook: "https://www.facebook.com/"
    }
  );
});

/* GET services page. */
router.get("/services",(req, res, next)=>{
  res.render("services", 
    { 
      title: "Services",
      Github:"https://github.com/Nikhil3767", 
      Linkedin:"https://in.linkedin.com/",
      FaceBook: "https://www.facebook.com/"
    
    }
  )
});

/* GET contact page. */
router.get("/contact",(req, res, next)=>{
  res.render("contact", 
  { 
    title: "Contact",
    action: "/thankyou", //post action for the form
    fields: [
      {name:'name',type:'text',property:'required'},    //first field for the form
      {name:'email',type:'text',property:'required'},   //second field for the form
      {name:'mobile',type:'number',property:'required'}   //another field for the form
      ],
      Github:"https://github.com/Nikhil3767", 
      Linkedin:"https://in.linkedin.com/",
      FaceBook: "https://www.facebook.com/"
  });
});

/* GET Projects page. */
router.get("/projects",(req, res, next)=>{
  res.render("projects", 
    { 
      title: "Project",
      Github:"https://github.com/Nikhil3767", 
      Linkedin:"https://in.linkedin.com/",
      FaceBook: "https://www.facebook.com/"
    }
  );
});

module.exports = router;
