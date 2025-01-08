import React from 'react';
import '../Estilos/BannerPerfil.css';

const BannerPerfil = ({ nombre, correo }) => {
  return (
    <div className="banner-perfil-container">
      <div className="banner-perfil-card">
        <h3>{nombre}</h3>
        <p>{correo}</p>
      </div>
    </div>
  );
};

export default BannerPerfil;

