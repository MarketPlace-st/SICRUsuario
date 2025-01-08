import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import FormularioGeneral from '../Componentes/Formulario';

const RecuperarContrasena2 = () => {
  const navigate = useNavigate();

  const campos = [
    {
      label: 'Nueva Contraseña',
      type: 'password',
      placeholder: 'Nueva Contraseña',
      name: 'password',
      required: true
    },
    {
      label: 'Repita la Contraseña',
      type: 'password',
      placeholder: 'Repita la Contraseña',
      name: 'password',
      required: true
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de login aquí
    navigate('/login');
  };

  return (
    <div className="login-page">
      <Header isAuthenticated={false} />
      <FormularioGeneral
        titulo="Restablecer Contraseña"
        campos={campos}
        botonTexto="Siguiente"
        onSubmit={handleLogin}
        showLogo={true}
      />
      <Footer />
    </div>
  );
};

export default RecuperarContrasena2;