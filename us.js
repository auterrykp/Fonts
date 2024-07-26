// ==UserScript==
// @name        CSS Font
// @namespace   ,
// @match https://*/*
// @match http://*/*
// @author      ogmicco
// @version     1.1
// @description userscript that loads custom css on any webpage
// @license MIT
// @resource    CUSTOM_CSS   https://static.staticsave.com/auterrykpcss/css-font.css
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @match        *://*/*
// @run-at      document-start
// @downloadURL https://update.greasyfork.org/scripts/453830/Custom%20CSS%20Loader.user.js
// @updateURL https://update.greasyfork.org/scripts/453830/Custom%20CSS%20Loader.meta.js
// ==/UserScript==

var cssTxt = GM_getResourceText ("CUSTOM_CSS");
console.log(cssTxt);
GM_addStyle (cssTxt);
