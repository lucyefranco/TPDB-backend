const db = require('../models')

const index = (req,res) => {
    db.creative.findAll().then((foundCreatives) => {
        if(!foundCreatives) return res.json({
            message: "No Creatives found in database"
        })
        res.status(200).json({ creatives: foundCreatives})
    })
}

const show = (req,res) => {
    db.creative.findAll({
        where: {
            id: req.params.id
        }
    }).then((foundCreative) => {
        if(!foundCreative) return res.json({
            message: "Creative with provided ID not found"
        })
        res.status(200).json({creative: foundCreative})
    })
}

module.exports = {
    index,
    show
}