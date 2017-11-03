import React, { Component } from 'react'
import './Sponsors.styl'

class Sponsors extends Component {
  render() {
    return (
      <div className='sponsors-container'>
        <h2>Thanks to our sponsors</h2>
        <div className='sponsors'>
        <img src={require(`../../img/logo-aurora.jpg`)}/>
        <img src={require(`../../img/logo-green-mountain-fox-run.png`)}/>
        <img src={require(`../../img/logo-reasons.jpg`)}/>
        </div>
      </div>
    );
  }
}

export default Sponsors;
