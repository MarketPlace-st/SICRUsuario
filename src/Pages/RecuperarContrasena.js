import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import FormularioGeneral from '../Componentes/Formulario';

const RecuperarContrasena = () => {
  const navigate = useNavigate();

  const campos = [
    {
      label: 'Correo Electrónico',
      type: 'email',
      placeholder: 'Dirección de correo electrónico',
      name: 'email',
      required: true
    },
  ];

  const handleRecuperar = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar el correo de recuperación
    navigate('/RecuperarContrasena2'); // Redirige a la segunda pantalla de recuperación
  };

  return (
    <div className="recuperarContrasena-page">
      <Header isAuthenticated={false} />
      <FormularioGeneral
        titulo="¿Olvidaste tu Contraseña?"
        campos={campos}
        botonTexto="Siguiente"
        onSubmit={handleRecuperar} // Cambié el nombre a `handleRecuperar` para mayor claridad
        linkAdicional={{
          texto: "Volver a Inicio",
          ruta: "/" // Cambié el texto y la ruta para mayor claridad
        }}
        showLogo={true}
      />
      <Footer />
    </div>
  );
};

export default RecuperarContrasena;
