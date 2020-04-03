import React, { Component } from 'react';
import { Consumer } from '../../context';

import OurFather from './OurFather';
import ThreeHailMary from './ThreeHailMary';
import TenHailMary from './TenHailMary';
import GloryBe from './GloryBe';
import FatimaPrayer from './FatimaPrayer';
import SwitchMysteries from './SwitchMysteries';
import Update from './Update';

export default class Mystery extends Component {
  state = {
    currentMystery: 1
  };

  nextMystery = () => {
    this.setState({
      currentMystery: this.state.currentMystery + 1
    });
  };

  previousMystery = () => {
    this.setState({
      currentMystery: this.state.currentMystery - 1
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const {
            signOfTheCross,
            apostlesCreed,
            ourFather,
            hailMary,
            gloryBe,
            fatimaPrayer,
            hailHolyQueen,
            todaysMystery,
            todaysDay
          } = value;
          return (
            <div className='text-center'>
              <h3>
                On {todaysDay}'s we pray the {todaysMystery.mysteryName}{' '}
                Mysteries.
              </h3>
              <Update />
              <div>
                <div className='opening mtb-20px'>
                  <h3>
                    Let's begin by putting ourselves in the presence of the Lord
                    as we say:
                  </h3>
                  <p>{signOfTheCross}</p>
                  <h3>Apostles Creed:</h3>
                  <p>{apostlesCreed}</p>
                  <OurFather />
                  <ThreeHailMary />
                  <GloryBe />
                </div>
                <div className='body'>
                  <SwitchMysteries />
                </div>
                <div className='closing'>
                  <h3>Let's end the Holy Rosary by saying:</h3>
                  <p>{signOfTheCross}</p>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
