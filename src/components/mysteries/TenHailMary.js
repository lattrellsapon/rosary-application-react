import React, { Component } from 'react';
import { Consumer } from '../../context';

export default class TenHailMarys extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { hailMary } = value;
          return (
            <div className='hail-mary mtb-20px'>
              <h3>10 X Hail Mary</h3>
              <p>{hailMary}</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
