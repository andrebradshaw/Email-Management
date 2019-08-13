var rando = (n) => Math.round(Math.random() * n);

function randomEmail() {
  var s = '';
  var emailPref = '0123456789abcdefghijklmnpoqrstuvwxyz-.';
  var domainPref = '0123456789abcdefghijklmnpoqrstuvwxyz-';

  for (var i = 0; i <= rando(167); i++) {
    s += emailPref[rando((emailPref.length - 1))];
  }
  var d = '';
  for (var i = 0; i <= rando(63); i++) {
    d += domainPref[rando((domainPref.length - 1))];
  }
  return s.replace(/[\.\-]+/g, '.').replace(/[\.\-]+/g, '-').replace(/^[\.\-]+/, '').replace(/[\.\-]+$/, '') +
    '@' +
    d.replace(/\.+/g, '.').replace(/\-+/g, '-').replace(/^[\.\-]+/, '').replace(/[\.\-]+$/, '');

}

var emails = '';
var domainEndings = [".cancerresearch",".pharmaciens.km",".veterinaire.km",".international",".lifeinsurance",".spreadbetting",".construction",".financialaid",".scholarships",".translations",".versicherung",". accountant",". accountant",". accountant",".accountants",".blackfriday",".contractors",".creditunion",".engineering",".enterprises",".investments",".motorcycles",".mutualfunds",".notaires.km",".persiangulf",".photography",".productions",".yellowpages",". furniture",".accountant",".africa.com",".apartments",".associates",".avocat.pro",".basketball",".cnregional",".consulting",".creditcard",".erotica.hu",".floripa.br",".foundation",".healthcare",".immobilien",".industries",".management",".medecin.km",".properties",".protection",".realestate",".republican",".restaurant",".retirement",".technology",".university",".vlaanderen",".amsterdam",".analytics",".antivirus",".aquitaine",".architect",".barcelona",".christmas",".community",".directory",".education",".equipment",".financial",".furniture",".health.vn",".institute",".insurance",".lifestyle",".macapa.br",".marketing",".melbourne",".presse.fr",".presse.km",".recht.pro",".recife.br",".school.nz",".solutions",".stockholm",".vacations",".abudhabi",".acct.pro",".adult.ht",".airforce",".attorney",".bargains",".baseball",".belem.br",".boutique",".broadway",".brussels",".budapest",".builders",".business",".capetown",".catering",".catholic",".cleaning",".clothing",".computer",".delivery",".democrat",".diamonds",".discount",".download",".engineer",".exchange",".feedback",".football",".graphics",".helsinki",".holdings",".hospital",".istanbul",".jampa.br",".lighting",".maori.nz",".memorial",".minsk.by",".mortgage",".mutuelle",".observer",".other.nf",".partners",".pharmacy",".pictures",".plumbing",".property",".radio.am",".radio.fm",".saarland",".security",".services",".shopping",".software",".store.bb",".store.nf",".store.ve",".supplies",".training",".ventures",".yokohama",". beauty",". yachts",".aaa.pro",".abogado",".aca.pro",".academy",".arts.nf",".arts.ve",".asso.km",".asso.mc",".auction",".bar.pro",".blog.br",".capital",".careers",".channel",".charity",".club.tw",".college",".cologne",".company",".compare",".conf.au",".conf.lv",".contact",".cooking",".coop.km",".corsica",".country",".coupons",".courses",".cpa.pro",".cricket",".cruises",".dentist",".digital",".domains",".ebiz.tw",".eng.pro",".exposed",".express",".fashion",".finance",".firm.in",".firm.nf",".firm.ve",".fishing",".fitness",".flights",".florist",".flowers",".forsale",".gallery",".game.tw",".geek.nz",".gouv.km",".grocery",".guitars",".hamburg",".hangout",".holiday",".hosting",".hoteles",".info.au",".info.az",".info.bb",".info.bi",".info.ck",".info.ec",".info.et",".info.fj",".info.ht",".info.hu",".info.ke",".info.ki",".info.mv",".info.nf",".info.nr",".info.pl",".info.pr",".info.tr",".info.tt",".info.ve",".info.vn",".isla.pr",".ismaili",".jewelry",".jpn.com",".jur.pro",".kiev.ua",".kitchen",".kiwi.nz",".law.pro",".limited",".markets",".med.pro",".medical",".mex.com",".mobi.ke",".monster",".name.ae",".name.az",".name.cy",".name.eg",".name.et",".name.fj",".name.jo",".name.mv",".name.pr",".name.tr",".name.tt",".name.vn",".network",".okinawa",".organic",".priv.me",".priv.no",".realtor",".recipes",".rentals",".reviews",".science",".shiksha",".singles",".storage",".support",".surgery",".systems",".theater",".theatre",".tickets",".trading",".watches",".weather",".website",".wedding",".whoswho",".winners",".abc.br",".ae.org",".africa",".agency",".alsace",".ar.com",".art.do",".asn.au",".asn.lv",".author",".banque",".bayern",".beauty",".berlin",".bib.ve",".biz.az",".biz.bb",".biz.ck",".biz.cy",".biz.et",".biz.fj",".biz.ki",".biz.mv",".biz.ng",".biz.nr",".biz.om",".biz.pk",".biz.pl",".biz.pr",".biz.tj",".biz.tr",".biz.tt",".biz.vn",".boston",".br.com",".broker",".camera",".career",".casino",".center",".church",".cin.kg",".circle",".claims",".clinic",".cn.com",".co.com",".coffee",".com.af",".com.ag",".com.ai",".com.al",".com.an",".com.aq",".com.ar",".com.au",".com.az",".com.ba",".com.bb",".com.bd",".com.bh",".com.bi",".com.bj",".com.bm",".com.bn",".com.bo",".com.br",".com.bs",".com.bt",".com.bw",".com.by",".com.bz",".com.ci",".com.cm",".com.cn",".com.co",".com.cu",".com.cv",".com.cy",".com.de",".com.do",".com.dz",".com.ec",".com.ee",".com.eg",".com.es",".com.et",".com.fj",".com.ge",".com.gh",".com.gi",".com.gl",".com.gn",".com.gp",".com.gt",".com.gu",".com.gy",".com.hn",".com.hr",".com.ht",".com.io",".com.jm",".com.jo",".com.kg",".com.kh",".com.ki",".com.km",".com.kn",".com.kw",".com.ky",".com.kz",".com.lb",".com.lc",".com.lk",".com.lr",".com.ls",".com.lv",".com.ly",".com.mk",".com.mm",".com.mo",".com.mt",".com.mu",".com.mv",".com.mw",".com.mx",".com.my",".com.na",".com.nf",".com.ng",".com.ni",".com.np",".com.nr",".com.om",".com.pa",".com.pe",".com.pf",".com.pg",".com.ph",".com.pk",".com.pl",".com.pn",".com.pr",".com.ps",".com.pt",".com.py",".com.qa",".com.sa",".com.sb",".com.sc",".com.sd",".com.se",".com.sg",".com.sh",".com.sl",".com.sn",".com.so",".com.sv",".com.tj",".com.tl",".com.tm",".com.tn",".com.tr",".com.tt",".com.tw",".com.ua",".com.ug",".com.uy",".com.vc",".com.ve",".com.vi",".com.vn",".com.ws",".com.ye",".condos",".coupon",".credit",".cruise",".dating",".de.com",".dealer",".degree",".dental",".design",".direct",".doctor",".durban",".edu.bb",".edu.bi",".edu.bz",".edu.do",".edu.gl",".edu.gy",".edu.ki",".edu.km",".edu.lv",".edu.mm",".edu.ni",".edu.np",".edu.pl",".edu.pt",".edu.sl",".edu.sv",".edu.ve",".edu.vg",".edu.vn",".energy",".esp.br",".estate",".eu.com",".events",".expert",".family",".far.br",".fin.ec",".finish",".futbol",".garden",".gb.com",".gb.net",".gen.ck",".gen.in",".gen.nz",".gen.tr",".giving",".global",".gov.bb",".gov.gy",".gov.ki",".gov.mm",".gov.np",".gov.pt",".gov.sv",".gov.vn",".gr.com",".gratis",".health",".hiphop",".hockey",".hoteis",".hotels",".hu.com",".hu.net",".idv.tw",".imamat",".in.net",".ind.br",".ind.gt",".ind.in",".insure",".int.ve",".int.vn",".its.me",".joburg",".jp.net",".juegos",".kaufen",".kosher",".kr.com",".latino",".lawyer",".living",".london",".ltd.im",".ltd.uk",".luxury",".madrid",".maison",".makeup",".market",".med.ec",".mil.id",".mil.km",".mil.mm",".mil.np",".mobile",".mormon",".moscow",".museum",".mutual",".nagoya",".net.ae",".net.af",".net.ag",".net.ai",".net.al",".net.ar",".net.au",".net.az",".net.ba",".net.bb",".net.bd",".net.bh",".net.bm",".net.bn",".net.bo",".net.br",".net.bs",".net.by",".net.bz",".net.ck",".net.cm",".net.cn",".net.co",".net.cv",".net.cy",".net.do",".net.dz",".net.ec",".net.eg",".net.et",".net.fj",".net.ge",".net.gg",".net.gl",".net.gn",".net.gp",".net.gr",".net.gt",".net.gu",".net.gy",".net.hn",".net.ht",".net.id",".net.il",".net.in",".net.io",".net.ir",".net.je",".net.jm",".net.jo",".net.kg",".net.kh",".net.ki",".net.kn",".net.kw",".net.ky",".net.kz",".net.lb",".net.lc",".net.lk",".net.lr",".net.ls",".net.lv",".net.ly",".net.ma",".net.me",".net.mm",".net.mo",".net.mt",".net.mu",".net.mv",".net.mw",".net.mx",".net.my",".net.nf",".net.ng",".net.ni",".net.np",".net.nr",".net.nz",".net.om",".net.pa",".net.pe",".net.pg",".net.ph",".net.pk",".net.pl",".net.pn",".net.pr",".net.ps",".net.py",".net.qa",".net.ru",".net.sa",".net.sb",".net.sc",".net.sg",".net.sh",".net.sl",".net.so",".net.th",".net.tj",".net.tl",".net.tn",".net.tr",".net.tt",".net.tw",".net.ua",".net.uk",".net.uy",".net.vc",".net.ve",".net.vi",".net.vn",".net.ws",".net.za",".nic.im",".no.com",".nom.ad",".nom.ag",".nom.br",".nom.co",".nom.es",".nom.fr",".nom.km",".nom.ni",".nom.pe",".nom.ve",".nowruz",".off.ai",".online",".org.ae",".org.af",".org.ag",".org.ai",".org.al",".org.ar",".org.au",".org.az",".org.ba",".org.bb",".org.bd",".org.bh",".org.bi",".org.bm",".org.bn",".org.bo",".org.br",".org.bs",".org.bw",".org.bz",".org.ck",".org.cn",".org.cv",".org.cy",".org.do",".org.dz",".org.ec",".org.eg",".org.es",".org.et",".org.fj",".org.ge",".org.gg",".org.gh",".org.gi",".org.gl",".org.gn",".org.gr",".org.gt",".org.gu",".org.gy",".org.hn",".org.ht",".org.hu",".org.il",".org.in",".org.io",".org.ir",".org.je",".org.jm",".org.jo",".org.kg",".org.kh",".org.ki",".org.kn",".org.ky",".org.kz",".org.lb",".org.lc",".org.lk",".org.lr",".org.ls",".org.lv",".org.ly",".org.ma",".org.me",".org.mm",".org.mo",".org.mt",".org.mu",".org.mv",".org.mw",".org.mx",".org.my",".org.mz",".org.na",".org.nf",".org.ng",".org.ni",".org.np",".org.nr",".org.nz",".org.om",".org.os",".org.pa",".org.pe",".org.pg",".org.ph",".org.pk",".org.pl",".org.pn",".org.pr",".org.ps",".org.pt",".org.py",".org.qa",".org.rs",".org.ru",".org.sa",".org.sb",".org.sc",".org.sh",".org.sl",".org.sn",".org.so",".org.sv",".org.tj",".org.tl",".org.to",".org.tr",".org.tt",".org.tw",".org.ua",".org.ug",".org.uk",".org.uy",".org.vc",".org.ve",".org.vi",".org.vn",".org.ws",".per.kh",".per.nf",".photos",".physio",".plc.im",".plc.uk",".poa.br",".pro.ae",".pro.ec",".pro.fj",".pro.pr",".pro.vn",".pvt.ge",".qc.com",".quebec",".racing",".realty",".rec.nf",".rec.ve",".reisen",".repair",".report",".res.in",".review",".rio.br",".ru.com",".ryukyu",".sa.com",".safety",".sch.id",".school",".schule",".se.com",".se.net",".search",".secure",".sjc.br",".soccer",".social",".sports",".stream",".studio",".supply",".sydney",".taipei",".tattoo",".tennis",".tienda",".travel",".tur.br",".uk.com",".uk.net",".us.com",".us.org",".uy.com",".viajes",".villas",".vision",".vix.br",".voting",".voyage",".waw.pl",".web.do",".web.id",".web.nf",".web.pk",".web.tj",".web.tr",".web.ve",".webcam",".xihuan",".yachts",".za.com",". toys",".ab.ca",".ac.cr",".ac.id",".ac.ke",".ac.mu",".ac.ni",".ac.nz",".ac.vn",".actor",".adult",".archi",".audio",".autos",".bc.ca",".bible",".bingo",".black",".boats",".build",".cards",".cheap",".click",".cloud",".cnidn",".co.ae",".co.ag",".co.ao",".co.at",".co.az",".co.bb",".co.bi",".co.bw",".co.bz",".co.ci",".co.ck",".co.cm",".co.cr",".co.de",".co.dm",".co.ee",".co.fk",".co.gg",".co.gl",".co.gy",".co.id",".co.il",".co.in",".co.ir",".co.je",".co.jp",".co.ke",".co.lc",".co.ls",".co.ma",".co.me",".co.mu",".co.mw",".co.mz",".co.na",".co.ni",".co.nl",".co.no",".co.nu",".co.nz",".co.om",".co.pn",".co.rs",".co.sh",".co.th",".co.tj",".co.tt",".co.tz",".co.ug",".co.uk",".co.ve",".co.vi",".co.za",".co.zm",".co.zw",".coach",".codes",".cymru",".dance",".deals",".drive",".dubai",".earth",".email",".faith",".final",".forex",".forum",".games",".gifts",".gives",".glass",".go.id",".gr.jp",".green",".gripe",".group",".guide",".halal",".homes",".horse",".hotel",".house",".id.au",".id.lv",".in.th",".irish",".islam",".it.ao",".jetzt",".koeln",".kyoto",".lease",".legal",".loans",".lotto",".me.ke",".me.uk",".media",".miami",".mo.bi",".money",".movie",".music",".my.tj",".ne.jp",".ne.ke",".ne.tz",".ne.ug",".ninja",".nuidn",".or.at",".or.bi",".or.cr",".or.id",".or.jp",".or.ke",".or.th",".or.tz",".or.ug",".osaka",".oz.au",".paris",".parts",".party",".phone",".photo",".pizza",".place",".poker",".pp.ru",".press",".promo",".qc.ca",".radio",".rehab",".reise",".rocks",".rodeo",".rugby",".salon",".sc.ke",".shoes",".smile",".solar",".space",".sport",".store",".study",".style",".sucks",".swiss",".tatar",".tires",".tirol",".tm.cy",".tm.fr",".tm.km",".tm.mc",".tm.se",".today",".tokyo",".tools",".tours",".trade",".tunes",".tv.bb",".tv.br",".twidn",".vegas",".video",".vodka",".wales",".watch",".weibo",".works",".world",".aero",".arab",".army",".asia",".auto",".baby",".band",".bank",".beer",".best",".bike",".blog",".blue",".book",".buzz",".cafe",".call",".camp",".care",".cars",".casa",".cash",".chat",".city",".club",".cool",".coop",".corp",".data",".date",".deal",".desi",".diet",".docs",".ecom",".fail",".fans",".farm",".fast",".film",".fire",".fish",".food",".free",".fund",".game",".gent",".gift",".gmbh",".gold",".golf",".guge",".guru",".hair",".haus",".help",".here",".home",".host",".immo",".info",".jobs",".kids",".kiwi",".land",".lgbt",".life",".like",".limo",".link",".live",".loan",".love",".ltda",".luxe",".mail",".meet",".meme",".menu",".mobi",".moda",".moto",".name",".navy",".news",".open",".page",".pars",".pets",".pics",".ping",".pink",".play",".plus",".porn",".prod",".prof",".qpon",".read",".reit",".rent",".rest",".rich",".room",".rsvp",".ruhr",".safe",".sale",".sarl",".save",".scot",".sexy",".shop",".show",".silk",".site",".skin",".song",".spot",".surf",".talk",".taxi",".team",".tech",".thai",".tips",".tour",".town",".toys",".tube",".vote",".voto",".wang",".webs",".wien",".wiki",".wine",".work",".yoga",".zone",".ads",".app",".art",".bar",".bcn",".bet",".bid",".bio",".biz",".bom",".boo",".bot",".buy",".bzh",".cab",".cal",".cam",".car",".cat",".ceo",".cfa",".cfd",".com",".cpa",".dad",".day",".dds",".dev",".diy",".dog",".dot",".eat",".eco",".esq",".eus",".fan",".fit",".fly",".foo",".frl",".fun",".fyi",".gal",".gay",".gdn",".gop",".got",".hiv",".hot",".how",".icu",".idn",".inc",".ing",".ink",".ist",".jot",".joy",".kid",".kim",".krd",".lat",".law",".lds",".llc",".llp",".lol",".ltd",".man",".map",".mba",".med",".men",".mls",".moe",".moi",".mom",".mov",".net",".new",".ngo",".now",".nrw",".nyc",".off",".one",".ong",".onl",".ooo",".org",".pay",".pet",".phd",".pid",".pin",".pro",".pub",".red",".ren",".rio",".rip",".run",".sas",".sex",".ski",".soy",".spa",".srl",".tax",".tel",".top",".uno",".vet",".vin",".vip",".web",".wed",".win",".wow",".wtf",".xin",".xxx",".xyz",".you",".yun",".zip",".ac",".ad",".ae",".af",".ag",".ai",".al",".am",".an",".aq",".as",".at",".aw",".ax",".az",".ba",".bb",".be",".bg",".bh",".bi",".bj",".bm",".bo",".bs",".bt",".bw",".by",".bz",".ca",".cc",".cd",".cf",".cg",".ch",".ci",".ck",".cl",".cm",".cn",".co",".cr",".cu",".cv",".cw",".cx",".cy",".cz",".de",".dj",".dk",".dm",".do",".dz",".ec",".ee",".eg",".es",".et",".eu",".fi",".fm",".fo",".fr",".ga",".gd",".ge",".gf",".gg",".gh",".gi",".gl",".gm",".gp",".gq",".gr",".gs",".gt",".gy",".hk",".hm",".hn",".hr",".ht",".hu",".id",".ie",".im",".in",".io",".iq",".ir",".is",".it",".je",".jo",".jp",".ke",".kg",".ki",".km",".kn",".kr",".ky",".kz",".la",".lb",".lc",".li",".lk",".lr",".ls",".lt",".lu",".lv",".ly",".ma",".mc",".md",".me",".mg",".mk",".ml",".mn",".mo",".mp",".mq",".mr",".ms",".mt",".mu",".mv",".mw",".mx",".my",".mz",".na",".nc",".nf",".ng",".ni",".nl",".no",".nr",".nu",".nz",".om",".pa",".pe",".pf",".ph",".pk",".pl",".pm",".pn",".pr",".ps",".pt",".pw",".py",".qa",".re",".ro",".rs",".ru",".rw",".sa",".sb",".sc",".sd",".se",".sg",".sh",".si",".sk",".sl",".sm",".sn",".so",".sr",".st",".su",".sv",".sx",".sy",".tc",".td",".tf",".tg",".th",".tj",".tk",".tl",".tm",".tn",".to",".tt",".tv",".tw",".ua",".ug",".uk",".um",".us",".uy",".uz",".vc",".ve",".vg",".vi",".vn",".vu",".wf",".ws",".ye",".yt",".zm",".zw"];
domainEndings.forEach(el => {
  emails = emails + randomEmail() + el + '\n'
});
console.log(emails);
