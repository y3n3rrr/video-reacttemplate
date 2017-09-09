import { observable, action,computed } from "mobx"
import axios from "axios"
import $ from 'jquery'
import {user,comment} from './models/user'

class AppState {
  @observable user=new user;
  @observable comment=new Object;
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
  postSaveComment(){
    debugger
    var newComment=this.comment
    axios.post('http://localhost:56732/Api/Comment/CreateComment', newComment)
    .then(response =>{debugger
      var result = response.data;
        if(result.Success)
          alert("Kayit basarili!")
      })
    .catch(error => error);
  }
}

var appState = new AppState
export default appState