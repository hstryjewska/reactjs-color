import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./Color.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
const Color = () => {
  const [displayName, setDisplayName] = useState("");
  const [displaySurname, setDisplaySurname] = useState("");
  const [displayColor, setDisplayColor] = useState("");
  const [nameInputValue, setNameInputValue] = useState("");
  const [surnameInputValue, setSurnameInputValue] = useState("");
  const [colorValue, setColorValue] = useState("");

  const onChange = (e) => {
    setNameInputValue(e.target.value);
  };

  const onSurnameChange = (e) => {
    setSurnameInputValue(e.target.value);
  };

  const onColorChange = (e) => {
    setColorValue(e.target.value);
  };

  return (
    <div className="div-color">
      <div className="display-left">
        <form className="form-color">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={onChange}
            value={nameInputValue}
            placeholder="name"
          />
          <br />
          <label htmlFor="name">Surname:</label>
          <input
            type="text"
            id="sname"
            onChange={onSurnameChange}
            value={surnameInputValue}
            placeholder="surname"
          />
          <br />
          <Popup
            trigger={
              <button
                type="button"
                onClick={() => {
                  setDisplayColor(colorValue);
                }}
                className="selectColorBtn"
              >
                <FontAwesomeIcon icon={faPlusCircle} className="icon" />
                Color
              </button>
            }
            position="right center"
          >
            <select onChange={onColorChange}>
              <option value="Black" id="black">
                black
              </option>
              <option value="Red" id="red">
                red
              </option>
              <option value="White" id="white">
                white
              </option>
            </select>
          </Popup>
          <br />
          <button
            type="button"
            onClick={() => {
              setDisplayColor(colorValue);
              setDisplayName(nameInputValue);
              setDisplaySurname(surnameInputValue);
            }}
          >
            Send
          </button>
        </form>
      </div>
      <div className="display-right">
        <h4>RESULT</h4>
        {displayName.length > 0 && (
          <h5>
            {displayName} {displaySurname} choosed color {displayColor}
          </h5>
        )}{" "}
      </div>
    </div>
  );
};
export default Color;
