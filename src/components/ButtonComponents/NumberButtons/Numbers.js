import React from "react";
import { numbers } from "../../../data";
import NumberButton from "../NumberButtons/NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = ({ setDisplay, display }) => {
  return (
    <div className="nums-container">
      {numbers.map((num, index) => {
        return index !== 9 ? (
          <NumberButton
            key={index}
            num={num}
            setDisplay={setDisplay}
            display={display}
          />
        ) : 
          <NumberButton
            key={index}
            num={num}
            name="zero-button"
            setDisplay={setDisplay}
            display={display}
          />
      })}
    </div>
  );
};

export default Numbers;
