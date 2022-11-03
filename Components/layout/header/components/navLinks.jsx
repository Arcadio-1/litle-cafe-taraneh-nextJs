import React from "react";
import Link from "next/link";
const NavLinks = () => {
  return (
    <ul className="header-navLinks">
      <li className="header-navLinks-item">
        <Link href={"/Shop"}>Shop</Link>
      </li>
      <li className="header-navLinks-item">
        <Link href={"/Blog"}>Blog</Link>
      </li>
      <li className="header-navLinks-item">
        <Link href={"/manager"}>Manage Orders</Link>
      </li>
      {/* <li className="header-navLinks-item">
        <Link href={"/Shop/list"}>Products List</Link>
      </li> */}
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
