const mongoose = require("mongoose")
require('dotenv').config()

try {
    const server = require("./connectionBD")

    setTimeout(() => server.close(() => {
        mongoose.connection.close(false, () => {
            console.log('Сервер отключен');
            process.exit(0);
        });
    }), 600000)
} catch (err) {
    console.log(err)
}
