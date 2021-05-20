import React from 'react';
import Break from './Break';
import Session from './Session';
import Countdown from './Countdown'
import './App.css';
var myTimer;

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
     stage: false
    };
    this.decBreak = this.decBreak.bind(this);
    this.incBreak = this.incBreak.bind(this);
    this.decSession = this.decSession.bind(this);
    this.incSession = this.incSession.bind(this);
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
    this.countdown = this.countdown.bind(this);
  }
  decBreak(){
   if(this.state.breakLength > 1){
     this.setState({breakLength: this.state.breakLength -1, breakDisplay: this.state.breakDisplay-1})
   }
   return
  }
  incBreak(){
    if(this.state.breakLength < 60){
      this.setState({breakLength: this.state.breakLength + 1,  breakDisplay: this.state.breakDisplay+1})
    }
    return
  }
  decSession(){
    if(this.state.sessionLength > 1){
      this.setState({sessionLength: this.state.sessionLength -1,  sessionDisplay: this.state.sessionDisplay-1})
     
    }
    return
   }
   incSession(){
     if(this.state.sessionLength < 60){
       this.setState({sessionLength: this.state.sessionLength + 1,  sessionDisplay: this.state.sessionDisplay + 1});
       
     }
     return
   }
   startStop(){
     if(!this.state.stage){
       this.setState({stage: true});
       myTimer = setInterval(this.countdown, 1000);
     } else {
      this.setState({stage: false});
      clearInterval(myTimer)
     }
    
   }
   reset(){
    clearInterval(myTimer);
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
    if(this.state.label === 'Session'){
      if (this.state.sessionDisplay === 0 && this.state.secondLength === '00') {
        this.setState({label:'Break', sessionDisplay: this.state.sessionLength})
        this.audio.play();
        return
      }
     if(this.state.secondLength === '00') { 
       this.setState({secondLength: 59, sessionDisplay: this.state.sessionDisplay -1 });
       
      } else { 
        let ss = this.state.secondLength - 1;
        if(ss < 10) {
          this.setState({secondLength: '0' + ss});
        } else {
          this.setState({secondLength: ss});
        }
        }
      } else {
        if (this.state.breakDisplay === 0 && this.state.secondLength === '00') {
          this.setState({label:'Session', breakDisplay: this.state.breakLength});
          this.audio.play();
          return
        }
        if(this.state.secondLength === '00') { 
          this.setState({secondLength: 59, breakDisplay: this.state.breakDisplay -1 });
        
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
        <Break 
          decBreak={this.decBreak}
          breakLength={this.state.breakLength}
          incBreak={this.incBreak}
        />
        <Session 
          decSession={this.decSession}
          sessionLength={this.state.sessionLength}
          incBreak={this.incSession}
        />
        <Countdown 
          label={this.state.label}
          mm={mm}
          secondLength={this.state.secondLength}
          startStop={this.startStop}
          reset={this.reset}
        />
        <audio id='beep' ref={element => this.audio = element} src='http://soundbible.com/mp3/sos-morse-code_daniel-simion.mp3'/>   
      </div>
      
    );
  }
}
 


export default App;
