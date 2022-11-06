import { MongoClient } from "mongodb";

export const getClient = async () => {
  const client = await MongoClient.connect(process.env.REACT_APP_MONGODB);
  return client;
};

export async function getAllOrders() {
  try {
    const client = await getClient();
    if (!client) {
      throw new Error("connecting Faild");
    }
    const db = client.db();
    const result = await db.collection("orderList").find().toArray();
    if (!result) {
      return JSON.stringify({ status: "notFound", orders: null });
    }
    return JSON.stringify({ status: "success", orders: result });
  } catch (error) {
    return JSON.stringify({ status: "error", orders: null });
  }
}
