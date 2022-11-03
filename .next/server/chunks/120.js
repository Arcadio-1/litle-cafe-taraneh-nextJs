"use strict";
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 2120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JF": () => (/* binding */ getSinglePost),
/* harmony export */   "c6": () => (/* binding */ getFileNames),
/* harmony export */   "mH": () => (/* binding */ getFeaturedPosts),
/* harmony export */   "x1": () => (/* binding */ getAllPost)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "posts");
const getFileNames = ()=>{
    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    return files;
};
const getSinglePost = (fileName)=>{
    const postName = fileName.replace(/\.md$/, "");
    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${postName}.md`);
    const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, "utf-8");
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileData);
    const postData = {
        slug: postName,
        ...data,
        content
    };
    return postData;
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