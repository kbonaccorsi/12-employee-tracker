USE team_db;

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "first", "last", 11, 111),
    (2, "first", "last", 22, 222),
    (3, "first", "last", 33, 333);


SELECT * FROM employee;