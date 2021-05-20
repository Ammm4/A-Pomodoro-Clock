import React from 'react';

class Audio extends React.Component {
  constructor(props){
    super(props);
    this.audio = React.createRef();
    
  }
  playAlarm(){
    this.audio.current.play()
  }
  render() {
    return(
      <audio 
        id={this.props.ID} 
        src={this.props.src}
        ref={this.audio}
        onClick={this.playAlarm}
      /> 
       
        
    )
}
}

export default Audio;