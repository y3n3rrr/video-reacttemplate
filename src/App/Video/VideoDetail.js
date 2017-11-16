import React, {Component} from 'react'
import $ from 'jquery'
import {observer} from 'mobx-react'

import moment from 'moment'

@observer
class VideoDetail extends Component{
  constructor(props){
    super(props)
    this.props.appState.setVideoId(this.props.match.params.id)
  }
    componentDidMount(){
  this.props.appState.getVideo()
        var size_li = $("#myList li").size();
        var x=1;
        $('#myList li:lt('+x+')').show();
        $('#loadMore').click(function () {
            x= (x+1 <= size_li) ? x+1 : size_li;
            $('#myList li:lt('+x+')').show();
        });
        $('#showLess').click(function () {
            x=(x-1<0) ? 1 : x-1;
            $('#myList li').not(':lt('+x+')').hide();
        });
    }
    render(){
        return(
        <div className="show-top-grids">
        <div className="col-sm-8 single-left">
          <div className="song">
            <div className="song-info">
              <h3>Etiam molestie nisl eget consequat pharetra</h3>	
            </div>
            <div className="video-grid">
              <iframe src={this.props.appState.Video.Url} allowFullScreen />
              {/* "https://www.youtube.com/embed/oYiT-vLjhC4" */}
            </div>
          </div>
          {ShareApps()}
          <div className="clearfix"> </div>
          <div className="published">
            <div className="load_more">	
              <ul id="myList">
                <li>
                  <h4>{moment(this.props.appState.Video.PublishDate).format('MMMM Do, YYYY')}</h4>
                  <p>Nullam fringilla sagittis tortor ut rhoncus. Nam vel ultricies erat, vel sodales leo. Maecenas pellentesque, est suscipit laoreet tincidunt, ipsum tortor vestibulum leo, ac dignissim diam velit id tellus. Morbi luctus velit quis semper egestas. Nam condimentum sem eget ex iaculis bibendum. Nam tortor felis, commodo faucibus sollicitudin ac, luctus a turpis. Donec congue pretium nisl, sed fringilla tellus tempus in.</p>
                </li>
                <li>
                  <p>Nullam fringilla sagittis tortor ut rhoncus. Nam vel ultricies erat, vel sodales leo. Maecenas pellentesque, est suscipit laoreet tincidunt, ipsum tortor vestibulum leo, ac dignissim diam velit id tellus. Morbi luctus velit quis semper egestas. Nam condimentum sem eget ex iaculis bibendum. Nam tortor felis, commodo faucibus sollicitudin ac, luctus a turpis. Donec congue pretium nisl, sed fringilla tellus tempus in.</p>
                  <p>Nullam fringilla sagittis tortor ut rhoncus. Nam vel ultricies erat, vel sodales leo. Maecenas pellentesque, est suscipit laoreet tincidunt, ipsum tortor vestibulum leo, ac dignissim diam velit id tellus. Morbi luctus velit quis semper egestas. Nam condimentum sem eget ex iaculis bibendum. Nam tortor felis, commodo faucibus sollicitudin ac, luctus a turpis. Donec congue pretium nisl, sed fringilla tellus tempus in.</p>
                  <div className="load-grids">
                    <div className="load-grid">
                      <p>Category</p>
                    </div>
                    <div className="load-grid">
                      <a href="movies.html">Entertainment</a>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* SaveComment:this.SaveComment */}
        <Comments appState={this.props.appState} />
        </div>
        <InComingVid {...{Title:"Up Next"}} /> 
        <div className="clearfix"> </div>
      </div>
        )
    }
}

