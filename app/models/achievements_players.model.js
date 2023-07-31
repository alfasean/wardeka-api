module.exports = mongoose => {

  const schema = mongoose.Schema(
      {
        playerId: String,
        achievementId: String,
      }, {
          timestamps: true
      }
  );

  return mongoose.model("achievements_players", schema);

}