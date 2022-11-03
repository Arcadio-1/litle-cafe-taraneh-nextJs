import React from "react";
import ShopList from "./ShopList";
const Shop = (props) => {
  return (
    <div className="shop">
      <ShopList products={props.products} />
    </div>
  );
};

export default Shop;
