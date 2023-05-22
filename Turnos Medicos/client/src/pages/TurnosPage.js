import React from 'react';
import TablaTurnos from '../components/tablaTurnos';
import NavBar from '../components/NavBar';
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 }
];

function TurnosPage() {
  const [pacientes, setPacientes] = React.useState([]);
  const [medicos, setMedicos] = React.useState([]);
  const [consultorios, setConsultorios] = React.useState([]);
  
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
      <NavBar/>
      <Typography textAlign="center" fontSize="40px">Turnos</Typography>
      <TablaTurnos/>
      <br></br>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={pacientes.map((option)=>option.nombre + " " + option.apellido)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Paciente" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={medicos.map((option)=>option.nombre + " " + option.apellido)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Medico" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={consultorios.map((option)=>option.nombre)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Consultorio" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Fecha" />}
      />
      <Button variant='outlined'>Cargar</Button>
    </div>
  );
}

export default TurnosPage;
