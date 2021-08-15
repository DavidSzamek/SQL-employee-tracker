// === Dependencies === // 

const inquirer = require("inquirer");
const mysql = require("mysql");
const express = require("express");

// === createConnection() metho to link Node.js and MySQL === // 
const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: " ",
    database: "employeeTracker_db",
})