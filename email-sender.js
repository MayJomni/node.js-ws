// email-sender.js

// 1. Charge les variables du fichier .env
require('dotenv').config();

const nodemailer = require('nodemailer');

// 2. Configuration du transporteur AVEC les variables d'environnement
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,        // Lit depuis .env
        pass: process.env.APP_PASSWORD  // Lit depuis .env
    }
});

// 3. Configuration de l'email
const mailOptions = {
    from: process.env.EMAIL,            // Utilise aussi l'email du .env
    to: 'gdrhedthdehgit@gmail.com',    // Mettez votre email de test ici
    subject: 'Test Email depuis Node.js',
    text: 'Ceci est un email de test envoyé depuis Node.js!',
    html: '<h1>Bravo!</h1><p>Vous avez réussi à envoyer un email avec Node.js</p>'
};

// 4. Envoyer l'email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Erreur:', error);
    } else {
        console.log('Email envoyé avec succès:', info.response);
    }
});