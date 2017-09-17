import React, { Component } from 'react'
import './Benefits.styl'

class Benefits extends Component {
  render() {
    return (
      <div className="benefits">
        <h2>{this.props.data.title}</h2>
        {this.props.data.benefits.map((benefit, i) => (
          <div className='benefit'>
            <div className='icon'>
              <img src={require(`../../img/icon-benefit-${i+1}.png`)} />
              <div className='number'>{i}</div>
            </div>
            <div className='content'>
              <h3>{benefit.title}</h3>
              <p>{benefit.problem}</p>
              <p>{benefit.solution}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Benefits;