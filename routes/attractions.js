const router = require('express').Router()
const ctrl = require('../controllers/attractions')

// PATH = /api/v1/attractions
router.get('/', ctrl.index)

module.exports = router