import React from 'react';

class Break extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.decBreak();
  }
  render() {
    return(<div>
             <h3 id="break-label">Break Duration</h3>
              <div className='container1'>
                <div id="break-decrement" onClick={this.handleClick}>-</div>
                <div id="break-length">{this.props.breakLength}</div>
                <div id="break-increment" onClick={this.props.incBreak}>+</div>
              </div>
           </div>)
  }
}

export default Break;