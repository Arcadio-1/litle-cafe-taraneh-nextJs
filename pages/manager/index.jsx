import React from "react";
import { getFileData, getFilePath } from "../../apiHelper/Helper";
import Order from "../../Components/manage/Order";

const index = (props) => {
  return (
    <div>
      <Order orders={props.orders} />
    </div>
  );
};
export async function getStaticProps(constex) {
  const filePath = getFilePath("orders.json");
  const fileData = getFileData(filePath);
  return {
    props: {
      orders: fileData,
    },
  };
}
export default index;
