create table staffs
(
    id int not null auto_increment,
    name varchar(255),
    age date,
    weight int,
    height int,
    earn int,
    address varchar(255),
    passport varchar(255),
    born varchar(255),
    description text,
    notes text,
    primary key (id)
);