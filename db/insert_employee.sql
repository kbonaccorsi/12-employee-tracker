USE team_db;

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "firstone", "lastone", 11, 2),
    (2, "firsttwo", "lasttwo", 22, 3),
    (3, "firstthree", "lastthree", 33, 1);


SELECT * FROM employee;