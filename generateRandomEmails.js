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
var domainEndings = [".com", ".co", ".in", ".net", ".org", ".recipes", ".info", ".gold", ".co.nz", ".live", ".show", ".me", ".space", ".io", ".community", ".app", ".llc", ".fr", ".dev", ".video", ".us", ".tax", ".tips", ".mx", ".works", ".house", ".zone", ".dog", ".run", ".city", ".today", ".center", ".photos", ".band", ".ca", ".casino", ".co.uk", ".golf", ".cash", ".guide", ".tours", ".news", ".cafe", ".cool", ".school", ".fund", ".delivery", ".money", ".expert", ".movie", ".land", ".gives", ".wtf", ".watch", ".coach", ".chat", ".gallery", ".farm", ".bike", ".tools", ".vet", ".pictures", ".cheap", ".biz", ".games", ".estate", ".town", ".style", ".email", ".energy", ".wiki", ".legal", ".care", ".jp", ".wine", ".press", ".rip", ".institute", ".kitchen", ".support", ".church", ".toys", ".irish", ".website", ".events", ".store", ".coffee", ".pub", ".fyi", ".reviews", ".codes", ".football", ".report", ".fail", ".group", ".cards", ".sale", ".restaurant", ".rentals", ".training", ".tires", ".jetzt", ".credit", ".guru", ".repair", ".exchange", ".com.mx", ".software", ".family", ".loans", ".deals", ".club", ".properties", ".online", ".team", ".pizza", ".directory", ".academy", ".co.in", ".how", ".social", ".computer", ".fitness", ".rocks", ".ninja", ".actor", ".fish", ".dance", ".army", ".education", ".rehab", ".gifts", ".exposed", ".navy", ".camp", ".careers", ".digital", ".direct", ".life", ".shoes", ".clinic", ".glass", ".clothing", ".partners", ".condos", ".cc", ".vin", ".supply", ".market", ".parts", ".host", ".company", ".supplies", ".salon", ".systems", ".network", ".world", ".soccer", ".dental", ".cab", ".holiday", ".reise", ".express", ".auction", ".viajes", ".gratis", ".claims", ".vision", ".lease", ".dating", ".lawyer", ".ventures", ".jewelry", ".camera", ".agency", ".ink", ".tech", ".foundation", ".media", ".site", ".catering", ".coupons", ".haus", ".services", ".vacations", ".limo", ".capital", ".surgery", ".hospital", ".voyage", ".taxi", ".tennis", ".dentist", ".bingo", ".builders", ".boutique", ".plus", ".memorial", ".reisen", ".pw", ".schule", ".studio", ".flights", ".singles", ".management", ".mortgage", ".attorney", ".finance", ".gmbh", ".limited", ".solar", ".diamonds", ".graphics", ".international", ".shopping", ".equipment", ".villas", ".kaufen", ".photography", ".plumbing", ".gripe", ".cruises", ".financial", ".furniture", ".degree", ".productions", ".immo", ".florist", ".domains", ".healthcare", ".university", ".lighting", ".insure", ".solutions", ".technology", ".design", ".associates", ".cleaning", ".maison", ".immobilien", ".apartments", ".engineer", ".contractors", ".construction", ".theater", ".soy", ".moda", ".democrat", ".discount", ".airforce", ".investments", ".enterprises", ".ltd", ".tienda", ".fun", ".republican", ".fan", ".sarl", ".marketing", ".holdings", ".bargains", ".business", ".accountants", ".futbol", ".mba", ".hockey", ".forsale", ".industries", ".engineering", ".consulting", ".creditcard", ".page", ".charity"];
domainEndings.forEach(el => {
  emails = emails + randomEmail() + el + '\n'
});
console.log(emails);
