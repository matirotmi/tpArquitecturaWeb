import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TablaPacientes() {

  const [data, setData] = React.useState([]);
  
  /* Ejemplo cliente haciendo request al server*/
  React.useEffect(() => {
    fetch("/pacientes ")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre y Apellido</TableCell>
            <TableCell align="left">Edad</TableCell>
            <TableCell align="left">DNI</TableCell>
            <TableCell align="left">Obra social</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((paciente) => (
            <TableRow>
              <TableCell align="left">{paciente.nombre + " " + paciente.apellido}</TableCell>
              <TableCell align="left">{paciente.edad}</TableCell>
              <TableCell align="left">{paciente.dni}</TableCell>
              <TableCell align="left">{paciente.obraSocial}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}