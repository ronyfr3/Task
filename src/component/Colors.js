import React from "react";

const Colors = ({ colors }) => {
  return (
    <div>
      <h2>1. Select Colour</h2>
      <div className="colorCodes">
        {colors &&
          colors.map((color, index) => {
            return (
              <button style={{ backgroundColor: color }} key={index}></button>
            );
          })}
      </div>
    </div>
  );
};

export default Colors;
