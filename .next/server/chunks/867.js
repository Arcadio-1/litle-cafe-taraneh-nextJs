"use strict";
exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 5867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "j": () => (/* binding */ ShopingStore)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ShopingStore = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    cartItems: [],
    totalPrice: 0,
    notif: null,
    calcTotal: ()=>{},
    addToCart: (item)=>{},
    removeFromCart: (id)=>{},
    clearCart: (id)=>{},
    setNotif: (status)=>{}
});
const ShopingStoreProvider = (props)=>{
    const { 0: cartItems , 1: setCartItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: totalPrice , 1: setTotalPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: notif , 1: setNotif  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (notif && (notif.status === "error" || notif.status === "success")) {
            const timeOut = setTimeout(()=>{
                setNotif(null);
            }, 3000);
            return ()=>{
                clearTimeout(timeOut);
            };
        }
    }, [
        notif
    ]);
    const calculateTotalPrice = ()=>{
        let totalAmount = 0;
        let totalPrice = 0;
        cartItems.map((item)=>totalAmount += +item.amount);
        cartItems.map((item)=>totalPrice += +item.amount * +item.price);
        return {
            totalAmount: totalAmount,
            totalPrice: totalPrice
        };
    };
    const manageNotif = (status)=>{
        setNotif(status);
    };
    const addToCartHandler = (item)=>{
        const fuck = process.env.REACT_APP_FUCK;
        setCartItems((prev)=>{
            const existingProd = prev.findIndex((prod)=>prod.id === item.id);
            if (existingProd !== -1) {
                const editedList = [
                    ...prev
                ];
                editedList[existingProd].amount = 1 + +editedList[existingProd].amount;
                return prev = editedList;
            }
            return prev = prev.concat(item);
        });
    // calculateTotalPrice();
    };
    const removeFromCartHandler = (id)=>{
        setCartItems((prev)=>{
            return prev = prev.filter((item)=>item.id !== id);
        });
    // calculateTotalPrice();
    };
    const clearCartHandler = ()=>{
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
        setNotif: manageNotif
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopingStore.Provider, {
        value: providerValue,
        children: props.children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopingStoreProvider);


/***/ })

};
;