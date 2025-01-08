import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import CrearCuenta from './Pages/CrearCuenta';
import LandingPageUsuario from './Pages/LandingPageUsuario';
import { Routes, Route } from 'react-router-dom';
import Solicitudes from './Pages/Solicitudes';
import RecuperarContrasena from './Pages/RecuperarContrasena';
import RecuperarContrasena2 from './Pages/RecuperarContrasena2';
import HistorialSolicitudes from './Pages/Historial';
import DashBoard from './Pages/DashBoard';
import EditarInformacionPersonal from './Pages/EditarInformacion';
import CambiarContrasena from './Pages/CambiarContraseña';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CrearCuenta />} />
        <Route path="/dashboard" element={<LandingPageUsuario />} />
        <Route path="/solicitudes" element={<Solicitudes />} />
        <Route path="/RecuperarContrasena" element={<RecuperarContrasena />} />
        <Route path="/RecuperarContrasena2" element={<RecuperarContrasena2 />} />
        <Route path="/historial" element={<HistorialSolicitudes/>} />
        <Route path="/dashboardUsuario" element={<DashBoard />} />
        <Route path="/editar-informacion" element={<EditarInformacionPersonal />} />
        <Route path="/cambiar-contrasena" element={<CambiarContrasena />} />
      </Routes>
    </div>
  );
}

export default App;
