ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '(your password)';
flush privileges;
//-----------------------------------------------------------------------
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
Select * FROM USERS;
Select * FROM feedbacks;

DROP TABLE USERS;
DROP TABLE feedbacks;
