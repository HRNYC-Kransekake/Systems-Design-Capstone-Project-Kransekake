const { getAllReviews } = require('../../models/Reviews/reviews-model.js');

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
};
