import React from 'react';
import { withRouter } from 'react-router-dom';
import homepage from './homepage.css'
import CoinType from './CoinType/CoinType';
import ListOfCoins from './ListOfCoins/ListOfCoins';

import {Redirect} from 'react-router-dom';
// import { Router } from "react-router";


class Homepage extends React.Component {
  
  handleLogin = () => {
    // console.log('значение this:', this);
    //return  <Redirect  to="/adminpanel/" />
    //this.context.history.push('/posts/');
     const { history } = this.props;
     history.push('/adminpanel/');
  }

  handleShow =() => {
    const { history } = this.props;
    history.push('/listofcoins/');
  }

  handleSearch =() => {
    const { history } = this.props;
    history.push('//');
  }

  render() {
    return (
      
    <div>
        <header className="title">
          <div>
            <h1>Homepage</h1>
          </div>
          <div>
            <h3  onClick={this.handleLogin}>Admin panel</h3>
          </div>
        </header>
        <form>
          <p className="style-title">Input field</p>
          <label>
            <input type="text" name="name" className="input-field"/>
          </label>
          <button className="search" onClick={this.handleSearch} >Search</button>
        </form>
        <p>Advanced filter</p>
        <div className="coin-type-box" >
                  <div>
                      <h2>Bullion coins</h2>
                      <a href="#" onClick={this.handleShow}>Show all ></a>
                      <div> <img src={'image/bullion-coins.png'} alt="bullion coins" style={{width: 214}}/></div>
                  </div>
                  <div>
                      <h2>Exclusive coins</h2>
                      <a href="#">Show all ></a>
                      <div> <img src={'image/exclusive-coins.png'} alt="bullion coins" style={{width: 214}}/></div>
                  </div>
                  <div>
                      <h2>Commemorative coins</h2>
                      <a href="#">Show all ></a>
                      <div> <img src={'image/commemorative-coins.png'} alt="bullion coins" style={{width: 214}}/></div>
                  </div>
                </div>
        {/* <CoinType/>  */}
         {/* <ListOfCoins /> */}
        
        
        
     
    </div>
    
    )
  }

}
export default withRouter(Homepage);