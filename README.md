# 12 SQL: Employee Tracker

## Description

This application creates an interface that allows non-developers to easily view and interact with information stored in databases using a command-line application built using Node.js, Inquirer, and MySQL. These interfaces are called **content management systems (CMS)**.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Installation

To install this application locally, you must; 

1. Clone this repository 

2. Then, in the command line, run npm install, npm install inquirer, npm init, npm install mysql, npm console.table to install the required modules/packages. 


## Run

To run this application, you must; 

1. Set up the database using MySQL. 

        mysql -u root -p 

        SOURCE db/schema.sql 

        SOURCE db/seed.sql

        exit

2. Run node index.js

## Functionality



## Instructions 

'View All Employees' will print all current employees in a table. 

'Add Employee' allows the user to add a new employee to the existing database. 

'Update Employee' allows the user to update an existing employee. 

'View All Roles' will print all current roles to a table. Seed data:[Sales Lead, Salesperson, Lead Engineer, Software Engineer, Account Manager, Accountant, Legal Team Lead & Lawyer]. 

'Add Role' allows the user to add a new role to the database above. 

'View All Departments' will print all current departments in a table. Seed data:[Sales, Engineering, Finance & Legal]

'Add Department' will allow the user to add a new department to the database above. 

'Quit' will terminate the application. 

## Dependencies 

You’ll need to use the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries, the [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line, and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

