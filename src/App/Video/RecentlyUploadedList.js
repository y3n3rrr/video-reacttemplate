import React, {Component} from 'react'
import Video from './Video'

class RecentlyUploadedVideos extends Component{
    
    constructor(props){
        super(props)
        this.videos=[
                {Id:1, videoType:2, timeSpan:"4:04", videoImageUrl:"assets/images/c.jpg", videoClass:"col-md-3 resent-grid recommended-grid slider-first", clockClass:"clck small-clck", timeClass:"time small-time slider-time", description:"Nullam interdum metus a imperdiet pellentesque vitae pulvinar tortor", owner:"John Maniya", viewsCount:"71,174 views" },
                {Id:2, videoType:2, timeSpan:"6:23", videoImageUrl:"assets/images/c1.jpg", videoClass:"col-md-3 resent-grid recommended-grid slider-first", clockClass:"clck small-clck", timeClass:"time small-time slider-time", description:"Nullam interdum metus a imperdiet pellentesque vitae pulvinar tortor", owner:"John Maniya", viewsCount:"14,200 views" },
                {Id:3, videoType:2, timeSpan:"2:45", videoImageUrl:"assets/images/c2.jpg", videoClass:"col-md-3 resent-grid recommended-grid slider-first", clockClass:"clck small-clck", timeClass:"time small-time slider-time", description:"Nullam interdum metus a imperdiet pellentesque vitae pulvinar tortor", owner:"John Maniya", viewsCount:"42,174 views" },
                {Id:4, videoType:2, timeSpan:"4:34", videoImageUrl:"assets/images/c3.jpg", videoClass:"col-md-3 resent-grid recommended-grid slider-first", clockClass:"clck small-clck", timeClass:"time small-time slider-time", description:"Nullam interdum metus a imperdiet pellentesque vitae pulvinar tortor", owner:"John Maniya", viewsCount:"2,114,200 views" },
                {Id:5, videoType:2, timeSpan:"4:34", videoImageUrl:"assets/images/c3.jpg", videoClass:"col-md-3 resent-grid recommended-grid slider-first", clockClass:"clck small-clck", timeClass:"time small-time slider-time", description:"Nullam interdum metus a imperdiet pellentesque vitae pulvinar tortor", owner:"John Maniya", viewsCount:"2,114,200 views" },
            ]
    }
    componentDidMount(){
        
    }
    render(){
        var videosJsx = [];
        debugger
        videosJsx = this.videos.map((value, index)=>{
            debugger
            return ( 
                <Video key={value.Id} videoType={value.videoType} timeSpan={value.timeSpan} videoImageUrl={value.videoImageUrl} videoClass={value.videoClass} clockClass={value.clockClass} timeClass={value.timeClass}
                description={value.description} owner={value.owner} viewsCount={value.viewsCount} />
            )
        });
        return(
            <div className="recommended-grids">
            <div className="recommended-info">
              <h3>Recently Upload</h3>
            </div>
            <div id="top" className="callbacks_container">
            <ul className="rslides" id="slider3">
                <li>
                  <div className="animated-grids">
                        {videosJsx}
                    <div className="clearfix"> </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
            
        )
    }
}

export default RecentlyUploadedVideos