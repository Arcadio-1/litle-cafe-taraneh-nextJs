import React from "react";
// import { getFileData, getFilePath } from "../../apiHelper/Helper";
import Order from "../../Components/manage/Order";

const index = () => {
  // if (!props.orders) {
  //   return (
  //     <div>
  //       <p>no items is found</p>
  //     </div>
  //   );
  // }
  return (
    <div>
      {/* <Order orders={props.orders} /> */}
      <Order />
    </div>
  );
};

// export async function getStaticProps() {
//   let orderData;
//   const request = await fetch("./api/buying/manageOrders", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });
//   const data = await request.json();
//   orderData = data.orders;
//   if (!orderData) {
//     orderData = null;
//   }
//   return {
//     props: {
//       orders: orderData,
//     },
//   };
// }

export default index;
