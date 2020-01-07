import React from "react";

const OperatorButton = ({ setDisplay, value, character, display }) => {
  function operatorControl() {
    if (character === "+" || "-" || "x" || "/") return setDisplay(display + value);
  }

  function calculationControl() {
    if (value === "=") return setDisplay((display));
  }

  return (
      <div
        className="operator-button"
        value={value}
        onClick={() => operatorControl() || calculationControl()}
      >
        {character}
      </div>
  );
};

export default OperatorButton;