// ==UserScript==
// @name        CSS Dark
// @namespace   ,
// @include https://*/*
// @include http://*/*
// @author      ogmicco
// @version     1.1
// @description userscript that loads custom css on any webpage
// @license MIT
// @resource    CUSTOM_CSS     https://static.staticsave.com/auterrykpcss/webcss-1.css
// @resource    CUSTOM_CSS_2   https://static.staticsave.com/auterrykpcss/webcss-2.css
// @resource    CUSTOM_CSS_3   https://static.staticsave.com/auterrykpcss/webcss-3.css
// @resource    CUSTOM_CSS_4   https://static.staticsave.com/auterrykpcss/others.css

//@exclude     file:///C:/Users/auter/My%20Drive/MarknBookMark.html
// @exclude     *://*.toyoko-inn/*
// @exclude     *://*.hotespa.net/*
// @exclude     *://*.cathaypacific.com/*
// @exclude     *://*.hkexpress.com/*
// @exclude     *://*.force.com/*
// @exclude     *://*.whatsapp.com/*
// @exclude     *://*.docusign.com/*
// @exclude     *://*.feedly.com/*
// @exclude     *://*.service-now.com/*
// @exclude     *://*.sapsf.com/*
// @exclude     *://*.wifi-cloud.jp/*
// @exclude     *://*.digital.go.jp/*
// @exclude     *://*.hyperair.com/*
// @exclude     *://*.epub.stoneapp.tech/*
// @exclude     *://*.flightaware.com/*
// @exclude     *://*.xe.com/*
// @exclude     *://*.priceline.com/*
// @exclude     *://*.trivago/*
// @exclude     *://*.unplan.jp/*
// @exclude     *://*.fromjapan.co.jp/*
// @exclude     *://*.jorudan.co.jp/*
// @exclude     *://*.navitime/*
// @exclude     *://*.bookingx.io/*
// @exclude     *://*.booking.co/*
// @exclude     *://*.retty.me/*
// @exclude     *://*.tabelog/*
// @exclude     *://*.tenki.jp/*
// @exclude     *://*.ctshk.com/*
// @exclude     *://weather.com/*
// @exclude     *://*.aso.ne.jp/*
// @exclude     *://*.mitsui-shopping-park.com/*
// @exclude     *://*.jma.go.jp/*
// @exclude     *://*.weathermap.jp/*
// @exclude     *://*.weathernews.jp/*
// @exclude     *://*.coinlocker.click/*
// @exclude     *://*.cloak.ecbo.io/*
// @exclude     *://*.daiso/*
// @exclude     *://*.au.com/*
// @exclude     *://*.docomo.ne.jp/*
// @exclude     *://*.softbank.jp/*
// @exclude     *://*.aeoncity/*
// @exclude     *://*.aeonstores.com.hk/*
// @exclude     *://*.yata.hk/*
// @exclude     *://*.citysuper.com/*
// @exclude     *://*.eventbrite.com/*
// @exclude     *://*.759store.com/*
// @exclude     *://*.bestmart360.com/*
// @exclude     *://*.manageengine.com/*
// @exclude     *://*.astri.org/*
// @exclude     *://*.disney.com/*
// @exclude     *://*.usj.co.jp/*
// @exclude     *://*.hoshinoya/*
// @exclude     *://*.yahoo.co/*
// @exclude     *://*.loft.co.jp/*
// @exclude     *://*.kitte.jp/*
// @exclude     *://*.hands.net/*
// @exclude     *://*.rakuten/*
// @exclude     *://*.asics-trading/*
// @exclude     *://*.fril.jp/*
// @exclude     *://*.hellotoby.com/*
// @exclude     *://*.ptt.cc/*
// @exclude     *://*.google.co*/*
// @exclude     *://*.chrome.com/*
// @exclude     *://*.fubonbank.com.hk/*
// @exclude     *://*.wise.com/*
// @exclude     *://*.openrice.com/*
// @exclude     *://*.moneyhero.com/*
// @exclude     *://*.hangseng.com/*
// @exclude     *://*.expedia.co*/*
// @exclude     *://*.chk.com.hk/*
// @exclude     *://*.hthkh.com/*
// @exclude     *://*.hktdc.com/*
// @exclude     *://*.hutchison-whampoa.com/*
// @exclude     *://*.hutchisonports.com/*
// @exclude     *://*.swireproperties.com/*
// @exclude     *://*.swire.com/*
// @exclude     *://*.haeco.com/*
// @exclude     *://*.successfactors.com/*
// @exclude     *://*.netdimensions.com/*
// @exclude     *://*.unily.com/*
// @exclude     *://*.ibm.com/*
// @exclude     *://*.bhphotovideo.com/*
// @exclude     *://*.amazon/*
// @exclude     *://*.ebay.co/*
// @exclude     *://*.pret.hk/*
// @exclude     *://*.ztore.com/*
// @exclude     *://*.yoshinoya/*
// @exclude     *://*.wellcome.com.hk/*
// @exclude     *://*.h-musubi.com/*
// @exclude     *://*.mannings.com.hk/*
// @exclude     *://*.hktvmall.com/*
// @exclude     *://*.lojel.com/*
// @exclude     *://*.echolac.com/*
// @exclude     *://*.asiamiles.com/*
// @exclude     *://*.standardchartered.com/*
// @exclude     *://*.moko.com/*
// @exclude     *://*.harbourcity.com/*
// @exclude     *://*.langhamplace.com/*
// @exclude     *://*.timessquare.com/*
// @exclude     *://*.cityplaza.com/*
// @exclude     *://*.k11/*
// @exclude     *://*.pns.hk/*
// @exclude     *://*.citywalk.com/*
// @exclude     *://*.oceanpark.com/*
// @exclude     *://*.elementshk.com/*
// @exclude     *://*.miraplace.com/*
// @exclude     *://*.festivalwalk.com/*
// @exclude     *://*.maritimesquare.com/*
// @exclude     *://*.metroplaza.com.hk/*
// @exclude     *://*.ifc.com/*
// @exclude     *://*.thewaimall.com/*
// @exclude     *://*.yohomall.hk/*
// @exclude     *://*.ninamall.com/*
// @exclude     *://*.iloveimg.com/*
// @exclude     *://*.pinetools.com/*
// @exclude     *://*.fotor.com/*
// @exclude     *://*.dianping.com/*
// @exclude     *://*.landmark.hk/*
// @exclude     *://*.citygateoutlets.com/*
// @exclude     *://*.isquare.hk/*
// @exclude     *://*.leegardens.com/*
// @exclude     *://*.fairwood.com.hk/*
// @exclude     *://*.godiva.com/*
// @exclude     *://*.cafedecoralfastfood.com/*
// @exclude     *://*.dondonya.com.hk/*
// @exclude     *://*.maximsmx.com.hk/*
// @exclude     *://*.hongkongdisneyland/*
// @exclude     *://*.dondondonki.com/*
// @exclude     *://*.tjsamgor.com/*
// @exclude     *://*.roycechocolate.com/*
// @exclude     *://*.eslite.com/*
// @exclude     *://*.casio.com/*
// @exclude     *://*.venchi.com/*
// @exclude     *://*.mosburger/*
// @exclude     *://*.komeda.co/*
// @exclude     *://*.wako-group.co/*
// @exclude     *://*.soup-stock-tokyo.co/*
// @exclude     *://*.doutor.co/*
// @exclude     *://*.tullys.co/*
// @exclude     *://*.genkisushi.com.hk/*
// @exclude     *://*.hkpc*.org/*
// @exclude     *://*.fevaworks.com/*
// @exclude     *://*.oasistrek.com/*
// @exclude     *://*.three.com.hk/*
// @exclude     *://*.smartone.com/*
// @exclude     *://*.chinamobile.com/*
// @exclude     *://*.wilsoncomm.com.hk/*
// @exclude     *://*.1010.com/*
// @exclude     *://*.hkt.com/*
// @exclude     *://*.pccw.com/*
// @exclude     *://*.clubsim.com.hk/*
// @exclude     *://*.hkcsl.com/*
// @exclude     *://*.netvigator.com/*
// @exclude     *://*.gu-global/*
// @exclude     *://*.uniqlo.co/*
// @exclude     *://*.tokyodesignchannel.com/*
// @exclude     *://*.ymca/*
// @exclude     *://*.yas.io/*
// @exclude     *://*.zara.com/*
// @exclude     *://*.coinlocker-navi.com/*
// @exclude     *://*.taleo.net/*
// @exclude     *://*.careerjet.hk/*
// @exclude     *://*.lumessetalentlink.com/*
// @exclude     *://*.myworkdayjobs/*
// @exclude     *://*.pageuppeople.com/*
// @exclude     *://*.michaelpage.com.hk/*
// @exclude     *://*.randstad.com/*
// @exclude     *://*.ctgoodjobs/*
// @exclude     *://*.cpjobs.com/*
// @exclude     *://*.glassdoor.com/*
// @exclude     *://*.kos-intl.com/*
// @exclude     *://*.jobsdb.com/*
// @exclude     *://*.hotel-story.ne.jp/*
// @exclude     *://*.yoshikawa-/*
// @exclude     *://*.kakaku.com/*
// @exclude     *://*.fatsecret.com/*
// @exclude     *://*.hkbn.net/*
// @exclude     *://*.nipponrentacar.co.jp/*
// @exclude     *://*.nrgroup-global.com/*
// @exclude     *://*.timescar-rental.com/*
// @exclude     *://*.nissan-rentacar.com/*
// @exclude     *://*.tocoo.jp/*
// @exclude     *://*.budgetrentacar.co.jp/*
// @exclude     *://*.toyota.co.jp/*
// @exclude     *://*.holidays-calendar.net/*
// @exclude     *://*.shopee.tw/*
// @exclude     *://*.eebus.com/*
// @exclude     *://*.taobao.com/*
// @exclude     *://*.tmall.com/*
// @exclude     *://*.runnet.jp/*
// @exclude     *://*.shonan-kokusai.jp/*
// @exclude     *://*.marathon/*
// @exclude     *://*.allsports.jp/*
// @exclude     *://*.willerexpress.com/*
// @exclude     *://*.mapion.co.jp/*
// @exclude     *://*.willer.co.jp/*
// @exclude     *://*.japanrailpass/*
// @exclude     *://*.cookly.me/*
// @exclude     *://*.minamiechigo.co.jp/*
// @exclude     *://*.kotsu.co.jp/*
// @exclude     *://*.jrbustohoku.co.jp/*
// @exclude     *://*.atbus-de.com/*
// @exclude     *://*.highway-buses.jp/*
// @exclude     *://*.nishinihonjrbus.co.jp/*
// @exclude     *://*.sunqpass.jp/*
// @exclude     *://*.meitetsu.co.jp/*
// @exclude     *://*.fujikyu/*
// @exclude     *://*.bushikaku.net/*
// @exclude     *://*.alpico.co.jp/*
// @exclude     *://*.highwaybus.com/*
// @exclude     *://*.jr-shikokubus.co.jp/*
// @exclude     *://*.kosokubus.com/*
// @exclude     *://*.kousokubus.net/*
// @exclude     *://*.nexco.co.jp/*
// @exclude     *://*.jreast.co.jp/*
// @exclude     *://*.nishitetsu.jp/*
// @exclude     *://*.jr-central.co.jp/*
// @exclude     *://*.jr-shikoku.co.jp/*
// @exclude     *://*.jrhokkaido.co.jp/*
// @exclude     *://*.n-kishou.co.jp/*
// @exclude     *://*.keikyu.co/*
// @exclude     *://*.jrkyushu.co.jp/*
// @exclude     *://*.westjr.co.jp/*
// @exclude     *://*.reservation.jp/*
// @exclude     *://*.first-cabin.jp/*
// @exclude     *://*.titohiking.com.tw/*
// @exclude     *://*.insightmountain/*
// @exclude     *://*.hillmont.tw/*
// @exclude     *://*.buyandship/*
// @exclude     *://*.baidu./*
// @exclude     *://*.xunlei.com/*
// @exclude     *://*.square-enix/*
// @exclude     *://*.teamlab.art/*
// @exclude     *://*.gamecity.com.tw/*
// @exclude     *://*.foodorder.today/*
// @exclude     *://*.*.order.place/*
// @exclude     *://*.ricepon.com/*
// @exclude     *://*.kef.com/*
// @exclude     *://*.hkjc.com/*
// @exclude     *://*.outletexpress.com/*
// @exclude     *://*.cityline.com/*
// @exclude     *://*.loco.hk/*
// @exclude     *://*.hongkongcard.com/*
// @exclude     *://*.hkgolden.com/*
// @exclude     *://*.lihkg.com/*
// @exclude     *://*.hkftustsc/*
// @exclude     *://*.xdaforums.com/*
// @exclude     *://*.discuss.com.hk/*
// @exclude     *://*.uwants.com/*
// @exclude     *://*.price.com.hk/*
// @exclude     *://*.eki-net.com/*
// @exclude     *://*.sc.com/*
// @exclude     *://*.octopus.com.hk/*
// @exclude     *://*.mtr.com.hk/*
// @exclude     *://*.missav.com/*
// @exclude     *://*.ffjav.com/*
// @exclude     *://*.hotpepper.jp/*
// @exclude     *://*.fujisan.co.jp/*
// @exclude     *://*.flickr.com/*
// @exclude     *://*.rurubu.jp/*
// @exclude     *://*.linefriends.co/*
// @exclude     *://*.supleks.jp/*
// @exclude     *://*.hongkongpost.hk/*
// @exclude     *://*.hsbc.co/*
// @exclude     *://*.uber.com/*
// @exclude     *://*.xda-developers.com/*
// @exclude     *://*.w3schools.com/*
// @exclude     *://*.tenkura.n-kishou.co.jp/*
// @exclude     *://*.montbell/*
// @exclude     *://*.west-shop.co.jp/*
// @exclude     *://*.centadata.com/*
// @exclude     *://*.omo-hotels/*
// @exclude     *://*.chizumaru.com/*
// @exclude     *://*.family.co.jp/*
// @exclude     *://*.sej.co.jp/*
// @exclude     *://*.l-tike.com/*
// @exclude     *://*.lawson/*
// @exclude     *://*.azurewebsites/*
// @exclude     *://*.self-order.app/*
// @exclude     *://*.mcdonalds/*
// @exclude     *://*.github.com/*
// @exclude     *://*.nihon-kankou/*
// @exclude     *://*.rurubu/*
// @exclude     *://*.steampowered.com/*
// @exclude     *://*.qnap.com/*
// @exclude     *://*.xbox.com/*
// @exclude     *://*.office365.com/*
// @exclude     *://*.office.com/*
// @exclude     *://*.windows.com/*
// @exclude     *://*.rapoo-eu/*
// @exclude     *://*.microsoft/*
// @exclude     *://*.powerapps.com/*
// @exclude     *://*.outlook.co/*
// @exclude     *://*.reddit.com/*
// @exclude     *://*.staticsave.com/*
// @exclude     *://*.000webhost.com/*
// @exclude     *://*.quora.com/*
// @exclude     *://*.wingontravel/*
// @exclude     *://*.walkerplus.com/*
// @exclude     *://*.jorudan.co.jp/*
// @exclude     *://*.carousell.com/*
// @exclude     *://*.supersports.com/*
// @exclude     *://*.mercari/*
// @exclude     *://*.buyee.jp/*
// @exclude     *://*.ichiran.com/*
// @exclude     *://*.16seats.net/*
// @exclude     *://*.moovitapp.com/*
// @exclude     *://*.kmb.hk/*
// @exclude     *://*.citybus.com.hk/*
// @exclude     *://*.sunferry.com/*
// @exclude     *://*.bravobus.com/*
// @exclude     *://*.traway.com.hk/*
// @exclude     *://*.agoda/*
// @exclude     *://*.1688.com/*
// @exclude     *://*.qq.com/*
// @exclude     *://*.antbank.hk/*
// @exclude     *://*.mpaymall.com/*
// @exclude     *://*.alipayhk.com/*
// @exclude     *://*.alipay.com/*
// @exclude     *://*.alipay.hk/*
// @exclude     *://*.paydollar.com/*
// @exclude     *://*.aliyundrive/*
// @exclude     *://*.weibo/*
// @exclude     *://*.twitter.com/*
// @exclude     *://*.facebook.com/*
// @exclude     *://*.icloud.com/*
// @exclude     *://*.apple.com/*
// @exclude     *://*.muji./*
// @exclude     *://*.500px.com/*
// @exclude     *://*.dpreview.com/*
// @exclude     *://*.timable.com/*
// @exclude     *://*.*.museum/*
// @exclude     *://*.icho.hk/*
// @exclude     *://*.discoverhongkong/*
// @exclude     *://*.nitori-net/*
// @exclude     *://*.nitori.com.hk/*
// @exclude     *://*.francfranc.net/*
// @exclude     *://*.ikea./*
// @exclude     *://*.mi.com/*
// @exclude     *://*.clp*.com/*
// @exclude     *://*.mastercard.com/*
// @exclude     *://*.adyen.com/*
// @exclude     *://*.mobile01.com/*
// @exclude     *://*.baby-kingdom.com/*
// @exclude     *://*.eyny.com/*
// @exclude     *://*.iherb.com/*
// @exclude     *://*.starbucks.com/*
// @exclude     *://*.maxims.com.hk/*
// @exclude     *://*.decathlon.com.hk/*
// @exclude     *://*.eats365pos.com/*
// @exclude     *://*.pacificcoffee.com/*
// @exclude     *://*.hku.hk/*
// @exclude     *://*.edu.hk/*
// @exclude     *://*.ln.hk/*
// @exclude     *://*.midland.com.hk/*
// @exclude     *://*.aastocks.com/*
// @exclude     *://*.sharepoint.com/*
// @exclude     *://*.mytvsuper.com/*
// @exclude     *://*.tvb.com/*
// @exclude     *://*.fatsecret.com/*
// @exclude     *://*.clubtravel.com.hk/*
// @exclude     *://*.theclub.com.hk/*
// @exclude     *://*.zoom.us/*
// @exclude     *://*.foodcloud./*
// @exclude     *://*.foodpanda.hk/*
// @exclude     *://*.sevenrooms.com/*
// @exclude     *://*.elecboy.com/*
// @exclude     *://*.fortress.com.hk/*
// @exclude     *://*.broadwaylifestyle.com/*
// @exclude     *://*.deliveroo.hk/*
// @exclude     *://*.hkcpss.com.hk/*
// @exclude     *://*.intel.com/*
// @exclude     *://*.hongkongpost.hk/*
// @exclude     *://*.versus.com/*
// @exclude     *://*.userbenchmark.com/*
// @exclude     *://*.ricacorp.com/*
// @exclude     *://*..org/*
// @exclude     *://*.bupa.com/*
// @exclude     *://*.qhms.com/*
// @exclude     *://*.bochk.com/*
// @exclude     *://*.centamortgage.com/*
// @exclude     *://*.samsung.com/*
// @exclude     *://*.sony-asia.com/*
// @exclude     *://*.sony./*
// @exclude     *://*..canon/*
// @exclude     *://*.canon./*
// @exclude     *://*.nikon./*
// @exclude     *://*.nikon-image.com/*
// @exclude     *://*.apkpure.com/*
// @exclude     *://*.songmatin.com/*
// @exclude     *://*.apkmirror.com/*
// @exclude     *://*.paypal.com/*
// @exclude     *://*.mentimeter.com/*
// @exclude     *://*.pricerite.com.hk/*
// @exclude     *://*.philips.com/*
// @exclude     *://*.panasonic.hk/*
// @exclude     *://*.playstation.com/*
// @exclude     *://*.netflix.com/*
// @exclude     *://*.shazam.com/*
// @exclude     *://*.spotify.com/*
// @exclude     *://*.live.com/*
// @exclude     *://*.trip.com/*
// @exclude     *://*.cheapflights.com.hk/*
// @exclude     *://*.seatguru.com/*
// @exclude     *://*.flightradar24.com/*
// @exclude     *://*.watsons.com.hk/*
// @exclude     *://*.overlander.com.hk/*
// @exclude     *://*.adobe.com/*
// @exclude     *://*.yohohongkong.com/*
// @exclude     *://*.cipssps.com/*
// @exclude     *://*.airport/*
// @exclude     *://*.tokyo-haneda.com/*
// @exclude     *://*.shoponjc.com/*
// @exclude     *://*.jumbo-computer.com/*
// @exclude     *://*.builtinpro.hk/*
// @exclude     *://*.fujitsu*.com/*
// @exclude     *://*.lenovo.com/*
// @exclude     *://*.wellent.com/*
// @exclude     *://*.dell.com/*
// @exclude     *://*.hpstore.cn/*
// @exclude     *://*.hp.com/*
// @exclude     *://*.sofmap.com/*
// @exclude     *://*.biccamera.com/*
// @exclude     *://*.shunhing-service.com/*
// @exclude     *://*.zozo.jp/*
// @exclude     *://*.shew.com.hk/*
// @exclude     *://*.shesc.com/*
// @exclude     *://*.powerbi.com/*
// @exclude     *://*.himaraya.co.jp/*
// @exclude     *://*.yodobashi*.com/*
// @exclude     *://*.jd.com
// @exclude     *://*./*
// @exclude     *://*.52zcmm.xyz/*
// @exclude     *://*.kahoot.it/*
// @exclude     *://*.westkowloon.hk/*
// @exclude     *://*.klook.com/*
// @exclude     *://*.kkday.com/*
// @exclude     *://*.jalan.net/*
// @exclude     *://*.buffalo.jp/*
// @exclude     *://*.elecom.co.jp/*
// @exclude     *://*.viu.tv/*
// @exclude     *://*.viu.com/*
// @exclude     *://*.cloudconvert.com/*
// @exclude     *://*.dintaifung/*
// @exclude     *://*.taikwun.hk/*
// @exclude     *://*.airbnb.co/*
// @exclude     *://*.*.tokyo/*
// @exclude     *://*.gov.hk/*
// @exclude     *://*.hkmca.hk/*
// @exclude     *://*.immigration.gov.tw/*
// @exclude     *://*.etnet.com.hk/*
// @exclude     *://*.linkedin.com/*
// @exclude     *://*.pitcl.com.hk/*
// @exclude     *://*.funbid.com.hk/*
// @exclude     *://*.28hse.com/*
// @exclude     *://*.getpocket.com/*
// @exclude     *://*.hotel/*
// @exclude     *://*.tripadvisor/*
// @exclude     *://*.centanet.com/*
// @exclude     *://*.flypeach./*
// @exclude     *://*.lufthansa./*
// @exclude     *://*.amadeus./*
// @exclude     *://*.ana.co.jp/*
// @exclude     *://*.jal.co.jp/*
// @exclude     *://*.hongkongairlines.com/*
// @exclude     *://*.greaterbay-airlines.com/*
// @exclude     *://*.kuronekoyamato.co.jp/*
// @exclude     *://*.japanpost.jp/*
// @exclude     *://*.tabirai.net/*
// @exclude     *://*.ecnpl.net/*
// @exclude     *://*.sf-express.com/*
// @exclude     *://*.sagawa-exp.co.jp/*
// @exclude     *://*.kerryexpress.com/*
// @exclude     *://*.glico.com/*
// @exclude     *://*.hotelscombined/*
// @exclude     *://*.musbi.net/*
// @exclude     *://*.snapdrop.net/*
// @exclude     *://*.dropbox.com/*
// @exclude     *://*.abc-mart.net/*
// @exclude     *://*.youtube.com/*
// @exclude     *://*.tiktok.com/*
// @exclude     *://*.hoshinoresorts./*
// @exclude     *://*.myjapan.hk/*
// @exclude     *://*.japan.travel/*
// @exclude     *://*.bilibili.com/*
// @exclude     *://*.entertainment14.net/*
// @exclude     *://*.howtogeek.com/*
// @exclude     *://*.vimeo.com/*
// @exclude     *://*.booky.io/*
// @exclude     *://*.hirevue.com/*
// @exclude     *://*.mega.nz/*
// @exclude     *://*.192.168./*
// @exclude     *://*.fanpiece.com/*
// @exclude     *://*.pinterest.com/*
// @exclude     *://*.gettyimages/*
// @exclude     *://*.torrentkitty/*
// @exclude     *://*.o2pcn.com/*
// @exclude     *://*.stockphotos.com/*
// @exclude     *://*.instagram.com/*
// @exclude     *://*.texteditor.co/*
// @exclude     *://*.convertcase.net/*
// @exclude     *://*.asics.com/*
// @exclude     *://*.timberland/*
// @exclude     *://*.farfetch.com/*
// @exclude     *://*.salomon.com/*
// @exclude     *://*.mclcinema.com/*
// @exclude     *://*.wmoov.com/*
// @exclude     *://*.cinema.com.hk/*
// @exclude     *://*.bluebottlecoffee/*
// @exclude     *://*.jp.sharp/*
// @exclude     *://*.sharp.co.jp/*
// @exclude     *://*.gnavi.co.jp/*
// @exclude     *://*.gurunavi.com/*
// @exclude     *://*.headland.com.hk/*
// @exclude     *://*.fourseasons.com/*
// @exclude     *://*.myfitnesspal.com"/*

// @grant       GM_addStyle
// @grant       GM_getResourceText
// @match        *://*/*
// @run-at      document-start
// @downloadURL https://update.greasyfork.org/scripts/453830/Custom%20CSS%20Loader.user.js
// @updateURL https://update.greasyfork.org/scripts/453830/Custom%20CSS%20Loader.meta.js
// ==/UserScript==

var cssTxt_1  = GM_getResourceText ("CUSTOM_CSS");
console.log(cssTxt_1);
GM_addStyle (cssTxt_1);

var cssTxt_2 = GM_getResourceText ("CUSTOM_CSS_2");
console.log(cssTxt_2);
GM_addStyle (cssTxt_2);

var cssTxt_3 = GM_getResourceText ("CUSTOM_CSS_3");
console.log(cssTxt_3);
GM_addStyle (cssTxt_3);

var cssTxt_4 = GM_getResourceText ("CUSTOM_CSS_4");
console.log(cssTxt_4);
GM_addStyle (cssTxt_4);
