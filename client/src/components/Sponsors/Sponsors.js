import React, { Component } from 'react'
import './Sponsors.styl'

class Sponsors extends Component {
  render() {
    return (
      <div className='sponsors'>
        <h2>Thanks to our sponsors</h2>
        <img src={require(`../../img/logo-aurora.jpg`)}/>
        <img src={require(`../../img/logo-green-mountain-fox-run.png`)}/>
        <img src={require(`../../img/logo-reasons.jpg`)}/>
      </div>
    );
  }
}

export default Sponsors;
