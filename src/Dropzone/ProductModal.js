import React from "react";
import "./Modal.css";

const ProductModal = ({
  logoPosition,
  productSize,
  logoMethod,
  logoType,
  logoName,
}) => {
  let name = JSON.parse(logoName);
  // console.log(name[0].path);
  return (
    <div className="product-modal">
      <p>ProductSize: {productSize}</p>
      <p>LogoName: {name[0]?.path ? name[0].path : "No file choosen"}</p>
      <p>logoPosition: {logoPosition}</p>
      <p>LogoMethod: {logoMethod}</p>
      <p>LogoType: {logoType}</p>
    </div>
  );
};

export default ProductModal;
