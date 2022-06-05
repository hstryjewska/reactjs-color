import React, { useState } from 'react';
import './Color.css'

const Color = () => {
    const [displayName, setDisplayName] = useState('');
    const [displaySurname, setDisplaySurname]= useState('');
    const [displayColor, setDisplayColor] = useState('');
    const [nameInputValue, setNameInputValue] = useState('');
    const [surnameInputValue, setSurnameInputValue] = useState('');
    const [colorValue, setColorValue] = useState('');

    const onChange = e => {
        setNameInputValue(e.target.value)
    }

    const onSurnameChange = e => {
        setSurnameInputValue(e.target.value)
    }

    const onColorChange = e => {
        setColorValue(e.target.value)
    }

    return (
        <div className="div-color">
            <form className='form-color'>
                <label htmlFor="name">Name:</label>
                <input type='text' id="name" onChange={ onChange } value={ nameInputValue } placeholder="name" /><br />
                <label htmlFor="name">Surname:</label>
                <input type='text' id="sname" onChange={ onSurnameChange } value={ surnameInputValue } placeholder="surname" /><br />
                <label htmlFor="color">Color:</label>
                <select onChange={ onColorChange }>
                    <option value="Black" id="black">black</option>
                    <option value="Red" id="red">red</option>
                    <option value="White" id="white">white</option>
                </select><br />
                <button type="button" onClick={ () => {
                    setDisplayName(nameInputValue);
                    setDisplaySurname(surnameInputValue);
                    setDisplayColor(colorValue);
                } }>Send</button>

            </form>
            <div className="display"><h4>RESULT</h4>{ displayName.length>0 && <h5>{ displayName} {displaySurname} choosed color {displayColor}</h5>} </div>
        </div>
    )
}
export default Color