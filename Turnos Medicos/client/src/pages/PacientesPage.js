import React, { useState } from 'react';
import TablaPacientes from '../components/tablaPacientes';
import NavBar from '../components/NavBar';
import { Typography } from '@mui/material';
import CreadorPacientes from '../components/creadorPaciente';

function PacientesPage() {

  return (
    <div>
      <NavBar/>
      <Typography textAlign="center" fontSize="40px">Pacientes</Typography>
      <TablaPacientes/>
      <CreadorPacientes/>
    </div>
  );
}

export default PacientesPage;
