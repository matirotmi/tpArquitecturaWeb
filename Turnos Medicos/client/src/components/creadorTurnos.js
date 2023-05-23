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

function CreadorTurnos() {
  const [pacientes, setPacientes] = React.useState(new Array());
  const [medicos, setMedicos] = React.useState(new Array());
  const [consultorios, setConsultorios] = React.useState(new Array());

  const [paciente, setPaciente] = React.useState(new Paciente("NOM", "APE", 10, 112233, "OBRA_SOCIAL"));
  const [medico, setMedico] = React.useState(new Medico("NOM", "APE", 10, 100, "ESPECIALIDAD"));
  const [consultorio, setConsultorio] = React.useState(new Consultorio("NOMBRE", "CALLE", 10, "LOCALIDAD"));
  const [fechaYhora, setFechaHora] = React.useState(new Date());

  function armarModelo(p, m, c, f, conf){
    const example = {
        paciente: {
            nombre: p.nombre,
            apellido: p.apellido,
            edad: p.edad,
            dni: p.dni,
            obraSocial: p.obraSocial
        },
        medico: {
            nombre: m.nombre,
            apellido: m.apellido,
            legajo: m.legajo,
            matricula: m.matricula,
            especialidad: m.especialidad
        },
        consultorio:{
            nombre: c.nombre,
            calle: c.calle,
            altura: c.altura,
            localidad: c.localidad
        },
        fechaYhora: f,
        confirmado: conf
      }
      return example;
  }

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
                onChange={(event, newValue) => { setPaciente(newValue);}}
                id="select-paciente"
                sx={{ width: 300 }}
                options={pacientes}
                autoHighlight
                getOptionLabel={(option) => option.nombre + " " + option.apellido}
                renderOption={(props, option) => (
                    <Box sx={{ mr: 2, flexShrink: 0 } } {...props}>
                        {option.nombre} {option.apellido}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField {...params} label="Paciente" inputProps={{...params.inputProps}}/>)}
                />
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
                onChange={(event, newValue) => { setMedico(newValue);}}
                id="select-paciente"
                sx={{ width: 300 }}
                options={medicos}
                autoHighlight
                getOptionLabel={(option) => option.nombre + " " + option.apellido}
                renderOption={(props, option) => (
                    <Box sx={{ mr: 2, flexShrink: 0 } } {...props}>
                        {option.nombre} {option.apellido}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField {...params} label="Medico" inputProps={{...params.inputProps}}/>)}
                />
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
                onChange={(event, newValue) => { setConsultorio(newValue);}}
                id="select-paciente"
                sx={{ width: 300 }}
                options={consultorios}
                autoHighlight
                getOptionLabel={(option) => option.nombre}
                renderOption={(props, option) => (
                    <Box sx={{ mr: 2, flexShrink: 0 } } {...props}>
                        {option.nombre} {option.apellido}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField {...params} label="Consultorio" inputProps={{...params.inputProps}}/>)}
                />
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker label="Basic date time picker" 
                onChange={(newValue) => setFechaHora(newValue)}/>
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>
      <br></br>
      <Button variant='outlined' 
        onClick={() => 
            postData(armarModelo(paciente, medico, consultorio, fechaYhora, true))
        }>
        Cargar
      </Button>
    </div>
  );
}

export default CreadorTurnos;