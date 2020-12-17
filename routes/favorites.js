const router = require('express').Router()
const ctrl = require('../controllers/favorites')

// PATH = /api/v1/favorites
router.get('/attractions/byUser/:id', ctrl.showUserAttractions)
router.post('/attractions/', ctrl.createAttractionFavorite)
router.get('/attractions/byAttraction/:id', ctrl.showByAttraction)
router.delete('/attractions/:id', ctrl.destroyAttraction)
router.get('/themeParks/byUser/:id', ctrl.showUserParks)
router.post('/themeParks/', ctrl.createParkFavorite)
router.get('/themeParks/byPark/:id',ctrl.showByPark)
router.delete('/themeParks/:id', ctrl.destroyPark)
router.get('/creatives/byUser/:id', ctrl.showUserCreatives)
router.post('/creatives/', ctrl.createCreativeFavorite)
router.get('/creatives/byCreative/:id', ctrl.showByCreative)
router.delete('/creatives/:id', ctrl.destroyCreative)

module.exports = router