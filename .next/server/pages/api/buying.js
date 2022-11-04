"use strict";
(() => {
var exports = {};
exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 6254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ buying)
});

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ./apiHelper/Helper.js


const getFilePath = (fileName)=>{
    const filePath = external_path_default().join(process.cwd(), "data", fileName);
    return filePath;
};
const getFileData = (filePath)=>{
    const fileDataJson = external_fs_default().readFileSync(filePath);
    const fileData = JSON.parse(fileDataJson);
    console.log(fileData);
    return fileData;
};

;// CONCATENATED MODULE: ./pages/api/buying/index.jsx



async function handler(req, res) {
    if (req.method === "POST") {
        const filePath = getFilePath("orders.json");
        const fileData = getFileData(filePath);
        fileData.push(req.body);
        external_fs_default().writeFileSync(filePath, JSON.stringify(fileData));
        res.status(201).json({
            message: "success",
            data: fileData
        });
    }
    if (req.method === "GET") {
        const filePath1 = getFilePath("orders.json");
        const fileData1 = getFileData(filePath1);
        res.status(200).json({
            status: "success",
            orders: fileData1
        });
    }
}
/* harmony default export */ const buying = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6254));
module.exports = __webpack_exports__;

})();