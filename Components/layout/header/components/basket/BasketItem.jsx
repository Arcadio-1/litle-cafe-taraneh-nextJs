import React, { useContext } from "react";
import Image from "next/image";
import { ShopingStore } from "../../../../../Store/ShopingStore";

const BasketItem = (props) => {
  const { item } = props;
  const shopingCtx = useContext(ShopingStore);
  const removeItemHandler = (id) => {
    shopingCtx.removeFromCart(id);
  };
  return (
    <div key={item.id} className="header-basket-item">
      <div className="header-basket-item-image">
        <Image
          src={item.img}
          alt={item.title}
          width={50}
          height={50}
          layout={"responsive"}
        />
      </div>
      <p className="header-basket-item-title">{item.title}</p>
      <p className="header-basket-item-amount">{item.amount}</p>
      <p className="header-basket-item-amount">{item.price}</p>
      <p className="header-basket-item-amount">{+item.amount * +item.price}</p>
      <button
        onClick={removeItemHandler.bind(null, item.id)}
        className="header-basket-item-removeBtn"
      >
        Remove
      </button>
    </div>
  );
};

export default BasketItem;
