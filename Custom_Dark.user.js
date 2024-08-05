// ==UserScript==
// @name         Custom_Dark
// @version      0.1
// @description  Custom_Dark
// @author       TKA
// @license      N/A
// @match        *://*.hk01.com/*
// @match        *://*.mingpao.com/*
// @match        *://*.am730.com.hk/*
// @match        *://*.menclub.hk/*
// @match        *://menclub.hk/*
// @match        *://*.betterme-magazine.com/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://github.com/auterrykp/Fonts/raw/master/Others.user.js
// @updateURL    https://github.com/auterrykp/Fonts/raw/master/Others.user.js
// ==/UserScript==

(function () {
  const style = document.createElement('style');
  style.textContent = `


  body * {
  text-shadow: none !important;
}

body::-webkit-scrollbar {
  width: 4px;
  height: 5px;
  background-color: #111;
}

body::-webkit-scrollbar-thumb {
  background: #cccccc;
}



* p, span[style], p[style], span.price {
  word-break: normal !important;
}

object, ol, ul, dl, dt, dd, address, del, dfn, strong, em, img, q, samp, b, small, sub, sup, var, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, dialog, figure, figcaption, figsource, header, footer, hgroup, menu, nav, section, mark, select, input, iframe, main, form, script, noscript, time, summary, canvas, details, pre, button:not(.jobsearch-TabbedContent-tab--active), cite, textarea, 
div:not(.jvqc0e-9,.cfxYMc,.xUdfV,.Mu0TI,.ksb,.selector_image_overlay,.knGXIe,.selected,.NlL62b,.uVccjd,.rq8Mwb,.TCA6qd,.oyD5Oc,.WdtDhe,.VrDepf,.s1bzhl41-1,.XOKJuc,.s1bzhl41-0,.dfield,.elementor-post__card,.section-name-container-underscore,.section-name-container,.r-p1n3y5,.swiper-container,.summary_box,.caption-bar,.content-quote,.seemore,.tg-ad,.caption,.caption2,.panel,.date--v2,.c-tabNav,.c-articleItem,.l-header__main,.page-category,.column-tout-info,.caption-a,.post-header,.pre,.sr2-review-list-container,.content-cell-wrapper,.poi-list-cell,.menu-selected,.text-overflowed,.editors-note,.c-read,.post-category,.wa4tvz-0,.LeftnavListRow,.hdtb-msel,.playIcon,.readStatus), 
.swiper-slide a:not(.swiperActive), 
li:not(.isSelected,.menu-item--active,.active,.atclIcn),
span:not(.border-primary,.rQEFy,.D_BN,.Text--white,.yjDirectSLinkHl,.t-h2,[property],[style],.s1abjih8-0,.dropcap,.breadcrumb-title), 
.newsWrap.focusNews *, .mainpage_user_box ul li, .pager td a, .lt_pagination .pages a, ul.listing_filter_option li a, .section_top .heading_width_caption_top, .infeed_fix01 h2, .infeed_fix01_otb h2, .expBottomGridList ul .exp, .template_item:before, .hard-news-unit, .tb .csp-nav a, .row .trading_search_box input, .trading_item_textarea, .col-sm-12.bgcolor div, .FollowCategory__themeList .Grid__item .Icon, a.LocalEMGModule, .article-item .article-bottom:before, .main_nav_level_two ul.nav_selection li a {
  border-color: #353535 !important;
  box-shadow: none !important;
}


code, object, h1:not(.Heading_Heading__63XA_), h2:not(._1ND5d1keXw), h3, h4, h5, h6, ol, ul, li, dl, dt, dd, blockquote, address, del, dfn, strong, em, img, q, samp, b:not(.visible-md-inline), small, sub, sup, var, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, dialog, figure, figcaption, figsource, header, footer, hgroup, menu, nav, section, mark, select, input:not(.quick-search-input-field,.date-input-field), iframe, main, form, script, noscript, time, summary, canvas, details, pre, button:not(.sqdOP,.heading-article__author-item-profile-more), cite, textarea,
a:not(.badge.badge-pill.badge-light,nav *,header *,.nav.categories *,.header-row.justify-content-between *,.btn-white,.masthead__nav-link,._77la,.user,.username,.hot_search_item,.listing_top_button,.cat-info-el,.reply,.sc-kqlzXE,.pagination-button,.popup-modal-dismiss,.spotBtn,.spell_orig,.FPmhX,.notranslate,.xil3i,.favBtn,.sender),
div:not(nav *,header *,.chatAppWrap .chatAppContainer .messageListWrap .messageItem .itemData .itemPrice,.openrice.default-layout-desktop *,.header-row.justify-content-between *,.masthead__nav-link,.button-renderer-text,.knGXIe,.gallery-remarks,.post-category,.upValue,.username,.message_content,.misc,.reg_date,.FAuhyb,.item_price,.gBjLGB,.contents_post,.paragraph,.js-layout-option,[class*="vjs"],.StreamItem__comment,[data-datetime],.r-13gxpu9,.LeftnavListRow--selected,.sb-speech-bubble,[data-v-7bb520ce],.icon,.grid_detail_text,.vb_postbit,.post-excerpt,[data-v-b18e73c2],[data-v-6f295256],.newsLeading,.newsTitle,.page-category,.text,.body-credit,.heading-eyebrow,.margin-8-top,.expText,[data-testid="story-subtitle"],.ranking_number,.ksb,.top-post-item-title,.jvqc0e-10,.newsTime,.article-paragraph,.label,.bullet),
.user_functions .button a, span.restaurant-title-lang2.js-text, span.cJzOGc, .title-link__title-text, .newsDecs>div, .newsWrap>a>div, .homeColMain.homeCatNewsLists div, .sc-gqjmRU.kKsieB, #article-body p a, article.post-wrap .g-single .text, .row .user_functions .button a, .address-info-section .direction, .kv-text a p, .content-quote p, #page .entry-content a, li.StyledIndexAlso-xsqyvb-1 a span, span.t-h2, .small-article .article-header span[data-v-7bb520ce], #requests_jewel ._2ftp ._2ftq span, #bkg_wrapper span[style], aside#poi p, #uamods .yjDirectSLinkHl, li.StreamAnchor__item.is-current a, #body-author .commentList .action .name a, h1.LocalEMG__headerText, span[data-v-5f87d536], #app div.article__title a, #content #spotNews h2, #posts span[data-v-4c0538f5], #main-content .youtube-video-container__footer-title, #main-content p.youtube-video-container__video-title, #main-content p.youtube-video-container__video-duration, #__next p.e8xwya-0, .dable-content-wrapper span[style], span.Text--white, #rcnt h3.LC20lb span, #rcnt .cfxYMc span, #primary.content-area .wp-block-quote p, .text[data-v-51c971ff], div.article-paragraph b, #__layout a[data-v-0cab6c52], #yjnMain p.pickupMain_articleTitle, #app .generic-article__body span, ._1_Xg14kemH p, .D_Ye p.D_cL, .M_yx p.M_bp, #wob_d .ksb.hide-focus-ring.ksbs, .flatpickr-day, .PDfZbf, .CAX6Sd, #react-root li.-V_eO span, #__next span.place-self-center, span.jobsearch-JobInfoHeader-title span,.eu4oa1w0, .mosaic-provider-jobcards .result .resultContent .companyName {
  color: #e4e6eb !important
}


span:not(nav *,header *,.mosaic-provider-jobcards .result .resultContent .companyName,.jobsearch-JobInfoHeader-title *,.eu4oa1w0,.sp-headerRegion, [class*="vjs"],.main_nav_content *,.banner-slider-container *,.header-row.justify-content-between *,.dollars-part,[style],.pl-3,.border-primary,.TqC_a,._7UhW9,.px-2,.masthead__allmenu__row1-link-txt,.masthead__allmenu__row3-link-txt,.masthead__nav-link-txt,[data-tooltip],.VfPpkd-vQzf8d,.CAX6Sd,.PDfZbf,.flatpickr-day,.text-trim,.place-self-center,.DPvwYc,.c1wk3e,.dfTRSJ,._59tg,.offer_counter,.item_tag,[data-v-3856d210],.J0Jt0d,.yzifAd,.prevnext_text,.cX2WmPgCkHi__section-info-text,.pickupMain_media,.Text--white,.sc-EHOje,.igc-legend-label,.article__article-type,[data-v-193bbfe8],[data-v-7638e4bc],[data-v-5f87d536],.recommend,[data-v-45e788e6],.text,.Icon--commentOutline,.StreamItem__commentNumber,.Icon--new,[data-v-f6aceff0],.current,.css-901oao,.LeftnavListRow__text,.t-h2,.icon-tag,.dYnofr,.gvRfTv,.btn-save__text,.sc-gqjmRU,.fz-smaller,[data-v-6f295256],[data-v-b18e73c2],.channelId,.title-link__title-text,.text_exposed_show,.icon-fav-off,.score,.article-btn__text,.u-text-size-S,.post_category,[property=name],.post-post,.localmenu-text,.c-ico__in-label,.global-header__navi-label,.LeftnavListRow__count,.m-r-1,.icon-facebook,.icon-twitter,.icon-line,.s1vt1380-0,.price,.trading_item_price,.original_price,.sell,.wanted,.trading_item_type_tag,.trade_button),
span#wob_tm, #rcnt .w8qArf .fl, .slider-banner-item-titlecard-body, #contents .text, .homepage-module .summary, #sr2-review-container .main-review.tab-content div, #sr2-review-container .main-review.tab-content .review-container, div.newsLeading, figcaption.wp-caption-text, .post-excerpt, .swiper-slide a:not(.swiperActive), time.goWQjX, div.grid_detail_text, #react-root a.zV_Nj, #react-root .r8ZrO, .article-details-type--p[data-v-83913f50], .contents_post.inner, #feedlyPageHolderFX .summary, #feedlyPageHolderFX .EntryMetadata__source-info a, div[data-v-419168a5], #main-content .generic-article__body.article-details-type--p.content--p, #__next .s8gtt4c-0 *, #wob_d .ksb, ._8A5w5, #__next span time,.text-trim,#jobDescriptionText :is(p,li) {
  color: #bbbbbb !important;
}

strong span[style] {
  color: inherit !important;
}

p[style], p,
div.article_text, div.excerpt>h2, span.xs-text-black, div._page_._page_1>p, div.article-paragraph:not(b), div.c-read, ._content_.AdAsia *:not(h2,a), .item-page>div>p>span[style], div.contents_post.inner>div[style], div.new-table, .article-paragraph span, div.col-xs-12.col-sm-11.col-md-11.news-detail-content>*>p, #content .container p:not(.post_total_count), div.article-detail-content-container>p, div.wordsnap, #content-main p, div.post-content.entry-content.cf>p, div.content div.paragraph, div#content div.paragraph, .entryBody div.content>div,  #page .post-content p, #main-content .article-content-inner.zoom-md p, #page-wrap p, p font[style], div[data-testid="story-subtitle"], #main .article-detailBlock h3.type-01, #main .article-detailBlock .text, #main .article-detailBlock .layoutBox-01, .expText.expItem, #contents article, .css-q7xgeq li, .css-v9x49a, .vb_postbit, #contents.articles .text, div#topic_contents div.topic-text, .topic-text, #story_body #story_body_content, .card-article .article-box .article-main .article-info .p, section.review-container, #posts .vb_postbit font, .gBjLGB, .type-post p  {
  color: #bbbbbb !important;
  letter-spacing: 0.075em !important;
  font-size-adjust: 0.58 !important;
  line-height: 1.8 !important;
  text-align: justify!important;
  text-justify: inter-word !important
}

p:lang(en), p:lang(la), p:lang(sv), p:lang(fr), p:lang(ja), p:lang(ko) {
  letter-spacing: 0.05em !important;
  text-align: inherit!important;
  line-height: 1.5 !important;
}

button.timeslot *, p.feature-name--ad, button.favorite-btn, span.selected-post-label , div.detail-page__content>p>a, .post-info>.tags>a, #wrapper>#header>.group *, a.btn--tertiary, .rf-tag.rf-pc-only>dd>a, .rf-icon-ui-tag, ul.mobile_search_list>li>a, a.spotBtn, a.favBtn, span.icon-fav-off, div.sb-speech-bubble, div.sb-speech-bubble>strong, dt.mainhead>strong, dl.twocl>dt, ul.locs>li>a, section>a.external_link, li>a.external_link, .leaflet-popup-content>p>*, .trading_item_type_tag.new, div.l-space-S>a, .l-space-XL.l-dir-c>a, .l-dir-c.side-column-space-r>a, .l-col-6>a, a.comment-user.owner, a.post-tag, a.login-link, div#tabs>a, span.article-btn__text, span.title-city-text, span.js-count, div.c-box-l.c-box-l--gray>*>span, .p-link-category__tag, div.p-all-region-map__link>*>span, p.c-list-thumb__icon__count, a.wifi_button, .pm_write_col2>input#submit_btn, div.article-spot-detail a, dd.category span, h3.ttl, h3.ttl span, h3.ttl p.fontttl, button.favorite-btn>i, .main-content button.favorite-btn, h3.glayBox, div.text.select, div.js-layout-option.extract, span._14va, .rf-tag.rf-small dd a, .rf-pagination li a, .rf-icon-ui-arrowright, li.next em, li.previous em, span.item_tag.confirmed>fa, div.tab-container a[style], #jpmap a, a.dl-ref, .post-tags>a, a.c-btn, a.c-tag__item, .virus-infection-widget .local-real-time-data span, .virus-infection-widget.mobile .serious-location ul li span, #button span#label, .item_btn.item_function_btn, #sh_div *, div.block h3[style], span.global-header__navi-label, span.c-ico__in-label, button.tablinks.active, #page .adj-title, #page .fa-chevron-circle-left, #page .fa-chevron-circle-right, .socials i, nav#header.header.js-feeder.js-navigation div:not(.language-primary,.nearby-city-item-overlay,.nearby-city,.category-title), nav#header.header.js-feeder.js-navigation, .header-userbar span, nav#header .header-userbar-generic-link, nav#header .header-userbar-business-zone-title, #sr2-review-container .text.select, div#app.default-layout-mobile div.carousel-cell-container div, #global-container .js-change-country-link span.text, #content .headLine03, #content .headLine03 a, #helpInfo span.link, #gHeader div span, #spotNews h2, #conts #mainCarousel .outer li a, #conts .parent p, #mainWrap a.plan *, div#contents dd.category span, div.action_button  a, #masthead.site-header .site-description, ul.pt-cv-pagination a, a.o-hashtag.u-gapTop--sm, ul#main-navigation a, #media_image-4 h3, .block-title h3, ul.listing_filter_option li.selected a, li.selected .fa-th-list, .page-switch-active>a, .btn-save__text, .fa-bars:before, #contents .spec .category span, body#blog div#header h2>a, .tm-header-links>ul>li>a, .sb-type-fb>.sb-subtype-a>.sb-content>.sb-speech-bubble, .smallfont.pagenav-pagelink, i.pbfa.fa-reply, i.fas.fa-envelope, ul.pagination>li>a,  #menu #scroller dt.active a, .pix-related-post .relative-item .relative__label-container>a, #yjsmhPremHeaderInner span, #st_sklt1 p.sc-ksYbfQ, #st_sklt section .sc-ksYbfQ, .pagination_item a, [data-v-193bbfe8], [data-v-7638e4bc].topic__title, #main-content .article>.wrapper .head .info a *, a.c-tag.u-font-sans, span.sc-EHOje.bYNBhi, #wrapper .pickupFloatingReadMore span, #contents .button-normal.button-full span, #lp_top_setting span.title, .tour-details a, .tour-details i, .gt_pagination .pages a.disabled span, span.yzifAd.w9eXqe, .dfTRSJ, ._3bkjUwMrO4 p, #yjnMain li.pagination_item a, .D_K_ p, .M_MI p, #app .carousel-cell-container div, div.ifwtOb.elYzab-cXXICe-Hjleke.NlL62b.xHTz8b div:not(.smECzc) span.yzifAd, .place-self-center, .flatpickr-day.disabled, #body .attachlist li a, input.date-input-field  {
  color: #353535 !important;
}

div.score>.value, .meta-category>a, span.meta>a, div.meta>a, span.more.js-more>a, span.text-collapsed, span.st>.f, div.newsTime, p.article-list__item-new, div.slp.f, a.on, div.newsTime, .square-tag>a, .no-link.float-left>h2, .channel_admin_left_menu ul li > a i, #more_function_btn, #global-container div.title, #global-container .read-more-btn div.text {
  color: #ff830b !important;
}

div.jvqc0e-10.ijibJW, a.dl-ref strong, ul.locationBl.tagBl a, span.wanted, .el-icon-arrow-down, div.jvqc0e-10.ijibJW, .home .block-title h3, .contentIndex button.toggle, span.icon-tag:before, #page ._5ayu, #page ._5aw4, #page ._5rgt a[data-sigil], #page span[data-sigil] a, #tabs .tabWrap li.selected, ._15ks ._77la._77la, a.notranslate, a.xil3i, #react-root .oW_lN.sqdOP, .sXUSN, #contents .button-simple.button-middle span, .widget_topics_wrapper .answer a, a#moreBtn span, #uamods .pagination_item a, footer#ft.ft *, .sc-cmTdod.ebrcOn, .StreamItem__author, a[data-v-3cc7eb88], #fprsl em, .elementor-heading-title, #__next .cb1g7d-0.faBCNg, #main-content .article-author__name-link, #main-content .main-info__name a, #islsp .So4Urb, #islsp .pM4Snf, a._3aR1Wl7JOyOEug4F-C-ZyI, p.sw-Card__summary b, section#tabpanelTopics1 a.yMWCYupQNdgppL-NV6sMi, span.s1vt1380-0, span.igc-legend-label, CITE.O9jggTRv0zy3XcPayfJLa, #yjnSub h2, #st_topics span.Text--heading.Text--bold, .card-article .article-box .article-main .tag-list a, #wrapper .pickupMain_comment span:before, #wrapper .pickupMain_comment span, .articleHeader_comment span:before, #comment-count span.count, #xDtlDlgCt span:not([role],.cHB8o,.NPEfkd), a.xil3i, a.FPmhX, a.notranslate, a#fprsl, a.spell_orig, #__next .knGXIe, #react-root .-vDIg a, #app .standalone-collection-badge a, .b1w61vrq ol li+li:before, ._7UhW9 {
  color: #49b6fc !important;
  border: none !important;
}

.LeftnavListRow__count, .m-r-1.ago, a.fx-button.full-width {
  color: #2bb24c !important;
  border: none !important;
}

a.text-yellow {
  color: #ffcc00 !important;
}

code {
  word-break: break-all !important;
}

span.s15r5oe8-0>a:link, h4.highlightsearchword>*>a, .txt8>*>strong, .entry-content.clearfix>p>a, div#zi_ad_article_inread>p>a, p.user>a, li.subnav>a, button.favorite-btn, a.u-text-underline, div.remark>a, p.wp-caption-text>a, #page-headline>ul>li>a, div.articleContent>ol>li>a, div.articleContent>p>a, main#main>article>ul>li>a, .meta>.category>a, div.pm_read_content.clear a, div.username>a, a.source, #rcnt .wUrVib, span.dtviD, span.irc_ho, div.trading_nav>a:nth-child(n+4), li>a.current, span.fn>a, a.fontBlack, a.t-underline, .textLink, p.body-color1.body-align1.font3 a, a.article-toc__link.js-in-page-link, .article-title-index a, .mobile_margin.feature_news a, .entry-content table a, .txt8 strong, .article-detail-content-container a, article .contentTags-container .hotkey-container>a, div.single-tag-wrap a, .RJn8N.xXEKkb.ellip, .mw-parser-output a, .breadcrumbs>span:not(.post), .story-body__list-item a, .bsqBFG.bsqBFG.bsqBFG a, .entryBody a, .article-paragraph a, .single_post a, .breadcrumb-title, a.article-related__link, ._3mZqi3jS p a, .Zi_ad_ar_iR a, div.entry-meta a, li.trail-item a, #bkg_wrapper span[style], a.color_mpf, #article-body p a, .tags-links a, .l-main .article-body a:not(.article-page-link), li.StyledIndexAlso-xsqyvb-1 a, .post-header .post-title a, .vb_postbit a font, #uamods .sc-eLExRp.kreeKV a, #uamods .sc-eLExRp.kreeKV span, #app [data-v-5f87d536].text, #story_body_content p strong, .elementor-widget-container aside a, .elementor-widget-container p  a, a.elementor-post__read-more, a.related-topic__link, #uamods p a, #__next .cCbDYQ.kmu899-0.joPHps .elEVOE a, #__next p .elEVOE a, #__next .cmp-link.mb-3 a, #article-v2-title-section span.cmp-link a, .cmp-link.text-blue-500 a strong {
  text-decoration: none !important;
  border-bottom: 0.75px dashed #7c95a8 !important
}

#__next span.jvqc0e-7.fTYKBn.s1nfazpo-0.gaLEyK a:visited div, div.listing-title>a:visited, div.title>h2>a:visited, div.article-t>h4>a:visited, .p-article-module__category__list__item__text>a:visited, p.c-typo-m>a:visited, .article-item__info>a:visited, h4.pt-cv-title>a:visited, h2.entry-title>a:visited, h5.card-title>a:visited, .fp_list_each>div>h3>a:visited, h3.my-post-title>a:visited, #maincontent_container a:visited:not(.news2023_mega-content_row_item):not(.news2023_btn a), #maincontent_container #box-container a:visited, div.media-body.pull-left>p>a:visited, #news-container, li>a.exp:visited div, ul#articleContainer a:visited h3, div#grid_content a:visited div, div.post-summary a:visited h3, li a:visited p, li a:visited h3, li a:visited h2, li a:visited dd.title, ul a:visited span.line-clamp--row-2, div a:visited .entry-title, div.container a:visited h3, li a:visited .title, div.card-block.card-detail a:visited span, ul.recommendArticleList a:visited, div.content>a.title:visited, dd.title>a:visited, #rcnt a:visited .LC20lb, h2.title-name>a:visited, .media-body.txt6>p>a:visited, .sc-htoDjs.hbsase:visited, li.subnav a:visited, .story-body__list-item a:visited, .entry-content p a:visited, .article-detail-content-container avisited, #__next .s1mjzhph-0 a:visited, div.content>*>a:visited, a.title.clearfix:visited, #content-grid .newsTitle a:visited div, #content-grid .columnTitle a:visited div, .article-paragraph a:visited, #newsListSwipe a:visited .newsTitle, .homepage-module .column-tout .headline a:visited, .Zi_ad_ar_iR a:visited, .pageSection a:visited .newsTitle, ol#hotNewsList a:visited .title, a:visited .title-link__title-text, #content-grid .text-overflowed .ablack:visited, #bkg_wrapper a:visited span[style], #article-body p a:visited, .post-title.is-small-title > a:visited, .art-btn-text a:visited:not(.text-yellow), .l-main a:visited, #page .entry-content a:visited, li.StyledIndexAlso-xsqyvb-1 a:visited span, #root a.yQgSu:visited, .jeUMCT:visited, .news-pagination a:visited p, #mainWrap li a:visited div, #mainWrap a:visited h1, .post-header .post-title a:visited, #index-latest-article .card-title a:visited span, .col-xs-11.news-columns-article-title.text-overflowed.twoLine a:visited, .vb_postbit a:visited font, #uamods .yjDirectSLinkHl:visited, a.sc-tilXH:visited h1, a.sc-bYSBpT:visited h1, .modTopOriginalPickupArticle_info_articleTitle a:visited, .StreamCategory__body a:visited h1, #app a:visited [data-v-5f87d536]:not(.text), .elementor-widget-container .elementor-post__title a:visited, .elementor-widget-container aside a:visited, #main-content a.article__link:visited, .loop-wrap.clearfix a:visited, #main-content .article__title:visited, #rcnt a:visited h3.LC20lb span, #rcnt a:visited .v0nnCb span, .detail-page-related a:visited, #__next .cCbDYQ.kmu899-0.joPHps .elEVOE a:visited, #__next p .elEVOE a:visited,  #__next .elEVOE.jvqc0e-6.jlpemB a:visited div {
  color: #888888 !important;
  text-decoration: none !important;
}

body a:hover, body a:hover:not(img), body a:active, body a:active:not(img), span.s15r5oe8-0>a:hover, .main-article-web#mobile.article .entry-content a:hover, .entry-content p a:hover, .bsqBFG.bsqBFG.bsqBFG a:hover, div.content>*>a:hover, #__next span.jvqc0e-7.fTYKBn.s1nfazpo-0.gaLEyK a:hover div, #content-grid .newsTitle a:hover div, #content-grid .columnTitle a:hover div, #newsListSwipe a:hover .newsTitle, #__next .s1mjzhph-0 a:hover, .homepage-module .column-tout .headline a:hover, .Zi_ad_ar_iR a:hover, ol#hotNewsList a:hover .title, #bkg_wrapper a:hover span[style], #article-body p a:hover, #page .entry-content a:hover, h2.Heading-sc a:hover, #index-latest-article .card-title a:hover span, #uamods .yjDirectSLinkHl:hover, #main-content a.article__link:hover, a.title:hover, .LeftnavListRow__text:hover, #feedlyFrame a.title:hover, #box-container a:hover, #__next .cCbDYQ.kmu899-0.joPHps .elEVOE a:hover, #__next p .elEVOE a:hover {
  color: #49b6fc !important;
  opacity: 1 !important;
}

div.txt8, div.col-xs-12.col-sm-11.col-md-11.news-detail-content>*>p, div.col-xs-12.news-detail-container>*, .htmlview.clearfix>p, header.post-title.entry-header.cf, .body-color1.body-align1.font3, div.article-header__inner, div.article-body__contents-img-common-col.article-body__contents-img-col>p, div.article-detail-content-container>p, p.catch_txt, .kijiArticle>.articleText, .header-details-wrapper, div.post-content.entry-content.cf>p, div.entry-inner>p, .article-container.article-wrapper>div#article-content>p, div#article-content>div>.article-top, h1.article__title.article__title--single, div._content_.AdAsia>div>p, .article__title__meta.clearfix, .editArea, .small-12.large-8.medium-12.columns.my-main-display>div>h1, .post-view>div.post-info.clearfix, .site-content>article>.entry-content>p, main>article.article>p, .article-body__contents>h2, .article-body__contents>p, .entry-content-wrap>*>h2, article>header.entry-header, img.size-small, .wp-block-quote, h1.post-title.entry-title, div#zi_ad_article_inread, .col-sm-12 h1, .post-category, .floatingEntryContentSlide.sliderWidth, .slideEntryContent img, .entryBody, .story-body__inner p, h1.story-body__h1, h2.story-body__crosshead, div.with-extracted-share-icons, div.column-tout-info, .homeNewsCategory.fullWidth ul li, .art-w65-right-wrap, #ruby-site-content .ruby-page-wrap, #content_topic.show, #wrapper .post-content p, #body-container article h3, .gray_full[data-v-ac77a864], .em-breadcrumbs ul, div.sc-bXGyLb.fzPIri, .sc-cmthru.jVTxIc, .text_greyish-brown.box--margin-top-lg {
  max-width: 96% !important;
  width: 96% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
}

.col-xs-15.col-sm-11.pull-left.main-content, section#news-detail-page,  section.clearfix.main-container, .col-xs-12.headline-box-container.animationBox, div.main-wrapper, div#article-top, article>div.article_row, div.catch_block, p.photo, .mobile_margin.feature_news, div.main-container>#page, div.post-content.entry-content.cf, .article-container.article-wrapper>div#article-content, .entry-content.herald-entry-content, #primary>.site-content>article, .site-content>article>.entry-content, .site.com_content.view-article.no-layout.no-task.itemid-112, div.editArea, .article-body__thumbnail, div.content#article-content>.img-container, div#article-box, div.inner-wrap.clearfix, section>article>div.entry-content, figure>a>img.lazyloaded, a>img.size-medium, div.wp-caption.alignleft, div.article-body__contents-img-block.article-body__contents-img-common-block, img.lazy.js-image-expandable, div.wrapper.singular-section.page-section, center>p.photo>img, div.colx-xs-12.col-md-left.col-lg-left.big_col, img.alignleft.size-full, article.l-article.container .col-lg-8, article.l-article.container .row, div.pad.group, .aligncenter.img-responsive, .side-pd-10.article-detail, .main-inner.group, .gpc-c_l, .colLeft.entry-content, figure.article-inline-photo.large, #news-detail-page .columns-left, .col-md-11.news-detail-content, #post .col, #post .row, .column--primary, .clearfix.main-container, section.container.primary, .columns-left, div.leftSide, .full-article .feature-image img, .q0b9qr-2.ikFOpm, .euLLis, ul.relatedNews,  section.subcontainer, .pt-cv-view, .story-body__inner, #page.configurable.story .story-body, .story-body .full-width, .ruby-block-inner.ruby-container, .article-link-w100, #maincontent .col-sm-12.bgcolor, #page-wrap div#content, .l-article.container, .main-content__first-row, div[data-v-2cbf3c24], .liBCIH.sc-bwzfXH:not(.lmnBxZ), #anchorOffset {
  max-width: 99% !important;
  width: 99% !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
}

div#top>div.container, div.l-unit, #blocks-wrapper .post_content h2, .elementor-column-wrap.elementor-element-populated, .sliderWidth {
  width: 95% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  padding: 0!important;
}

aside#secondary.widget-area, div.article-btn, .article-spot-detail, .article-notice, .s1bzhl41-0.gElGvB, #content.herald-site-content {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

div#zi_ad_article_inread, #bkg_wrapper, .main-content-mobile[data-v-5aa6d99a] {
  width: 98% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
}

article>div.modArticle.tracked_mods, li.js-slider-item {
  width: 97% !important;
  padding: 3%!important;
  MARGIN: 0 AUTO !IMPORTANT;
}

#content-grid p, .wpb_column.columns span[style], .entry-content.cf p, .contentTxt p, #textcontent p, .sc-bdVaJa p:not(.s1bzhl41-1,.e8xwya-0), #RIL_body p, #page-wrap #content .entry p, #postContent p[style], p.bWtIRA, .entryBody .content p, .krkyim, #article .imedia-article p, #infiniteUl p, section.review-container, #mw-content-text p, #main .article-content-inner p, #posts .vb_postbit font, #content .post-content>div>p, .content div.paragraph, #story_body p, .entry-content.single-page p, .entry-content.single-page ul li, [data-v-7bf9283d] .main-article-web#mobile.article .entry-content p, .page-left #content-main p, [data-v-46934846] .entry-content p, div.article-paragraph, section#article p, div.vb_postbit, .card-article .article-box .article-main .article-info .p, #main-wrap .entry-content p, div.css-hl9dz2-GridComponent p, #mm-0.mm-page.mm-slideout p, .entry.single-entry.iframe-loaded p, .bbc-mj7obe.e1cc2ql70, .twocol .article__body p:not(.picsolo-descr), #grid_content span[style], #grid_content span:not(.g_date), .type-post p, div#post-center-col p, div[class*="_page_"] p, div[class*="_page_"], .editArea p, p.bbc-w2hm1d, div.paragraph__column :is(p,span[style]), #td-outer-wrap .td-post-content p, .or-slider-modal .modal-dialog, .txt4 p {

  max-width: 95% !important;
  margin-left: auto !important;
  margin-right: auto !important
}

@media (pointer:fine) {

.post-contents, .story-body, .story-body__introduction, section#news-detail-page, section.clearfix.main-container, .sc-bdVaJa.jLaXBp, .row.post-detail-row.top-padding, .small-12.medium-8.columns,  #primary.content-area, .homeSection.siteWidth, ul#box-container, div.c-content, .floatingEntryContent.sliderContainer, #content-main .content-area, .header-sticky-inner>h1, #outer_wrapper .txt8, #page-wrap div#content, #conts #main, div#blocks-left, #newsDetailsBody, div.news-media, #page.configurable.story .container, .single .site-content, .art-w65-left, ul.story-body__unordered-list, #www_container #content_topic.show #main, .topic_image_file.resize_target.lazyloaded, .cGcGK, #global-container .middle-col, .eJEOHZ, .MxEZm, .v9tJq, .MWDvN {
    max-width: 80% !important;
    width: 80% !important;
    margin-right: auto !important;
    margin-left: auto !important;
    box-sizing: border-box !important;
  }

}

@media (pointer:coarse) {

#__next .s1x15mdy-0.iRqRku.sc-bdVaJa.iHZvIS div, #__next .jSa-dMA div {
  background-color: transparent !important;
}

.features-index-link, .index-features-container {
  max-width: 96% !important;
  width: 96% !important;
  margin-right: auto !important;
  margin-left: auto !important;
}

#page-wrap, #page-wrap #content *, div#bottom-area, #wrapper #blocks-wrapper, #post[data-global-post-id], body>#home {
  max-width: 98% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  box-sizing: border-box !important;
}

.home.page-template-default #page div, div#main.articles, .l-main *, .main-content div:not(.article-content,.row) {
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.feedlyChrome--leftnav-open #feedlyFrame {
  margin-left: 150px !important;
}

.LeftnavList {
  margin-left: 0px !important;
}

.Leftnav__dock.LeftnavDock, #headerBarFX, #feedlyPageFX .header.row {
  display: none !important;
}

}

table:not(.k6t1jb,.nrgt,.igc-table), table[style] {
  overflow-x: scroll;
  max-width: 100vw !important;
  margin: auto !important;
  white-space: normal;
  border-collapse: collapse !important;
}

table::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  background-color: #333;
}

table::-webkit-scrollbar-thumb {
  width: 3px;
  height: 3px;
  background: #cccccc;
}


table:not(.pager,.AaVjTc) td, th, table:not(.pager,.AaVjTc) tbody, thead, tfoot, div.expSpotContent, div.breadcrumb.breadcrumbs, div.category_left, .cell-container, .poi-list-cell, nav.navigation.post-navigation, div.moretoread.animated, div.resultNumber, div.meta-tags>a, ul.item_list>li.clearfix, div.article_intformation, menu.menu.CustomizePageMenu, ul.wordsView a, a.F9PbJd.IJRrpb, dl.rf-grid, div.my-footer-navi a, .post-tags>li>a, button.navbar-toggle, li.filter-tag-item.js-filter-tag-item, div.filter-tag-item-remove-button, div.booking-picker-wrapper, .trading_item_section, #page-headline, .relatedNewsWrap h3, li.open.top-stories-tab a, li.top-stories-tab a, li.links-list__item, ul.u-text-size-reset>li>a, div.content-insert-button>a>h5, .related-question-pair, .kp-blk.c2xzTb.Wnoohf.OJXvsb, #cnt .ccBEnf, div.bbcode-quote-text, ._3tw__eCCe7j-epNCKGXUKk, .tags-list__tags a, div.poi-list-cell, .content-cell-wrapper, .dove-item, .features-and-analysis__story, .c-more > a, .article-body__contents .article-page-link-container, #newsDetailsBody .relatedNews li, .homeNewsCategory.fullWidth ul li, .single-tag-wrap a, div#navbar_container, #story_body blockquote, .FollowCategory__themeList .Icon, .SideMenu__title, #postlist.mainbox.viewthread div {
  background-color: #222222 !important;
}

table:not(.nrgt) {
  border: 0px !important;
}

html,body,
div:not(nav.border-b-line-brawn *,#root #page-header *,.header.header--default *,.message_wrapper .message_item.me *,#postlist.mainbox.viewthread div,#headerInner,.yosegi-FilterPill-pill *,#site-header *,.grid-flow-row *,.mxsg4n-2.brysEE *,#sp_header.header *,.uxixpi-0 *,[class*="vjs"],.video-js *,#www_header_inner *,#www_header_inner,#header.header *,.site-pusher header *,#sink :is(#header,.navigation),.openrice.default-layout-desktop *,.contentTopTitle,.search.ng-scope,[ng-click="onClick($event)"],.bg-slate,.pagetitle,.banner-slider-container *,.user-name,.tp-caption,.tp-mask-wrap,.tp-loop-wrap,.poi-info-title,.usp-h,.usp-h_l,.usp-h_r,.u-drop,.u-drop_li,.nav-button,.left-menu,.jlnpc-photoModal__nav,.WdtDhe,.bcSKBf,.credit,.post-body-content,._aagu,._aagv,._aagw,._aatp,._ab8w,._aabd,.InfographicSideButtonsreact__SideButtonsContainer-sc-1n6smp8-0,.app-bar-middle-search,.counter,.sharetray,.sharetray-row,.btn-search,.backtop,.masthead-inner,.masthead__toggle,.masthead__service,.masthead__nav-link,.masthead__nav-item,._2ic5v,.QBdPU,.player-container,.player-controls-background,.dialog-container,.video-thumbnail-overlay-bottom-group,.player-controls-top,.cbox,.progress-bar-playhead,.progress-bar-playhead-wrapper,.time-display-content,.animation-enabled,.player-controls-middle,.player-controls-bottom,.progress-bar-line,.js-fv-showDelay,.k831u,.title-wrapper,.sc-eZbwru,.bg-black-78,.bottom-0,.main_nav,.main_nav_inner,.main_nav_content,.bg-black-40,.bbc-t0zglt,.bbc-vclsp,.news-arrow-pre,.news-arrow-next,.mobile-header-icon,.social-link-info,.HBUJV,.xUdfV,.Mu0TI,.fZqaup,.zZYga,.EfHg9,._2dDPU,.nf1Jg,.DdSX2,.D_rj,.M_SB,.seller,.buyer,.M_Mu,.D_KC,.M_Gz,.D_rM,.M_yx,.D_Ye,.aZpV8b,.pdYghb,._1YWTWPp6Fa,._3uKfmThPIh,._2AEcdsBkcv,.VaSSwB_YRR,._1_Xg14kemH,._23tfzXazHq,.fWk71PwpP_,.hmjNnf,.JvzZe,.image-gallery-wrapper,.pswp_wrapper,.pswp,.header-nav,.header-hamburger-container,.header-brand,.header-brand__logo,.p_iconHolder,.css-f0nofw-StyledScrollableNav,.css-h6pr6t-NavWrapper,.css-79elbk,.css-1bgrjhf-Banner,.youtube-video-container__cover-image-content-wrapper,.jvqc0e-21,.side_nav_content,.mobile_expandable_div,.fnfjvf,.J2i9Hd,.iduClc,.Y5sE8d,.bojM1c,.lFe10c,.Jmftzc,.NlL62b,.uVccjd,.rq8Mwb,.TCA6qd,.e19J0b,[aria-hidden],.ndJi5d,.azQ4Lc,.WdtDhe,[class~=overlay],.r-urgr8i,.r-1pi2tsx,.tour-gallery-overlay,.tour-overlay-text,.XOKJuc,.Ter3Ue,.pla-unit-hovercard-img-container,.Gor6zc,.RnJeZd,.pla-hovercard-container,._50xr,.article-page-link__inner-aritcle-title,.JSZAJ,[data-v-562278d8],.Checkbox,.dfield,.elementor-post__badge,.elementor-container,.elementor-background-overlay,.elementor-widget-container,.elementor-element,.elementor-widget-wrap,.elementor-column-wrap,.elementor-row,.main-header-bar,.ast-container,.ast-flex,.ast-site-identity,.article-title-index,.picture__layer,[data-v-3a0ea582],[data-v-265de203],.pickupMain_image_text_inner,.yb8pF,.topic__title,.LocalEMG__header,.LocalEMG__headerContents,.LocalEMG__updateTime,.ifwtOb,.g3dbUc,.VideoPlayer__info,.newsFeed_item_overlay,.StreamAnchor__body,.StreamAnchor,.Switch__labels,.Switch__slider,.Switch__sliderRange,.Badge,.SideMenu,.Icon--yahooJapan,.SideMenu__overlay,.page-Top,.Container__overlay,.shortFrame_toggleBtn,.pickupMain_image_text,.pswp__ad,.pswp__top-bar,.pswp__container,.pswp-wrapper,.pswp,.v-photo-swiper,[data-v-8d1ed43c],.RnEpo,.H2hhV,._0ZGP4,.UIujo,.mrV-W,.DWAFP,.r-ipm5af,.jfk-bubble,.jfk-bubble-content-id,.fancybox-overlay,.o7yp84-6,.ZLvMp,.joZjzn,.hiMDLI,.juPLib,.o7yp84-8,._5xu4,.menu-item,.txt1,.featureTopic__image,.badges,.featureTopic__summary,.featureTopic__title,.featureTopic__data,.editor_name,.editor_icon,.iMfYXj,.dPXtDJ,.tm-header-links,.reveal-more,.navSearch,.l-header__top,.l-header__inner,.site-header-main,.site-branding,.tm-navtoggle,.ng-logo-top,.banner-title,.banner-h3,.banner-h2,.artcle-btn-mv,.art-btn-mv-content,.artcle-btn-large,.artile-btn-small,.art-btn-s-content,.navbar-cart,.navbar-cart-icon,.text-black,.kv-text,.mag-index-container,.mag-index-info,.mag-index-link,.video-play-icon,.cube-btn,.video-btn-text,.seemore,.fea-index-text,.section-title-eng,.section-title-cht,.article-link-w100,.section-title,.art-btn-text,.ngm-logo,.navbar-icons,.navbar-search,.navbar-user,.nav-icon,._2mHuuvyV9doV3zwbZPtIPG,.propSelectorField,.sub-menu-wrap,.mega-category-menu,.mega-category-wrap,.mega-category-el,.bg-img,.coronavirus-header,.on-homepage,.video-section,.header-logo-wrap,.header-social-wrap,.header-social-inner,.banner-search-wrap,.header-style-1,.header-wrap,.header-banner-wrap,.is-table,.post-cat-info,.is-cell,.search-area,.hd-homeicon,.drawer-container,.drawer-navbar-header,.tout,.tout-content-wrapper,.tout-content,._3v4aVsDh,._3VbVdCwQ,._5gAsmuy7,._2V2PqJSM,._1C9KFdOH,.livePlayerWrapper,.language-secondary,.option-more-results,.article-page-link__inner-body,.article-page-link__inner,.row-header__container,.primary-links,.menu-box,.column,.jumpstart-video,.column-tout,.component,.video-section,.homepage-module-inverse,.homepage-module-title,.bestPrice,.tt_body,.tt_value,.tt_text_wrap,.tt_text,.screen-reader-chart-image,.igc-content,.inner,.moveable_w,.ig-container,.igc-content,.igc-root,.article-page-link-container,.header-brand__logo,.header-brand,.ttlBox,.caption-a,.caption-wrapper,.KEIzSc,.icon-box,.poi-address,.poi-name,.poi-info-box,.booking-detail-dts,.ads-visurl,.adj-posts,.adj-title,.socials,.main,.innerHeader,.ytp-chrome-controls,.ytp-progress-bar-container,.ytp-chrome-bottom,.ytp-left-controls,.ytp-prev-button,.ytp-right-controls,.ytp-time-display,.nav-dropdown,.c-card__ico,.map__module__btn,.global-header__group,.global-header__body,.global-header__logo,.global-header__area,.global-header__function-item,.global-header__function-item,.global-header__function,.home-kv__caption,.persist-header,.newsDecs,.newsTitle,.newsTime,.di58gc-5,.pswp__caption,.pswp__caption__center,.pswp__zoom-wrap,.pswp__item,.pswp__scroll-wrap,.mm-slideout,.search,.siteNavBarHide,.sticky-wrapper,.affix,.block,.category,.date--v2,.top-header__hamburger,.newsUpdateTime,.di58gc-1,.di58gc-7,.di58gc-6,.di58gc-2,.gu12,.FR,.FL,.sh_block,.PyenC,.mejs-overlay,._3tw__eCCe7j-epNCKGXUKk,._3cjCphgls6DH-irkVaA0GM,._3ezOJqKdLbgkHsXcfvS5SA,.RichTextJSON-root,.bbcode-quote-text,.item_tag,.header-nav-inner,.ruby-container,.header-nav-holder,.header-logo-mobile-wrap,.off-canvas-btn,.nav-search-wrap,.Woharf,.alertNewsWrap,.js-marquee-wrapper,.jw-reset,.js-marquee,.search-logo,.responsive-image__media-and-live-label,.container-fluid,.gic,.vk_sh,.wob_tg,.powa-pane,.newsTypeName,.roundCound,.liveFlashPlayer,.navigation__section--icon,.site-brand-inner,.navigation--primary,.site-brand--height,.mrf,.sld,.st,.s,.Elements__PhotoNavigationWrapper-sc-1e3xy9t-23,.stat,.stat-list,.stat-list-wrapper,.SRYuRe,.first-review-user-info,.first-review-user-photo-container,.tagBox,.tagName,.ytp-chrome-top,.ytp-title-channel,.ytp-title-expanded-overlay,.ytp-title,.ytp-title-text,.s17izavx-2,.button-content,.js-photo-slider-modal,.js-popular-dish-cover,.gallery-overlay,.slider-next-btn,.slider-prev-btn,.youtube,.btn-group,.home-first-post-author,.jvqc0e-24,.jvqc0e-25,.jvqc0e-23,.jvqc0e-22,.jvqc0e-10,.DeluxeTextInputOverlay__overlay,.CustomizePageMenu__section,.header-sticky-inner,.lb-nav,.resultNumber,.active,.select,.caption,.desc,.rating-price,.photo-container,.rating,.category_left_header,.category_left,.topics-txt-page,:empty,.slick-track,.nav-tozanstyle,.herald-login,.header-main,.border-btm,.breadcrumbs,.entry-overlay,.leaflet-popup,.leaflet-popup-content-wrapper,.leaflet-popup-content,.slideBumper,.morebox,.GifImage,.mobile-Tgrid-item-poi-name,.overlay,.grid-slider-item-overlay,.horizontal-card-list-item-img-overlay,.chart-item-overlay,.js-dotdotdot,.pickup-meta-user,.swiper-pagination,.anotrw-9,.anotrw-8,.anotrw-13,.rf-main-visual--title,.image_sequence,.photo_count,.self-host-video,.selector_image_overlay,.price,.review-photo-like-button,p,a,.info-wrapper,.rate-price,.rating,.zoom-logo,.openrice-bookmark-marked,.mobile-overlay,.overlay-text,.s1hlmiuq-2,.sc-gqjmRU,.contentSliderTitle,.new,.article__author-name,.onesignal-bell-launcher-active,._1o0y,.u-pagetop,.tail,.body,.article-item__title,.opening-hours-container,.discount-info-ribbon,.bullet,.d_sr1_badge_new,.has-unit,.time,.timeslot-details,.open-or-closed-status,.open-or-closed-status-container,.owl-dots,.owl-dot,.mobile-slider-grid-item-overlay,.mobile-slider-grid-item-title,.mobile-Tgrid-item-overlay,.username,.lubh-bar,.header-brand-logo,.header-hamburger-container,.header-search-container,.home-banner__content,.home-banner__content_text,.restaurant-badge,.d_sr1_badge_award_20,.timeslot-label,.timeslot-offer,.timeslot-sub-label,.js-text,.gradient,.icon,.or-sprite,.progress-bar,.logo-container-m,.moblie-header-container,.header-wrapper,.header-content_left-block,.header-content_right-block,.swiper-prev,.swiper-next,.pixnavbar__top-bar__shrinking-list,.pixnavbar__top-bar__main-sites,.pixnavbar__top-bar-container,.pixnavbar__top-bar,.post-header,.fixed_nav,.sns-bar,.nopadding,.nav_logo,.newBroadContext,.newBroadTitle,.js-header-logo,.js-header-global,.js-modal-btn,.p-header-global__lang,.indexTop,.back_icon,.share-button,.mobile-menu-btn,.mobile-member,.logo-container,.hOQrUv,.s1lsq47l-5,.expSpotTitle,.language-primary,.blur,.header-bar,.menu_social,.cover-btn-text-2,.cover-btn-text-1,.photo-credit,.logo,.btn_login,.mainvisual_list_content), 
div.article__showmore>a, ol.breadcrumb, a.or-section, .pois-restaurant-list-cell, li>a.clearfix, .widget.picture>figure>cite, .widget.gallery>cite, #news>h2.head-style-underline, fieldset[style], .sectionBgPlane, div.virus__local__title header, .s2pcyr1-0.lcyLIn.iHZvIS, .index-features.under-ads, .index-video, dl#listing.listing, .body[data-v-45e788e6], .article-item-mega .article-bottom > .inner, .article-item .article-bottom:before, #yjnFooter address, .cxVqQX::after, .gb_F, .gb_F a, .sfbg, .s8GCU, header#kO001e, .home-navigation-block-cell, .k831u, #header-bar.sticky-player, .home-template-mobile-navigation-block-cell, #st_topics .TopicArticles_TopicArticles__title__oBd43, .item_action_wrap *,.hamburger-menu-open .hamburger-nav, nav.cmp-nav-bar, .jowXeh, nav.mainHeaderWrap,.breadcrumb-header,.view.poi-list-desktop-container,.layout-main {
  
  background-color: #111 !important

}

nav.hyDZMa,#gnav-burger-menu-nav,
section, 
ol,
header:not(#root #page-header,.header.header--default,#site-header,#header.header, .title-bar,.Lj9fsd,[data-v-d4516e40],.l-header,.clearfix,.site-title,.masthead,.row,.p-header), h2:not(.F262Ye),
footer, 
ul:not(.search_expandable,.siteWidth,.slick-dots,.pixnavbar__top-bar__list,.slides__dots,.navbar-toggle,.p-header-category__nav),
li:not(.Tab_StreamTab__item___sd_M,.StreamTab__item,.LocalEMGModule__label,.pagination_item,.category,.page-switch-active,.parent,[data-v-67ca22e4],.home-tab-item,.selected,.pocket,.hatena,.facebook,.twitter,.line,.google-plus,.filter-tag-item,.caption-container,.presentation,.links-list__item),
article, 
main, 
aside, 
form, 
time,
dl,dt,dd,
button.jobsearch-TabbedContent-tab,.e8ju0x51:not(.css-au3piq,.css-18vfmy2),
span:not(.orflatpickr-day.selected,.e6fjgti1,.nav_function span,.sp-headerRegion,.jvqc0e-6,.unread_icon,.StreamTab__buttonText,.yxhfn8-0,._3npWpRPdR-FAZqe2TuJUlf,.ui-slider-handle,.c1wk3e,.Icon--new,.current,.flatpickr-day,.o-hashtag,.selected-post-label,.item_tag,.cmt-rating-per,.swiper-pagination-bullet,.s1vt1380-0,.confirmed,.icon-bar,.posted-on,.newpost,.article-page-link__title,.m1,.m2,.m3,.m4,.m5,.m6,.m7,.m8,.m9,.m10,.m11,.m12,.m7,.trade_button,.trading_item_type_tag,.discount-text), 
.news2023menu2nd_btn_menu, #dots, .detail, #indicator, .orgdxf, td.col-xs-3, header.clearfix>#logo, div#search, ul.post-tags>li>a, .article-body__contents>h3, h2.pan, div.empty-block, div.common-image-loading.popular-dish-white-block, strong, div.caption, div.rating-price, div.rating, .cell-container, a.rf-grid.rf-grid--6--6, ul.rf-list-items>li, div.breadcrumb.breadcrumbs, article.grid-item.post.type-post.status-publish.format-standard.has-post-thumbnail.hentry, ul.item_list>li.clearfix, header.header.row, a._7tbw.scrollAreaColumn, #trading_item_section div.selector_text, #trading_item_section div.desktop_photo_selector, body p:not(.label), figcaption, figsource, blockquote>p, blockquote>div, blockquote>span, blockquote>a, #mapDiv, #mapDiv *, #global-container div.slider-banner-item-titlecard, #sr1-filters-sort *, #__next .kOMgth>div, table#nav *, #side-column div[style], #center_col td, #videoplayer, #html5Player, #html5Player .video-js, li#ins, li#pns, dt.article-toc__title, div.container-fluid.header-mobile-float, div#member-login, li.newsWrap, #alertNews, div#alertNews, div.container li.on, ol#hotNewsList, a[href*="/home/local?pageNo"], .ZTH1s.cv2VAd, h3.InfoBar, div#__next .jvqc0e-7 div, .nav-dropdown, .pager td a, #body-container .body_middle_top div, #page-wrap #logo, div#header_beforelogin .header_inner div, .btnMore a, .mm-page, .jumpstart-video, div#app ._29Ot5MHL>div, div#app ._29Ot5MHL, div#header-inner, div#header-inner-inn, div#islrg div, div#islsp div, .iHyrQr.iHyrQr .swiper-pagination, #menu>#scroller, .site-container .bg-light, .pm_left_menu ul li a, #root .dPXtDJ div, #root nav.dWucaK div, div#article.contents_post.inner blockquote, #separate_pages ul li a, .menu #menu, .menu.active #menu, #app [data-v-68226f93], [data-v-dc929a28], .huQNLo::after, .Heading--background, .k8XOCe, #stream .PremiumFirst div, .inline_action, div[class~=overlay], #ContentWrapper div:not(._2Px1Gie_uunZ30kLK97hv7), #flourish-popup-constrainer *, #flourish-popup-constrainer, header[data-v-d4516e40]#header div, .pickupMain_articleInfo a:hover, #yjnSub a:hover, #yjnMain a:hover, .mobile_search_box ul.mobile_search_list li a, ul.listing_filter_option li.selected, html#facebook div:not(._2yu9,._2yua,._4sxa,._3paq,._3par), #map-container, #map-container *, .r-1u4rsef, #__next .jvqc0e-6 div, #sp_header_logo, .navigation-icon-with-text-page, #main-wrapper .css-1bgrjhf-Banner *, #__next .o7yp84-6.jTtUyo.fAvBoT div, #root ._1YWTWPp6Fa div, #root ._2YfNe8jFOE div, #wob_d .wob_ds div, .GHDvEf, #__next .di58gc-0.caption-container div, #__next .k6rk9s-2.imoCjF div, #content-grid div div[style], .LeftnavPin__background::before, .LeftnavPin__background::after, .LeftnavPin__background, #main-wrapper .bbc-vclsp.e1wgjeuw2 div, #main-wrapper nav.bbc-1fe3qkx *, .RvYhPd, #player-container-id div:not(.progress-bar-line,.progress-bar-background,.progress-bar-loaded,.progress-bar-played,.progress-bar-playhead-wrapper,.cbox), .left-menu.for-sp div, div#block-sportsoho-content .node__content div, #nav-outdoor,[background-color*="#fff"],.nav-item, a.subCategoryName, a[ng-click*="collectClick"],
a:not(.bx-pager-link,.pagination-button,[class*="btn"],[class*="button"],[ng-app*="retrip"] *,.drawer.drawer--left *,.badge,.logo,.masthead__logo *,ul.nav-pills2 *, .masthead__nav-link), .pagenext_but.right, .pagepre_but.left {
    
  background-color: transparent !important

}


ul.listView a, div#__next .jvqc0e-9 div, .swiper-button-prev, .swiper-button-next, div#__next .jvqc0e-7 div, #global-container div.text, #global-container section.score-promotion-section, #rcnt div.OIL2le, #rcnt .V1Ddwd, li#ca-talk, li#ca-history, li#ca-edit, div.postbutton-row, #myor_tabmenu .subtabs, div#CoverPhoto, #newsDetailsBody, div#page-wrap, a.ab_button, .wrapperBox, .mainvisual-box-wrapper, div.content-quote, footer .inner, .commonFooter__content .links dl dd, nav.pagination, #react-root ._9eogI.E3X2T div:not(._01UL2,._lz6s,.KGiwt,.b5itu,.coreSpriteRightChevron,.coreSpriteLeftChevron,._7XkEo,.Yi5aA,.coreSpriteDropdownArrowWhite), #react-root .xIOBI.xcV9j *, a.LocalEMGModule, .article>.wrapper .contents [data-v-7638e4bc], [data-v-68226f93].article__summary, #main-content .article>.wrapper .details__body.body, #main-content .first-row__package-top.package-top::before, #main-content .opinion-section::before, #main-content .section-content-top div::before, #main-content .wrapper__head div, .post-content blockquote, #rcnt .EDblX.DAVP1 div:not(.Yv4wBf,.Woharf,.g5wfEd,.ZE0LJd,.xCURGd), .Cc3NMb, .ZIxWWd, .mainHead .headFrame::before, .dlpTab nav::after, div#body[role="main"] *, section.article-head .img-bg, #lu_pinned_rhs div:not(.q84rzf,.nH61Dd,._2yu7), .left-right-arrow-shadow, .cG5GOd, #a7 .columnitem2, a.tag.inline-block {
  background: transparent !important;
  background-image: none !important
}

div.mainvisual_list_content>p, div.indexTop>h1, figcaption>h2, h2.topics-txt, a._2suk, div#__next .jvqc0e-9, div#__next .jvqc0e-7, #global-container div.cover, #global-container .js-poi-map-view, #global-container .text-wrapper, 
._2nx_._3jbs, .channel_admin_left_menu ul li > a:hover, .pm_left_menu ul li a:hover, #app .icon-box div, #body-container header.header, div#app ._3mZqi3jSdiv, #menu.fixed, .entry-content .wp-caption-text, .mobile-only.on-homepage, .coronavirus-header, .read-cube-btn, #react-root .KGiwt, #page .ast-main-header-bar-alignment div, #__next .o7yp84-6.jTtUyo.fAvBoT, .aZpV8b, #react-root ._01UL2, #__next .di58gc-0.caption-container, #__next .k6rk9s-2.imoCjF {
  background-color: rgba(34, 34, 34, 0.6) !important
}

blockquote,code,
body table:not(.AaVjTc), body select,
span.e6fjgti1,
input:not(.quick-search-input-field,.confirm_deal,.main_nav_search_button,.search-input,.SearchInput__submit,.search-field,.search_button,.js-datepicker-input,.alertNewsClose,.trading_item_action_button,#submit_btn,.item_function_btn,.trading_search_btn), 
.option-item, div.info-section>.row>a, span.home-nav-quick-search, input.where, input.what, ul.cf>li>a, div.hotkey-container>a, ul.dual-btn>li>a, a.article_link, a.btn-gray, .LhCR5d, .ab_button, p.feature-name--ad, button.zoom-btn, td.second_color, ._484w, .related_trigger, .related_trigger>p.title, .mobile-2x2-grid-silder-item-title.js-dotdotdot, .gNav-cat>a, .MenuListInner>li>a, #menuMore>a, .checkOther, .checkOther>dd>a, p.extracts_, div.dropdown, span.comment-copy, pre, textarea:not(.Ypffh), ul#postHeadBtns>li>button.favorite-btn, div#page-headline>ul, div.category_left_header, ul.remark>li, p[style].has-text-color.has-background, ul.search_expandable.clear a:hover, dl.root_category>dt, .category_left dd a, menu.menu.CustomizePageMenu, menu.menu.menu--positioned, ul.pageNation a, a._5gfz._4hn2, div.divider, div.ver li, .igMPle, .article-detail-content-container blockquote, #cnt td div, ul.search_expandable, a.fx-button.full-width, .section-divider, .pagenationBlock .pagenation li a, .describe-line, #newsDetailsBody .propSelector, #newsDetailsBody.propSelectorField, #www_container #related_topics>h1, .commonFooter__content .links dl dt, #viewport ._3bg5 ._52x1, #react-root ._7XkEo, div[data-v-8d1ed43c], #yjSLinkTtl, .modTab ul li a, dl.modArticle_talk, .StreamAnchor__body, .article-author .article-author-relation a, .newsFeedTab-block .newsFeedTab_item a, .newsFeedTab-block .newsFeedTab_item span, div.article-title-index, #app .opinion-section__title.opinion-title, .pm_content_wrap .function_wrap a, a._3aR1Wl7JOyOEug4F-C-ZyI, a._1fWTm2E47ymhMM3suCaCGi, .Pagenation .Pagenation__next a, .Pagenation .Pagenation__prev a, #root .css-10p3hnj div, #wrapper #ToolList div, #wrapper ._1wMKcRvzVuLcTT_cLoka8h div, .Topic:not(:last-child)::after, .Heading--shortDivider::after, #stream ::after, .paginateWrap .pagination, .ik71Ie, .wmCMbe, #yjSLinkLst li a, #ContentWrapper div._2Px1Gie_uunZ30kLK97hv7, a.NQV3m, section.article-head .article-tag li a, .article-tag a, ._7gxp, #page ._6j_d, #root ._1YWTWPp6Fa, #wob_d .wob_ds, #content-grid div.col-xs-12.news-pagination div, .P6w8m, div.app-bar-middle-search, input.search-input, .news2023_mega .news2023_btn, .news2023_mega-content_row_item.button_sub,button.yosegi-FilterPill-pill {
  background-color: #38434f !important
}

span.toggle-menu, #rf-js-scroll-top>a, .wa4tvz-0.Kkdae.sc-bdVaJa.czkujZ, p.contentTopDesc, .txt8>p:nth-of-type(1), div.c-read, p.catch_txt, div.article_view_desc, .entry-content.clearfix>p:first-child, div#page-inner-main>p:first-child, .page-left .excerpt h2, .story-body__inner p.story-body__introduction:nth-child(2), #__next div.s1bzhl41-0:not(.gElGvB), #__next .sc-5vyyvj-0.sc-1bzhl41-0.kkZXjY,.page-article .border-primary {

  color: #e4e6eb !important;
  line-height: 1.6 !important;
  text-align: justify!important;
  text-justify: inter-word !important;
  padding: 15px  !important;
  background-color: #323232 !important
}

#__next .sc-5vyyvj-0.sc-1bzhl41-0.kkZXjY p, p.contentTopDesc  {

  color: #e4e6eb !important;
  line-height: 1.6 !important;
  text-align: justify!important;
  text-justify: inter-word !important
}

._content_.AdAsia>div>h2, section.page-break>h3, h2#target01, div.htmlview.clearfix>h3, h2.subtitle-tokimeki, div.entry-inner>h2, div.article_row>h2, div.article-main>p>big>strong, .entry.single-entry.clearfix.iframe-loaded>h4, #article-content>p>b, .article.article-css>h1, #news>h2.head-style-underline, div#section-title>h1.inner, a.active_main_cat, .mw-headline, #body-container article h3, .single .post .entry-content section h1, .sc-VigVT.iBjcfj, .entry-content .h2, #__next .sc-bwzfXH.loXcNn.sc-bdVaJa.iHZvIS a, .elEVOE.xqz4j2-0 a {

  border-left: 5px solid #4f7b9c !important;
  border-bottom: 1px solid #4f7b9c !important;
  background-color: rgba(17, 17, 17, 0.3) !important;
  padding-left: 5px !important;
  padding-bottom: 2.5px !important
}

#textcontent p+h2:not(last-child), #textcontent div+h2, #textcontent h2:first-child, .story-body__inner h2.story-body__crosshead, div.col-xs-12.col-sm-11.col-md-11.news-detail-content>div>p:not(:first-of-type)>strong, span.t-h2, .body.content:not(.gallery) h2:not(.headline,.subheading-gallery), div.article-detail-content-container>p>strong, h1.msg_title, .sc-CtfFt.dmfWND, [data-v-4927f5a7].left__title, strong[data-v-83913f50], h3.LC20lb, h3.sA5rQ, .elementor-element.elementor-element-3c9c62e h2, #main-content a.article__link, .ArticleTitle>*>h1, .cfxYMc {

  border-left: 3px solid #CC0009 !important;
  padding-left: 5px !important
}

img[src*="img/logo_name.svg"],img[src*="2016/05/jolli_20g.png"], img[src*="2016/04/jolli_20.png"], img[src*="asset/images/common/sd_header_logo"],img[src*="logo_0119_1928"],img[src*="common/img/logo_sp"],img[src*="renewal/img/logo"],img[src*="tmd_logo2"],img[src*="aday-gl-logo"],img[src*="zhtw_logo"],img[src*="logo.ee8b53951642"], img[src*="cdn.travel-star.jp/images/logo"], span.IconArea, .s14bo89l-1, .SiteLogoTop, .navbar-logo, h1#MainLogo, span.iconarea, .js-category-nav-image, .timeslot-details, div.header_login>a, div.d_sr2_map_nearby, div.or-location, div.common_form_search, span.header-ic-back, span.header-ic-burgermenu, span.title-city-text, span.css-icon-span, .main-categ>.slice *, i.icon-fx-plane, i.icon-toolbar-markasread-secondary, i.icon-fx-share-to-team-black, i.icon-fx-magazine-layout, .icon-toolbar-refresh-secondary, .icon-fx-more-ios-md-black, i.icon-fx-save-ios-md-black, .icon-fx-star-save-ios-md-black, .icon-fx-link-ios-md-black, .icon-fx-email-ios-md-black, .icon-fx-wordpress-ios-md-black, i.icon-fx-cross-ios-sm-black, .condition_address_54x54, .condition_phone_54x54, .condition_cuisinetype_54x54, .condition_price_54x54, .condition_branches_54x54, .condition_openinghour_54x54, div.image-logo>img, a.swipe-pager-item, a.site-logo.iconset, a.search-icon.iconset, a.profile-icon.not-login.iconset, a.share.iconset, .bookmark.iconset.go-login, i.icon.icon-sm.icon-secondary.icon-fx-search-ios-sm-black, i.icon-fx-check-ios-sm-black, i.icon-fx-rename-ios-sm-black, i.icon-fx-rss-ios-sm-black, i.icon-fx-gear-ios-sm-black, i.icon-fx-add-ios-md-black, i.icon-fx-help-ios-md-black, i.icon-fx-dark-mode-md-black, i.icon-fx-clock-ios-sm-black, i.icon-fx-integrations-ios-sm-black, i._56br, .header-smile-section, .score-promotion-section, .common_filter_tag_close_desktop, .common_filter_ar_down_desktop, .a_home_header_icon_bookmark_desktop, .a_home_header_icon_writereview_desktop, i.img.sp_V7iotoOqSzz.sx_8c1d83, section.score-promotion-section  img.promotion-logo-image, i.icon-fx-magnifier-ios-md-black, i.icon-fx-arrowhead-right-ios-sm-black, i.icon-fx-organize-ios-sm-black, i.icon-fx-feedly-ios-sm-black, i.icon-fx-save-ios-sm-black, i.icon-fx-mute-ios-sm-black, ._1bWuGs_1sq4Pqy099x_yy-, a.bx-next, a.bx-prev, img.article-badge-image, div.menu-inner, .homepage-nav .row-header__container .primary-links .menu-list-item a, .ruby-close-btn, .social-link-info.header-social-inner i.fa, div.gallery-thumblink, #feedlyPersona .icon-secondary, .header .logo .logoimg, .sp_fY9ALbq4HRU_1_5x.sx_0bff06, .s4Iyt, .glyphsSpriteFriend_Follow.u-__7,  .BvyAW ._8-yf5, .b5itu ._8-yf5, .ltpMr ._8-yf5, .wpO6b ._8-yf5, span.glyphsSpriteCircle_add__outline__24__grey_9, .common_icon_dialogbox_desktop, .common_icon_editorspick_desktop, .common_icon_camera_desktop,  .jfk-button-img, .item-emphasized, .language_list_item_icon, .home-section-header i.sh-icon.sh-featured, svg.notification-icon__icon, svg.global-menu-features__menu-icon, .global-menu-features__feature[data-v-5ea30993] svg, .logo__right-icon-link svg, img.hamburger_img, span.XCKyNd, .fx.fx .LeftnavList__heading-button > .icon, button.i1sv4u-0.jpCkEC.y2xmxl-1.hzJYUd.y2xmxl-0.fhusym, i[data-sigil="story-popup-context-init"], span._52jh, i.sp_bQxh2FZYb19.sx_46159d, ._1B9uw3CFC2, ._3J9qSxUgcT, ._1Z2nA0TuQj, span.u-__7:not([aria-label],.mediatypesSpriteCarousel__filled__32,.mediatypesSpriteVideo__filled__32,.glyphsSpritePhoto_list__outline__24__blue_5,.mediatypesSpriteIgtv__filled__32), ._47KiJ path, .LeftnavList path, button.h1vxxrco span.h1ypug77, button.sc-179j1vi-0 span, span.aWqeOb .NSy2Hd, .NSy2Hd.null, button.wpO6b.ZQScA, i.sp_S2qYjBdYph9_1_5x, .reaction__default-icon path, ._59tf._2ftq._7gxv:not(._59tg), ._59tg, .sharetray .ico, .XrOey ._8-yf5, button.gomDvd span, .fa-bars::before, .post-page #root  a.share-btn .svg-icon {
  filter: invert(100%)
}

h1.article-title, h1.xs-text-2, div.post-view>h1.header, div.news-detail-title, h1.article-header__heading, h1.article__title--single, h3.header-title, h1.page-title, div.article-detail_title>h1, .article.article-css>h1, .contentTopTitle>h1, article.article.main-article>h1.title, article.article>header>h1, h1.col-xs-6.col-md-6,.full-article h1, h3.hRjeT, .article-link-content h2 strong, h2.search-keyword, .article-body__contents h2, h1.p1, .entry-content .h2, .entry-content h2, .card-article .article-box .article-main .title, .iZDonF, .col-xs-12.news-detail-content-container h2 strong, .col-xs-12.news-detail-content-container h1 strong, h1.txt7, .txt4 h2, h1.font-semibold  {
  color: #e4e6eb !important;
  font-weight: bold !important;
  line-height: 1.4 !important
}

div._5rgt p,  div>div.cover-btn-text-2, div>div.cover-btn-text-1, .review-container, div.hket-col-xs-60, div.hotArticleTitle, div.information-link-mobile>a, div#main>p.contentTopDesc, article.post__article>p, div#news.mobile_margin>p, .col-md-12.col-lg-6.col-sm-6.article-t>*, div#article.contents_post.inner, div#section-lead>p, div#article.contents_post.inner>h3, div.post-text>p, div#news>p.body-color1.body-align1.font3, .wp-block-quote>p, #main>article>.wp-block-quote>p, div.layoutBox-01>p.text, .ver-info-m p, div.u-gapNextV--md>article, article.l-publishArea, .entry-content section span[style], div#topic_contents div.topic-text, .posted-on time span, p.text.yjDirectSLinkTarget, h1.Heading--shortDivider, .expText.expItem, #page.single p, .modArticle_text, .sc-bdVaJa.hVSRSV div a, .article-body__contents p, #__next .cCbDYQ.kmu899-0.joPHps .elEVOE a, #primary.content-area p:not(.recommended-articles__item__title,.recommended-articles__title), .fKFbl, main.main .content p, .heading-article__lead p {
  font-size: 15px!important;
  line-height: 1.7 !important
}

div.gallery-info, div.caption-container__caption , .post_info__author, .post_info__date, p.site-description, p.Date, p.feature-name--ad, p.article-detail_caption, div>h1.header_logo, div.c-row-fit>p, .post_info.xs-m0.sm-text-right, p.video-caption, div.caption, p.wp-caption-text, .is-body, p.s1wfcnrk-0, div.rdfa-breadcrumb>*>p, .rf-article-ref.rf-mini, div#article>p>strong, #section-editor>dl>dd>a, .table-contents.section>ul>li, div.note, ul.recommendArticleList a, span.meta-category>a, .c-more.c-more-nexpage a, div.fast-download-box.fast-top *, p.down-click, div#section-lead.inner p, .article-paragraph figcaption span, div.bbcode-quote-text p, p.is-body, div.di58gc-15.lmUAAp, #headerSearch input:placeholder-shown, span.c-newsCard__desc, .form-control.dropdown_href .css-q7xgeq figure figcaption, #content .entry-summary p, div.di58gc-7.hcrZfR div, #main dd.text, .di58gc-15, .di58gc-9, section.about>p, .left-col-content-section.more-info-section div, li.generic-article__summary--li.content--li, li[data-v-83913f50], .article__outer a[data-v-efc6ac46], .article__inner a[data-v-24b28e93], #main-content .article>.wrapper .head .info a span, #main-content .article>.wrapper .head .info a .topic__title, #contents .post-description, #main .table-contents li, .content.js-content.is-truncated, p.sum, td.subject a, #page ._5ayu {

  line-height: inherit !important;
  text-align: inherit !important
}

#app .css-1dbjc4n *, .place-self-center, div.qF0y9 span, #comments .ddRfmP {
  font-size: 0.9rem !important
}

p.is-l, .is-ttl, .c-more.c-more-nexpage, p.readmore_btn, p.pageNum1, p.pageNum2, .c-series, nav.rf-pagination>p, div#section-title>ul>li, a.btn.article-btn, div.txts1.color3rd, .post-archive article .entry-container .entry-content p, #mainWrap p.iconWrap,  #footer-copyright p, #foot td.YyVfkd, .textwidget p, p.pickupMain_detailLink.viewableWrap, .result.tracked_mods, p.pagination_number, .modArticle_image figcaption, .modMoreButton p, input.SearchInput__submit[value], .ft.pagenationSpn p, div.buttonMedium a, p.LocalEMG__settingText, [data-v-c482881e], p.LifeToolItemBox__title, h1.Heading--shortDivider, p.sum {
  text-align: center !important
}

.txt8 strong, p.story-body__introduction, #__next .jvqc0e-7 div, .text-black strong, .article-page-link__inner-aritcle-title, .iZDonF {
  font-weight: normal !important;
}

div[style="background-color: rgb(246, 191, 38);"] span.yzifAd, div[style="background-color: rgb(242, 179, 179);"] span.yzifAd, div[style="background-color: rgb(252, 203, 188);"] span.yzifAd, div[style="background-color: rgb(252, 236, 190);"] span.yzifAd, div[style="background-color: rgb(179, 225, 247);"] span.yzifAd, span.yzifAd.w9eXqe, span.c1wk3e span, #uamods a, span.gL9Hy *, span.spell_orig a, span.aCOpRe em, em.hcV4Re.qkunPe, div.article-paragraph a, #__layout a[data-v-0cab6c52], #app .generic-article__body span, span.js-more a, div.buyer, div.seller, #wob_d .ksb.hide-focus-ring.ksbs, .items-center span a, span.Box-v1-cltunW div {
  font-weight: bold
}

div.details p.description, .summary-container p.summary, .articleInfo>p, .pickup ul li a p, #conts #mainCarousel .outer li .detail p, #conts .parent p, .appspec-value, p.buzzard__summary, p.dove-item__summary, p.skylark__summary, p.budgie__summary, #mainWrap a.plan *, p.fontttl, p.hard-news-unit__summary, .kv-text p {
  text-align: inherit !important;
  font-size: inherit !important;
  line-height: inherit !important
}

div#article.contents_post.inner>blockquote, div#article.contents_post.inner>p>a, div#section-title>p#update, div.panel.panel-default, a.external_link, div.contents_post.inner>img, ul.list-articles-wrap, .wp-block-quote, main#main>article>ul, .entry-header>h2.entry-title, div.contents_post.inner>*, div.vb_postbit img.thumbnail, .article-paragraph, #mobile.article .entry-content p, #mobile.article .entry-content h3, .size-full.aligncenter, .HKjZU, table.nrgt, .news-detail-content p, #content .herald-section, #content.herald-site-content {
  margin-top: 1em !important;
  margin-bottom: 1em !important
}

header.ng-scope[style] {
  height: 45px!important;
  position: static !important
}

div#herald-responsive-header {
  height: 0px !important;
  position: static !important
}

h1.n743at-3.bhhWoS.sc-gqjmRU.iEiEQ {
  margin-top: 0px
}

address.lrw22u-0 {
  margin-bottom: 0px
}

div#page[style] {
  padding-top: 0px !important
}

div.thumb {
  margin-bottom: 0.5em !important
}

div.entry-meta, span.posted-on {
  line-height: inherit !important
}

div#global-menu *:not(.icon) {
  background: #197CBC !important
}

div#global-menu>.container *:not(.icon) {
  background: #EC9729 !important
}

 #sp_header div {
  background-color: #d10a1c !important
}

div.header-mobile-float *, div.header-mobile-float>div.container *, header.p-header.js-header, #btn_slide.header_menu, #header_nologin .header_logo, #gHeader, .leaflet-pane>canvas, div#header_beforelogin .header_inner, div#header_nologin .header_inner, span.nowNewsIcon, #page header#masthead.site-header, #page header#masthead.site-header, body#blog div#header, #www_header, #www_header div, div#header.tracked_mods div, #yjsmhLogo, a#yjsmhOpenButton div, #__next .mr-3.mb-3 span, header.row.title-bar, .device-width header #headerInner {
  background-color: #ffffff !important
}

#global-menu, #global-menu-wrapper, #sp_header_top, #global-menu, #global-left, #global-right {
  background-color: #EC9729 !important
}

.news-detail-content, .columns-left,  #primary.content-area, #page-wrap div#content, #page-wrap div:not(.meta-image), #conts #main, div#blocks-left, .homeNewsCategory ul li, .art-w65-left {
  float: none !important
}

.full-article .feature-image img, h3.my-post-title>a, .newsTitle, #newsDetailsBody .relatedNews li, .smaller-box-title, .news-columns-article-title, .news-article-title.newsTitle, .news-columns-article-title.columnTitle, .news-article-title.newsTitle, .headline-box-content, div.news-media, .c-newsCard--title .c-newsCard__desc, .fea-index-text p, .userProfile a .userRight, .userProfile a .userRight .userInfo, p[data-v-7bb520ce], .post .title, ._9ezyW::before, #posts p[data-v-4c0538f5], .entry-header[data-v-3856d210], .review-listing-container .review-section .review .content, .pois-detail-review-list .review-section .review .content, .pois-detail-review-detail .review-section .review .content, [data-v-3856d210], [data-v-f6aceff0] {
  height: auto !important;
  max-height: 100% !important
}

.row.post-detail-row.top-padding, .small-12.medium-8.columns {
  flex: none !important
}

.post .post-content p a {
  border-bottom: 2px solid #ddeaf6 !important
}

nav#header.header.js-feeder.js-navigation .htmlblock.htmlblock-debug-container, #header.header.js-feeder.js-navigation div:not(.header-searchbar-search-btn-icon,.what,.language-primary,.category-title,.nearby-city-item-overlay,.nearby-city,.nearby-city-container), #header.header.js-feeder.js-navigation {
  background-color: #ffd42f !important
}

#topbar, #mm-0 div#header, #page-wrap #menu, #randomLinkBox .area04 a span {
  background-color: #f25822 !important
}

.story_body_container {
  border-top: 2px solid#252525
}

.HKjZU, .excerpt, .post-header, .swiper-slide a:not(.swiperActive), .siteNavBar .siteMenu li:not(.active), .toggle.ng-binding, .hXwTff, .faux-block-link, a#facebook_share, a#line_share, a#twitter_share {
  border: none !important
}

g.text_tick>text, g.tick>text, #middle .igc-labels text {
  fill: #e4e6eb
}

.zoom-logo, .fx.icon-tertiary {
  opacity: 0.6
}

.container[data-v-11f322a3] {
  padding-top: 40px !important
}

.article-link-content, .copyR.txts1.color3rd {
  margin-top: 5px !important;
  margin-bottom: 5px !important
}

.livePlayerWrapper, .liveVideo-dimensions, .liveBg {
  width: 1152px !important;
  height: 612px !important
}

#page #root div:not(._52jj,._4g34,._1r5l,._22rc,.facebox,._6zp5,._57-q,._57-p,._1o0y) {
  background-color: #1c1c1c !important
}

#page #root ._22rc ._52jj,.newsFeed_item_text:before, .pickupFollowUp_item_text:before, .pickupRecommendTopics_item_text:before, .List__body>.FlexBox .StreamItem__item:before, .Grid__body:before, .TabStrong__link:before, .iBieJT {
  background-color: #333 !important
}

._50xr._403j, ._50xr._403j, ._5rgt._5nk5._5msi, ._53mw, p.bbc-w2hm1d {
  max-width: 95% !important;
  max-height: 100% !important;
  width: 100% !important;
  height: 100% !important;
  margin-right: auto !important;
  margin-left: auto !important
}

#MNewsFeed ._1-sk span, #viewport ._1-sk[style], #viewport ._1-sk[style] span {
  color: #ffffff !important;
  font-size: 1.7rem !important
}

#yjsmhNoticeNumI, li.StreamAnchor__item.is-current a, #log-stream li.StreamTab__item {
  background-color: #2471d6 !important
}

._9ezyW, .gW4DF, .b5itu, .Ppjfr, .meta-category[data-v-3856d210], .meta-category[data-v-f6aceff0] {
  position: static !important
}

._8-yf5 {
  height: 22px !important
}

.KGiwt {
  height: 35px !important
}

._8Rm4L.bq3Mi.D_6tu.ccgHY.l9Ww0, ._8Rm4L.vboSt.D_6tu.ccgHY.GZkEI, #main-content .sections__tag a, aside.sc-bdfBwQ.hqqDhi {
  height: 0px !important;
  opacity: 0 !important;
  margin: 0px !important;
  padding: 0px !important
}

#feedlyPageHolderFX {
  padding-top: 0px !important
}

.item_list_wrap.borderless ul.item_list li .col_3 {
  width: auto !important
}

#textcontent h2 {
  font-size: 1.1em !important
}

.g3dbUc:hover {
  background-color: #49b6fc !important
}

.or-slider-modal .modal-dialog {
  min-height: 890px !important; 
  top: 0px !important; 
  margin: 10px auto !important
}

.PdwC2.fXiEu[style] ._6CZji, .PdwC2.fXiEu[style] .POSa_, ._7CSz9 {
  top: 25% !important;
}

.ekfSF button, [xmlns*="www.w3.org/1999/"] .container {
  padding: auto !important
}


.article-page-outer--slide-up, .home-page--slide-up {
  transform: none !important
}

ins:empty {
  display: none !important;
  height: auto !important
}

  `;
  document.head.appendChild(style);
}());