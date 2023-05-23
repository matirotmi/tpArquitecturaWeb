import React from 'react';
import TablaTurnos from '../components/tablaTurnos';
import NavBar from '../components/NavBar';
import { Typography } from '@mui/material';
import CreadorTurnos from '../components/creadorTurnos';

function TurnosPage() {
  return (
    <div>
      <NavBar/>
      <Typography textAlign="center" fontSize="40px">Turnos</Typography>
      <TablaTurnos/>
      <br/>
      <CreadorTurnos/>
    </div>
  );
}

export default TurnosPage;
