import React, {Component} from 'react'

class SignUp extends Component{
  constructor(props){
    super(props)
    this.appState=this.props.appState
  }
  SaveUser(e){
    e.preventDefault();
    this.appState.user.username = this.username.value;
    this.appState.user.password = this.password.value;
    this.appState.user.email = this.email.value;
    this.appState.postSaveUser();
  }
    render(){
        return(
                <div>
                  <div id="small-dialog2" className="mfp-hide">
                  <h3>Create Account</h3> 
                  <div className="social-sits">
                    <div className="facebook-button">
                      <a href="#">Connect with Facebook</a>
                    </div>
                    <div className="chrome-button">
                      <a href="#">Connect with Google</a>
                    </div>
                    <div className="button-bottom">
                      <p>Already have an account? <a href="#small-dialog" className="play-icon popup-with-zoom-anim">Login</a></p>
                    </div>
                  </div>
                  <div className="signup">
                    <form>
                      <input type="text" className="email" placeholder="Mobile Number" maxLength={10} pattern="[1-9]{1}\d{9}" title="Enter a valid mobile number" />
                    </form>
                    <div className="continue-button">
                      <a href="#small-dialog3" className="hvr-shutter-out-horizontal play-icon popup-with-zoom-anim">CONTINUE</a>
                    </div>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                  <div id="small-dialog3" className="mfp-hide">
                  <h3>Create Account</h3> 
                  <div className="social-sits">
                    <div className="facebook-button">
                      <a href="#">Connect with Facebook</a>
                    </div>
                    <div className="chrome-button">
                      <a href="#">Connect with Google</a>
                    </div>
                    <div className="button-bottom">
                      <p>Already have an account? <a href="#small-dialog" className="play-icon popup-with-zoom-anim">Login</a></p>
                    </div>
                  </div>
                  <div className="signup">
                    <form onSubmit={(e)=>{this.SaveUser(e)}}>
                      <input type="text" defaultValue="y3n3rrr" name="username" ref={(input)=>{ this.username=input }} className="email" placeholder="Username" required="required"   title="Enter username" />
                      <input type="password" defaultValue="12312331" name="password" ref={(input)=>{ this.password=input }} placeholder="Password" required="required"  title="Minimum 6 characters required" autoComplete="off" />
                      <input type="text" defaultValue="y3n3rrr@gmail.com" name="email" ref={(input)=>{ this.email=input }} className="email" placeholder="Email" required="required"   title="Enter a valid email" />
                      <input type="submit" defaultValue="Sign Up" />
                    </form>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                </div>
        )
    }
}

export default SignUp