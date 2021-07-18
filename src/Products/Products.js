import React from "react";
import ProductsList from "../ProductsArray.json";
import { Link } from "react-router-dom";
import "./Product.css";

const Products = () => {
  // console.log("products", ProductsList);

  return (
    <div className="productsList">
      {ProductsList.map((item) => {
        const { id, name, img, price, availableColors, printAvailable } = item;
        return (
          <div key={id} className="products-wrapper">
            <Link to={`/view_product/${id}`}>
              <img src={img} alt={name} />
            </Link>
            <h4>{name}</h4>
            <p>${price}</p>
            <hr />
            <small>{availableColors.length} Colours available</small>
            <p className="print-avaiable">
              {printAvailable ? "Print Availabe" : "Print Not Available"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
