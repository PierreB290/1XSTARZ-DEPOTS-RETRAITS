const express = require('express');
const path = require('path');
const app = express();

// Chemin absolu vers le dossier public
const publicPath = path.join(__dirname, '../public');

// Servir les fichiers statiques
app.use(express.static(publicPath));

// Pour toutes les autres routes, renvoyer index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Important : exporter un handler compatible Vercel
module.exports = app;
module.exports.handler = (req, res) => {
  return app(req, res);
};
