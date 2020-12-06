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
  // Questions
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

  modelsPostQuestion: (params, callback) => {
    let date = new Date().toISOString().slice(0, 10);
    const postQuestionsQuery = 
    `INSERT INTO Questions (product_id, body, date_written, asker_name, asker_email, reported, helpful)\
     VALUES (?, ?, ${JSON.stringify(date)}, ?, ?, 0, 0);`;
    db.query(postQuestionsQuery, params, (error, result) => {
      if (error) {
        console.log('Error with postQuestions query: ', error);
      } else {
        callback(null, result);
      }
    });
  },

  modelsHelpfulQuestion: (question_id, callback) => {
    const putHelpfulQuestionQuery = 
    `UPDATE Questions\
     SET helpful = helpful + 1\
     WHERE id = ${question_id};`;
    db.query(putHelpfulQuestionQuery, (error, result) => {
      if (error) {
        console.log('Error with helpfulQuestions query: ', error);
      } else {
        callback(null, result);
      }
    });
  },

  modelsReportQuestion: (question_id, callback) => {
    const putReportQuestionQuery = 
    `UPDATE Questions\
     SET reported = 1\
     WHERE id = ${question_id};`;
    db.query(putReportQuestionQuery, (error, result) => {
      if (error) {
        console.log('Error with reportQuestions query: ', error);
      } else {
        callback(null, result);
      }
    });
  },

  // Answers
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
  
  modelsPostAnswer: (params, callback) => {
    console.log(params);
    let date = new Date().toISOString().slice(0, 10);
    const postAnswersQuery = 
    `INSERT INTO Answers (question_id, body, date_written, answerer_name, answerer_email, reported, helpful)\
     VALUES (?, ?, ${JSON.stringify(date)}, ?, ?, 0, 0);`;
    db.query(postAnswersQuery, params, (error, result) => {
      if (error) {
        console.log('Error with postAnswers query: ', error);
      } else {
        callback(null, result);
      }
    });
  },

  modelsHelpfulAnswer: (answer_id, callback) => {
    const putHelpfulAnswerQuery = 
    `UPDATE Answers\
     SET helpful = helpful + 1\
     WHERE id = ${answer_id};`;
    db.query(putHelpfulAnswerQuery, (error, result) => {
      if (error) {
        console.log('Error with helpfulAnswer query: ', error);
      } else {
        callback(null, result);
      }
    });
  },

  modelsReportAnswer: (answer_id, callback) => {
    const putReportAnswerQuery = 
    `UPDATE Answers\
     SET reported = 1\
     WHERE id = ${answer_id};`;
    db.query(putReportAnswerQuery, (error, result) => {
      if (error) {
        console.log('Error with reportAnswer query: ', error);
      } else {
        callback(null, result);
      }
    });
  }
};