import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.decDuration();
  }
  render() {
    return(<div>
             <h3 id="break-label">{this.props.eventName}</h3>
              <div className='container1'>
                <div id="break-decrement" onClick={this.handleClick}>-</div>
                <div id="break-length">{this.props.duration}</div>
                <div id="break-increment" onClick={this.props.incDuration}>+</div>
              </div>
           </div>)
  }
}

export default Event;