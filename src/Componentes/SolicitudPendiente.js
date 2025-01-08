import React from 'react';
import PropTypes from 'prop-types';
import '../Estilos/SolicitudPendiente.css';

const SolicitudPendiente = ({ 
  solicitudes = [], 
  showTitle = true,
  onRowClick,
  isLoading = false,
  error = null 
}) => {
  if (isLoading) {
    return <div className="solicitud-pendiente-loading">Cargando solicitudes...</div>;
  }

  if (error) {
    return <div className="solicitud-pendiente-error">Error: {error}</div>;
  }

  if (solicitudes.length === 0) {
    return (
      <div className="solicitud-pendiente">
        {showTitle && <h2>Pendiente</h2>}
        <div className="solicitudes-empty">No hay solicitudes pendientes</div>
      </div>
    );
  }

  return (
    <div className="solicitud-pendiente">
      {showTitle && <h2>Pendiente</h2>}
      
      <div className="solicitudes-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre del Establecimiento</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {solicitudes.map((solicitud) => (
              <tr 
                key={solicitud.id} 
                onClick={() => onRowClick && onRowClick(solicitud)}
                className={onRowClick ? 'clickable' : ''}
              >
                <td>{solicitud.numero}</td>
                <td>{solicitud.nombreEstablecimiento}</td>
                <td>
                  <span className={`estado-badge ${solicitud.estado.toLowerCase()}`}>
                    {solicitud.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

SolicitudPendiente.propTypes = {
  solicitudes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      numero: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      nombreEstablecimiento: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired
    })
  ),
  showTitle: PropTypes.bool,
  onRowClick: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string
};

export default SolicitudPendiente;

