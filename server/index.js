const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "baikal_server",
});

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM baikal_server.ourproject;";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO `baikal_server`.`test` (`value1`, `value2`) VALUES ('test', 'test2@gmail.com');";
  db.query(sqlInsert, (error, result) => {
    console.log("error", error);
    console.log("result", result);
    res.send("hello express");
  });
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
