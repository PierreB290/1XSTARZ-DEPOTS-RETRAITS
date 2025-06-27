const express = require('express');
const path = require('path');
const app = express();

// Définir le dossier public
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

// Pour toutes les autres routes, renvoyer index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Lancer le serveur si exécuté localement
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
  });
}

// Exporter l'application pour Render
module.exports = app;
