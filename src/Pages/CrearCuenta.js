import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import FormularioGeneral from '../Componentes/Formulario';

const CrearCuenta = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    rnc: '',
    email: '',
    fechaNacimiento: '',
    telefono: '',
    direccion: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'password' || name === 'confirmPassword') {
      if (name === 'confirmPassword' && value !== formData.password) {
        setPasswordError('Las contraseñas no coinciden');
      } else if (name === 'password' && value !== formData.confirmPassword && formData.confirmPassword) {
        setPasswordError('Las contraseñas no coinciden');
      } else {
        setPasswordError('');
      }
    }
  };

  const campos = [
    {
      label: 'Nombre Completo',
      type: 'text',
      placeholder: 'Tu nombre completo',
      name: 'nombre',
      required: true,
      value: formData.nombre,
      onChange: handleInputChange
    },
    {
      label: 'RNC',
      type: 'text',
      placeholder: 'Ingrese su RNC',
      name: 'rnc',
      required: true,
      value: formData.rnc,
      onChange: handleInputChange
    },
    {
      label: 'Correo Electrónico',
      type: 'email',
      placeholder: 'Dirección de correo electrónico',
      name: 'email',
      required: true,
      value: formData.email,
      onChange: handleInputChange
    },
    {
      label: 'Fecha de Nacimiento',
      type: 'date',
      placeholder: 'Tu fecha de nacimiento',
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
      error: passwordError
    },
    {
      label: 'Confirmar Contraseña',
      type: 'password',
      placeholder: 'Confirma tu contraseña',
      name: 'confirmPassword',
      required: true,
      value: formData.confirmPassword,
      onChange: handleInputChange,
      error: passwordError
    }
  ];

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
      return;
    }

    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log('Datos del formulario:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="register-page">
      <Header isAuthenticated={false} />
      <FormularioGeneral
        titulo="Crear Cuenta"
        campos={campos}
        botonTexto="Crear Cuenta"
        onSubmit={handleRegister}
        showLogo={true}
      />
      <Footer />
    </div>
  );
};

export default CrearCuenta;
  