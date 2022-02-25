const express =  require("express");
const morgan = require("morgan");
const path = require("path");
const passport = require("passport");
const { database, PORT } = require('./config');
const cors = require("cors");



// Inicializacion
const app = express();
require("./lib/passport");


// Configuracion
app.set("port", PORT || 4000);


// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req, res, next) =>{
     next();
});


app.use(passport.initialize());

// Variables Globales 


 app.use(cors());
// Rutas
app.use(require("./routes/index"));
app.use(require("./routes/authentication"));
app.use(require("./routes/links"));

app.use("/links", require("./routes/links"));

 
 // Publico
 app.use(express.static(path.join(__dirname, "public")));

// Arranque del Servidor
app.listen(app.get("port"), ()=>{
    console.log("Servidor en el puerto",app.get("port"));
   
}); 