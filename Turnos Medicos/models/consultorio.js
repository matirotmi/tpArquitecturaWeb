const mongoose = require('mongoose');

const consultorio = new mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    calle: {
        required: true,
        type: String
    },
    altura: {
        required: true,
        type: Number
    },
    localidad: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Consultorio', consultorio)