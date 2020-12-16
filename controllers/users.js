const db = require('../models')

// Find all of the brewery posts
const index = (req,res) => {
    console.log("in the index route")
    db.user.findAll().then((foundUsers) => {
        if(!foundUsers) return res.json({
            message: 'No users found in database.'
        })
        res.status(200).json({ users: foundUsers})
    })
}

const show = (req,res) => {
    db.user.findAll({
        where: {
            id: req.params.id
        }
    }).then((foundUser) => {
        if(!foundUser) return res.json({
            message: "User with provided ID not found"
        })
        res.status(200).json({user: foundUser})
    })
}

module.exports = {
    index,
    show
}