const router = require('express').Router();
const images = require('../../utils/uca/controllerImage');
const {createReadStream, existsSync} = require('fs');
const {join } = require('path');

router.get('/images/uca', getUca);
router.get('/images/miage', getMiage);
router.get('/images/ucad4', getUcad4);
router.get('/images/iot', getIot);

function getUca(req, res) {
    const imagePath = join(__dirname, images.uca);
    console.log(imagePath)
    res.setHeader('Content-Type', 'image/png');
    if (!existsSync(imagePath)) {
        return res.status(404).json({ error: 'Image non trouvée' });
    }
    const stream = createReadStream(imagePath);
    stream.on('open', () => {
        stream.pipe(res);
    })
    stream.on('error', (error) => {
        console.error('Erreur de lecture du fichier:', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    });
}
function getUcad4(req, res) {
    const imagePath = join(__dirname, images.ucad4);
    res.setHeader('Content-Type', 'image/png');
    console.log(imagePath)
    if (!existsSync(imagePath)) {
        return res.status(404).json({ error: 'Image non trouvée' });
    }
    const stream = createReadStream(imagePath);
    stream.on('open', () => {
        stream.pipe(res);
    })
    stream.on('error', (error) => {
        console.error('Erreur de lecture du fichier:', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    });
}
function getMiage(req, res) {
    const imagePath = join(__dirname, images.miage);
    res.setHeader('Content-Type', 'image/jpg');
    if (!existsSync(imagePath)) {
        return res.status(404).json({ error: 'Image non trouvée' });
    }
    const stream = createReadStream(imagePath);
    stream.on('open', () => {
        stream.pipe(res);
    })
    stream.on('error', (error) => {
        console.error('Erreur de lecture du fichier:', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    });
}
function getIot(req, res) {
    const imagePath = join(__dirname, images.iot);
    res.setHeader('Content-Type', 'image/jpg');
    if (!existsSync(imagePath)) {
        return res.status(404).json({ error: 'Image non trouvée' });
    }
    const stream = createReadStream(imagePath);
    stream.on('open', () => {
        stream.pipe(res);
    })
    stream.on('error', (error) => {
        console.error('Erreur de lecture du fichier:', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    });
}

module.exports = router;