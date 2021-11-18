const jwt = require('jsonwebtoken')
const {secret} = require('../config')

module.exports.checkToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        jwt.verify(token, secret)
        next()
    } catch (e) {
        res.send(false)
    }
}