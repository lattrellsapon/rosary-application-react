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
          const { todaysMystery } = value;
          switch (this.state.currentMystery) {
            case 1:
              return (
                <div className='mystery-container mtb-20px'>
                  <h1>{todaysMystery.mysteryName} Mysteries</h1>
                  <p>
                    The first {todaysMystery.mysteryName} mystery is the{' '}
                    {todaysMystery.firstMystery}.
                  </p>
                  <div className='instructions'>
                    <h3>For each mystery, we say: </h3>
                    <OurFather />
                    <TenHailMary />
                    <GloryBe />
                    <FatimaPrayer />
                    <div className='flex-container'>
                      <div>
                        <button
                          onClick={this.previousMystery}
                          style={this.hidePreviousbutton()}
                        >
                          Previous
                        </button>
                      </div>
                      <div>
                        <button onClick={this.nextMystery}>Next</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;
            case 2:
              return (
                <div className='mystery-container mtb-20px'>
                  <h1>{todaysMystery.mysteryName} Mystery</h1>
                  <p>
                    The second {todaysMystery.mysteryName} mystery is the{' '}
                    {todaysMystery.secondMystery}.
                  </p>
                  <div className='instructions'>
                    <p>For each mystery, we say: </p>
                    <OurFather />
                    <TenHailMary />
                    <GloryBe />
                    <FatimaPrayer />
                    <div className='flex-container'>
                      <div>
                        <button onClick={this.previousMystery}>Previous</button>
                      </div>
                      <div>
                        <button onClick={this.nextMystery}>Next</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;
            case 3:
              return (
                <div className='mystery-container mtb-20px'>
                  <h1>{todaysMystery.mysteryName} Mystery</h1>
                  <p>
                    The third {todaysMystery.mysteryName} mystery is the{' '}
                    {todaysMystery.thirdMystery}.
                  </p>
                  <div className='instructions'>
                    <p>For each mystery, we say: </p>
                    <OurFather />
                    <TenHailMary />
                    <GloryBe />
                    <FatimaPrayer />
                    <div className='flex-container'>
                      <div>
                        <button onClick={this.previousMystery}>Previous</button>
                      </div>
                      <div>
                        <button onClick={this.nextMystery}>Next</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;
            case 4:
              return (
                <div className='mystery-container mtb-20px'>
                  <h1>{todaysMystery.mysteryName} Mystery</h1>
                  <p>
                    The fourth {todaysMystery.mysteryName} mystery is the{' '}
                    {todaysMystery.fourthMystery}.
                  </p>
                  <div className='instructions'>
                    <p>For each mystery, we say: </p>
                    <OurFather />
                    <TenHailMary />
                    <GloryBe />
                    <FatimaPrayer />
                    <div className='flex-container'>
                      <div>
                        <button onClick={this.previousMystery}>Previous</button>
                      </div>
                      <div>
                        <button onClick={this.nextMystery}>Next</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;
            case 5:
              return (
                <div className='mystery-container mtb-20px'>
                  <h1>{todaysMystery.mysteryName} Mystery</h1>
                  <p>
                    The fifth {todaysMystery.mysteryName} mystery is the{' '}
                    {todaysMystery.fifthMystery}.
                  </p>
                  <div className='instructions'>
                    <p>For each mystery, we say: </p>
                    <OurFather />
                    <TenHailMary />
                    <GloryBe />
                    <FatimaPrayer />
                    <HailHolyQueen />
                    <div className='flex-container'>
                      <div>
                        <button onClick={this.previousMystery}>Previous</button>
                      </div>
                      <div>
                        <button
                          onClick={this.nextMystery}
                          style={this.hideNextbutton()}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
              break;
          }
        }}
      </Consumer>
    );
  }
}
