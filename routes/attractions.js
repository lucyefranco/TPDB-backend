const router = require('express').Router()
const ctrl = require('../controllers/attractions')

// PATH = /api/v1/attractions
router.get('/', ctrl.index)
router.get('/:id', ctrl.show)
router.get('/byPark/:id', ctrl.showByPark)
router.post('/', ctrl.create)
router.get('/findCreatives/:id', ctrl.findCreatives)

module.exports = router