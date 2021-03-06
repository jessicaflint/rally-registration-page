import React, { Component } from 'react'
import './EmailOptIn.styl'

class EmailOptIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      email: '',
      yOffset: 0
    }
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleFirstName(event) {
    this.setState({firstName: event.target.value});
  }
  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.email + this.state.firstName + this.state.lastName)
    this.addMember()
    event.preventDefault()
    // window.location.href = 'http://events.truewarrior.fm/vip-all-access-pass/'
    return false
  }
  addMember = () => {
    fetch('/api/addMember', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: this.state.email,
        status: 'subscribed',
        merge_fields: {
          firstName: this.state.firstName
        }
      })
    })
    .then(function(res){
      console.log(res)
    })
    .catch(function(res){
      console.log(res)
    })
  }
  handleClose(e) {
    e.stopPropagation()
  }
  componentWillUnmount() {
    document.body.style.position = 'absolute';
    document.body.style.top = '0px';
    window.scrollTo(0, this.state.yOffset);
  }
  componentDidMount() {
    const v = document.getElementById("placement").value
    if (v != null) {
      document.getElementById("token").value = v
    }

    var modal = document.getElementsByClassName('email-opt-in');
    var body = document.body;
    var y = window.pageYOffset;
    this.setState({yOffset: y});
    modal[0].style.top = y + 'px';
    body.style.top = '-' + y.toString() + 'px';

    document.body.style.position = 'fixed';

  }
  render() {
    // console.log(window.pageYOffset);
    // console.log(document.getElementsByClassName('email-opt-in'));
    return (
      <div className="email-opt-in" onClick={this.props.closeEmailOptIn}>
        <div className="registration-block" onClick={this.handleClose}>
          <h2>So excited for you to be a part of the FREE 7 day FoodBodyLove Rally!</h2>
          <h4>Sign up to grab a spot and we'll see you Nov 13-19th.</h4>
          <form data-drip-embedded-form="830406283" action="https://www.getdrip.com/forms/830406283/submissions" method="post">
            <input placeholder="first name" type="text" id="drip-name" name="fields[first_name]" value={this.state.firstName} onChange={this.handleFirstName} />
            <input placeholder="email" type="email" id="drip-email" name="fields[email]" value={this.state.email} onChange={this.handleEmail} />
            <input type="submit" value="GET YOUR FREE PASS!" />
            <input type="hidden" name="fields[token]" id="token" value={document.getElementById("placement").value}  />
          </form>
        </div>
      </div>
    );
  }
}

export default EmailOptIn;
