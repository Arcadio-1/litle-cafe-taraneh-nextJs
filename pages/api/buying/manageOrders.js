// import fs from "fs";
// import path from "path";
// import { getFilePath, getFileData } from "../../../apiHelper/Helper";

// async function handler(req, res) {
//   if (req.method === "POST") {
//     const filePath = getFilePath("orders.json");
//     const fileData = getFileData(filePath);
//     fileData.push(req.body);
//     fs.writeFileSync(filePath, JSON.stringify(fileData));
//     res.status(201).json({ message: "success", data: fileData });
//   }
//   if (req.method === "GET") {
//     const filePath = getFilePath("orders.json");
//     const fileData = getFileData(filePath);
//     res.status(200).json({ status: "success", orders: fileData });
//   }
// }
// export default handler;

const { MongoClient } = require("mongodb");
require("dotenv").config();

const getClient = async () => {
  const client = await MongoClient.connect(process.env.REACT_APP_MONGODB);
  return client;
};

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const client = await MongoClient.connect(process.env.REACT_APP_MONGODB);
      const db = client.db();
      const result = await db.collection("orderList").insertOne(req.body);
      if (!result) {
        throw new Error(result.message);
      }
      res.status(201).json({ status: "success", result: result.insertedId });
    } catch (error) {
      console.log(error);
      res.status(200).json({
        status: "error",
        result: null,
        error: error,
      });
    }
  }
  if (req.method === "GET") {
    try {
      const client = await MongoClient.connect(process.env.REACT_APP_MONGODB);
      const db = client.db();
      const result = await db.collection("orderList").find().toArray();
      if (!result) {
        throw new Error(result.message);
      }
      res
        .status(200)
        .json({ status: "success", message: "successfuly", orders: result });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
        result: null,
      });
    }
  }
}

export default handler;
