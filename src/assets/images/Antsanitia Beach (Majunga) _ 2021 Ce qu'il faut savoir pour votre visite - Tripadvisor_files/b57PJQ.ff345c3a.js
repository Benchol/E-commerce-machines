(this.$WP=this.$WP||[]).push(["b57PJQ",(e,a)=>{"use strict";var l,n,r,c,g={"uk-UA":{parent:null,legacyLocaleTag:"uk",subdomain:"",currency:"UAH",language:"uk",rtl:!1,tld:"ua",enabled:!1},"en-IE":{parent:"en-GB",legacyLocaleTag:"en_IE",subdomain:"",currency:"EUR",language:"en",rtl:!1,tld:"ie",enabled:!0},"en-US":{parent:null,legacyLocaleTag:"en_US",subdomain:"",currency:"USD",language:"en",rtl:!1,tld:"com",enabled:!0},"en-IN":{parent:"en-GB",legacyLocaleTag:"en_IN",subdomain:"",currency:"INR",language:"en",rtl:!1,tld:"in",enabled:!0},"ar-EG-u-nu-latn":{parent:"ar-US-u-nu-latn",legacyLocaleTag:"ar_EG",subdomain:"",currency:"EGP",language:"ar",rtl:!0,tld:"com.eg",enabled:!0},"en-ZA":{parent:"en-GB",legacyLocaleTag:"en_ZA",subdomain:"",currency:"ZAR",language:"en",rtl:!1,tld:"co.za",enabled:!0},"nl-BE":{parent:"nl-NL",legacyLocaleTag:"nl_BE",subdomain:"",currency:"EUR",language:"nl",rtl:!1,tld:"be",enabled:!0},"el-GR":{parent:null,legacyLocaleTag:"el",subdomain:"",currency:"EUR",language:"el",rtl:!1,tld:"com.gr",enabled:!0},"sr-Latn-RS":{parent:null,legacyLocaleTag:"sr",subdomain:"",currency:"RSD",language:"sr",rtl:!1,tld:"rs",enabled:!0},"zh-Hans":{parent:"zh-Hans-US",legacyLocaleTag:"zh_CN",subdomain:"",currency:"RMB",language:"zh",rtl:!1,tld:"cn",enabled:!0},"en-MY":{parent:"en-GB",legacyLocaleTag:"en_MY",subdomain:"",currency:"MYR",language:"en",rtl:!1,tld:"com.my",enabled:!0},"nl-NL":{parent:null,legacyLocaleTag:"nl",subdomain:"",currency:"EUR",language:"nl",rtl:!1,tld:"nl",enabled:!0},"en-AU":{parent:"en-GB",legacyLocaleTag:"en_AU",subdomain:"",currency:"AUD",language:"en",rtl:!1,tld:"com.au",enabled:!0},"he-IL":{parent:null,legacyLocaleTag:"iw",subdomain:"",currency:"ILS",language:"iw",rtl:!0,tld:"co.il",enabled:!0},"de-CH":{parent:"de-DE",legacyLocaleTag:"de_CH",subdomain:"",currency:"CHF",language:"de",rtl:!1,tld:"ch",enabled:!0},"ja-JP":{parent:null,legacyLocaleTag:"ja",subdomain:"",currency:"JPY",language:"ja",rtl:!1,tld:"jp",enabled:!0},"hu-HU":{parent:null,legacyLocaleTag:"hu",subdomain:"",currency:"HUF",language:"hu",rtl:!1,tld:"co.hu",enabled:!0},"es-CL":{parent:"es-MX",legacyLocaleTag:"es_CL",subdomain:"",currency:"CLP",language:"es",rtl:!1,tld:"cl",enabled:!0},"fr-CA":{parent:"fr-FR",legacyLocaleTag:"fr_CA",subdomain:"fr",currency:"CAD",language:"fr",rtl:!1,tld:"ca",enabled:!0},"es-CO":{parent:"es-MX",legacyLocaleTag:"es_CO",subdomain:"",currency:"COP",language:"es",rtl:!1,tld:"co",enabled:!0},"es-PE":{parent:"es-MX",legacyLocaleTag:"es_PE",subdomain:"",currency:"PEN",language:"es",rtl:!1,tld:"com.pe",enabled:!0},"en-NZ":{parent:"en-AU",legacyLocaleTag:"en_NZ",subdomain:"",currency:"NZD",language:"en",rtl:!1,tld:"co.nz",enabled:!0},"pl-PL":{parent:null,legacyLocaleTag:"pl",subdomain:"pl",currency:"PLN",language:"pl",rtl:!1,tld:"com",enabled:!0},"pt-PT":{parent:"pt-BR",legacyLocaleTag:"pt_PT",subdomain:"",currency:"EUR",language:"pt",rtl:!1,tld:"pt",enabled:!0},"fr-BE":{parent:"fr-FR",legacyLocaleTag:"fr_BE",subdomain:"fr",currency:"EUR",language:"fr",rtl:!1,tld:"be",enabled:!0},"en-SG":{parent:"en-GB",legacyLocaleTag:"en_SG",subdomain:"",currency:"SGD",language:"en",rtl:!1,tld:"com.sg",enabled:!0},"tr-TR":{parent:null,legacyLocaleTag:"tr",subdomain:"",currency:"TRY",language:"tr",rtl:!1,tld:"com.tr",enabled:!0},"it-CH":{parent:"it-IT",legacyLocaleTag:"it_CH",subdomain:"it",currency:"CHF",language:"it",rtl:!1,tld:"ch",enabled:!0},"fr-FR":{parent:null,legacyLocaleTag:"fr",subdomain:"",currency:"EUR",language:"fr",rtl:!1,tld:"fr",enabled:!0},"vi-VN":{parent:null,legacyLocaleTag:"vi",subdomain:"",currency:"VND",language:"vi",rtl:!1,tld:"com.vn",enabled:!0},"zh-Hant-HK":{parent:"zh-Hant-TW",legacyLocaleTag:"zh_HK",subdomain:"",currency:"HKD",language:"zh",rtl:!1,tld:"com.hk",enabled:!0},"zh-Hant-TW":{parent:null,legacyLocaleTag:"zh_TW",subdomain:"",currency:"TWD",language:"zh",rtl:!1,tld:"com.tw",enabled:!0},"en-GB":{parent:"en-US",legacyLocaleTag:"en_UK",subdomain:"",currency:"GBP",language:"en",rtl:!1,tld:"co.uk",enabled:!0},"fi-FI":{parent:null,legacyLocaleTag:"fi",subdomain:"",currency:"EUR",language:"fi",rtl:!1,tld:"fi",enabled:!0},"nb-NO":{parent:null,legacyLocaleTag:"no",subdomain:"no",currency:"NOK",language:"nb",rtl:!1,tld:"com",enabled:!0},"en-CA":{parent:"en-GB",legacyLocaleTag:"en_CA",subdomain:"",currency:"CAD",language:"en",rtl:!1,tld:"ca",enabled:!0},"de-AT":{parent:"de-DE",legacyLocaleTag:"de_AT",subdomain:"",currency:"EUR",language:"de",rtl:!1,tld:"at",enabled:!0},"fr-CH":{parent:"fr-FR",legacyLocaleTag:"fr_CH",subdomain:"fr",currency:"CHF",language:"fr",rtl:!1,tld:"ch",enabled:!0},"cs-CZ":{parent:null,legacyLocaleTag:"cs",subdomain:"",currency:"CZK",language:"cs",rtl:!1,tld:"cz",enabled:!0},"ar-US-u-nu-latn":{parent:null,legacyLocaleTag:"ar",subdomain:"ar",currency:"AED",language:"ar",rtl:!0,tld:"com",enabled:!0},"en-PH":{parent:"en-US",legacyLocaleTag:"en_PH",subdomain:"",currency:"PHP",language:"en",rtl:!1,tld:"com.ph",enabled:!0},"de-DE":{parent:null,legacyLocaleTag:"de",subdomain:"",currency:"EUR",language:"de",rtl:!1,tld:"de",enabled:!0},"ar-AE-u-nu-latn":{parent:"ar-US-u-nu-latn",legacyLocaleTag:"ar_AE",subdomain:"ar",currency:"AED",language:"ar",rtl:!1,tld:"com",enabled:!1},"zh-Hans-US":{parent:null,legacyLocaleTag:"zh",subdomain:"cn",currency:"USD",language:"zh",rtl:!1,tld:"com",enabled:!0},"pt-BR":{parent:null,legacyLocaleTag:"pt",subdomain:"",currency:"BRL",language:"pt",rtl:!1,tld:"com.br",enabled:!0},"ko-KR":{parent:null,legacyLocaleTag:"ko",subdomain:"",currency:"KRW",language:"ko",rtl:!1,tld:"co.kr",enabled:!0},"en-HK":{parent:"en-SG",legacyLocaleTag:"en_HK",subdomain:"en",currency:"HKD",language:"en",rtl:!1,tld:"com.hk",enabled:!0},"sk-SK":{parent:null,legacyLocaleTag:"sk",subdomain:"",currency:"EUR",language:"sk",rtl:!1,tld:"sk",enabled:!0},"es-ES":{parent:null,legacyLocaleTag:"es",subdomain:"",currency:"EUR",language:"es",rtl:!1,tld:"es",enabled:!0},"es-VE":{parent:"es-MX",legacyLocaleTag:"es_VE",subdomain:"",currency:"USD",language:"es",rtl:!1,tld:"com.ve",enabled:!0},"th-u-ca-gregory":{parent:null,legacyLocaleTag:"th",subdomain:"th",currency:"THB",language:"th",rtl:!1,tld:"com",enabled:!0},"es-MX":{parent:"es-ES",legacyLocaleTag:"es_MX",subdomain:"",currency:"MXN",language:"es",rtl:!1,tld:"com.mx",enabled:!0},"it-IT":{parent:null,legacyLocaleTag:"it",subdomain:"",currency:"EUR",language:"it",rtl:!1,tld:"it",enabled:!0},"ru-RU":{parent:null,legacyLocaleTag:"ru",subdomain:"",currency:"RUB",language:"ru",rtl:!1,tld:"ru",enabled:!0},"es-AR":{parent:"es-MX",legacyLocaleTag:"es_AR",subdomain:"",currency:"ARS",language:"es",rtl:!1,tld:"com.ar",enabled:!0},"sv-SE":{parent:null,legacyLocaleTag:"sv",subdomain:"",currency:"SEK",language:"sv",rtl:!1,tld:"se",enabled:!0},"id-ID":{parent:null,legacyLocaleTag:"in",subdomain:"",currency:"IDR",language:"in",rtl:!1,tld:"co.id",enabled:!0},"da-DK":{parent:null,legacyLocaleTag:"da",subdomain:"",currency:"DKK",language:"da",rtl:!1,tld:"dk",enabled:!0}};return[()=>{var a;l={pointsOfSale:g},n=(a=Object.freeze({__proto__:null,pointsOfSale:g,default:l}))&&a.default||a,r={pointsOfSale:n.pointsOfSale},c=r.pointsOfSale,e("default",r),e("pointsOfSale",c)},[]]},[]]);
