import React from 'react';

import SecondaryMenu from '../components/SecondaryMenu';
import Balance from '../components/Balance';
import BlueList from '../components/BlueList';
import Loan from '../components/Loan';

import './styles/Disposition.css';

function Disposition () {
  return (
    <div className="wrapper back-tealish">
      <SecondaryMenu />
      <Balance />
      <BlueList />
      <Loan />
    </div>
  );
}

export default Disposition;
