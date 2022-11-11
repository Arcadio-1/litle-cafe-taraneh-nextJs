import { getSession } from "next-auth/react";
import { getClient } from "../../../lib/api-helper";
import { varifiyPassword, getHashedPass } from "../../../lib/hash-helper";

const handler = async (req, res) => {
  if (req.method !== "PATCH") {
    return;
  }
  const session = await getSession({ req: req });
  if (!session) {
    res
      .status(401)
      .json({ status: "error", message: "you moust Login first :)" });
    return;
  }
  const userEmail = session.user.email;
  const currentPassword = req.body.currentPassword;
  const newPassword = req.body.newPassword;
  const rNewPassword = req.body.rNewPassword;
  if (newPassword.trim().legnth < 6) {
    res.status(403).json({
      status: "error",
      message: "new password must be atleast 6 charecter",
    });
    return;
  }
  if (newPassword !== rNewPassword) {
    res
      .status(403)
      .json({ status: "error", message: "cunfirm new password is fils" });
    return;
  }
  const client = await getClient();
  const collection = client.db().collection("taraneh-users");
  const user = await collection.findOne({ email: userEmail });
  console.log(user);
  if (!user) {
    res.status(404).json({ status: "error", message: "user not found :)" });
    return;
  }
  const checkPassword = await varifiyPassword(currentPassword, user.password);
  if (!checkPassword) {
    res
      .status(403)
      .json({ status: "error", message: "current Password is Wrong :(" });
    return;
  }
  const hashedPass = await getHashedPass(newPassword);

  const result = await collection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPass } }
  );
  if (!result) {
    res.status(504).json({ status: "error", message: "somthing went Wrong" });
    return;
  }
  res.status(200).json({ status: "success", message: "password Is Changed" });
};

export default handler;
