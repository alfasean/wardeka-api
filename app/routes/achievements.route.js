module.exports = app => {
    const achievements = require('../controllers/achievements.controller');
    const router = require('express').Router();
  
    router.get('/', achievements.findAll);
    router.get('/:id', achievements.show);
    router.post('/', achievements.create);
    router.put('/:id', achievements.update);
    router.delete('/:id', achievements.delete);
  
    app.use('/achievements', router);
  }
  