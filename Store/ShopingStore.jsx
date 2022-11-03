import React, { useEffect, useState } from "react";

export const ShopingStore = React.createContext({
  cartItems: [],
  totalPrice: 0,
  notif: null,
  calcTotal: () => {},
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  clearCart: (id) => {},
  setNotif: (status) => {},
});

const ShopingStoreProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [notif, setNotif] = useState(null);
  useEffect(() => {
    if (notif && (notif.status === "error" || notif.status === "success")) {
      const timeOut = setTimeout(() => {
        setNotif(null);
      }, 3000);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [notif]);

  const calculateTotalPrice = () => {
    let totalAmount = 0;
    let totalPrice = 0;
    cartItems.map((item) => (totalAmount += +item.amount));
    cartItems.map((item) => (totalPrice += +item.amount * +item.price));

    return { totalAmount: totalAmount, totalPrice: totalPrice };
  };
  const manageNotif = (status) => {
    setNotif(status);
  };
  const addToCartHandler = (item) => {
    const fuck = process.env.REACT_APP_FUCK;

    setCartItems((prev) => {
      const existingProd = prev.findIndex((prod) => prod.id === item.id);
      if (existingProd !== -1) {
        const editedList = [...prev];
        editedList[existingProd].amount = 1 + +editedList[existingProd].amount;
        return (prev = editedList);
      }
      return (prev = prev.concat(item));
    });
    // calculateTotalPrice();
  };

  const removeFromCartHandler = (id) => {
    setCartItems((prev) => {
      return (prev = prev.filter((item) => item.id !== id));
    });
    // calculateTotalPrice();
  };
  const clearCartHandler = () => {
    setCartItems([]);
  };

  const providerValue = {
    cartItems,
    notif,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    clearCart: clearCartHandler,
    totalPrice: totalPrice,
    calcTotal: calculateTotalPrice,
    setNotif: manageNotif,
  };
  return (
    <ShopingStore.Provider value={providerValue}>
      {props.children}
    </ShopingStore.Provider>
  );
};

export default ShopingStoreProvider;
