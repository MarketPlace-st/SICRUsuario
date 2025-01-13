import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import FormularioGeneral from '../Componentes/Formulario';
import { authService } from '../services/auth.service';

const CrearCuenta = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    nombre: '',
    apellidos: '',
    rnc: '',
    email: '',
    fechaNacimiento: '',
    telefono: '',
    direccion: '',
    password: '',
    confirmPassword: ''
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

  const validateRNC = (rnc) => {
    return /^\d{9}$/.test(rnc); // Valida que sean 9 dígitos
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (!validateRNC(formData.rnc)) {
      setError('El RNC debe tener 9 dígitos');
      return;
    }

    try {
      // Creamos el objeto de datos para el registro
      const userData = {
        username: formData.username,
        password: formData.password,
        email: formData.email,
        direccion: formData.direccion,
        nombre: formData.nombre,
        apellidos: formData.apellidos,
        rnc: formData.rnc,
        telefono: formData.telefono,
        fechaNacimiento: formData.fechaNacimiento
      };

      await authService.register(userData);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  const campos = [
    {
      label: 'Nombre de Usuario',
      type: 'text',
      placeholder: 'Ingrese su nombre de usuario',
      name: 'username',
      required: true,
      value: formData.username,
      onChange: handleInputChange,
      error: error
    },
    {
      label: 'Nombre',
      type: 'text',
      placeholder: 'Tu nombre',
      name: 'nombre',
      required: true,
      value: formData.nombre,
      onChange: handleInputChange,
      error: error
    },
    {
      label: 'Apellidos',
      type: 'text',
      placeholder: 'Tus apellidos',
      name: 'apellidos',
      required: true,
      value: formData.apellidos,
      onChange: handleInputChange,
      error: error
    },
    {
      label: 'RNC',
      type: 'text',
      placeholder: 'Ingrese su RNC',
      name: 'rnc',
      required: true,
      value: formData.rnc,
      onChange: handleInputChange,
      error: error
    },
    {
      label: 'Correo Electrónico',
      type: 'email',
      placeholder: 'Dirección de correo electrónico',
      name: 'email',
      required: true,
      value: formData.email,
      onChange: handleInputChange,
      error: error
    },
    {
      label: 'Fecha de Nacimiento',
      type: 'date',
      name: 'fechaNacimiento',
      required: true,
      value: formData.fechaNacimiento,
      onChange: handleInputChange
    },
    {
      label: 'Teléfono',
      type: 'tel',
      placeholder: 'Tu número telefónico',
      name: 'telefono',
      required: true,
      value: formData.telefono,
      onChange: handleInputChange
    },
    {
      label: 'Dirección',
      type: 'text',
      placeholder: 'Tu dirección',
      name: 'direccion',
      required: true,
      value: formData.direccion,
      onChange: handleInputChange
    },
    {
      label: 'Contraseña',
      type: 'password',
      placeholder: 'Tu contraseña',
      name: 'password',
      required: true,
      value: formData.password,
      onChange: handleInputChange,
      error: error
    },
    {
      label: 'Confirmar Contraseña',
      type: 'password',
      placeholder: 'Confirma tu contraseña',
      name: 'confirmPassword',
      required: true,
      value: formData.confirmPassword,
      onChange: handleInputChange,
      error: error
    }
  ];

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <Header isAuthenticated={false} />
        <FormularioGeneral
          titulo="Crear Cuenta"
          campos={campos}
          botonTexto="Crear Cuenta"
          onSubmit={handleRegister}
          showLogo={true}
          linkText="¿Ya tienes una cuenta? Inicia sesión aquí"
          linkTo="/login"
        />
      </div>
      <Footer />
    </div>
  );
};

export default CrearCuenta;
