import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TablaMedicos() {

  const [data, setData] = React.useState([]);
  
  /* Ejemplo cliente haciendo request al server*/
  React.useEffect(() => {
    fetch("/medicos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre y Apellido</TableCell>
            <TableCell align="left">Legajo</TableCell>
            <TableCell align="left">Matricula</TableCell>
            <TableCell align="left">Especialidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((medico) => (
            <TableRow >
              <TableCell align="left">{medico.nombre + " " + medico.apellido}</TableCell>
              <TableCell align="left">{medico.legajo}</TableCell>
              <TableCell align="left">{medico.matricula}</TableCell>
              <TableCell align="left">{medico.especialidad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}