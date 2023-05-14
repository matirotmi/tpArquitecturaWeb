import React from 'react';
import TablaTurnos from '../components/tablaTurnos';
import NavBar from '../components/NavBar';
import { Typography } from '@mui/material';

function TurnosPage() {
  return (
    <div>
      <NavBar/>
      <Typography textAlign="center" fontSize="40px">Turnos</Typography>
      <TablaTurnos/>
    </div>
  );
}

export default TurnosPage;
