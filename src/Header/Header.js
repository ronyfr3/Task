import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Link to="/" className="name-section">
        <article>Workwear</article>
        <article>Express</article>
      </Link>

      {/* LogoSection */}
      <div className="logo-section">
        <div className="account-logo">
          <MdAccountCircle className="acc_circle" />
          <small>Account</small>
        </div>
        <div className="basket-logo">
          <FaShoppingCart className="cart" />
          <small>Basket</small>
        </div>
      </div>
    </div>
  );
};

export default Header;
