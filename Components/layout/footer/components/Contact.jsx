import React from "react";
import Image from "next/dist/client/image";
const Contact = () => {
  return (
    <div className="footer-contact">
      <h3 className="footer-contact-title">Contact us</h3>
      <div className="footer-contact-container">
        <div className="footer-contact-image">
          <Image
            src={"/images/site/mail.png"}
            width={40}
            height={30}
            alt={"mail"}
          />
        </div>
        <div className="footer-contact-data">
          <p className="footer-contact-email">cafetaraneh@gmail.info</p>
          <p className="footer-contact-phone">+98 987 475 4142</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
