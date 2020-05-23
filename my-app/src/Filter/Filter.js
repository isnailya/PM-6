import React from 'react';
import filter from './filter.css';


class Filter extends React.Component {
       
  render() {
    return (

          <div className="filter">
            <div className="select-coin">
            <div>
              <p className="style-title">Issuing country</p>
              <select className="input-field">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>

            <div className="input-info">
            <form>
            <p className="style-title">Price</p>
              <label>
                from
                <input type="text" className="input-field-filter"/>
              </label>
              <label>
                <span className="input-info">to</span>
                <input type="text" className="input-field-filter" />
              </label>
              
            </form>
            </div>
            </div>

            <div className="select-coin">
            <div>
              <p className="style-title">Metal</p>
              <select className="input-field">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>

            <div className="input-info">
            <form>
            <p className="style-title">Year of issue</p>
              <label>
                from
                <input type="text" className="input-field-filter"/>
              </label>
              <label>
                <span className="input-info">to</span>
                <input type="text" className="input-field-filter" />
              </label>
              
            </form>
            </div>
            </div>
          
            <div>
              <p className="style-title">Quality of the coin </p>
              <select className="input-field">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            
        
          </div>
      
    
    );
  }
}
export default Filter;