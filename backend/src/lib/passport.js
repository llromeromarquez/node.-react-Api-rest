const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const pool = require("../database");
const helpers = require("./helpers");


passport.use("local.signin", new LocalStrategy({

    usernameField: "nombreus",
    passwordField: "clave",
    passReqToCallback: true

    }, async (req, nombreus, clave, done) => {
        console.log (nombreus);
        const rows = await pool.query("SELECT * FROM usuarios WHERE nombreus = ?", [nombreus]);
        if (rows.length > 0) {
            const usuario = rows[0];
            const valClave = await helpers.matchPassword(clave, usuario.clave);
            if (valClave) {
                done(null, usuario);
          
            } else {
            
                done(null, false);
                
            }
        } else {

            return done(null, false);

        }
        
    }  
) ); 
   
passport.use("local.signup", new LocalStrategy({
    usernameField: "nombreus",
    passwordField: "clave",
    passReqToCallback: true
}, async (req, nombreus, clave, done) => {
    const {nombre} = req.body;
    const newusuario = {
        nombreus,
        clave,
        nombre       
    };
    newusuario.clave = await helpers.encryptPassword(clave);
    const result = await pool.query("INSERT INTO usuarios SET ?", [newusuario]);
    newusuario.id = result.insertId;
   
    return done(null, newusuario);
}));


passport.serializeUser((user, done) => {
    
    done(null, user.id);
}); 

passport.deserializeUser( async(id, done) => {
    const rows = await pool.query("SELECT * FROM usuarios WHERE id = ?", [id]);
   
    done(null, rows[0]);

});

