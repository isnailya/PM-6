import React, { Component } from 'react';
import './editcoin.css';
//import { Link } from 'react-router-dom';



class EditCoin extends Component {
    render() {
        return (
            <div>
                <header className="title">
                    <div>
                        <h1>Admin panel</h1>
                    </div>
                </header>
                <form>
                <p className="style-title">Input field</p>
                <label>
                    <input type="text" name="name" className="input-field"/>
                </label>
                <button className="search">Search</button>
                </form>
                <div >
                <div className=" add-coin">
                    <div className='edit-img'>image</div>
                    <div><p>Add a new coin</p></div>
                    
                </div>

                </div>
                <div className="edit-coin-box">
                    
                    <div>image</div>
                    <div>
                        <h3>name of coin</h3>
                        <p>some info about coin</p>
                    </div>
                    <div>
                        <button className='edit-coin-button'>Edit</button>
                    </div>
                    <div>
                        <button className='edit-coin-button'>Delete</button>
                    </div>
                </div>
            </div>
               
        )
    }
}

export default EditCoin;