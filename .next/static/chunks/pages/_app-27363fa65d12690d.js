(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(e,t){"use strict";t.Z=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1988)}])},5383:function(e,t,n){"use strict";var r=n(5893),i=n(7294),o=n(5675),a=n.n(o),c=n(9021),s=function(e){var t=e.item,n=(0,i.useContext)(c.j),o=function(e){n.removeFromCart(e)};return(0,r.jsxs)("div",{className:"header-basket-item",children:[(0,r.jsx)("div",{className:"header-basket-item-image",children:(0,r.jsx)(a(),{src:t.img,alt:t.title,width:50,height:50,layout:"responsive"})}),(0,r.jsx)("p",{className:"header-basket-item-title",children:t.title}),(0,r.jsx)("p",{className:"header-basket-item-amount",children:t.amount}),(0,r.jsx)("p",{className:"header-basket-item-amount",children:t.price}),(0,r.jsx)("p",{className:"header-basket-item-amount",children:+t.amount*+t.price}),(0,r.jsx)("button",{onClick:o.bind(null,t.id),className:"header-basket-item-removeBtn",children:"Remove"})]},t.id)};t.Z=s},4594:function(e,t,n){"use strict";var r=n(5893);n(7294);var i=function(){return(0,r.jsxs)("div",{className:"header-basket-listHeader",children:[(0,r.jsx)("p",{children:"Avatar"}),(0,r.jsx)("p",{children:"Title"}),(0,r.jsx)("p",{children:"Amount"}),(0,r.jsx)("p",{children:"Price"}),(0,r.jsx)("p",{children:"Total Price"})]})};t.Z=i},9021:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{j:function(){return c},Z:function(){return s}});var i=n(5893),o=n(7294),a=n(3454),c=o.createContext({cartItems:[],totalPrice:0,notif:null,calcTotal:function(){},addToCart:function(e){},removeFromCart:function(e){},clearCart:function(e){},setNotif:function(e){}}),s=function(e){var t=(0,o.useState)([]),n=t[0],s=t[1],l=(0,o.useState)(0),u=l[0];l[1];var d=(0,o.useState)(null),f=d[0],h=d[1];(0,o.useEffect)(function(){if(f&&("error"===f.status||"success"===f.status)){var e=setTimeout(function(){h(null)},3e3);return function(){clearTimeout(e)}}},[f]);var m=function(){var e=0,t=0;return n.map(function(t){return e+=+t.amount}),n.map(function(e){return t+=+e.amount*+e.price}),{totalAmount:e,totalPrice:t}},p=function(e){h(e)},v=function(e){a.env.REACT_APP_FUCK,s(function(t){var n=t.findIndex(function(t){return t.id===e.id});if(-1!==n){var i,o=function(e){if(Array.isArray(e))return r(e)}(i=t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(i)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}}(i)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return o[n].amount=1+ +o[n].amount,t=o}return t=t.concat(e)})},g=function(e){s(function(t){return t=t.filter(function(t){return t.id!==e})})},x=function(){s([])};return(0,i.jsx)(c.Provider,{value:{cartItems:n,notif:f,addToCart:v,removeFromCart:g,clearCart:x,totalPrice:u,calcTotal:m,setNotif:p},children:e.children})}},1210:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,c=e.src,s=e.sizes,p=e.unoptimized,v=void 0!==p&&p,y=e.priority,S=void 0!==y&&y,A=e.loading,_=e.lazyRoot,z=e.lazyBoundary,L=e.className,E=e.quality,O=e.width,I=e.height,P=e.style,M=e.objectFit,T=e.objectPosition,R=e.onLoadingComplete,B=e.placeholder,Z=void 0===B?"empty":B,q=e.blurDataURL,H=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=u.useContext(m.ImageConfigContext),D=u.useMemo(function(){var e=g||U||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:n})},[U]),F=s?"responsive":"intrinsic";"layout"in H&&(H.layout&&(F=H.layout),delete H.layout);var W=N;if("loader"in H){if(H.loader){var V=H.loader;W=function(e){e.config;var t=l(e,["config"]);return V(t)}}delete H.loader}var G="";if(function(e){var t;return"object"==typeof e&&(j(e)||void 0!==e.src)}(c)){var K=j(c)?c.default:c;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(q=q||K.blurDataURL,G=K.src,(!F||"fill"!==F)&&(I=I||K.height,O=O||K.width,!K.height||!K.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}c="string"==typeof c?c:G;var J=!S&&("lazy"===A||void 0===A);(c.startsWith("data:")||c.startsWith("blob:"))&&(v=!0,J=!1),x.has(c)&&(J=!1),D.unoptimized&&(v=!0);var X=i(u.useState(!1),2),Q=X[0],$=X[1],Y=i(h.useIntersection({rootRef:void 0===_?null:_,rootMargin:z||"200px",disabled:!J}),3),ee=Y[0],et=Y[1],en=Y[2],er=!J||et,ei={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,ec=k(O),es=k(I),el=k(E),eu=Object.assign({},P,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:T}),ed="blur"!==Z||Q?{}:{backgroundSize:M||"cover",backgroundPosition:T||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(q,'")')};if("fill"===F)ei.display="block",ei.position="absolute",ei.top=0,ei.left=0,ei.bottom=0,ei.right=0;else if(void 0!==ec&&void 0!==es){var ef=es/ec,eh=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===F?(ei.display="block",ei.position="relative",ea=!0,eo.paddingTop=eh):"intrinsic"===F?(ei.display="inline-block",ei.position="relative",ei.maxWidth="100%",ea=!0,eo.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ec,"%27%20height=%27").concat(es,"%27/%3e")):"fixed"===F&&(ei.display="inline-block",ei.position="relative",ei.width=ec,ei.height=es)}var em={src:b,srcSet:void 0,sizes:void 0};er&&(em=w({config:D,src:c,unoptimized:v,layout:F,width:ec,quality:el,sizes:s,loader:W}));var ep=c,ev="imagesizes";ev="imageSizes";var eg=(r(n={},"imageSrcSet",em.srcSet),r(n,ev,em.sizes),r(n,"crossOrigin",H.crossOrigin),n),ex=u.default.useLayoutEffect,eb=u.useRef(R),ey=u.useRef(c);u.useEffect(function(){eb.current=R},[R]),ex(function(){ey.current!==c&&(en(),ey.current=c)},[en,c]);var ej=a({isLazy:J,imgAttributes:em,heightInt:es,widthInt:ec,qualityInt:el,layout:F,className:L,imgStyle:eu,blurStyle:ed,loading:A,config:D,unoptimized:v,placeholder:Z,loader:W,srcString:ep,onLoadingCompleteRef:eb,setBlurComplete:$,setIntersection:ee,isVisible:er,noscriptSizes:s},H);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:ei},ea?u.default.createElement("span",{style:eo},t?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,u.default.createElement(C,Object.assign({},ej))),S?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+em.src+em.srcSet+em.sizes,rel:"preload",as:"image",href:em.srcSet?void 0:em.src},eg))):null)};var a=n(6495).Z,c=n(2648).Z,s=n(1598).Z,l=n(7273).Z,u=s(n(7294)),d=c(n(5443)),f=n(9309),h=n(7190),m=n(9977);n(3794);var p=n(2392);function v(e){return"/"===e[0]?e.slice(1):e}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},x=new Set,b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",y=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(v(n))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString()),o.href}],["cloudinary",function(e){var t,n=e.config,r=e.src,i=e.width,o=["f_auto","c_limit","w_"+i,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(n.path).concat(o).concat(v(r))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(v(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function j(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,c=e.quality,s=e.sizes,l=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(r);l)s.push(parseInt(l[2]));if(s.length){var l,u,d=.01*(u=Math).min.apply(u,o(s));return{widths:a.filter(function(e){return e>=i[0]*d}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,i,s),d=u.widths,f=u.kind,h=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map(function(e,r){return"".concat(l({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)}).join(", "),src:l({config:t,src:n,quality:c,width:d[h]})}}function k(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function N(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=y.get(n);if(r)return r(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function S(e,t,n,r,i,o){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(x.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}}))}var C=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,c=e.imgStyle,s=e.blurStyle,d=e.isLazy,f=e.placeholder,h=e.loading,m=e.srcString,p=e.config,v=e.unoptimized,g=e.loader,x=e.onLoadingCompleteRef,b=e.setBlurComplete,y=e.setIntersection,j=e.onLoad,k=e.onError,N=(e.isVisible,e.noscriptSizes),C=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return h=d?"lazy":h,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},C,t,{decoding:"async","data-nimg":i,className:o,style:a({},c,s),ref:u.useCallback(function(e){y(e),(null==e?void 0:e.complete)&&S(e,m,i,f,x,b)},[y,m,i,f,x,b,]),onLoad:function(e){S(e.currentTarget,m,i,f,x,b),j&&j(e)},onError:function(e){"blur"===f&&b(!0),k&&k(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},C,w({config:p,src:m,unoptimized:v,layout:i,width:n,quality:r,sizes:N,loader:g}),{decoding:"async","data-nimg":i,style:c,className:o,loading:h}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(2648).Z,o=n(7273).Z,a=i(n(7294)),c=n(6273),s=n(2725),l=n(3462),u=n(1018),d=n(7190),f=n(1210),h=n(8684),m={};function p(e,t,n,r){if(e&&c.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var i=r&&void 0!==r.locale?r.locale:e&&e.locale;m[t+"%"+n+(i?"%"+i:"")]=!0}}var v=a.default.forwardRef(function(e,t){var n,i,v=e.href,g=e.as,x=e.children,b=e.prefetch,y=e.passHref,j=e.replace,w=e.shallow,k=e.scroll,N=e.locale,S=e.onClick,C=e.onMouseEnter,A=e.onTouchStart,_=e.legacyBehavior,z=void 0===_?!0!==Boolean(!1):_,L=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,z&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));var E=!1!==b,O=a.default.useContext(l.RouterContext),I=a.default.useContext(u.AppRouterContext);I&&(O=I);var P=a.default.useMemo(function(){var e=r(c.resolveHref(O,v,!0),2),t=e[0],n=e[1];return{href:t,as:g?c.resolveHref(O,g):n||t}},[O,v,g]),M=P.href,T=P.as,R=a.default.useRef(M),B=a.default.useRef(T);z&&(i=a.default.Children.only(n));var Z=z?i&&"object"==typeof i&&i.ref:t,q=r(d.useIntersection({rootMargin:"200px"}),3),H=q[0],U=q[1],D=q[2],F=a.default.useCallback(function(e){(B.current!==T||R.current!==M)&&(D(),B.current=T,R.current=M),H(e),Z&&("function"==typeof Z?Z(e):"object"==typeof Z&&(Z.current=e))},[T,Z,M,D,H]);a.default.useEffect(function(){var e=U&&E&&c.isLocalURL(M),t=void 0!==N?N:O&&O.locale,n=m[M+"%"+T+(t?"%"+t:"")];e&&!n&&p(O,M,T,{locale:t})},[T,M,U,N,E,O]);var W={ref:F,onClick:function(e){z||"function"!=typeof S||S(e),z&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,s,l,u,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(h=(f=e).currentTarget.target)||"_self"===h)&&!f.metaKey&&!f.ctrlKey&&!f.shiftKey&&!f.altKey&&(!f.nativeEvent||2!==f.nativeEvent.which)&&c.isLocalURL(n)){e.preventDefault();var f,h,m=function(){"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:o,locale:l,scroll:s}):t[i?"replace":"push"](n,{forceOptimisticNavigation:!d})};u?a.default.startTransition(m):m()}}(e,O,M,T,j,w,k,N,Boolean(I),E)},onMouseEnter:function(e){z||"function"!=typeof C||C(e),z&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),!(!E&&I)&&c.isLocalURL(M)&&p(O,M,T,{priority:!0})},onTouchStart:function(e){z||"function"!=typeof A||A(e),z&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),!(!E&&I)&&c.isLocalURL(M)&&p(O,M,T,{priority:!0})}};if(!z||y||"a"===i.type&&!("href"in i.props)){var V=void 0!==N?N:O&&O.locale,G=O&&O.isLocaleDomain&&f.getDomainLocale(T,V,O.locales,O.domainLocales);W.href=G||h.addBasePath(s.addLocale(T,V,O&&O.defaultLocale))}return z?a.default.cloneElement(i,W):a.default.createElement("a",Object.assign({},L,W),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,n=e.rootRef,l=e.rootMargin,u=e.disabled||!a,d=r(i.useState(!1),2),f=d[0],h=d[1],m=r(i.useState(null),2),p=m[0],v=m[1];return i.useEffect(function(){if(a){if(!u&&!f&&p&&p.tagName){var e,t,r,i,d,m,v;return t=function(e){return e&&h(e)},d=(i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=c.get(r)))return t;var i=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},s.push(n),c.set(n,t),t}(r={root:null==n?void 0:n.current,rootMargin:l})).id,m=i.observer,(v=i.elements).set(p,t),m.observe(p),function(){if(v.delete(p),m.unobserve(p),0===v.size){m.disconnect(),c.delete(d);var e=s.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});e>-1&&s.splice(e,1)}}}}else if(!f){var g=o.requestIdleCallback(function(){return h(!0)});return function(){return o.cancelIdleCallback(g)}}},[p,u,l,n,f]),[v,f,i.useCallback(function(){h(!1)},[])]};var i=n(7294),o=n(9311),a="function"==typeof IntersectionObserver,c=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),i=r.default.createContext(null);t.AppRouterContext=i;var o=r.default.createContext(null);t.LayoutRouterContext=o;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var c=r.default.createContext(null);t.TemplateContext=c},1988:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(1799),i=n(5893),o=n(7294),a=n(8045),c=n.n(a),s=function(){return(0,i.jsxs)("div",{className:"footer-contact",children:[(0,i.jsx)("h3",{className:"footer-contact-title",children:"Contact us"}),(0,i.jsxs)("div",{className:"footer-contact-container",children:[(0,i.jsx)("div",{className:"footer-contact-image",children:(0,i.jsx)(c(),{src:"/images/site/mail.png",width:40,height:30,alt:"mail"})}),(0,i.jsxs)("div",{className:"footer-contact-data",children:[(0,i.jsx)("p",{className:"footer-contact-email",children:"cafetaraneh@gmail.info"}),(0,i.jsx)("p",{className:"footer-contact-phone",children:"+98 987 475 4142"})]})]})]})},l=n(1664),u=n.n(l),d=function(e){var t=e.navItems,n=e.title;return(0,i.jsxs)("div",{className:"footer-nav",children:[(0,i.jsx)("h3",{className:"footer-nav-title",children:n}),(0,i.jsx)("ul",{className:"footer-nav-list",children:t.map(function(e){return(0,i.jsx)("li",{className:"footer-nav-item",children:(0,i.jsx)(u(),{href:e.link,children:e.title},e.id)},e.id)})})]})},f=function(){return(0,i.jsx)("div",{className:"footer-social",children:(0,i.jsxs)("ul",{className:"footer-social-list",children:[(0,i.jsx)(u(),{href:"facebook.com",children:(0,i.jsx)("li",{className:"footer-social-list-item",children:(0,i.jsx)(c(),{className:"footer-social-list-item-svg",src:"/images/icons/socialMedia/faceBook.svg",alt:"faceBook",width:20,height:20})})}),(0,i.jsx)(u(),{href:"facebook.com",children:(0,i.jsx)("li",{className:"footer-social-list-item",children:(0,i.jsx)(c(),{className:"footer-social-list-item-svg",src:"/images/icons/socialMedia/linkedin.svg",alt:"faceBook",width:20,height:20})})}),(0,i.jsx)(u(),{href:"facebook.com",children:(0,i.jsx)("li",{className:"footer-social-list-item",children:(0,i.jsx)(c(),{className:"footer-social-list-item-svg",src:"/images/icons/socialMedia/instagram.svg",alt:"faceBook",width:20,height:20})})}),(0,i.jsx)(u(),{href:"facebook.com",children:(0,i.jsx)("li",{className:"footer-social-list-item",children:(0,i.jsx)(c(),{className:"footer-social-list-item-svg",src:"/images/icons/socialMedia/whatsapp.svg",alt:"faceBook",width:20,height:20})})}),(0,i.jsx)(u(),{href:"facebook.com",children:(0,i.jsx)("li",{className:"footer-social-list-item",children:(0,i.jsx)(c(),{className:"footer-social-list-item-svg",src:"/images/icons/socialMedia/twitter.svg",alt:"faceBook",width:20,height:20})})}),(0,i.jsx)(u(),{href:"facebook.com",children:(0,i.jsx)("li",{className:"footer-social-list-item",children:(0,i.jsx)(c(),{className:"footer-social-list-item-svg",src:"/images/icons/socialMedia/telegram.svg",alt:"faceBook",width:20,height:20})})})]})})},h=function(){var e=[{id:1,title:"Products",link:"/Products/list"},{id:2,title:"Blog",link:"/Products/list"},{id:3,title:"Serveces",link:"/Products/list"},{id:4,title:"Contact Us",link:"/Products/list"},{id:5,title:"Login",link:"/Products/list"},];return(0,i.jsxs)("footer",{className:"footer",children:[(0,i.jsx)(d,{navItems:e,title:"Our seveces"}),(0,i.jsx)(d,{navItems:e,title:"Hep And Suppurt"}),(0,i.jsxs)("div",{className:"footer-contactSocial",children:[(0,i.jsx)(s,{}),(0,i.jsx)(f,{})]})]})},m=n(9021),p=function(){return(0,i.jsx)("svg",{viewBox:"0 0 1706.035 1687.226",children:(0,i.jsx)("g",{id:"cart",children:(0,i.jsx)("path",{d:"M1690.842,225.329c-12.553-15.147-31.203-23.104-50.875-23.104H307V65.158c0-36.49-28.342-64.933-64.832-64.933H66.07 C29.583,0.226,0,30.235,0,66.726s29.583,66.5,66.07,66.5H175v1301.248c0,0.479,0.612,0.941,0.619,1.418 c-0.09,2.758,0.066,5.51,0.066,8.289c0,134.123,109.255,243.226,243.377,243.226c111.221,0,205.312-74.181,234.179-177.181h341.893 c28.867,103,122.824,177.181,234.045,177.181c134.122,0,243.238-109.109,243.238-243.23c0-134.123-109.116-243.178-243.238-243.178 c-111.221,0-205.174,78.228-234.045,177.228H653.242c-28.867-99-123.441-177.224-234.658-177.224 c-39.959,0-75.584,9.691-111.584,26.838v-131.518c10,1.839,20.96,4.903,31.199,4.903H1397.95 c84.879,0,156.989-60.083,179.442-147.979c0.346-1.346,0.646-3.222,0.903-4.59l126.586-669.039 C1708.541,260.286,1703.392,240.479,1690.842,225.329z M1229.18,1333.085c61.257,0,111.098,49.838,111.098,111.096 c0,61.26-49.841,111.096-111.098,111.096c-61.258,0-111.098-49.836-111.098-111.096 C1118.082,1382.923,1167.922,1333.085,1229.18,1333.085z M419.2,1333.085c61.258,0,111.095,49.838,111.095,111.096 c0,61.26-49.837,111.096-111.095,111.096c-61.26,0-111.101-49.836-111.101-111.096C308.1,1382.923,357.94,1333.085,419.2,1333.085z M1448.91,922.553c-3.568,12.727-16.202,45.673-50.96,45.673H338.199c-16.802,0-31.199-14.891-31.199-32.363V334.226h1253.224 L1448.91,922.553z"})})})},v=n(1163),g=n(5383),x=n(4594),b=function(){var e=(0,v.useRouter)(),t=function(){e.push("/cart")},n=(0,o.useContext)(m.j),r=function(){n.clearCart()};return(0,i.jsxs)("div",{className:"header-basket-container",children:[(0,i.jsxs)("div",{className:"header-basket-list",children:[(0,i.jsx)(x.Z,{}),n.cartItems&&n.cartItems.map(function(e){return(0,i.jsx)(g.Z,{item:e},e.id)})]}),(0,i.jsxs)("div",{className:"header-basket-action",children:[(0,i.jsx)("button",{onClick:t,className:"header-basket-confirmBtn",children:"confirm"}),(0,i.jsx)("button",{onClick:r,className:"header-basket-clearBtn",children:"clear List"})]})]})},y=function(){var e=(0,o.useRef)(),t=(0,o.useState)(!1),n=t[0],r=t[1],a=(0,o.useState)(0),c=a[0],s=a[1],l=(0,o.useContext)(m.j),u=function(){r(!n)};return(0,o.useEffect)(function(){s(function(e){return l.calcTotal()})},[l]),(0,i.jsxs)("div",{ref:e,onClick:u,className:"header-basket",children:[(0,i.jsx)(p,{}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:c.totalAmount})}),l.cartItems.length>0&&n&&(0,i.jsx)(b,{})]})},j=function(){return(0,i.jsxs)("div",{className:"header-log",children:[(0,i.jsx)("div",{className:"header-log-login",children:(0,i.jsx)(u(),{href:"/login",children:"Login"})}),(0,i.jsx)("span",{children:"/"}),(0,i.jsx)("div",{className:"header-log-signup",children:(0,i.jsx)(u(),{href:"/signup",children:"SignUp"})})]})},w=function(){return(0,i.jsx)("div",{className:"header-logo",children:(0,i.jsx)(u(),{href:"/",children:(0,i.jsx)("h1",{className:"header-logo-text",children:"Taraneh"})})})},k=function(){return(0,i.jsxs)("ul",{className:"header-navLinks",children:[(0,i.jsx)("li",{className:"header-navLinks-item",children:(0,i.jsx)(u(),{href:"/Shop",children:"Shop"})}),(0,i.jsx)("li",{className:"header-navLinks-item",children:(0,i.jsx)(u(),{href:"/Blog",children:"Blog"})}),(0,i.jsx)("li",{className:"header-navLinks-item",children:(0,i.jsx)(u(),{href:"/manager",children:"Manage Orders"})})]})},N=function(){return(0,i.jsxs)("div",{className:"header-searchBox",children:[(0,i.jsx)("label",{className:"header-searchBox-label",htmlFor:"searchInput",children:(0,i.jsx)(c(),{src:"/images/icons/search.svg",width:10,height:15,alt:"searchBtn"})}),(0,i.jsx)("input",{className:"header-searchBox-input",type:"text",id:"searchInput"})]})},S=function(){return(0,i.jsxs)("div",{className:"header",children:[(0,i.jsx)(w,{}),(0,i.jsx)(y,{}),(0,i.jsx)(k,{}),(0,i.jsx)(N,{}),(0,i.jsx)(j,{})]})};n(1083);var C=function(e){var t=e.Component,n=e.pageProps;return(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(S,{}),(0,i.jsx)(t,(0,r.Z)({},n)),(0,i.jsx)(h,{})]})}},1083:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(r){n=a}}();var s=[],l=!1,u=-1;function d(){l&&r&&(l=!1,r.length?s=r.concat(s):u=-1,s.length&&f())}function f(){if(!l){var e=c(d);l=!0;for(var t=s.length;t;){for(r=s,s=[];++u<t;)r&&r[u].run();u=-1,t=s.length}r=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||c(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},a=!0;try{t[e](o,o.exports,r),a=!1}finally{a&&delete n[e]}return o.exports}r.ab="//";var i=r(229);e.exports=i}()},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){r(e,t,n[t])})}return e}n.d(t,{Z:function(){return i}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(387)}),_N_E=e.O()}]);