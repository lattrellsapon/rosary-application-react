import React, { Component } from 'react';
import { Consumer } from '../../context';

export default class FatimaPrayer extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { fatimaPrayer } = value;
          return (
            <div className='fatima-prayer mtb-20px'>
              <h3>Fatima Prayer</h3>
              <p>{fatimaPrayer}</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
