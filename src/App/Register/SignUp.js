import React, {Component} from 'react'

class SignUp extends Component{
  constructor(props){
    super(props)
    this.appState=this.props.appState
  }
  SaveUser(e){
    e.preventDefault();
    this.appState.User.Email = this.email.value;
    this.appState.User.Password = this.password.value;
    this.appState.User.ConfirmPassword = this.confirmpassword.value;
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
                    <form onSubmit={(e)=>{this.SaveUser(e)}}>
                      <input type="text" defaultValue="y3n3rrr@gmail.com" name="email" ref={(input)=>{ this.email=input }} className="email" placeholder="Email" required="required"   title="Enter a valid email" />
                      <input type="password" defaultValue="" name="password" ref={(input)=>{ this.password=input }} placeholder="Password" required="required"  title="Minimum 6 characters required" autoComplete="off" />
                      <input type="password" defaultValue="" name="confirmpassword" ref={(input)=>{ this.confirmpassword=input }} placeholder="Confirm Password" required="required"  title="Minimum 6 characters required" autoComplete="off" />
                      
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