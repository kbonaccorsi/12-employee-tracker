# 12-employee-tracker

## Description
Build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.


Walkthrough video:
GitHub Repo:

-Need:
    <!-- [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries -->
    <!-- [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line -->
    <!-- [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console -->
    -make queries asynchronous. MySQL2 exposes a `.promise()` function on Connections to upgrade an existing non-Promise connection to use Promises. To learn more and make your queries asynchronous, refer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).
    -separate file that contains functions for performing specific SQL queries
        -A constructor function or class could be helpful for organizing these
    <!-- -seeds.sql -->
    <!-- -query.sql -->
    <!-- -schema.sql -->
        -DROP DATABASE IF EXISTS employees
        -CREATE DATABASE employees

        -CREATE TABLES
            -table department
                * `id`: `INT 
                * `name`: `VARCHAR(30)` to hold department name
                *PRIMARY KEY`(id)

            -table role
                * `id`: `INT`
                * `title`: `VARCHAR(30)` to hold role title
                * `salary`: `DECIMAL` to hold role salary
                * `department_id`: `INT` to hold reference to department role belongs to
                -primary key (id)
                -foreign key ?

            -table employees
                * `id`: `INT PRIMARY KEY`
                * `first_name`: `VARCHAR(30)` to hold employee first name
                * `last_name`: `VARCHAR(30)` to hold employee last name
                * `role_id`: `INT` to hold reference to employee role
                * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)-id
                -primary key (id)
                -foreign key ?
        JOIN commands: at least 3 (lesson 26)

    - command-line application accepts user input
        - start node index.js
            - .prompt {
                -view all departments
                -view all roles
                -view all employees
                -add a department
                -add a role
                -add an employee
                -update an employee role
                    -will need to have an id attached to access specific employee

- view all departments
    -DESCRIBE departments
        -shows formatted table with department names and department ids

-view all roles
    -DESCRIBE roles
        -shows job title, role id, the department that role belongs to, and the salary for that role

-view all employees
    DESCRIBE employees
        -shows employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

-add a department
    .prompt
        -enter the name of the department 
    .then
        -add that department to the database

-add a role
    .prompt
        -enter the name
        -enter the salary
        -enter the department for the role
    .then
        -add that role to the database

-add an employee
    .prompt
        -enter the employee’s first name
        -enter the employee's last name
        -enter the employee's role
        -enter the manager who will oversee the employee
    .then
        -add employee to the database

-update an employee role
    .prompt
        -select an employee to update (list)
        -update the employee's role
    .then
        -information is updated in the database 



## Bonus

Try to add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.




* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.
