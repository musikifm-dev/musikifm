export const route = {
  home: '/',
  podcast: '/podcast',
  moodFilter: '/moodFilter',
  blog: '/blog',
  video: '/video',
  songs: '/songs',
  login: '/login',
  smsVerification: 'sms-verification',
  emailVerification: '/email-verification',
  profile: '/profile',
  register: '/register',
  accountSettings: '/account-settings',
  schedule: '/schedule',
  library: '/library',
}

export const offCanvasLinks = [
  { route: route.home, text: 'HOME' },
  { route: route.moodFilter, text: 'MOOD FILTER' },
  { route: route.podcast, text: 'PODCAST' },
  { route: route.blog, text: 'BLOG' },
  { route: route.video, text: 'VIDEO' },
  { route: route.schedule, text: 'SCHEDULE' },
]

export const navbarAuthenticatedLinks = [
  { route: route.podcast, text: 'Podcast' },
  { route: '/', text: 'Song' },
  { route: route.video, text: 'Videos' },
]

export const authLinks = [
  { route: route.login, text: 'Login' },
  { route: route.register, text: 'Sign In' },
]

export const RE_DIGIT = new RegExp(/^\d+$/)

export const APP = {
  login: process.env.REACT_APP_URL_LOGIN,
  register: process.env.REACT_APP_URL_REGISTER,
  userData: process.env.REACT_APP_URL_USERDATA,

  adminBase: process.env.REACT_APP_URL_ADMINBASE,
  dataBase: process.env.REACT_APP_URL_DATABASE,

  home: process.env.REACT_APP_URL_HOME,
  //REPORT
  blog: process.env.REACT_APP_URL_BLOG,
  podcast: process.env.REACT_APP_URL_PODCAST,
  video: process.env.REACT_APP_URL_VIDEO,
  videoHomeSlider: process.env.REACT_APP_URL_VIDEO_HOMESLIDER,

  //DETAILS
  blogs: process.env.REACT_APP_URL_BLOGS,
  podcasts: process.env.REACT_APP_URL_PODCASTS,
  videos: process.env.REACT_APP_URL_VIDEOS,

  //TAGS
  podcastTags: process.env.REACT_APP_URL_PODCAST_TAGS,
  blogTags: process.env.REACT_APP_URL_BLOG_TAGS,

  // PODCAST REVERSE
  podcastReverse: process.env.REACT_APP_URL_PODCASTREVERSE,

  // RADIO
  radio: process.env.REACT_APP_URL_RADIO,
}

