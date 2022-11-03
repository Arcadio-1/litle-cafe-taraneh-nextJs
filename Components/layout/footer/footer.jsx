import React from "react";
import Contact from "./components/Contact";
import NavList from "./components/NavList";
import SocialIcons from "./components/SocialIcons";

const Footer = () => {
  const dammuNavLinks = [
    { id: 1, title: "Products", link: "/Products/list" },
    { id: 2, title: "Blog", link: "/Products/list" },
    { id: 3, title: "Serveces", link: "/Products/list" },
    { id: 4, title: "Contact Us", link: "/Products/list" },
    { id: 5, title: "Login", link: "/Products/list" },
  ];
  return (
    <footer className="footer">
      <NavList navItems={dammuNavLinks} title="Our seveces" />
      <NavList navItems={dammuNavLinks} title="Hep And Suppurt" />
      <div className="footer-contactSocial">
        <Contact />
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
