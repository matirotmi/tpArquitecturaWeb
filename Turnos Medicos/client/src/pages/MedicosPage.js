import React, { useState } from 'react';
import TablaMedicos from '../components/tablaMedicos';
import NavBar from '../components/NavBar';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Medico } from '../models/medico';

function MedicosPage() {
  const [medico, setMedico] = useState(new Medico("NOM", "APE", 10, 100, "ESPECIALIDAD"));
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [legajo, setLegajo] = useState("");
  const [matricula, setMatricula] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  const postData = async (data) => {
    try {
      const response = await fetch('/medicos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const dataFromServer = await response.json();
      console.log(dataFromServer); // Imprime la respuesta del servidor en la consola
      setMedico(dataFromServer);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar/>
      <Typography textAlign="center" fontSize="40px">Medicos</Typography>
      <TablaMedicos/>
      <br/>
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
        <TextField id="txtLegajo" label="Legajo" variant="outlined" value={legajo}
          onChange={(newValue) => setLegajo(newValue.target.value)}/>
        <TextField id="txtMatricula" label="Matricula" variant="outlined" value={matricula}
          onChange={(newValue) => setMatricula(newValue.target.value)}/>
        <TextField id="txtEspecialidad" label="Especialidad" variant="outlined" value={especialidad}
          onChange={(newValue) => setEspecialidad(newValue.target.value)}/>
        <Button variant='outlined' onClick={()=>{
             setMedico(new Medico(nombre, apellido, legajo, matricula, especialidad));
             console.log(medico);
             /* postData(medico); */
          }}>
            Cargar
        </Button>
      </Box>
      
    </div>
  );
}

export default MedicosPage;
