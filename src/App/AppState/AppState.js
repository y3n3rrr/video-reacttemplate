import React from 'react'  
import { observable, action,computed } from "mobx"
import axios from "axios"
import $ from 'jquery'
import {User, Comment, Video} from './models/user'

class AppState {
  @observable User=new User;
  @observable Video=new Video
  @observable errors=[]
  @observable isAuthenticated;
  constructor() {
    this.Video.Id=0;
    this.isAuthenticated=false;
  }
  SignIn(user){
    var signUser= user||this.User
    axios.post('http://localhost:56732/Api/Account/SignIn', signUser)
    .then(response =>{debugger
      var result = response.data;
        if(result.Success)
          alert("Kayit basarili!")
      })
      .catch(error => {debugger
        getErrorMessage(error)
      });
}
  postSaveUser(){
      var newUser=this.user
      axios.post('http://localhost:56732/Api/Account/CreateUser', newUser)
      .then(response =>{
        var result = response.data;
          if(result.Success)
            alert("Kayit basarili!")
        })
      .catch(error => error);
  }
  postSaveComment(comment){
    axios.post('http://localhost:56732/Api/Comment/CreateComment', comment)
    .then(response =>{
      debugger
      var result = response.data;
        if(result.Success){
          alert("Kayit basarili!")
          this.Video.Comments.push(comment)
        }
      })
    .catch(error => {
      getErrorMessage(error)
    });
  }

  getVideo(id){
    id=id||this.Video.Id
    axios.get('http://localhost:56732/Api/Video/GetVideo?id='+id)
    .then(response =>{
      var result = response.data;
      if(result.Success){
        this.Video.Url=result.Data.Url || "https://www.youtube.com/embed/oYiT-vLjhC4"
        this.Video.PublishDate=result.Data.PublishDate
        }
      })
    .catch(error => {
      getErrorMessage(error)
    });
  }
  getComments(id){
    id=id||this.Video.Id
    axios.get('http://localhost:56732/Api/Comment/GetComment?id='+id)
    .then(response =>{
      var result = response.data;
        if(result.Success){
          this.Video.Comments=result.Data
        }
      })
    .catch(error => {
      getErrorMessage(error)
    });
  }

  setVideoId(id){
    this.Video.Id=id;
  }
  
}

const getErrorMessage=(error)=>{
  var errorMessage = error.message || ""
  var response = error.response || undefined
  if(typeof(response) != "undefined" && response.data.Message)
    errorMessage=response.data.Message
  alert(errorMessage)
}

var appState = new AppState
export default appState