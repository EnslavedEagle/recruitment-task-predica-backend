const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const linksGenerator = require('./links-generator');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const categoriesList = linksGenerator.generateLinks();

app.get('/links', (req, res) => {
  res.status(200).json(categoriesList);
});

app.listen(3000, () => console.log('Server listening on port 3000...'));