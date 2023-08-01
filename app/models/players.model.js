module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            name: String,
            email: String,
            rank: String,
            country: String,
            tutorial: {
                type: Boolean,
                default: false,
            },
        }, {
            timestamps: true
        }
    );

    return mongoose.model("players", schema);

}