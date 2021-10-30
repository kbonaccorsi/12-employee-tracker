SELECT 
    role.title AS jobTitle,
    role.id AS roleId,
    department.name AS department,
    role.salary AS salary
FROM role
JOIN department
    ON role.department_id = department.id
ORDER BY role.title;