import React from "react";

const Pricing = ({ plainPricing }) => {
  return (
    <div>
      <p>Plain Pricing</p>
      <div className="pricing">
        <div>
          <p>1 Item</p>
          <p className="priceIndex">${plainPricing[0]}</p>
        </div>
        <div>
          <p>25+ Item</p>
          <p className="priceIndex">${plainPricing[1]}</p>
        </div>
        <div>
          <p>50+ Item</p>
          <p className="priceIndex">${plainPricing[2]}</p>
        </div>
        <div>
          <p>100+ Item</p>
          <p className="priceIndex">${plainPricing[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
