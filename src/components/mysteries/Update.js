import React, { Component } from 'react';
import { Consumer } from '../../context';

import ErrorMessage from '../error/ErrorMessage';

export default class Update extends Component {
  state = {
    newDay: '',
    isError: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const checkDay = e.target.newDay.value;
    if (
      checkDay === 'Sunday' ||
      checkDay === 'Monday' ||
      checkDay === 'Tuesday' ||
      checkDay === 'Wednesday' ||
      checkDay === 'Thursday' ||
      checkDay === 'Friday' ||
      checkDay === 'Saturday'
    ) {
      dispatch({
        type: 'UPDATE MYSTERY',
        payload: this.state.newDay
      });
      this.setState({
        newDay: '',
        isError: false
      });
    } else {
      this.setState({
        isError: true
      });
    }
  };

  hideError = () => {
    if (this.state.isError) {
      return {
        display: 'block'
      };
    } else {
      return {
        display: 'none'
      };
    }
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { todaysDay, dispatch } = value;
          return (
            <div className='form-container'>
              <div style={this.hideError()}>
                <ErrorMessage />
              </div>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <input
                  type='text'
                  placeholder={`Current Day: ${todaysDay}`}
                  name='newDay'
                  value={this.state.newDay}
                  onChange={this.onChange}
                  className='todays-day'
                  required
                />
                <input type='submit' value='Update' className='submit-button' />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
