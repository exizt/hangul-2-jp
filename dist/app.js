(()=>{"use strict";var e={618:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.bind=void 0;const n=o(311);function r(e,t,o){var n;null===(n=document.querySelector(e))||void 0===n||n.addEventListener(t,o)}t.bind=function(e,t){const o=t.selector,c=t.options;function a(){!function(e,t){const o=t.selector,n=document.querySelector(o.input).value,r=e.translate(n,t.options),c=document.querySelector(o.output);null!=c&&(c.textContent=r)}(e,t)}r(o.input,"input",a),Object.keys(c).forEach(((e,t)=>{r(o[e],"change",(t=>{c[e]=t.target.checked,a()}))})),r(o.copyBtn,"click",(e=>{var t;e.preventDefault();const r=document.querySelector(o.output);null!=r&&(0,n.copyToClipboard)(null!==(t=r.textContent)&&void 0!==t?t:"")}))}},311:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.copyToClipboard=void 0,t.copyToClipboard=e=>{navigator.clipboard?function(e){navigator.clipboard.writeText(e).catch((e=>console.error(`Error copying to clipboard: ${e}`)))}(e):function(e){var t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select();try{document.execCommand("Copy")}catch(e){console&&console.log(e)}document.body.removeChild(t)}(e)}},981:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Hangul2Japanese=void 0,t.Hangul2Japanese=class{constructor(){this.prepare()}translate(e,t){let o="";const n=["","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],r=["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ"];for(let t of e){let e=t.charCodeAt(0)-44032,c=e%28;if(c<0){o+=t;continue}let a=t;c>0&&(a=String.fromCharCode(t.charCodeAt(0)-c));let i=a,l=~~(e%588/28);if("ㅑ"==r[l]||"ㅠ"==r[l]||"ㅛ"==r[l]){let e=a.charCodeAt(0)-28*l+560;i=String.fromCharCode(e),"이"!=i?(o+=this.convertChar(i),"ㅑ"==r[l]?o+="ゃ":"ㅠ"==r[l]?o+="ゅ":"ㅛ"==r[l]&&(o+="ょ")):o+=this.convertChar(a)}else o+=this.convertChar(a);c>0&&("ㄴ"==n[c]||"ㅇ"==n[c]?o+="ん":"ㄱ"!=n[c]&&"ㄷ"!=n[c]&&"ㅂ"!=n[c]&&"ㅅ"!=n[c]||(o+="っ"))}return o}prepare(){const e={あ:["아"],い:["이"],う:["우"],え:["에"],お:["오"],か:["카","까"],き:["키","끼"],く:["쿠","꾸"],け:["케","께","캐","깨"],こ:["코","꼬"],さ:["사","싸"],し:["시","씨"],す:["수","스","쑤","쓰"],せ:["세","새","쎄","쌔"],そ:["소","쏘"],た:["타","따","차"],ち:["티","띠","치"],つ:["투","트","뚜","뜨","추","츠"],て:["테","태","떼","때","체","채"],と:["토","또","초"],な:["나"],に:["니"],ぬ:["누","느"],ね:["네","내"],の:["노"],は:["하"],ひ:["히"],ふ:["후","흐"],へ:["헤","해"],ほ:["호"],ま:["마"],み:["미"],む:["무"],め:["메"],も:["모"],ら:["라"],り:["리"],る:["루"],れ:["레"],ろ:["로"],や:["야"],ゆ:["유"],よ:["요"],わ:["와"],ゐ:["위"],ゑ:["외","왜"],を:["올"],が:["가"],ぎ:["기"],ぐ:["구","그"],げ:["게","개"],ご:["고"],ざ:["자"],じ:["지"],ず:["주","즈"],ぜ:["제","재"],ぞ:["조"],だ:["다"],ぢ:["디"],づ:["두","드"],で:["데","대"],ど:["도"],ば:["바"],び:["비"],ぶ:["부","브"],べ:["베","배"],ぼ:["보"],ぱ:["파","빠"],ぴ:["피","삐"],ぷ:["푸","프","뿌","쁘"],ぺ:["페","패","뻬","빼"],ぽ:["포","뽀"]};let t={};for(let o in e)e[o].forEach((e=>{let n=o;t[e]=n}));this.dict=t}convertChar(e){let t=this.dict;return t.hasOwnProperty(e)?t[e]:e}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}(()=>{const e=o(618),t=o(981);document.addEventListener("DOMContentLoaded",(()=>{const o=new t.Hangul2Japanese;(0,e.bind)(o,{options:{},selector:{input:"#input",copyBtn:"#btn_copyresult",output:"#output"}})}))})()})();