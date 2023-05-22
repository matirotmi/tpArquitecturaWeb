import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export default function TablaMedicos() {

  const [data, setData] = React.useState([]);
  
  React.useEffect(() => {
    fetch("/medicos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const deleteData = async (id) => {
    try {
      const response = await fetch(`/medicos/${id}`, {
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
            <TableCell align="left">Nombre y Apellido</TableCell>
            <TableCell align="left">Legajo</TableCell>
            <TableCell align="left">Matricula</TableCell>
            <TableCell align="left">Especialidad</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((medico) => (
            <TableRow  key={medico._id} >
              <TableCell align="left">{medico.nombre + " " + medico.apellido}</TableCell>
              <TableCell align="left">{medico.legajo}</TableCell>
              <TableCell align="left">{medico.matricula}</TableCell>
              <TableCell align="left">{medico.especialidad}</TableCell>
              <TableCell align="left" >
                <Button variant="outlined" color="error" 
                  onClick={()=>deleteData(medico._id)}>
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