const Favorite = require("../models/favoriteModel.js")

exports.addFavorite = async (req,res) => {
    try{
        console.log(req.body)
        const favorite = new Favorite(req.body)
        await favorite.save()
        res.status(201).send(cinema);
    }
    catch (error) {
        res.status(400).send(error);
    }
}