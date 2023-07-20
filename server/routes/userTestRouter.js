const Router = require('express')
const router = new Router()
const userTestController = require('../controllers/userTestController')

router.post('/', userTestController.create)
router.get('/', userTestController.getAll)
router.get('/:id', userTestController.getOne)
router.get('/all/:userId', userTestController.getUserAll)

module.exports = router