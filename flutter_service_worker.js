'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0ab9f1099c7c459f73184bdc4fbe5247",
"index.html": "f8daddee0d7aa3ff70b4e7591bcbd5b0",
"/": "f8daddee0d7aa3ff70b4e7591bcbd5b0",
"main.dart.js": "41577f55c33bee0e3d424f18b313df51",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f68a4524cce4620d4ca96ecce36e038f",
".git/config": "caf4641ee7ba8ae06b91b6796823fce6",
".git/objects/0d/0c8d683ae3f5411410ab6fb34d7e5449b73fa7": "64530fd58186ae4481096b40eea224b4",
".git/objects/0d/c888efd1930706ff3858fae113738bea829058": "f003da9487d3fae73e4dba1d027a7153",
".git/objects/92/37d08e91b34d4d3d344ac122f906d7f2ddef4f": "d3dcf132f539de7f319eda4daae4b652",
".git/objects/57/04d2db1ebbd14ecf91315957f8841206dabfe3": "0d17f2041d067810a845475d515e09d1",
".git/objects/3b/4a2cca883017d8d6d6712b6d71ce3c22b5b840": "8722c43a471a56958f82e14eb4eba2ea",
".git/objects/3b/16ba065f9438155ee77e7be4277c76930fea2c": "4a0ef7fee22995777fb2603e828009ea",
".git/objects/3b/f06ea313ab4e08cd7cf04a95504d0ae0b5ba3e": "04aa8cb71e613da25d60ff6569adeeda",
".git/objects/3b/3f2ede72c542c0481dedd8085041ef1bec92f3": "4533d5a8da8698b83753549901cea5c8",
".git/objects/9b/a16f19d3934496e1c67447f86294099cbf9e44": "96a010d46ae9a883e08dcc700f11447d",
".git/objects/9e/ea4663183b5f69fd5a378ef5d640fdcc15c0bb": "939a20357c4a69d034afc25610f52c5f",
".git/objects/32/6a25297bef8f9f50b24b9db18c8b517f9505cb": "beb111de1f8603bb4ab8837af9923c28",
".git/objects/35/26e07079ef71d8ba006e94eff9b5466a79caec": "8258c60e5bb91cd96cdc80c5d135411c",
".git/objects/51/917c4448b3b0105d2866ba6b63f55f983e87ef": "22fe468441507f2479341fb2b0ed2afd",
".git/objects/67/2770150f6dc4d781f2a3927f9886c9ac0449e7": "40fa433ddf73be1c71a056025e02bf1c",
".git/objects/94/e4594fa10e1cdf1738ca084d153e98b708d5a3": "0e85354d987f558972e3925aa29bf642",
".git/objects/94/4922de312325528c5e209cecf46e9cfdce509e": "864b2db36928b2214f7d66a1b374d45b",
".git/objects/94/2904b91392e25ff0da192a887e9595b5d7d12e": "84c0909c423c6086adb488f35fcb542b",
".git/objects/0e/8c94e89bb89b9fbf4671ff45fff65bc3177592": "a54c14254906ae6b38160acea4271efc",
".git/objects/05/4252775d6f81749b801f9971ec59d6fd39e9d8": "e3413901059298c7894a6b2e415ca34c",
".git/objects/05/263caba8a0dcda5785b4342171c870ea9c357a": "73358d4e49ade181cec327685c36d9e2",
".git/objects/a4/1638e60942185f662d048faf1106468d30366c": "3520db5ad92632d8d1cac717d345f2c8",
".git/objects/a3/290fc660045cf43da19e9960c2e699ffa4d59a": "8ba738a383c52a94ba35f461101ec947",
".git/objects/a3/92ced0a56b014b9dab23f9ef0019bb309a4c66": "267473e4b6dad6a07a71380dc7da14f0",
".git/objects/b2/012488ac5ceef01142645ae32fade98dfdb7ad": "e0ed96ca9cadf4ad5ec45d81246cc6bf",
".git/objects/d9/a689548cfbc024a08de73b1a803f8c3fe1284a": "8820b493081e31ff879bfe7e5a4cd3fb",
".git/objects/d0/7f2dd44c8133a2e537dbb85da4a36328564ecb": "2a3bcecda781767151cf364a1083b64a",
".git/objects/be/0b38f1d8f218d08122de044932e201790b667f": "275422e01b86fca28aa0c504589416b4",
".git/objects/da/ed9c198a9dc75c02fa7c9b76852a7efcb9a232": "4f094e392cbd0eb004071db4f1f41a96",
".git/objects/a2/a332ddfefa30069e1b5508cdb95dab0968ac87": "e9ae7b4a0e1c0676ba82056271c8341e",
".git/objects/bd/33f71aa7d6e4d1558dbd23e838da140ecd2ba8": "572e2da0c87f5bb904dc615b547fe82a",
".git/objects/bd/15b771a82eb93b3fdd8f31668553298c94cc9b": "cd8cf0b75ae2cb804c20b63143b7b520",
".git/objects/d6/d09ee32812f5ba6cb5ca963cf1cf9ccfe98672": "b448e9f6aab9d9d5221229fbebfb455c",
".git/objects/ae/8d2f0202578f08d84d2db59ffde538c39442ff": "7624b67321a301f1ffbe0ae264ad8266",
".git/objects/e5/2f2be9bb4fab1d01ff7c4bbefa262ad308c7d1": "3300141ffe526c0acd6a6b123798c781",
".git/objects/e5/816c4f3f757af29159b0e9dcd293161e5e0d96": "66a0401a2524cac03d2deb6313afb1cd",
".git/objects/c0/cf1a107cadf8f4f46ca4fac321d5c2144a037c": "84d223326c3d2465da8f6f0e0df13679",
".git/objects/c0/e40a89f2b079d2155a80307444c12faa419f3a": "8a7a64082a5d047abf61b2716c45cb8a",
".git/objects/fd/76a7cf3ba3d1868919055abbc1c950a54dc879": "ef93161ba8a1ac4206b328197d5d96ad",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/e4/b0737a57836d7e58b3a9813e5ab58c9a7a809e": "9f32a727a59065489c74ebe06ed95fc6",
".git/objects/e4/2d107def7ea314c79156667165772b40045480": "7bc0f1b20ac1d9f4efca291bda140591",
".git/objects/fe/00f6df3c4853f42762cf8731f7fba962f64fd8": "dafe694aa1218e9ecd0024eecdda21df",
".git/objects/c8/2aa6e50dac3cf7332309b8b3704e7a23478c65": "d36be4104a522f7440149d264e4997c7",
".git/objects/c6/b7e21490b9063532c32a08a1f617dd4d1d79cb": "4b91327de4d04a4767e18859976f550c",
".git/objects/4e/5e4f33ceff07dd8742f6576acf71607c53dda8": "b9483c62558d329516d1f5b1d44bfa67",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/903fb2a7bdc54fd10f9a9ae0c667eaf198b887": "ea404253f5829f2351c9b4b4082c3785",
".git/objects/7c/46ff9368add4bbd18fbd7778eebdd880231fbc": "80f675e22fa46cf8e230cacf9cebf8f6",
".git/objects/89/d9e04a05817827cefe790808370a4c15fe38af": "5bd812bdbe9b06887dd2580a0dfeb098",
".git/objects/1f/6b39ae8c0f742b6d87e3a1cd87bbbce41f37e0": "212f38942ba31d404fe134ca0a26406c",
".git/objects/28/9e81190f6ecd3990ce259ae6bf2928e2bf3ca5": "a4bc2c1c73f4ae74da319669205c15a8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/825bcc7531e9a0cff33c8acd8a9b0d9fe8b03e": "38b17fb1c9a0c483a724222e9e4d142e",
".git/objects/4c/c1f02616cccade50e2ba884d83a4800045a6c8": "ed272c1893869df83d1df00a1ad1ffe7",
".git/objects/21/ba09afb3f0be8be03d6029a96a900579efb868": "490c68d0ec2c4ceac19e76b4093a1c69",
".git/objects/81/aa04d92ff1366f93c8e8fca6cb877f78e491da": "6c754da2984da85dde2fb974d47d6dee",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/44/553fcc6760c95d116b3d9c748664112247763c": "72f4c723692af868affa921de438fb69",
".git/objects/44/af1e91740167c74183cb337b40078821c733b2": "beee99fdafc02387681e4865b000cd72",
".git/objects/44/614181cee676ab5aaa15ab6570b903a4a763d9": "8788f772a2da1b911ab8bbb64fbb90db",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/9ab9d91cdc215c9d60237ad6ccfdbe31914f3b": "85514a0feba454e89f3a5b1d023dc58c",
".git/objects/6e/bb33e94feddbaba91d94beba359145c511bab1": "39d5f13e4f86aba5eb09f9b6c6ba3a94",
".git/objects/9a/db9fe553dfc12b7e929919b61edccfd80f4a7c": "97200d8505eecc01e9b381bf92ffcdda",
".git/objects/9a/dd1d894a3f07183eb85f6ae3ae0c898b1f73fd": "6fdc8a5e199b0e06f445d52feff01b6e",
".git/objects/36/b0bb5e3b1d38d19c97f15e3192cc06df8d6516": "9cf9383a41445b1929ee6189f4fbbe9c",
".git/objects/09/41a7fb3691adb75f8adf0137adfa67d2d51cc9": "91c7f04594de76915461fe4d46253274",
".git/objects/91/fbf22501ef3680810f53f556eba70c4c182760": "24213696ef9900fb86c18345b96f5d4d",
".git/objects/91/d77bebcb50a210baadfa4e8dcb03991c9672f6": "528fbd1526be1a8601d4408a19d05446",
".git/objects/96/3555d90012b9b795b9433288ccbdec3abc711d": "e5adbabd8f573ca8b78f14c3cc0fd738",
".git/objects/3a/5e83fbb4203d81a13756ac2686e99999c4f0d6": "e814c05f2ce3fbc1bf2109fac3bbc92b",
".git/objects/54/d0883f455b8cb26bcdcba1c89e0d32ccf3fe7f": "df98fc4fcfdf32aaa317a55a2816ac6b",
".git/objects/54/6c671dac0a0edfeb638260883a29bfb7a42d77": "48c51a916b834792d0103aaaab56857a",
".git/objects/98/c1f5ded933d104bedd6d715f066252012ccbd5": "0116ef0346cca729e6d932ccf421b964",
".git/objects/98/d8b158ea930d339a6dfbe4bd2f0dfd07883add": "fdb8a6287301e78b34e1e549c34b8bfd",
".git/objects/3f/aeb5de7c5742eddfb684eb75fd0484afe39a5e": "227e90034d766b6862f1383ffbd36ab9",
".git/objects/37/c1f6ec14a183d140aaa09d506b41fa2d091678": "b699ddca229537b67e0fc7aae46eb653",
".git/objects/01/3afb1bbd2bea69795eaead4d54c2854ed3962a": "21a76c7ecb56a1af1b3f186535f2f398",
".git/objects/06/62cafecf2d77b98662407586223b87fc94fcf4": "b3492df7e307caba899b3896b59396a3",
".git/objects/99/8d7bebedd8ac538ca4c075ace259b49c4d18c9": "153ddc33f2140a92d270c45757306697",
".git/objects/99/d8fff0ce39e69a59d8bf76d7a7e6c53e26de55": "8703faaaadf3c45c70eb638c21935efd",
".git/objects/99/529740fa949726d9d1018735c18a50a957b946": "510538fd7442d5a938a43b1ecb57e8f3",
".git/objects/99/2002904748d5d52ed4d1787e806ceb151bae6e": "c575b64c3295c3d0ba5332df3f1d9e24",
".git/objects/0f/6c035af42e0d41da61aac8e3940599ad241bf7": "09d204ed0119b2f34abb34f6a2b63f67",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0a/eba705ef59f6aaae715d8cb5284a481d137585": "c1fee38453ce8112c3ba899eba52f45e",
".git/objects/d4/012fef62d8164672e5207da9275aca1d918e16": "fa99c7b05f9f27d75e9bcbc0114cee23",
".git/objects/d4/b54d1aa4a47b4eef2a0265812ec00f4a8496f9": "3d913d76a6bb8d5b92205281af01b6d5",
".git/objects/ba/b17cf0c37ae8c9920db0ca834b1084ebd913c7": "8ad3bda90e8f67fef27e10dddfafbe8d",
".git/objects/b8/fa41fc18963b43df2ce03b034d3656d8d26bec": "49bce2b4dfa9b6c4e257f8c1b2a5e646",
".git/objects/b1/8fb0f0c817acb9cf036f90493cff5493b57b6c": "8ac2bdac7be7310dcf268b02b23dfbae",
".git/objects/dd/e5269d6db9af819e371355319a27cfdd1c422c": "00cf103a14c3828b5619a73c294adab3",
".git/objects/b6/b66dede39f1674cd14e971180dc200c2fa57e5": "e4c6ee17234c0c370f3ee6dafd5f5d89",
".git/objects/d2/77f2b8a7dd884394637dbe06218dd57f658287": "31be8e321b9cf7bc592341b5bcb97d5b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6925de8f5ee7eefff47f81d318a7fa9ed95cf4": "7253a2253b24136e42a9bacc0df0c6bc",
".git/objects/a8/dc1a4c0d09425f41a17c07bf78695d4b8db766": "bc0c85296a16fde8cfef09a72dabfadd",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/f57b9ee411d84ed97172f26e8e318c5e5afdb3": "c2e479d3ed55053d220a62df36bcb158",
".git/objects/a6/a36c5b8638e9ed43ae1340d5aecd367229f737": "efc0856591fca194f47f12a92a707d51",
".git/objects/a6/40edede7f86457bb0eb493aeaf680961a7996b": "e5985b4f73162609f26eaa31f99938c9",
".git/objects/a1/c53fe948388c24400bb41f06b2a0fac920aa2b": "d3d71b0df1e369ef21ac51940ca9d16d",
".git/objects/ea/522bbf6b9a4a71d9d31136dd981e140be2480f": "0f6f06180a064e31fbf9a7d9dfae5629",
".git/objects/e1/4f1d1cc5da1f23aeee85352dc53bc7039bc112": "4c72aba99c3f030869b72bbc0e8129ce",
".git/objects/cc/b84ab2bd8f32fb0b222a967d28ff4d0b57f066": "17bf1a0b48e60a5ee5a1f84dd758a7db",
".git/objects/e8/2d74d29ea43b8cd19108ea29b46dfad64c0c50": "70ff6738ba41d03de470332678ad0fc7",
".git/objects/ff/84e48f50e65cf239d50def76dea424cfd9d635": "4a63222a432abe2b57891031ad9e94d8",
".git/objects/c5/ff5ba7af51f20e22c244fe4618e53aa150aa44": "4eb539b87cf1c7fb8aa20233ff804fd8",
".git/objects/f6/dc26f517fe15ba1e172f18fa04b030cf2c6d23": "e16aa228873d46beb27f9add38306d8b",
".git/objects/e9/6f601ca8efc23c2fa62f765962759af97856bf": "66e42f885083ce5527b550483af2046a",
".git/objects/f1/a899efd87dadd1246e8e66c60de98b67002ce8": "c2942d6ac5428dafbdc12e51d35fea06",
".git/objects/e7/31ab6cd2788ede567b3fded333262719715eaa": "f57afd321e3cd5a3182382e9aec28e42",
".git/objects/cb/4972bbb531380fb56d5d4f5a2b18ee80dc5dc8": "2880aae9f8a9e48e3fcca6eafb4d17fe",
".git/objects/cb/7bf55ec787b66076c679f4586c5728912147ef": "5b2c39f521c175a9ede1760e8d11b1be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/fc919b0c74dccfdec1f2497f45f68fcbb1023b": "4e19e2ef3ac9593418ac9b4f760ec28e",
".git/objects/2c/f4b258fdd9fff5d7dc97fb25ca9c7e2ce73a0a": "df39fbf3bf9d1b2dfa5dfafeee2b0f02",
".git/objects/79/18f5cb4851d250651560ae445295be4067ecd3": "ca2ba6d1b58312254e9aa2b79840ac41",
".git/objects/41/6746a10025bb9734eb9aff959867072a47f2cc": "a8c5a09f0842af972ce036f9908f930a",
".git/objects/41/abe26789ffebc48a7dc9e6af893c6916f5f18c": "854599dc2a3db8e2a45688419021210d",
".git/objects/1e/f397bf9f495106162b08763c5c6f8722723635": "df5feade157224c80b73af76bb94cc22",
".git/objects/84/30f4e54a2b83cafd8d85152be2faa82da553b4": "8faef11e9abef51b5b4c8df942bcb702",
".git/objects/23/bc4e019fcd26afb84948be03acf5a74bd84092": "42b6660b6bb247ccebb57aa574feefea",
".git/objects/4f/9fa2524bf4c393b02e6771fb7bae11cc1fd180": "d88d50eef9e10a75eac99c90d5462581",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/f8b98f69e3999da351737302af62ac8c0b8a13": "eba9ae2be6265e399b75a614043b599b",
".git/objects/1d/ab8a979ab516459e8797b54624fc06f20c7ac0": "d0d3d00024dcac75fa4cd089a356ccc4",
".git/objects/71/44545a505561f8f3facfecf57cdc799c306f42": "dad2abfb77fe1f9762a3e4b4e547a91a",
".git/objects/1c/1f701866d14599855b5a709f63efa8d23acece": "d83f20e35146dbd14f9f8b3a7a761c1f",
".git/objects/82/94d628515fa10d489c7130ff22d178bb3e5db4": "5b19954a96ec7a837f682b644be8afca",
".git/objects/49/c1c7b9f21d2a42dc382fb522f3b2a15697e96e": "56e28783242c17e30ce6579534945b8c",
".git/objects/2e/d730045ff7273682df7e24ca619a4b6b7e3b0f": "2b5f6cb0c1ab6721e42ab5d728a919d3",
".git/objects/47/8f52fb7918a8ab27d1e765eda411704e59553e": "e7c8f3cadd35c228df5dc576289caf60",
".git/objects/78/d1e7d355009d5a4689b9b86b35c920dfbba976": "ce4d8bc646aca24ad5b8dd403e8f9bca",
".git/objects/78/ec97459efd934aa7411642622d2d2114f0ba7f": "98242e6517cb28c877f6b18a7c3b3eed",
".git/objects/7a/aed6bd819e747246e8328e3b7edfac08f5f87f": "1fe7d20cbbb9b09748d299dd1e5d30e4",
".git/objects/14/3aa5ade4f8d7eeb866f5377558f759387ac1a5": "67fafa7110c7f7c49bf60c5bfac81e23",
".git/objects/8e/87830f3297e4d901af2db5a3dcc99673da33e6": "02ced4d8391cf2ff4621ef65b4127c2f",
".git/objects/25/5685300d60bf078dc6cf119f05598d3f3ebb82": "d4566bee2615b673ee95cc3f6f376b29",
".git/objects/25/ed882609af45efcf882f9aa474f6f024810e5f": "7a7286bbeb071131c85406f5ada6a17b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "94beafc0f42be8b046ec4b226642ea5d",
".git/logs/refs/heads/master": "63d473a1a27cc4ce4b9ab2f4137f8381",
".git/logs/refs/remotes/origin/master": "c34002b2f0a549f554c3ad35faeb0148",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "f5cdf18884ec47a18d789090025c78ea",
".git/refs/remotes/origin/master": "f5cdf18884ec47a18d789090025c78ea",
".git/index": "d02b80eb880b6f4633a2293b97d57e3e",
".git/COMMIT_EDITMSG": "0a009f77fb05002578ec563c4f78da00",
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
