import React, { Component } from 'react'
import Video from './Video'

class RecommendedVideos extends Component {
    constructor(props) {
        super(props)
        this.videos = [
            { Id: 1, videoType: 2, timeSpan: "4:04", videoImageUrl: "assets/images/r1.jpg", videoClass: "col-md-3 resent-grid recommended-grid", clockClass: "clck small-clck", timeClass: "time small-time", description: "Varius sit sed viverra viverra nullam nullam interdum metus", owner: "John Maniya", viewsCount: "71,174 views" },
            { Id: 2, videoType: 2, timeSpan: "6:23", videoImageUrl: "assets/images/r2.jpg", videoClass: "col-md-3 resent-grid recommended-grid", clockClass: "clck small-clck", timeClass: "time small-time", description: "Nullam interdum metus a imperdiet pellentesque vitae pulvinar tortor", owner: "John Maniya", viewsCount: "14,200 views" },
            { Id: 3, videoType: 2, timeSpan: "2:45", videoImageUrl: "assets/images/r3.jpg", videoClass: "col-md-3 resent-grid recommended-grid", clockClass: "clck small-clck", timeClass: "time small-time", description: "Nullam interdum metus a imperdiet pellentesque vitae pulvinar tortor", owner: "John Maniya", viewsCount: "42,174 views" },
            { Id: 5, videoType: 2, timeSpan: "4:34", videoImageUrl: "assets/images/r4.jpg", videoClass: "col-md-3 resent-grid recommended-grid", clockClass: "clck small-clck", timeClass: "time small-time", description: "Nullam interdum metus a imperdiet pellentesque vitae pulvinar tortor", owner: "John Maniya", viewsCount: "714,200 views" },
            { Id: 6, videoType: 2, timeSpan: "3:54", videoImageUrl: "assets/images/r5.jpg", videoClass: "col-md-3 resent-grid recommended-grid", clockClass: "clck small-clck", timeClass: "time small-time", description: "Nullam interdum metus a imperdiet pellentesque vitae pulvinar tortor", owner: "John Maniya", viewsCount: "1,514,200 views" },
            { Id: 7, videoType: 2, timeSpan: "4:08", videoImageUrl: "assets/images/r6.jpg", videoClass: "col-md-3 resent-grid recommended-grid", clockClass: "clck small-clck", timeClass: "time small-time", description: "Nullam interdum metus a imperdiet pellentesque vitae pulvinar tortor", owner: "John Maniya", viewsCount: "914,200 views" }
        ]
    }
    render() {
        var videosJsx = [];
        videosJsx = this.videos.map((value, index) => {
            return (
                <Video key={value.Id} videoType={value.videoType} timeSpan={value.timeSpan} videoImageUrl={value.videoImageUrl} videoClass={value.videoClass} clockClass={value.clockClass} timeClass={value.timeClass}
                    description={value.description} owner={value.owner} viewsCount={value.viewsCount} />
            )
        });
        return (
            <div className="recommended-grids">
                <div className="recommended-info">
                    <h3>Recommended</h3>
                </div>
                {videosJsx}
                <div className="clearfix"> </div>
            </div>
        )
    }
}

export default RecommendedVideos