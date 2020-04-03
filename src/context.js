import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    signOfTheCross:
      'In the name of the Father, and of the Son, and of the Holy Spirt. Amen',
    apostlesCreed:
      'I believe in God, the Father Almighty, Creator of Heaven and earth; and in Jesus Christ, His only Son, Our Lord, Who was conceived by the Holy Ghost, born of the Virgin Mary, suffered under Pontius Pilate, was crucified; died, and was buried. He descended into Hell; the third day He arose again from the dead; He ascended into Heaven, sitteth at the right hand of God, the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
    ourFather:
      'Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil, Amen.',
    hailMary:
      'Hail Mary, full of grace. The Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
    gloryBe:
      'Glory be to the Father, to the Son, and to the Holy Spirit, as it was, is now, and ever shall be, world without end. Amen.',
    fatimaPrayer:
      'O My Jesus, forgive us our sins, save us from the fires of hell and lead all souls to heaven, especially those in most need of Thy mercy. Amen.',
    hailHolyQueen:
      'Hail, Holy Queen, Mother of mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve, to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us; and after this our exile show unto us the blessed fruit of thy womb Jesus, O clement, O loving, O sweet Virgin Mary.Pray for us, O holy Mother of God. That we may be made worthy of the promises of Christ.O God, whose only-begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal salvation; grant we beseech Thee, that meditating upon these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise. Through the same Christ our Lord. Amen.',
    todaysMystery: {},
    todaysDay: 'Sunday',
    mysteries: [
      {
        mysteryName: 'Joyful',
        firstMystery: 'The Annunciation (Luke 1:26–38)',
        secondMystery: 'The Visitation (Luke 1:39–56)',
        thirdMystery: 'The Nativity (Luke 2:1–21)',
        fourthMystery: 'Presentation (Luke 2:22–38)',
        fifthMystery:
          'The Finding of the Child Jesus in the Temple (Luke 2:41–52)'
      },
      {
        mysteryName: 'Sorrowful',
        firstMystery: 'The Agony of Jesus in the Garden (Matthew 26:36–56)',
        secondMystery: 'The Scourging at the Pillar (Matthew 27:26)',
        thirdMystery: 'The Crowning with Thorns (Matthew 27:27–31)',
        fourthMystery: 'The Carrying of the Cross (Matthew 27:32)',
        fifthMystery: 'The Crucifixion (Matthew 27:33–56)'
      },
      {
        mysteryName: 'Glorious',
        firstMystery: 'The Resurrection (John 20:1–29)',
        secondMystery: 'The Ascension (Luke 24:36–53)',
        thirdMystery: 'The Descent of the Holy Spirit (Acts 2:1–41)',
        fourthMystery: 'The Assumption of Mary, the Mother of God, into heaven',
        fifthMystery: 'The Coronation of Mary in heaven'
      },
      {
        mysteryName: 'Luminous',
        firstMystery: 'The Baptism in the River Jordan (Matthew 3:13–16)',
        secondMystery: 'The Wedding Feast at Cana (John 2:1–11)',
        thirdMystery:
          'The Preaching of the coming of the Kingdom of God (Mark 1:14–15)',
        fourthMystery: 'The Transfiguration (Matthew 17:1–8)',
        fifthMystery: 'The Institution of the Holy Eucharist (Matthew 26)'
      }
    ]
  };

  setDay = currentDayOfTheWeek => {
    if (currentDayOfTheWeek === 0) {
      this.setState({
        todaysDay: 'Sunday'
      });
    } else if (currentDayOfTheWeek === 1) {
      this.setState({
        todaysDay: 'Monday'
      });
    } else if (currentDayOfTheWeek === 2) {
      this.setState({
        todaysDay: 'Tuesday'
      });
    } else if (currentDayOfTheWeek === 3) {
      this.setState({
        todaysDay: 'Wednesday'
      });
    } else if (currentDayOfTheWeek === 4) {
      this.setState({
        todaysDay: 'Thursday'
      });
    } else if (currentDayOfTheWeek === 5) {
      this.setState({
        todaysDay: 'Friday'
      });
    } else if (currentDayOfTheWeek === 6) {
      this.setState({
        todaysDay: 'Saturday'
      });
    }
  };

  componentDidMount() {
    const currentDate = new Date();
    const currentDayOfTheWeek = currentDate.getDay();
    this.setDay(currentDayOfTheWeek);

    if (currentDayOfTheWeek === 0 || currentDayOfTheWeek === 3) {
      this.setState({
        todaysMystery: this.state.mysteries[2]
      });
    } else if (currentDayOfTheWeek === 1 || currentDayOfTheWeek === 6) {
      this.setState({
        todaysMystery: this.state.mysteries[0]
      });
    } else if (currentDayOfTheWeek === 2 || currentDayOfTheWeek === 5) {
      this.setState({
        todaysMystery: this.state.mysteries[1]
      });
    } else if (currentDayOfTheWeek === 4) {
      this.setState({
        todaysMystery: this.state.mysteries[3]
      });
    }
  }

  sayHello = name => {
    console.log('Hello world');
  };

  // onSubmit = e => {
  //   e.preventDefault();
  //   console.log('submit button was clicked');
  // };

  render() {
    return (
      <Context.Provider value={{ ...this.state, sayHello: this.sayHello() }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
