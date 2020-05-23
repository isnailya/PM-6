import React, { Component } from 'react';
import './listofcoins.css';



class ListOfCoins extends Component {
    render() {
        return (
        
                <div className="list-coins-box" >
                  <div className="list-coins-box list-box">
                    <div>
                        <div>image</div>
                    </div>
                    <div>
                        <h3>name of coin</h3>
                        <p>some text</p>
                    </div>
                  </div>

                  <div className="list-coins-box list-box">
                    <div >
                        <div>image</div>
                    </div>
                    <div>
                        <h3>name of coin</h3>
                        <p>some text</p>
                    </div>
                  </div>
                </div>
        )
    }
}

export default ListOfCoins;