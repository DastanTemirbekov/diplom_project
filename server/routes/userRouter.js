const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/registration',userController.registration)
router.get('/users',userController.getAllUser)
router.post('/login',userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/:id', userController.getOneUser)

module.exports = router