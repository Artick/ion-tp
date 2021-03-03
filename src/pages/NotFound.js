import React from 'react';

import {Link} from 'react-router-dom';

import './styles/NotFound.css';
import error404 from '../images/404-Error.svg';

function NotFound () {
  return (
    <div className="wrapper">
      <center>
        <h1>Algo salió mal</h1>
        <img src={error404} alt="Error 404 not found" />
        <Link to="/">
          Regresár al inicio
        </Link>
      </center>
    </div>
  );
}

export default NotFound;
