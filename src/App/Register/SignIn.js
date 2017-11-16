import React, {Component} from 'react'
import {User} from '../AppState/models/user'


class SignIn extends Component{
  constructor(props){
    super(props)
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.appState.User.Username=this.username.value
    this.props.appState.User.Password=this.password.value
    this.props.appState.SignIn();
   }
    render(){
        return(
<div className="signin">
<a href="#small-dialog" className="play-icon popup-with-zoom-anim">Sign In</a>
<div id="small-dialog" className="mfp-hide">
  <h3>Login</h3>
  <div className="social-sits">
    <div className="facebook-button">
      <a href="#">Connect with Facebook</a>
    </div>
    <div className="chrome-button">
      <a href="#">Connect with Google</a>
    </div>
    <div className="button-bottom">
      <p>New account? <a href="#small-dialog2" className="play-icon popup-with-zoom-anim">Signup</a></p>
    </div>
  </div>
  <div className="signup">
    <form onSubmit={this.onSubmit}>
      <input type="text" className="email" placeholder="Username" ref={(input)=>{this.username=input}} required="required"  />
      <input type="password" placeholder="Password" ref={(input)=>{this.password=input}} required="required" pattern=".{6,}" title="Minimum 6 characters required" autoComplete="off" />
      <input type="submit" defaultValue="LOGIN" />
    </form>
    <div className="forgot">
      <a href="#">Forgot password ?</a>
    </div>
  </div>
  <div className="clearfix"> </div>
</div>
</div>
        )
    }
}

export default SignIn