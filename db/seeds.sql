USE team_db;

INSERT INTO department (id, name)
VALUES
    (1, "department1"),
    (2, "department2"),
    (3, "department3");

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "firstone", "lastone", 11, 111),
    (2, "firsttwo", "lasttwo", 22, 222),
    (3, "firstthree", "lastthree", 33, 333);

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, "titleone", 111.11, 11),
    (2, "titletwo", 222.22, 22),
    (3, "titlethree", 333.33, 33);


SELECT * FROM department;
SELECT * FROM employee;
SELECT * FROM role;
