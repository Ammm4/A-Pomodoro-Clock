import React from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.startStop();
  }
  calculateProgress(){
    let progress = (((this.props.timeLength * 60) - this.props.timeElapse)/(this.props.timeLength * 60)) * 100;
    return progress + '%';
  }
  render() {
    return (<div>                      
             <h2 id='timer-label'>{this.props.label}</h2>
             <div id='progress-bar'>
               <div className='progress' style={{width: this.calculateProgress()}}></div>
             </div>      
             <div id='time-left'>{this.props.mm}:{this.props.secondLength}</div> 
           </div>
           )
  }
}

export default Countdown;