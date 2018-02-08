const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const linksGenerator = require('./links-generator');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const categoriesList = linksGenerator.generateLinks();

app.get('/', (req, res) => res.send('Welcome to this app backend API! You probably should not be here.'));

app.get('/links', (req, res) => res.json(categoriesList));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));