module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://39.107.241.123:27017/personalblog', {
        useNewUrlParser: true
    })
}