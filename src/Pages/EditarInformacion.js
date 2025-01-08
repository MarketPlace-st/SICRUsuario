import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import BannerPerfil from '../Componentes/BannerPerfil';
import SideMenu from '../Componentes/SideMenu';
import '../Estilos/EditarInformacion.css';

const EditarInformacionPersonal = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: ' ',
    telefono: ' ',
    direccion: ' ',
    correo: ' ',
    fechaNacimiento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGuardar = () => {
    console.log('Información guardada:', formData);
    alert('Información personal guardada exitosamente.');
    navigate('/login');
  };

  const handleCancelar = () => {
    console.log('Edición cancelada');
    navigate('/dashboardUsuario');
  };

  return (
    <>
      <Header isAuthenticated={true} />
      <BannerPerfil nombre="Maria Concepcion" correo="mariacon@ejemplo.com" />
      <div className="dashboard-container">
        <div className="sidemenu-container">
          <SideMenu />
        </div>
        <div className="dashboard-main">
          <div className="editar-container">
            <h3>Información personal</h3>
            <form className="editar-form">
              {/* Primera fila: Nombre y Teléfono */}
              <div className="form-row">
                <div className="form-group">
                  <label>Nombre Completo</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Teléfono</label>
                  <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Dirección (ancho completo) */}
              <div className="form-group form-group-full">
                <label>Dirección</label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                />
              </div>

              {/* Última fila: Correo y Fecha */}
              <div className="form-row">
                <div className="form-group">
                  <label>Correo Electrónico</label>
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Fecha de Nacimiento</label>
                  <input
                    type="date"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-buttons">
                <button type="button" className="cancelar-button" onClick={handleCancelar}>
                  Cancelar
                </button>
                <button type="button" className="guardar-button" onClick={handleGuardar}>
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditarInformacionPersonal;

