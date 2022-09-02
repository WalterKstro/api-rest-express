require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors')

const router = require('../routes/user.routes');
const { connection } = require('../database/config.database');

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.connect()
        this.middlewares()
        this.listen()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running at port: ${this.port}`)
        })
    }

    connect() {
        connection()
    }
    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use('/api', router)
        this.app.use(express.static(path.join(__dirname, '../public')));
    }
}

module.exports = Server;