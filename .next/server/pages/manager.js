"use strict";
(() => {
var exports = {};
exports.id = 543;
exports.ids = [543];
exports.modules = {

/***/ 4594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const BasketListHeder = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "header-basket-listHeader",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Avatar"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Title"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Amount"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Price"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Total Price"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasketListHeder);


/***/ }),

/***/ 5917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getFileData),
/* harmony export */   "p": () => (/* binding */ getFilePath)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


const getFilePath = (fileName)=>{
    const filePath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), "data", fileName);
    return filePath;
};
const getFileData = (filePath)=>{
    const fileDataJson = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath);
    const fileData = JSON.parse(fileDataJson);
    console.log(fileData);
    return fileData;
};


/***/ }),

/***/ 687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ manager),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./apiHelper/Helper.js
var Helper = __webpack_require__(5917);
// EXTERNAL MODULE: ./Components/layout/header/components/basket/BasketItem.jsx
var BasketItem = __webpack_require__(5383);
// EXTERNAL MODULE: ./Components/layout/header/components/basket/BasketListHeder.jsx
var BasketListHeder = __webpack_require__(4594);
;// CONCATENATED MODULE: ./Components/manage/OrderItem.jsx




const OrderItem = (props)=>{
    const { item  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "Fullname: "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: item.name
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "Email: "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: item.email
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "Adress: "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: item.address
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "Total Price: "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: item.totalPrice
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "Total Amount: "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: item.totalAmount
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "List Of Orders: "
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(BasketListHeder/* default */.Z, {}),
                            item.orders.map((item)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(BasketItem/* default */.Z, {
                                        item: item
                                    })
                                }, item.id);
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const manage_OrderItem = (OrderItem);

;// CONCATENATED MODULE: ./Components/manage/OrderList.jsx



const OrderList = (props)=>{
    const { orders  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: orders.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(manage_OrderItem, {
                item: item
            }, item.id);
        })
    });
};
/* harmony default export */ const manage_OrderList = (OrderList);

;// CONCATENATED MODULE: ./Components/manage/Order.jsx



const Order = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "List Of Orders"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(manage_OrderList, {
                orders: props.orders
            })
        ]
    });
};
/* harmony default export */ const manage_Order = (Order);

;// CONCATENATED MODULE: ./pages/manager/index.jsx




const index = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(manage_Order, {
            orders: props.orders
        })
    });
};
async function getStaticProps(constex) {
    const filePath = (0,Helper/* getFilePath */.p)("orders.json");
    const fileData = (0,Helper/* getFileData */.L)(filePath);
    return {
        props: {
            orders: fileData
        }
    };
}
/* harmony default export */ const manager = (index);


/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,867,383], () => (__webpack_exec__(687)));
module.exports = __webpack_exports__;

})();