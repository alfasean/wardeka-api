const db = require('../models');
const AchievementsPlayers = db.achievements_players;

exports.create = (req, res) => {
  const { playerId, achievementId } = req.body;

  if (!playerId || !achievementId) {
    return res.status(400).send({ message: 'Data tidak lengkap' });
  }

  AchievementsPlayers.create({
    playerId: playerId,
    achievementId: achievementId,
  })
    .then(() => res.send({ message: 'Data berhasil disimpan' }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  AchievementsPlayers.find()
    .then((data) => res.send(data))
    .catch((error) => res.status(500).json({ message: error.message }));
};