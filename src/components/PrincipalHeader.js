import React from 'react';

import Avatar from '../images/avatar.jpg';
import './styles/PrincipalHeader.css';

function PrincipalHeader () {
  return (
    <div className="welcome">
      <div className="welcome__info">
        <p>Hola José</p>
        <img src={Avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default PrincipalHeader;
