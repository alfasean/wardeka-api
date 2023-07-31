const db = require('../models');
const Achievement = db.achievements;


exports.create = (req, res) => {
  const { name, description, prize_item } = req.body;

  if (!name || !description || !prize_item) {
    return res.status(400).send({ message: 'Data tidak lengkap' });
  }

  Achievement.create({
    name: name,
    description: description,
    prize_item: prize_item,
  })
    .then(() => res.send({ message: 'Data berhasil disimpan' }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  Achievement.find()
    .then((data) => res.send(data))
    .catch((error) => res.status(400).json('Error: ' + error));
};

exports.show = (req, res) => {
  const id = req.params.id;

  Achievement.findById(id)
    .then((data) => res.send(data))
    .catch((error) => res.status(400).json('Error: ' + error));
};

exports.update = (req, res) => {
  const id = req.params.id;
  const updateData = req.body;

  Achievement.findByIdAndUpdate(id, updateData, { useFindAndModify: false, new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: 'Tidak dapat mengupdate data' });
      }
      res.send({ message: 'Data berhasil diupdate', updatedData: data });
    })
    .catch((error) => res.status(500).send({ message: error.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Achievement.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'Tidak dapat menghapus data' });
      }
      res.send({ message: 'Data berhasil dihapus' });
    })
    .catch((error) => res.status(500).send({ message: error.message }));
};
