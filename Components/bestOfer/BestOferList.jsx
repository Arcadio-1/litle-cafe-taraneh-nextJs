import React from "react";
import BestOferItem from "./BestOferItem";

const BestOferList = () => {
  const dommyOfers = [
    {
      id: 1,
      title: "italian",
      time: 30,
      price: 3.44,
      size: "lg",
      img: "/images/bestOfer/1.png",
    },
    {
      id: 2,
      title: "capocino",
      time: 10,
      price: 5.44,
      size: "xl",
      img: "/images/bestOfer/2.png",
    },
    {
      id: 3,
      title: "esperso",
      time: 10,
      price: 2.39,
      size: "md",
      img: "/images/bestOfer/3.png",
    },
  ];
  return (
    <div className="bestOfer-list">
      {dommyOfers.map((item) => {
        return <BestOferItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default BestOferList;
