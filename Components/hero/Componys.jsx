import Image from "next/image";
import React from "react";
import Link from "next/link";

const Componys = () => {
  return (
    <div className="hero-compony">
      <ul className="hero-compony-list">
        <li className="hero-compony-item">
          <Link href="products/with/some/filter">
            <a href="products/with/some/filter">
              <Image
                src="/images/hero/1.png"
                alt="somthing"
                width={100}
                height={100}
              />
            </a>
          </Link>
        </li>
        <li className="hero-compony-item">
          <Link href="products/with/some/filter">
            <a href="products/with/some/filter">
              <Image
                src="/images/hero/2.png"
                alt="somthing"
                width={100}
                height={100}
              />
            </a>
          </Link>
        </li>
        <li className="hero-compony-item">
          <Link href="products/with/some/filter">
            <a href="products/with/some/filter">
              <Image
                src="/images/hero/3.png"
                alt="somthing"
                width={100}
                height={100}
              />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Componys;
