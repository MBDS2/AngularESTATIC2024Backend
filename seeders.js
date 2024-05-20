const mongoose = require('mongoose');
const Assignment = require('./api/assignment/models/assignment')
const { atlasUri } = require('./api/utils/keys');

// Connexion à la base de données
mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

const assignmentsData = [
    {
        id: '1',
        name: 'Devoir de mathématiques',
        deadLine: new Date('2024-06-10T12:00:00Z'),
        rendered: true,
        author: 'John Doe',
        course: {
            name: 'Mathématiques',
            coursePhoto: 'lien_vers_photo_cours',
            teacherPhoto: 'lien_vers_photo_prof'
        },
        mark: 0,
        comment: 'Très bon devoir de classe'
    },
    {
        id: '2',
        name: 'Devoir de français',
        deadLine: new Date('2024-06-10T12:00:00Z'),
        rendered: true,
        author: 'konan Nicanor',
        course: {
            name: 'Francais',
            coursePhoto: 'lien_vers_photo_cours',
            teacherPhoto: 'lien_vers_photo_prof'
        },
        mark: 0,
        comment: 'Je m\'attends une excellente note pour ce devoir'
    },
    {
        id: '3',
        name: 'Devoir de physiques',
        deadLine: new Date('2024-06-10T12:00:00Z'),
        rendered: false,
        author: 'John Doe',
        course: {
            name: 'Physiques',
            coursePhoto: 'lien_vers_photo_cours',
            teacherPhoto: 'lien_vers_photo_prof'
        },
        mark: 0,
        comment: 'Je ne ends pas mon devoir'
    },
    {
        id: '4',
        name: 'Devoir de philosophie',
        deadLine: new Date('2024-06-10T12:00:00Z'),
        rendered: false,
        author: 'Konaté Dotémin',
        course: {
            name: 'Philosophie',
            coursePhoto: 'lien_vers_photo_cours',
            teacherPhoto: 'lien_vers_photo_prof'
        },
        mark: 0,
        comment: 'Je pense rendre mon de la semaine prochaine'
    },
];

// Fonction pour insérer les assignments dans la base de données
async function seedAssignments() {
    try {
        // Supprimer tous les assignments existants
        await Assignment.deleteMany();
        
        // Insérer les nouveaux assignments
        await Assignment.insertMany(assignmentsData);
        
        console.log('Seeders exécutés avec succès !');
    } catch (error) {
        console.error('Erreur lors de l\'exécution des seeders :', error);
    } finally {
        // Déconnecter la base de données
        mongoose.disconnect();
    }
}

// Exécuter la fonction pour peupler la base de données avec des assignments
seedAssignments();
