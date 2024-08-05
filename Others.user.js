// ==UserScript==
// @name         Others
// @version      0.2
// @description  Custom_Others
// @author       TKA
// @license      N/A
// @match        *://*/*
// @exclude      https://*.facebook.com/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://github.com/auterrykp/Fonts/raw/master/Others.user.js
// @updateURL    https://github.com/auterrykp/Fonts/raw/master/Others.user.js
// ==/UserScript==

(function () {
  const style = document.createElement('style');
  style.textContent = `


@import url('https://static.staticsave.com/auterrykpcss/others.css');

.page-article .border-primary {

font-size: 16px !important

}

p.break-words,.incontent p {

font-size: 17px !important

}

.incontent h2 {

font-weight: bold !important

}

  `;
  document.head.appendChild(style);
}());
