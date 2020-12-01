CREATE DATABASE IF NOT EXISTS Questions&Answers;

USE Questions&Answers;

CREATE TABLE IF NOT EXISTS Products (
  product_id INT NOT NULL,
  questions_id INT NOT NULL,
);

-- one (products) to many (questions) relationship 

CREATE TABLE IF NOT EXISTS Questions (
  questions_id INT NOT NULL,
  question_body VARCHAR(250) NOT NULL,
  question_date VARCHAR(50) NOT NULL,
  asker_name VARCHAR(50) NOT NULL,
  helpfulness INT NOT NULL,
  reported INT NOT NULL,
);

-- one (question) to many (answers) relationship 

CREATE TABLE IF NOT EXISTS Answers (
  answers_id INT NOT NULL,
  answer_body VARCHAR(250) NOT NULL,
  answer_date VARCHAR(50) NOT NULL,
  answer_name VARCHAR(50) NOT NULL,
  helpfulness INT NOT NULL,
  reported INT NOT NULL,
  photo_id INT NOT NULL,
);

-- one (answer) to many (photos) relationship 

CREATE TABLE IF NOT EXISTS Photos (
  id INT NOT NULL,
  photo_id INT NOT NULL,
  thumbnail_url VARCHAR(200) NOT NULL,
  url VARCHAR(200) NOT NULL,
);

