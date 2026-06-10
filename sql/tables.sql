-- Typed table
CREATE TABLE typed (
    id SERIAL NOT NULL PRIMARY KEY,
    phrase VARCHAR(255)
);

-- Skills table
CREATE TABLE skills (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL
);

-- Email table
CREATE TABLE email (
    id SERIAL NOT NULL PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    message VARCHAR(255) NOT NULL
);

-- Projects table
CREATE TABLE projects (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL
);
