import React, { useContext, useRef } from "react";
import { ShopingStore } from "../../Store/ShopingStore";
import Notif from "../ui/Notif";
const BuyingForm = () => {
  const fullnameRef = useRef();
  const emailRef = useRef();
  const addresRef = useRef();
  const shopingCtx = useContext(ShopingStore);

  const confirmHandler = (e) => {
    e.preventDefault();
    shopingCtx.setNotif({
      status: "pending",
      title: "Loading",
      message: "Loading...",
    });
    const enteredName = fullnameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredAddres = addresRef.current.value;
    const id = new Date().getTime();
    const cartItems = shopingCtx.cartItems;
    const total = shopingCtx.calcTotal();
    const totalAmount = total.totalAmount;
    const totalPrice = total.totalPrice;
    try {
      if (
        enteredName.trim() === "" ||
        enteredAddres.trim() === "" ||
        enteredAddres.trim() === ""
      ) {
        throw new Error("please fill up the form");
      }
      if (cartItems.length === 0) {
        throw new Error("you havent order Any thing");
      }
      const item = {
        id: id,
        name: enteredName,
        email: enteredEmail,
        address: enteredAddres,
        totalPrice,
        totalAmount,
        orders: cartItems,
      };

      const request = fetch("/api/buying/manageOrders", {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json().then((data) => console.log(data)));
      fullnameRef.current.value = "";
      emailRef.current.value = "";
      addresRef.current.value = "";
      shopingCtx.clearCart();
      shopingCtx.setNotif({
        status: "success",
        title: "Successfuly",
        message: "Successful",
      });
    } catch (error) {
      console.log(error);
      shopingCtx.setNotif({
        status: "error",
        title: "Error",
        message: error.message,
      });
    }
  };
  return (
    <div className="formcontainer">
      <form className="form">
        <div className="form-line">
          <label htmlFor="fullname">fullname:</label>
          <input ref={fullnameRef} type="text" id="fullname" />
        </div>
        <div className="form-line">
          <label htmlFor="email">email:</label>
          <input ref={emailRef} type="text" id="email" />
        </div>
        <div className="form-line">
          <label htmlFor="addres">addres:</label>
          <textarea ref={addresRef} id="addres" />
        </div>
        <div className="form-action">
          <button onClick={confirmHandler}>confirm</button>
          <button>Cancel</button>
        </div>
      </form>
      {shopingCtx.notif && <Notif />}
    </div>
  );
};

export default BuyingForm;
