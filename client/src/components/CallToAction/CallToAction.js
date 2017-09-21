import React, { Component } from 'react'
import FreePassButton from '../FreePassButton/FreePassButton'
import './CallToAction.styl'

class CallToAction extends Component {
  render() {
    return (
      <div className="call-to-action" style={{backgroundImage: `url(${require('../../img/background.png')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <h2>{this.props.data.title}</h2>
        <FreePassButton openEmailOptIn={this.props.openEmailOptIn}/>
      </div>
    );
  }
}

export default CallToAction;
