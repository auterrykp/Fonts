// ==UserScript==
// @name         Others
// @version      0.12
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

p[style], p,
div.article_text, div.excerpt>h2, span.xs-text-black, div._page_._page_1>p, div.article-paragraph:not(b), div.c-read, ._content_.AdAsia *:not(h2,a), .item-page>div>p>span[style], div.contents_post.inner>div[style], div.new-table, .article-paragraph span, div.col-xs-12.col-sm-11.col-md-11.news-detail-content>*>p, #content .container p:not(.post_total_count), div.article-detail-content-container>p, div.wordsnap, #content-main p, div.post-content.entry-content.cf>p, div.content div.paragraph, div#content div.paragraph, .entryBody div.content>div,  #page .post-content p, #main-content .article-content-inner.zoom-md p, #page-wrap p, p font[style], div[data-testid="story-subtitle"], #main .article-detailBlock h3.type-01, #main .article-detailBlock .text, #main .article-detailBlock .layoutBox-01, .expText.expItem, #contents article, .css-q7xgeq li, .css-v9x49a, .vb_postbit, #contents.articles .text, div#topic_contents div.topic-text, .topic-text, #story_body #story_body_content, .card-article .article-box .article-main .article-info .p, section.review-container, #posts .vb_postbit font, .gBjLGB, .type-post p  {

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


