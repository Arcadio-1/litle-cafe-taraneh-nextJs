import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
const OrderList = () => {
  // const { orders } = props;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const request = await fetch("./api/buying/manageOrders", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await request.json();
      console.log(data.status + data.message);
      setOrders(data.orders);
    };
    getOrders();
  }, []);

  return (
    <div>
      {orders.map((item) => {
        return <OrderItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default OrderList;
