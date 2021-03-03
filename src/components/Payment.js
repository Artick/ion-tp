import React from 'react';

import './styles/Payment.css';

function Payment () {
  return (
    <div className="payment">
      <div className="payment__card">
        <div className="payment__header">
          <p className="payment__header_text--title">Tu próximo pago</p>
          <p className="payment__header_text--big">$28,860.00</p>
        </div>
        <div className="payment__date-container">
          <div className="payment__date-left-info">
            <p className="payment__header_text--title">Fecha de pago</p>
            <p className="payment__header_text--date">16 Enero</p>
          </div>
          <div className="payment__date-right-info">
            <a className="button__blue" href="/#">PAGAR AHORA</a>
          </div>
        </div>
        <div className="payment__resume">
          <ul className="payment__list">
            <li>
              <i className="fas fa-coins" />
              <p>Mis logros</p>
              <span>$27,260.00</span>
            </li>
            <li>
              <i className="far fa-credit-card" />
              <p>Mis logros</p>
              <span>$27,260.00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Payment;
