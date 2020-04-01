import React, { Component } from 'react';
import { Consumer } from '../../context';

export default class GloryBe extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { gloryBe } = value;
          return (
            <div className='hail-mary mtb-20px'>
              <h3>Glory Be</h3>
              <p>{gloryBe}</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
