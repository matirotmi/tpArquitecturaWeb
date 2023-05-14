import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link href="/pacientes" color="inherit">Pacientes</Link>
          </Button>
          <Button color="inherit">
            <Link href="/medicos" color="inherit">Medicos</Link>
          </Button>
          <Button color="inherit">
           <Link href="/consultorios" color="inherit">Consultorios</Link>
          </Button>
          <Button color="inherit">
            <Link href="/turnos" color="inherit">Turnos</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}