const express = require("express");
// const { database } = require("../config");
const router = express.Router();
const pool = require("../database");
const { verifyToken } = require("../lib/token");


router.post("/add", verifyToken, async(req, res) => {
   
    const { titulo, url, descripcion } = req.body;
    const nuevoEnlace = {
        titulo,
        url,
        descripcion,
        us_id: req.userId
    };
    const rest = await pool.query("INSERT INTO enlaces set ?", [nuevoEnlace]);
    
    res.json(rest);
  //  res.redirect("/links");
}); 

router.delete("/delete/:id", verifyToken, async(req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM enlaces WHERE id = ?", [id]);
    res.send("delete");
   
});

router.put("/edit/:id", verifyToken, async(req, res) =>{
    const  {id}  = req.params;
    const {titulo, url, descripcion} = req.body;
    newEnlace = {
        titulo,
        url,
        descripcion
    }; 
    await pool.query("UPDATE enlaces set ? WHERE id = ?", [newEnlace, id]);
    res.send("item actualizado");
});


router.get("/", verifyToken, async(req, res) => {
      const enlace = await pool.query("SELECT * FROM enlaces WHERE us_id = ?", [req.userId]);
    res.send(enlace);
});

module.exports = router;