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

inquirer
.prompt ([
    {},
]);
.then()
