import React, { useContext } from "react";
import { ShopingStore } from "../../Store/ShopingStore";
import ReactDOM from "react-dom";
const Notif = () => {
  const shopCtx = useContext(ShopingStore);
  return ReactDOM.createPortal(
    <div className="notif">
      <div className={`notif-container ${shopCtx.notif.status}`}>
        <h1 className="notif-title">{shopCtx.notif.title}</h1>
        <p className="notif-message">{shopCtx.notif.message}</p>
      </div>
    </div>,
    document.getElementById("notification")
  );
};

export default Notif;
