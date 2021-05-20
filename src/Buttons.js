import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.startStop()
  }
  render() {
    return(
      <div className='container3'>
        <div id='start_stop' onClick={this.handleClick}>Start/Stop</div>
        <div id="reset" onClick={this.props.reset}>Reset</div>
      </div>
    )
  }
}

export default Buttons;