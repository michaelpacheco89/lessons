-- Create the database task_saver_db and specified it for use.
CREATE DATABASE wishesdb;
USE wishesdb;

-- Create the table tasks.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wishes varchar(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO wishes(wishes)
VALUES("world peace"),
      ("end world hunger");
