const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const atlasUri = require('./api/utils/keys').atlasUri;
const assignment = require('./api/assignment/routes/routesAssignment');
const user = require('./api/assignment/routes/routesUser');
const util = require('./api/assignment/routes/routesUtil');
const image = require('./api/assignment/routes/routesImage');

const app = express();
const port = process.env.PORT || 8010;
const prefix = '/api';

// Configuration CORS
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connexion à MongoDB Atlas
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
mongoose.connect(atlasUri, options)
  .then(() => console.log("Connecté à MongoDB Atlas !"))
  .catch((err) => console.log(err));

// Routes
app.use(prefix, assignment);
app.use(prefix, user);
app.use(prefix, util);
app.use(prefix, image);

// Gestion des erreurs 404 (route non trouvée)
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Gestion des erreurs internes du serveur
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message });
});

// Démarrage du serveur
app.listen(port, "0.0.0.0", () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

module.exports = app;
