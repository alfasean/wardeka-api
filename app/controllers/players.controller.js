const db = require("../models");
const Players = db.players

const uuid = require('uuid');

exports.create = (req, res) => {
    const { name, email, rank, country } = req.body;

    if (!name || !email || !rank || !country) {
        return res.status(400).send({ message: "Data tidak lengkap" });
    }

    const user_id = uuid.v4();

    Players.create({
        user_id: user_id,
        name: name,
        email: email,
        rank: rank,
        country: country,
    })
        .then(() => res.send({ message: "Data berhasil disimpan" }))
        .catch(err => res.status(500).send({ message: err.message }));
}



exports.findAll = (req, res) => {
    Players.find()
    .then(data => res.send(data))
    .catch((error)=>res.status(400).json("Error : "+ error))  
}

exports.show = (req, res) => {
    const id = req.params.id;

    Players.findById(id)
        .then(data => res.send(data))
        .catch((error)=>res.status(400).json("Error : "+ error))

}

exports.update = (req, res) => {
    const id = req.params.id;
    const updateData = req.body; 
  
    Players.findByIdAndUpdate(id, updateData, { useFindAndModify: false, new: true })
      .then((data) => {
        if (!data) {
          return res.status(404).send({ message: "Tidak dapat mengupdate data" });
        }
        res.send({ message: "Data berhasil diupdate", updatedData: data });
      })
      .catch((error) => res.status(500).send({ message: error.message }));
  };
  
  

exports.delete = (req, res) => {
    const id = req.params.id;

    Players.findByIdAndRemove(id) 
        .then(data => {
            if (!data) {
                res.status(404).send({message: "Tidak dapat menghapus data"})
            }
            res.send({message: "Data berhasil dihapus"})
        })

        .catch(error => res.status(500).send({message: error.message}))

}