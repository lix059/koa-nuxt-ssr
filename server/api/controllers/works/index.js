const router = require('koa-router')()
const controller = require('./works.controller.js')
const auth = require('../../../auth')

router.get('/users', auth.authUser, controller.get)
router.get('/users/:id', controller.index)
router.post('/todos', controller.put)


module.exports = router;