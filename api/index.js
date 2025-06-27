const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques du dossier public
app.use(express.static(path.join(__dirname, '../public')));

// Pour toute autre route, renvoyer index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;const express = require('express');
const app = express();

// Servir les fichiers statiques du dossier public
app.use(express.static('public'));

// Route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon site Node.js + Express depuis Vercel !');
});

// Export de l'application pour Vercel
module.exports = app;
