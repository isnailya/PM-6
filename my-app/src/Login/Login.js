import React from 'react';
import { withRouter } from 'react-router-dom';
import login from './login.css'


class Login extends React.Component {
  
  
// handleSign= (evt)=> {
//   console.log("click");
//   const { history } = this.props;
//   history.push('/editcoin/');
// }

  render() {
    return (
   
    <div>
      <h1>Admin panel</h1>
        <form className="login-form">
          <p className="style-title">Login</p>
          <label>
            <input type="text" name="name" className="input-field" id="login" onChange={this.handleInput} value={this.state.login}/>
          </label>
          <p className="style-title">Password</p>
          <label>
            <input type="password" name="name" className="input-field" id="pass" onChange={this.handleInput} value={this.state.pass}/>
          </label>
          
        </form>
        <div className="box-sign-button">
            <button className="search sign-button" type="submit">Sign in</button>
        </div>
    </div>
       
 
    )
  }

}
export default withRouter(Login);