function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");function l(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n={delay:Number(t.currentTarget.elements.delay.value),step:Number(t.currentTarget.elements.step.value),amount:t.currentTarget.elements.amount.value},{delay:o,step:r,amount:s}=n;let u=o;for(let t=1;t<=s;t+=1)l(t,u).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`),console.log(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.warning(`❌ Rejected promise ${t} in ${n}ms`),console.log(`❌ Rejected promise ${t} in ${n}ms`)})),u+=r}));
//# sourceMappingURL=03-promises.209a47ad.js.map
