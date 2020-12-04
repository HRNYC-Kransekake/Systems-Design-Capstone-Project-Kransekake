var mysql = require('mysql');
var MYSQL_PW = require('./config.js');

dbConnection = mysql.createConnection({
  user: 'root',
  password: MYSQL_PW,
  database: 'SDC_catwalk',
});

dbConnection.connect(function (err) {
  if (err) {
    console.log('theres an error: ', err);
  } else {
    console.log('connected!');
  }
});

module.exports = dbConnection;
