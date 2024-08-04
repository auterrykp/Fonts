// ==UserScript==
// @name         Others_v2
// @version      0.11
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

  `;
  document.head.appendChild(style);
}());
