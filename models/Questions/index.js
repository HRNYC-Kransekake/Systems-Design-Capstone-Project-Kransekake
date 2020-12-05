const mysql = require('mysql');
const { mysqlPassword } = require('../../config.js');

questionsDbConnection = mysql.createConnection({
  user: 'root',
  password: mysqlPassword,
  database: 'QuestionsAnswers',
});

questionsDbConnection.connect(function (error) {
  if (error) {
    console.log('Error connecting to Questions_Db: ', error);
  } else {
    console.log('Connected to Questions Db!');
  }
});

const db = questionsDbConnection;

module.exports = {
  modelsGetQuestions: (product_id, callback) => {
    const getQuestionsQuery = 
    `SELECT id, product_id, body, date_written, asker_name, asker_email, reported, helpful\
     FROM Questions\
     WHERE product_id = ${product_id};`;
    db.query(getQuestionsQuery, (error, result) => {
      if (error) {
        console.log('Error with getQuestions query: ', error);
      } else {
        callback(null, result);
      }
    });
  },

  modelsGetAnswers: (question_id, callback) => {
    const getAnswersQuery =
    `SELECT id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful\
     FROM Answers\
     WHERE question_id = ${question_id};`;
    db.query(getAnswersQuery, (error, result) => {
      if (error) {
        console.log('Error with getQuestions query: ', error);
      } else {
        callback(null, result);
      }
    });
  },

  modelsPostQuestion: (product_id, body, asker_name, asker_email, callback) => {
    const date = new Date();
    const postQuestionsQuery = 
    `INSERT INTO Questions (id, product_id, body, date_written, asker_name, asker_email, reported, helpful)\
    VALUES (?, ${product_id}, ${body}, ${date}, ${asker_name}, ${asker_email}, 0, 0);`;
  },

  modelsPostAnswer: (product_id, body, asker_name, asker_email, callback) => {
    const date = new Date();
    const postAnswersQuery = 
    `INSERT INTO Answers (id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful)\
    VALUES (?, ${product_id}, ${body}, date, ${asker_name}, ${asker_email}, 0, 0);`;
  },

  modelsHelpfulQuestion: (question_id, callback) => {
    const putHelpfulQuestionQuery = 
    `UPDATE Questions\
     SET helpful = helpful + 1\
     WHERE question_id = ${question_id};`;
  },

  modelsReportQuestion: (question_id, callback) => {
    const putReportAnswerQuery = 
    `UPDATE Questions\
     SET report = 1\
     WHERE question_id = ${question_id};`;
  },

  modelsHelpfulAnswer: (answer_id, callback) => {
    const putHelpfulAnswerQuery = 
    `UPDATE Answers\
     SET helpful = helpful + 1\
     WHERE id = ${answer_id};`;
  },

  modelsReportAnswer: (answer_id, callback) => {
    const putReportAnswerQuery = 
    `UPDATE Answers\
     SET report = 1\
     WHERE id = ${answer_id};`;
  }

};