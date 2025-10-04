// password-generator.js
const generator = require('generate-password');

function generateRandomPassword() {
    const password = generator.generate({
        length: 12,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
        excludeSimilarCharacters: true
    });
    
    console.log('Mot de passe généré:', password);
    return password;
}

// Générer et afficher un mot de passe
generateRandomPassword();