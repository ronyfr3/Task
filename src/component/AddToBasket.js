import React, { useState } from "react";
import Modal from "./Modal";
import "./Styles.css";

const AddToBasket = ({ productCode, name, image }) => {
  const [modal, setModal] = useState(false);
  const modalOpen = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <div className="cart-wrapper">
      <h2>3. Add to basket</h2>
      <div className="cart-section">
        <h3>1 Items</h3>
        <h3>1 per item</h3>
        <button className="addtoCart" onClick={modalOpen}>
          Add to basket
        </button>
      </div>
      {modal ? (
        <Modal
          name={name}
          productCode={productCode}
          image={image}
          setModal={setModal}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default AddToBasket;
