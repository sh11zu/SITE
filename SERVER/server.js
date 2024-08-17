const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');  // Importer le module path pour gérer les chemins

const app = express();
const port = 3003;

// Autoriser spécifiquement l'origine de Live Server
app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

app.use(express.json());

// Configurer la connexion à la base de données
const db = mysql.createConnection({
  host: '77.206.5.46',
  user: 'shinobi_adm',
  password: 'tatakae',
  database: 'shinobi',
  port: 3306
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Servir les fichiers statiques du dossier STATIC
app.use('/static', express.static(path.join(__dirname, '../STATIC')));  // Chemin vers STATIC

// Route pour obtenir des données de la table membres
app.get('/api/membres', (req, res) => {
  let sql = 'SELECT matricule, nationalite, fk_region, fk_equipe, shinobi, titres, ligue, points, mj, w, l, premiere_annee FROM membres';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Route pour servir le fichier ninja_list.html
app.get('/ninja_list', (req, res) => {
  res.sendFile(path.join(__dirname, '../TEMPLATES/HTML/ninja_list.html'));  // Chemin vers HTML
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
