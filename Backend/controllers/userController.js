const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const {secret} = require('../config')

const generateAccessToken = (id) => {
    const payload = {id}
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

module.exports.login = async (req, res) => {
    try {
        const {login, password} = req.body
        const user = await User.findOne({login})
        if (!user) {
            return res.status(400).json({massage: `User ${login} not found`})
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({massage: `Wrong password entered`})
        }
        const token = generateAccessToken(user._id)
        res.send({token})
    } catch (e) {
        res.send(e)
    }
}

module.exports.registration = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({massage: 'Registration error', errors})
        }
        const {login, password} = req.body
        const candidate = await User.findOne({login})
        if (candidate) {
            return res.status(400).json({massage: 'This user already exists'})
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

// module.exports.deleteUser = async (req, res) => {
//     try {
//         await User.deleteOne({_id: req.query.id})
//         res.send({data: "id: " + req.query.id + " deleted"})
//     } catch (e) {
//         res.send(e)
//     }
// };