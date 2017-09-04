import React, { Component } from 'react';

//components
import Navbar from './App/Navbar/Navbar';
import Sidebar from './App/Navbar/Sidebar';
import Footer from './App/Navbar/Footer';
import VideoContainer from './App/Video/VideoContainer';

//styles
import './scss/App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Navbar />
         <Sidebar />

         <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">		
         <VideoContainer />
            <Footer />
          </div>
      </div>
    );
  }
}

export default App;
