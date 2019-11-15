const db = require('../database');


class Employee {
  static retrieveAll(callback) {
    db.query('SELECT employee_name from employee', function (err, res) {
      if (err.error)
        return callback(err);
      callback(res);
    });

  }
  static insert(employee, callback) {
    db.query('INSERT INTO employee(employee_name)VALUES ($1)', [employee], function (err, res) {
      if (err.error)
        return callback(err);
      callback(res);
    });

  }
}
module.exports = Employee;
