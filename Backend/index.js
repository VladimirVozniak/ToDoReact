const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();

const PORT = 3001;

const apiRoutes = require("./src/modules/routes/routes")

app.use(cors())
app.use(bodyParser.json())
app.use('/', apiRoutes)
    
try {
    mongoose.connect(
        'mongodb+srv://admin:1q2w3e4r@cluster0.4oc1c.mongodb.net/myFirstDatabase',
    )
    app.listen(PORT, () => {
        console.log("Сервер был подключен...");
    })
} catch (err) {
    console.log(err);
}