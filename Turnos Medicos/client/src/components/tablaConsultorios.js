import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export default function TablaConsultorios() {

  const [data, setData] = React.useState([]);
  
  React.useEffect(() => {
    fetch("/consultorios")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const deleteData = async (id) => {
    try {
      const response = await fetch(`/consultorios/${id}`, {
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
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="left">Calle</TableCell>
            <TableCell align="left">Altura</TableCell>
            <TableCell align="left">Localidad</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((consultorio) => (
            <TableRow key={consultorio._id}>
              <TableCell align="left">{consultorio.nombre}</TableCell>
              <TableCell align="left">{consultorio.calle}</TableCell>
              <TableCell align="left">{consultorio.altura}</TableCell>
              <TableCell align="left">{consultorio.localidad}</TableCell>
              <TableCell align="left" >
                <Button variant="outlined" color="error"
                  onClick={()=>deleteData(consultorio._id)}>
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