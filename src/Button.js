import React from 'react';

class Button extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.clickHandler();
  }
  render() {
    return(
      <div 
        id={this.props.buttonId}
        onClick={this.handleClick}
      >
        {this.props.buttonName === 'Start/Stop' ?
        <i className="fas fa-play"></i> : this.props.buttonName === 'minus' ?
        <i className="fas fa-minus"></i> : this.props.buttonName === 'plus' ?
        <i className="fas fa-plus"></i>  : <i className="fas fa-sync-alt"></i>
        }
        {this.props.buttonName === 'Start/Stop' && <i className="fas fa-pause"></i>}
      </div>
    )
}
}

export default Button;