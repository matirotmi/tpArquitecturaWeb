const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/medicos', (req, res) => {
    res.send('TRAER MEDICOS')
})


app.get('/pacientes', (req, res) => {
    res.send('TRAER PACIENTES')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})