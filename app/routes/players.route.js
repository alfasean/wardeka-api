module.exports = app => {
    const players = require("../controllers/players.controller")
    const router = require("express").Router();


    router.get("/", players.findAll);
    router.get("/:id", players.show);
    router.post("/", players.create);
    router.put("/:id", players.update);
    router.delete("/:id", players.delete);


    app.use("/players", router);
}