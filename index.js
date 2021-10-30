const inquirer = require('inquirer');
const mysql2 = require('mysql2');

const db = mysql.createConnection(
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
            choices: ['add a department', 'add a role', 'add an employee', 'update an employee role']
        }
    ])
    .then(response) => {
        switch() {
            case(): ()
                break;
            case(): ()
                break;
            default;
        }
    }
}

init()