module.exports = mongoose => {

  const schema = mongoose.Schema(
      {
        name: String,
        description: String,
        prize_item: String,
      }, {
          timestamps: true
      }
  );

  return mongoose.model("achievements", schema);

}