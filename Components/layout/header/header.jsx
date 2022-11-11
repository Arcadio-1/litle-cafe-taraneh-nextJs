import React from "react";
import Basket from "./components/basket/Basket";
import Log from "./components/log";
import Logo from "./components/logo";
import NavLinks from "./components/navLinks";
import SearchBox from "./components/searchBox";
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Basket />
      <NavLinks />
      <SearchBox />
      <Log />
    </div>
  );
};

export default Header;
