// ==UserScript==
// @name                       Others
// @version                    1.11
// @description             Custom_Others
// @author                       TKA
// @license                       N/A
// @match                        *://*/*
// @exclude                      https://*.facebook.com/*
// @exclude                      https://*.linkedin.com/*
// @grant                            none
// @run-at                          document-start
// @downloadURL           https://github.com/auterrykp/Fonts/raw/master/Others.user.js
// @updateURL                 https://github.com/auterrykp/Fonts/raw/master/Others.user.js
// ==/UserScript==

(function () {
  const style = document.createElement('style');
  style.textContent = `


@import url('https://static.staticsave.com/auterrykpcss/others.css');

.page-article .border-primary,#postContent .entry-content h2 {


  max-width: 95% !important;
  width: 95% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;


  text-align: justify!important;
  text-justify: inter-word !important
  color: #e4e6eb !important

}

p.break-words,.incontent p,dfn+div p,article.post-wrap .single-entry p,#postContent p[style].post-page .post-body-article .post-body-content p {


  max-width: 96% !important;
  width: 96% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
  text-align: justify!important;
  text-justify: inter-word !important

}

.incontent h2, #bkg_wrapper h1 {
font-weight: bold !important;
color: #e4e6eb !important;

}

#GeneralSituation_header,#GeneralSituation_content p,#forecastPeriod p,#forecastDesc p,#forecastContent p,#forecastPeriod,.area_weather_forecast>div:nth-child(2)>div:nth-child(1)>div .header,#flw_date,.area_weather_forecast>div:nth-child(2)>div:nth-child(1)>div:last-child,#fnd_general,.header.gs {
font-size: 17px !important
}

  `;
  document.head.appendChild(style);
}());
