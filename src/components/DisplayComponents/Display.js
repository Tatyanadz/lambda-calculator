import React from "react";

const Display = ({ result }) => {
  return (
    <div className="display">
      <div className="displayDigit">{result}</div>
    </div>
  );
};

export default Display;
