import Link from "next/link";
import React from "react";

const NavList = (props) => {
  const { navItems, title } = props;
  return (
    <div className="footer-nav">
      <h3 className="footer-nav-title">{title}</h3>
      <ul className="footer-nav-list">
        {navItems.map((item) => {
          return (
            <li className="footer-nav-item" key={item.id}>
              <Link key={item.id} href={item.link}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavList;
