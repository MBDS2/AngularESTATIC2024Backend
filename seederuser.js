const mongoose = require('mongoose');
const User = require('./api/assignment/models/user')
const { atlasUri } = require('./api/utils/keys');

mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

const usersData = [
    {
        id: '1',
        name: 'Konate',
        email: 'konate@mbds.com',
        // password: 'esatic123',
        password: '$2y$10$2Mpddyq3rgYyTAsJF.Sk9eudPob3/qK5Q6A28OUEktNcJgEa6ICva',
        role: 'admin',
        photo: 'lien_vers_photo'
    },
    {
        id: '2',
        name: 'Kydas',
        email: 'kydas@mbds.com',
        // password: 'esatic123',
        password: '$2y$10$2Mpddyq3rgYyTAsJF.Sk9eudPob3/qK5Q6A28OUEktNcJgEa6ICva',
        role: 'user',
        photo: 'lien_vers_photo'
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
