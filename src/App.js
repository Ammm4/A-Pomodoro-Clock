import React from 'react';
import Countdown from './Countdown';
import Buttons from './Buttons';
import Event from './Event';
import Audio from './Audio'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     label: 'Session',
     breakLength: 5,
     sessionLength: 25,
     secondLength: '00',
     sessionDisplay:25,
     breakDisplay:5,
     stage: false,
     timeElapse: 0,
     myTimer: null
    }
    this.audio = React.createRef();
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
    this.countdown = this.countdown.bind(this);
    this.decreaseDuration = this.decreaseDuration.bind(this);
    this.increaseDuration = this.increaseDuration.bind(this);
  }
  decreaseDuration(type, type1){
    if(this.state[type] > 1){
      this.setState({[type]: this.state[type] - 1, [type1]: this.state[type1] - 1})
    } 
  }
  increaseDuration(type, type1){
    if(this.state[type] < 60){
      this.setState({[type]: this.state[type] + 1,  [type1]: this.state[type1] + 1})
    }
  }
   startStop(){
     if(!this.state.stage){ 
       this.setState({stage: true});
       let myTimer = setInterval(this.countdown, 1000);
       this.setState({myTimer: myTimer})
     } else {
       this.setState({stage: false});
       clearInterval(this.state.myTimer)
     } 
   }
   reset(){
    clearInterval(this.state.myTimer);
     this.setState({
       label:'Session',
       breakLength: 5,
       breakDisplay: 5,
       sessionLength: 25,
       sessionDisplay: 25,
       secondLength: '00',
       stage: false
     })
     
   }
    
   countdown(){
    let label1 = this.state.label === 'Session' ? ['Break', 'sessionDisplay', 'sessionLength'] : ['Session', 'breakDisplay', 'breakLength'];
    if (this.state[label1[1]] === 0 && this.state.secondLength === '00') {
      this.setState({label: label1[0], [label1[1]]: this.state[label1[2]]})
      this.audio.current.playAlarm();
      return
    } else {
      if(this.state.secondLength === '00') { 
       this.setState({secondLength: 59, [label1[1]]: this.state[label1[1]] - 1});  
      } else { 
        let ss = this.state.secondLength - 1;
        if(ss < 10) {
          this.setState({secondLength: '0' + ss});
        } else {
          this.setState({secondLength: ss});
        }
        }
    }
  }
  
  render(){
    let mm = this.state.label === 'Session' ? this.state.sessionDisplay : this.state.breakDisplay;
    if(mm < 10) {mm = '0' + mm};
      return(
      <div className="App">  
        <h1>My Pomodoro Clock</h1>
        <Event
          durationType={'breakLength'}
          durationDisplay={'breakDisplay'}
          eventName={'Break Duration'}
          decreaseDuration={this.decreaseDuration}
          duration={this.state.breakLength}
          increaseDuration={this.increaseDuration}
        />
        <Event 
          durationType={'sessionLength'}
          durationDisplay={'sessionDisplay'}
          eventName={'Session Duration'}
          decreaseDuration={this.decreaseDuration}
          duration={this.state.sessionLength}
          increaseDuration={this.increaseDuration}
        />
        <Countdown 
          label={this.state.label}
          mm={mm}
          secondLength={this.state.secondLength}
          startStop={this.startStop}
          reset={this.reset}
        />
        <Buttons 
          startStop={this.startStop}
          reset={this.reset}
        />
        <Audio 
          ID={'beep'} 
          src={'http://soundbible.com/mp3/sos-morse-code_daniel-simion.mp3'}
          ref={this.audio}
        />        
      </div>      
    );
  }
}
 


export default App;
