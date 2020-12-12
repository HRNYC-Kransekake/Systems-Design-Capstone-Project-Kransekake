const parser = require('body-parser');
const express = require('express');
const cors = require('cors');
const router = require('./routes.js');

const app = express();
const port = 3000;

// middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('./client/dist'));
app.use(cors());

// connection to router
app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
