import React from "react";

const NumberButton = ({ name, num, setDisplay, display }) => {
  const buttonClick = () => {
    setDisplay(display + num);
  };
  const buttonLabel = `number-button ${name}`;
  return (
    <div className={buttonLabel} onClick={() => buttonClick()}>
      {num}
    </div>
  );
};

export default NumberButton;

