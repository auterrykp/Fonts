// ==UserScript==
// @name					Font
// @version					1.6
// @description				Custom_Font
// @author					TKA
// @license					N/A
// @match					*://*/*
// @exclude				https://m.facebook.com/*
// @exclude				https://*.linkedin.com/*
// @exclude				https://*.oasistrek.com/*
// @exclude				https://transit.yahoo.co.jp/*
// @exclude				https://*.icloud.com/*
// @grant					none
// @run-at					document-start
// @downloadURL			https://github.com/auterrykp/Fonts/raw/master/Fonts.user.js
// @updateURL				https://github.com/auterrykp/Fonts/raw/master/Fonts.user.js
// ==/UserScript==

(function () {
  const style = document.createElement('style');
  style.textContent = `



@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+JP:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Murecho:wght@300&display=swap');


@media (pointer: coarse) {

:where(div,a,aside,header,h1,h2,h3,h4,h5,h6,hr,li,label,smal l,p,ol,ul,dl,dt,dd,object,blockquote,address,del,dfn,data,datalist,strong,em,embed,q,samp,base,sub,sup,var,video,wbr,font,fieldset,link,map,form,ins,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,dialog,figure,figcaption,figsource,track,template,source,sub,strike,style,footer,hgroup,menu,nav,section,meta,meter,mark,input,iframe,main,form,script,noscript,time,summary,optgroup,option,output,canvas,param,picture,progress,rp,rt,app-root,mb-hub,mb-navigation-bar,router-outlet,mb-hub-summary,mb-modal,mb-header,mb-main,mb-footer,ruby,col,colgroup,details,pre,kbd,abbr,b,br,bdi,bdo,textarea,cite,span,ytd-app *):not(button,.fa,.fas,.far,.fal,.fad,.fab,.docon,[class*="fa-"],[class*="icon"],[class*="Icon"],[class*="icomoon"],[class*="logo"],[class*="cart"],[class*="arrow"],[class*="ico-"],span[role="presentation"],[class*="vjs"],i,svg,path,img,.glyphicon,.ico,.ji,.checkmark,.DPvwYc,#datepicker,#app-body #screen-root *,.tb-ifont,:is(html[lang*="ja"],#EditorContainer,#FontName_New-list,[id*="FontPicker"]) */*onedrive*/,.ms-font-s */*ms-outlook*/,.google-symbols,/*texteditor,Google_fonts*/:where(#centeredBodyContent,gf-root,flt-glass-pane) *),
/*---CATHY---*/:is(#spa-root,#pageAWAI,app-root,.cx-skin,#change-flights-page) *:not([class*="icon"],[class*="icomoon"]) {

	font-family:  'PingFangSCRegular.EN','PingFangSC-Light' !important;
 	letter-spacing: 0.025em;
  	font-size-adjust: 0.52 !important;

}

:is(html:is([lang="en"],[lang*="en-US"],[lang*="en-GB"],[lang*="en-int"],[lang*="fr"],[lang*="de"],[lang*="it"],[data-locale="US"],[data-locale="GB"]),#page-top/*ctjobs*/,[lang="en-HK"].hydrated/*iherb*/) *:not(button,.fa,.fas,.far,.fal,.fad,.fab,.docon,[class*="fa-"],[class*="icon"],[class*="Icon"],[class*="icomoon"],[class*="logo"],[class*="cart"],[class*="arrow"],[class*="ico-"],span[role="presentation"],[class*="vjs"],i,svg,path,img,.glyphicon,.ico,.ji,.checkmark,.DPvwYc,#datepicker,#app-body #screen-root *,.google-symbols,.tb-ifont,span.doJOZc,
:is(.aAX/*gmail*/,[data-base-title="Google Calendar"],#drive_main_page,#drive_mobile_main_page/*gdrive*/,gf-root/*google_fonts*/,#facebook,ytd-app/*yt*/,.notes-container,#ognwrapper,[class*="VIpgJd"]/*google_notes*/,#onecup/*pushbullet*/,#app ._1Fm4m,#whatsapp-web/*whatsapp*/,#centeredBodyContent/*texteditor*/,#yDmH0d/*google_img*/,.layout--boxed/*Weekendhk*/,#spa-root,#pageAWAI,app-root,.cx-skin,#change-flights-page,.ng-scope/*---CATHY---*/,#root [class*="M_"][style],#root [class*="D_"][style]/*Carousell*/,div.iw_viewport-wrapper/*AA*/,.hfeed.site/*jobsdb*/,.cpj-wrapper/*cpjobs*/,.fHlwaI/*hsbc*/,.css-5305ft/*pocket*/,[data-val="https://new.hongkongairlines.com/hxair/"]/*HKairlines*/,#wrap :is(#jre_multi_header,#contents,#topicPath)/*JRE*/,#page_section/*McDonald*/,#__next/*pocket*/,#feedlyChrome/*feedly*/,.theme-agoda/*agoda*/,body._a3wf/*instagram*/,.ms-font-s,#UniqueMessageBody/*ms-outlook*/,:is(#EditorContainer,#FontName_NewDropdown,[id*="FontPicker"],data-automationid="main-app-container"/*onedrive*/)) *) {

	font-family:  'Iowan－BT','Noto Serif HK' !important;
 	letter-spacing: 0.025em;
  	font-size-adjust: 0.52 !important;

}

}


@media (pointer: fine) {

:is(html:is([lang="en"],[lang*="en-US"],[lang*="en-GB"],[lang*="en-int"],[lang*="fr"],[lang*="de"],[lang*="it"],[data-locale="US"],[data-locale="GB"]),#page-top/*ctjobs*/,[lang="en-HK"].hydrated/*iherb*/) *:not(button,.fa,.fas,.far,.fal,.fad,.fab,.docon,[class*="fa-"],[class*="icon"],[class*="Icon"],[class*="icomoon"],[class*="logo"],[class*="cart"],[class*="arrow"],[class*="ico-"],span[role="presentation"],[class*="vjs"],i,svg,path,img,.glyphicon,.ico,.ji,.checkmark,.DPvwYc,#datepicker,#app-body #screen-root *,.google-symbols,.tb-ifont,span.doJOZc,
:is(.aAX/*gmail*/,[data-base-title="Google Calendar"],#drive_main_page,#drive_mobile_main_page/*gdrive*/,gf-root/*google_fonts*/,#facebook,ytd-app/*yt*/,.notes-container,#ognwrapper,[class*="VIpgJd"]/*google_notes*/,#onecup/*pushbullet*/,#app ._1Fm4m,#whatsapp-web/*whatsapp*/,#centeredBodyContent/*texteditor*/,#yDmH0d/*google_img*/,.layout--boxed/*Weekendhk*/,#spa-root,#pageAWAI,app-root,.cx-skin,#change-flights-page,.ng-scope/*---CATHY---*/,#root [class*="M_"][style],#root [class*="D_"][style]/*Carousell*/,div.iw_viewport-wrapper/*AA*/,.hfeed.site/*jobsdb*/,.cpj-wrapper/*cpjobs*/,.fHlwaI/*hsbc*/,.css-5305ft/*pocket*/,[data-val="https://new.hongkongairlines.com/hxair/"]/*HKairlines*/,#wrap :is(#jre_multi_header,#contents,#topicPath)/*JRE*/,#page_section/*McDonald*/,#__next/*pocket*/,#feedlyChrome/*feedly*/,.theme-agoda/*agoda*/,body._a3wf/*instagram*/,.ms-font-s,#UniqueMessageBody/*ms-outlook*/,:is(#EditorContainer,#FontName_NewDropdown,[id*="FontPicker"],data-automationid="main-app-container"/*onedrive*/)) *) {

	font-family:  'Iowan－BT','Noto Serif HK' !important;
 	letter-spacing: 0.025em;
  	font-size-adjust: 0.52 !important;

}

:where(div,a,aside,header,h1,h2,h3,h4,h5,h6,hr,li,label,smal l,p,ol,ul,dl,dt,dd,object,blockquote,address,del,dfn,data,datalist,strong,em,embed,q,samp,base,sub,sup,var,video,wbr,font,fieldset,link,map,form,ins,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,dialog,figure,figcaption,figsource,track,template,source,sub,strike,style,footer,hgroup,menu,nav,section,meta,meter,mark,input,iframe,main,form,script,noscript,time,summary,optgroup,option,output,canvas,param,picture,progress,rp,rt,app-root,mb-hub,mb-navigation-bar,router-outlet,mb-hub-summary,mb-modal,mb-header,mb-main,mb-footer,ruby,col,colgroup,details,pre,kbd,abbr,b,br,bdi,bdo,textarea,cite,span,ytd-app *):not(button,.fa,.fas,.far,.fal,.fad,.fab,.docon,[class*="fa-"],[class*="icon"],[class*="Icon"],[class*="icomoon"],[class*="logo"],[class*="cart"],[class*="arrow"],[class*="ico-"],span[role="presentation"],[class*="vjs"],i,svg,path,img,.glyphicon,.ico,.ji,.checkmark,.DPvwYc,#datepicker,#app-body #screen-root *,.tb-ifont,.google-symbols,span.doJOZc,:is(html[lang*="ja"],#EditorContainer,#FontName_New-list,[id*="FontPicker"]) */*onedrive*/,.ms-font-s */*ms-outlook*/,.google-symbols,/*texteditor,Google_fonts*/:where(#centeredBodyContent,gf-root,flt-glass-pane) *),
/*---CATHY---*/:is(#spa-root,#pageAWAI,app-root,.cx-skin,#change-flights-page) *:not([class*="icon"],[class*="icomoon"]) {

	font-family:  'IBM Plex Sans','PingFangSC-Light' !important;
 	letter-spacing: 0.025em;
  	font-size-adjust: 0.52 !important;

}

}


 :is(html[lang*="ja"],#__,#menu_category_list) *:not(button,.fa,.fas,.far,.fal,.fad,.fab,[class*="fa-"],[class*="icon"],[class*="Icon"],[class*="icomoon"],[class*="logo"],[class*="cart"],[class*="arrow"],[class*="ico-"],span[role="presentation"],[class*="vjs"],i,svg,path,img,.glyphicon,.ico,.ji,.checkmark,.DPvwYc,#datepicker,#app-body #screen-root *,.tb-ifont,.google-symbols,span.doJOZc) {

	font-family:  'Murecho' !important;
 	letter-spacing: 0.025em;
  	font-size-adjust: 0.52 !important;

}



@font-face {
	font-family: 'GenSenMaruGothicTW-Light';
    src: url(https://rawcdn.githack.com/auterrykp/Fonts/425066cd1e3c20623619856b8b2810f204367e4c/GenSenMaruGothicTW-Light-07OCT21.woff2) format('woff2');
    unicode-range: U+2000-206F,U+2100-214F,U+2E80-2EFF,U+3000-303F,U+3400-4D8F,U+4E00-9FFF,U+F900-FAFF,U+FF00-FFEF;
}

@font-face {
	font-family: 'STXihei-Light';
    src: url(https://rawcdn.githack.com/auterrykp/Fonts/392074a0afc9b741233f2597084eadcbfbdc7163/STXihei-Light.woff2) format('woff2');
	unicode-range: U+3005-30FF,U+3105-32A3,U+2000-206F,U+2100-214F,U+2E80-2EFF,U+3000-303F,U+3400-4D8F,U+4E00-9FFF,U+F900-FAFF,U+FF00-FFEF;

}

@font-face {
	font-family: 'PingFangSC-Light';
    src: url(https://rawcdn.githack.com/auterrykp/Fonts/9ac3fde5673ecd0bdd630309832c1e216943a367/PingFangSC-Light.woff2) format('woff2');
	unicode-range: U+3005-30FF,U+3105-32A3,U+2000-206F,U+2100-214F,U+2E80-2EFF,U+3000-303F,U+3400-4D8F,U+4E00-9FFF,U+F900-FAFF,U+FF00-FFEF;

}

@font-face {
	font-family: 'PingFangSCRegular.EN';
    src: url(https://rawcdn.githack.com/auterrykp/Fonts/8e9a7bf1a446333b8de3cbfec422046d4e7b8fbd/PingFangSCRegular.woff2) format('woff2');
    unicode-range: U+00-2B11,U+EBE7-FB02;
}

@font-face {
	font-family: 'CathaySans_Lt';
    src: url(https://rawcdn.githack.com/auterrykp/Fonts/e321a95fb49e932beb9afdb6b7870a75e99323a6/CathaySans_Lt.woff2) format('woff2');
    unicode-range: U+00-2B11,U+EBE7-FB02;
}

@font-face {
	font-family: 'SFProDisplay-Light';
    src: url(https://rawcdn.githack.com/auterrykp/Fonts/679060ead1b1df6351962ef7540183a04922fdae/SFProDisplay-Light.woff2) format('woff2');
    unicode-range: U+00-2B11,U+EBE7-FB02;
}

@font-face {
	font-family: 'Iowan－BT';
    src: url(https://rawcdn.githack.com/auterrykp/Fonts/refs/heads/master/iowan.woff) format('woff');
    unicode-range: U+00-2B11,U+EBE7-FB02;
}


  `;
  document.head.appendChild(style);
}());
