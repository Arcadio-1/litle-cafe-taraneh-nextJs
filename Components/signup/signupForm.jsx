import React, { useContext, useRef } from "react";
import Notif from "../ui/Notif";

import { ShopingStore } from "../../Store/ShopingStore";
import { getHashedPass } from "../../lib/hash-helper";
const SignupForm = () => {
  const shopCtx = useContext(ShopingStore);

  const fullnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rPasswordRef = useRef();

  const signupHandler = async (e) => {
    e.preventDefault();
    const fullname = fullnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const rPassword = rPasswordRef.current.value;
    // const hashed = await getHashedPass(password);
    // console.log(hashed);
    if (
      fullname.trim() === "" ||
      email.trim() === "" ||
      !email.includes("@") ||
      password.trim() === "" ||
      rPassword.trim() === ""
    ) {
      shopCtx.setNotif({
        status: "error",
        title: "invalid input",
        message: "please fillup the form",
      });
      return;
    }
    if (password.length < 6) {
      shopCtx.setNotif({
        status: "error",
        title: "the password must be more than 5 character",
        message: "please enter valid password",
      });
      return;
    }
    if (password !== rPassword) {
      shopCtx.setNotif({
        status: "error",
        title: "your Passwords aren't match",
        message: "please cofirm your password curectly",
      });
      return;
    }
    const request = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        password: password,
        rPassword: rPassword,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await request.json();
    console.log(request);
    console.log(result);
    if (result.message === "success") {
      shopCtx.setNotif({
        status: "success",
        title: "Thanks for Signup",
        message: "know You are member",
      });
    }
  };
  return (
    <div className="card">
      <h1>Signup Form</h1>
      <form className="form">
        <div className="form-line">
          <label htmlFor="fullname">Full Name: </label>
          <input ref={fullnameRef} type="text" id="fullname" />
        </div>
        <div className="form-line">
          <label htmlFor="email">Email: </label>
          <input ref={emailRef} type="email" id="email" />
        </div>
        <div className="form-line">
          <label htmlFor="password">Password: </label>
          <input ref={passwordRef} type="password" id="password" />
        </div>
        <div className="form-line">
          <label htmlFor="Rpassword">Repeat Password: </label>
          <input ref={rPasswordRef} type="password" id="Rpassword" />
        </div>
        <div className="form-action">
          <button onClick={signupHandler}>SignUp</button>
          <button>Cancel</button>
        </div>
      </form>
      {shopCtx.notif && <Notif />}
    </div>
  );
};

export default SignupForm;
