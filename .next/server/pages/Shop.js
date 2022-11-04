"use strict";
(() => {
var exports = {};
exports.id = 587;
exports.ids = [587];
exports.modules = {

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

/***/ 5317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Shop),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./apiHelper/Helper.js
var Helper = __webpack_require__(5917);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./Store/ShopingStore.jsx
var ShopingStore = __webpack_require__(5867);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./Components/Shop/ShopItem.jsx





const ShopItem = (props)=>{
    const { prod  } = props;
    const shopingCtx = (0,external_react_.useContext)(ShopingStore/* ShopingStore */.j);
    const router = (0,router_.useRouter)();
    const openDetailsHandler = (id)=>{
        router.push(`Shop/${id}`);
    };
    const addToCartHandler = (item)=>{
        shopingCtx.addToCart({
            ...item,
            amount: 1
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "shop-list-item",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shop-list-item-imageContainer",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: prod.img,
                    alt: prod.title,
                    width: 200,
                    height: 200,
                    layout: "responsive",
                    className: "shop-list-item-image"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "shop-list-item-data",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "shop-list-item-data-title",
                        children: prod.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "shop-list-item-data-price",
                        children: [
                            prod.price,
                            "$"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "shop-list-item-action",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: addToCartHandler.bind(null, prod),
                        className: "shop-list-item-action-addToCart",
                        children: "Add To Cart"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: openDetailsHandler.bind(null, prod.id),
                        className: "shop-list-item-action-seeMore",
                        children: "See Details"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Shop_ShopItem = (ShopItem);

;// CONCATENATED MODULE: ./Components/Shop/ShopList.jsx



const ShopList = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "shop-list",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "shop-list-container",
            children: props.products.map((item)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(Shop_ShopItem, {
                    prod: item
                }, item.id);
            })
        })
    });
};
/* harmony default export */ const Shop_ShopList = (ShopList);

;// CONCATENATED MODULE: ./Components/Shop/Shop.jsx



const Shop = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "shop",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Shop_ShopList, {
            products: props.products
        })
    });
};
/* harmony default export */ const Shop_Shop = (Shop);

;// CONCATENATED MODULE: ./pages/Shop/index.jsx




const index = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Shop_Shop, {
            products: props.products
        })
    });
};
async function getStaticProps(context) {
    const filePath = (0,Helper/* getFilePath */.p)("products.json");
    const fileData = (0,Helper/* getFileData */.L)(filePath);
    return {
        props: {
            products: fileData
        }
    };
}
/* harmony default export */ const pages_Shop = (index);


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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,867], () => (__webpack_exec__(5317)));
module.exports = __webpack_exports__;

})();