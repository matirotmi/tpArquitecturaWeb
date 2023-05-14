import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PacientesPage from './pages/PacientesPage';
import MedicosPage from './pages/MedicosPage';
import TurnosPage from './pages/TurnosPage';
import ConsultoriosPage from './pages/ConsultoriosPage';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/pacientes',
    element: <PacientesPage/>
  },
  {
    path:'/medicos',
    element: <MedicosPage/>
  },
  {
    path:'/consultorios',
    element: <ConsultoriosPage/>
  },
  {
    path:'/turnos',
    element: <TurnosPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
