"use strict";
(() => {
var exports = {};
exports.id = 745;
exports.ids = [745];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 1022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getAllPost": () => (/* binding */ getAllPost),
  "getFeaturedPosts": () => (/* binding */ getFeaturedPosts),
  "getFileNames": () => (/* binding */ getFileNames),
  "getSinglePost": () => (/* binding */ getSinglePost)
});

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: external "gray-matter"
const external_gray_matter_namespaceObject = require("gray-matter");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/blog/index.jsx



const postsDirectory = external_path_default().join(process.cwd(), "posts");
const getFileNames = ()=>{
    return external_fs_default().readdirSync(postsDirectory);
};
const getSinglePost = (fileName)=>{
    try {
        const postName = fileName.replace(/\.md$/, "");
        const filePath = external_path_default().join(postsDirectory, `${postName}.md`);
        if (!filePath) {
            throw new Error("Page is Not Found");
        }
        const fileData = external_fs_default().readFileSync(filePath, "utf-8");
        const { data , content  } = external_gray_matter_default()(fileData);
        const postData = {
            slug: postName,
            ...data,
            content
        };
        return postData;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const getAllPost = ()=>{
    const allNames = getFileNames();
    const allPost = allNames.map((item)=>{
        return getSinglePost(item);
    });
    const sortedPosts = allPost.sort((postA, postB)=>postA.date > postB.date ? -1 : 1);
    return sortedPosts;
};
const getFeaturedPosts = ()=>{
    const allPosts = getAllPost();
    const feturedPosts = allPosts.filter((item)=>item.isFeatured);
    return feturedPosts;
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1022));
module.exports = __webpack_exports__;

})();