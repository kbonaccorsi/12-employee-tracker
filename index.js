//npm packages
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const cTable = require('console.table');


//connects to database
const db = mysql2.createConnection(
    {
        host: 'localhost',
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

//menu of options user can do
function initialPrompting() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
        }
    ])
        .then((response) => {
            switch (response.action) {
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

//allows user to view all departments
function viewDepartments() {
    db.connect(function (err) {
        if (err) throw err;
        console.log('~~~~~~~~~~~~~~~~~~~');
        let sql = 'SELECT * FROM department';
        db.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.table(result);
            initialPrompting();
        });
    });
};

//allows user to view table of all roles
function viewRoles() {
    db.connect(function (err) {
        if (err) throw err;
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        let sql = 'SELECT role.title AS jobTitle, role.id AS roleId, department.name AS department,role.salary AS salary FROM role JOIN department ON role.department_id = department.id ORDER BY role.title;';
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.table(result);
            initialPrompting();
        });
    });
};

//allows user to view table of all employees
function viewEmployees() {
    db.connect(function (err) {
        if (err) throw err;
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        let sql = 'SELECT e.id AS Id, e.first_name AS firstName, e.last_name AS lastName, role.title AS job, department.name AS department, role.salary AS salary, m.first_name AS mFirstName, m.last_name AS mLastName FROM employee e JOIN role ON e.role_id = role.id JOIN department ON role.department_id = department.id INNER JOIN employee m ON m.id =e.manager_id ORDER BY e.id;';
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.table(result);
            initialPrompting();
        });
    });
};


//adds a new department to the department table
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What is the name of the department you would like to add?'
        }
    ])
        .then((response) => {
            db.connect(function (err) {
                if (err) throw err;
                console.log('Connected!');
                let sql = `INSERT INTO department (name) VALUES ( '${response.department}')`;
                db.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("department added!, id: " + result.insertId);
                    initialPrompting();
                });
            });
        });
};


function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'What is the name of the role you would like to add?'
        },
        {
            type: 'number',
            name: 'salary',
            message: "What is the salary for this role?"
        },
        {
            type: 'list',
            name: 'department',
            choices: 'SELECT department.name'
        }
    ])
    .then((response) => {
        db.connect(function (err) {
            if (err) throw err;
            console.log('Connected!');
            let sql = `INSERT INTO role (title, salary, department_id) VALUES ('${response.role}', '${response.salary}', '${response.department}')`;
            db.query(sql, function(err, result) {
                if (err) throw err;
                console.log("role added")
            })
        })
    })

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