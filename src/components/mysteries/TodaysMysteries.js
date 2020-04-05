import React, { Component } from 'react';

import Mystery from './Mystery';

import { Consumer } from '../../context';

export default class TodaysMysteries extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className='text-center'>
              <Mystery />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
