// === Dependencies === // 

const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");
const express = require("express");
const { connect } = require("http2");

// === createConnection() metho to link Node.js and MySQL === // 
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