import React from 'react';
import MovementList from './MovementList';

import './styles/Movement.css';

class Movement extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      data: [],
    };
  }

  componentDidMount (prevProps, prevState) {
    this.setState ({
      data: [
        {
          id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
          title: 'Auto',
          description: 'Mis logros',
          date: '2m',
          money: '$350,000.00',
          movementImg: 'https://img2.freepng.es/20190419/yqo/kisspng-car-computer-icons-portable-network-graphics-clip-car-management-svg-png-icon-free-download-421572-5cba5382a48243.0663023915557149466738.jpg',
        },
        {
          id: '2de30c42-9deb-40fc-a41f-05e62b5939aa',
          title: 'CFE',
          description: 'Pago de servicio',
          date: 'Ayer',
          money: '$280.00',
          movementImg: 'https://www.jarkol.com/img/clients/logo_CFE_2.png',
        },
        {
          id: '2de30c42-9deb-40fc-a41f-05e62b5939ab',
          title: 'NETFLIX',
          description: 'Suscripciones',
          date: '28 de dic',
          money: '$140.00',
          movementImg: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg',
        },
        {
          id: '2de30c42-9deb-40fc-a41f-05e62b5939ac',
          title: 'Soriana Parque Delta',
          description: 'Compra TDC',
          date: '26 de dic',
          money: '$2,800.00',
          movementImg: 'https://png.pngitem.com/pimgs/s/21-212079_font-mall-comments-mall-icon-png-transparent-png.png',
        },
        {
          id: '2de30c42-9deb-40fc-a41f-05e62b5939ad',
          title: 'CFE',
          description: 'Pago de servicio',
          date: 'Ayer',
          money: '$280.00',
          movementImg: 'https://www.jarkol.com/img/clients/logo_CFE_2.png',
        },
        {
          id: '2de30c42-9deb-40fc-a41f-05e62b5939ae',
          title: 'NETFLIX',
          description: 'Suscripciones',
          date: '28 de dic',
          money: '$140.00',
          movementImg: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg',
        },
        {
          id: '2de30c42-9deb-40fc-a41f-05e62b5939af',
          title: 'Soriana Parque Delta',
          description: 'Compra TDC',
          date: '26 de dic',
          money: '$2,800.00',
          movementImg: 'https://png.pngitem.com/pimgs/s/21-212079_font-mall-comments-mall-icon-png-transparent-png.png',
        },
        {
          id: '2de30c42-9deb-40fc-a41f-05e62b5939ag',
          title: 'CFE',
          description: 'Pago de servicio',
          date: 'Ayer',
          money: '$280.00',
          movementImg: 'https://www.jarkol.com/img/clients/logo_CFE_2.png',
        },
        {
          id: '2de30c42-9deb-40fc-a41f-05e62b5939ah',
          title: 'NETFLIX',
          description: 'Suscripciones',
          date: '28 de dic',
          money: '$140.00',
          movementImg: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg',
        },
        {
          id: '2de30c42-9deb-40fc-a41f-05e62b5939ai',
          title: 'Soriana Parque Delta',
          description: 'Compra TDC',
          date: '26 de dic',
          money: '$2,800.00',
          movementImg: 'https://png.pngitem.com/pimgs/s/21-212079_font-mall-comments-mall-icon-png-transparent-png.png',
        },
      ],
    });
  }

  render () {
    return (
      <div className="movements">
        <div className="movements__header">
          <h2>Tus movimientos</h2>
          <a className="navegation-link" href="/#">Ver todos</a>
        </div>
        <MovementList movements={this.state.data} />
      </div>
    );
  }
}

export default Movement;
