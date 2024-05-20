const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const atlasUri = require('./api/utils/keys').atlasUri
const assignment = require('./api/assignment/routes/routesAssignment');
const user = require('./api/assignment/routes/routesUser');
const util = require('./api/assignment/routes/routesUtil')
const image = require('./api/assignment/routes/routesImage')

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongoose.set('debug', true);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.set('strictQuery', false);
mongoose
    .connect(atlasUri, options)
    .then(() => console.log("Connecté à MongoDB Atlas !"))
    .catch((err) => console.log(err));

// Pour accepter les connexions cross-domain (CORS)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8010;

// les routes
const prefix = '/api';

//Route pour les assignments

app.use(prefix, assignment)

//Route pour les utilisateurs

app.use(prefix, user)

app.use(prefix, util)

app.use(prefix, image);

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;