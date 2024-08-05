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

  font-size: 16.5px !important;
  max-width: 95% !important;
  width: 95% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
  letter-spacing: 0.075em !important;
  font-size-adjust: 0.58 !important;
  text-align: justify!important;
  text-justify: inter-word !important
  color: #e4e6eb !important

}

p.break-words,.incontent p,dfn+div p {

  font-size: 16.5px !important;
  max-width: 95% !important;
  width: 95% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
  letter-spacing: 0.075em !important;
  font-size-adjust: 0.58 !important;
  text-align: justify!important;
  text-justify: inter-word !important

}

.incontent h2 {

font-weight: bold !important;
color: #e4e6eb !important

}

  `;
  document.head.appendChild(style);
}());
