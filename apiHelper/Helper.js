import path from "path";
import fs from "fs";

export const getFilePath = (fileName) => {
  const filePath = path.join(process.cwd(), "data", fileName);
  return filePath;
};
export const getFileData = (filePath) => {
  const fileDataJson = fs.readFileSync(filePath);
  const fileData = JSON.parse(fileDataJson);
  console.log(fileData);
  return fileData;
};
