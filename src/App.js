import React, { Component } from 'react';

//components
import Navbar from './App/Navbar/Navbar';
import Sidebar from './App/Navbar/Sidebar';
import Footer from './App/Navbar/Footer';
import VideoContainer from './App/Video/VideoContainer';
import VideoDetail from './App/Video/VideoDetail';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink, Switch
} from 'react-router-dom'
//styles
import './scss/App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar />
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <Router>
            <Switch>
              <Route exact path="/" component={VideoContainer} />
              <Route path="/watch" component={VideoDetail} />
            </Switch>
          </Router>
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
