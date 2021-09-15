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
                <input type='text' id="name" onChange={ onChange } value={ nameInputValue } placeholder="imie" /><br />
                <label htmlFor="name">Surname:</label>
                <input type='text' id="sname" onChange={ onSurnameChange } value={ surnameInputValue } placeholder="nazwisko" /><br />
                <label htmlFor="color">Color:</label>
                <select onChange={ onColorChange }>
                    <option value="Black" id="black">czarny</option>
                    <option value="Red" id="red">czerwony</option>
                    <option value="White" id="white">biały</option>
                </select><br />
                <button type="button" onClick={ () => {
                    setDisplayName(nameInputValue);
                    setDisplaySurname(surnameInputValue);
                    setDisplayColor(colorValue);
                } }>Wyślij</button>

            </form>
            <div className="display"><h4>WYNIK</h4>{ displayName.length>0 && <h5>{ displayName} {displaySurname} wybrał/a kolor {displayColor}</h5>} </div>

        </div>
    )


}
export default Color
// form z 2 polami, przycisk na samym dole => wypisuje w div(unten) input(imie) wybrała ... input(kolor); nowa app od zera!
