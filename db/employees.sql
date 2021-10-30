SELECT 
    employee.id AS employeeId,
    employee.first_name AS firstName,
    employee.last_name AS lastName,
    role.title AS jobTitle,
    department.name AS department,
    role.salary AS salary,
    employee.manager_id AS manager
FROM employee
JOIN role
    ON employee.role_id = role.id
JOIN department
    ON role.department_id = department.id

ORDER BY employee.id;