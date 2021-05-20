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
             <div id='time-left'>{this.props.mm}:{this.props.secondLength}</div>
             <div className='container3'>
               <div id='start_stop' onClick={this.handleClick}>Start/Stop</div>
               <div id="reset" onClick={this.props.reset}>Reset</div>
             </div>
           </div>
           )
  }
}

export default Countdown;