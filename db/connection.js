// GETING THE CLIENT 
const mysql = require("mysql2")

//CREATE THE CONNECTION TO DATABASE
require("dotenv").config()

const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: "nodejs_employee_tracker",
  },
  console.log("connected to the nodejs_employee_tracker database")
)

module.exports = db

