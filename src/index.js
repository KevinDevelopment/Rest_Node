const express = require("express");
const app = express();
require("dotenv/config");
const connection = require("../connection/connection");
const Users = require("../User/model/User");
const SaveUserController = require("../User/controllers/SaveUserController");

//express settings
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//express routes
app.use("/", SaveUserController);

const SERVER = 8080;

app.listen(SERVER, () => {
  console.log(`Servidor rodando na porta ${SERVER}`)
});
