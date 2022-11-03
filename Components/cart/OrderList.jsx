import React, { useContext } from "react";
import { ShopingStore } from "../../Store/ShopingStore";
import BasketItem from "../layout/header/components/basket/BasketItem";

const OrderList = () => {
  const shopingCtx = useContext(ShopingStore);

  return (
    <div>
      <ul>
        {shopingCtx.cartItems.length > 0 &&
          shopingCtx.cartItems.map((item) => {
            return <BasketItem key={item.id} item={item} />;
          })}
      </ul>
    </div>
  );
};

export default OrderList;
