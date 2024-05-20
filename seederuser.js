const mongoose = require('mongoose');
const User = require('./api/assignment/models/user')
const { atlasUri } = require('./api/utils/keys');

// Connexion à la base de données
mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

// Données d'exemple pour les utilisateurs
const usersData = [
    {
        id: '1',
        name: 'Kydas',
        email: 'kydas@mbds.com',
        // password: 'Kydas123',
        password: '$2y$10$uvoEH91SwaRBQm67ogjAL.NOt9NiQGst2dxmyFcnBEU8WCFD38UMi',
        role: 'user',
        photo: 'lien_vers_photo'
    },
    // Ajouter d'autres utilisateurs selon vos besoins
];

// Fonction pour insérer les utilisateurs dans la base de données
async function seedUsers() {
    try {
        // Supprimer tous les utilisateurs existants
        await User.deleteMany();
        
        // Insérer les nouveaux utilisateurs
        await User.insertMany(usersData);
        
        console.log('Seeders pour les utilisateurs exécutés avec succès !');
    } catch (error) {
        console.error('Erreur lors de l\'exécution des seeders pour les utilisateurs :', error);
    } finally {
        // Déconnecter la base de données
        mongoose.disconnect();
    }
}

// Exécuter la fonction pour peupler la base de données avec les utilisateurs
seedUsers();
