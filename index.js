const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const cTable = require('console.table');
const Query = require('mysql2/typings/mysql/lib/protocol/sequences/Query');

const db = mysql2.createConnection(
    {
        host:'localhost',
        user: 'root',
        password: 'root',
        database: 'team_db'
    },
    console.log('Connected to the team_db database.')
);



//begins the process, and gives users the first prompt
function init() {
    initialPrompting();
}

function initialPrompting() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: ['view all departments', 'view all roles','view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
        }
    ])
    .then((response) => {
        switch(response.action) {
            case ('view all departments'): viewDepartments()
                break;
            case ('view all roles'): viewRoles()
                break;
            case ('view all employees'): viewEmployees()
                break;
            case ('add a department'): addDepartment()
                break;
            case ('add a role'): addRole()
                break;
            case ('add an employee'): addEmployee()
                break;
            case ('update an employee role'): updateEmployee()
                break;
            default:
        }
    });
};

// function viewDepartments() {
//     -DESCRIBE departments
//     -shows formatted table with department names and department ids
//const table = cTable.getTable([departments.sql])
// };

// function viewRoles() {
//     -DESCRIBE roles
//     -shows job title, role id, the department that role belongs to, and the salary for that role
//const table = cTable.getTable([roles.sql])
// };

// function viewEmployees() {
//     DESCRIBE employees
//     -shows employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
//const table = cTable.getTable([employees.sql])
// };

// function addDepartment() {
//     .prompt
//     -enter the name of the department 
// .then
//     -add that department to the database
//          -db.query(insert_department.sql)
// };

// function addRole() {
//     .prompt
//     -enter the name
//     -enter the salary
//     -enter the department for the role
// .then
//     -add that role to the database
//          -db.query(insert_role.sql)
// };

// function addEmployee() {
//     .prompt
//     -enter the employee’s first name
//     -enter the employee's last name
//     -enter the employee's role
//     -enter the manager who will oversee the employee
// .then
//     -add employee to the database
//          -db.query(insert_employee.sql)
// };

// function updateEmployee() {
//     .prompt
//     -select an employee to update (list)
//     -update the employee's role
// .then
//     -information is updated in the database
//          -db.query(update_employee.sql) 
// };


init()