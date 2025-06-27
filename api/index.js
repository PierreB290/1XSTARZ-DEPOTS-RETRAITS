const express = require('express');
const path = require('path');
const app = express();

// Chemin absolu vers le dossier public
const publicPath = path.join(__dirname, '../public');

// Servir les fichiers statiques
app.use(express.static(publicPath));

// Pour toutes les autres routes, renvoyer index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Lancer le serveur si tu testes en local
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });
}

// Exporter l'app pour Render
module.exports = app;
