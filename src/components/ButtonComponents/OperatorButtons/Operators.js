import React from "react";
import { operators } from "../../../data";
import OperatorButton from "../OperatorButtons/OperatorButton";


//import any components needed

//Import your array data to from the provided data file

const Operators = ({ setDisplay, display }) => {
  // STEP 2 - add the imported data to state
  return (
    <div className="operators-container">
      {operators.map((operator, index) => {
        return (
          <OperatorButton
            key = {index}
            character = {operator.char}
            value = {operator.value}
            display = {display}
            setDisplay = {setDisplay}
          />
        );
      })}
    </div>
  );
};

export default Operators;
