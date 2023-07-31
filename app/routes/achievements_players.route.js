module.exports = (app) => {
    const achievementsPlayers = require('../controllers/achievements_players.controller');
    const router = require('express').Router();
  
    router.post('/', achievementsPlayers.create);
    router.get('/', achievementsPlayers.findAll);
  
    app.use('/achievements_players', router);
  };
  