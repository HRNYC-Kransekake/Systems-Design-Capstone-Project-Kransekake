const {
  getAllReviews,
  getAllMeta,
  createReview,
  markHelpful,
  markReport,
} = require('../../models/Reviews/reviews-model.js');

module.exports = {
  getAll: (req, res) => {
    getAllReviews(req.query, (err, result) => {
      if (error) {
        console.log('Error with getting Questions in Controller: ', error);
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  },
  getMeta: (req, res) => {
    getAllMeta(req.query, (err, result) => {
      if (err) {
        console.log('failed');
        res.sendStatus(500);
      } else {
        res.json(result);
      }
    });
  },
  createRe: (req, res) => {
    const params = [
      req.query.product_id,
      req.query.rating,
      req.query.summary,
      req.query.body,
      req.query.recommend,
      req.query.reviewer_name,
      req.query.reviewer_email,
    ];
    createReview(params, (err, result) => {
      if (err) {
        console.log('failed', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  },
  postHelpful: (req, res) => {
    markHelpful(req.params.review_id, (error, result) => {
      if (error) {
        console.log('Error with reporting question: ', error);
      } else {
        res.sendStatus(201);
      }
    });
  },
  postReport: (req, res) => {
    markReport(req.params.review_id, (error, result) => {
      if (error) {
        console.log('Error with reporting question: ', error);
      } else {
        res.sendStatus(201);
      }
    });
  },
};
