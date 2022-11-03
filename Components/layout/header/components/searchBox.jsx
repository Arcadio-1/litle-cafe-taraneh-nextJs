import React from "react";
import Image from "next/dist/client/image";
const SearchBox = () => {
  return (
    <div className="header-searchBox">
      <label className="header-searchBox-label" htmlFor="searchInput">
        <Image
          src="/images/icons/search.svg"
          width={10}
          height={15}
          alt="searchBtn"
        />
      </label>
      <input className="header-searchBox-input" type="text" id="searchInput" />
    </div>
  );
};

export default SearchBox;
