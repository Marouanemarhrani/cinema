const mongoose = require("mongoose")

const FavoriteSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cinema: { type: mongoose.Schema.Types.ObjectId, ref: 'Cinema', required: true }
})

const Favorite = mongoose.model('Favorite', FavoriteSchema)

module.exports = Favorite