import React, {Component} from 'react'

class SignIn extends Component{
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
    <form>
      <input type="text" className="email" placeholder="Enter email / mobile" required="required" pattern="([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?" />
      <input type="password" placeholder="Password" required="required" pattern=".{6,}" title="Minimum 6 characters required" autoComplete="off" />
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