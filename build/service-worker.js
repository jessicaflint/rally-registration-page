"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","3ae29d26b1815435c8dad5f4652be90f"],["/static/js/main.9e6aacaf.js","70cc7708c610c9b6c9c793360b9660fa"],["/static/media/AnoRegular-Regular.07d41c05.woff2","07d41c05777a4ed59f3b0875a1d7df1d"],["/static/media/AnoRegular-Regular.25b37a1d.woff","25b37a1da6eaf8847f19d3b407d89976"],["/static/media/AnoRegular-Regular.36e000c2.eot","36e000c22e228f65a1f9dc7ca47acdd4"],["/static/media/AnoRegular-Regular.5ebad178.otf","5ebad178318e24a621b721eacca4ff0c"],["/static/media/AnoRegular-Regular.bcc58bd9.ttf","bcc58bd92927fa937446cbd6e5f83878"],["/static/media/Avenir-Heavy.4db18d25.woff","4db18d25f60aab53b473feb7b9790a1e"],["/static/media/Avenir-Heavy.b0882516.ttf","b0882516d89cc6d826148c396c414aa0"],["/static/media/Avenir-Heavy.ebcd3589.woff2","ebcd35894a2fe7335520b7b582cf0b8e"],["/static/media/Avenir.3992490a.eot","3992490af44e1d70835c697f4e0f607b"],["/static/media/Avenir.b3b06989.otf","b3b06989cdbd59e51633319a5be7851b"],["/static/media/Gotham.0b28710a.ttf","0b28710a605aed91211bd25a19081bae"],["/static/media/Gotham.31389ba2.eot","31389ba2d243c6656a2db89c7c3f2faa"],["/static/media/avenir-heavy.20eb700e.otf","20eb700e33d8bbc52271cade7e785774"],["/static/media/avenir-heavy.5083da54.eot","5083da54713f48cd404888d3d214646f"],["/static/media/avenir.121208aa.ttf","121208aa798efb637c32949acd54b3db"],["/static/media/avenir.3b8ea8b2.woff2","3b8ea8b28180074d95d28ade82cb7311"],["/static/media/avenir.7c6098c3.woff","7c6098c31f8e9e76689fd92dbbe15678"],["/static/media/background.ee980bb9.png","ee980bb9d98a168d69b3dea72b0f212d"],["/static/media/bkg-speaker.d9248a18.png","d9248a18ada2117a4828df64101ee036"],["/static/media/featured-by.a68de473.png","a68de4738408abe1dfcf2928ce34b2fb"],["/static/media/gotham.05efd073.woff","05efd073a24290be3859f0db8316e675"],["/static/media/gotham.49169099.otf","491690995b618360dff6122a7bf19332"],["/static/media/gotham.c422ae90.woff2","c422ae9079940cd4ae6555e6db1b7eaa"],["/static/media/header-ticket.99da8ea6.png","99da8ea66074c32be0147b75a79854f0"],["/static/media/host-jessica.451acfe1.jpg","451acfe1809e4187bd8a39654110660d"],["/static/media/icon-benefit-1.528dcd8e.png","528dcd8e6efe2904b0f1194c7c08aa66"],["/static/media/icon-benefit-2.70ca4c5f.png","70ca4c5fac718250da2320ef45d973ca"],["/static/media/icon-benefit-3.a2aacf5f.png","a2aacf5f15f9bea4e6af830125195380"],["/static/media/icon-benefit-4.9f88ba13.png","9f88ba1317b3f106c9bba85508a188c9"],["/static/media/icon-benefit-5.da3aac5b.png","da3aac5bf0cc4371f81e40656a228891"],["/static/media/icon-difference-1.e0e5e1e5.png","e0e5e1e5d31ff3d75bfe67e1bdd23675"],["/static/media/icon-difference-2.a162e579.png","a162e5797d46ffca1aab2cc1423aaa7b"],["/static/media/icon-difference-3.e0e5e1e5.png","e0e5e1e5d31ff3d75bfe67e1bdd23675"],["/static/media/icon-difference-4.e0e5e1e5.png","e0e5e1e5d31ff3d75bfe67e1bdd23675"],["/static/media/icon-energy-healing.4d6a29cf.png","4d6a29cf6267d4400280a93303296cea"],["/static/media/icon-faq.63b9f2ad.png","63b9f2ad53914fea390e170ea10199e5"],["/static/media/icon-mindfulness.e3306529.png","e330652905684bdb6b519e4ea81e9418"],["/static/media/icon-nutrition.ff9d919e.png","ff9d919ef5abf45a655a25f36a82062f"],["/static/media/icon.dead3782.png","dead37825ae2cc90dfae92538759c51b"],["/static/media/info-psychology.c3b69072.png","c3b69072c1fb8e3ede2caea8c5053998"],["/static/media/info-self-compassion.46ca3dea.png","46ca3dea0881a32b31a6b81339b4ef99"],["/static/media/logo-foodbodylove-v5.17108618.png","17108618f29851e4ffe543e59bd56d47"],["/static/media/logo-foodbodylove.e1cafca7.png","e1cafca7e1cbd36076f8d3a9708c7982"],["/static/media/speaker-anastasia-nevin.212032bf.png","212032bf67f418706d1c737e67089fcc"],["/static/media/speaker-angela-gulner.f3ae28b7.png","f3ae28b7b4e8c344852afdd6f15acf10"],["/static/media/speaker-anita-johnston.117f73ca.png","117f73caa4227b22ae37d3ecdf575ba0"],["/static/media/speaker-anne-ortelee.d4d4d0e2.png","d4d4d0e2edde91f805f738a36cb62c91"],["/static/media/speaker-brandilyn-tebo.f1afe73c.png","f1afe73ca286a16165139e4e1ba7a9fc"],["/static/media/speaker-christy-harrison.337e46ae.png","337e46ae816ce484a5f139e3144e8568"],["/static/media/speaker-colleen-reichman.1ed535bc.png","1ed535bcf389a18d43c33fc5e6f4fbaa"],["/static/media/speaker-eliza-kingsford.fab96470.png","fab964708d6425b0d799f887ec6e91fa"],["/static/media/speaker-evelyn-tribole.a7284a5e.png","a7284a5efea72312df83a8254d8989a9"],["/static/media/speaker-isabel-foxen-duke.4c73c7d5.png","4c73c7d5d68457c0bc4a9391ff0407ea"],["/static/media/speaker-jenni-schaefer.629bc874.png","629bc8748e1cec774cc189a29dcf2e20"],["/static/media/speaker-julie-norman.5bc2bd75.png","5bc2bd75094e864284da2388527211e3"],["/static/media/speaker-leora-fulvio.bca4ba38.png","bca4ba38198f88255abfe0ad3af48d4d"],["/static/media/speaker-mary-anne-cohen.bf12f377.png","bf12f377098ca42517f2c245acbdbffa"],["/static/media/speaker-rebecca-scritchfield.463c8819.png","463c881994047d1d89dfd2280d07d8dd"],["/static/media/speaker-shannon-kopp.7129e6a9.png","7129e6a9a30211b13513e0a9eb4f3b87"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});