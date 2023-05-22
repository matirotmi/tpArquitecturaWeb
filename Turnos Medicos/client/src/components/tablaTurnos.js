import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export default function TablaTurnos() {

  const [data, setData] = React.useState([]);
  
  React.useEffect(() => {
    fetch("/turnos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const deleteData = async (id) => {
    try {
      const response = await fetch(`/turnos/${id}`, {
        method: 'DELETE',
      });
      const dataFromServer = await response.json();
      console.log(dataFromServer); // Imprime la respuesta del servidor en la consola
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre Medico</TableCell>
            <TableCell align="left">Nombre Paciente</TableCell>
            <TableCell align="left">Consultorio</TableCell>
            <TableCell align="left">Fecha</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((turno) => (
            <TableRow key={turno._id}>
              <TableCell align="left">{turno.medico.nombre + " "+ turno.medico.apellido}</TableCell>
              <TableCell align="left">{turno.paciente.nombre + " "+ turno.paciente.apellido}</TableCell>
              <TableCell align="left">{turno.consultorio.nombre}</TableCell>
              <TableCell align="left">{turno.fechaYhora}</TableCell>
              <TableCell align="left">
                <Button variant="outlined" color="error" 
                  onClick={() => deleteData(turno._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}