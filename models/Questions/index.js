const mysql = require('mysql');

module.exports = {
  // Questions: id, product_id, body, date_written, asker_name, asker_email, reported, helpful
  // Answers: id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful
  // Photos: id, answer_id, url

  modelsGetQuestions: (product_id) => {
    const getQuestionsQuery = 
    `SELECT id, product_id, body, date_written, asker_name, asker_email, reported, helpful\
     FROM Questions\
     WHERE product_id = ${product_id};`;
  },

  modelsGetAnswers: (product_id) => {
    const getAnswersQuery =
    `SELECT id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful\
     FROM Answers\
     WHERE product_id = ${product_id};`;
  },

  modelsPostQuestion: (product_id, body, asker_name, asker_email) => {
    const date = ''; // add date function
    const postQuestionsQuery = 
    `INSERT INTO Questions (id, product_id, body, date_written, asker_name, asker_email, reported, helpful)\
    VALUES (?, ${product_id}, ${body}, date, ${asker_name}, ${asker_email}, 0, 0);`;
  },

  modelsPostAnswer: () => {
    const date = ''; // add date function
    const postAnswersQuery = 
    `INSERT INTO Answers (id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful)\
    VALUES (?, ${product_id}, ${body}, date, ${asker_name}, ${asker_email}, 0, 0);`;
  },

  modelsHelpfulQuestion: (question_id) => {
    // const putHelpfulQuestionQuery = 
    // `UPDATE Questions\
    //  SET helpful = 1\
    //  WHERE question_id = ${question_id};`;
  },

  modelsReportQuestion: (question_id) => {
    const putReportAnswerQuery = 
    `UPDATE Questions\
     SET report = 1\
     WHERE question_id = ${question_id};`;
  },

  modelsHelpfulAnswer: () => {
    // const putHelpfulAnswerQuery = 
    // `UPDATE Answers\
    //  SET helpful = 1\
    //  WHERE id = ${answer_id};`;
  },

  modelsReportAnswer: (answer_id) => {
    const putReportAnswerQuery = 
    `UPDATE Answers\
     SET report = 1\
     WHERE id = ${answer_id};`;
  }

};