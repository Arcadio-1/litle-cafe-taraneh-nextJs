import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const Log = () => {
  const { status } = useSession();

  const signoutHandler = () => {
    signOut();
  };
  return (
    <div className="header-log">
      {status === "unauthenticated" && (
        <div className="header-log-out">
          <div className="header-log-login">
            <Link href={"/login"}>Login</Link>
          </div>
          <span>/</span>
          <div className="header-log-signup">
            <Link href={"/signup"}>SignUp</Link>
          </div>
        </div>
      )}
      {status === "authenticated" && (
        <div className="header-log-in">
          <div onClick={signoutHandler} className="header-log-logout">
            <Link href={"/"}>Logout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Log;
