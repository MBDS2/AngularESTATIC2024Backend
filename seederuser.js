const mongoose = require('mongoose');
const User = require('./api/assignment/models/user')
const { atlasUri } = require('./api/utils/keys');

mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

const usersData = [
    {
        id: '1',
        name: 'Konaté Dotémin',
        email: 'konate@mbds.com',
        // password: 'mbds2024',
        password: '$2y$10$9jL56V7TlpUbPyAzWyT6teb/ocoxajcfrk5LT9pdEVfOcWMAGvb3i',
        role: 'admin',
        photo: 'photos'
    },
    {
        id: '2',
        name: 'Konan Nicanor',
        email: 'nicanor@mbds.com',
        // password: 'mbds2024',
        password: '$2y$10$9jL56V7TlpUbPyAzWyT6teb/ocoxajcfrk5LT9pdEVfOcWMAGvb3i',
        role: 'user',
        photo: 'photos'
    },
];

async function seedUsers() {
    try {
        await User.deleteMany();
        await User.insertMany(usersData);
        console.log('Seeders pour les utilisateurs exécutés avec succès !');
    } catch (error) {
        console.error('Erreur lors de l\'exécution des seeders pour les utilisateurs :', error);
    } finally {
        mongoose.disconnect();
    }
}
seedUsers();
