USE team_db;

INSERT INTO department (id, name)
VALUES
    (1, "Leadership"),
    (2, "Teachers"),
    (3, "Staff");

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, "Principal", 111.11, 1),
    (2, "4th grade", 222.22, 2),
    (3, "Paraprofessional", 333.33, 3);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "Fred", "Flintstone", 1, 1),
    (2, "Barney", "Rubble", 2, 1),
    (3, "Joanne", "Schmo", 3, 1);


