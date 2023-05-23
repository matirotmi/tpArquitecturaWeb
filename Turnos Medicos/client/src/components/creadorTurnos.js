import React from 'react';
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paciente } from '../models/paciente';
import { Medico } from '../models/medico';
import { Consultorio } from '../models/consultorio';
import { Turno } from '../models/turno';

const example = {
    "paciente": {
        "nombre": "Matias",
        "apellido": "Rotmistrovsky",
        "edad": 23,
        "dni": 42375214,
        "obraSocial": "Swiss Medical"
    },
    "medico": {
        "nombre": "Rene",
        "apellido": "Favaloro",
        "legajo": 1234,
        "matricula": 1000,
        "especialidad": "cardiologia"
    },
    "consultorio":{
        "nombre": "Consultorio Belgrano",
        "calle": "Av del Libertador",
        "altura": 5933,
        "localidad": "Belgrano"
    },
    "fechaYhora": "10/05/2023",
    "confirmado":true
  }

function CreadorTurnos() {
  const [pacientes, setPacientes] = React.useState([]);
  const [medicos, setMedicos] = React.useState([]);
  const [consultorios, setConsultorios] = React.useState([]);

  const [paciente, setPaciente] = React.useState(new Paciente("NOM", "APE", 10, 112233, "OBRA_SOCIAL"));
  const [medico, setMedico] = React.useState(new Medico("NOM", "APE", 10, 100, "ESPECIALIDAD"));
  const [consultorio, setConsultorio] = React.useState(new Consultorio("NOMBRE", "CALLE", 10, "LOCALIDAD"));
  const [fechaYhora, setFechaHora] = React.useState(new Date());

  const postData = async (data) => {
    try {
      const response = await fetch('/turnos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const dataFromServer = await response.json();
      console.log(dataFromServer);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };
  
  React.useEffect(() => {
    fetch("/pacientes ")
      .then((res) => res.json())
      .then((pacientes) => setPacientes(pacientes));
  }, []);

  React.useEffect(() => {
    fetch("/medicos ")
      .then((res) => res.json())
      .then((medicos) => setMedicos(medicos));
  }, []);

  React.useEffect(() => {
    fetch("/consultorios ")
      .then((res) => res.json())
      .then((consultorios) => setConsultorios(consultorios));
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={pacientes.map((option)=>option.nombre + " " + option.apellido)}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Paciente" />}
            />
          </Grid>
          <Grid item xs={3}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={medicos.map((option)=>option.nombre + " " + option.apellido)}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Medico" />}
            />
          </Grid>
          <Grid item xs={3}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={consultorios.map((option)=>option.nombre)}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Consultorio" />}
            />
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker label="Basic date time picker" />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>
      <br></br>
      <Button variant='outlined' 
        onClick={() => 
            postData(new Turno(paciente,medico,consultorio,fechaYhora,true))            
           /*  console.log(new Turno(paciente,medico,consultorio,fechaYhora,true)) */
        }>
        Cargar
      </Button>
    </div>
  );
}

export default CreadorTurnos;