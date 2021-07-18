import React, { useEffect, useState } from "react";
import Products from "../ProductsArray.json";
import "./ViewProduct.css";
import ColorsCode from "../component/Colors";
import Pricing from "../component/Pricing";
import Sizing from "../component/Sizing";
import AddToBasket from "../component/AddToBasket";

const ViewProduct = (props) => {
  const id = props.match.params.id;
  //   console.log("productID", id);

  const [name, setName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [image, setImage] = useState("");
  const [plainPricing, setPlainPricing] = useState("");
  const [colors, setColors] = useState("");
  const [sizes, setSizes] = useState("");

  const product = Products.filter((item) => item.id === parseInt(id));
  //   console.log(product);

  useEffect(() => {
    const selectedProduct = product.map((i) => {
      return (
        setName(i.name),
        setProductCode(i.ProductCode),
        setImage(i.img),
        setPlainPricing(i.plainPricing),
        setColors(i.availableColors),
        setSizes(i.sizes)
      );
    });
  }, [product]);
  //   console.log(name);
  //   console.log(image);
  //   console.log(productCode);
  //   console.log(plainPricing);
  //   console.log(colors);
  //   console.log(sizes);
  return (
    <div className="product-view">
      <img src={image} alt={`productImage_${id}`} />
      <div className="detail-section">
        <h1>{name}</h1>
        <small>{productCode}</small>
        <Pricing plainPricing={plainPricing} />
        <ColorsCode colors={colors} />
        <Sizing sizes={sizes} />
        <AddToBasket name={name} productCode={productCode} image={image} />
      </div>
    </div>
  );
};

export default ViewProduct;
