import React, { Component } from 'react';
import { Consumer } from '../../context';

export default class HailHolyQueen extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { hailHolyQueen } = value;
          return (
            <div className='hail-holy-queen mtb-20px'>
              <h3>Hail Holy Queen</h3>
              <p>{hailHolyQueen}</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
