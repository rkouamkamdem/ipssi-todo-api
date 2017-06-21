const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

moment = require('moment');

//Connexion à la Bdd MongoDb
mongoose = require('mongoose');
//Mise en plce des promesse avec Bluebird qui est 1 module qui gère les promesses
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/todo');

const app = express();
app.use(morgan('combined'));
//on configure le body-parser pour parser les requêtes
app.use(bodyParser.urlencoded({extended: true }));
//on lui dit de parser les requêtes comme étant du Json
app.use(bodyParser.json());

router = express.Router();
require(path.join(__dirname, 'routes'));

app.use(router);

app.listen(process.env.SERVER_PORT || 3000);
