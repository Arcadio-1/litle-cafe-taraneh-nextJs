"use strict";
exports.id = 308;
exports.ids = [308];
exports.modules = {

/***/ 6308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Blog_BlogPosts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./Components/Blog/PostItem.jsx




const PostItem = (props)=>{
    const { post  } = props;
    const { title , image , excerpt , date , slug  } = post;
    const postLink = `/Blog/${slug}`;
    const imageSrc = `/images/posts/${slug}/${image}`;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: postLink,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
            className: "blogPosts-list-item",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    className: "blogPosts-list-item-image",
                    src: imageSrc,
                    width: 200,
                    height: 200,
                    alt: title,
                    layout: "responsive"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "blogPosts-list-item-title",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "blogPosts-list-item-date",
                    children: date
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "blogPosts-list-item-exe",
                    children: excerpt
                })
            ]
        })
    });
};
/* harmony default export */ const Blog_PostItem = (PostItem);

;// CONCATENATED MODULE: ./Components/Blog/PostList.jsx



const PostList = (props)=>{
    const { posts  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "blogPosts-listContainer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "blogPosts-list",
            children: posts.map((post)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(Blog_PostItem, {
                    post: post
                }, post.slug);
            })
        })
    });
};
/* harmony default export */ const Blog_PostList = (PostList);

;// CONCATENATED MODULE: ./Components/Blog/BlogPosts.jsx



const BlogPosts = (props)=>{
    const { blogTitle  } = props;
    const { posts  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "blogPosts",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "blogPosts-title",
                children: blogTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Blog_PostList, {
                posts: posts
            })
        ]
    });
};
/* harmony default export */ const Blog_BlogPosts = (BlogPosts);


/***/ })

};
;