const Router = require('express')
const router = new Router()
const testRouter = require('./testRouter')
const userRouter = require('./userRouter')
const userTestRouter = require('./userTestRouter')

router.use('/test', testRouter)
router.use('/user', userRouter)
router.use('/user_test', userTestRouter)


module.exports = router