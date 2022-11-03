/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useRef, useState } from "react";
import { ShopingStore } from "../../../../../Store/ShopingStore";
import BasketIcon from "../../../../ui/icons/BasketIcon";
import BasketContainer from "./BasketContainer";
const Basket = () => {
  const basketRef = useRef();
  const [isShow, setIsShow] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const shopingCtx = useContext(ShopingStore);
  const showContainerHandler = () => {
    setIsShow(!isShow);
  };
  useEffect(() => {
    setTotalAmount((prev) => {
      return (prev = shopingCtx.calcTotal());
    });
  }, [shopingCtx]);
  // useEffect(() => {
  //   const closeBasket = (e) => {
  //     if (
  //       e.explicitOriginalTarget !== basketRef.current &&
  //       e.target.parentElement.explicitOriginalTarget !== basketRef.current
  //     ) {
  //       setIsShow(false);
  //     }
  //   };
  //   document.body.addEventListener("click", closeBasket);
  // }, []);
  return (
    <div
      ref={basketRef}
      onClick={showContainerHandler}
      className="header-basket"
    >
      <BasketIcon />
      <div>
        <p>{totalAmount.totalAmount}</p>
      </div>
      {shopingCtx.cartItems.length > 0 && isShow && <BasketContainer />}
    </div>
  );
};

export default Basket;
