const mongoose = require('mongoose');

const medico = new mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    apellido: {
        required: true,
        type: String
    },
    legajo: {
        required: true,
        type: Number
    },
    matricula: {
        required: true,
        type: Number
    },
    especialidad: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Medico', medico)