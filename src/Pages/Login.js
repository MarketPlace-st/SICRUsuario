import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import FormularioGeneral from '../Componentes/Formulario';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const campos = [
    {
      label: 'Correo Electrónico',
      type: 'email',
      placeholder: 'Ingrese su correo electrónico',
      name: 'email',
      required: true,
      value: formData.email,
      onChange: handleInputChange
    },
    {
      label: 'Contraseña',
      type: 'password',
      placeholder: 'Ingrese su contraseña',
      name: 'password',
      required: true,
      value: formData.password,
      onChange: handleInputChange
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Datos de inicio de sesión:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <Header isAuthenticated={false} />
      <FormularioGeneral
        titulo="Iniciar Sesión"
        campos={campos}
        botonTexto="Iniciar Sesión"
        onSubmit={handleLogin}
        showLogo={true}
        linkText="¿No tienes una cuenta? Regístrate aquí"
        linkTo="/crear-cuenta"
      />
      <Footer />
    </div>
  );
};

export default Login;
  
