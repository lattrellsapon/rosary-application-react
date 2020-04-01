import React from 'react';

import Navbar from './components/layout/Navbar';
import TodaysMysteries from './components/mysteries/TodaysMysteries';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { Provider } from './context';

function App() {
  return (
    <Provider>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={TodaysMysteries} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
