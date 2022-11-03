import React, { useContext } from "react";
import Image from "next/image";
import { ShopingStore } from "../../Store/ShopingStore";

const ProductDetails = (props) => {
  const shopingCtx = useContext(ShopingStore);
  const { prod } = props;
  if (!prod) {
    return (
      <div>
        <p>sory page is not found</p>
      </div>
    );
  }
  const { title, img, time, price } = prod;

  const addToCartHandler = (prod) => {
    shopingCtx.addToCart({ ...prod, amount: 1 });
  };
  return (
    <div className="card" style={{ textAlign: "center", gap: "1rem" }}>
      <div>
        <Image
          src={img}
          width={300}
          height={300}
          alt={title}
          layout="responsive"
        />
      </div>

      <h1>{title}</h1>
      <h2>{time}Min</h2>
      <h2>price : {price}$</h2>
      <button
        onClick={addToCartHandler.bind(null, prod)}
        style={{ backgroundColor: "#333" }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDetails;
