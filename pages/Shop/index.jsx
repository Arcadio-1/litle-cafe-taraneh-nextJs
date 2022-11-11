import React from "react";
import { getFilePath, getFileData } from "../../apiHelper/Helper";
import Shop from "../../Components/Shop/Shop";
import Head from "next/head";
const index = (props) => {
  return (
    <div>
      <Head>
        <title>products List</title>
        <meta name="description" content="here you can see all products..." />
      </Head>
      <Shop products={props.products} />
    </div>
  );
};

export async function getStaticProps(context) {
  const filePath = getFilePath("products.json");
  const fileData = getFileData(filePath);
  return {
    props: {
      products: fileData,
    },
  };
}

export default index;
