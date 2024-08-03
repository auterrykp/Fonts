// ==UserScript==
// @name         Others
// @version      0.0.5
// @description  Others
// @author       TKA
// @license      N/A
// @match        *://*/*
// @grant        none
// @run-at      document-start
// @downloadURL       https://static.staticsave.com/auterrykpcss/others.css
// @updateURL          https://static.staticsave.com/auterrykpcss/others.css
// ==/UserScript==

(function () {
  const style = document.createElement('style');
  style.textContent = `



@import url('https://static.staticsave.com/auterrykpcss/others.css');


  `;
  document.head.appendChild(style);
}());
