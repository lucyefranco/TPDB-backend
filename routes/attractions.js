const router = require('express').Router()
const ctrl = require('../controllers/attractions')

// PATH = /api/v1/attractions
router.get('/', ctrl.index)
router.get('/:id', ctrl.show)
router.get('/byPark/:id', ctrl.showByPark)
router.post('/', ctrl.create)

module.exports = router