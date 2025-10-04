// file-manager.js
const fs = require('fs');

// Première partie: Créer le fichier welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('Fichier welcome.txt créé avec succès');
    
    // Deuxième partie: Lire et afficher le contenu
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Contenu du fichier:', data);
    });
});