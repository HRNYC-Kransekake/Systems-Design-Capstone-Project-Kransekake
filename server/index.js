const parser = require('body-parser');
const express = require('express');
// const path = require('path');
const cors = require('cors');
const router = require('./routes.js');

const app = express();
const port = 3306;
// const mainDir = __dirname.substring(0, __dirname.length - 6);

// middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('./client/dist'));
app.use(cors());

// connection to router
app.use('/', router);

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(mainDir, 'client/dist', 'index.html'));
// });

app.listen(port, () => console.log(`listening on port ${port}!`));
