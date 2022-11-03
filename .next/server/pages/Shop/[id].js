"use strict";
(() => {
var exports = {};
exports.id = 796;
exports.ids = [796];
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

/***/ 6318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
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
;// CONCATENATED MODULE: ./Components/Shop/productDetails.jsx




const ProductDetails = (props)=>{
    const shopingCtx = (0,external_react_.useContext)(ShopingStore/* ShopingStore */.j);
    const { prod  } = props;
    if (!prod) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "sory page is not found"
            })
        });
    }
    const { title , img , time , price  } = prod;
    const addToCartHandler = (prod)=>{
        shopingCtx.addToCart({
            ...prod,
            amount: 1
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card",
        style: {
            textAlign: "center",
            gap: "1rem"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: img,
                    width: 300,
                    height: 300,
                    alt: title,
                    layout: "responsive"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                children: [
                    time,
                    "Min"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                children: [
                    "price : ",
                    price,
                    "$"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: addToCartHandler.bind(null, prod),
                style: {
                    backgroundColor: "#333"
                },
                children: "Add To Cart"
            })
        ]
    });
};
/* harmony default export */ const productDetails = (ProductDetails);

;// CONCATENATED MODULE: ./pages/Shop/[id]/index.jsx




const index = (props)=>{
    console.log(props.item);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(productDetails, {
            prod: props.item
        })
    });
};
async function getStaticProps(context) {
    const id = context.params.id;
    const filePath = (0,Helper/* getFilePath */.p)("products.json");
    const fileData = (0,Helper/* getFileData */.L)(filePath);
    const selectedProd = fileData.find((item)=>item.id === id);
    console.log("selected prod " + selectedProd);
    return {
        props: {
            item: selectedProd
        },
        revalidate: 600
    };
}
async function getStaticPaths() {
    const filePath = (0,Helper/* getFilePath */.p)("products.json");
    const fileData = (0,Helper/* getFileData */.L)(filePath);
    const pathesId = fileData.map((item)=>item.id);
    const pathesParams = pathesId.map((item)=>({
            params: {
                id: item
            }
        }));
    console.log("this is pathes " + pathesParams);
    return {
        paths: pathesParams,
        fallback: false
    };
}
/* harmony default export */ const _id_ = (index);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,867], () => (__webpack_exec__(6318)));
module.exports = __webpack_exports__;

})();