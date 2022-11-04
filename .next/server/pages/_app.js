"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
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

/***/ 1988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dist/client/image.js
var client_image = __webpack_require__(8045);
var image_default = /*#__PURE__*/__webpack_require__.n(client_image);
;// CONCATENATED MODULE: ./Components/layout/footer/components/Contact.jsx



const Contact = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-contact",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "footer-contact-title",
                children: "Contact us"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer-contact-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "footer-contact-image",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/images/site/mail.png",
                            width: 40,
                            height: 30,
                            alt: "mail"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "footer-contact-data",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "footer-contact-email",
                                children: "cafetaraneh@gmail.info"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "footer-contact-phone",
                                children: "+98 987 475 4142"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Contact = (Contact);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./Components/layout/footer/components/NavList.jsx



const NavList = (props)=>{
    const { navItems , title  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-nav",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "footer-nav-title",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "footer-nav-list",
                children: navItems.map((item)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "footer-nav-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: item.link,
                            children: item.title
                        }, item.id)
                    }, item.id);
                })
            })
        ]
    });
};
/* harmony default export */ const components_NavList = (NavList);

;// CONCATENATED MODULE: ./Components/layout/footer/components/SocialIcons.jsx




const SocialIcons = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "footer-social",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "footer-social-list",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "facebook.com",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "footer-social-list-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "footer-social-list-item-svg",
                            src: "/images/icons/socialMedia/faceBook.svg",
                            alt: "faceBook",
                            width: 20,
                            height: 20
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "facebook.com",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "footer-social-list-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "footer-social-list-item-svg",
                            src: "/images/icons/socialMedia/linkedin.svg",
                            alt: "faceBook",
                            width: 20,
                            height: 20
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "facebook.com",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "footer-social-list-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "footer-social-list-item-svg",
                            src: "/images/icons/socialMedia/instagram.svg",
                            alt: "faceBook",
                            width: 20,
                            height: 20
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "facebook.com",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "footer-social-list-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "footer-social-list-item-svg",
                            src: "/images/icons/socialMedia/whatsapp.svg",
                            alt: "faceBook",
                            width: 20,
                            height: 20
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "facebook.com",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "footer-social-list-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "footer-social-list-item-svg",
                            src: "/images/icons/socialMedia/twitter.svg",
                            alt: "faceBook",
                            width: 20,
                            height: 20
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "facebook.com",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "footer-social-list-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "footer-social-list-item-svg",
                            src: "/images/icons/socialMedia/telegram.svg",
                            alt: "faceBook",
                            width: 20,
                            height: 20
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_SocialIcons = (SocialIcons);

;// CONCATENATED MODULE: ./Components/layout/footer/footer.jsx





const Footer = ()=>{
    const dammuNavLinks = [
        {
            id: 1,
            title: "Products",
            link: "/Products/list"
        },
        {
            id: 2,
            title: "Blog",
            link: "/Products/list"
        },
        {
            id: 3,
            title: "Serveces",
            link: "/Products/list"
        },
        {
            id: 4,
            title: "Contact Us",
            link: "/Products/list"
        },
        {
            id: 5,
            title: "Login",
            link: "/Products/list"
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_NavList, {
                navItems: dammuNavLinks,
                title: "Our seveces"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_NavList, {
                navItems: dammuNavLinks,
                title: "Hep And Suppurt"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer-contactSocial",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Contact, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SocialIcons, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./Store/ShopingStore.jsx
var ShopingStore = __webpack_require__(5867);
;// CONCATENATED MODULE: ./Components/ui/icons/BasketIcon.jsx


const BasketIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 1706.035 1687.226",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            id: "cart",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M1690.842,225.329c-12.553-15.147-31.203-23.104-50.875-23.104H307V65.158c0-36.49-28.342-64.933-64.832-64.933H66.07 C29.583,0.226,0,30.235,0,66.726s29.583,66.5,66.07,66.5H175v1301.248c0,0.479,0.612,0.941,0.619,1.418 c-0.09,2.758,0.066,5.51,0.066,8.289c0,134.123,109.255,243.226,243.377,243.226c111.221,0,205.312-74.181,234.179-177.181h341.893 c28.867,103,122.824,177.181,234.045,177.181c134.122,0,243.238-109.109,243.238-243.23c0-134.123-109.116-243.178-243.238-243.178 c-111.221,0-205.174,78.228-234.045,177.228H653.242c-28.867-99-123.441-177.224-234.658-177.224 c-39.959,0-75.584,9.691-111.584,26.838v-131.518c10,1.839,20.96,4.903,31.199,4.903H1397.95 c84.879,0,156.989-60.083,179.442-147.979c0.346-1.346,0.646-3.222,0.903-4.59l126.586-669.039 C1708.541,260.286,1703.392,240.479,1690.842,225.329z M1229.18,1333.085c61.257,0,111.098,49.838,111.098,111.096 c0,61.26-49.841,111.096-111.098,111.096c-61.258,0-111.098-49.836-111.098-111.096 C1118.082,1382.923,1167.922,1333.085,1229.18,1333.085z M419.2,1333.085c61.258,0,111.095,49.838,111.095,111.096 c0,61.26-49.837,111.096-111.095,111.096c-61.26,0-111.101-49.836-111.101-111.096C308.1,1382.923,357.94,1333.085,419.2,1333.085z M1448.91,922.553c-3.568,12.727-16.202,45.673-50.96,45.673H338.199c-16.802,0-31.199-14.891-31.199-32.363V334.226h1253.224 L1448.91,922.553z"
            })
        })
    });
};
/* harmony default export */ const icons_BasketIcon = (BasketIcon);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./Components/layout/header/components/basket/BasketItem.jsx
var BasketItem = __webpack_require__(5383);
// EXTERNAL MODULE: ./Components/layout/header/components/basket/BasketListHeder.jsx
var BasketListHeder = __webpack_require__(4594);
;// CONCATENATED MODULE: ./Components/layout/header/components/basket/BasketContainer.jsx






