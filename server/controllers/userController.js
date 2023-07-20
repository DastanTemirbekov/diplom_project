const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {

    async registration(req, res, next) {
        const {email, password, login, role} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password '))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, login, password: hashPassword})
        // const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        console.log(token)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)

        return res.json({token})
    }

    async getOneUser(req, res) {

        const {id} = req.params
        const course = await User.findOne(
            {
                where:{id}
            }
        )
        return res.json(course)
    }

    async getAllUser(req, res) {
        const users = await User.findAll()
        return res.json(users)
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
        // res.json({message: "All right"})


        // const {id} = req.query
        // if (!id) {
        //     return next(ApiError.badRequest("Не задан id"))
        // }
        // res.json(id)

        // const query = req.query
        // res.json(query.id)

    }
}

module.exports = new UserController()