import React, { useState, useCallback } from "react";
import AddToBasket from "../component/AddToBasket";
import "./Styles.css";

const Sizing = ({ sizes, name, productCode, image }) => {
  const [value, setValue] = useState(0);
  const increment = useCallback(() => {
    setValue((value) => value + 1);
  }, []);
  const decrement = useCallback(() => {
    if (value === 0) {
      setValue(0);
    } else {
      setValue((value) => value - 1);
    }
  }, [value]);
  const handleChange = (e) => {
    let isChecked = e.target.checked;
    // console.log(isChecked);
    if (isChecked) {
      setValue((value) => value + 1);
      localStorage.setItem("size", e.target.value);
    } else {
      if (value === 0) {
        setValue(0);
      } else {
        setValue((value) => value - 1);
      }
      localStorage.setItem("size", "");
    }
  };
  return (
    <div className="sizes-wrapper">
      <h2>2. Sizes & Qantities</h2>
      <div>
        {sizes &&
          sizes.map((size, index) => {
            return (
              <div className="counter" key={index}>
                <div className="input-wrapper">
                  <input type="checkbox" value={size} onChange={handleChange} />
                  <label htmlFor={size}>{size}</label>
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
      <AddToBasket
        name={name}
        productCode={productCode}
        image={image}
        value={value}
      />
    </div>
  );
};

export default Sizing;
