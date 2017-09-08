import { observable, action,computed } from "mobx"
import axios from "axios"
import $ from 'jquery'
import {user} from './models/user'

class AppState {
  @observable user=new user;
  constructor() {
  }
  postSaveUser(){
      var newUser=this.user
      axios.post('http://localhost:56732/Api/Account/CreateUser', newUser)
      .then(response =>{debugger
        var result = response.data;
          if(result.Passed)
            alert("Kayit basarili!")
        })
      .catch(error => error);
  }
}
var appState = new AppState
export default appState