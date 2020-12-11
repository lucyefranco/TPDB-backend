const router = require('express').Router()
const ctrl = require('../controllers/attractions')

// PATH = /api/v1/attractions
router.get('/', ctrl.index)
router.get('/:id', ctrl.show)

module.exports = router