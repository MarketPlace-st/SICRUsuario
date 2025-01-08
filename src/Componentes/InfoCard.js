import React from 'react';
import '../Estilos/InfoCard.css';

const InfoCard = ({ titulo, data }) => {
  return (
    <div className="info-card">
      <h3 className="info-card-title">{titulo}</h3>
      <div className="info-card-content">
        {data.map((item, index) => (
          <p key={index}>
            <strong>{item.label}:</strong> {item.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
