-- DATABASE CREATION
CREATE DATABASE dsrocketflow;
USE dsrocketflow;

-- TABLES CREATION
CREATE TABLE users (
	user_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE files (
	file_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    file TEXT NOT NULL, 
    type VARCHAR(255) NOT NULL,
    file_datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    PRIMARY KEY (file_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE links (
	link_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    link_datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    PRIMARY KEY (link_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE notes (
	note_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    note_datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    PRIMARY KEY (note_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- VIEWS CREATION
CREATE VIEW files_view AS
	SELECT 
		files.file_id AS file_id,
		files.name AS name,
        files.file AS file,
		files.type AS type,
		files.file_datetime AS file_datetime,
		files.user_id AS user_id,
		CONCAT(users.name, ' ', users.last_name) AS owner
	FROM
		files
			INNER JOIN
		users ON files.user_id = users.user_id;

CREATE VIEW links_view AS
    SELECT 
        links.link_id AS link_id,
        links.title AS title,
        links.address AS address,
        links.link_datetime AS link_datetime,
        links.user_id AS user_id,
        CONCAT(users.name, ' ', users.last_name) AS owner
    FROM
        links
            INNER JOIN
        users ON links.user_id = users.user_id;

CREATE VIEW notes_view AS
    SELECT 
        notes.note_id AS note_id,
        notes.title AS title,
        notes.body AS body,
        notes.note_datetime AS note_datetime,
        notes.user_id AS user_id,
        CONCAT(users.name, ' ', users.last_name) AS owner
    FROM
        notes
            INNER JOIN
        users ON notes.user_id = users.user_id;
