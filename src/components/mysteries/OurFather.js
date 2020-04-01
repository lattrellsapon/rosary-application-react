import React, { Component } from 'react';
import { Consumer } from '../../context';

export default class OurFather extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { ourFather } = value;
          return (
            <div className='our-father mtb-20px'>
              <h3>Our Father</h3>
              <p>{ourFather}</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
