import React, { useContext } from "react";
import Image from "next/image";
import { ShopingStore } from "../../Store/ShopingStore";
import { useRouter } from "next/router";
const ShopItem = (props) => {
  const { prod } = props;
  const shopingCtx = useContext(ShopingStore);
  const router = useRouter();
  const openDetailsHandler = (id) => {
    router.push(`Shop/${id}`);
  };
  const addToCartHandler = (item) => {
    shopingCtx.addToCart({ ...item, amount: 1 });
  };
  return (
    <div className="shop-list-item">
      <div className="shop-list-item-imageContainer">
        <Image
          src={prod.img}
          alt={prod.title}
          width={200}
          height={200}
          layout={"responsive"}
          className="shop-list-item-image"
        />
      </div>
      <div className="shop-list-item-data">
        <h1 className="shop-list-item-data-title">{prod.title}</h1>
        <p className="shop-list-item-data-price">{prod.price}$</p>
      </div>
      <div className="shop-list-item-action">
        <button
          onClick={addToCartHandler.bind(null, prod)}
          className="shop-list-item-action-addToCart"
        >
          Add To Cart
        </button>
        <button
          onClick={openDetailsHandler.bind(null, prod.id)}
          className="shop-list-item-action-seeMore"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default ShopItem;
