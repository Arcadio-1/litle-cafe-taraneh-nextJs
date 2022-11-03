import React from "react";
import BuyingForm from "../../Components/cart/BuyingForm";
import OrderList from "../../Components/cart/OrderList";

const index = () => {
  return (
    <div className="card">
      <OrderList />
      <BuyingForm />
    </div>
  );
};

export default index;
