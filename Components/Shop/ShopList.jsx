import React from "react";
import ShopItem from "./ShopItem";
const ShopList = (props) => {
  return (
    <div className="shop-list">
      <div className="shop-list-container">
        {props.products.map((item) => {
          return <ShopItem key={item.id} prod={item} />;
        })}
      </div>
    </div>
  );
};

export default ShopList;
