import React, { useState } from 'react';
import TablaMedicos from '../components/tablaMedicos';
import NavBar from '../components/NavBar';
import { Typography } from '@mui/material';
import CreadorMedicos from '../components/creadorMedicos';

function MedicosPage() {
  return (
    <div>
      <NavBar/>
      <Typography textAlign="center" fontSize="40px">Medicos</Typography>
      <TablaMedicos/>
      <br/>
      <CreadorMedicos/>
    </div>
  );
}

export default MedicosPage;
