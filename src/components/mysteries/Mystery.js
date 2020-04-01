import React, { Component } from 'react';
import { Consumer } from '../../context';

import OurFather from './OurFather';
import ThreeHailMary from './ThreeHailMary';
import TenHailMary from './TenHailMary';
import GloryBe from './GloryBe';
import FatimaPrayer from './FatimaPrayer';
import SwitchMysteries from './SwitchMysteries';

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
              <div>
                <div className='opening mtb-20px'>
                  <h3>
                    Let us put ourselves in the presence of the Lord as we say:
                  </h3>
                  <p>"{signOfTheCross}"</p>
                </div>
                <div className='apostles-creed mtb-20px'>
                  <h3>Apostles Creed:</h3>
                  <p>{apostlesCreed}</p>
                </div>
                <OurFather />
                <ThreeHailMary />
                <GloryBe />

                {/* <h3>
                  The first {todaysMystery.mysteryName} mystery is the{' '}
                  {todaysMystery.firstMystery}.
                </h3>
                <h3>
                  The second {todaysMystery.mysteryName} mystery is the{' '}
                  {todaysMystery.secondMystery}.
                </h3>
                <h3>
                  The third {todaysMystery.mysteryName} mystery is the{' '}
                  {todaysMystery.thirdMystery}.
                </h3>
                <h3>
                  The fourth {todaysMystery.mysteryName} mystery is the{' '}
                  {todaysMystery.fourthMystery}.
                </h3>
                <h3>
                  The fifth {todaysMystery.mysteryName} mystery is the{' '}
                  {todaysMystery.fifthMystery}.
                </h3> */}
                <SwitchMysteries />
                
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
