import React from "react";

const SpecialButton = ({ symbol, setDisplay, display }) => {
  function specialButtonControl() {
    if (symbol === "C") {
      setDisplay("");
    } else if (symbol === "%") {
      setDisplay(display / 100);
    } else if (symbol === "+/-") {
      setDisplay(display * -1);
    }
  }
  return (
    <div className="special-button" onClick={() => specialButtonControl()}>
      {symbol}
    </div>
  );
};

export default SpecialButton;
