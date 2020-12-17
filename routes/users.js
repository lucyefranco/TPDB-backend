const router = require('express').Router()
const ctrl = require('../controllers/users')

// PATH = /api/v1/users/
router.get('/', ctrl.index)
router.get('/:id', ctrl.show)

module.exports = router