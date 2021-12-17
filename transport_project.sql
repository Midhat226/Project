ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';
flush privileges;


use transport_project;

CREATE TABLE admin (
    password VARCHAR(100) primary key not null
);

CREATE TABLE cars (
    type      VARCHAR(100) NOT NULL,
    commision int NOT NULL
);

ALTER TABLE cars ADD CONSTRAINT cars_pk PRIMARY KEY ( type );

CREATE TABLE driver (
    cnic      bigint primary key NOT NULL,
    name      VARCHAR(100) NOT NULL,
    address   VARCHAR(255),
    contact   bigint NOT NULL,
    cars_type VARCHAR(100) NOT NULL
);


ALTER TABLE driver
    ADD CONSTRAINT driver_cars_fk FOREIGN KEY ( cars_type )
        REFERENCES cars ( type );
        
        
CREATE UNIQUE INDEX driver__idx ON
    driver (
        cars_type
    ASC );
    
CREATE TABLE User (
    name      VARCHAR(100) NOT NULL,
    contact   bigint NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    password  VARCHAR(255) NOT NULL,
    institute VARCHAR(100) NOT NULL
);
ALTER TABLE User ADD CONSTRAINT user_pk PRIMARY KEY (user_name );


CREATE TABLE ride_history (
    ride_id        int auto_increment primary key NOT NULL,
    date         DATE NOT NULL,
    time           LONGTEXT NOT NULL,
    pickup         VARCHAR(255) NOT NULL,
    dropoff        VARCHAR(255) NOT NULL,
    rating         int,
    status         VARCHAR(100),
    type           VARCHAR(100) NOT NULL,
    user_user_name VARCHAR(100) NOT NULL
);
ALTER TABLE ride_history
    ADD CONSTRAINT ride_history_user_fk FOREIGN KEY (user_user_name )
        REFERENCES User (user_name );
                            
                            
CREATE TABLE driver_history (
    date                      DATE NOT NULL,
    time                        LONGTEXT NOT NULL,
    pickup                      VARCHAR(255) NOT NULL,
    dropoff                     VARCHAR(255) NOT NULL,
    rating                      int,
    driver_cnic                 bigint NOT NULL,
    ride_history_ride_id        int auto_increment primary key NOT NULL,
    ride_history_status         VARCHAR(100) NOT NULL,
    ride_history_user_user_name VARCHAR(100) NOT NULL
);

CREATE UNIQUE INDEX driver_history__idx ON
    driver_history (
        ride_history_ride_id
    ASC,
        ride_history_status
    ASC,
        ride_history_user_user_name
    ASC );

ALTER TABLE driver_history
    ADD CONSTRAINT driver_history_driver_fk FOREIGN KEY ( driver_cnic)
        REFERENCES driver ( cnic);

ALTER TABLE driver_history
    ADD CONSTRAINT driver_history_ride_history_fk FOREIGN KEY ( ride_history_ride_id)
        REFERENCES ride_history ( ride_id );

CREATE TABLE feedbacks ( 
	Name varchar(100),
	Email varchar(100),
	Subject varchar(255),
	Comment varchar(255)
);
                            
                            
INSERT INTO ADMIN (password) VALUES ('Rutba');
INSERT INTO ADMIN (password) VALUES('Tatheer');
INSERT INTO ADMIN (password) VALUES ('Midhat');


INSERT INTO cars (type,commision) VALUES ('First Class',0.75);
INSERT INTO cars (type,commision) VALUES ('Economy Class',0.25);
INSERT INTO cars (type,commision) VALUES ('Business Class' , 0.5 );

INSERT INTO driver VALUES ('4210197431394','rutba asghari','islamabad',03360022510,'Economy Class' );
INSERT INTO driver VALUES ('4210197431325','midhat karim','karachi',03232174357,'Business Class' );
INSERT INTO driver VALUES ('4210197431237','tatheer fatima','gujrat',03342889638,'First Class Class' );

INSERT INTO user VALUES ('rutba',03360022510,'rutba','rutba','FAST NU' );
INSERT INTO user VALUES ('midhat',03342889638,'midhat','midhat','FAST NU' );
INSERT INTO user VALUES ('tatheer',03232174357,'tatheer','heer','FAST NU' );

INSERT INTO ride_history (date,time,pickup,dropoff,rating,status,type,user_user_name)
 VALUES ('13-12-21','00:11:12','karachi','islamabad',1,'completed','Economy Class','rutba' );
 
INSERT INTO ride_history (date,time,pickup,dropoff,rating,status,type,user_user_name)
 VALUES ('11-12-21','00:12:13','karachi','multan',1,'cancelled','Business Class','midhat' );
 
 INSERT INTO ride_history (date,time,pickup,dropoff,rating,status,type,user_user_name)
 VALUES ('12-12-21','00:10:12','lahore','hyderabad',1,'completed','First Class','tatheer' );




SET FOREIGN_KEY_CHECKS=0;
SET GLOBAL FOREIGN_KEY_CHECKS=0;
INSERT INTO driver_history (date,time,pickup,dropoff,rating,driver_cnic,ride_history_ride_id,
ride_history_status,ride_history_user_user_name)
 VALUES ('13-12-21','00:11:12','karachi','islamabad',1,'4210197431394',1,'completed','rutba');

INSERT INTO driver_history (date,time,pickup,dropoff,rating,driver_cnic,ride_history_ride_id,
ride_history_status,ride_history_user_user_name)
 VALUES ('11-12-21','00:12:13','karachi','multan',1,'4210197431325',2,'cancelled','midhat');

INSERT INTO driver_history (date,time,pickup,dropoff,rating,driver_cnic,ride_history_ride_id,
ride_history_status,ride_history_user_user_name)
 VALUES ('12-12-21','00:10:12','lahore','hyderabad',1,'4210197431237',3,'completed','heer');



select *from admin;
select *from cars;
select *from driver;
select *from user;
select *from ride_history;
select *from driver_history;
select *from feedbacks;

DROP TABLE admin;
DROP TABLE Cars;
DROP TABLE user;
DROP TABLE driver;
DROP TABLE ride_history;
DROP TABLE driver_history;
drop table feedbacks;
