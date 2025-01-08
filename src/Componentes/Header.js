import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Imagenes/LogoSICR.png';
import { FaUserCircle } from 'react-icons/fa';
import '../Estilos/Header.css';

const Header = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">
        <Link to={isAuthenticated ? "/dashboard" : "/"}>
          <img src={logo} alt="SICR" />
        </Link>
      </div>
      
      {isAuthenticated ? (
        // Menú para usuarios autenticados
        <nav>
          <button onClick={() => navigate('/solicitudes')}>Solicitudes</button>
          <button onClick={() => navigate('/historial')}>Historial de Solicitudes</button>
        </nav>
      ) : (
        // Menú para usuarios no autenticados
        <nav>
          <button>Solicitudes</button>
          <button>Historial de Solicitudes</button>
        </nav>
      )}

      <div className="auth-buttons">
        {isAuthenticated ? (
          <Link to="/dashboardUsuario">
          <FaUserCircle className="user-icon" size={30} color="#D94A31" />
          </Link>
        ) : (
          <>
            <button className="crearcuenta" onClick={() => navigate('/register')}>
              Crear Cuenta
            </button>
            <button className="iniciarsesion" onClick={() => navigate('/login')}>
              Iniciar Sesión
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;


