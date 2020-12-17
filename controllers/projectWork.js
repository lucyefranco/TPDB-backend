const db = require('../models')

const showByCreative = (req,res) => {
    db.projectWork.findAll({
        where: {
            creativeId: req.params.id
        }
    }).then((foundCreative) => {
        if(!foundCreative) return res.json({
            message: "No connected work by this creative."
        })
        res.status(200).json({creative: foundCreative})
    })
}

const showByAttraction = (req,res) => {
    db.projectWork.findAll({
        where: {
            attractionId: req.params.id
        }
    }).then((foundAttraction) => {
        if(!foundAttraction) return res.json({
            message:"No creatives connected to this attraction."
        })
        res.status(200).json({attraction: foundAttraction})
    })
}

module.exports = {
    showByCreative,
    showByAttraction
}