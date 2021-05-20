import React from 'react';
import Button from './Button'

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.decreaseDuration = this.decreaseDuration.bind(this);
    this.increaseDuration = this.increaseDuration.bind(this);
  }
  decreaseDuration() {
    this.props.decreaseDuration(this.props.durationType, this.props.durationDisplay);
  }
  increaseDuration(){
    this.props.increaseDuration(this.props.durationType, this.props.durationDisplay);
  }
  render() {
    return(<div>
             <h4 id="break-label">{this.props.eventName}</h4>
              <div className='container1'>
                <Button buttonId={'break-decrement'} clickHandler={this.decreaseDuration} buttonName='minus'/>
                <div id="break-length">{this.props.duration}</div>
                <Button buttonId={'break-increment'} clickHandler={this.increaseDuration} buttonName='plus'/>
              </div>
           </div>)
  }
}

export default Event;