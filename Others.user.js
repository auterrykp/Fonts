// ==UserScript==
// @name         Others
// @version      0.16
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

// START

@import url('https://static.staticsave.com/auterrykpcss/others.css');



//END

  `;
  document.head.appendChild(style);
}());
