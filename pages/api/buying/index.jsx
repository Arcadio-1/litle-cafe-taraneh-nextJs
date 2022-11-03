import fs from "fs";
import path from "path";
import { getFilePath, getFileData } from "../../../apiHelper/Helper";

async function handler(req, res) {
  if (req.method === "POST") {
    const filePath = getFilePath("orders.json");
    const fileData = getFileData(filePath);
    fileData.push(req.body);
    fs.writeFileSync(filePath, JSON.stringify(fileData));
    res.status(201).json({ message: "success", data: fileData });
  }
  if (req.method === "GET") {
    const filePath = getFilePath("orders.json");
    const fileData = getFileData(filePath);
    res.status(200).json({ status: "success", orders: fileData });
  }
}
export default handler;
