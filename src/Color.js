import React, {useState} from 'react';
import './Color.css'

const Color = () => {
const [displayName, displayColor ] = useState(null);

    let fieldName;
    
    const onChange = e => {
        fieldName = e.target.value;
        
    }

    let fieldColor;

    const onColorChange = e => {
        fieldColor = e.target.value;
    }
    
    

    return(
        <div className="div-color">
        <form className='form-color'>
            <label htmlFor="name">Name:</label>
                <input type='text' id="name" onChange={ onChange } value={ displayName }/><br/>
            <label htmlFor="color">Color:</label>
                <select color={ displayColor } onChange={ onColorChange } value={ displayColor }>
                    <option value="Black" id="black">czarny</option>
                    <option value="Red" id="red">czerwony</option>
                    <option value="White" id="white">biały</option>
                </select><br/>
                <button type="button" onClick={ () => displayColor(fieldName)}>Wyślij</button>
            
        </form>
        <div className="display"><h4>WYNIK</h4>{displayName} wybrał/a kolor {fieldColor}</div>

        </div>
    )
    
    
}
export default Color

// form z 2 polami, przycisk na samym dole => wypisuje w div(unten) input(imie) wybrała ... input(kolor); nowa app od zera!