export const phoneCodes = [
  {
    title: 'Turkey (Türkiye)',
    iso2: 'tr',
    value: '+90',
  },

  {
    title: 'United States',
    iso2: 'us',
    value: '+1',
  },
  {
    title: 'Afghanistan (‫افغانستان‬‎)',
    iso2: 'af',
    value: '+93',
  },
  {
    title: 'Albania (Shqipëri)',
    iso2: 'al',
    value: '+355',
  },
  {
    title: 'Algeria (‫الجزائر‬‎)',
    iso2: 'dz',
    value: '+213',
  },
  {
    title: 'American Samoa',
    iso2: 'as',
    value: '+1684',
  },
  {
    title: 'Andorra',
    iso2: 'ad',
    value: '+376',
  },
  {
    title: 'Angola',
    iso2: 'ao',
    value: '+244',
  },
  {
    title: 'Anguilla',
    iso2: 'ai',
    value: '+1264',
  },
  {
    title: 'Antigua and Barbuda',
    iso2: 'ag',
    value: '+1268',
  },
  {
    title: 'Argentina',
    iso2: 'ar',
    value: '+54',
  },
  {
    title: 'Armenia (Հայաստան)',
    iso2: 'am',
    value: '+374',
  },
  {
    title: 'Aruba',
    iso2: 'aw',
    value: '+297',
  },
  {
    title: 'Australia',
    iso2: 'au',
    value: '+61',
  },
  {
    title: 'Austria (Österreich)',
    iso2: 'at',
    value: '+43',
  },
  {
    title: 'Azerbaijan (Azərbaycan)',
    iso2: 'az',
    value: '+994',
  },
  {
    title: 'Bahamas',
    iso2: 'bs',
    value: '+1242',
  },
  {
    title: 'Bahrain (‫البحرين‬‎)',
    iso2: 'bh',
    value: '+973',
  },
  {
    title: 'Bangladesh (বাংলাদেশ)',
    iso2: 'bd',
    value: '+880',
  },
  {
    title: 'Barbados',
    iso2: 'bb',
    value: '+1246',
  },
  {
    title: 'Belarus (Беларусь)',
    iso2: 'by',
    value: '+375',
  },
  {
    title: 'Belgium (België)',
    iso2: 'be',
    value: '+32',
  },
  {
    title: 'Belize',
    iso2: 'bz',
    value: '+501',
  },
  {
    title: 'Benin (Bénin)',
    iso2: 'bj',
    value: '+229',
  },
  {
    title: 'Bermuda',
    iso2: 'bm',
    value: '+1441',
  },
  {
    title: 'Bhutan (འབྲུག)',
    iso2: 'bt',
    value: '+975',
  },
  {
    title: 'Bolivia',
    iso2: 'bo',
    value: '+591',
  },
  {
    title: 'Bosnia and Herzegovina (Босна и Херцеговина)',
    iso2: 'ba',
    value: '+387',
  },
  {
    title: 'Botswana',
    iso2: 'bw',
    value: '+267',
  },
  {
    title: 'Brazil (Brasil)',
    iso2: 'br',
    value: '+55',
  },
  {
    title: 'British Indian Ocean Territory',
    iso2: 'io',
    value: '+246',
  },
  {
    title: 'British Virgin Islands',
    iso2: 'vg',
    value: '+1284',
  },
  {
    title: 'Brunei',
    iso2: 'bn',
    value: '+673',
  },
  {
    title: 'Bulgaria (България)',
    iso2: 'bg',
    value: '+359',
  },
  {
    title: 'Burkina Faso',
    iso2: 'bf',
    value: '+226',
  },
  {
    title: 'Burundi (Uburundi)',
    iso2: 'bi',
    value: '+257',
  },
  {
    title: 'Cambodia (កម្ពុជា)',
    iso2: 'kh',
    value: '+855',
  },
  {
    title: 'Cameroon (Cameroun)',
    iso2: 'cm',
    value: '+237',
  },
  {
    title: 'Canada',
    iso2: 'ca',
    value: '+1',
    priority: 1,
    areaCodes: null,
  },
  {
    title: 'Cape Verde (Kabu Verdi)',
    iso2: 'cv',
    value: '+238',
  },
  {
    title: 'Caribbean Netherlands',
    iso2: 'bq',
    value: '+599',
    priority: 1,
    areaCodes: null,
  },
  {
    title: 'Cayman Islands',
    iso2: 'ky',
    value: '+1345',
  },
  {
    title: 'Central African Republic (République centrafricaine)',
    iso2: 'cf',
    value: '+236',
  },
  {
    title: 'Chad (Tchad)',
    iso2: 'td',
    value: '+235',
  },
  {
    title: 'Chile',
    iso2: 'cl',
    value: '+56',
  },
  {
    title: 'China (中国)',
    iso2: 'cn',
    value: '+86',
  },
  {
    title: 'Christmas Island',
    iso2: 'cx',
    value: '+61',
    priority: 2,
    areaCodes: null,
  },
  {
    title: 'Cocos (Keeling) Islands',
    iso2: 'cc',
    value: '+61',
    priority: 1,
    areaCodes: null,
  },
  {
    title: 'Colombia',
    iso2: 'co',
    value: '+57',
  },
  {
    title: 'Comoros (‫جزر القمر‬‎)',
    iso2: 'km',
    value: '+269',
  },
  {
    title: 'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
    iso2: 'cd',
    value: '+243',
  },
  {
    title: 'Congo (Republic) (Congo-Brazzaville)',
    iso2: 'cg',
    value: '+242',
  },
  {
    title: 'Cook Islands',
    iso2: 'ck',
    value: '+682',
  },
  {
    title: 'Costa Rica',
    iso2: 'cr',
    value: '+506',
  },
  {
    title: 'Côte d’Ivoire',
    iso2: 'ci',
    value: '+225',
  },
  {
    title: 'Croatia (Hrvatska)',
    iso2: 'hr',
    value: '+385',
  },
  {
    title: 'Cuba',
    iso2: 'cu',
    value: '+53',
  },
  {
    title: 'Curaçao',
    iso2: 'cw',
    value: '+599',
  },
  {
    title: 'Cyprus (Κύπρος)',
    iso2: 'cy',
    value: '+357',
  },
  {
    title: 'Czech Republic (Česká republika)',
    iso2: 'cz',
    value: '+420',
  },
  {
    title: 'Denmark (Danmark)',
    iso2: 'dk',
    value: '+45',
  },
  {
    title: 'Djibouti',
    iso2: 'dj',
    value: '+253',
  },
  {
    title: 'Dominica',
    iso2: 'dm',
    value: '+1767',
  },
  {
    title: 'Dominican Republic (República Dominicana)',
    iso2: 'do',
    value: '+1809',
    priority: 2,
    areaCodes: null,
  },
  {
    title: 'Dominican Republic (República Dominicana)',
    iso2: 'do',
    value: '+1829',
    priority: 2,
    areaCodes: null,
  },
  {
    title: 'Dominican Republic (República Dominicana)',
    iso2: 'do',
    value: '+1849',
    priority: 2,
    areaCodes: null,
  },
  {
    title: 'Ecuador',
    iso2: 'ec',
    value: '+593',
  },
  {
    title: 'Egypt (‫مصر‬‎)',
    iso2: 'eg',
    value: '+20',
  },
  {
    title: 'El Salvador',
    iso2: 'sv',
    value: '+503',
  },
  {
    title: 'Equatorial Guinea (Guinea Ecuatorial)',
    iso2: 'gq',
    value: '+240',
  },
  {
    title: 'Eritrea',
    iso2: 'er',
    value: '+291',
  },
  {
    title: 'Estonia (Eesti)',
    iso2: 'ee',
    value: '+372',
  },
  {
    title: 'Ethiopia',
    iso2: 'et',
    value: '+251',
  },
  {
    title: 'Falkland Islands (Islas Malvinas)',
    iso2: 'fk',
    value: '+500',
  },
  {
    title: 'Faroe Islands (Føroyar)',
    iso2: 'fo',
    value: '+298',
  },
  {
    title: 'Fiji',
    iso2: 'fj',
    value: '+679',
  },
  {
    title: 'Finland (Suomi)',
    iso2: 'fi',
    value: '+358',
  },
  {
    title: 'France',
    iso2: 'fr',
    value: '+33',
  },
  {
    title: 'French Guiana (Guyane française)',
    iso2: 'gf',
    value: '+594',
  },
  {
    title: 'French Polynesia (Polynésie française)',
    iso2: 'pf',
    value: '+689',
  },
  {
    title: 'Gabon',
    iso2: 'ga',
    value: '+241',
  },
  {
    title: 'Gambia',
    iso2: 'gm',
    value: '+220',
  },
  {
    title: 'Georgia (საქართველო)',
    iso2: 'ge',
    value: '+995',
  },
  {
    title: 'Germany (Deutschland)',
    iso2: 'de',
    value: '+49',
  },
  {
    title: 'Ghana (Gaana)',
    iso2: 'gh',
    value: '+233',
  },
  {
    title: 'Gibraltar',
    iso2: 'gi',
    value: '+350',
  },
  {
    title: 'Greece (Ελλάδα)',
    iso2: 'gr',
    value: '+30',
  },
  {
    title: 'Greenland (Kalaallit Nunaat)',
    iso2: 'gl',
    value: '+299',
  },
  {
    title: 'Grenada',
    iso2: 'gd',
    value: '+1473',
  },
  {
    title: 'Guadeloupe',
    iso2: 'gp',
    value: '+590',
  },
  {
    title: 'Guam',
    iso2: 'gu',
    value: '+1671',
  },
  {
    title: 'Guatemala',
    iso2: 'gt',
    value: '+502',
  },
  {
    title: 'Guernsey',
    iso2: 'gg',
    value: '+44',
    priority: 1,
    areaCodes: null,
  },
  {
    title: 'Guinea (Guinée)',
    iso2: 'gn',
    value: '+224',
  },
  {
    title: 'Guinea-Bissau (Guiné Bissau)',
    iso2: 'gw',
    value: '+245',
  },
  {
    title: 'Guyana',
    iso2: 'gy',
    value: '+592',
  },
  {
    title: 'Haiti',
    iso2: 'ht',
    value: '+509',
  },
  {
    title: 'Honduras',
    iso2: 'hn',
    value: '+504',
  },
  {
    title: 'Hong Kong (香港)',
    iso2: 'hk',
    value: '+852',
  },
  {
    title: 'Hungary (Magyarország)',
    iso2: 'hu',
    value: '+36',
  },
  {
    title: 'Iceland (Ísland)',
    iso2: 'is',
    value: '+354',
  },
  {
    title: 'India (भारत)',
    iso2: 'in',
    value: '+91',
  },
  {
    title: 'Indonesia',
    iso2: 'id',
    value: '+62',
  },
  {
    title: 'Iran (‫ایران‬‎)',
    iso2: 'ir',
    value: '+98',
  },
  {
    title: 'Iraq (‫العراق‬‎)',
    iso2: 'iq',
    value: '+964',
  },
  {
    title: 'Ireland',
    iso2: 'ie',
    value: '+353',
  },
  {
    title: 'Isle of Man',
    iso2: 'im',
    value: '+44',
    priority: 2,
    areaCodes: null,
  },
  {
    title: 'Israel (‫ישראל‬‎)',
    iso2: 'il',
    value: '+972',
  },
  {
    title: 'Italy (Italia)',
    iso2: 'it',
    value: '+39',
  },
  {
    title: 'Jamaica',
    iso2: 'jm',
    value: '+1876',
  },
  {
    title: 'Japan (日本)',
    iso2: 'jp',
    value: '+81',
  },
  {
    title: 'Jersey',
    iso2: 'je',
    value: '+44',
    priority: 3,
    areaCodes: null,
  },
  {
    title: 'Jordan (‫الأردن‬‎)',
    iso2: 'jo',
    value: '+962',
  },
  {
    title: 'Kazakhstan (Казахстан)',
    iso2: 'kz',
    value: '+7',
    priority: 1,
    areaCodes: null,
  },
  {
    title: 'Kenya',
    iso2: 'ke',
    value: '+254',
  },
  {
    title: 'Kiribati',
    iso2: 'ki',
    value: '+686',
  },
  {
    title: 'Kuwait (‫الكويت‬‎)',
    iso2: 'kw',
    value: '+965',
  },
  {
    title: 'Kyrgyzstan (Кыргызстан)',
    iso2: 'kg',
    value: '+996',
  },
  {
    title: 'Laos (ລາວ)',
    iso2: 'la',
    value: '+856',
  },
  {
    title: 'Latvia (Latvija)',
    iso2: 'lv',
    value: '+371',
  },
  {
    title: 'Lebanon (‫لبنان‬‎)',
    iso2: 'lb',
    value: '+961',
  },
  {
    title: 'Lesotho',
    iso2: 'ls',
    value: '+266',
  },
  {
    title: 'Liberia',
    iso2: 'lr',
    value: '+231',
  },
  {
    title: 'Libya (‫ليبيا‬‎)',
    iso2: 'ly',
    value: '+218',
  },
  {
    title: 'Liechtenstein',
    iso2: 'li',
    value: '+423',
  },
  {
    title: 'Lithuania (Lietuva)',
    iso2: 'lt',
    value: '+370',
  },
  {
    title: 'Luxembourg',
    iso2: 'lu',
    value: '+352',
  },
  {
    title: 'Macau (澳門)',
    iso2: 'mo',
    value: '+853',
  },
  {
    title: 'Macedonia (FYROM) (Македонија)',
    iso2: 'mk',
    value: '+389',
  },
  {
    title: 'Madagascar (Madagasikara)',
    iso2: 'mg',
    value: '+261',
  },
  {
    title: 'Malawi',
    iso2: 'mw',
    value: '+265',
  },
  {
    title: 'Malaysia',
    iso2: 'my',
    value: '+60',
  },
  {
    title: 'Maldives',
    iso2: 'mv',
    value: '+960',
  },
  {
    title: 'Mali',
    iso2: 'ml',
    value: '+223',
  },
  {
    title: 'Malta',
    iso2: 'mt',
    value: '+356',
  },
  {
    title: 'Marshall Islands',
    iso2: 'mh',
    value: '+692',
  },
  {
    title: 'Martinique',
    iso2: 'mq',
    value: '+596',
  },
  {
    title: 'Mauritania (‫موريتانيا‬‎)',
    iso2: 'mr',
    value: '+222',
  },
  {
    title: 'Mauritius (Moris)',
    iso2: 'mu',
    value: '+230',
  },
  {
    title: 'Mayotte',
    iso2: 'yt',
    value: '+262',
    priority: 1,
    areaCodes: null,
  },
  {
    title: 'Mexico (México)',
    iso2: 'mx',
    value: '+52',
  },
  {
    title: 'Micronesia',
    iso2: 'fm',
    value: '+691',
  },
  {
    title: 'Moldova (Republica Moldova)',
    iso2: 'md',
    value: '+373',
  },
  {
    title: 'Monaco',
    iso2: 'mc',
    value: '+377',
  },
  {
    title: 'Mongolia (Монгол)',
    iso2: 'mn',
    value: '+976',
  },
  {
    title: 'Montenegro (Crna Gora)',
    iso2: 'me',
    value: '+382',
  },
  {
    title: 'Montserrat',
    iso2: 'ms',
    value: '+1664',
  },
  {
    title: 'Morocco (‫المغرب‬‎)',
    iso2: 'ma',
    value: '+212',
  },
  {
    title: 'Mozambique (Moçambique)',
    iso2: 'mz',
    value: '+258',
  },
  {
    title: 'Myanmar (Burma)',
    iso2: 'mm',
    value: '+95',
  },
  {
    title: 'Namibia (Namibië)',
    iso2: 'na',
    value: '+264',
  },
  {
    title: 'Nauru',
    iso2: 'nr',
    value: '+674',
  },
  {
    title: 'Nepal (नेपाल)',
    iso2: 'np',
    value: '+977',
  },
  {
    title: 'Netherlands (Nederland)',
    iso2: 'nl',
    value: '+31',
  },
  {
    title: 'New Caledonia (Nouvelle-Calédonie)',
    iso2: 'nc',
    value: '+687',
  },
  {
    title: 'New Zealand',
    iso2: 'nz',
    value: '+64',
  },
  {
    title: 'Nicaragua',
    iso2: 'ni',
    value: '+505',
  },
  {
    title: 'Niger (Nijar)',
    iso2: 'ne',
    value: '+227',
  },
  {
    title: 'Nigeria',
    iso2: 'ng',
    value: '+234',
  },
  {
    title: 'Niue',
    iso2: 'nu',
    value: '+683',
  },
  {
    title: 'Norfolk Island',
    iso2: 'nf',
    value: '+672',
  },
  {
    title: 'North Korea (조선 민주주의 인민 공화국)',
    iso2: 'kp',
    value: '+850',
  },
  {
    title: 'Northern Mariana Islands',
    iso2: 'mp',
    value: '+1670',
  },
  {
    title: 'Norway (Norge)',
    iso2: 'no',
    value: '+47',
  },
  {
    title: 'Oman (‫عُمان‬‎)',
    iso2: 'om',
    value: '+968',
  },
  {
    title: 'Pakistan (‫پاکستان‬‎)',
    iso2: 'pk',
    value: '+92',
  },
  {
    title: 'Palau',
    iso2: 'pw',
    value: '+680',
  },
  {
    title: 'Palestine (‫فلسطين‬‎)',
    iso2: 'ps',
    value: '+970',
  },
  {
    title: 'Panama (Panamá)',
    iso2: 'pa',
    value: '+507',
  },
  {
    title: 'Papua New Guinea',
    iso2: 'pg',
    value: '+675',
  },
  {
    title: 'Paraguay',
    iso2: 'py',
    value: '+595',
  },
  {
    title: 'Peru (Perú)',
    iso2: 'pe',
    value: '+51',
  },
  {
    title: 'Philippines',
    iso2: 'ph',
    value: '+63',
  },
  {
    title: 'Poland (Polska)',
    iso2: 'pl',
    value: '+48',
  },
  {
    title: 'Portugal',
    iso2: 'pt',
    value: '+351',
  },
  {
    title: 'Puerto Rico',
    iso2: 'pr',
    value: '+1787',
    priority: 3,
    areaCodes: null,
  },
  {
    title: 'Qatar (‫قطر‬‎)',
    iso2: 'qa',
    value: '+974',
  },
  {
    title: 'Réunion (La Réunion)',
    iso2: 're',
    value: '+262',
  },
  {
    title: 'Romania (România)',
    iso2: 'ro',
    value: '+40',
  },
  {
    title: 'Russia (Россия)',
    iso2: 'ru',
    value: '+7',
  },
  {
    title: 'Rwanda',
    iso2: 'rw',
    value: '+250',
  },
  {
    title: 'Saint Barthélemy (Saint-Barthélemy)',
    iso2: 'bl',
    value: '+590',
    priority: 1,
    areaCodes: null,
  },
  {
    title: 'Saint Helena',
    iso2: 'sh',
    value: '+290',
  },
  {
    title: 'Saint Kitts and Nevis',
    iso2: 'kn',
    value: '+1869',
  },
  {
    title: 'Saint Lucia',
    iso2: 'lc',
    value: '+1758',
  },
  {
    title: 'Saint Martin (Saint-Martin (partie française))',
    iso2: 'mf',
    value: '+590',
    priority: 2,
    areaCodes: null,
  },
  {
    title: 'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
    iso2: 'pm',
    value: '+508',
  },
  {
    title: 'Saint Vincent and the Grenadines',
    iso2: 'vc',
    value: '+1784',
  },
  {
    title: 'Samoa',
    iso2: 'ws',
    value: '+685',
  },
  {
    title: 'San Marino',
    iso2: 'sm',
    value: '+378',
  },
  {
    title: 'São Tomé and Príncipe (São Tomé e Príncipe)',
    iso2: 'st',
    value: '+239',
  },
  {
    title: 'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
    iso2: 'sa',
    value: '+966',
  },
  {
    title: 'Senegal (Sénégal)',
    iso2: 'sn',
    value: '+221',
  },
  {
    title: 'Serbia (Србија)',
    iso2: 'rs',
    value: '+381',
  },
  {
    title: 'Seychelles',
    iso2: 'sc',
    value: '+248',
  },
  {
    title: 'Sierra Leone',
    iso2: 'sl',
    value: '+232',
  },
  {
    title: 'Singapore',
    iso2: 'sg',
    value: '+65',
  },
  {
    title: 'Sint Maarten',
    iso2: 'sx',
    value: '+1721',
  },
  {
    title: 'Slovakia (Slovensko)',
    iso2: 'sk',
    value: '+421',
  },
  {
    title: 'Slovenia (Slovenija)',
    iso2: 'si',
    value: '+386',
  },
  {
    title: 'Solomon Islands',
    iso2: 'sb',
    value: '+677',
  },
  {
    title: 'Somalia (Soomaaliya)',
    iso2: 'so',
    value: '+252',
  },
  {
    title: 'South Africa',
    iso2: 'za',
    value: '+27',
  },
  {
    title: 'South Korea (대한민국)',
    iso2: 'kr',
    value: '+82',
  },
  {
    title: 'South Sudan (‫جنوب السودان‬‎)',
    iso2: 'ss',
    value: '+211',
  },
  {
    title: 'Spain (España)',
    iso2: 'es',
    value: '+34',
  },
  {
    title: 'Sri Lanka (ශ්‍රී ලංකාව)',
    iso2: 'lk',
    value: '+94',
  },
  {
    title: 'Sudan (‫السودان‬‎)',
    iso2: 'sd',
    value: '+249',
  },
  {
    title: 'Surititle',
    iso2: 'sr',
    value: '+597',
  },
  {
    title: 'Svalbard and Jan Mayen',
    iso2: 'sj',
    value: '+47',
    priority: 1,
    areaCodes: null,
  },
  {
    title: 'Swaziland',
    iso2: 'sz',
    value: '+268',
  },
  {
    title: 'Sweden (Sverige)',
    iso2: 'se',
    value: '+46',
  },
  {
    title: 'Switzerland (Schweiz)',
    iso2: 'ch',
    value: '+41',
  },
  {
    title: 'Syria (‫سوريا‬‎)',
    iso2: 'sy',
    value: '+963',
  },
  {
    title: 'Taiwan (台灣)',
    iso2: 'tw',
    value: '+886',
  },
  {
    title: 'Tajikistan',
    iso2: 'tj',
    value: '+992',
  },
  {
    title: 'Tanzania',
    iso2: 'tz',
    value: '+255',
  },
  {
    title: 'Thailand (ไทย)',
    iso2: 'th',
    value: '+66',
  },
  {
    title: 'Timor-Leste',
    iso2: 'tl',
    value: '+670',
  },
  {
    title: 'Togo',
    iso2: 'tg',
    value: '+228',
  },
  {
    title: 'Tokelau',
    iso2: 'tk',
    value: '+690',
  },
  {
    title: 'Tonga',
    iso2: 'to',
    value: '+676',
  },
  {
    title: 'Trinidad and Tobago',
    iso2: 'tt',
    value: '+1868',
  },
  {
    title: 'Tunisia (‫تونس‬‎)',
    iso2: 'tn',
    value: '+216',
  },
  {
    title: 'Turkmenistan',
    iso2: 'tm',
    value: '+993',
  },
  {
    title: 'Turks and Caicos Islands',
    iso2: 'tc',
    value: '+1649',
  },
  {
    title: 'Tuvalu',
    iso2: 'tv',
    value: '+688',
  },
  {
    title: 'U.S. Virgin Islands',
    iso2: 'vi',
    value: '+1340',
  },
  {
    title: 'Uganda',
    iso2: 'ug',
    value: '+256',
  },
  {
    title: 'Ukraine (Україна)',
    iso2: 'ua',
    value: '+380',
  },
  {
    title: 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
    iso2: 'ae',
    value: '+971',
  },
  {
    title: 'United Kingdom',
    iso2: 'gb',
    value: '+44',
  },
  {
    title: 'Uruguay',
    iso2: 'uy',
    value: '+598',
  },
  {
    title: 'Uzbekistan (Oʻzbekiston)',
    iso2: 'uz',
    value: '+998',
  },
  {
    title: 'Vanuatu',
    iso2: 'vu',
    value: '+678',
  },
  {
    title: 'Vatican City (Città del Vaticano)',
    iso2: 'va',
    value: '+39',
    priority: 1,
    areaCodes: null,
  },
  {
    title: 'Venezuela',
    iso2: 've',
    value: '+58',
  },
  {
    title: 'Vietnam (Việt Nam)',
    iso2: 'vn',
    value: '+84',
  },
  {
    title: 'Wallis and Futuna',
    iso2: 'wf',
    value: '+681',
  },
  {
    title: 'Western Sahara (‫الصحراء الغربية‬‎)',
    iso2: 'eh',
    value: '+212',
    priority: 1,
    areaCodes: null,
  },
  {
    title: 'Yemen (‫اليمن‬‎)',
    iso2: 'ye',
    value: '+967',
  },
  {
    title: 'Zambia',
    iso2: 'zm',
    value: '+260',
  },
  {
    title: 'Zimbabwe',
    iso2: 'zw',
    value: '+263',
  },
  {
    title: 'Åland Islands',
    iso2: 'ax',
    value: '+358',
    priority: 1,
    areaCodes: null,
  },
]
