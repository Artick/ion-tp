import React from 'react';

import './styles/HighLight.css';

function HighLight () {
  return (
    <div className="highlight">
      <div className="highlight__list">
        <div className="highlight__item">
          <i className="fas fa-star" />
          <p>Crear Logro</p>
        </div>
        <div className="highlight__item">
          <i className="fas fa-tag fa-flip-horizontal" />
          <p>Pagar Servicio</p>
        </div>
        <div className="highlight__item">
          <i className="fas fa-bell" />
          <p>Suscripción</p>
        </div>
      </div>
    </div>
  );
}

export default HighLight;
