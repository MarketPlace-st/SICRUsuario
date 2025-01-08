import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Estilos/Banner.css';

import Imagenbanner from '../Imagenes/Imagenbanner.jpg'; // Reemplaza con la ruta correcta de tu imagen

const Banner = () => {
  const navigate = useNavigate(); // Hook para navegación

  const handleSolicitar = () => {
    navigate('/solicitudes'); // Cambia '/solicitudes' por la ruta que desees
  };

  return (
    <>
      {/* Sección principal del banner */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${Imagenbanner})` }}
      >
        <div className="hero-content">
          <h1>¡Solicita tu inspección!</h1>
          <p>
            Asegura la aprobación de tu establecimiento según las normativas
            sanitarias
          </p>
          <button className="hero-button" onClick={handleSolicitar}>
            Solicitar
          </button>
        </div>
      </div>

      {/* Sección de estadísticas */}
      <div className="stats-section">
        <div className="stats-card">
          <h2>+59</h2>
          <p>Establecimientos Certificados Cumpliendo Normativas Sanitarias</p>
        </div>
        <div className="stats-card">
          <h2>+120</h2>
          <p>Inspecciones Realizadas para Garantizar la Seguridad Alimentaria</p>
        </div>
        <div className="stats-card">
          <h2>+30</h2>
          <p>Lotes de Productos Cárnicos Rastreables y Verificados</p>
        </div>
      </div>
    </>
  );
};

export default Banner;


