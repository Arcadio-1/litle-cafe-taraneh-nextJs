import { hash, compare } from "bcryptjs";

export const getHashedPass = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const varifiyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
