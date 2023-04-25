const mongoose = require('mongoose');

const paciente = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    apellido: {
        required: true,
        type: String
    },
    edad: {
        required: true,
        type: Number
    },
    dni: {
        required: true,
        type: Number
    },
    obraSocial: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', paciente)