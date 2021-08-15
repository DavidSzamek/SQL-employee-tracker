// === Dependencies === // 

const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");
const express = require("express");

// === createConnection() metho to link Node.js and MySQL === // 
const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: " ",
    database: "employeeTracker_db",
});

db.connect(function (err) {
    if (err) throw err;
    mainm
})