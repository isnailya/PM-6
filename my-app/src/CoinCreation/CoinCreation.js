import React from 'react';
import coincreation from './coincreation.css'


class CoinCreation extends React.Component {


  render() {
    return (
   
    <div>
      <h1>Admin panel</h1>
      <div className="box-creation">
        <form >
            <p className="style-title">Coin name</p>
            <label>
                <input type="text" name="name" className="input-field"/>
            </label>
            <p className="style-title">Face value</p>
            <label>
                <input type="text" name="name" className="input-field"/>
            </label>
            </form>  

        <form>
            <p className="style-title">Short description</p>
            <label>
                <input type="text" name="name" className="input-field second-input-field"/>
            </label>
        </form> 
        
        <form>
            <p className="style-title">Link to obverse image</p>
            <label>
                <input type="text" name="name" className="input-field"/>
            </label>
            <p className="style-title">Link to reverse image</p>
            <label>
                <input type="text" name="name" className="input-field"/>
            </label>
        </form>
            
        
      </div>
        
      <div className="box-creation box-second">
        <form >
            <p className="style-title">Year of issue </p>
            <label>
                <input type="text" name="name" className="input-field"/>
            </label>
            <p className="style-title">Price</p>
            <label>
                <input type="text" name="name" className="input-field"/>
            </label>
            </form>  

        <form>
            <p className="style-title">Long description</p>
            <label>
                <input type="text" name="name" className="input-field second-input-field"/>
            </label>
        </form>
      </div>

      <div className="box-creation box-second">
        <form >
            <p className="style-title">Country</p>
            <label>
                <input type="text" name="name" className="input-field"/>
            </label>
            </form>  

            <form >
            <p className="style-title">Metal</p>
            <label>
                <input type="text" name="name" className="input-field"/>
            </label>
            </form>  
         </div>
        

         <div className="box-creation">
            <form >
                <p className="style-title">Quality of the coin</p>
                <label>
                    <input type="text" name="name" className="input-field"/>
                </label>
            </form>  

            <form >
            <p className="style-title"> Weight </p>
            <label>
                <input type="text" name="name" className="input-field"/>
            </label>
            </form>  

            <div className="button-admin" >
            <button className="search">Sign in</button>
            <button className="search cancel-button">Cancel</button>
            </div>
         </div>
    </div>
       
 
    )
  }

}
export default CoinCreation;