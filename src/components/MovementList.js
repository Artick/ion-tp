import React from 'react';

import './styles/MovementList.css';

class MovementList extends React.Component {
  render () {
    return (
      <div className="movements__list">
        <ul>
          {this.props.movements.map (movement => {
            return (
              <li key={movement.id}>
                <img src={movement.movementImg} alt="movimiento" />
                <div className="movement__title-and-description">
                  <div className="movement--title">{movement.title}</div>
                  <div className="movement--description">
                    {movement.description}
                  </div>
                </div>
                <div className="movement__date-and-money">
                  <div className="movement--date">{movement.date}</div>
                  <div className="movement--money">{movement.money}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MovementList;
