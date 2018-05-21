var nameCodeMap = {
"AD":"Andorra",
"AE":"the United Arab Emirates",
"AF":"Afghanistan",
"AG":"Antigua and Barbuda",
"AI":"Anguilla",
"AL":"Albania",
"AM":"Armenia",
"AN":"the Netherlands Antilles",
"AO":"Angola",
"AQ":"Antarctica",
"AR":"Argentina",
"AS":"American Samoa",
"AT":"Austria",
"AU":"Australia",
"AW":"Aruba",
"AX":"the Åland Islands",
"AZ":"Azerbaijan",
"BA":"Bosnia and Herzegovina",
"BB":"Barbados",
"BD":"Bangladesh",
"BE":"Belgium",
"BF":"Burkina Faso",
"BG":"Bulgaria",
"BH":"Bahrain",
"BI":"Burundi",
"BJ":"Benin",
"BL":"Saint Barthélemy",
"BM":"Bermuda",
"BN":"Brunei Darussalam",
"BO":"Bolivia",
"BQ":"Bonaire: Sint Eustatius and Saba",
"BR":"Brazil",
"BS":"the Bahamas",
"BT":"Bhutan",
"BV":"Bouvet Island",
"BW":"Botswana",
"BY":"Belarus",
"BZ":"Belize",
"CA":"Canada",
"CC":"the Cocos (Keeling) Islands",
"CD":"the Democratic Republic of the Congo",
"CF":"Central African Republic",
"CG":"Congo",
"CH":"Switzerland",
"CI":"Côte d'Ivoire",
"CK":"the Cook Islands",
"CL":"Chile",
"CM":"Cameroon",
"CN":"China",
"CO":"Colombia",
"CR":"Costa Rica",
"CU":"Cuba",
"CV":"Cabo Verde",
"CW":"Curaçao",
"CX":"Christmas Island",
"CY":"Cyprus",
"CZ":"Czechia",
"DE":"Germany",
"DJ":"Djibouti",
"DK":"Denmark",
"DM":"Dominica",
"DO":"the Dominican Republic",
"DZ":"Algeria",
"EC":"Ecuador",
"EE":"Estonia",
"EG":"Egypt",
"EH":"Western Sahara",
"ER":"Eritrea",
"ES":"Spain",
"ET":"Ethiopia",
"FI":"Finland",
"FJ":"Fiji",
"FK":"the Falkland Islands (Malvinas)",
"FM":"the Federated States of Micronesia",
"FO":"the Faroe Islands",
"FR":"France",
"GA":"Gabon",
"GB":"the United Kingdom of Great Britain and Northern Ireland",
"GD":"Grenada",
"GE":"Georgia",
"GF":"French Guiana",
"GG":"Guernsey",
"GH":"Ghana",
"GI":"Gibraltar",
"GL":"Greenland",
"GM":"Gambia",
"GN":"Guinea",
"GP":"Guadeloupe",
"GQ":"Equatorial Guinea",
"GR":"Greece",
"GS":"South Georgia and the South Sandwich Islands",
"GT":"Guatemala",
"GU":"Guam",
"GW":"Guinea-Bissau",
"GY":"Guyana",
"HK":"Hong Kong",
"HM":"Heard Island and the McDonald Islands",
"HN":"Honduras",
"HR":"Croatia",
"HT":"Haiti",
"HU":"Hungary",
"ID":"Indonesia",
"IE":"Ireland",
"IL":"Israel",
"IM":"the Isle of Man",
"IN":"India",
"IO":"British Indian Ocean Territory",
"IQ":"Iraq",
"IR":"Iran",
"IS":"Iceland",
"IT":"Italy",
"JE":"Jersey",
"JM":"Jamaica",
"JO":"Jordan",
"JP":"Japan",
"KE":"Kenya",
"KG":"Kyrgyzstan",
"KH":"Cambodia",
"KI":"Kiribati",
"KM":"Comoros",
"KN":"Saint Kitts and Nevis",
"KP":"North Korea",
"KR":"South Korea",
"KW":"Kuwait",
"KY":"the Cayman Islands",
"KZ":"Kazakhstan",
"LA":"Laos",
"LB":"Lebanon",
"LC":"Saint Lucia",
"LI":"Liechtenstein",
"LK":"Sri Lanka",
"LR":"Liberia",
"LS":"Lesotho",
"LT":"Lithuania",
"LU":"Luxembourg",
"LV":"Latvia",
"LY":"Libya",
"MA":"Morocco",
"MC":"Monaco",
"MD":"Moldova",
"ME":"Montenegro",
"MF":"Saint Martin (French part)",
"MG":"Madagascar",
"MH":"the Marshall Islands",
"MK":"Macedonia",
"ML":"Mali",
"MM":"Myanmar",
"MN":"Mongolia",
"MO":"Macao",
"MP":"the Northern Mariana Islands",
"MQ":"Martinique",
"MR":"Mauritania",
"MS":"Montserrat",
"MT":"Malta",
"MU":"Mauritius",
"MV":"the Maldives",
"MW":"Malawi",
"MX":"Mexico",
"MY":"Malaysia",
"MZ":"Mozambique",
"NA":"Namibia",
"NC":"New Caledonia",
"NE":"Niger",
"NF":"Norfolk Island",
"NG":"Nigeria",
"NI":"Nicaragua",
"NL":"the Netherlands",
"NO":"Norway",
"NP":"Nepal",
"NR":"Nauru",
"NU":"Niue",
"NZ":"New Zealand",
"OM":"Oman",
"PA":"Panama",
"PE":"Peru",
"PF":"French Polynesia",
"PG":"Papua New Guinea",
"PH":"Philippines",
"PK":"Pakistan",
"PL":"Poland",
"PM":"Saint Pierre and Miquelon",
"PN":"Pitcairn",
"PR":"Puerto Rico",
"PS":"Palestine",
"PT":"Portugal",
"PW":"Palau",
"PY":"Paraguay",
"QA":"Qatar",
"RE":"Réunion",
"RO":"Romania",
"RS":"Serbia",
"RU":"Russia",
"RW":"Rwanda",
"SA":"Saudi Arabia",
"SB":"the Solomon Islands",
"SC":"Seychelles",
"SD":"Sudan",
"SE":"Sweden",
"SG":"Singapore",
"SH":"Saint Helena, Ascension and Tristan da Cunha",
"SI":"Slovenia",
"SJ":"Svalbard and Jan Mayen",
"SK":"Slovakia",
"SL":"Sierra Leone",
"SM":"San Marino",
"SN":"Senegal",
"SO":"Somalia",
"SR":"Suriname",
"SS":"South Sudan",
"ST":"Sao Tome and Principe",
"SV":"El Salvador",
"SX":"Sint Maarten (Dutch part)",
"SY":"Syria",
"SZ":"Swaziland",
"TC":"the Turks and Caicos Islands",
"TD":"Chad",
"TF":"the French Southern Territories",
"TG":"Togo",
"TH":"Thailand",
"TJ":"Tajikistan",
"TK":"Tokelau",
"TL":"Timor-Leste",
"TM":"Turkmenistan",
"TN":"Tunisia",
"TO":"Tonga",
"TR":"Turkey",
"TT":"Trinidad and Tobago",
"TV":"Tuvalu",
"TW":"Taiwan: Province of China",
"TZ":"Tanzania",
"UA":"Ukraine",
"UG":"Uganda",
"UM":"the United States Minor Outlying Islands",
"US":"the United States of America",
"UY":"Uruguay",
"UZ":"Uzbekistan",
"VA":"the Holy See",
"VC":"Saint Vincent and the Grenadines",
"VE":"Venezuela",
"VG":"the British Virgin Islands",
"VI":"the U.S. Virgin Islands",
"VN":"Viet Nam",
"VU":"Vanuatu",
"WF":"Wallis and Futuna",
"WS":"Samoa",
"YE":"Yemen",
"YT":"Mayotte",
"ZA":"South Africa",
"ZM":"Zambia",
"ZW":"Zimbabwe"
};

/*
Outdated codes:
ZA (Zaire)
BU (Burma)
SU (Soviet Union)
DD (East Germany)
TP (East Timor, changed to Timor-Leste)
CS, Chzekoslovakia, changed to Montenegro and Serbia
YU (Yugoslavia)
NT Divided between Iraq (IQ) and Saudi Arabia (SA)
*/
