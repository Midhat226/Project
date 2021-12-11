ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Midhat123';
flush privileges;

USE transport_project;
CREATE TABLE users ( 
	id int AUTO_INCREMENT,
	user_name varchar(20),
	full_name varchar(20),
	password varchar(128),
    confirm_password varchar(128),
    email_address varchar(100),
	PRIMARY KEY (id)
);
CREATE TABLE feedbacks ( 
	id int AUTO_INCREMENT,
    Name varchar(100),
	Email varchar(100),
	Subject varchar(255),
	Comment varchar(255),
	PRIMARY KEY (id)
);

CREATE TABLE admin ( 
	id int AUTO_INCREMENT,
	password varchar(128),
	PRIMARY KEY (id)
);

INSERT INTO ADMIN (password) VALUES ('Midhat');
INSERT INTO ADMIN (password) VALUES ('Rutba');
INSERT INTO ADMIN (password) VALUES ('Tatheer');

Select * FROM USERS;
Select * FROM feedbacks;
Select * FROM admin;

DROP TABLE USERS;
DROP TABLE feedbacks;
DROP TABLE admin;
