-- SHOW TABLES;
--  mysql -u root -p

create TABLE user(
    id varchar(50) primary key,
    user varchar(50) unique,
    emain varchar(50) unique not null,
    password varchar(50) not null
);

