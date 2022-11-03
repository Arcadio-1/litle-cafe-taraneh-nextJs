import React from "react";
import { getFilePath, getFileData } from "../../apiHelper/Helper";
import Shop from "../../Components/Shop/Shop";
const index = (props) => {
  return (
    <div>
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