export default VideoDetail
const InComingVid = (context) => {
  return (<div className="col-md-4 single-right">
  <h3>{context.Title}</h3>
  <div className="single-grid-right">
    <div className="single-right-grids">
      <div className="col-md-4 single-right-grid-left">
        <a href="single.html"><img src="images/r1.jpg" alt /></a>
      </div>
      <div className="col-md-8 single-right-grid-right">
        <a href="single.html" className="title"> Nullam interdum metus</a>
        <p className="author"><a href="#" className="author">John Maniya</a></p>
        <p className="views">2,114,200 views</p>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="single-right-grids">
      <div className="col-md-4 single-right-grid-left">
        <a href="single.html"><img src="images/r2.jpg" alt /></a>
      </div>
      <div className="col-md-8 single-right-grid-right">
        <a href="single.html" className="title"> Nullam interdum metus</a>
        <p className="author"><a href="#" className="author">John Maniya</a></p>
        <p className="views">2,114,200 views </p>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="single-right-grids">
      <div className="col-md-4 single-right-grid-left">
        <a href="single.html"><img src="images/r3.jpg" alt /></a>
      </div>
      <div className="col-md-8 single-right-grid-right">
        <a href="single.html" className="title"> Nullam interdum metus</a>
        <p className="author"><a href="#" className="author">John Maniya</a></p>
        <p className="views">2,114,200 views</p>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="single-right-grids">
      <div className="col-md-4 single-right-grid-left">
        <a href="single.html"><img src="images/r4.jpg" alt /></a>
      </div>
      <div className="col-md-8 single-right-grid-right">
        <a href="single.html" className="title"> Nullam interdum metus</a>
        <p className="author"><a href="#" className="author">John Maniya</a></p>
        <p className="views">2,114,200 views</p>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="single-right-grids">
      <div className="col-md-4 single-right-grid-left">
        <a href="single.html"><img src="images/r5.jpg" alt /></a>
      </div>
      <div className="col-md-8 single-right-grid-right">
        <a href="single.html" className="title"> Nullam interdum metus</a>
        <p className="author"><a href="#" className="author">John Maniya</a></p>
        <p className="views">2,114,200 views</p>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="single-right-grids">
      <div className="col-md-4 single-right-grid-left">
        <a href="single.html"><img src="images/r6.jpg" alt /></a>
      </div>
      <div className="col-md-8 single-right-grid-right">
        <a href="single.html" className="title"> Nullam interdum metus</a>
        <p className="author">By <a href="#" className="author">John Maniya</a></p>
        <p className="views">2,114,200 views</p>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="single-right-grids">
      <div className="col-md-4 single-right-grid-left">
        <a href="single.html"><img src="images/r1.jpg" alt /></a>
      </div>
      <div className="col-md-8 single-right-grid-right">
        <a href="single.html" className="title"> Nullam interdum metus</a>
        <p className="author"><a href="#" className="author">John Maniya</a></p>
        <p className="views">2,114,200 views</p>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="single-right-grids">
      <div className="col-md-4 single-right-grid-left">
        <a href="single.html"><img src="images/r2.jpg" alt /></a>
      </div>
      <div className="col-md-8 single-right-grid-right">
        <a href="single.html" className="title"> Nullam interdum metus</a>
        <p className="author"><a href="#" className="author">John Maniya</a></p>
        <p className="views">2,114,200 views</p>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="single-right-grids">
      <div className="col-md-4 single-right-grid-left">
        <a href="single.html"><img src="images/r3.jpg" alt /></a>
      </div>
      <div className="col-md-8 single-right-grid-right">
        <a href="single.html" className="title"> Nullam interdum metus</a>
        <p className="author"><a href="#" className="author">John Maniya</a></p>
        <p className="views">2,114,200 views</p>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="single-right-grids">
      <div className="col-md-4 single-right-grid-left">
        <a href="single.html"><img src="images/r4.jpg" alt /></a>
      </div>
      <div className="col-md-8 single-right-grid-right">
        <a href="single.html" className="title"> Nullam interdum metus</a>
        <p className="author"><a href="#" className="author">John Maniya</a></p>
        <p className="views">2,114,200 views</p>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="single-right-grids">
      <div className="col-md-4 single-right-grid-left">
        <a href="single.html"><img src="images/r5.jpg" alt /></a>
      </div>
      <div className="col-md-8 single-right-grid-right">
        <a href="single.html" className="title"> Nullam interdum metus</a>
        <p className="author"><a href="#" className="author">John Maniya</a></p>
        <p className="views">2,114,200 views</p>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="single-right-grids">
      <div className="col-md-4 single-right-grid-left">
        <a href="single.html"><img src="images/r6.jpg" alt /></a>
      </div>
      <div className="col-md-8 single-right-grid-right">
        <a href="single.html" className="title"> Nullam interdum metus</a>
        <p className="author"><a href="#" className="author">John Maniya</a></p>
        <p className="views">2,114,200 views</p>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>
</div>)
}
const ShareApps = ()=>(
<div className="song-grid-right">
<div className="share">
  <h5>Share this</h5>
  <ul>
    <li><a href="#" className="icon fb-icon">Facebook</a></li>
    <li><a href="#" className="icon dribbble-icon">Dribbble</a></li>
    <li><a href="#" className="icon twitter-icon">Twitter</a></li>
    <li><a href="#" className="icon pinterest-icon">Pinterest</a></li>
    <li><a href="#" className="icon whatsapp-icon">Whatsapp</a></li>
    <li><a href="#" className="icon like">Like</a></li>
    <li><a href="#" className="icon comment-icon">Comments</a></li>
    <li className="view">200 Views</li>
  </ul>
</div>
</div>)


