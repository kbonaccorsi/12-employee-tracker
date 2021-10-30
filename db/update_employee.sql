USE team_db;

UPDATE employee
SET role_id = '14'
WHERE id = 1;


SOURCE db/schema.sql
SELECT * FROM employee;