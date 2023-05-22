import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export default function TablaPacientes() {

  const [data, setData] = React.useState([]);
  
  React.useEffect(() => {
    fetch("/pacientes ")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const deleteData = async (id) => {
    try {
      const response = await fetch(`/pacientes/${id}`, {
        method: 'DELETE',
      });
      const dataFromServer = await response.json();
      console.log(dataFromServer);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre y Apellido</TableCell>
            <TableCell align="left">Edad</TableCell>
            <TableCell align="left">DNI</TableCell>
            <TableCell align="left">Obra social</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((paciente) => (
            <TableRow  key={paciente._id}>
              <TableCell align="left">{paciente.nombre + " " + paciente.apellido}</TableCell>
              <TableCell align="left">{paciente.edad}</TableCell>
              <TableCell align="left">{paciente.dni}</TableCell>
              <TableCell align="left">{paciente.obraSocial}</TableCell>
              <TableCell align="left" >
                <Button variant="outlined" color="error" 
                  onClick={()=> deleteData(paciente._id)}>
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