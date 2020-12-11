const db = require('../models')

const index = (req, res) => {
    db.themePark.findAll().then((foundThemeParks) => {
        if(!foundThemeParks) return res.json({
            message: "No Theme Parks found in database."
        })
        res.status(200).json({themeParks: foundThemeParks})
    })
}

const show = (req,res) => {
    db.themePark.findAll({
        where: {
            id: req.params.id
        }
    }).then((foundThemePark) => {
        if(!foundThemePark) return res.json({
            message: "Theme Park with provided ID not found"
        })
        res.status(200).json({themePark: foundThemePark})
    })
}

module.exports = {
    index,
    show
}