img[src*="thin_left_arrow_333"],img[src*="thin_right_arrow_333"],img[src*="image/pns/time"],img[src*="640x200"],img[src*="1680205/org"],img[src*="header_flbn_english"],img[src*="v=mw1920"],img[src*="common/img_app_star"],img[src*="/static/img/header_flbn_chinese2.png"], #ftalt3636127, .related_post_list, h2.hN, #bottomRectangleContainer, gpt_ads_bg, .gpt_ads_nobg, .gpt_ads_title, #google_image_div, .top-promo, #imgzone, .pixnet-happix-pilot__launcher-bubble__noti_msg, .pixnet-happix-pilot__launcher-bubble__btn_happix_ufo, .embed-responsive-1by1, .native_ad, #nativead_0, .news-videos-thumbnail, .ui-tabs, .hotnews, ._2p3a, .article-sec, #news-slider, .content-related, #links-row-1, #banner-exit, #google-center-div, #spotlight, #ad_unit, #aw0, .adsbygoogle, .columns-right, #widget_tptn_pop-2, #google_ads_frame1, #aswift_0_expand, #aswift_0_anchor, .adncon, .herald-ad, .new_ad, #google_center_div, #google_ads_iframe, .ad_google_LREC, .img_ad, #cto_banner_content, .footer-logo-container, .social-logo-container, .adsbyfalcon, .ad_google_LREC, .google_ads_iframes, .caption2.native_ad, #float_fb_plugin, .uz-travel-star_pc, .uz-ar, .footerInduction, .expLink, ._popIn_recommend_container, ._56q9, .post-relative, .magazine-panel, .nmg-popular-posts-list, .newsBlock, .indexCol06, .indexCol07, .commentDetail, .ad300, #gdpr-dialog, .content-promote, .tagBottom, .adContainer, #adsDefinitions, .related-articles-container, .i-amphtml-element, .ad-flyingcarpet1-placeholder, .amp-fx-flying-carpet-title, .code-block, .HYSJg, .caption5, .header-ad-fixed, .header-fixed-area, .header-ad, .adsbyfalcon, .pixad2199d, .article-footer, #user-post, .footerInner, .fb-page, .fb-like, .fb_iframe_widget, .adnol, #footer_nav, .newest-listing, .relatedposts, .home-recap, #pixad891d, .popular-post, #footerG, .MagAndSpArea, .sp_foreign_banner, .rankArea, .FeatureArea, .localArea, .pickupArea, .recommendArea, .boxLayou01, ._3flVZe-, #readmore, .daily_search, #MStoriesTray, #category-posts-3, #archives-2, #tag_cloud-2, #category-posts-2, #pixad891d, .MFV, .magazine-selection, .p-articleLatests, .c-posts__eyecatch, .zucks-widget-container, .extrabox, .bnextmeida-banner, .l-globalFooter, .c-ranking, .u-mb-15, .c-lang, .c-detail_under, .gpc-c_r, .wp_rp_twocolumns, .kiwi-ad-wrapper-300x250, #video-widget-3, #recent-posts-2, #search-2, #banner-close-monkey, ._2rbw, .hashtags-title, .indexTopInfo, .fl-node-5bad2b23b88d6, header>div.block, .inner-floating-container, .site-header-sticky-wrapper, #uni300, div.quickMenu, section.bg--gray, section.bg--orange, .smart-banner-container, .tm-floating-banner__contents, .ob-widget-section, div.rss, div.pixnet-happix-pilot__sticky-box, .custom-html-widget, span.dpwska-0, article._7i8m, article#u_1d_2, div.s17ljdfo-0, div#gotop, div.eyz1oe-0, div.corner-btns-container, div#sharebuttons, div#at-share-dock, div.js-wrapper>div.top-banner, div.js-cookie-disclaimer, section.s1l33al0-0, div#fixedSnsSetPg, footer>div.footer_nav, div.pixnet-happix-pilot__launcher-bar, #geniee_overlay, div#smartbanner, .subscribe-bar-container, a.hket-channel, div.kijiSns, div.smartbanner--ios, #contentSponsorshipAd, #commonConts, ul.solo_contents_list, .pixnet-happix-pilot__happix-notification__wrapper, .icons_wrapper, .icons_inner, div.row.text-center, section.js-booking-toast-message, h2.is-ttl, div#share_wrap, div.page_contain, .__survey-bar.survey-bar-article-under, .l-contents-block.l-contents-block--article-ranking-article, section.ad-zone-mobile, .zi_ad_article_below_title, #talkappi-chat-greeting, div.moduletable.span12, .article-body__contents-pr-primary, .axslot.lrct_inject gemini, .s1kbpv34-0.dKCxIJ, #App-deepLink, div.stick-progress, div.page_contain1, #rf-js-scroll-top, .post-tab, #post_under_ads, div.hot-articles.hot-articles-section-1, section.discover-stream, div.octopus.related-container.horizontal-padding-cleaner, div.hot-articles__main, div.quick-navs, .hot-articles-section-1, .hot-articles-section-2, .hot-articles-section-3, .hot-articles-section-4, .hot-articles-section-5, .hot-articles-section-6, .hot-articles-section-7, .hot-articles-section-8, .s1235pe5-0.crGWqZ, div.cover-apps, #abtest_banner_li, div#container>div#sub, div#foot-common, div.ad-flying-carpet, .smartbanner.smartbanner-android, .feature_comment.allsize, #sub_categories_widget-4, #sub_categories_widget-5, div.featured-block-bottom, div.colophon, .hor-share.computer_hide, .social-share.row, .header-author-info, .pixnet-happix-pilot__special-notification, div.header-num, #single-post-list, h2.signle-h2, div#respond, p.pvc_stats.pvc_load_by_ajax_update, div.wpa, #page .site-bar, hr.wp-block-separator, .sidebar.widget-area, #jp-relatedposts, div#ldynavbar, .reaction.reaction--multipleOne-floating.reaction__circle-button.sc-tilXH.csgjRu, .j2bo2s-0.iIwWej, div.SponsorBox, .RWDContainer.share_box_m, .widget_custom_html, #kpftw, #topInAppNotificationBanner, .footerTop.ng-scope, .footerBanner, #footer_bottom, #bbsearch, .stick-share.nav-up, section#section-bar, div.adsense-top, .container.container--pagetop.show, .btn_clip.btn_clip_add, .clip_widget, div.post-article_info, div.post-article_header, .img-responsive.center-block, div.post-sub, .section-sns-share.section.clearfix.inner, ul.section-horizontal-list.inner, div.banner-320, div.banner-300, .post_content.entry-content>div.youtube-container, div.six.columns.clearfix, #logly-lift-widget, div.a-button-banner, .trading_item_section.item_list_wrap, .view_followus, .l-contents-block.l-contents-block--tie-up, .widget-odd.widget-5.widget.widget_text, div.postauthor-top, .postauthor-container, div#tabber, footer#colophon, div#content-sidebar, div#div-gpt-ad-3, div.area-menu.mobile, ul.areanav.clearfix, div#langselect-container, div.af_space_567506304952, .kiwi-ad-sticky-wrapper, #page-wrap>#sidebar, #page-wrap>#footer, div#onesignal-popover-container, .section-article-tag, .section-article-publish, div.row.member-text, footer.uf-footer, .related_posts.posts.related_posts_mobile, .custom-button.fb-share.custom-button-mobile, .fj-navbar-mobile.navbar-inverse.affix, .col-xs-12.col-sm-1.col-md-1.share-button, div.headerInduction, div.j2bo2s-0, div.stick-share, .js-gdpr-consent-banner, div.googleAds-frame.googleAds-letstop-sp-header, div.article-pr, div.title1.txt1.col-xs-12.pull-left, nav.social-widget, div.googleAds-frame.googleAds-style-sp-header, div.photo-credit, div.rf-main-visual, div.article-link__img, aside.p-unit, nav.c-breadcrumbs, div.article-tag.-label, .container-fluid.main.clearfix>div.top_banner_ad, #subscribe_mobile_cont, nav.nav-footer.container, div.article-paragraph>i, div.topics-txt-page>ul, div.topics-txt-page, section#ai_widget-2, div.heateor_sss_sharing_container.heateor_sss_vertical_sharing.heateor_sss_bottom_sharing, aside.site-sidebar.sidebar-elements, div.post-pagination, div.article-sns-icon, div.subfooter-menu-holder.text-center, div.near_article, div#related_header, div.ob-widget.ob-strip-layout.CRMB_1, div.go_share.share_box_bottom, div.more-title-en.hide-on-desktop, div#banners1, div#banners2, div#js-gdpr-consent-banner, div#page_wrapper>div[style], li.googleAds-style-stylelist-sp-native-wrap, section.gray-border--bottom, ul.c-choice-list, aside.outer-link, section.site-sns, ul.wp-block-latest-posts.wp-block-latest-posts__list, div.heateor_sss_mobile_footer, div.topics-inner-img, div.expSpotImage, a.appBtn, section.related-article.break, a.imageUploadLink, div#section-title>p#update, div.ol_footer_wrapper, div.cc-window.cc-floating, div.pubdate.sc-bwzfXH.loXcNn.sc-bdVaJa.jJqEVj, div.app_banner, div.comment-box, ul.sns-label__list, .googleAds-frame , div.listing_top_highlight, div.article-ribbon, div#kpftwbg, div.sns_frame_small, dl.checkOther, .item_list>li[style].clearfix, div.ob_what, div.HTMLBlock, section>ul.rf-list-items, dl.rf-list-side-items, div.ContactBox.Mobile, div.HomeSchoolContainer, div.HomeVideoContainer, div.Mobile.FooterWidgetInnerView, div[style].cc-grower, .share_btn.addthis_button_facebook, div.navigation-container, div.top-navigation, div.branch-banner-button-container, #global-container div.sr2-jobs-layer-anchor, div.entry-content.herald-entry-content>iframe[style], #global-container div.banner-background, h2.h2>span, .btnWrap.shareEl, #___gcse_0, iframe#comment-plugin, footer.footer-menu, div.q0b9qr-3, .ytp-chrome-top-buttons, div._52z5._451a.mFuturePageHeader._1uh1.firstStep.titled, div.footer-mobile.clearfix, section#member-area, div.pure-u.sidebar, div.q0b9qr-2.kqgrGb, p#ofr i, div.cmt-top.cmt-top-old, div.ad-box-auto, .right .box, div.appBanner, .viu_widget, #facebookComments, div.big_ad, #orb-header, div.column--secondary, #comp-cool-britannia-1, .share-tools--no-event-tag, div.sidebar.s1, .container-inner>.pad, #slide-wrap.slide-wrap, div.download a, div.download>p, div.article-body-aside.col-lg-3, div.header__sitename, .js-gtm-article-detail-h2-2, .ng-scope header-induction, div.article-comment-wrapper, #footer-menu.footer-menu-wrap, ul.shareBar__info--push, address.author_cards, .navbar.navbar-default.df-nav, div.only_mobile, div.inline-ad, div#sns_side_wrap, div.col-md-28.sidebar, dd.editor_name, div.l-contents-block.l-contents-block--schedule, #zi_ad_article_below_title, .banner.u-inner-space-t-XS, .nocontent.robots-nocontent, .card.center.bold.topic, div#search-container.search-box-wrapper, .di8g3.YGvGmb, #at4-share, .newsListBlock.right-box, .btnClose, .boxShare, #postHeadBtns.clearfix, div.sharedaddy.sd-sharing-enabled, div.jetpack-likes-widget-wrapper, div#CoverPhoto, .col-xs-1.col-sm-1.col-md-1.share-button, div.virus__section.clearfix, #site-navigation.urbanlife, .bottom-header__urbanlife, .share.share--lightweight.ghost-column, #orb-aside, ul.juiz_sps_links_list.juiz_sps_hide_name, div.article-body-item.col-lg-5 .article-paragraph:nth-child(2) i, .pixnet-happix-pilot__launcher-bar-desktop__wrapper.action, .fb-share[data-v-14c8653e], .related_posts.posts.video[data-v-14c8653e], div.sidebar_inner.fixed-me, .share-article-vertical, .widget.widget_pages, .s1u9kosf-2.doxrbe, .kxpaYt, aside.sc-bwzfXH.liBCIH.sc-bdVaJa.gyMRxJ , .post .related-posts, div.feature-slider, div.comment-container, #body-container .sd_nav, .pluginSkinLight.pluginFontArial, div.topics, nav#portal_menu, a.fbShare, .gnav201606, .pixnavbar__top-bar__pix-site, div#sub, .text-overflowed.threeLine p, .area-menu.desktop, .col-lg-8 p.article-page-link__inner-aritcle-lead, .zeropadding #footer, .cwBzbR, .btnNext, .btnPrev, .component.newsletter-callout.newsletter-inline-signup, .component.subscribe-callout, .vjs-ima3-ad-container, div.promotepagesection, div.adhesion-ad.mobile-ad, nav._3FP2YQBl, header._2W05UT36._3e-Y2Bts, .subscribe-cover img, .component.feed.clearfix, .title-display.desktop-only, div.hashtags-container, #content .entry-content.herald-entry-content p:nth-last-of-type(2), #herald-responsive-header .container, #mainportal, .sc-bwzfXH.irAmUN.sc-bdVaJa.hDjqJr, div.ad-block, body.category .archive-page-header .archive-title-wrap, .ad-tip, section.index-books, section.subscribe-area, div.footer-container, div.magazine-ad, #AD-970x250-AD1, div.search-load, .read-cube-btn,  div.read-btn.mobile-hide, .ads-parallax-fixed, div.tg-content, div.ad-content, div.ads-para-container, .read-btn.text-white, div.content-related-container, #right-fixed.art-w65-right, .share-btns.bg-white, footer.article__footer, a.StyledLink-dda4ku-0.bOraUr, a.script-toggle, footer.commonFooter, #page .mobileMenu, #page .nonMobileMenu, div.col-xs-12.top-ads.superBanner_2, .i-amphtml-layout-fixed, #maincontent p iframe,  #maincontent .navbar-fixed-top, .single-sns.clearfix.mini, div#fancybox-buttons, ._3-8o, .r-1pz39u2, .r-1n0xq6e, .css-1dbjc4n.r-1g40b8q, div.zGtbP, .KGiwt::before, div.Z_Gl2, div._4bSq7, ._vi6, #afscontainer1, div.in-read-ad-sticky-wrapper, #masthead .site-description, .wp-post-author-wrap.wp-post-author-shortcode, #ruby-back-top i, .pickupMain_image_text p, .msthdtxt, ul.modSocial_btn, div.modTheme, section.modSpecial, footer.modFooter, div#mhd_header_sp, div.THISISANADHERE, #comments-slot, #ad-fullscreen, .SupportPeron, .LifetoolItem__unsetStatus, .vjs-error-display:before, .shareSocalBtn li .fb, .shareSocalBtn .tw, .posMMON, .listMod .hd:before, div.tenki-ad-lite-overlay,div.tenki-ad-lite-north, #ad-lite-recommend-wrap, .footerPromo, div.ScrollButton.is-show, .PremiumFirst.js-PremiumFirst, #_idpfLP_mdl.idpfLP_mdl, .sc-fONwsr.jVIdGW, div[data-v-3b5521dd], [data-v-515deb48], [data-v-45e788e6], div div.popular-section, footer a.sportihealth-Logo, .article>.wrapper .mobile-wide-ad-container-1, .inline-ad-container[data-v-83913f50], .article-details-type--newsletter[data-v-83913f50], .article-details-type--more-on-this[data-v-83913f50], [data-v-7638e4bc].details__topics-ad, .homepage__footer-ad-container.footer-ad-container, [data-v-1a49529d].coronavirus, .package-top[data-v-3733b8ec]:before, opinion-section[data-v-3733b8ec]:before, .info__sections.sections [data-v-7638e4bc], .article-list__inline-ad, .advert__holder, .share-widget.article-page__share-widget--mobile, [data-v-1df62610], .wrapper__bottom.bottom, #main-content .smart-banner, #main-content.notification__message, .notification[data-v-409b0395], [data-v-f6a8331a].geolocation-alert, [data-v-409b0395], [data-v-f6a8331a] .home-pagination, .page-container__top-ad, [data-v-f6a8331a].top-ad--hidden, #main-content .advert.ad-slot, #main-content .ad-slot--mobile, #main-content .advert__outer--sticky-ad[data-v-427fd45e], [data-v-f6a8331a].page-container__bottom-ad.bottom-ad, [data-v-0fbca7f8].header-menu-container--sticky, #covid-tracker-takeover, #main-content .article-page-outer__top-ad, #main-content .top-ad--hidden, .opinion-section[data-v-3733b8ec]:before, .width.imgs_1, button.eFHJfn, .textAd__section[data-v-8d1ed43c], .pace-done .navbar-top, div.axslot.axsense, #appDlBanner-upper.appDlBanner, .home-page__global-menu-container, aside#search-3, .elementor-2332 .elementor-element.elementor-element-60cf76e8, .elementor-grid-0 .elementor-grid, div[data-widget_type="share-buttons.default"], #topHeaderBarFX.fixed-bar, .inline-ad-container, .article-details-type--newsletter, .content--outstream-1, .article-details-type--more-on-this[data-v-419168a5], .s1x15mdy-4.cjSTik.s1x15mdy-3.gckjTC, div.details__topics-ad, .logo-wrap .bar, #sharebar.sharebtn, #shareft.sharebtn, #reactDockedPopup, form.js-search-form, .c-download-banner.u-md-up-hidden.active, .p-article-comments__link.u-font-sans, .kiwi-ad-wrapper-ypa-300x250.kiwi-loaded, div.css-rfboy2, .css-14akkwd, .sc-bwzfXH.loXcNn.sc-bdVaJa.iMnSNo, #popover-container.s1wau3gh-0.iDGcev, .hJKzIb, header.sticky-jump, div.heho-social-share .post-header-wrapper, .b0KoTc.B4GxFc, .LifeTool__listItem::after, section#log-rsab, div.Header__contentWrapper, div.ult__mods.JnVVZlSIAMbTJUrCMznTu, .AdContainer-sc-8mk8fx-0, .ifdlyq, div.sc-bHwgHz.hNbkab, div.fixed-box.up, .row.ad-for-moblie, .card-box.fb-box, .ad-box[style], .card-box.adshow.hasAuthor, .card-box.mobile-shareBox, #adGeek-slot-div-gpt-ad-1585561206369-0[style], .op-wrapper.fadeInDown, .article-details-type--more-on-this, .U9Cd6d, #footer .container[data-v-7a80e4fa], div.sidebar_list li, .RichSmartAppBanner, .e1e90g5r0, .l-contents-block.l-contents-block--tie-up-lg, .sc-bdfBwQ.jTtUyo.sc-1u9kosf-2.jctesQ, div.sc-1x15mdy-3.sc-1x15mdy-4.gvHsew.fagTCQ, .q0b9qr-2.eKySBQ, .sc-1235pe5-0.kzjkId, .COOzN.MnWb5.YT6rB, #global-container .right-col, aside.sc-bdfBwQ.csOCgK, aside.sc-bdfBwQ.hqqDhi, .gaOqrY, .kGuEDe.jctesQ, .sc-5vyyvj-0.sc-1u9kosf-0.kGuEDe a, #comment-plugin-page-level, .gyHIoS, .cHKvki.sc-1jdnux-0.cMdVCV, .PdwC2 .Ppjfr.UE9AK.wdOqh, .zZYga::after, .zZYga::before, #siteHeader.siteHeader, div.btnApp, div.presite_containerm, .page-wrapper .page_title, div.float-relate, .eyXLr.wUAXj, .DCpAF, div.sc-3lap54-1.ifWCni, .LazyLoad.mt-4.l7v9z99, .w11zjxzn, #mhd_banner_wrapper, .adWrap-articleHead, .tuQOVc, #ad-overlay, .dtivfw8, div.cookie_policy, .branch-banner-button-co, #onesignal-slidedown-container, .dzlctlu.hidden, .sc-4ev7nz-0.eoXNZh.mt-4.mb-3.l7v9z99, #branch-banner-iframe, .bg-white.rounded-t-lg, .pt-navBarMobile .lg\:min-h-\[250px\],  div.shrink-0.flex.items-center.duration-200.transition-all.ease-in-out.md\:px-3.opacity-100.visiblei, div.sc-1x15mdy-3.sc-1x15mdy-4.cyMsTb.cijtNn, div.ad_left_bottom, #lcs-stack-sticky-bottom, .article-divider--default::before, .article-divider--default::after, .q0b9qr-1.hkdMLI, .sc-1x15mdy-2.sc-1x15mdy-3.flayJi.fYpuvk, .page__layout-navbar .shrink-0.flex.items-center, div.rm-footer, div.instants_new_title_header-top, .instants_new_title_header, div.sc-4ev7nz-0.l7v9z99, body div.presite_container, #ad_banner_pos1, div.MFV, #aswift_1_host, #poi-booking-picker div.mask, section.js-booking-toast-message, div.link-to-app, .left-menu.for-sp, .expSpot div.review a .reviewContent p::after, .bbc-1dg7u9h.e10yv9r13 div, .jXBtGs::before,.jXBtGs::after, .MqMobileTablet, .block--revive-adserver-zone-block, .block--revive-adserver-zone-block, #MYT_main_container[style], .inread-ad-container, #inread-standard-passback-unit, #gwd-ad, #mobile-300x250-beforeContent, .AV6166be0aa567f85d6860a260[style], #config_mobile-1x2-inreadExtra_Entertainment, .amp-animate, #mobile-1x2-inread, #mobile-1x2-inreadExtra, .GoogleActiveViewInnerContainer[style], .inread-more[style], #postArticle, #sda-LREC2, #sda-WFPAD, .caas-da, .tmb_tn_ad_content, ul#adx_container, #mobile_banner_native_1, .adWrap.adWrap-articleHead, .adWrap, .ad-frame-fix, div[id*="_adr_abp_container"], .app-modal[data-v-6b3edfd8],div.pos-infeed,.posNM#posNM, div.floatingWindow.ng-scope, ._927epf0:empty+._927epf0:not(:empty), .op-container .opLink-group, #global_bnr_wrap, .score-promotion-section .promotion-section, .single-header .post-cat-info:before, ._3t1IIUwX87Q7giYt9CBgsT, .bOA-DQ, #ssm1.ssm, .right_widget_2023, .sharelink_icon, aside .report, #__next .placeholder-ad, [class*="ad-min-size"], [id*="whatsapp_promo_btn"], #contents .pos-infeed, #__next .min-h-\[250px\], #righteditorchoice, .contentLastLrecGroup, .mpads, section.cw__advertising,.sc-250a058f-0.bXMTTM {
    
	display: none !important;

}

//END

  `;
  document.head.appendChild(style);
}());
