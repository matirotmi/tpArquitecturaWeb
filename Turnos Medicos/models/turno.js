const mongoose = require('mongoose');
const Consultorio = require('../models/consultorio').schema;
const Paciente = require('../models/paciente').schema;
const Medico = require('../models/medico').schema;

const turno = new mongoose.Schema({
    paciente: {
        required: true,
        type: Paciente
    },
    medico: {
        required: true,
        type: Medico
    },
    consultorio: {
        required: true,
        type: Consultorio
    },
    fechaYhora: {
        required: true,
        type: String
    },
    confirmado:{
        required: true,
        type: Boolean
    }
})

module.exports = mongoose.model('Turno', turno)