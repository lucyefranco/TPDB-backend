const router = require('express').Router()
const ctrl = require('../controllers/favorites')

// PATH = /api/v1/favorites
router.get('/attractions/byUser/:id', ctrl.showUserAttractions)
router.post('/attractions/', ctrl.createAttractionFavorite)
router.get('/attractions/byAttraction/:id', ctrl.showByAttraction)
router.get('/themeParks/byUser/:id', ctrl.showUserParks)
router.post('/themeParks/', ctrl.createParkFavorite)
router.get('/themeParks/byPark/:id',ctrl.showByPark)

module.exports = router