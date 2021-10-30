SELECT 
    role.title AS job title, department.name AS department
FROM role
JOIN department ON role.department_id = department.id;


SELECT 
    employee.first_name AS employee first name, employee.last_name AS employee last name, role.title AS job title
FROM employee
JOIN role ON employee.role_id = role.id;


SELECT 
    employee.first_name AS employee first name, employee.last_name AS employee last name, employee   
FROM employee
JOIN employee ON employee.manager_id = employee.id;


