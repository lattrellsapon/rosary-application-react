import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import TodaysMysteries from './components/mysteries/TodaysMysteries';
import About from './components/pages/About';
import Footer from './components/layout/Footer';

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
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
