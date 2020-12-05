const { 
  modelsGetQuestions, 
  modelsGetAnswers, 
  modelsPostQuestion, 
  modelsPostAnswer, 
  modelsHelpfulQuestion, 
  modelsReportQuestion, 
  modelsHelpfulAnswer, 
  modelsReportAnswer } = require('../../models/Questions');

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
  },
  helpfulQuestion: (req, res) => {
  },
  reportQuestion: (req, res) => {
  },
  // Answers
  getAnswers: (req, res) => {
    console.log('this is working');
    console.log('param: ', req.params);
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