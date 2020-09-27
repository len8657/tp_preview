'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0ab9f1099c7c459f73184bdc4fbe5247",
"index.html": "ea795642ba66e49e84d02a12723865e5",
"/": "ea795642ba66e49e84d02a12723865e5",
"main.dart.js": "be26b161d3daf5b9cb2a3d84f8d9cac3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f68a4524cce4620d4ca96ecce36e038f",
"assets/AssetManifest.json": "e069662546653c525802c39a8d88751e",
"assets/NOTICES": "f51172b9d07f52cfadc50b41206cb153",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/StandardSalesControlCommon/images/icon_eye_show@2x.png": "7b001fd0c6919fd84777af7a3fe3d62e",
"assets/packages/StandardSalesControlCommon/images/update_new@2x.png": "6d22f0166561d4beb44aeaa0e96d0f66",
"assets/packages/StandardSalesControlCommon/images/icon_chart_down@2x.png": "7944bbe06e707291dc680ca5abe6d618",
"assets/packages/StandardSalesControlCommon/images/search@2x.png": "aec42bc627bc559b0a0ebda702359a35",
"assets/packages/StandardSalesControlCommon/images/icon_compare_delete@2x.png": "bceae63d481cfca85e2387741a1f7c69",
"assets/packages/StandardSalesControlCommon/images/icon_compare_uncheck@2x.png": "1c8b1f3f34353aa29574720594ded1d6",
"assets/packages/StandardSalesControlCommon/images/icon_return@2x.png": "4211516473e0e8cb3c1c16665b3127d7",
"assets/packages/StandardSalesControlCommon/images/compare_empty@2x.png": "d56ae6b75756e35359678d4ca6933bbb",
"assets/packages/StandardSalesControlCommon/images/icon_compare_check@2x.png": "d63688f8b8f70ecf7fc3d09a1405d4db",
"assets/packages/StandardSalesControlCommon/images/icon_salescontrol_h@2x.png": "0e6fb5fb59baa7e7fc68f1fc70e1ce75",
"assets/packages/StandardSalesControlCommon/images/down@2x.png": "4ee652bd6ec9dfece3d464497bec2db1",
"assets/packages/StandardSalesControlCommon/images/icon_filter_selected@2x.png": "0f5979a7c132dc8b4927cfbc7890d69c",
"assets/packages/StandardSalesControlCommon/images/house_info/house_info_line@3x.png": "1efbab76e627fa2d8bfa1949fe003580",
"assets/packages/StandardSalesControlCommon/images/house_info/house_info_vs@3x.png": "3b47495111ad0fa310c40e513961890f",
"assets/packages/StandardSalesControlCommon/images/house_info/house_VS_sel@3x.png": "6e6415ee7149429ce47452c2e1956d92",
"assets/packages/StandardSalesControlCommon/images/house_info/house_info_btn1@3x.png": "7e5e6b0cefc44bf54a4a6a711d9410ed",
"assets/packages/StandardSalesControlCommon/images/house_info/house_info_vs_sel@3x.png": "712e007570ed9c7af0ef20ce26f482e6",
"assets/packages/StandardSalesControlCommon/images/house_info/house_info_btn3@3x.png": "f32471c1016ed4e7c260e5e78d521f18",
"assets/packages/StandardSalesControlCommon/images/house_info/house_VS@2x.png": "4d00148cc5b9b7cad48d3bae7df97065",
"assets/packages/StandardSalesControlCommon/images/house_info/house_info_layout@3x.png": "90ee293e4e0fb9f3b22be50d77bf76e9",
"assets/packages/StandardSalesControlCommon/images/house_info/8.jpg": "c9f94521dea31af015441c5da280baf1",
"assets/packages/StandardSalesControlCommon/images/house_info/house_info_def2top@3x.png": "d750e4d67acd0343a192d25771b48de1",
"assets/packages/StandardSalesControlCommon/images/house_info/9.jpg": "6c0a4a8c8fbab9ac378bdf15a75480fd",
"assets/packages/StandardSalesControlCommon/images/house_info/house_image_back@3x.png": "11bbabbcd853a0540bf5cce6c4acf16e",
"assets/packages/StandardSalesControlCommon/images/house_info/house_info_layout1@3x.png": "230277f2e2d3a856b34800f87f4e5e98",
"assets/packages/StandardSalesControlCommon/images/house_info/house_info_btn2@3x.png": "3b575807eba94301ba91b6f43dc5e5ba",
"assets/packages/StandardSalesControlCommon/images/house_info/4.jpg": "3174f4db47742f27830b27080f6a0cd2",
"assets/packages/StandardSalesControlCommon/images/house_info/5.jpg": "7b81fb4c9acc008c953a4c287b7b4d61",
"assets/packages/StandardSalesControlCommon/images/house_info/7.jpg": "f8a9c44f77f287bff73186d9fc120972",
"assets/packages/StandardSalesControlCommon/images/house_info/6.jpg": "af9abfdeb2404b5b133015a7b80e3f69",
"assets/packages/StandardSalesControlCommon/images/house_info/2.jpg": "64d4f65015fc3d4db16a0182ba6718b8",
"assets/packages/StandardSalesControlCommon/images/house_info/house_info_def2bto@3x.png": "d25c08f63d3294a91b2fd8f2efb8edb8",
"assets/packages/StandardSalesControlCommon/images/house_info/3.jpg": "e37832929c350a2591b1aa69a07e1dc2",
"assets/packages/StandardSalesControlCommon/images/house_info/1.jpg": "44e512ce3a895d712cce9199d6669957",
"assets/packages/StandardSalesControlCommon/images/house_info/house_info_def1top@3x.png": "f95e3e262e35a50f183065181d76ed64",
"assets/packages/StandardSalesControlCommon/images/up@2x.png": "45f42262acc101aa2924f77f287c1a5d",
"assets/packages/StandardSalesControlCommon/images/list@2x.png": "a02f1bbfddff14de667894396f368818",
"assets/packages/StandardSalesControlCommon/images/message_2@2x.png": "867dcb55f513b4a3faaed4edcdcbdd7a",
"assets/packages/StandardSalesControlCommon/images/return_back@2x.png": "05ddd4f61fddc9a427e5b684a4795d45",
"assets/packages/StandardSalesControlCommon/images/icon_chart_up@2x.png": "ae820151ed789cbdeb727c81d93e2900",
"assets/packages/StandardSalesControlCommon/images/sort@2x.png": "2f4e976fc5fac9518e317306d0f109f5",
"assets/packages/StandardSalesControlCommon/images/icon_mine@2x.png": "dfcb5e66d22bdc9a60d3e9ddb5d34720",
"assets/packages/StandardSalesControlCommon/images/icon_mine_h@2x.png": "c334ac88a505e7572df6b8a1abc3c9d6",
"assets/packages/StandardSalesControlCommon/images/splash.jpg": "032abbe8d382e221b8200005d32b1b4b",
"assets/packages/StandardSalesControlCommon/images/charts@2x.png": "d402258a8b944f056801a0005c6e5dce",
"assets/packages/StandardSalesControlCommon/images/icon_expand@2x.png": "a28abe8de445f58dbf4caa8696a68bc7",
"assets/packages/StandardSalesControlCommon/images/excel@2x.png": "c5e896a47d23c44116786e834bc1f3ae",
"assets/packages/StandardSalesControlCommon/images/wrong@2x.png": "511a65e275c06f0e908b4442fe1439f1",
"assets/packages/StandardSalesControlCommon/images/transaction_plan/tp_addtp@3x.png": "f71e1c7505a83604deb57fcb48396a66",
"assets/packages/StandardSalesControlCommon/images/transaction_plan/tp_edit@2x.png": "ecd3b93ad8a7c15038b5aa876b92387f",
"assets/packages/StandardSalesControlCommon/images/transaction_plan/tp_dropchek_nor@3x.png": "2278686567f243a184b2372a3b826ded",
"assets/packages/StandardSalesControlCommon/images/transaction_plan/tp_house_info@2x.png": "f020354e86e824f6de48ef2dbe8ae979",
"assets/packages/StandardSalesControlCommon/images/transaction_plan/tp_scanf@3x.png": "9dea2a64cc7d8049d4d1cb8e6bcca1bf",
"assets/packages/StandardSalesControlCommon/images/transaction_plan/tp_preview_bg@3x.png": "c2b325c26dd94e00c0ce12dd530ffae3",
"assets/packages/StandardSalesControlCommon/images/transaction_plan/tp_other_add@3x.png": "6a7c3f88d165ddaed4099ac6c0939439",
"assets/packages/StandardSalesControlCommon/images/transaction_plan/tp_dropchek_sel@3x.png": "fb90c07e72c3ba8c9710e21c2d4ba587",
"assets/packages/StandardSalesControlCommon/images/transaction_plan/expand_downarrow@3x.png": "8a9e885cc430ef6fd806454590f85a11",
"assets/packages/StandardSalesControlCommon/images/transaction_plan/tp_more_add@3x.png": "0865eed236ac028a3436da701881ac64",
"assets/packages/StandardSalesControlCommon/images/mine/%25E5%25A4%25AA%25E9%2598%25B3%25E7%25A0%2581@2x.png": "e001e96f82c7102038bcdd9ace2857d2",
"assets/packages/StandardSalesControlCommon/images/mine/icon_change_h@2x.png": "ce32d6b8db9f5de69ae3e0c89cec3b42",
"assets/packages/StandardSalesControlCommon/images/mine/icon_exit@2x.png": "0c1149fa5f2a6b97e0f866d525c6a426",
"assets/packages/StandardSalesControlCommon/images/mine/icon_housepurchase@2x.png": "2f0726c7c5cebe17c4698b71b0a1eae3",
"assets/packages/StandardSalesControlCommon/images/mine/icon_housepurchase_h@2x.png": "c5edc0cf50a2f753d1bd6d702d1c38cf",
"assets/packages/StandardSalesControlCommon/images/mine/icon_new_version@2x.png": "7df2cf747c6bdbefc66abff4e0f4960d",
"assets/packages/StandardSalesControlCommon/images/mine/icon_update_h@2x.png": "a22b9b414b44aa37790d3d31c0dafaf0",
"assets/packages/StandardSalesControlCommon/images/mine/icon_right@2x.png": "f15710bd854662d62d960f410ca28afd",
"assets/packages/StandardSalesControlCommon/images/mine/icon_info_h@2x.png": "51e0258bb80a88edeb3e508a8b712144",
"assets/packages/StandardSalesControlCommon/images/mine/icon_update@2x.png": "5804999f9d5071686c416f42d9c18f28",
"assets/packages/StandardSalesControlCommon/images/mine/icon_sort@2x.png": "c3f89c244432da300f4299a80e623ab7",
"assets/packages/StandardSalesControlCommon/images/mine/icon_info@2x.png": "0445ba8d387a592e6fde335ba72c9385",
"assets/packages/StandardSalesControlCommon/images/mine/icon_selected@2x.png": "9d679ebf99a482cfd09fcf04df72e4e4",
"assets/packages/StandardSalesControlCommon/images/mine/ideamake_logo@2x.png": "f2803317779966a34a271fae168698af",
"assets/packages/StandardSalesControlCommon/images/mine/icon_exit_h@2x.png": "395420aa3bed215ebfa082350ae4d1bb",
"assets/packages/StandardSalesControlCommon/images/mine/icon_right_h@2x.png": "141bba07a003b82485194e58c1ae6aa7",
"assets/packages/StandardSalesControlCommon/images/mine/icon_change@2x.png": "0ff8cbf6232250f04bfff9fc3866059d",
"assets/packages/StandardSalesControlCommon/images/icon_info_normal@2x.png": "9700f9df52094efe2194b6c7bc21ed7f",
"assets/packages/StandardSalesControlCommon/images/icon_filter_normal@2x.png": "6f1f721bdd57577a89bcebf8ba3332c0",
"assets/packages/StandardSalesControlCommon/images/arrow_up@2x.png": "309b9312264246473d4ebcf527c2aae0",
"assets/packages/StandardSalesControlCommon/images/empty@2x.png": "b52cf952a9b0bc57ffab836df2d646bb",
"assets/packages/StandardSalesControlCommon/images/list_selected@2x.png": "a4e77a7285a0e2e43f33f301de903890",
"assets/packages/StandardSalesControlCommon/images/icon_phone_prefix_check@2x.png": "9d679ebf99a482cfd09fcf04df72e4e4",
"assets/packages/StandardSalesControlCommon/images/update@2x.png": "d508c93f60cc5aa12000f931c23bdb82",
"assets/packages/StandardSalesControlCommon/images/message_1@2x.png": "04fdc60fbea8e772304aad74984652b5",
"assets/packages/StandardSalesControlCommon/images/housePlanes/compareItem@2x.png": "d976b64239f7e91366f7cc49db2adecb",
"assets/packages/StandardSalesControlCommon/images/icon_salescontrol@2x.png": "37bf94545d1db6450f5094d3ce5be6c8",
"assets/packages/StandardSalesControlCommon/images/icon_avatar@2x.png": "a0c06b08e7f8c23b29ae89b72a552a3d",
"assets/packages/StandardSalesControlCommon/images/icon_info_selected@2x.png": "fd7e901a64a8e25f89b272d810e0fb01",
"assets/packages/StandardSalesControlCommon/images/icon_mark_left_off@2x.png": "620b1010dfb2a26701fb738f2cf70602",
"assets/packages/StandardSalesControlCommon/images/close@2x.png": "999666c86b149438d9ab6c7d8f7cda34",
"assets/packages/StandardSalesControlCommon/images/excel_selected@2x.png": "b698dc510baa97df2ad5a67c2dc0ad90",
"assets/packages/StandardSalesControlCommon/images/navigator_back@3x.png": "c0bdd631e7a08746801bb085ea2f538f",
"assets/packages/StandardSalesControlCommon/images/icon_mark_left_on@2x.png": "0257306f5b9ef85b04c886ff66c3e00a",
"assets/packages/StandardSalesControlCommon/images/navigator_back_white@3x.png": "8baf802cf8cf34701893e19415ab144a",
"assets/packages/StandardSalesControlCommon/images/icon_eye_hide@2x.png": "99f47a1b5308b5d30b6b13167815a043",
"assets/packages/StandardSalesControlCommon/images/expandFilter@2x.png": "1f4fbce067a8f0743928cb9091bdc7fb",
"assets/packages/StandardSalesControlCommon/images/closeFilter@2x.png": "e8b0ac7ae5b53ff6680bda9c60017be3",
"assets/packages/StandardSalesControlCommon/images/icon_chart_close@2x.png": "3ce5cd6a3af2cdad6fecd9f04e06e041",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
