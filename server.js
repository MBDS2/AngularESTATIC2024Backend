const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); // Ajout de l'importation de cors

const atlasUri = require('./api/utils/keys').atlasUri;
const assignment = require('./api/assignment/routes/routesAssignment');
const user = require('./api/assignment/routes/routesUser');
const util = require('./api/assignment/routes/routesUtil');
const image = require('./api/assignment/routes/routesImage');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Configuration des options de connexion à MongoDB
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.set('strictQuery', false);
mongoose
    .connect(atlasUri, options)
    .then(() => console.log("Connecté à MongoDB Atlas !"))
    .catch((err) => console.log(err));

// Configuration de CORS
app.use(cors()); // Utilisation de cors pour gérer les en-têtes CORS automatiquement

// Pour les formulaires
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8010;
const prefix = '/api';

// Utilisation des routes
app.use(prefix, assignment);
app.use(prefix, user);
app.use(prefix, util);
app.use(prefix, image);

// Démarrage du serveur
app.listen(port, "0.0.0.0", () => {
    console.log('Serveur démarré sur http://localhost:' + port);
});

module.exports = app;