@observer
class Errors extends Component{
  constructor(props){
    super(props)
  }
  render(){
    debugger
    const errors = this.props.appState.errors
    return(
      <div className="alert alert-danger published">
        {errors.map((val, i) =>(
          <li key={i}><span className="glyphicon glyphicon-warning-sign"></span> {val}</li>
        ))}
      </div>
    )
  }
}
@observer
class Comments extends Component{
  constructor(props){
    super(props)
  }

  onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      VideoId:this.props.appState.Video.Id,
      Name: this.name.value,
      Email: this.email.value,
      Phone: this.phone.value,
      Message: this.message.value,
      CommentDate: moment()
    };
    this.props.appState.postSaveComment(formData);
   }

   componentDidMount(){
    this.props.appState.getComments()
   }
  render(){
    const comments=this.props.appState.Video.Comments;
    return (
    <div className="all-comments">
      { this.props.appState.errors.length>0 ? <Errors appState={this.props.appState} /> : null }
    <div className="all-comments-info">
      <a href="#">All Comments ({comments.length})</a>
      <div className="box">
        <form onSubmit={this.onSubmit}>
          <input type="text" defaultValue="Yener" ref={(input)=>{this.name=input}} placeholder="Name" required=" " />			           					   
          <input type="text" defaultValue="y3n3rrr@gmail.com" ref={(input)=>{this.email=input}} placeholder="Email" required=" " />
          <input type="text" defaultValue="5469330633" ref={(input)=>{this.phone=input}} placeholder="Phone" required=" " />
          <textarea placeholder="Message" ref={(input)=>{this.message=input}} required=" " defaultValue="asd" />
          <input type="submit" defaultValue="SEND" />
          <div className="clearfix"> </div>
        </form>
      </div>
      <div className="all-comments-buttons">
        <ul>
          <li><a href="#" className="top">Top Comments</a></li>
          <li><a href="#" className="top newest">Newest First</a></li>
          <li><a href="#" className="top my-comment">My Comments</a></li>
        </ul>
      </div>
    </div>
    <div className="media-grids">
      {comments.map((val, index) => (
        <div key={index} className="media">
        <h5>{val.Name}</h5>
        <div className="media-left">
          <a href="#">
          </a>
        </div>
        <div className="media-body">
        <span>{moment(val.CommentDate).format('MMMM Do, YYYY')}</span>
          <p>{val.Message}</p>
         
        </div>
      </div>
      ))
    }


      {/* <div className="media">
        <h5>Tom Brown</h5>
        <div className="media-left">
          <a href="#">
          </a>
        </div>
        <div className="media-body">
          <p>Maecenas ultricies rhoncus tincidunt maecenas imperdiet ipsum id ex pretium hendrerit maecenas imperdiet ipsum id ex pretium hendrerit</p>
          <span>View all posts by :<a href="#"> Admin </a></span>
        </div>
      </div>
      <div className="media">
        <h5>Mark Johnson</h5>
        <div className="media-left">
          <a href="#">
          </a>
        </div>
        <div className="media-body">
          <p>Maecenas ultricies rhoncus tincidunt maecenas imperdiet ipsum id ex pretium hendrerit maecenas imperdiet ipsum id ex pretium hendrerit</p>
          <span>View all posts by :<a href="#"> Admin </a></span>
        </div>
      </div> */}

    </div>
  </div>
  )}
}

const userComment = (commentContext)=>{
  <div className="media">
  <h5>{commentContext.username}</h5>
  <div className="media-left">
    <a href="#">
    </a>
  </div>
  <div className="media-body">
    <p>{commentContext.comment}</p>
    <span>{commentContext.date}</span>
  </div>
</div>
}