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

// START

p[style], p,div.article_text, div.excerpt>h2, span.xs-text-black, div._page_._page_1>p, div.article-paragraph:not(b), div.c-read, ._content_.AdAsia *:not(h2,a), .item-page>div>p>span[style], div.contents_post.inner>div[style], div.new-table, .article-paragraph span, div.col-xs-12.col-sm-11.col-md-11.news-detail-content>*>p, #content .container p:not(.post_total_count), div.article-detail-content-container>p, div.wordsnap, #content-main p, div.post-content.entry-content.cf>p, div.content div.paragraph, div#content div.paragraph, .entryBody div.content>div,  #page .post-content p, #main-content .article-content-inner.zoom-md p, #page-wrap p, p font[style], div[data-testid="story-subtitle"], #main .article-detailBlock h3.type-01, #main .article-detailBlock .text, #main .article-detailBlock .layoutBox-01, .expText.expItem, #contents article, .css-q7xgeq li, .css-v9x49a, .vb_postbit, #contents.articles .text, div#topic_contents div.topic-text, .topic-text, #story_body #story_body_content, .card-article .article-box .article-main .article-info .p, section.review-container, #posts .vb_postbit font, .gBjLGB, .type-post p  {

  text-align: justify !important;
  text-justify: inter-word !important

}

p:lang(en), p:lang(la), p:lang(sv), p:lang(fr), p:lang(ja), p:lang(ko) {
  text-align: justify !important;
  text-justify: inter-word !important

}



/*oasis*/
html[xmlns="http://www.w3.org/1999/xhtml"],[lang="zh-Hant"] {
  max-width: 98% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
}

// Display none

@import url('https://static.staticsave.com/auterrykpcss/others.css');


//END

  `;
  document.head.appendChild(style);
}());
