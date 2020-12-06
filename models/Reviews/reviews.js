const reviewDb = require('../database/Reviews/reviewsDB.js');

module.exports = {
  getAllReviews: function (params, callback) {
    const row = params.page * params.count;
    const count = params.count;
    const queryStr = `SELECT * ,
    (select JSON_ARRAYAGG(url)
    FROM review_photos
    where review_photos.review_id = reviews.id) as photos
    from reviews
    WHERE reviews.product_id=${params.product_id}
    ORDER BY ${params.sort} DESC
    LIMIT ${params.row},${params.count}`;

    reviewDb.query(queryStr, function (err, results) {
      if (err) {
        console.log(err);
      } else {
        callback(err, results);
      }
    });
  },
  create: function (params, callback) {
    // create a message for a user id based on the given username
    var queryStr =
      'insert into reviews(product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) \
                    value (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(queryStr, params, function (err, results) {
      callback(err, results);
    });
  }, // a function which can be used to insert a message into the database
};

photoUrl: 'players/game board players/game board,players/game board,players/game board';
photoUrl.split(',');
str1 + ' ' + str2;
