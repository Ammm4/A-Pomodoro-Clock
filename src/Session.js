import React from 'react';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.decSession();
  }
  render() {
    return(<div>
             <h3 id="session-label">Session Duration</h3>
             <div className='container2'>
               <div id="session-decrement" onClick={this.handleClick}>-</div>
               <div id="session-length">{this.props.sessionLength}</div>
               <div id="session-increment" onClick={this.props.incSession}>+</div>
             </div>     
           </div>)
  }
}

export default Session;