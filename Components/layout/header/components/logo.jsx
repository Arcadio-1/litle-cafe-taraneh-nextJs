import React from "react";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="header-logo">
      <Link href={"/"}>
        <h1 className="header-logo-text">Taraneh</h1>
      </Link>
    </div>
  );
};

export default Logo;
