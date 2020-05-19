import React from 'react';
import login from './login.css'


class Login extends React.Component {


  render() {
    return (
   
    <div>
      <h1>Admin panel</h1>
        <form className="login-form">
          <p className="style-title">Login</p>
          <label>
            <input type="text" name="name" className="input-field"/>
          </label>
          <p className="style-title">Password</p>
          <label>
            <input type="text" name="name" className="input-field"/>
          </label>
          
        </form>
        <div className="box-sign-button">
            <button className="search sign-button">Sign in</button>
        </div>
    </div>
       
 
    )
  }

}
export default Login;