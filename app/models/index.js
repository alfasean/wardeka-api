const dbConfig = require('../config/database');
const mongoose = require('mongoose');

module.exports = {
  mongoose,
  url: dbConfig.url,
  players: require('./players.model')(mongoose), // Gunakan model "players" yang sudah Anda definisikan sebelumnya
  achievements: require('./achievements.model')(mongoose), // Tambahkan model "achievements" di sini
  achievements_players: require('./achievements_players.model')(mongoose), // Tambahkan model "achievements" di sini
};
