var mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: 'secret',
  database: 'SDC_catwalk',
  host: 'mysql1',
  port: '3306',
});

dbConnection.connect(function (err) {
  if (err) {
    console.log('theres an error: ', err);
  } else {
    console.log('connected!');
  }
});

module.exports = dbConnection;
