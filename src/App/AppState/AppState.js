import { observable, action,computed } from "mobx"
import axios from "axios"
import $ from 'jquery'
import {user,comment} from './models/user'

class AppState {
  @observable user=new user;
  constructor() {
  }
  postSaveUser(){
      var newUser=this.user
      axios.post('http://localhost:56732/Api/Account/CreateUser', newUser)
      .then(response =>{debugger
        var result = response.data;
          if(result.Success)
            alert("Kayit basarili!")
        })
      .catch(error => error);
  }
  postSaveComment(comment){
    debugger
    axios.post('http://localhost:56732/Api/Comment/CreateComment', comment)
    .then(response =>{debugger
      var result = response.data;
        if(result.Success)
          alert("Kayit basarili!")
      })
    .catch(error => {debugger
      var response = error.response;
      if(response.data.Message)
        alert(response.data.Message)
    });
  }
  getComments(){
    axios.get('http://localhost:56732/Api/Comment/GetComment')
    .then(response =>{debugger
      var result = response.data;
        if(result.Success)
          alert("Kayit basarili!")
      })
    .catch(error => {debugger
      var response = error.response;
      if(response.data.Message)
        alert(response.data.Message)
    });
  }
  
}

var appState = new AppState
export default appState