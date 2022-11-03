import React from "react";
import OrderList from "./OrderList";

const Order = (props) => {
  return (
    <div>
      <h1>List Of Orders</h1>
      <OrderList orders={props.orders} />
    </div>
  );
};

export default Order;
