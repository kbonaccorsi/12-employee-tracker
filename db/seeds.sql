USE team_db;

INSERT INTO department (id, name)
VALUES
    (1, "department1"),
    (2, "department2"),
    (3, "department3");

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "firstone", "lastone", 111, 1),
    (2, "firsttwo", "lasttwo", 121, 2),
    (3, "firstthree", "lastthree", 131, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES
    (111, "titleone", 111.11, 1),
    (121, "titletwo", 222.22, 2),
    (131, "titlethree", 333.33, 3);


SELECT * FROM department;
SELECT * FROM employee;
SELECT * FROM role;
