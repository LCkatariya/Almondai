CREATE DATABASE Almondai;

CREATE TABLE contact(
    contact_id SERIAL PRIMARY KEY,
    name VARCHAR(255),email VARCHAR(255),
    subject VARCHAR(255),message VARCHAR(255)
);