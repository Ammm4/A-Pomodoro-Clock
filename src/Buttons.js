import React from 'react';
import Button from './Button'

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
        <Button buttonId={'start_stop'} clickHandler={this.handleClick} buttonName={'Start/Stop'}/>
        <Button buttonId={'reset'} clickHandler={this.props.reset} buttonName={'Reset'}/>
      </div>
    )
  }
}

export default Buttons;