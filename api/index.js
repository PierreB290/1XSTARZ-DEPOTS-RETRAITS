const express = require('express');
const path = require('path');
const app = express();

// Chemin absolu vers le dossier public
const publicPath = path.join(__dirname, '../public');

// Servir les fichiers statiques
app.use(express.static(publicPath));

// Pour toutes les routes restantes, retourner index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Export pour Vercel
module.exports = app;const express = require('express');
const path = require('path');
const app = express();

// Détecter le répertoire racine en production Vercel
const publicPath = path.resolve(__dirname, '../public');

// Servir les fichiers statiques
app.use(express.static(publicPath));

// Pour toute autre route, renvoyer index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

module.exports = app;
