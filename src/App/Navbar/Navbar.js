import React, {Component} from 'react'
import SignUp from '../Register/SignUp'
import SignIn from '../Register/SignIn'
class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="index-2.html"><h1><img src="/assets/images/logo.png" alt="" /></h1></a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <div className="top-search">
              <form className="navbar-form navbar-right">
                <input type="text" className="form-control" placeholder="Search..." />
                <input type="submit" defaultValue=" " />
              </form>
            </div>
            <div className="header-top-right">
              <div className="file">
                <a href="upload.html">Upload</a>
              </div>	
              <div className="signin">
                <a href="#small-dialog2" className="play-icon popup-with-zoom-anim">Sign Up</a>
                {/* pop-up-box */}
                <link href="assets/css/popuo-box.css" rel="stylesheet" type="text/css" media="all" />
                {/*//pop-up-box */}
                
             <SignUp appState = {this.props.appState} />	
           
                <div id="small-dialog7" className="mfp-hide">
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
                    <form action="https://p.w3layouts.com/demos/my_play/web/upload.html">
                      <input type="text" className="email" placeholder="Email" required="required" pattern="([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?" title="Enter a valid email" />
                      <input type="password" placeholder="Password" required="required" pattern=".{6,}" title="Minimum 6 characters required" autoComplete="off" />
                      <input type="submit" defaultValue="Sign In" />
                    </form>
                  </div>
                  <div className="clearfix"> </div>
                </div>		
                <div id="small-dialog4" className="mfp-hide">
                  <h3>Feedback</h3> 
                  <div className="feedback-grids">
                    <div className="feedback-grid">
                      <p>Suspendisse tristique magna ut urna pellentesque, ut egestas velit faucibus. Nullam mattis lectus ullamcorper dui dignissim, sit amet egestas orci ullamcorper.</p>
                    </div>
                    <div className="button-bottom">
                      <p><a href="#small-dialog" className="play-icon popup-with-zoom-anim">Sign in</a> to get started.</p>
                    </div>
                  </div>
                </div>
                <div id="small-dialog5" className="mfp-hide">
                  <h3>Help</h3> 
                  <div className="help-grid">
                    <p>Suspendisse tristique magna ut urna pellentesque, ut egestas velit faucibus. Nullam mattis lectus ullamcorper dui dignissim, sit amet egestas orci ullamcorper.</p>
                  </div>
                  <div className="help-grids">
                    <div className="help-button-bottom">
                      <p><a href="#small-dialog4" className="play-icon popup-with-zoom-anim">Feedback</a></p>
                    </div>
                    <div className="help-button-bottom">
                      <p><a href="#small-dialog6" className="play-icon popup-with-zoom-anim">Lorem ipsum dolor sit amet</a></p>
                    </div>
                    <div className="help-button-bottom">
                      <p><a href="#small-dialog6" className="play-icon popup-with-zoom-anim">Nunc vitae rutrum enim</a></p>
                    </div>
                    <div className="help-button-bottom">
                      <p><a href="#small-dialog6" className="play-icon popup-with-zoom-anim">Mauris at volutpat leo</a></p>
                    </div>
                    <div className="help-button-bottom">
                      <p><a href="#small-dialog6" className="play-icon popup-with-zoom-anim">Mauris vehicula rutrum velit</a></p>
                    </div>
                    <div className="help-button-bottom">
                      <p><a href="#small-dialog6" className="play-icon popup-with-zoom-anim">Aliquam eget ante non orci fac</a></p>
                    </div>
                  </div>
                </div>
                <div id="small-dialog6" className="mfp-hide">
                  <div className="video-information-text">
                    <h4>Video information &amp; settings</h4>
                    <p>Suspendisse tristique magna ut urna pellentesque, ut egestas velit faucibus. Nullam mattis lectus ullamcorper dui dignissim, sit amet egestas orci ullamcorper.</p>
                    <ol>
                      <li>Nunc vitae rutrum enim. Mauris at volutpat leo. Vivamus dapibus mi ut elit fermentum tincidunt.</li>
                      <li>Nunc vitae rutrum enim. Mauris at volutpat leo. Vivamus dapibus mi ut elit fermentum tincidunt.</li>
                      <li>Nunc vitae rutrum enim. Mauris at volutpat leo. Vivamus dapibus mi ut elit fermentum tincidunt.</li>
                      <li>Nunc vitae rutrum enim. Mauris at volutpat leo. Vivamus dapibus mi ut elit fermentum tincidunt.</li>
                      <li>Nunc vitae rutrum enim. Mauris at volutpat leo. Vivamus dapibus mi ut elit fermentum tincidunt.</li>
                    </ol>
                  </div>
                </div>
              </div>
              <SignIn appState={this.props.appState}/>	
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </nav>
        )
    }
}

export default Navbar