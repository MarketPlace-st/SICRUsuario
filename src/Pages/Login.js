import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import FormularioGeneral from '../Componentes/Formulario';
import { authService } from '../Api/AuthService';
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    setError('');

    try {
      console.log('Datos a enviar:', formData);

      const response = await authService.login(formData);
      console.log('Respuesta del servidor:', response);

      if (response.token) {
        localStorage.setItem('userData', JSON.stringify(response));
        localStorage.setItem('token', response.token);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error detallado:', error.response?.data);
      if (error.response?.data?.errors) {
        const errorMessages = Object.values(error.response.data.errors).flat();
        setError(errorMessages.join(', '));
      } else {
        setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      }
    } finally {
      setIsLoading(false);
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

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <Header isAuthenticated={false} />

        {error && (
          <Alert 
            icon={<IconAlertCircle size={16} />} 
            title="Error" 
            color="red" 
            mb="md"
          >
            {error}
          </Alert>
        )}

        <FormularioGeneral
          titulo="Iniciar Sesión"
          campos={campos}
          botonTexto={isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
          onSubmit={handleLogin}
          showLogo={true}
          linkText="¿No tienes una cuenta? Regístrate aquí"
          linkTo="/crear-cuenta"
          disabled={isLoading}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
