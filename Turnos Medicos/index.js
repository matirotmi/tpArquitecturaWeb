const port = 3001
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

const pacientesRoutes = require('./routes/pacientes');
const medicosRoutes = require('./routes/medicos');
const consultorioRoutes = require('./routes/consultorios');
const turnoRoutes = require('./routes/turnos');

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
app.use('/consultorios', consultorioRoutes);
app.use('/turnos', turnoRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})
