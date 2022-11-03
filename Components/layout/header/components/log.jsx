import React from "react";
import Link from "next/link";
const Log = () => {
  return (
    <div className="header-log">
      <div className="header-log-login">
        <Link href={"/login"}>Login</Link>
      </div>
      <span>/</span>
      <div className="header-log-signup">
        <Link href={"/signup"}>SignUp</Link>
      </div>
    </div>
  );
};

export default Log;
