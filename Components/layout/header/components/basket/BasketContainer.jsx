import { useRouter } from "next/router";
import React, { useContext } from "react";
import { ShopingStore } from "../../../../../Store/ShopingStore";
import BasketItem from "./BasketItem";
import BasketListHeder from "./BasketListHeder";

const BasketContainer = () => {
  const router = useRouter();
  const confirmHandler = () => {
    router.push("/cart");
  };
  const shopingCtx = useContext(ShopingStore);

  const clearCartHandler = () => {
    shopingCtx.clearCart();
  };

  return (
    <div className="header-basket-container">
      <div className="header-basket-list">
        <BasketListHeder />
        {shopingCtx.cartItems &&
          shopingCtx.cartItems.map((item) => {
            return <BasketItem key={item.id} item={item} />;
          })}
      </div>
      <div className="header-basket-action">
        <button onClick={confirmHandler} className="header-basket-confirmBtn">
          confirm
        </button>
        <button onClick={clearCartHandler} className="header-basket-clearBtn">
          clear List
        </button>
      </div>
    </div>
  );
};

export default BasketContainer;
