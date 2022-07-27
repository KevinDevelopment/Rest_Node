const Sequelize = require("sequelize");
require("dotenv").config();
const connection = new Sequelize('Users', 'kevin', '12345', {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

connection.authenticate().then(() => {
  console.log("connection successfully established");
}).catch((erro) => {
  console.log(`Sorry, there was an error ${erro}`)
});

module.exports = connection;