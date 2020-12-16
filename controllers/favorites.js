const db = require('../models')

// attractions
    // find by user
    const showUserAttractions = (req,res) => {
        db.attractionFavorites.findAll({
            where: {
                userId: req.params.id
            }
        }).then((foundAttractions) => {
            if(!foundAttractions) return res.json({
                message: "Attraction with provided ID not found"
            })
            res.status(200).json({attractionFavorites: foundAttractions})
        })
    }
    // add to favorites
    const createAttractionFavorite = (req,res) => {
        db.attractionFavorites.create(req.body).then((newFavorite) => {
            res.status(200).json({ attractionFavorites: newFavorite})
        })
    }
    // find by attraction
    const showByAttraction = (req,res) => {
        db.attractionFavorites.findAll({
            where: {
                attractionId: req.params.id
            }
        }).then((foundUsers) => {
            if(!foundUsers) return res.json({
                message: "No users have favorited this attraction"
            })
            res.status(200).json({ attractionFavorites: foundUsers})
        })
    }

// themeParks
    // find by user
    const showUserParks = (req,res) => {
        db.themeParkFavorites.findAll({
            where: {
                userId: req.params.id
            }
        }).then((foundParks) => {
            if(!foundParks) return res.json({
                message: "Theme Park with provided ID not found"
            })
            res.status(200).json({ themeParkFavorites: foundParks })
        })
    }
    // add to favorites
    const createParkFavorite = (req,res) => {
        db.themeParkFavorites.create(req.body).then((newFavorite) => {
            res.status(200).json({ themeParkFavorites: newFavorite})
        })
    }
    // find by attraction
    const showByPark = (req,res) => {
        db.themeParkFavorites.findAll({
            where: {
                themeParkId: req.params.id
            }
        }).then((foundUsers) => {
            if(!foundUsers) return res.json({
                message: "No users have favorited this theme park"
            })
            res.status(200).json({ themeParkFavorites: foundUsers})
        })
    }

// creatives
    // find by user
    // find by attraction

module.exports = {
    showUserAttractions,
    createAttractionFavorite,
    showByAttraction,
    showUserParks,
    createParkFavorite,
    showByPark
}