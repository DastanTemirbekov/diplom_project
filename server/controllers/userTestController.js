const {UserTest, User} = require('../models/models')
const ApiError = require('../error/ApiError')

class UserTestController {
    async create(req, res, next) {
        try {
            const {score, userId} = req.body
            const userTest = await UserTest.create({score, userId})
            return res.json(userTest)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const userTest = await UserTest.findAll()
        return res.json(userTest)
    }

    async getUserAll(req, res) {
        const userTest = await UserTest.findAll(
            {
                include: [
                    {
                        model: User,
                        attributes: ['login', 'email']
                    }
                ]
            }
        )
        return res.json(userTest)
    }

    async getOne(req, res) {
        const {id} = req.params
        const userTest = await UserTest.findOne(
            {
                where:{id}
            }
        )
        return res.json(userTest)
    }
}

module.exports = new UserTestController()