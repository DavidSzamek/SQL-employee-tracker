// Dependencies 

const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");
const express = require("express");
const { connect } = require("http2");

// createConnection() metho to link Node.js and MySQL 
const db = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: " ",
    database: "employeeTracker_db",
});

db.connect(function (err) {
    if (err) throw err;
    console.log(`
    ╔═══╗     ╔╗              ╔═╗╔═╗
    ║╔══╝     ║║              ║║╚╝║║
    ║╚══╦╗╔╦══╣║╔══╦╗ ╔╦══╦══╗║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
    ║╔══╣╚╝║╔╗║║║╔╗║║ ║║║═╣║═╣║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
    ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
    ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
           ║║      ╔═╝║                     ╔═╝║
           ╚╝      ╚══╝                     ╚══╝`)
    startTracker();
});

// startTracker app & inquirer prompt

function startTracker() {
  inquirer
    .prompt({
        type: "list",
        name: "menu", 
        message: "What would you like to do?", 
        choices: [
            "View All Employees",
            "Add Employee", 
            "Update Employee Role", 
            "View All Roles",
            "Add Role", 
            "View All Departments",
            "Add Department", 
            "Quit",
        ]
    })
    .then(function (answer) {
        // Switch statement to select one of the code blocks to be executed
        switch (answer.menu) {
            case "View All Employees":
                viewAllEmployees();
            // break to exit the switch block
            break;

            case "Add Employee":
                addEmployee();
            break;

            case "Update Employee Role":
                updateEmployeeRole();
            break;

            case "View All Roles":
                viewAllRoles();
            break;

            case "Add Role":
                addRole();
            break;

            case "View All Departments":
                viewAllDepartments();
            break;

            case "Add Department":
                addDepartment();
            break;

            // Ends the Employee Tracker Application
            case "Quit":
                db.end();
            break;

        }
    });
};

// Query Functions

// View All Employees
function viewAllEmployees() {
    const query = "SELECT employee.id, employee.first_name, employe.last_name, role.title, department.department_name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id";
    db.query(query, function (err, res) {
        console.table(res);
        startTracker();
    });
}

// Add Employee 
function addEmployee() {
    inquirer
        .prompt([
            {
               type: "input",
               name: "firstName",
               message: "Please enter the employee's first name.", 
            }, 
            {
                type: "input",
                name: "lastName",
                message: "Please enter the employee's last name.", 
             }, 
             {
                type: "input",
                name: "addEmployeeRoleId",
                message: "Please enter the employee's role ID.", 
             }, 
             {
                type: "input",
                name: "addEmployeeManagerId",
                message: "Please enter the employee's manager ID", 
             }, 
        ])
        .then(function (res) {
            const firstName = res.firstName;
            const lastName = res.firstName;
            const employeeRoleId = res.addEmployeeRoleId; 
            const employeeManagerId = res.addEmployeeManagerId;
            const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}, "${employeeRoleId}", "${employeeManagerId}")`;
            db.query(query, function (err, res) {
                if (err) {
                    throw err;
                }
                console.table(res);
                startTracker();
            });
        }) ;
}

// Update Employee
function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "updateEmployee",
                message: "Please enter the ID of the employee you want to be updated.", 
             }, 
             {
                type: "input",
                name: "newRole",
                message: "Please enter the ID of the new role for that employee.", 
             }, 
        ])
        .then(function (res) {
            const updateEmployee = res.updateEmployee;
            const newRole = res.newRole;
            const queryUpdate = `UPDATE employee SET role_id = "${newRole}" where id = "${updateEmployee}"`;
            db.query(queryUpdate, function (err, res) {
                if (err) {
                    throw err;
                }
                console.table(res);
                startTracker();
            });
        });
}

// View All Roles 
function viewAllRoles() {
    const query = "SELECT * FROM role"
    db.query(query, function (err, res){
        console.table(res);
        startTracker();
    })
}

// Add Role

function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "titleRole",
                message: "Please enter the employee's title",
            },
            {
                type: "input",
                name: "salaryRole",
                message: "Please enter the employee's salary",
            },
            {
                type: "input",
                name: "departmentRole",
                message: "Please enter the employee's department ID",
            }
        ])
        .then(function (res) {
            const title = res.titleRole; 
            const salary = res.salaryRole;
            const departmentID = res.departmentRole;
            const query = `INSET INTO role (title, salary, department_id) VALUES ("${title}", "${salary}", "${departmentID}")`;
            db.query(query, function (err, res) { 
                if (err) {
                    throw err;
                }
                console.table(res);
                startTracker();
            });
        });
}

// View All Departments 

function viewAllDepartments() {
    const query = "SELECT * FROM department";
    db.query(query, function (err, res) {
      console.table(res);
      startTracker();
    });
  }