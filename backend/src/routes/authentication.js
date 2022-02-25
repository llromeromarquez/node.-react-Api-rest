const express = require("express");

const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config");


router.post("/registrarse", (req, res, next) =>{
  
  passport.authenticate("local.signup",  (err, user) => {

    if (err) { return next(err); }
      if (!user) { return res.json({auth: false, token: null}) }
       const token = jwt.sign({id:user.id}, config.secret, {
         expiresIn : 60 * 60 * 24
      });

      return res.json({auth: true, token});
  }) (req, res, next);        
   
}); 


router.post("/ingresar", (req, res, next) =>{
  
  passport.authenticate("local.signin",  (err, user, info) => {
    
    if (err) { return next(err); }
    if (!user) { return res.json({auth: false, token: null}) }
    
      req.logIn(user, (err) => {
      if (err) { return next(err); }
   
      const token = jwt.sign({id:user.id}, config.secret, {
        expiresIn : 60 * 60 * 24 
      });

      return res.json({nombre: user.nombre, auth: true, token});
    })        
   
  }) (req, res, next);
});


module.exports = router;