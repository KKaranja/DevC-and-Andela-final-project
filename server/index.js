const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

var db = require("./database");

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 80;

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use("/api/employee", require("./apis/employee"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}..`);
});

db.query("SELECT NOW()", (err, res) => {
  if (err.error) return console.log(err.error);
  console.log(`PostgreSQL connected: ${res[0].now}.`);
});

module.exports = app;
