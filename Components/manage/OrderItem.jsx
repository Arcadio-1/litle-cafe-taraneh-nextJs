import React from "react";
import BasketItem from "../layout/header/components/basket/BasketItem";
import BasketListHeder from "../layout/header/components/basket/BasketListHeder";

const OrderItem = (props) => {
  const { item } = props;
  return (
    <div className="card">
      <div>
        <label>Fullname: </label>
        <span>{item.name}</span>
      </div>
      <div>
        <label>Email: </label>
        <span>{item.email}</span>
      </div>
      <div>
        <label>Adress: </label>
        <span>{item.address}</span>
      </div>
      <div>
        <label>Total Price: </label>
        <span>{item.totalPrice}</span>
      </div>
      <div>
        <label>Total Amount: </label>
        <span>{item.totalAmount}</span>
      </div>
      <div>
        <label>List Of Orders: </label>
        <div>
          <BasketListHeder />
          {item.orders.map((item) => {
            return (
              <div key={item.id}>
                <BasketItem item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
