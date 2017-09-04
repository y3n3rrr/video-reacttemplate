import React, {Component} from 'react'
import Video from './Video'
import RecentlyUploadedList from './RecentlyUploadedList'
import RecommendedList from './RecommendedList'

class VideoContainer extends Component{
    render(){
        return(
            <div className="main-grids">
        <div className="top-grids">
          <div className="recommended-info">
            <h3>Recent Videos</h3>
          </div>
          <Video videoType={1} videoClass="col-md-4 resent-grid recommended-grid slider-top-grids" clockClass="clck" timeClass="time" timeSpan="3:04" videoImageUrl="assets/images/t1.jpg"
          description="Pellentesque vitae pulvinar tortor nullam interdum metus a imperdiet" owner="John Maniya"  viewsCount="2,114,200 views"
          />
          <Video videoType={1} videoClass="col-md-4 resent-grid recommended-grid slider-top-grids" clockClass="clck" timeClass="time" timeSpan="7:23" videoImageUrl="assets/images/t2.jpg"
          description="Interdum pellentesque vitae pulvinar tortor nullam metus a imperdiet" owner="John Maniya" viewsCount="2,114,200 views"
          />
          <Video videoType={1} videoClass="col-md-4 resent-grid recommended-grid slider-top-grids" clockClass="clck" timeClass="time" timeSpan="4:04" videoImageUrl="assets/images/t3.jpg"
          description="Nullam interdum metus a imperdiet pellentesque vitae pulvinar tortor" owner="John Maniya" viewsCount="71,174 views"
          />
          <div className="clearfix"> </div>
        </div>
        <div className="recommended">
        <RecentlyUploadedList />
        </div>
        {/*-728x90-*/}
        <div className="recommended">
        <RecommendedList />
        </div>
        <div className="recommended">
          <div className="recommended-grids">
            <div className="recommended-info">
              <h3>Sports</h3>
            </div>
            <div className="col-md-3 resent-grid recommended-grid">
              <div className="resent-grid-img recommended-grid-img">
                <a href="single.html"><img src="assets/images/g.jpg" alt /></a>
                <div className="time small-time">
                  <p>7:30</p>
                </div>
                <div className="clck small-clck">
                  <span className="glyphicon glyphicon-time" aria-hidden="true" />
                </div>
              </div>
              <div className="resent-grid-info recommended-grid-info video-info-grid">
                <h5><a href="single.html" className="title">Varius sit sed viverra nullam viverra nullam interdum metus</a></h5>
                <ul>
                  <li><p className="author author-info"><a href="#" className="author">John Maniya</a></p></li>
                  <li className="right-list"><p className="views views-info">2,114,200 views</p></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 resent-grid recommended-grid">
              <div className="resent-grid-img recommended-grid-img">
                <a href="single.html"><img src="assets/images/g1.jpg" alt /></a>
                <div className="time small-time">
                  <p>9:34</p>
                </div>
                <div className="clck small-clck">
                  <span className="glyphicon glyphicon-time" aria-hidden="true" />
                </div>
              </div>
              <div className="resent-grid-info recommended-grid-info video-info-grid">
                <h5><a href="single.html" className="title">Nullam interdum viverra nullam metus varius sit sed viverra</a></h5>
                <ul>
                  <li><p className="author author-info"><a href="#" className="author">John Maniya</a></p></li>
                  <li className="right-list"><p className="views views-info">2,114,200 views</p></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 resent-grid recommended-grid">
              <div className="resent-grid-img recommended-grid-img">
                <a href="single.html"><img src="assets/images/g2.jpg" alt /></a>
                <div className="time small-time">
                  <p>5:34</p>
                </div>
                <div className="clck small-clck">
                  <span className="glyphicon glyphicon-time" aria-hidden="true" />
                </div>
              </div>
              <div className="resent-grid-info recommended-grid-info video-info-grid">
                <h5><a href="single.html" className="title">Varius sit sed viverra nullam viverra nullam interdum metus</a></h5>
                <ul>
                  <li><p className="author author-info"><a href="#" className="author">John Maniya</a></p></li>
                  <li className="right-list"><p className="views views-info">2,114,200 views</p></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 resent-grid recommended-grid">
              <div className="resent-grid-img recommended-grid-img">
                <a href="single.html"><img src="assets/images/g3.jpg" alt /></a>
                <div className="time small-time">
                  <p>6:55</p>
                </div>
                <div className="clck small-clck">
                  <span className="glyphicon glyphicon-time" aria-hidden="true" />
                </div>
              </div>
              <div className="resent-grid-info recommended-grid-info video-info-grid">
                <h5><a href="single.html" className="title">Nullam interdum metus viverra nullam varius sit sed viverra</a></h5>
                <ul>
                  <li><p className="author author-info"><a href="#" className="author">John Maniya</a></p></li>
                  <li className="right-list"><p className="views views-info">2,114,200 views</p></li>
                </ul>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="recommended-grids">
            <div className="col-md-3 resent-grid recommended-grid">
              <div className="resent-grid-img recommended-grid-img">
                <a href="single.html"><img src="assets/images/we2.jpg" alt /></a>
                <div className="time small-time">
                  <p>7:30</p>
                </div>
                <div className="clck small-clck">
                  <span className="glyphicon glyphicon-time" aria-hidden="true" />
                </div>
              </div>
              <div className="resent-grid-info recommended-grid-info video-info-grid">
                <h5><a href="single.html" className="title">Varius sit sed viverra nullam viverra nullam interdum metus</a></h5>
                <ul>
                  <li><p className="author author-info"><a href="#" className="author">John Maniya</a></p></li>
                  <li className="right-list"><p className="views views-info">2,114,200 views</p></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 resent-grid recommended-grid">
              <div className="resent-grid-img recommended-grid-img">
                <a href="single.html"><img src="assets/images/we1.jpg" alt /></a>
                <div className="time small-time">
                  <p>9:34</p>
                </div>
                <div className="clck small-clck">
                  <span className="glyphicon glyphicon-time" aria-hidden="true" />
                </div>
              </div>
              <div className="resent-grid-info recommended-grid-info video-info-grid">
                <h5><a href="single.html" className="title">Nullam interdum viverra nullam metus varius sit sed viverra</a></h5>
                <ul>
                  <li><p className="author author-info"><a href="#" className="author">John Maniya</a></p></li>
                  <li className="right-list"><p className="views views-info">2,114,200 views</p></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 resent-grid recommended-grid">
              <div className="resent-grid-img recommended-grid-img">
                <a href="single.html"><img src="assets/images/we4.jpg" alt /></a>
                <div className="time small-time">
                  <p>5:34</p>
                </div>
                <div className="clck small-clck">
                  <span className="glyphicon glyphicon-time" aria-hidden="true" />
                </div>
              </div>
              <div className="resent-grid-info recommended-grid-info video-info-grid">
                <h5><a href="single.html" className="title">Varius sit sed viverra nullam viverra nullam interdum metus</a></h5>
                <ul>
                  <li><p className="author author-info"><a href="#" className="author">John Maniya</a></p></li>
                  <li className="right-list"><p className="views views-info">2,114,200 views</p></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 resent-grid recommended-grid">
              <div className="resent-grid-img recommended-grid-img">
                <a href="single.html"><img src="assets/images/we3.jpg" alt /></a>
                <div className="time small-time">
                  <p>6:55</p>
                </div>
                <div className="clck small-clck">
                  <span className="glyphicon glyphicon-time" aria-hidden="true" />
                </div>
              </div>
              <div className="resent-grid-info recommended-grid-info video-info-grid">
                <h5><a href="single.html" className="title">Nullam interdum metus viverra nullam varius sit sed viverra</a></h5>
                <ul>
                  <li><p className="author author-info"><a href="#" className="author">John Maniya</a></p></li>
                  <li className="right-list"><p className="views views-info">2,114,200 views</p></li>
                </ul>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
        )
    }
}

export default VideoContainer