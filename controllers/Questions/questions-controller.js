const { 
  modelsGetQuestions, 
  modelsGetAnswers, 
  modelsPostQuestion, 
  modelsPostAnswer, 
  modelsHelpfulQuestion, 
  modelsReportQuestion, 
  modelsHelpfulAnswer, 
  modelsReportAnswer } = require('../../models/Questions/questions-model');

module.exports = {
  // Questions
  getQuestions: (req, res) => {
    modelsGetQuestions(req.params.product_id, (error, result) => {
      if (error) {
        console.log('Error with getting Questions in Controller: ', error);
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  },
  postQuestion: (req, res) => {
    const params = [req.params.product_id, req.body.body, req.body.asker_name, req.body.asker_email];
    modelsPostQuestion(params, (error, result) => {
      if (error) {
        console.log('Error with posting Questions in Controller: ', error);
        res.sendStatus(500);
      } else {
        res.send();
      }
    });
  },
  helpfulQuestion: (req, res) => {
    console.log(req.params);
    modelsHelpfulQuestion(req.params.question_id, (error, result) => {
      if (error) {
        console.log('Error with updating helpful question: ', error);
      } else {
        res.send();
      }
    });
  },
  reportQuestion: (req, res) => {
    modelsReportQuestion(req.params.question_id, (error, result) => {
      if (error) {
        console.log('Error with reporting question: ', error);
      } else {
        res.send();
      }
    });
  },
  // Answers
  getAnswers: (req, res) => {
    modelsGetAnswers(req.params.question_id, (error, result) => {
      if (error) {
        console.log('Error with getting Questions in Controller: ', error);
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  },
  postAnswer: (req, res) => {
  },
  helpfulAnswer: (req, res) => {
  },
  reportAnswer: (req, res) => {
  }
};