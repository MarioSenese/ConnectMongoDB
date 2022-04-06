const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes');

const app = express();

app.use(express.json());

const username = ["USERNAME"];
const password = ["PASSWORD"];
const cluster = ["CLUSTER"];
const dbname = ["DATABASE"];

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.6geg3.mongodb.net/${dbname}?retryWrites=true&w=majority`);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Connected succesfully")
});

app.use(Router);

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})