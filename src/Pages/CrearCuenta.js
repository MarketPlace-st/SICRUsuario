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
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Limpiar error específico del campo
    if (formErrors[name]) {
      setFormErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateRNC = (rnc) => {
    return /^\d{9}$/.test(rnc); // Valida que sean 9 dígitos
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setFormErrors({ confirmPassword: 'Las contraseñas no coinciden' });
      return;
    }

    if (!validateRNC(formData.rnc)) {
      setFormErrors({ rnc: 'El RNC debe tener 9 dígitos' });
      return;
    }

    try {
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
      const errorMessage = error.message || 'Error al crear la cuenta';
      setFormErrors({ submit: errorMessage });
      console.error('Error detallado:', error);
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
      error: formErrors.username || formErrors.submit
    },
    {
      label: 'Nombre',
      type: 'text',
      placeholder: 'Tu nombre',
      name: 'nombre',
      required: true,
      value: formData.nombre,
      onChange: handleInputChange,
      error: formErrors.nombre || formErrors.submit
    },
    {
      label: 'Apellidos',
      type: 'text',
      placeholder: 'Tus apellidos',
      name: 'apellidos',
      required: true,
      value: formData.apellidos,
      onChange: handleInputChange,
      error: formErrors.apellidos || formErrors.submit
    },
    {
      label: 'RNC',
      type: 'text',
      placeholder: 'Ingrese su RNC',
      name: 'rnc',
      required: true,
      value: formData.rnc,
      onChange: handleInputChange,
      error: formErrors.rnc || formErrors.submit
    },
    {
      label: 'Correo Electrónico',
      type: 'email',
      placeholder: 'Dirección de correo electrónico',
      name: 'email',
      required: true,
      value: formData.email,
      onChange: handleInputChange,
      error: formErrors.email || formErrors.submit
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
      error: formErrors.password || formErrors.submit
    },
    {
      label: 'Confirmar Contraseña',
      type: 'password',
      placeholder: 'Confirma tu contraseña',
      name: 'confirmPassword',
      required: true,
      value: formData.confirmPassword,
      onChange: handleInputChange,
      error: formErrors.confirmPassword || formErrors.submit
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
          error={formErrors.submit}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CrearCuenta;
