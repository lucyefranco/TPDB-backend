const db = require('../models')

// Find all of the brewery posts
const index = (req,res) => {
    console.log("in the index route")
    db.attraction.findAll().then((foundAttractions) => {
        if(!foundAttractions) return res.json({
            message: 'No Attractions found in database.'
        })
        res.status(200).json({ attractions: foundAttractions})
    })
}

const show = (req,res) => {
    db.attraction.findAll({
        where: {
            id: req.params.id
        }
    }).then((foundAttraction) => {
        if(!foundAttraction) return res.json({
            message: "Attraction with provided ID not found"
        })
        res.status(200).json({attraction: foundAttraction})
    })
}

const showByPark = (req,res) => {
    db.attraction.findAll({
        where: {
            themeParkId: req.params.id
        }
    }).then((foundAttractions) => {
        if(!foundAttractions) return res.json({
            message: "Attractions with provided Theme Park not found"
        })
        res.status(200).json({attractions: foundAttractions})
    })
}

const create = (req,res) => {
    db.attraction.create(req.body).then((newAttraction) => {
        res.status(200).json({ attraction: newAttraction})
    })
}
    
module.exports = {
    index,
    show,
    showByPark,
    create
}