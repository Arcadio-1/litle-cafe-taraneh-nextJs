import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
const NavLinks = () => {
  const { status } = useSession();
  return (
    <ul className="header-navLinks">
      <li className="header-navLinks-item">
        <Link href={"/Shop"}>Shop</Link>
      </li>
      <li className="header-navLinks-item">
        <Link href={"/Blog"}>Blog</Link>
      </li>
      <li className="header-navLinks-item">
        <Link href={"/manager"}>Orders</Link>
      </li>
      {status === "authenticated" && (
        <li className="header-navLinks-item">
          <Link href={"/profile"}>Profile</Link>
        </li>
      )}
      {/* <li className="header-navLinks-item">
        <Link href={"/contact"}>Contact Us</Link>
      </li> */}
      {/* <li className="header-navLinks-item">
        <Link href={"/about"}>About Us</Link>
      </li> */}
    </ul>
  );
};

export default NavLinks;
