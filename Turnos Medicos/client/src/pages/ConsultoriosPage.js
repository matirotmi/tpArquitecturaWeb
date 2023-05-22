import React, { useState } from 'react';
import TablaConsultorios from '../components/tablaConsultorios';
import NavBar from '../components/NavBar';
import { Typography } from '@mui/material';
import CreadorConsultorios from '../components/creadorConsultorios';

function ConsultoriosPage() {
  return (
    <div>
      <NavBar/>
      <Typography textAlign="center" fontSize="40px">Consultorios</Typography>
      <TablaConsultorios/>
      <CreadorConsultorios/>
    </div>
  );
}

export default ConsultoriosPage;
