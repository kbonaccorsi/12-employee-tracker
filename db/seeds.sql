USE team_db;

INSERT INTO department (id, name)
VALUES
    (1, "name"),
    (2, "name"),
    (3, "name");


INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, "title", 111.11, 11),
    (2, "title", 222.22, 22),
    (3, "title", 333.33, 33);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "first", "last", 11, 111),
    (2, "first", "last", 22, 222),
    (3, "first", "last", 33, 333);