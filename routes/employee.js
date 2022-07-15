var express = require('express');
var router = express.Router();
var db = require("../connection/db")
var bodyParser = require('body-parser');

// for parsing application/json
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}))

// Get all Employees  
router.get('/getAllEmployees', function(req, res, next) {
  let sql = "SELECT * FROM employees";
  db.query(sql, (err, rows, fields) => {
      if (!err)
          res.send(JSON.stringify({ "status": 200, "error": null, "result": rows }));
      else
          console.log(err);

  })
});

// Get the Employees Data based on Id  
router.get('/getEmployees/:id', (req, res) => {
  let sql = "SELECT * FROM employees WHERE id = "+req.params.id;
  db.query(sql, (err, rows, fields) => {
      if (!err)
          res.send(JSON.stringify({ "status": 200, "result": rows[0] }));
      else
          console.log(err);

  })
});

// Delete the Employees Data based on Id  
router.delete('/deleteEmployees/:id', (req, res) => {
  let sql = "DELETE FROM employees WHERE id = "+req.params.id;
  db.query(sql, (err, rows, fields) => {
      if (!err)
          res.send(JSON.stringify({ "status": 200, "result": "Record Deleted Successfully" }));
      else
          console.log(err);

  })
});

// Insert an Employees
router.post('/insertEmployees', (req, res) => {
  let data = {employee_name: req.body.employee_name, employee_department: req.body.employee_department, employee_salary: req.body.employee_salary};
  let sql = "INSERT INTO employees SET ?";
  db.query(sql,data, function (err, result) {
      if (!err)
          res.send(JSON.stringify({ "status": 200, "result": "Record Inserted Successfully" }));
      else
          console.log(err);
  });
});

// Update an Employees
router.put('/updateEmployees', (req, res) => {
  let sql = "UPDATE employees SET employee_name='"+req.body.employee_name+"', employee_department='"+req.body.employee_department+"', employee_salary='"+req.body.employee_salary+"' WHERE id="+req.body.id;
  db.query(sql, (err, results, fields) => {
      if (!err)
          res.send(JSON.stringify({ "status": 200, "result": "Record Updated Successfully" }));
      else
          console.log(err);
  });
});


/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
