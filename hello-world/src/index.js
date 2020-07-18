import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
const root = document.querySelector("#root");

class LoginControl extends React.Component{
constructor(){
  super();
  this.state = {
    logged: false
  }

  this.loginButtonClick = this.loginButtonClick.bind(this);
  this.logoutButtonClick = this.logoutButtonClick.bind(this);
}

loginButtonClick(){
  this.setState({logged: true})  
}
logoutButtonClick(){
  this.setState({logged: false})  
}

loginButton(){
  return <button onClick={this.loginButtonClick}>Login</button>
}
logoutButton(){
  return <button onClick={this.logoutButtonClick}>logout</button>
}

render(){
  if(this.state.logged)return this.logoutButton()
  return this.loginButton()
}
}


ReactDOM.render(
  <>
    <LoginControl />
  </>, root
);