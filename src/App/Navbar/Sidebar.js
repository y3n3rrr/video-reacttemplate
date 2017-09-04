import React, {Component} from 'react'
import $ from 'jquery'

class Sidebar extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        $( "li a.menu1" ).click(function() {
            $( "ul.cl-effect-2" ).slideToggle( 300, function() {
            // Animation complete.
            });
            });
        $( "li a.menu" ).click(function() {
            $( "ul.cl-effect-1" ).slideToggle( 300, function() {
            // Animation complete.
            });
            });
    }
    render(){
        return(
            <div className="col-sm-3 col-md-2 sidebar">
            <div className="top-navigation">
              <div className="t-menu">MENU</div>
              <div className="t-img">
                <img src="assets/images/lines.png" alt="asd" />
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="drop-navigation drop-navigation">
              <ul className="nav nav-sidebar">
                <li className="active"><a href="index-2.html" className="home-icon"><span className="glyphicon glyphicon-home" aria-hidden="true" />Home</a></li>
                <li><a href="shows.html" className="user-icon"><span className="glyphicon glyphicon-home glyphicon-blackboard" aria-hidden="true" />TV Shows</a></li>
                <li><a href="history.html" className="sub-icon"><span className="glyphicon glyphicon-home glyphicon-hourglass" aria-hidden="true" />History</a></li>
                <li><a href="#" ref="menu1" className="menu1"><span className="glyphicon glyphicon-film" aria-hidden="true" />Movies<span className="glyphicon glyphicon-menu-down" aria-hidden="true" /></a></li>
                <ul className="cl-effect-2">
                  <li><a href="movies.html">English</a></li>                                             
                  <li><a href="movies.html">Chinese</a></li>
                  <li><a href="movies.html">Hindi</a></li> 
                </ul>
                {/* script-for-menu */}
                <li><a href="#" className="menu"><span className="glyphicon glyphicon-film glyphicon-king" aria-hidden="true" />Sports<span className="glyphicon glyphicon-menu-down" aria-hidden="true" /></a></li>
                <ul className="cl-effect-1">
                  <li><a href="sports.html">Football</a></li>                                             
                  <li><a href="sports.html">Cricket</a></li>
                  <li><a href="sports.html">Tennis</a></li> 
                  <li><a href="sports.html">Shattil</a></li>  
                </ul>
                {/* script-for-menu */}
                <li><a href="movies.html" className="song-icon"><span className="glyphicon glyphicon-music" aria-hidden="true" />Songs</a></li>
                <li><a href="news.html" className="news-icon"><span className="glyphicon glyphicon-envelope" aria-hidden="true" />News</a></li>
              </ul>
              {/* script-for-menu */}
              <div className="side-bottom">
                <div className="side-bottom-icons">
                  <ul className="nav2">
                    <li><a href="#" className="facebook"> </a></li>
                    <li><a href="#" className="facebook twitter"> </a></li>
                    <li><a href="#" className="facebook chrome"> </a></li>
                    <li><a href="#" className="facebook dribbble"> </a></li>
                  </ul>
                </div>
                <div className="copyright">
                  <p>Copyright © 2015 My Play. All Rights Reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Sidebar
