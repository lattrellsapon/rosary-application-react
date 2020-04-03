import React, { Component } from 'react';
import { Consumer } from '../../context';

export default class Update extends Component {
  state = {
    newDay: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('submit button was clicked');
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { todaysDay, sayHello } = value;
          return (
            <div className='form-container'>
              <form onSubmit={this.onSubmit}>
                <input
                  type='text'
                  placeholder={todaysDay}
                  name='newDay'
                  value={this.state.newDay}
                  onChange={this.onChange}
                />
                <input type='submit' value='Update' />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
