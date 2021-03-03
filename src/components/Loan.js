import React from 'react';
import {Link} from 'react-router-dom';
import CircularSlider from '@fseehawer/react-circular-slider';

import './styles/Loan.css';

export class Loan extends React.Component {
  render () {
    return (
      <div className="loan__container">
        <p className="loan--title-text">
          Selecciona tu plazo
        </p>
        <div className="loan__slider">
          <div className="loan__info">
            <p className="loan--month-payment">Tu pago mensual</p>
            <p className="loan--amount">$12,000.00</p>
            <p className="loan--months">a 60 meses</p>
            <p className="loan--blue-text">Tasa de interés <br /> 16.6%</p>
          </div>
          <div className="circular-slider">
            <CircularSlider
              width={200}
              min={1000}
              max={24000}
              dataIndex={11000}
              prependToValue="$"
              label="Valor"
              progressSize={10}
              trackSize={7}
              progressColorForm="#783183"
              progressColorTo="#bb64c8"
              trackColor="#e6f5f9"
              labelFontSize="0rem"
            />
          </div>
        </div>
        <Link className="button__blue" to="/">LO QUIERO!</Link>
      </div>
    );
  }
}

export default Loan;
