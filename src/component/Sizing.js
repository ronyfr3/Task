import React, { useState, useCallback } from "react";
import "./Styles.css";

const Sizing = ({ sizes }) => {
  const [value, setValue] = useState(0);
  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value]);
  const decrement = useCallback(() => {
    if (value === 0) {
      setValue(0);
    } else {
      setValue(value - 1);
    }
  }, [value]);

  return (
    <div className="sizes-wrapper">
      <h2>2. Sizes & Qantities</h2>
      <div>
        {sizes &&
          sizes.map((size, index) => {
            return (
              <div className="counter">
                <div className="input-wrapper">
                  <input type="checkbox" value={size} />
                  <label for={size}>{size}</label>
                </div>
                <div className="inStock">
                  <p>In Stock</p>
                  <div className="btns">
                    <button onClick={decrement} className="btn1">
                      -
                    </button>
                    <button className="btn2">{value}</button>
                    <button onClick={increment} className="btn1">
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sizing;
