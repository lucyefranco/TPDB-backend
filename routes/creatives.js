const router = require('express').Router()
const ctrl = require('../controllers/creatives')

// PATH = /api/v1/creatives
router.get('/', ctrl.index)
router.get('/:id', ctrl.show)

module.exports = router