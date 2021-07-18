import React from "react";
import { AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";
import "./Modal.css";
import { Link } from "react-router-dom";

const Modal = ({ productCode, name, image, setModal }) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <div className="circlelogo">
          <AiOutlineCheckCircle className="okSign" />
          <h3>Added to basket</h3>
        </div>
        <AiOutlineClose onClick={() => setModal(false)} className="crossSign" />
      </div>
      <div>
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <small>{productCode}</small>
        </div>
      </div>
      <div className="price-section">
        <h3>1 Items</h3>
        <h3>1 per item</h3>
        <Link to="/choose_position" className="addLogo">
          Add your logo now
        </Link>
        <button className="viewCart">view basket</button>
      </div>
    </div>
  );
};

export default Modal;
