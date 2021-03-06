const router = require('express').Router()
const ctrl = require('../controllers/themePark')

// PATH = /api/v1/creatives
router.get('/', ctrl.index)
router.get('/:id', ctrl.show)
router.post('/', ctrl.create)

module.exports = router