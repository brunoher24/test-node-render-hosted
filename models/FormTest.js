// Importation de 'mongoose'
const mongoose = require('mongoose');

// Création d'un shéma mongoose
const formTestSchema = mongoose.Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  description: {type: String, required: true},
  categories: { type: [String], default: [] }, // Création tableau vide pour les utilisateurs qui like
  imageUrls: { type: [String], default: [] }, // Création d'un tableau vide pour les utilisateurs qui dislike
});

// Export du shéma de données
module.exports = mongoose.model('FormTests', formTestSchema);