const BasketContainer = ()=>{
    const router = (0,router_.useRouter)();
    const confirmHandler = ()=>{
        router.push("/cart");
    };
    const shopingCtx = (0,external_react_.useContext)(ShopingStore/* ShopingStore */.j);
    const clearCartHandler = ()=>{
        shopingCtx.clearCart();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "header-basket-container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-basket-list",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BasketListHeder/* default */.Z, {}),
                    shopingCtx.cartItems && shopingCtx.cartItems.map((item)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(BasketItem/* default */.Z, {
                            item: item
                        }, item.id);
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-basket-action",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: confirmHandler,
                        className: "header-basket-confirmBtn",
                        children: "confirm"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: clearCartHandler,
                        className: "header-basket-clearBtn",
                        children: "clear List"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const basket_BasketContainer = (BasketContainer);

;// CONCATENATED MODULE: ./Components/layout/header/components/basket/Basket.jsx
/* eslint-disable @next/next/no-img-element */ 




const Basket = ()=>{
    const basketRef = (0,external_react_.useRef)();
    const { 0: isShow , 1: setIsShow  } = (0,external_react_.useState)(false);
    const { 0: totalAmount , 1: setTotalAmount  } = (0,external_react_.useState)(0);
    const shopingCtx = (0,external_react_.useContext)(ShopingStore/* ShopingStore */.j);
    const showContainerHandler = ()=>{
        setIsShow(!isShow);
    };
    (0,external_react_.useEffect)(()=>{
        setTotalAmount((prev)=>{
            return prev = shopingCtx.calcTotal();
        });
    }, [
        shopingCtx
    ]);
    // useEffect(() => {
    //   const closeBasket = (e) => {
    //     if (
    //       e.explicitOriginalTarget !== basketRef.current &&
    //       e.target.parentElement.explicitOriginalTarget !== basketRef.current
    //     ) {
    //       setIsShow(false);
    //     }
    //   };
    //   document.body.addEventListener("click", closeBasket);
    // }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: basketRef,
        onClick: showContainerHandler,
        className: "header-basket",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(icons_BasketIcon, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: totalAmount.totalAmount
                })
            }),
            shopingCtx.cartItems.length > 0 && isShow && /*#__PURE__*/ jsx_runtime_.jsx(basket_BasketContainer, {})
        ]
    });
};
/* harmony default export */ const basket_Basket = (Basket);

;// CONCATENATED MODULE: ./Components/layout/header/components/log.jsx



const Log = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "header-log",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-log-login",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/login",
                    children: "Login"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "/"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-log-signup",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/signup",
                    children: "SignUp"
                })
            })
        ]
    });
};
/* harmony default export */ const log = (Log);

;// CONCATENATED MODULE: ./Components/layout/header/components/logo.jsx



const Logo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "header-logo",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "header-logo-text",
                children: "Taraneh"
            })
        })
    });
};
/* harmony default export */ const logo = (Logo);

;// CONCATENATED MODULE: ./Components/layout/header/components/navLinks.jsx



const NavLinks = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "header-navLinks",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "header-navLinks-item",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/Shop",
                    children: "Shop"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "header-navLinks-item",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/Blog",
                    children: "Blog"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "header-navLinks-item",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/manager",
                    children: "Manage Orders"
                })
            })
        ]
    });
};
/* harmony default export */ const navLinks = (NavLinks);

;// CONCATENATED MODULE: ./Components/layout/header/components/searchBox.jsx



const SearchBox = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "header-searchBox",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "header-searchBox-label",
                htmlFor: "searchInput",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/icons/search.svg",
                    width: 10,
                    height: 15,
                    alt: "searchBtn"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: "header-searchBox-input",
                type: "text",
                id: "searchInput"
            })
        ]
    });
};
/* harmony default export */ const searchBox = (SearchBox);

;// CONCATENATED MODULE: ./Components/layout/header/header.jsx







const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(logo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(basket_Basket, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(navLinks, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(searchBox, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(log, {})
        ]
    });
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ShopingStore/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,867,383], () => (__webpack_exec__(1988)));
module.exports = __webpack_exports__;

})();