"use strict";
exports.id = 383;
exports.ids = [383];
exports.modules = {

/***/ 5383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Store_ShopingStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5867);




const BasketItem = (props)=>{
    const { item  } = props;
    const shopingCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Store_ShopingStore__WEBPACK_IMPORTED_MODULE_3__/* .ShopingStore */ .j);
    const removeItemHandler = (id)=>{
        shopingCtx.removeFromCart(id);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "header-basket-item",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "header-basket-item-image",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: item.img,
                    alt: item.title,
                    width: 50,
                    height: 50,
                    layout: "responsive"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "header-basket-item-title",
                children: item.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "header-basket-item-amount",
                children: item.amount
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "header-basket-item-amount",
                children: item.price
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "header-basket-item-amount",
                children: +item.amount * +item.price
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: removeItemHandler.bind(null, item.id),
                className: "header-basket-item-removeBtn",
                children: "Remove"
            })
        ]
    }, item.id);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasketItem);


/***/ })

};
;