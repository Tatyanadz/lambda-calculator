import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "../SpecialButtons/SpecialButton";


//import any components needed

//Import your array data to from the provided data file

const Specials = ({ setDisplay, display }) => {

  const [setSpecials] = useState(specials)
  // STEP 2 - add the imported data to state

  return (
    <div className="specials-container">
      {setSpecials.map((special, index) => {
        return (
          <SpecialButton
            key={index}
            symbol={special}
            setDisplay={setDisplay}
            display={display}
          />
        );
      })}
    </div>
  );
};

export default Specials;
