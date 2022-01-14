const User = require("../models/User")
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator")
const {generateAccessToken} = require("../middleware/authMiddleware")

module.exports.login = async (req, res) => {
    try {
        const {login, password} = req.body
        const user = await User.findOne({login})
        if (!user) {
            return res.status(400).json({massage: `User ${login} not found`})
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({massage: `Wrong password entered`})
        }
        const token = generateAccessToken(user._id)

        res.cookie('token', token, {
            path: '/',
            expires: new Date(new Date().getTime() + 8 * 60 * 60 * 1000),
        }).send()
    } catch (e) {
        res.send(e)
    }
}

module.exports.registration = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: 'Registration error', errors})
        }
        const {login, password} = req.body
        const candidate = await User.findOne({login})
        if (candidate) {
            return res.status(400).json({message: 'This user already exists'})
        }

        const hashPassword = bcrypt.hashSync(password, 7)
        await User.create({login, password: hashPassword},
            (e) => {
                if (e) return e
                next()
            })
    } catch (e) {
        res.send(e)
    }
}

module.exports.exitAccount = (req, res) => {
    try {
        res.clearCookie('token').send()
    } catch (e) {
        res.send(e)
    }
}