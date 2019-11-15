var express = require('express');
var Employee = require('../models/employee');

var router = express.Router();

router.get('/', function (req, res) {
  Employee.retrieveAll(function (err, employee) {
    if (err)
      return res.json(err);
    return res.json(employee);
  });
});


router.post('/', function (req, res) {
  var employee = req.body.employee;

  Employee.insert(employee, function (err, results) {
    if (err)
      return res.json(err);
    return res.json(results);
  });
});

module.exports = router;
