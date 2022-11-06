import React from "react";
import Order from "../../Components/manage/Order";
import { getAllOrders } from "../../lib/api-helper";

const index = (props) => {
  const { orders } = props.orders;
  const { status } = props.orders;

  if (!orders) {
    return (
      <div>
        <p>no items is found</p>
      </div>
    );
  }

  return (
    <div>
      {status === "notFound" && <h1>no item is found</h1>}
      {status === "error" && <h1>somthing is went wrong</h1>}
      {status === "success" && <Order orders={orders} />}
    </div>
  );
};

export async function getStaticProps() {
  let orderData = await getAllOrders();
  if (!orderData) {
    orderData = null;
  }
  return {
    props: {
      orders: JSON.parse(orderData),
    },
  };
}

export default index;
