!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o="Expected a function",i=0/0,a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return i;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var o=f.test(e);return o||u.test(e)?l(e.slice(2),o?2:8):r.test(e)?i:+e}n=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),function(e,t,n){var i,a,r,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError(o);function S(t){var n=i,o=a;return i=a=void 0,c=t,f=e.apply(o,n)}function j(e){var n=e-l,o=e-c;return void 0===l||n>=t||n<0||d&&o>=r}function O(){var e,n,o,i=p();if(j(i))return h(i);u=setTimeout(O,(e=i-l,n=i-c,o=t-e,d?g(o,r-n):o))}function h(e){return(u=void 0,m&&i)?S(e):(i=a=void 0,f)}function w(){var e,n=p(),o=j(n);if(i=arguments,a=this,l=n,o){if(void 0===u)return c=e=l,u=setTimeout(O,t),s?S(e):f;if(d)return u=setTimeout(O,t),S(l)}return void 0===u&&(u=setTimeout(O,t)),f}return t=y(t)||0,b(n)&&(s=!!n.leading,r=(d="maxWait"in n)?v(y(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=l=a=u=void 0},w.flush=function(){return void 0===u?f:h(p())},w}(e,t,{leading:i,maxWait:t,trailing:a})};let S=document.querySelector(".feedback-form"),j=document.querySelector('[name="email"]'),O=document.querySelector('[name="message"]');S.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(function(e){let t=JSON.parse(localStorage.getItem("feedback-form-state"))||{};t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t)),console.log("data on input"+t)},500)),S.addEventListener("submit",function(e){e.preventDefault(),console.log(`email: ${j.value} massage: '${O.value}`),j.value&&O.value?(S.reset(),localStorage.removeItem("feedback-form-state")):alert("Будь ласка, заповніть усі поля")}),window.addEventListener("load",function(){let e=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(e),e&&(O.value=e.message?e.message:"",j.value=e.email)})}();
//# sourceMappingURL=03-feedback.79857148.js.map
