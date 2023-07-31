module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            user_id : String,
            name: String,
            email: String,
            rank: String,
            country: String,
        }, {
            timestamps: true
        }
    );

    return mongoose.model("players", schema);

}