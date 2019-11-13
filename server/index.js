const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

var db = require('./database');

const ENV = process.env.ENV;
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}....`);
});

db.query('SELECT NOW()', (err, res) => {
  if (err.error)
    return console.log(err.error);
  console.log('PostgreSQL connected: ${res[0].now}.');
})

module.exports = app;
