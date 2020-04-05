import React, { Component } from 'react';
import { Consumer } from '../../context';

import OurFather from './OurFather';
import TenHailMary from './TenHailMary';
import GloryBe from './GloryBe';
import FatimaPrayer from './FatimaPrayer';
import HailHolyQueen from './HailHolyQueen';

export default class SwitchMysteries extends Component {
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

  hidePreviousbutton = () => {
    if (this.state.currentMystery === 1) {
      return { display: 'none' };
    }
  };

  hideNextbutton = () => {
    if (this.state.currentMystery === 5) {
      return { display: 'none' };
    }
  };

  render() {
    return (
      <Consumer>
        {value => {
          let { todaysMystery, todaysDay, mysteries } = value;

          if (todaysDay === 'Sunday') {
            todaysMystery = mysteries[2];
          } else if (todaysDay === 'Monday') {
            todaysMystery = mysteries[0];
          } else if (todaysDay === 'Tuesday') {
            todaysMystery = mysteries[1];
          } else if (todaysDay === 'Wednesday') {
            todaysMystery = mysteries[2];
          } else if (todaysDay === 'Thursday') {
            todaysMystery = mysteries[3];
          } else if (todaysDay === 'Friday') {
            todaysMystery = mysteries[1];
          } else if (todaysDay === 'Saturday') {
            todaysMystery = mysteries[0];
          }

          switch (this.state.currentMystery) {
            case 1:
              return (
                <div className='mystery-container mtb-20px'>
                  <div className='mystery-header'>
                    <h1>{todaysMystery.mysteryName} Mysteries</h1>
                    <p>
                      The first {todaysMystery.mysteryName} mystery is the{' '}
                      {todaysMystery.firstMystery}.
                    </p>
                  </div>

                  <div className='instructions'>
                    <h3>For each mystery, we say: </h3>
                    <OurFather />
                    <TenHailMary />
                    <GloryBe />
                    <FatimaPrayer />
                    <div className='button-flex-container'>
                      <div className='button-container'>
                        <button
                          onClick={this.previousMystery}
                          style={this.hidePreviousbutton()}
                        >
                          <i class='fas fa-chevron-circle-left'></i>Previous
                        </button>
                      </div>
                      <div className='button-container'>
                        <button onClick={this.nextMystery}>
                          Next<i class='fas fa-chevron-circle-right'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;
            case 2:
              return (
                <div className='mystery-container mtb-20px'>
                  <div className='mystery-header'>
                    <h1>{todaysMystery.mysteryName} Mystery</h1>
                    <p>
                      The second {todaysMystery.mysteryName} mystery is the{' '}
                      {todaysMystery.secondMystery}.
                    </p>
                  </div>

                  <div className='instructions'>
                    <h3>For each mystery, we say: </h3>
                    <OurFather />
                    <TenHailMary />
                    <GloryBe />
                    <FatimaPrayer />
                    <div className='button-flex-container'>
                      <div className='button-container'>
                        <button
                          onClick={this.previousMystery}
                          style={this.hidePreviousbutton()}
                        >
                          <i class='fas fa-chevron-circle-left'></i>Previous
                        </button>
                      </div>
                      <div className='button-container'>
                        <button onClick={this.nextMystery}>
                          Next<i class='fas fa-chevron-circle-right'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;
            case 3:
              return (
                <div className='mystery-container mtb-20px'>
                  <div className='mystery-header'>
                    <h1>{todaysMystery.mysteryName} Mystery</h1>
                    <p>
                      The third {todaysMystery.mysteryName} mystery is the{' '}
                      {todaysMystery.thirdMystery}.
                    </p>
                  </div>

                  <div className='instructions'>
                    <h3>For each mystery, we say: </h3>
                    <OurFather />
                    <TenHailMary />
                    <GloryBe />
                    <FatimaPrayer />
                    <div className='button-flex-container'>
                      <div className='button-container'>
                        <button
                          onClick={this.previousMystery}
                          style={this.hidePreviousbutton()}
                        >
                          <i class='fas fa-chevron-circle-left'></i>Previous
                        </button>
                      </div>
                      <div className='button-container'>
                        <button onClick={this.nextMystery}>
                          Next<i class='fas fa-chevron-circle-right'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;
            case 4:
              return (
                <div className='mystery-container mtb-20px'>
                  <div className='mystery-header'>
                    <h1>{todaysMystery.mysteryName} Mystery</h1>
                    <p>
                      The fourth {todaysMystery.mysteryName} mystery is the{' '}
                      {todaysMystery.fourthMystery}.
                    </p>
                  </div>

                  <div className='instructions'>
                    <h3>For each mystery, we say: </h3>
                    <OurFather />
                    <TenHailMary />
                    <GloryBe />
                    <FatimaPrayer />
                    <div className='button-flex-container'>
                      <div className='button-container'>
                        <button
                          onClick={this.previousMystery}
                          style={this.hidePreviousbutton()}
                        >
                          <i class='fas fa-chevron-circle-left'></i>Previous
                        </button>
                      </div>
                      <div className='button-container'>
                        <button onClick={this.nextMystery}>
                          Next<i class='fas fa-chevron-circle-right'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;
            case 5:
              return (
                <div className='mystery-container mtb-20px'>
                  <div className='mystery-header'>
                    <h1>{todaysMystery.mysteryName} Mystery</h1>
                    <p>
                      The fifth {todaysMystery.mysteryName} mystery is the{' '}
                      {todaysMystery.fifthMystery}.
                    </p>
                  </div>

                  <div className='instructions'>
                    <h3>For each mystery, we say: </h3>
                    <OurFather />
                    <TenHailMary />
                    <GloryBe />
                    <FatimaPrayer />
                    <HailHolyQueen />
                    <div className='button-flex-container'>
                      <div className='button-container'>
                        <button
                          onClick={this.previousMystery}
                          style={this.hidePreviousbutton()}
                        >
                          <i class='fas fa-chevron-circle-left'></i>Previous
                        </button>
                      </div>
                      <div className='button-container'>
                        <button
                          onClick={this.nextMystery}
                          style={this.hideNextbutton()}
                        >
                          Next<i class='fas fa-chevron-circle-right'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;
            default:
              return (
                <div>
                  <h1>Looks like you are lost.</h1>
                </div>
              );
          }
        }}
      </Consumer>
    );
  }
}
