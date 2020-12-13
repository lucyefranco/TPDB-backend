const router = require('express').Router()
const ctrl = require('../controllers/projectWork')

// PATH = /api/v1/projectWork
router.get('/byCreative/:id', ctrl.showByCreative)
router.get('/byAttraction/:id', ctrl.showByAttraction)

module.exports = router