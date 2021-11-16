const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
require('dotenv').config()

const PORT = process.env.DB_PORT || 3001
const USER = process.env.DB_USER
const PASS = process.env.DB_PASS

const apiRoutes = require("./routes/routes")

app.use(cors())
app.use(bodyParser.json())
app.use('/', apiRoutes)

try {
    mongoose.connect(
        `mongodb+srv://${USER}:${PASS}@cluster0.4oc1c.mongodb.net/myFirstDatabase`,
    )

    const server = app.listen(PORT, () => {
        console.log('Сервер был подключен')
    })

    // setTimeout(() => server.close(() => {
    //     mongoose.connection.close(false, () => {
    //         console.log('Сервер отключен');
    //         process.exit(0);
    //     });
    // }), 15000)
} catch (err) {
    console.log(err)
}