import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TablaConsultorios() {

  const [data, setData] = React.useState([]);
  
  /* Ejemplo cliente haciendo request al server*/
  React.useEffect(() => {
    fetch("/consultorios")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="left">Calle</TableCell>
            <TableCell align="left">Altura</TableCell>
            <TableCell align="left">Localidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((consultorio) => (
            <TableRow>
              <TableCell align="left">{consultorio.nombre}</TableCell>
              <TableCell align="left">{consultorio.calle}</TableCell>
              <TableCell align="left">{consultorio.altura}</TableCell>
              <TableCell align="left">{consultorio.localidad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}