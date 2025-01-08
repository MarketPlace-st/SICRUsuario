import React from 'react';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import BannerPerfil from '../Componentes/BannerPerfil';
import SideMenu from '../Componentes/SideMenu';
import InfoCard from '../Componentes/InfoCard';
import '../Estilos/DashBoard.css';

const DashBoard = () => {
  const handleEditarInfo = () => {
    console.log('Editar Información Personal');
  };

  const handleCambiarContrasena = () => {
    console.log('Cambiar Contraseña');
  };

  const handleCerrarSesion = () => {
    console.log('Cerrar Sesión');
  };

  const personalInfo = [
    { label: 'Nombre', value: '' },
    { label: 'Apellido', value: '' },
    { label: 'Teléfono', value: '' },
    { label: 'Correo Electrónico', value: '' },
    { label: 'Fecha de Nacimiento', value: '' },
    { label: 'Dirección', value: '' },
  ];

  // Datos de las solicitudes
  const solicitudesPendientes = [
    {
      id: 1,
      numero: "001",
      nombreEstablecimiento: "Distribuidora del norte",
      estado: "pendiente"
    },
    {
      id: 2,
      numero: "002",
      nombreEstablecimiento: "Matadero La Esperanza",
      estado: "rechazado"
    },
    {
      id: 3,
      numero: "003",
      nombreEstablecimiento: "Distribuidora del Sur",
      estado: "pendiente"
    }
  ];

  return (
    <>
      <Header isAuthenticated={true} />
      <BannerPerfil nombre="Maria Concepcion" correo="mariacon@ejemplo.com" />
      <div className="dashboard-container">
        <div className="sidemenu-container">
          <SideMenu
            onEditarInfo={handleEditarInfo}
            onCambiarContrasena={handleCambiarContrasena}
            onCerrarSesion={handleCerrarSesion}
          />
        </div>
        <div className="dashboard-main">
          <div className="dashboard-row">
            <InfoCard titulo="Información personal" data={personalInfo} />
          </div>
          <div className="solicitudes-section">
            <h2>Solicitudes Pendientes</h2>
            <div className="table-container">
              <table className="solicitudes-table">
                <thead>
                  <tr>
                    <th>Número</th>
                    <th>Establecimiento</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {solicitudesPendientes.map((solicitud) => (
                    <tr key={solicitud.id}>
                      <td>{solicitud.numero}</td>
                      <td>{solicitud.nombreEstablecimiento}</td>
                      <td>{solicitud.estado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashBoard;




