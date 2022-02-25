const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    database:{
        host: process.env.HOST ||  "localhost",
        user: process.env.USER ||  "root",
        password: process.env.PASSWORD ||  "1234567890",
        database: process.env.DATABASE || "bdenlaces"
    },
    PORT : process.env.PORT || "4000",
    secret : "phkdcual"
} 