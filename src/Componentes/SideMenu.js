import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaKey, FaSignOutAlt, FaUserCog } from 'react-icons/fa';
import '../Estilos/SideMenu.css';

const SideMenu = () => {
  const navigate = useNavigate();

  const handleEditarInfo = () => {
    navigate('/editar-informacion'); // Redirige a la página de Editar Información Personal
  };

  const handleCambiarContrasena = () => {
    navigate('/cambiar-contrasena'); // Redirige a la página de Cambiar Contraseña
  };

  const handleCerrarSesion = () => {
    navigate('/'); // Redirige a la página principal
  };

  return (
    <div className="side-menu-container">
      <div className="side-menu-header">
        <FaUserCog size={24} color="#D94A31" />
        <h3>Gestionar Cuenta</h3>
      </div>
      <div className="side-menu-body">
        <button className="side-menu-item" onClick={handleEditarInfo}>
          <FaEdit size={18} color="#D94A31" />
          <span>Editar Información Personal</span>
        </button>
        <button className="side-menu-item" onClick={handleCambiarContrasena}>
          <FaKey size={18} color="#D94A31" />
          <span>Cambiar Contraseña</span>
        </button>
      </div>
      <div className="side-menu-footer">
        <button className="cerrar-sesion-button" onClick={handleCerrarSesion}>
          <FaSignOutAlt size={18} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
};

export default SideMenu;



