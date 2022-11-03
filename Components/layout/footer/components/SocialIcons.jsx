import React from "react";
import Link from "next/link";
import Image from "next/dist/client/image";
const SocialIcons = () => {
  return (
    <div className="footer-social">
      <ul className="footer-social-list">
        <Link href="facebook.com">
          <li className="footer-social-list-item">
            <Image
              className="footer-social-list-item-svg"
              src="/images/icons/socialMedia/faceBook.svg"
              alt="faceBook"
              width={20}
              height={20}
            />
          </li>
        </Link>
        <Link href="facebook.com">
          <li className="footer-social-list-item">
            <Image
              className="footer-social-list-item-svg"
              src="/images/icons/socialMedia/linkedin.svg"
              alt="faceBook"
              width={20}
              height={20}
            />
          </li>
        </Link>
        <Link href="facebook.com">
          <li className="footer-social-list-item">
            <Image
              className="footer-social-list-item-svg"
              src="/images/icons/socialMedia/instagram.svg"
              alt="faceBook"
              width={20}
              height={20}
            />
          </li>
        </Link>
        <Link href="facebook.com">
          <li className="footer-social-list-item">
            <Image
              className="footer-social-list-item-svg"
              src="/images/icons/socialMedia/whatsapp.svg"
              alt="faceBook"
              width={20}
              height={20}
            />
          </li>
        </Link>
        <Link href="facebook.com">
          <li className="footer-social-list-item">
            <Image
              className="footer-social-list-item-svg"
              src="/images/icons/socialMedia/twitter.svg"
              alt="faceBook"
              width={20}
              height={20}
            />
          </li>
        </Link>
        <Link href="facebook.com">
          <li className="footer-social-list-item">
            <Image
              className="footer-social-list-item-svg"
              src="/images/icons/socialMedia/telegram.svg"
              alt="faceBook"
              width={20}
              height={20}
            />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SocialIcons;
