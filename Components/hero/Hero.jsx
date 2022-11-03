import Link from "next/link";
import React from "react";
import Componys from "./Componys";
import Image from "next/dist/client/image";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-data">
        <h1 className="hero-title">here you can find any Thing...</h1>
        <p className="hero-text">
          What truly makes Oslo a great place for coffee, however, is that the
          affinity for the brew is combined with some serious efforts to prepare
          it in the best ways possible. A good number of independently-run
          coffee shops offer espresso drinks that alone are worth a trip to the
          city, according to some.
        </p>
        <div className="hero-seeMoreBtn">
          <Link href="Products/list">cheakout list of our products</Link>
        </div>
        <Componys />
      </div>
      <div className="hero-image">
        <Image
          src="/images/hero/hero.png"
          width={600}
          height={800}
          alt="skaleten rider"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Hero;
