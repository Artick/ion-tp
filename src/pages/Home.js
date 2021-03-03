import React from 'react';

import PrincipalHeader from '../components/PrincipalHeader';
import Balance from '../components/Balance';
import HighLight from '../components/HighLight';
import Payment from '../components/Payment';
import Movement from '../components/Movement';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';

import './styles/Home.css';

function Home () {
  return (
    <div className="wrapper">
      <PrincipalHeader />
      <Link to="/disposition">
        <Balance />
      </Link>
      <HighLight />
      <Payment />
      <Movement />
      <Navbar />
    </div>
  );
}

export default Home;
