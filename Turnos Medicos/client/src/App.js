import './App.css';
import React from "react";
import Button from '@mui/material/Button';
import TablaPacientes from './components/tablaPacientes';
import TablaMedicos from './components/tablaMedicos';
import TablaConsultorios from './components/tablaConsultorios';
import TablaTurnos from './components/tablaTurnos';

function App() {
  
  const [data, setData] = React.useState(null);
  
  /* Ejemplo cliente haciendo request al server*/
  React.useEffect(() => {
    fetch("/pacientes/644acc88bc687a1ecf3fcf2f")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Pacientes</h1>
      <TablaPacientes/>
      <h1>Medicos</h1>
      <TablaMedicos/>
      <h1>Consultorios</h1>
      <TablaConsultorios/>
      <h1>Turnos</h1>
      <TablaTurnos/>
    </div>
  );
}

export default App;
