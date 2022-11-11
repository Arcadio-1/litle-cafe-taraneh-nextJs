import React, { useContext, useRef, useState } from "react";
import { ShopingStore } from "../../Store/ShopingStore";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Loginform = () => {
  const shopCtx = useContext(ShopingStore);
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email.includes("@")) {
      shopCtx.setNotif({
        status: "error",
        title: "Wrong Email",
        message: "Enter your Email curectly",
      });
    }
    if (password.trim() === "" || password.legnth < 6) {
      shopCtx.setNotif({
        status: "error",
        title: "Wrong Password",
        message: "Enter your Password curectly",
      });
    }

    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
    if (!result.error) {
      router.push("/");
    }
    setIsLoading(false);
    // const data = await result.json();
    console.log(result);
  };

  return (
    <div className="card">
      <h1>Login Form</h1>
      <form className="form">
        <div className="form-line">
          <label htmlFor="email">Email</label>
          <input ref={emailRef} type="email" id="email" />
        </div>
        <div className="form-line">
          <label htmlFor="password">Password:</label>
          <input ref={passwordRef} type="password" id="password" />
        </div>
        <div className="form-action">
          <button disabled={isLoading ? true : false} onClick={loginHandler}>
            Login
          </button>
          <button>Signup</button>
        </div>
        {isLoading && <h1>Loading...</h1>}
      </form>
    </div>
  );
};

export default Loginform;
