// ==UserScript==
// @name         Font
// @version      0.0.5
// @description  Custom_Font
// @author       TKA
// @license      N/A
// @match        *://*/*
// @exclude       https://*.facebook.com/*
// @exclude       https://*.oasistrek.com/*
// @grant        none
// @run-at      document-start
// @downloadURL     https://static.staticsave.com/auterrykpcss/css-font.css
// @updateURL         https://static.staticsave.com/auterrykpcss/css-font.css
// ==/UserScript==

(function () {
  const style = document.createElement('style');
  style.textContent = `



@import url('https://static.staticsave.com/auterrykpcss/css-font.css');


  `;
  document.head.appendChild(style);
}());
