import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomDropdown from './DropDown';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../Estilos/Formulario.css';

const FormularioGeneral = ({ 
  titulo, 
  campos, 
  botonTexto, 
  onSubmit,
  textoAdicional,
  linkAdicional,
  showLogo = true
}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  const togglePasswordVisibility = (fieldName) => {
    setShowPassword(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName]
    }));
  };

  const renderField = (campo, index) => {
    if (campo.type === 'dropdown') {
      return (
        <div className="input-container">
          <CustomDropdown
            options={campo.options}
            placeholder={campo.placeholder}
            onChange={campo.onChange}
            value={campo.value}
            name={campo.name}
          />
          {campo.error && <span className="error-message">{campo.error}</span>}
        </div>
      );
    }

    if (campo.type === 'password') {
      return (
        <div className="input-container">
          <input
            type={showPassword[campo.name] ? 'text' : 'password'}
            placeholder={campo.placeholder}
            className={`formulario-input ${campo.error ? 'error' : ''}`}
            name={campo.name}
            required={campo.required}
            onChange={campo.onChange}
            value={campo.value || ''}
          />
          <button 
            type="button"
            className="password-toggle"
            onClick={() => togglePasswordVisibility(campo.name)}
            tabIndex="-1"
          >
            {showPassword[campo.name] ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </button>
          {campo.error && <span className="error-message">{campo.error}</span>}
        </div>
      );
    }

    return (
      <div className="input-container">
        <input
          type={campo.type}
          placeholder={campo.placeholder}
          className={`formulario-input ${campo.error ? 'error' : ''}`}
          name={campo.name}
          required={campo.required}
          onChange={campo.onChange}
          value={campo.value || ''}
        />
        {campo.error && <span className="error-message">{campo.error}</span>}
      </div>
    );
  };

  return (
    <div className="formulario-container">
      <div className={`formulario-header ${!showLogo ? 'red-background' : ''}`}>
        <div className="titulo-container">
          <h2>{titulo}</h2>
        </div>
      </div>
      <div className="formulario-content">
        <form onSubmit={handleSubmit} className="formulario-form">
          {campos.map((campo, index) => (
            <div key={index} className={`form-group ${campo.fullWidth ? 'full-width' : ''}`}>
              <label>
                {campo.label} 
                {campo.required && <span className="required">*</span>}
              </label>
              {renderField(campo, index)}
            </div>
          ))}

          <button type="submit" className="formulario-button">
            {botonTexto}
          </button>

          {textoAdicional && (
            <p className="texto-adicional">
              {textoAdicional}{' '}
              {linkAdicional && (
                <span 
                  className="link-adicional"
                  onClick={() => navigate(linkAdicional.ruta)}
                >
                  {linkAdicional.texto}
                </span>
              )}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormularioGeneral;
