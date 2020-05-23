import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from './Homepage/Homepage.js';
import Filter from './Filter/Filter.js';
import Login from './Login/Login.js';
// import ListOfCoins from './ListOfCoins.js';
import CoinCreation from './CoinCreation/CoinCreation.js';
import CoinDescription from './CoinDescription/CoinDescription.js';
import EditCoin from './EditCoin/EditCoin';

// import './index';



class App extends React.Component {


  state = {
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username')
  }

  onLogin = (token, username) => {
    this.setState({ token, username });
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }
    render() {
      return (
    //  <div className="container">
    //      {/* <Homepage /> */}
    //     {/* {/* <Login />  
            // <Filter />
    //      {/* <CoinDescription />  */}
    //      {/* <EditCoin /> */}
    //      {/* <CoinCreation />  */}
        

    
      
    //  </div>
    <Router >
    {/* <Header />     */}
    <Route exact path='/'>
      <Homepage /> 
    </Route>
    <Route exact path='/homepage'>
        <Homepage/>
    </Route>
    {/* <Route exact path='/listofcoins' component={ListOfCoins}></Route> */}
    <Route exact path='/adminpanel'>
        <Login/>
    </Route>
    <Route exact path='/editcoin'>
        <EditCoin/>
    </Route>
    {/* <Route exact path='/adminpanel' component={Login}></Route> */}
    {/* <Filter /> */}
    {/* <CoinDescription />  */}
    {/* <CoinCreation /> */}
    <CoinCreation />
    </Router>
      )
    }
    
  
  }

  export default App;