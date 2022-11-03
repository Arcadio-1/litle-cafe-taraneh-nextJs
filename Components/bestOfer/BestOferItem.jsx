/* eslint-disable @next/next/no-img-element */
import React, { useContext, useRef } from "react";
import Image from "next/image";
import TimeIcon from "../ui/icons/time";
import PriceIcon from "../ui/icons/PriceIcon";
import AmountIcon from "../ui/icons/AmountIcon";
import SizeIcon from "../ui/icons/SizeIcon";
import { ShopingStore } from "../../Store/ShopingStore";
const BestOferItem = (props) => {
  const amountRef = useRef();
  const shopingCtx = useContext(ShopingStore);

  const addTocartHandler = (item) => {
    const amount = amountRef.current.value;
    // shopingCtx.addToOrder({ ...item, amount });
    shopingCtx.addToCart({ ...item, amount });
  };

  const { item } = props;
  return (
    <article className="bestOfer-item">
      <div className="bestOfer-item-imageContainer">
        <img className="bestOfer-item-image" src={item.img} alt={item.title} />
      </div>
      <h1 className="bestOfer-item-title">{item.title}</h1>
      <div className="bestOfer-item-line">
        <TimeIcon />
        <p>Ready :</p>
        <p>{item.time}min </p>
      </div>
      <div className="bestOfer-item-line">
        <SizeIcon />
        <p>cup size:</p>
        <p>{item.size}</p>
      </div>
      <div className="bestOfer-item-line">
        <AmountIcon />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          ref={amountRef}
          defaultValue={1}
          id="amount"
          min={1}
          max={100}
        />
      </div>
      <div className="bestOfer-item-line">
        <PriceIcon />
        <p>price :</p>
        <p>{item.price}$ </p>
      </div>
      <button
        onClick={addTocartHandler.bind(null, item)}
        className="bestOfer-item-orderBtn"
      >
        Order
      </button>
    </article>
  );
};

export default BestOferItem;
