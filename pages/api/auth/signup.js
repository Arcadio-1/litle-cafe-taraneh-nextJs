import { getClient } from "../../../lib/api-helper";
import { getHashedPass } from "../../../lib/hash-helper";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  try {
    const { email, fullname, password, rPassword } = req.body;
    // if (!email.includes("@") || password.length < 6) {
    //   throw new Error("increct Email or Password");
    // }
    // if (password !== rPassword) {
    //   throw new Error("confirm your password");
    // }
    const hashed = await getHashedPass(password);
    if (!hashed) {
      throw new Error("hash password propblem");
    }

    const client = await getClient();
    if (!client) {
      throw new Error("get client propblem");
    }
    const db = client.db();

    const userExist = await db
      .collection("taraneh-users")
      .findOne({ email: email });

    if (userExist) {
      throw new Error("this Email is Already Exist");
    }

    const result = await db.collection("taraneh-users").insertOne({
      email: email,
      fullname: fullname,
      password: hashed,
    });
    // const result = await db.collection("taraneh-users").insertOne(req.body);
    if (!result) {
      throw new Error("server fucked");
    }
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(202).json({ message: error.message });
  }
}
export default handler;
