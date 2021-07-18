import React, { useState } from "react";
import AddToBasket from "../component/AddToBasket";
import "./Styles.css";

const Sizing = ({ sizes, name, productCode, image }) => {
  const [choices, setChoices] = useState([]);

  React.useMemo(() => {
    setChoices(sizes && sizes.map((size) => ({ size, quantity: 0 })));
  }, [sizes]);

  const increment = (size) => {
    const product = choices.find((item) => item.size === size);

    if (product) {
      setChoices([
        ...choices.filter((choice) => choice.size !== size),
        {
          ...product,
          quantity: product.quantity + 1,
        },
      ]);
    }
  };

  const decrement = (size) => {
    const product = choices.find((item) => item.size === size && item.quantity);
    if (product) {
      setChoices([
        ...choices.filter((choice) => choice.size !== size),
        {
          ...product,
          quantity: product.quantity - 1,
        },
      ]);
    }
  };

  const handleChange = (e, size) => {
    let isChecked = e.target.checked;
    const product = choices.find((item) => item.size === size);
    if (isChecked && product) {
      setChoices([
        ...choices.filter((choice) => choice.size !== size),
        {
          ...product,
          quantity: product.quantity + 1,
        },
      ]);
      localStorage.setItem("size", e.target.value);
    } else {
      setChoices([
        ...choices.filter((choice) => choice.size !== size),
        {
          ...product,
          quantity: 0,
        },
      ]);
      localStorage.setItem("size", "");
    }
  };

  return (
    <div className="sizes-wrapper">
      <h2>2. Sizes & Qantities</h2>
      <div>
        {sizes &&
          sizes.map((size, index) => {
            console.log(
              (
                (choices && choices.find((choice) => choice.size === size)) ||
                {}
              ).quantity
            );

            return (
              <div className="counter" key={index}>
                <div className="input-wrapper">
                  <input
                    type="checkbox"
                    value={size}
                    checked={
                      !!choices.find(
                        (choice) => choice.size === size && choice.quantity
                      )
                    }
                    onChange={(e) => handleChange(e, size)}
                  />
                  <label htmlFor={size}>{size}</label>
                </div>
                <div className="inStock">
                  <p>In Stock</p>
                  <div className="btns">
                    <button onClick={() => decrement(size)} className="btn1">
                      -
                    </button>
                    <button className="btn2">
                      {
                        (
                          (choices &&
                            choices.find((choice) => choice.size === size)) ||
                          {}
                        ).quantity
                      }
                    </button>
                    <button onClick={() => increment(size)} className="btn1">
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
        // value={value}
      />
    </div>
  );
};

export default Sizing;
