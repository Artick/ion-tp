import React from 'react';

import Money from '../images/27-icon-money.svg';
import CreditCard from '../images/27-icon-credit-card.svg';
import Star from '../images/27-icon-star.svg';
import Bell from '../images/27-icon-bell.svg';

import './styles/Navbar.css';

function Navbar () {
  return (
    <nav>
      <ul>
        <li className="active"><i class="fas fa-home" /></li>
        <li><img src={Money} alt="Money" /></li>
        <li>
          <img src={CreditCard} alt="Credit Card" />
        </li>
        <li><img src={Star} alt="Star" /></li>
        <li><img src={Bell} alt="Bell" /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
