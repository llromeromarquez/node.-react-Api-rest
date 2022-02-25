CREATE DATABASE bdenlaces;
USE bdenlaces;
--! tabla de usuarios
CREATE TABLE usuarios(
    id INT(11) NOT NULL,
    nombreus VARCHAR(16) NOT NULL,
    clave VARCHAR(60) NOT NULL,
    nombre VARCHAR(100) NOT NULL
);

ALTER TABLE usuarios
    ADD PRIMARY KEY (id);

ALTER TABLE usuarios
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

--! tabla enlaces
CREATE TABLE enlaces(
    id INT(11) NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    url VARCHAR(255) NOT NULL,
    descripcion TEXT,
    us_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (us_id) REFERENCES usuarios(id)

);

ALTER TABLE enlaces
    ADD PRIMARY KEY (id);

ALTER TABLE enlaces
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
    
