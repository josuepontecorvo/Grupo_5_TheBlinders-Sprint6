-- table: Colors

insert into Colors values (1, 'Crimson',now(),now());
insert into Colors values (2, 'Aquamarine',now(),now());
insert into Colors values (3, 'Red',now(),now());
insert into Colors values (4, 'Indigo',now(),now());
insert into Colors values (5, 'Crimson',now(),now());
insert into Colors values (6, 'Mauv',now(),now());
insert into Colors values (7, 'Red',now(),now());
insert into Colors values (8, 'Teal',now(),now());
insert into Colors values (9, 'Yellow',now(),now());
insert into Colors values (10, 'Purple',now(),now());
insert into Colors values (11, 'Fuscia',now(),now());
insert into Colors values (12, 'Purple',now(),now());
insert into Colors values (13, 'Red',now(),now());
insert into Colors values (14, 'Violet',now(),now());
insert into Colors values (15, 'Green',now(),now());
insert into Colors values (16, 'Khaki',now(),now());
insert into Colors values (17, 'Puce',now(),now());
insert into Colors values (18, 'Blue',now(),now());
insert into Colors values (19, 'Maroon',now(),now());
insert into Colors values (20, 'Khaki',now(),now());

-- table: Brakes

insert into Brakes values (1, 'disco mecánico',now(),now());
insert into Brakes values (2, 'disco hidráulico',now(),now());

-- table: Brands

insert into Brands values (1, 'Olmo',now(),now());
insert into Brands values (2, 'Venzo',now(),now());
insert into Brands values (3, 'Spy',now(),now());
insert into Brands values (4, 'Teknial',now(),now());
insert into Brands values (5, 'Merida',now(),now());
insert into Brands values (6, 'Topmega',now(),now());
insert into Brands values (7, 'Cannondale',now(),now());
insert into Brands values (8, 'Specialized',now(),now());
insert into Brands values (9, 'KTM',now(),now());
insert into Brands values (10, 'Raleigh',now(),now());
insert into Brands values (11, 'Polygon',now(),now());
insert into Brands values (12, 'BBB',now(),now());
insert into Brands values (13, 'Lazer',now(),now());
insert into Brands values (14, 'Bell',now(),now());
insert into Brands values (15, 'Super B',now(),now());
insert into Brands values (16, 'Van Halen',now(),now());
insert into Brands values (17, 'Shimano',now(),now());
insert into Brands values (18, 'Speedtrap',now(),now());
insert into Brands values (19, 'GT Race',now(),now());

-- table: Categories

insert into Categories values (1, 'Bicicletas',now(),now());
insert into Categories values (2, 'Accesorios',now(),now());


-- table: Frames

insert into Frames values (1, 'Aluminio',now(),now());
insert into Frames values (2, 'Carbono',now(),now());

-- table: Shifts

insert into Shifts values (1, 16,now(),now());
insert into Shifts values (2, 18,now(),now());
insert into Shifts values (3, 20,now(),now());
insert into Shifts values (4, 21,now(),now());
insert into Shifts values (5, 22,now(),now());
insert into Shifts values (6, 24,now(),now());
insert into Shifts values (7, 27,now(),now());

-- table: Sized

insert into Sizes (id, name, createdAt, updatedAt) values (1, 'XL', '2021/11/13', '2021/10/04');
insert into Sizes (id, name, createdAt, updatedAt) values (2, 'L', '2022/01/17', '2022/01/19');
insert into Sizes (id, name, createdAt, updatedAt) values (3, 'M', '2022/08/08', '2022/05/05');
insert into Sizes (id, name, createdAt, updatedAt) values (4, 'S', '2022/04/28', '2021/10/02');
insert into Sizes (id, name, createdAt, updatedAt) values (5, 'XS', '2021/10/25', '2022/09/03');

-- table: Suspensions

insert into Suspensions values (1, "Rígida", now(), now());
insert into Suspensions values (2, "Loops", now(), now());
insert into Suspensions values (3, "Con bloqueo y regulacion", now(), now());

-- table: Types 

insert into Types values (1, "MTB", now(), now());
insert into Types values (2, "RUTA", now(), now());
insert into Types values (3, "casco", now(), now());
insert into Types values (4, "herramientas", now(), now());
insert into Types values (5, "varios", now(), now());

-- table: WheelSizes

insert into WheelSizes values (1, 26,now(),now());
insert into WheelSizes values (2, 27.5,now(),now());
insert into WheelSizes values (3, 28,now(),now());
insert into WheelSizes values (4, 29,now(),now());

