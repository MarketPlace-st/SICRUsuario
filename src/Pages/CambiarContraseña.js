import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SideMenu from '../Componentes/SideMenu';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import BannerPerfil from '../Componentes/BannerPerfil';
import '../Estilos/CambiarContraseña.css';

const CambiarContrasena = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    repeatPassword: ''
  });
  
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    repeat: false
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validar contraseña actual
    if (!formData.currentPassword) {
      newErrors.currentPassword = 'La contraseña actual es requerida';
    }

    // Validar nueva contraseña
    if (!formData.newPassword) {
      newErrors.newPassword = 'La nueva contraseña es requerida';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'La contraseña debe tener al menos 8 caracteres';
    } else if (!/(?=.*[A-Z])/.test(formData.newPassword)) {
      newErrors.newPassword = 'Debe contener al menos una mayúscula';
    } else if (!/(?=.*[0-9])/.test(formData.newPassword)) {
      newErrors.newPassword = 'Debe contener al menos un número';
    } else if (formData.newPassword === formData.currentPassword) {
      newErrors.newPassword = 'La nueva contraseña no puede ser igual a la anterior';
    }

    // Validar que las contraseñas coincidan
    if (!formData.repeatPassword) {
      newErrors.repeatPassword = 'Debe repetir la contraseña';
    } else if (formData.newPassword !== formData.repeatPassword) {
      newErrors.repeatPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGuardar = () => {
    if (validateForm()) {
      console.log('Nueva contraseña guardada');
      alert('Contraseña actualizada exitosamente');
      navigate('/login');
    }
  };

  const handleCancelar = () => {
    console.log('Operación cancelada');
    navigate('/dashboardUsuario');
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <>
      <Header isAuthenticated={true} />
      <BannerPerfil nombre="Maria Concepcion" correo="mariacon@ejemplo.com" />
      <div className="dashboard-container">
        <div className="sidemenu-container">
          <SideMenu />
        </div>
        <div className="dashboard-main">
          <div className="cambiar-container">
            <h3>Cambiar Contraseña</h3>
            <div className="cambiar-form">
              <div className="form-group">
                <label htmlFor="currentPassword">Contraseña Anterior</label>
                <div className="password-input-container">
                  <input
                    type={showPasswords.current ? "text" : "password"}
                    id="currentPassword"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className={errors.currentPassword ? 'error' : ''}
                  />
                  <button 
                    type="button"
                    className="toggle-password"
                    onClick={() => togglePasswordVisibility('current')}
                  >
                    {showPasswords.current ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.currentPassword && <span className="error-message">{errors.currentPassword}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">Nueva Contraseña</label>
                <div className="password-input-container">
                  <input
                    type={showPasswords.new ? "text" : "password"}
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className={errors.newPassword ? 'error' : ''}
                  />
                  <button 
                    type="button"
                    className="toggle-password"
                    onClick={() => togglePasswordVisibility('new')}
                  >
                    {showPasswords.new ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.newPassword && <span className="error-message">{errors.newPassword}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="repeatPassword">Repita la Contraseña</label>
                <div className="password-input-container">
                  <input
                    type={showPasswords.repeat ? "text" : "password"}
                    id="repeatPassword"
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                    className={errors.repeatPassword ? 'error' : ''}
                  />
                  <button 
                    type="button"
                    className="toggle-password"
                    onClick={() => togglePasswordVisibility('repeat')}
                  >
                    {showPasswords.repeat ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.repeatPassword && <span className="error-message">{errors.repeatPassword}</span>}
              </div>

              <div className="form-buttons">
                <button className="cancelar-button" onClick={handleCancelar}>
                  Cancelar
                </button>
                <button className="guardar-button" onClick={handleGuardar}>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CambiarContrasena;

