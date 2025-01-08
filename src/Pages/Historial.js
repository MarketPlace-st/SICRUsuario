import React, { useState } from 'react';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import SearchBar from '../Componentes/SearchBar';
import SolicitudPendiente from '../Componentes/SolicitudPendiente';
import '../Estilos/Historial.css';

const HistorialSolicitudes = () => {
  // Datos de las solicitudes definidos localmente
  const solicitudesIniciales = [
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

  const [solicitudesFiltradas, setSolicitudesFiltradas] = useState(solicitudesIniciales);

  const filters = [
    {
      name: 'estado',
      label: 'Estado de la Solicitud',
      type: 'select',
      options: [
        { value: 'pendiente', label: 'Pendiente' },
        { value: 'aprobado', label: 'Aprobado' },
        { value: 'rechazado', label: 'Rechazado' }
      ]
    }
  ];

  const handleSearch = (searchTerm, activeFilters) => {
    let filtered = solicitudesIniciales;
    
    if (searchTerm) {
      filtered = filtered.filter(solicitud => 
        solicitud.nombreEstablecimiento.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.estado) {
      filtered = filtered.filter(solicitud => 
        solicitud.estado.toLowerCase() === activeFilters.estado.toLowerCase()
      );
    }

    setSolicitudesFiltradas(filtered);
  };

  const handleSolicitudClick = (solicitud) => {
    console.log('Solicitud seleccionada:', solicitud);
  };

  return (
    <>
      <Header isAuthenticated={true} />
      <div className="historial-solicitudes-page">
        <div className="formulario-header">
          <div className="titulo-container">
            <h2>Historial de Solicitudes</h2>
          </div>
        </div>
        <div className="historial-solicitudes-container">
          <div className="search-section">
            <SearchBar 
              placeholder="Buscar por nombre de establecimiento..."
              filters={filters}
              onSearch={handleSearch}
              showFilters={true}
            />
          </div>
          <SolicitudPendiente 
            solicitudes={solicitudesFiltradas}
            showTitle={false}
            onRowClick={handleSolicitudClick}
            isLoading={false}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistorialSolicitudes;
