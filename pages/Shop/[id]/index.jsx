import React from "react";
import { getFilePath, getFileData } from "../../../apiHelper/Helper";
import ProductDetails from "../../../Components/Shop/productDetails";
import Head from "next/head";
const index = (props) => {
  console.log(props.item);
  return (
    <div>
      <Head>
        <title>{props.item.title}</title>
        <meta name="description" content={props.item.title} />
      </Head>
      <ProductDetails prod={props.item} />
    </div>
  );
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const filePath = getFilePath("products.json");
  const fileData = getFileData(filePath);
  const selectedProd = fileData.find((item) => item.id === id);
  console.log("selected prod " + selectedProd);
  return {
    props: {
      item: selectedProd,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const filePath = getFilePath("products.json");
  const fileData = getFileData(filePath);
  const pathesId = fileData.map((item) => item.id);
  const pathesParams = pathesId.map((item) => ({ params: { id: item } }));
  console.log("this is pathes " + pathesParams);
  return {
    paths: pathesParams,
    fallback: false,
  };
}

export default index;
