-- Deletes existing database if exists -- 
DROP DATABASE IF EXISTS employeeTracker_db;

-- Creates the 'employeeTracker_db' database -- 
CREATE DATABASE employeeTracker_db;

-- Use 'employeeTracker_db'so that all following code will affect it
USE employeeTracker_db;

CREATE TABLE employee (
    id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL, 
    manager_id INT NOT NULL, 
    PRIMARY KEY (id)
);

CREATE TABLE department (
    id INT NOT NULL auto_increment, 
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL auto_increment,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(8, 2) NOT NULL, 
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);