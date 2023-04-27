const port = 3000
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

const pacientesRoutes = require('./routes/pacientes');
const medicosRoutes = require('./routes/medicos');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(express.json());
app.use('/pacientes', pacientesRoutes);
app.use('/medicos', medicosRoutes);

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})
