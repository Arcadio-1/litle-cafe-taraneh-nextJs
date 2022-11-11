import React from "react";
import { Fragment } from "react";
import BuyingForm from "../../Components/cart/BuyingForm";
import OrderList from "../../Components/cart/OrderList";
import Head from "next/head";
const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Cart Items</title>
        <meta name="descripton" content="here you car order you cart items" />
      </Head>
      <div className="card">
        <OrderList />
        <BuyingForm />
      </div>
    </Fragment>
  );
};

export default index;
