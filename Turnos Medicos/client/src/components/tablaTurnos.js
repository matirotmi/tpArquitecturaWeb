import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TablaTurnos() {

  const [data, setData] = React.useState([]);
  
  /* Ejemplo cliente haciendo request al server*/
  React.useEffect(() => {
    fetch("/turnos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre Medico</TableCell>
            <TableCell align="left">Nombre Paciente</TableCell>
            <TableCell align="left">Consultorio</TableCell>
            <TableCell align="left">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((turno) => (
            <TableRow>
              <TableCell align="left">{turno.medico.nombre + " "+ turno.medico.apellido}</TableCell>
              <TableCell align="left">{turno.paciente.nombre + " "+ turno.paciente.apellido}</TableCell>
              <TableCell align="left">{turno.consultorio.nombre}</TableCell>
              <TableCell align="left">{turno.fechaYhora}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}