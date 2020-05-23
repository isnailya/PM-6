import React from 'react';
import ReactDOM from "react-dom";
import coincreation from './coincreation.css'


class CoinCreation extends React.Component {

    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInputName = React.createRef();
        this.textInputFace = React.createRef();
        this.textInputYear = React.createRef();
        this.textInputPrice = React.createRef();
        this.textInputCountry  = React.createRef();
        this.textInputMetal = React.createRef();
        this.textInputShort = React.createRef();
        this.textInputLong = React.createRef();
        this.textInputQuality = React.createRef();
        this.textInputWeight = React.createRef();
        this.textInputObserve = React.createRef();
        this.textInputRevers = React.createRef();
        //this.focusTextInput = this.focusTextInput.bind(this);
      }
    //1.sozday json array
    //2. get input fields from inputs and diplay them in condole log.
    handleSave = () => {
        let name = this.textInputName.current.value;
        let face = this.textInputFace.current.value;
        let year = this.textInputYear.current.value;
        let price = this.textInputPrice.current.value;
        let country = this.textInputCountry.current.value;
        let material = this.textInputMetal.current.value;
        let short = this.textInputShort.current.value;
        let long = this.textInputLong.current.value;
        let quality = this.textInputQuality.current.value;
        let weight = this.textInputWeight.current.value;
        let observe = this.textInputObserve.current.value;
        let revers = this.textInputRevers.current.value;
        // console.log('значение this:', metal);
        let coin = {
            name:name,
            face:face,
            year:year,
            price:price,
            country:country,
            material:material,
            short:short,
            long:long,
            quality:quality,
            weight:weight,
            observe:observe,
            revers:revers
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: name
        };
        fetch('http://localhost:3006/setcoin', requestOptions, {mode: 'cors'} )  //{mode: 'cors'}
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id })).catch(() => console.log("Can’t access " + " response. Blocked by browser?"));
       // const response = await fetch('https://localhost:3006/setcoin', requestOptions);
      }

  render() {

    return (
   
    <div>
      <h1>Admin panel</h1>
      <div className="box-creation">
        <form >
            <p className="style-title">Coin name</p>
            <label>
                <input type="text" name="name" className="input-field" ref={this.textInputName}  />
            </label>
            <p className="style-title">Face value</p>
            <label>
                <input type="text" name="name" className="input-field" ref={this.textInputFace}/>
            </label>
            </form>  

        <form>
            <p className="style-title">Short description</p>
            <label>
                <input type="text" name="name" className="input-field second-input-field" ref={this.textInputShort}/>
            </label>
        </form> 
        
        <form>
            <p className="style-title">Link to obverse image</p>
            <label>
                <input type="text" name="name" className="input-field" ref={this.textInputObserve}/>
            </label>
            <p className="style-title">Link to reverse image</p>
            <label>
                <input type="text" name="name" className="input-field" ref={this.textInputRevers}/>
            </label>
        </form>
            
        
      </div>
        
      <div className="box-creation box-second">
        <form >
            <p className="style-title">Year of issue </p>
            <label>
                <input type="number" name="name" className="input-field" ref={this.textInputYear}/>
            </label>
            <p className="style-title">Price</p>
            <label>
                <input type="text" name="name" className="input-field" ref={this.textInputPrice}/>
            </label>
            </form>  

        <form>
            <p className="style-title">Long description</p>
            <label>
                <input type="text" name="name" className="input-field second-input-field" ref={this.textInputLong}/>
            </label>
        </form>
      </div>

      <div className="box-creation box-second">
        <form >
            <p className="style-title">Country</p>
            <label>
                <input type="text" name="name" className="input-field" ref={this.textInputCountry}/>
            </label>
            </form>  

            <form >
            <p className="style-title">Metal</p>
            <label>
                <input type="text" name="name" className="input-field" ref={this.textInputMetal}/>
            </label>
            </form>  
         </div>
        

         <div className="box-creation">
            <form >
                <p className="style-title">Quality of the coin</p>
                <label>
                    <input type="text" name="name" className="input-field" ref={this.textInputQuality}/>
                </label>
            </form>  

            <form >
            <p className="style-title"> Weight </p>
            <label>
                <input type="text" name="name" className="input-field" ref={this.textInputWeight}/>
            </label>
            </form>  

            <div className="button-admin" >
            <button className="search" onClick={this.handleSave}>Save</button>
            <button className="search cancel-button">Cancel</button>
            </div>
         </div>
    </div>
       
 
    )
  }

}
export default CoinCreation;