const countryCodeToCurrencyCode = {
    AF: "AFN",
    AL: "ALL",
    DZ: "DZD",
    AO: "AOA",
    AG: "XCD",
    AR: "ARS",
    AM: "AMD",
    AU: "AUD",
    AZ: "AZN",
    BH: "BHD",
    BD: "BDT",
    BB: "BBD",
    BY: "BYR",
    BE: "EUR",
    BZ: "BZD",
    BJ: "XOF",
    BW: "BWP",
    BO: "BOB",
    BA: "BAM",
    BV: "NOK",
    BR: "BRL",
    GB: "GBP",
    BN: "BND",
    BG: "BGN",
    BI: "BIF",
    KH: "KHR",
    CF: "XAF",
    CA: "CAD",
    CV: "CVE",
    KY: "KYD",
    CL: "CLP",
    CN: "CNY",
    CO: "COP",
    KM: "KMF",
    CD: "CDF",
    CR: "CRC",
    HR: "HRK",
    CU: "CUP",
    CZ: "CZK",
    DK: "DKK",
    DJ: "DJF",
    DO: "DOP",
    EG: "EGP",
    SV: "SVC",
    ER: "ERN",
    EE: "EEK",
    ET: "ETB",
    FK: "FKP",
    FJ: "FJD",
    FI: "EUR",
    FR: "EUR",
    GM: "GMD",
    GE: "GEL",
    GH: "GHS",
    GI: "GIP",
    GR: "EUR",
    GT: "GTQ",
    GG: "GGP",
    GN: "GNF",
    GW: "XOF",
    GY: "GYD",
    HT: "HTG",
    HN: "HNL",
    HK: "HKD",
    HU: "HUF",
    IS: "ISK",
    IN: "INR",
    ID: "IDR",
    IQ: "IQD",
    IL: "ILS",
    IT: "EUR",
    JM: "JMD",
    JP: "JPY",
    JO: "JOD",
    KZ: "KZT",
    KE: "KES",
    KP: "KPW",
    KR: "KRW",
    KW: "KWD",
    KG: "KGS",
    LA: "LAK",
    LV: "LVL",
    LB: "LBP",
    LS: "LSL",
    LR: "LRD",
    LY: "LYD",
    LI: "CHF",
    LT: "LTL",
    LU: "EUR",
    MO: "MOP",
    MK: "MKD",
    MG: "MGA",
    MW: "MWK",
    MY: "MYR",
    MV: "MVR",
    MR: "MRO",
    MU: "MUR",
    MX: "MXN",
    MD: "MDL",
    MN: "MNT",
    MA: "MAD",
    MM: "MMK",
    NA: "NAD",
    NP: "NPR",
    AN: "ANG",
    NL: "EUR",
    NZ: "NZD",
    NI: "NIO",
    NG: "NGN",
    NO: "NOK",
    OM: "OMR",
    PK: "PKR",
    PA: "PAB",
    PG: "PGK",
    PY: "PYG",
    PE: "PEN",
    PH: "PHP",
    PL: "PLN",
    PT: "EUR",
    QA: "QAR",
    RO: "RON",
    RU: "RUB",
    RW: "RWF",
    WS: "WST",
    SA: "SAR",
    SN: "XOF",
    RS: "RSD",
    SC: "SCR",
    SL: "SLL",
    SG: "SGD",
    SK: "EUR",
    SI: "EUR",
    SB: "SBD",
    SO: "SOS",
    ZA: "ZAR",
    SS: "SSP",
    ES: "EUR",
    LK: "LKR",
    SD: "SDG",
    SR: "SRD",
    SZ: "SZL",
    SE: "SEK",
    CH: "CHF",
    SY: "SYP",
    TW: "TWD",
    TJ: "TJS",
    TZ: "TZS",
    TH: "THB",
    TG: "XOF",
    TO: "TOP",
    TT: "TTD",
    TN: "TND",
    TR: "TRY",
    TM: "TMT",
    UG: "UGX",
    UA: "UAH",
    AE: "AED",
    US: "USD",
    UY: "UYU",
    UZ: "UZS",
    VU: "VUV",
    VE: "VEF",
    VN: "VND",
    YE: "YER",
    ZM: "ZMK",
    ZW: "ZWD"
}

const from = document.querySelector("#from");
const fromSelect = document.querySelector("#fromSelect");

fromSelect.addEventListener('change', () => {
    fromImgChange(fromSelect.value);
    rates(countryCodeToCurrencyCode[fromSelect.value]);
});

const fromImg = document.querySelector("#fromImg");

const fromImgChange = (countryCode) => {
    fromImg.innerHTML = `<img src="https://countryflagsapi.netlify.app/flag/${countryCode}.svg">`;
}

const toImg = document.querySelector("#toImg");

const toImgChange = (countryCode) => {
    toImg.innerHTML = `<img src="https://countryflagsapi.netlify.app/flag/${countryCode}.svg">`;
}

const to = document.querySelector("#to");
const toSelect = document.querySelector("#toSelect");

toSelect.addEventListener('change', () => {
    toImgChange(toSelect.value);
    rates(countryCodeToCurrencyCode[fromSelect.value]);
});

const fromAmount = document.querySelector("#fromAmount");
const toAmount = document.querySelector("#toAmount");

const rates = async (fromCurrencyCode) => {
    let toCurrencyCode = countryCodeToCurrencyCode[toSelect.value];
    const URL = `https://v6.exchangerate-api.com/v6/7583db9b8cf13aca7316fa65/latest/${fromCurrencyCode}`;
    let response = await fetch(URL);
    let transformed = await response.json();
    let converted = transformed.conversion_rates[toCurrencyCode];
    toAmount.value = (fromAmount.value*converted).toFixed(3);
}

fromAmount.addEventListener('input', () => {
    rates(countryCodeToCurrencyCode[fromSelect.value]);
});