const express = require("express");
const userModel = require('./models');
const app = express();

/**
 *  ENDPOINT POST
 *  Creazione del percorso per aggiungere un nuovo utente al db.
*/
app.post("/add_user", async (req, res) => {
    
    const user = new userModel(req.body); // analisi contenuto da salvare nel db 

    try {
        await user.save();
        res.send(user);
    } catch(error) {
        res.status(500).send(error);
    }

});

/**
 *  ENDPOINT GET
 *  Creazione del percorso per ottenere tutti gli utenti salvati
*/
app.get("/users", async(req, res) => {

    const users = await userModel.find({}); // find() -> metodo per la raccolta degli utenti dal db

    try {
        res.send(users);
    } catch(error) {
        res.status(500).send(error);
    }

});

/**
 *  Esportiamo tutti gli endpoint definiti
*/ 
module.exports = app;