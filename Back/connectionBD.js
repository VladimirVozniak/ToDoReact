const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require('cookie-parser')
const app = express()
require('dotenv').config()

try {
    const PORT = process.env.DB_PORT || 3002
    const URL = process.env.DB_URL

    const apiRoutes = require("./routes")

    app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
    app.use(bodyParser.json())
    app.use('/', apiRoutes)
    app.use(cookieParser())

    mongoose.connect(URL)

    module.exports = app.listen(PORT, () => {
        console.log('Сервер был подключен')
    })
} catch (e) {
    console.log(e)
}