import React, { useState } from 'react';
import TablaPacientes from '../components/tablaPacientes';
import NavBar from '../components/NavBar';
import { Typography } from '@mui/material';
import { Paciente } from '../models/paciente';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function PacientesPage() {
  const [paciente, setPaciente] = useState(new Paciente("Mati", "Rot", 10, 112233, "SwissMed"));
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [dni, setDni] = useState("");
  const [obraSocial, setObraSocial] = useState("");

  const postData = async (data) => {
    try {
      const response = await fetch('/pacientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const dataFromServer = await response.json();
      console.log(dataFromServer); // Imprime la respuesta del servidor en la consola
      setPaciente(dataFromServer);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar/>
      <Typography textAlign="center" fontSize="40px">Pacientes</Typography>
      <TablaPacientes/>
      <Box component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
        <TextField id="txtNombre" label="Nombre" variant="outlined" value={nombre}
          onChange={(newValue) => setNombre(newValue.target.value)}/>
        <TextField id="txtApellido" label="Apellido" variant="outlined" value={apellido}
          onChange={(newValue) => setApellido(newValue.target.value)}/>
        <TextField id="txtEdad" label="Edad" variant="outlined" value={edad}
          onChange={(newValue) => setEdad(newValue.target.value)}/>
        <TextField id="txtdni" label="DNI" variant="outlined" value={dni}
          onChange={(newValue) => setDni(newValue.target.value)}/>
        <TextField id="txtObraSocial" label="Obra Social" variant="outlined" value={obraSocial}
          onChange={(newValue) => setObraSocial(newValue.target.value)}/>
        <Button variant='outlined' onClick={()=>{
             setPaciente(new Paciente(nombre, apellido, edad, dni, obraSocial));
             console.log(paciente);
             /* postData(paciente); */
          }}>
            Cargar
        </Button>
      </Box>
    </div>
  );
}

export default PacientesPage;
