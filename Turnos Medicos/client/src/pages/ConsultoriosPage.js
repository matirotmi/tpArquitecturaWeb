import React, { useState } from 'react';
import TablaConsultorios from '../components/tablaConsultorios';
import NavBar from '../components/NavBar';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Consultorio } from '../models/consultorio';

function ConsultoriosPage() {
  const [consultorio, setConsultorio] = useState(new Consultorio("NOMBRE", "CALLE", 10, "LOCALIDAD"));
  const [nombre, setNombre] = useState("");
  const [calle, setCalle] = useState("");
  const [altura, setAltura] = useState("");
  const [localidad, setLocalidad] = useState("");

  const postData = async (data) => {
    try {
      const response = await fetch('/consultorios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const dataFromServer = await response.json();
      console.log(dataFromServer); // Imprime la respuesta del servidor en la consola
      setConsultorio(dataFromServer);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar/>
      <Typography textAlign="center" fontSize="40px">Consultorios</Typography>
      <TablaConsultorios/>
      <Box component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
        <TextField id="txtNombre" label="Nombre" variant="outlined" value={nombre}
          onChange={(newValue) => setNombre(newValue.target.value)}/>
        <TextField id="txtApellido" label="Calle" variant="outlined" value={calle}
          onChange={(newValue) => setCalle(newValue.target.value)}/>
        <TextField id="txtLegajo" label="Altura" variant="outlined" value={altura}
          onChange={(newValue) => setAltura(newValue.target.value)}/>
        <TextField id="txtMatricula" label="Localidad" variant="outlined" value={localidad}
          onChange={(newValue) => setLocalidad(newValue.target.value)}/>
        <Button variant='outlined' onClick={()=>{
             setConsultorio(new Consultorio(nombre, calle, altura, localidad));
             console.log(consultorio);
             /* postData(consultorio); */
          }}>
            Cargar
        </Button>
      </Box>
    </div>
  );
}

export default ConsultoriosPage;
