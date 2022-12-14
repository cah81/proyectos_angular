INSERT INTO regiones (id, nombre) VALUES (1, "America");
INSERT INTO regiones (id, nombre) VALUES (2, "Europa");
INSERT INTO regiones (id, nombre) VALUES (3, "Asia");
INSERT INTO regiones (id, nombre) VALUES (4, "Africa");
INSERT INTO regiones (id, nombre) VALUES (5, "Oceania");

/* Populate Table Clientes */
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ("Pepe", "Trueno", "ptrueno@gmail.com", "2019-10-10",1);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ("Homero", "Simpson", "homero@gmail.com", "1970-07-10",2);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ("Bart", "Simpson", "elbarto@gmail.com", "1987-08-08",3);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ("Marge", "Simpson", "Marge@gmail.com", "1970-07-10",1);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ("Lisa", "Simpson", "Lisa@gmail.com", "1990-08-08",4);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ("Maggie", "Simpson", "Maggie@gmail.com", "1995-07-10",5);

/* Create Test Users For Spring Security With Oauth and JWT */
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('admin', '$2a$10$RaHCXc8dZi77PV1.ZYGkPuKPPkgjAi3RhGd.bM6WiDXb9UhS/1BEq', 1, "Chuck", "Johnnes", "cj@gmail.com");
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('set', '$2a$10$knT9Man41arrJxgHBW8PXuI7YEtlLf5moPPWW0MHGaFVppiiZejMa', 1, "Bobby", "Rodes", "bbRodes@gmail.com");

INSERT INTO  roles (nombre) VALUES ('ROLE_ADMIN');
INSERT INTO  roles (nombre) VALUES ('ROLE_USER');

INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (1,1)
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (1,2)
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2,2)

/* Populate tabla productos */
INSERT INTO productos (nombre, precio, create_at) VALUES ("Panasonic Pantalla LCD", 259990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES ("Sony Camara", 123490, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES ("Apple IPOD", 1499990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES ("Sony Notebook", 37990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES ("HP Muntifuncion", 359990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES ("Motorola X", 159990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES ("Nintendo Wii", 858990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES ("Equipo Sony 600w", 957770, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES ("LG Ultrawide 34 pulgadas", 656920, NOW());

/* Creamos algunas facturas */
INSERT INTO facturas (descripcion, observacion, cliente_id, create_at) VALUES ("Factura equipos de officina", null, 1, NOW());
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES (1, 1, 1);
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES (2, 1, 4);
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES (1, 1, 5);

INSERT INTO facturas (descripcion, observacion, cliente_id, create_at) VALUES ("Factura Monitor", "Me compre un monitor de 34", 1, NOW());
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES (1, 2, 9);




