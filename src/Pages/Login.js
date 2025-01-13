import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import FormularioGeneral from '../Componentes/Formulario';
import { authService } from '../services/auth.service';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(formData);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  const campos = [
    {
      label: 'Correo Electrónico',
      type: 'email',
      placeholder: 'Ingrese su correo electrónico',
      name: 'email',
      required: true,
      value: formData.email,
      onChange: handleInputChange,
      error: error
    },
    {
      label: 'Contraseña',
      type: 'password',
      placeholder: 'Ingrese su contraseña',
      name: 'password',
      required: true,
      value: formData.password,
      onChange: handleInputChange,
      error: error
    }
  ];

  return (
    <div className="page-container">
      <div className="content-wrapper">
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
      </div>
      <Footer />
    </div>
  );
};

export default Login;
  
