import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Video extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var vidFooter =  this.props.videoType==1?VideoFooterTop(this.props.description,this.props.owner,this.props.viewsCount):VideoFooterRecommendations(this.props.description,this.props.owner,this.props.viewsCount)
        return (
            <div className={this.props.videoClass}>
                <div className="resent-grid-img recommended-grid-img">
                    <Link to="/watch"><img src={this.props.videoImageUrl} alt="ThumbnailUrl" /></Link>
                    <div className={this.props.timeClass}>
                        <p>{this.props.timeSpan}</p>
                    </div>
                    <div className={this.props.clockClass}>
                        <span className="glyphicon glyphicon-time" aria-hidden="true" />
                    </div>
                </div>
                {vidFooter}
            </div>
        )
    }
}

export default Video

const VideoFooterTop = (description,owner,viewsCount) => (
    <div className="resent-grid-info recommended-grid-info">
                    <h3><a href="single.html" className="title title-info">{description}</a></h3>
                    <ul>
                        <li><p className="author author-info"><a href="#" className="author">{owner}</a></p></li>
                        <li className="right-list"><p className="views views-info">{viewsCount}</p></li>
                    </ul>
                </div>
)
const VideoFooterRecommendations = (description,owner,viewsCount) => (
    <div className="resent-grid-info recommended-grid-info">
        <h5><a href="single.html" className="title">{description}</a></h5>
        <div className="slid-bottom-grids">
            <div className="slid-bottom-grid">
                <p className="author author-info"><a href="#" className="author">{owner}</a></p>
            </div>
            <div className="slid-bottom-grid slid-bottom-right">
                <p className="views views-info">{viewsCount}</p>
            </div>
            <div className="clearfix"> </div>
        </div>
    </div>
)