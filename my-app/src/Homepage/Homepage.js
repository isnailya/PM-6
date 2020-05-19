import React from 'react';
import homepage from './homepage.css'
import CoinsTypes from './CoinsTypes/CoinsTypes';


class Homepage extends React.Component {


  render() {
    return (
   
    <div>
        <header className="title">
          <div>
            <h1>Homepage</h1>
          </div>
          <div>
            <h3>Admin panel</h3>
          </div>
        </header>
        <form>
          <p className="style-title">Input field</p>
          <label>
            <input type="text" name="name" className="input-field"/>
          </label>
          <button className="search">Search</button>
        </form>
        <CoinsTypes />
    </div>
       
 
    )
  }

}
export default Homepage;