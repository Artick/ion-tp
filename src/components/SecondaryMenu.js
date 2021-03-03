import React from 'react';
import {Link} from 'react-router-dom';

import './styles/SecondaryMenu.css';

function SecundaryMenu () {
  return (
    <div className="disposition__header">
      <div className="disposition__navigation">
        <Link to="/"><i className="fas fa-arrow-left" /></Link>
        <Link className="navegation-link" to="/">CANCELAR</Link>
      </div>
      <div className="disposition__title">
        <h2>Disposición</h2>
      </div>
    </div>
  );
}

export default SecundaryMenu;
