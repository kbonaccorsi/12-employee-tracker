DROP DATABASE IF EXISTS team_db;
CREATE DATABASE team_db;

USE team_db;


CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE
);


CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);


CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    INDEX role_ind (role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id)
    REFERENCES role(id) ON DELETE CASCADE,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
);


