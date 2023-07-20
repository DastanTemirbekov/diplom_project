const {Test} = require('../models/models')
const ApiError = require('../error/ApiError')

class TestController {
    async create(req, res, next) {
        try {
            const {question, options, correctAnswer} = req.body
            const test = await Test.create({question, options, correctAnswer})
            return res.json(test)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const test = await Test.findAll()
        return res.json(test)
    }

    async getOne(req, res) {
        const {id} = req.params
        const tariff = await Test.findOne(
            {
                where:{id}
            }
        )
        return res.json(tariff)
    }
}

module.exports = new TestController()