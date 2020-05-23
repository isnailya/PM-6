import React, { Component } from 'react';
import './coinDescription.css';
//import { Link } from 'react-router-dom';



class CoinDescription extends Component {
    render() {
        return (
        
                <div className='coin-descrip-box'>
                  <div className='image-coin'>
                      <div className="avers-revers-img">img1</div>
                      <div className="avers-revers-img revers-img">img2</div>
                  </div>
                  <div className='descrip-table'>
                      <h2>name of coin</h2>
                      <div className='info-box'>
                      <p>some info about coin</p>
                      </div>
                      
                      <table className="table-text">
                          <tr>
                              <td>Issuing Country</td>
                              <td></td>
                          </tr>
                          <tr>
                              <td> Composition</td>
                              <td></td>
                          </tr>
                          <tr>
                              <td>Quality</td>
                              <td></td>
                          </tr>
                          <tr>
                              <td>Denomination</td>
                              <td></td>
                          </tr>
                          <tr>
                              <td>Year</td>
                              <td></td>
                          </tr>
                          <tr>
                              <td>Weight</td>
                              <td></td>
                          </tr>
                          <tr>
                              <td>Price</td>
                              <td></td>
                          </tr>
                      </table>
                      <div className='info-box'>
                        <p>Back to the list</p>
                      </div>
                      
                  </div>
                </div>
        )
    }
}

export default CoinDescription;