-- table: Roles

insert into Roles values (1, "admin",now(),now());
insert into Roles values (2, "user",now(),now());

-- table Users

insert into Users (id, firstName, lastName, birthdate, email, password, image, roleId, createdAt, updatedAt) values (1, 'Charisse', 'Theurer', '1958/05/20', 'ctheurer0@omniture.com', '$2a$10$cfOb5YfUJiXXj2ue3na2JOACe0sZ.iSJqryYFA8i5RTrrB8MbFXhm', 'default-user.png', 2, now(), now());
insert into Users (id, firstName, lastName, birthdate, email, password, image, roleId, createdAt, updatedAt) values (2, 'Kendricks', 'Mazzei', '1976/02/24', 'kmazzei1@cafepress.com', '$2a$10$cfOb5YfUJiXXj2ue3na2JOACe0sZ.iSJqryYFA8i5RTrrB8MbFXhm', 'avatar-woman.png', 2, now(), now());
insert into Users (id, firstName, lastName, birthdate, email, password, image, roleId, createdAt, updatedAt) values (3, 'Aura', 'Ewbanks', '1991/03/21', 'aewbanks2@state.gov', '$2a$10$cfOb5YfUJiXXj2ue3na2JOACe0sZ.iSJqryYFA8i5RTrrB8MbFXhm', 'avatar-man.png', 2,now(), now());
insert into Users (id, firstName, lastName, birthdate, email, password, image, roleId, createdAt, updatedAt) values (4, 'Chantalle', 'McCracken', '1977/04/26', 'cmccracken3@chronoengine.com', '$2a$10$cfOb5YfUJiXXj2ue3na2JOACe0sZ.iSJqryYFA8i5RTrrB8MbFXhm', 'default-user.png', 2, now(), now());
insert into Users (id, firstName, lastName, birthdate, email, password, image, roleId, createdAt, updatedAt) values (5, 'Equipo', 'Grupo5', '2022/05/01', 'grupo5@mail.com', '$2a$10$.cuh0.8fmihboRLuU9EkkOhyRMG8tXNa3tilz8Uf8of0mFBeaEzU.', "userGrupo5.jpg", 2, now(), now());
insert into Users (id, firstName, lastName, birthdate, email, password, image, roleId, createdAt, updatedAt) values (6, 'Di', 'Tither', '1967/12/14', 'dtither4@amazon.de', '$2a$10$cfOb5YfUJiXXj2ue3na2JOACe0sZ.iSJqryYFA8i5RTrrB8MbFXhm', 'avatar-woman.png', 2, now(), now());
insert into Users (id, firstName, lastName, birthdate, email, password, image, roleId, createdAt, updatedAt) values (7, 'Admin', 'Admin', '1967/12/14', 'admin@mail.com', '$2a$10$cfOb5YfUJiXXj2ue3na2JOACe0sZ.iSJqryYFA8i5RTrrB8MbFXhm', 'user-img-1660144856873.jpg', 1, now(), now());

-- table Products 

insert into Products values (1, "Wish 290 Entry", 59087, 10, null, "BICICLETA MTB RODADO 29 OLMO WISH 290 ENTRY", 1, 1, null, null, null, 1, 1, null, 4, 1, 4, 2, 1, now(), now());
insert into Products values (2, "Frida Diva", 102056, 10, null, "BICICLETA MTB RODADO 29 VENZO FRIDA DIVA", 1, 1, null, null, null, 2, 2, null, 6, 1, 4, 3, 2, now(), now());
insert into Products values (3, "Bullet Disc", 106399, 10, null, "BICICLETA MTB RODADO 29 SPY BULLET DISC", 1, 1, null, null, null, 3, 3, null, 2, 1, 4, 3, 2, now(), now());
insert into Products values (4, "Amphion", 57200, 10, null, "BICICLETA MTB RODADO 27.5 VENZO AMPHION", 1, 1, null, null, null, 4, 2, null, 4, 1, 2, null, 1, now(), now());

-- table Images

insert into Images values (1, "bicicletaRodado29olmoWish1.jpg", 1, now(), now());
insert into Images values (2, "bicicletaRodado29venzoFridaDiva1.jpg", 2, now(), now());
insert into Images values (3, "bicicletaRodado29spyBulletDisc1.jpg", 3, now(), now());
insert into Images values (4, "bicicletaRodado27venzoAmphion1.jpg", 4, now(), now());
