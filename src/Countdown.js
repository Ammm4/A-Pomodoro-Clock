import React from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.startStop();
  }
  render() {
    return (<div>                      
             <h2 id='timer-label'>{this.props.label}</h2>
             <div id='progress-bar'>
               <div className='progress'></div>
             </div>      
             <div id='time-left'>{this.props.mm}:{this.props.secondLength}</div>
             
           </div>
           )
  }
}

export default Countdown;