import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import FormularioGeneral from '../Componentes/Formulario';
import '../Estilos/Solucitudes.css';

const Solicitud = () => {
  const navigate = useNavigate();
  
  // Estado inicial del formulario
  const [formData, setFormData] = useState({
    nombreEstablecimiento: '',
    rncEstablecimiento: '',
    direccionEstablecimiento: '',
    coordenadas: '',
    tipoEstablecimiento: ''
  });
  
  // Estado para errores
  const [formErrors, setFormErrors] = useState({});
  
  // Estado específico para el dropdown
  const [selectedTipo, setSelectedTipo] = useState('');

  // Validación de RNC
  const validateRNC = (rnc) => {
    const rncRegex = /^\d{9}$/;
    return rncRegex.test(rnc);
  };

  // Manejador para campos de texto
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Limpiar error al escribir
    if (formErrors[name]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Manejador específico para el dropdown
  const handleDropdownChange = (selectedValue) => {
    console.log('Tipo de establecimiento seleccionado:', selectedValue);
    setSelectedTipo(selectedValue);
    setFormData(prevState => ({
      ...prevState,
      tipoEstablecimiento: selectedValue
    }));
    // Limpiar error al seleccionar
    if (formErrors.tipoEstablecimiento) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        tipoEstablecimiento: ''
      }));
    }
  };

  // Nueva función de validación
  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Validar nombre
    if (!formData.nombreEstablecimiento?.trim()) {
      errors.nombreEstablecimiento = 'El nombre del establecimiento es requerido';
      isValid = false;
    }

    // Validar RNC
    if (!formData.rncEstablecimiento) {
      errors.rncEstablecimiento = 'El RNC es requerido';
      isValid = false;
    } else if (!validateRNC(formData.rncEstablecimiento)) {
      errors.rncEstablecimiento = 'El RNC debe tener 9 dígitos';
      isValid = false;
    }

    // Validar dirección
    if (!formData.direccionEstablecimiento?.trim()) {
      errors.direccionEstablecimiento = 'La dirección es requerida';
      isValid = false;
    }

    // Validar coordenadas
    if (!formData.coordenadas?.trim()) {
      errors.coordenadas = 'Las coordenadas son requeridas';
      isValid = false;
    }

    // Validar tipo de establecimiento
    if (!selectedTipo) {
      errors.tipoEstablecimiento = 'Debe seleccionar un tipo de establecimiento';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Estado actual del formulario:', formData);
    console.log('Tipo seleccionado:', selectedTipo);

    if (validateForm()) {
      console.log('Formulario válido, procediendo con el envío');
      navigate('/dashboard');
    } else {
      console.log('Formulario inválido, errores:', formErrors);
      alert('Por favor, complete todos los campos requeridos correctamente');
    }
  };

  // Configuración de campos del formulario
  const campos = [
    {
      label: 'Nombre del Establecimiento',
      type: 'text',
      placeholder: 'Nombre completo del establecimiento',
      name: 'nombreEstablecimiento',
      required: true,
      onChange: handleInputChange,
      error: formErrors.nombreEstablecimiento,
      value: formData.nombreEstablecimiento
    },
    {
      label: 'RNC',
      type: 'text',
      placeholder: 'Ingrese el RNC del establecimiento (9 dígitos)',
      name: 'rncEstablecimiento',
      required: true,
      onChange: handleInputChange,
      error: formErrors.rncEstablecimiento,
      value: formData.rncEstablecimiento
    },
    {
      label: 'Dirección del Establecimiento',
      type: 'text',
      placeholder: 'Dirección completa del establecimiento',
      name: 'direccionEstablecimiento',
      required: true,
      onChange: handleInputChange,
      error: formErrors.direccionEstablecimiento,
      value: formData.direccionEstablecimiento
    },
    {
      label: 'Coordenadas del Establecimiento',
      type: 'text',
      placeholder: 'Dirección de coordenadas',
      name: 'coordenadas',
      required: true,
      onChange: handleInputChange,
      error: formErrors.coordenadas,
      value: formData.coordenadas
    },
    {
      label: 'Tipo de Establecimiento',
      type: 'dropdown',
      placeholder: 'Seleccione el tipo de establecimiento',
      name: 'tipoEstablecimiento',
      required: true,
      options: [
        'Planta Procesadora',
        'Matadero',
        'Frigorífico',
        'Distribuidor',
        'Punto de Venta'
      ],
      onChange: handleDropdownChange,
      error: formErrors.tipoEstablecimiento,
      value: selectedTipo
    }
  ];

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <Header isAuthenticated={true} />
        <FormularioGeneral
          titulo="Formulario de Solicitud"
          campos={campos}
          botonTexto="Solicitar"
          onSubmit={handleSubmit}
          textoAdicional="Al hacer clic en Solicitar, aceptas los"
          linkAdicional={{
            texto: "Términos y Condiciones y la Política de Privacidad",
            ruta: "/terminos"
          }}
          showLogo={false}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Solicitud;
