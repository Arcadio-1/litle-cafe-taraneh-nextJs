import React from "react";
import OrderItem from "./OrderItem";
const OrderList = (props) => {
  const { orders } = props;

  return (
    <div>
      {orders.map((item) => {
        return <OrderItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default OrderList;
