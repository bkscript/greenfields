window.MB = window.MB || {};

MB.PRICE_DATE = "2026-09-30";
MB.LAST_UPDATED_DATE = "2026-10-01";
MB.BRAND_HI = "फसल भाव";
MB.BRAND_EN = "FasalBhav";
MB.GA_MEASUREMENT_ID = "G-WFENY16HN7";
MB.WA_GROUP = "https://chat.whatsapp.com/J6Q5UqZ86Q66sy0nRN3bt0";
MB.WA_JOIN_SHORT = "मुफ्त मंडी भाव";
MB.WA_JOIN = "मुफ्त मंडी भाव — WhatsApp ग्रुप जॉइन करें";

// IBJA PM physical-market reference rates. Gold values are ₹/10 g and silver is ₹/kg.
// Keep this separate from mandi prices; GST and jewellery making charges are not included.
MB.BULLION = {
  source: "IBJA",
  sourceUrl: "https://www.ibjarates.com/",
  date: "2026-09-30",
  rates: [
    { slug: "gold-999", name: "24 कैरेट सोना", purity: "Gold 999", value: 147888, unit: "₹ / 10 ग्राम", metal: "gold" },
    { slug: "gold-916", name: "22 कैरेट सोना", purity: "Gold 916", value: 135465, unit: "₹ / 10 ग्राम", metal: "gold" },
    { slug: "gold-750", name: "18 कैरेट सोना", purity: "Gold 750", value: 110916, unit: "₹ / 10 ग्राम", metal: "gold" },
    { slug: "silver-999", name: "चांदी", purity: "Silver 999", value: 220435, unit: "₹ / किलो", metal: "silver" },
  ],
};

MB.TAPE = [
  { crop: "sarson", mandi: "sri-ganganagar" },
  { crop: "moong", mandi: "nagaur" },
  { crop: "jeera", mandi: "unjha" },
  { crop: "moongphali", mandi: "bikaner" },
  { crop: "soyabean", mandi: "indore" },
  { crop: "dhan", mandi: "shahabad" },
];

MB.states = [
  { slug: "rajasthan", hi: "राजस्थान", en: "Rajasthan", short: "RJ" },
  { slug: "gujarat", hi: "गुजरात", en: "Gujarat", short: "GJ" },
  { slug: "madhya-pradesh", hi: "मध्य प्रदेश", en: "Madhya Pradesh", short: "MP" },
  { slug: "haryana", hi: "हरियाणा", en: "Haryana", short: "HR" },
  { slug: "andhra-pradesh", hi: "आंध्र प्रदेश", en: "Andhra Pradesh", short: "AP" },
  { slug: "karnataka", hi: "कर्नाटक", en: "Karnataka", short: "KA" },
  { slug: "uttar-pradesh", hi: "उत्तर प्रदेश", en: "Uttar Pradesh", short: "UP" },
];

MB.crops = [
  { slug: "gehun", hi: "गेहूं", en: "Wheat", veg: false, msp: 2585 },
  { slug: "sarson", hi: "सरसों", en: "Mustard", veg: false, msp: 6200 },
  { slug: "chana", hi: "चना", en: "Gram", veg: false, msp: 5875 },
  { slug: "bajra", hi: "बाजरा", en: "Bajra", veg: false, msp: 2900 },
  { slug: "makka", hi: "मक्का", en: "Maize", veg: false, msp: 2410 },
  { slug: "kapas", hi: "कपास", en: "Cotton / Narma", veg: false, msp: null },
  { slug: "moongphali", hi: "मूंगफली", en: "Groundnut", veg: false, msp: 7517 },
  { slug: "jeera", hi: "जीरा", en: "Cumin", veg: false, msp: null },
  { slug: "soyabean", hi: "सोयाबीन", en: "Soybean", veg: false, msp: 5708 },
  { slug: "dhan", hi: "धान", en: "Paddy", veg: false, msp: 2441 },
  { slug: "pyaz", hi: "प्याज", en: "Onion", veg: true, msp: null },
  { slug: "aalu", hi: "आलू", en: "Potato", veg: true, msp: null },
  { slug: "tamatar", hi: "टमाटर", en: "Tomato", veg: true, msp: null },
  { slug: "gwar", hi: "ग्वार", en: "Guar", veg: false, msp: null },
  { slug: "jau", hi: "जौ", en: "Barley", veg: false, msp: 2150 },
  { slug: "moong", hi: "मूंग", en: "Moong", veg: false, msp: 8780 },
  { slug: "moth", hi: "मोठ", en: "Moth", veg: false, msp: null },
  { slug: "til", hi: "तिल", en: "Sesame", veg: false, msp: 10346 },
  { slug: "jowar", hi: "ज्वार", en: "Jowar", veg: false, msp: 4023 },
  { slug: "arhar", hi: "अरहर", en: "Arhar / Tur", veg: false, msp: 8450 },
  { slug: "urad", hi: "उड़द", en: "Urad", veg: false, msp: 8200 },
  { slug: "masoor", hi: "मसूर", en: "Masoor", veg: false, msp: 7000 },
  { slug: "isabgol", hi: "इसबगोल", en: "Isabgol", veg: false, msp: null },
  { slug: "lahsun", hi: "लहसुन", en: "Garlic", veg: true, msp: null },
  { slug: "haldi", hi: "हल्दी", en: "Turmeric", veg: false, msp: null },
  { slug: "adrak", hi: "अदरक", en: "Ginger", veg: true, msp: null },
  { slug: "mirch", hi: "मिर्च", en: "Chilli", veg: false, msp: null },
  { slug: "hari-mirch", hi: "हरी मिर्च", en: "Green Chilli", veg: true, msp: null },
  { slug: "rice", hi: "चावल", en: "Rice", veg: false, msp: null },
  { slug: "dhaniya", hi: "धनिया", en: "Coriander Seed", veg: false, msp: null },
  { slug: "hara-dhaniya", hi: "हरा धनिया", en: "Coriander Leaves", veg: true, msp: null },
  { slug: "saunf", hi: "सौंफ", en: "Fennel", veg: false, msp: null },
  { slug: "sua", hi: "सुआ", en: "Dill", veg: false, msp: null },
  { slug: "sua-patti", hi: "सुआ पत्ती", en: "Dill Leaves", veg: true, msp: null },
  { slug: "methi", hi: "मेथी दाना", en: "Fenugreek Seed", veg: false, msp: null },
  { slug: "hari-methi", hi: "पान मेथी", en: "Fenugreek Leaves", veg: false, msp: null },
  { slug: "arandi", hi: "अरंडी", en: "Castor Seed", veg: false, msp: null },
  { slug: "matar", hi: "मटर", en: "Field Pea", veg: false, msp: null },
  { slug: "hara-matar", hi: "हरी मटर", en: "Green Peas", veg: true, msp: null },
  { slug: "gwarphali", hi: "ग्वार फली", en: "Cluster Beans", veg: true, msp: null },
  { slug: "alsi", hi: "अलसी", en: "Linseed", veg: false, msp: null },
  { slug: "asaliya", hi: "असालिया", en: "Garden Cress", veg: false, msp: null },
  { slug: "kalonji", hi: "कलौंजी", en: "Nigella Seeds", veg: false, msp: null },
  { slug: "ker", hi: "केर", en: "Ker Berries", veg: false, msp: null },
  { slug: "sangri", hi: "सांगरी", en: "Desert Bean Pods", veg: false, msp: null },
  { slug: "amrood", hi: "अमरूद", en: "Guava", veg: true, msp: null },
  { slug: "kela", hi: "केला", en: "Banana", veg: true, msp: null },
  { slug: "seb", hi: "सेब", en: "Apple", veg: true, msp: null },
  { slug: "anar", hi: "अनार", en: "Pomegranate", veg: true, msp: null },
];

// Contextual link to the owner's separate food brand. These appear only on
// the relevant crop pages, after the price content and before FAQs.
MB.marwarMadePromos = {
  "jeera": {
    "title": "रोज़ की रसोई के लिए चुनिंदा मसाले",
    "text": "धनिया, हल्दी और लाल मिर्च जैसे रोज़मर्रा के मसाले MarwarMade पर देखें।",
    "cta": "मसाले देखें",
    "image": "https://marwarmade.in/assets/images/products/everyday-spices-three-pouches-v4.png",
    "imageAlt": "MarwarMade के लाल मिर्च, हल्दी और धनिया पाउच",
    "url": "https://marwarmade.in/products/?utm_source=fasalbhav&utm_medium=referral&utm_campaign=spice-crops&utm_content=jeera"
  },
  "mirch": {
    "title": "रोज़ की रसोई के लिए चुनिंदा मसाले",
    "text": "धनिया, हल्दी और लाल मिर्च जैसे रोज़मर्रा के मसाले MarwarMade पर देखें।",
    "cta": "मसाले देखें",
    "image": "https://marwarmade.in/assets/images/products/everyday-spices-three-pouches-v4.png",
    "imageAlt": "MarwarMade के लाल मिर्च, हल्दी और धनिया पाउच",
    "url": "https://marwarmade.in/products/?utm_source=fasalbhav&utm_medium=referral&utm_campaign=spice-crops&utm_content=mirch"
  },
  "dhaniya": {
    "title": "रोज़ की रसोई के लिए चुनिंदा मसाले",
    "text": "धनिया, हल्दी और लाल मिर्च जैसे रोज़मर्रा के मसाले MarwarMade पर देखें।",
    "cta": "मसाले देखें",
    "image": "https://marwarmade.in/assets/images/products/everyday-spices-three-pouches-v4.png",
    "imageAlt": "MarwarMade के लाल मिर्च, हल्दी और धनिया पाउच",
    "url": "https://marwarmade.in/products/?utm_source=fasalbhav&utm_medium=referral&utm_campaign=spice-crops&utm_content=dhaniya"
  },
  "haldi": {
    "title": "रोज़ की रसोई के लिए चुनिंदा मसाले",
    "text": "धनिया, हल्दी और लाल मिर्च जैसे रोज़मर्रा के मसाले MarwarMade पर देखें।",
    "cta": "मसाले देखें",
    "image": "https://marwarmade.in/assets/images/products/everyday-spices-three-pouches-v4.png",
    "imageAlt": "MarwarMade के लाल मिर्च, हल्दी और धनिया पाउच",
    "url": "https://marwarmade.in/products/?utm_source=fasalbhav&utm_medium=referral&utm_campaign=spice-crops&utm_content=haldi"
  },
  "methi": {
    "title": "रोज़ की रसोई के लिए चुनिंदा मसाले",
    "text": "धनिया, हल्दी और लाल मिर्च जैसे रोज़मर्रा के मसाले MarwarMade पर देखें।",
    "cta": "मसाले देखें",
    "image": "https://marwarmade.in/assets/images/products/everyday-spices-three-pouches-v4.png",
    "imageAlt": "MarwarMade के लाल मिर्च, हल्दी और धनिया पाउच",
    "url": "https://marwarmade.in/products/?utm_source=fasalbhav&utm_medium=referral&utm_campaign=spice-crops&utm_content=methi"
  },
  "sarson": {
    "title": "रोज़ की रसोई के लिए चुनिंदा मसाले",
    "text": "धनिया, हल्दी और लाल मिर्च जैसे रोज़मर्रा के मसाले MarwarMade पर देखें।",
    "cta": "मसाले देखें",
    "image": "https://marwarmade.in/assets/images/products/everyday-spices-three-pouches-v4.png",
    "imageAlt": "MarwarMade के लाल मिर्च, हल्दी और धनिया पाउच",
    "url": "https://marwarmade.in/products/?utm_source=fasalbhav&utm_medium=referral&utm_campaign=spice-crops&utm_content=sarson"
  }
};

MB.mandis = [
  { slug: "sri-ganganagar", hi: "श्रीगंगानगर", en: "Sri Ganganagar", state: "rajasthan", district: { hi: "श्रीगंगानगर", en: "Sri Ganganagar" } },
  { slug: "anupgarh", hi: "अनूपगढ़", en: "Anupgarh", state: "rajasthan", district: { hi: "अनूपगढ़", en: "Anupgarh" } },
  { slug: "goluwala", hi: "गोलूवाला", en: "Goluwala", state: "rajasthan", district: { hi: "हनुमानगढ़", en: "Hanumangarh" } },
  { slug: "kota", hi: "कोटा", en: "Kota", state: "rajasthan", district: { hi: "कोटा", en: "Kota" } },
  { slug: "ramganj", hi: "रामगंज मंडी", en: "Ramganj Mandi", state: "rajasthan", district: { hi: "कोटा", en: "Kota" } },
  { slug: "kekri", hi: "केकरी", en: "Kekri", state: "rajasthan", district: { hi: "अजमेर", en: "Ajmer" } },
  { slug: "beawar", hi: "ब्यावर", en: "Beawar", state: "rajasthan", district: { hi: "ब्यावर", en: "Beawar" } },
  { slug: "baran", hi: "बारां", en: "Baran", state: "rajasthan", district: { hi: "बारां", en: "Baran" } },
  { slug: "bikaner", hi: "बीकानेर", en: "Bikaner", state: "rajasthan", district: { hi: "बीकानेर", en: "Bikaner" } },
  { slug: "nokha", hi: "नोखा", en: "Nokha", state: "rajasthan", district: { hi: "बीकानेर", en: "Bikaner" } },
  { slug: "lunkaransar", hi: "लूणकरणसर", en: "Lunkaransar", state: "rajasthan", district: { hi: "बीकानेर", en: "Bikaner" } },
  { slug: "nagaur", hi: "नागौर", en: "Nagaur", state: "rajasthan", district: { hi: "नागौर", en: "Nagaur" } },
  { slug: "merta", hi: "मेड़ता", en: "Merta", state: "rajasthan", district: { hi: "नागौर", en: "Nagaur" } },
  { slug: "jodhpur", hi: "जोधपुर", en: "Jodhpur", state: "rajasthan", district: { hi: "जोधपुर", en: "Jodhpur" } },
  { slug: "jaipur", hi: "जयपुर (बस्सी)", en: "Jaipur (Bassi)", state: "rajasthan", district: { hi: "जयपुर", en: "Jaipur" } },
  { slug: "jalore", hi: "जालौर", en: "Jalore", state: "rajasthan", district: { hi: "जालौर", en: "Jalore" } },
  { slug: "nimbahera", hi: "निम्बाहेड़ा", en: "Nimbahera", state: "rajasthan", district: { hi: "चित्तौड़गढ़", en: "Chittorgarh" } },
  { slug: "unjha", hi: "उंझा", en: "Unjha", state: "gujarat", district: { hi: "मेहसाणा", en: "Mehsana" } },
  { slug: "mehsana", hi: "मेहसाणा", en: "Mehsana", state: "gujarat", district: { hi: "मेहसाणा", en: "Mehsana" } },
  { slug: "patan", hi: "पाटन", en: "Patan", state: "gujarat", district: { hi: "पाटन", en: "Patan" } },
  { slug: "gondal", hi: "गोंडल", en: "Gondal", state: "gujarat", district: { hi: "राजकोट", en: "Rajkot" } },
  { slug: "rajkot", hi: "राजकोट", en: "Rajkot", state: "gujarat", district: { hi: "राजकोट", en: "Rajkot" } },
  { slug: "amreli", hi: "अमरेली", en: "Amreli", state: "gujarat", district: { hi: "अमरेली", en: "Amreli" } },
  { slug: "deesa", hi: "डीसा", en: "Deesa", state: "gujarat", district: { hi: "बनासकांठा", en: "Banaskantha" } },
  { slug: "indore", hi: "इंदौर", en: "Indore", state: "madhya-pradesh", district: { hi: "इंदौर", en: "Indore" } },
  { slug: "ujjain", hi: "उज्जैन", en: "Ujjain", state: "madhya-pradesh", district: { hi: "उज्जैन", en: "Ujjain" } },
  { slug: "harda", hi: "हरदा", en: "Harda", state: "madhya-pradesh", district: { hi: "हरदा", en: "Harda" } },
  { slug: "mandsaur", hi: "मंदसौर", en: "Mandsaur", state: "madhya-pradesh", district: { hi: "मंदसौर", en: "Mandsaur" } },
  { slug: "neemuch", hi: "नीमच", en: "Neemuch", state: "madhya-pradesh", district: { hi: "नीमच", en: "Neemuch" } },
  { slug: "ratlam", hi: "रतलाम", en: "Ratlam", state: "madhya-pradesh", district: { hi: "रतलाम", en: "Ratlam" } },
  { slug: "bhiwani", hi: "भिवानी", en: "Bhiwani", state: "haryana", district: { hi: "भिवानी", en: "Bhiwani" } },
  { slug: "siwani", hi: "सिवानी", en: "Siwani", state: "haryana", district: { hi: "भिवानी", en: "Bhiwani" } },
  { slug: "sirsa", hi: "सिरसा", en: "Sirsa", state: "haryana", district: { hi: "सिरसा", en: "Sirsa" } },
  { slug: "hisar", hi: "हिसार", en: "Hisar", state: "haryana", district: { hi: "हिसार", en: "Hisar" } },
  { slug: "adampur", hi: "आदमपुर", en: "Adampur", state: "haryana", district: { hi: "हिसार", en: "Hisar" } },
  { slug: "fatehabad", hi: "फतेहाबाद", en: "Fatehabad", state: "haryana", district: { hi: "फतेहाबाद", en: "Fatehabad" } },
  { slug: "jind", hi: "जींद", en: "Jind", state: "haryana", district: { hi: "जींद", en: "Jind" } },
  { slug: "rohtak", hi: "रोहतक", en: "Rohtak", state: "haryana", district: { hi: "रोहतक", en: "Rohtak" } },
  { slug: "shahabad", hi: "शाहाबाद", en: "Shahabad", state: "haryana", district: { hi: "कुरुक्षेत्र", en: "Kurukshetra" } },
  { slug: "tarori", hi: "तरावड़ी", en: "Tarori", state: "haryana", district: { hi: "करनाल", en: "Karnal" } },
  { slug: "panipat", hi: "पानीपत", en: "Panipat", state: "haryana", district: { hi: "पानीपत", en: "Panipat" } },
  { slug: "sonepat", hi: "सोनीपत", en: "Sonepat", state: "haryana", district: { hi: "सोनीपत", en: "Sonepat" } },
  { slug: "ganaur", hi: "गन्नौर", en: "Ganaur", state: "haryana", district: { hi: "सोनीपत", en: "Sonepat" } },
  { slug: "guntur", hi: "गुंटूर", en: "Guntur", state: "andhra-pradesh", district: { hi: "गुंटूर", en: "Guntur" } },
  { slug: "byadgi", hi: "ब्याडगी", en: "Byadgi", state: "karnataka", district: { hi: "हावेरी", en: "Haveri" } },
  { slug: "mathania", hi: "मथानिया", en: "Mathania", state: "rajasthan", district: { hi: "जोधपुर", en: "Jodhpur" } },
  { slug: "agra", hi: "आगरा", en: "Agra", state: "uttar-pradesh", district: { hi: "आगरा", en: "Agra" } },
  { slug: "kanpur", hi: "कानपुर", en: "Kanpur", state: "uttar-pradesh", district: { hi: "कानपुर", en: "Kanpur" } },
  { slug: "meerut", hi: "मेरठ", en: "Meerut", state: "uttar-pradesh", district: { hi: "मेरठ", en: "Meerut" } },
  { slug: "aligarh", hi: "अलीगढ़", en: "Aligarh", state: "uttar-pradesh", district: { hi: "अलीगढ़", en: "Aligarh" } },
  { slug: "bareilly", hi: "बरेली", en: "Bareilly", state: "uttar-pradesh", district: { hi: "बरेली", en: "Bareilly" } },
  { slug: "lucknow", hi: "लखनऊ", en: "Lucknow", state: "uttar-pradesh", district: { hi: "लखनऊ", en: "Lucknow" } },
  { slug: "mathura", hi: "मथुरा", en: "Mathura", state: "uttar-pradesh", district: { hi: "मथुरा", en: "Mathura" } },
  { slug: "hathras", hi: "हाथरस", en: "Hathras", state: "uttar-pradesh", district: { hi: "हाथरस", en: "Hathras" } },
  { slug: "gorakhpur", hi: "गोरखपुर", en: "Gorakhpur", state: "uttar-pradesh", district: { hi: "गोरखपुर", en: "Gorakhpur" } },
  { slug: "muzaffarnagar", hi: "मुजफ्फरनगर", en: "Muzaffarnagar", state: "uttar-pradesh", district: { hi: "मुजफ्फरनगर", en: "Muzaffarnagar" } },
  { slug: "hapur", hi: "हापुड़", en: "Hapur", state: "uttar-pradesh", district: { hi: "हापुड़", en: "Hapur" } },
  { slug: "saharanpur", hi: "सहारनपुर", en: "Saharanpur", state: "uttar-pradesh", district: { hi: "सहारनपुर", en: "Saharanpur" } },
  { slug: "mainpuri", hi: "मैनपुरी", en: "Mainpuri", state: "uttar-pradesh", district: { hi: "मैनपुरी", en: "Mainpuri" } },
];

MB.AGMARKNET_ALIASES = {
  "mandis": {
    "sri-ganganagar": ["Sriganganagar (Grain) APMC"],
    "bikaner": ["Bikaner (Grain) APMC"],
    "merta": ["Merta City APMC"],
    "jodhpur": ["Jodhpur (Grain) APMC"],
    "jaipur": ["Bassi APMC"],
    "amreli": ["The Agricultural Produce Market Committee-Amreli"],
    "sirsa": ["New Grain Market , Sirsa APMC"],
    "guntur": ["Guntur APMC"],
    "byadgi": ["Byadagi APMC"],
    "mathania": ["Osiyan Mathania APMC"],
    "agra": ["Agra APMC"],
    "kanpur": ["Kanpur(Grain) APMC"],
    "meerut": ["Meerut APMC"],
    "aligarh": ["Aligarh APMC"],
    "bareilly": ["Bareilly APMC"],
    "lucknow": ["Lucknow APMC"],
    "mathura": ["Mathura APMC"],
    "hathras": ["Haathras APMC"],
    "gorakhpur": ["Gorakhpur APMC"],
    "muzaffarnagar": ["Muzzafarnagar APMC"],
    "hapur": ["Hapur APMC"],
    "saharanpur": ["Saharanpur APMC"],
    "mainpuri": ["Mainpuri APMC"]
  },
  "crops": {
    "kapas": ["Cotton", "Desi Cotton", "Kapas", "Narma", "American Cotton", "Bt Cotton", "BT Cotton"],
    "dhan": ["Paddy(Common)", "Paddy(Basmati)"],
    "chana": ["Bengal Gram(Gram)(Whole)", "Kabuli Chana(Chickpeas-White)"],
    "moong": ["Green Gram(Moong)(Whole)"],
    "urad": ["Black Gram(Urd Beans)(Whole)"],
    "masoor": ["Lentil(Masur)(Whole)"],
    "gwar": ["Guar Seed(Cluster Beans Seed)"],
    "gwarphali": ["Cluster beans"],
    "bajra": ["Bajra(Pearl Millet/Cumbu)"],
    "jowar": ["Jowar(Sorghum)", "Jwar", "Sorghum"],
    "jau": ["Barley(Jau)"],
    "til": ["Sesamum(Sesame,Gingelly,Til)"],
    "jeera": ["Cummin Seed(Jeera)"],
    "isabgol": ["Isabgul(Psyllium)"],
    "asaliya": ["Asaliya", "Asalia", "Garden Cress", "Halim"],
    "kalonji": ["Kalonji", "Nigella Seeds", "Nigella"],
    "arhar": ["Red gram/Arhar/Tur(whole)"],
    "adrak": ["Ginger(Green)", "Ginger(Dry)"],
    "soyabean": ["Soyabean"],
    "haldi": ["Turmeric(raw)"],
    "mirch": ["Chilli", "Chillies", "Chili", "Chili Red", "Dry Chillies"],
    "hari-mirch": ["Green Chilli", "Green Chillies"],
    "dhaniya": ["Corriander seed", "Coriander(Seed)"],
    "hara-dhaniya": ["Coriander(Leaves)"],
    "saunf": ["Soanf"],
    "sua": ["Dill", "Dill Seed", "Dill Seeds", "Sowa", "Suva", "Suva(Dill Seed)"],
    "sua-patti": ["Dill Leaves", "Dill(Leaves)", "Sowa Leaves", "Suva Leaves", "Shepu"],
    "methi": ["Methi Seeds"],
    "hari-methi": ["Methi(Leaves)"],
    "arandi": ["Castor Seed"],
    "matar": ["Field Pea"],
    "hara-matar": ["Peas Wet", "Pea Pod/Pea Cod/हरी मटर"],
    "alsi": ["Linseed"],
    "kela": ["Banana - Green"],
    "ker": ["Ker", "Kera", "Keri", "Ker Berries", "Keri Berries", "Kair", "Kenia", "Capparis decidua", "केर", "केरिया"],
    "sangri": ["Sangri", "Sangri Bean", "Desert Bean", "Desert Bean Pods", "Khingora", "Moth Bean", "Sangri Pods", "सांगरी", "संगरी", "खिंगोरा"]
  }
};

MB.prices = [
  { mandi: "agra", crop: "hari-mirch", min: 1500, modal: 1500, max: 1500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "agra", crop: "aalu", min: 500, modal: 500, max: 500, vs: 0, arrivals: "high", date: "2026-09-30", fresh: true },
  { mandi: "agra", crop: "rice", min: 4850, modal: 5118, max: 7950, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "agra", crop: "moong", min: 9446, modal: 9552, max: 9579, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "agra", crop: "pyaz", min: 1500, modal: 2449, max: 4000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "agra", crop: "alsi", min: 8894, modal: 8894, max: 8894, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "agra", crop: "tamatar", min: 1400, modal: 1429, max: 1700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "agra", crop: "gehun", min: 2700, modal: 2700, max: 2700, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "agra", crop: "hara-dhaniya", min: 15798, modal: 15798, max: 15798, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "agra", crop: "adrak", min: 5000, modal: 5000, max: 5000, vs: 0, arrivals: "low", date: "2026-09-30", fresh: true },
  { mandi: "agra", crop: "moongphali", min: 14089, modal: 14089, max: 14089, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "agra", crop: "methi", min: 15000, modal: 15000, max: 15000, vs: 0, arrivals: "low", date: "2026-09-30", fresh: true },
  { mandi: "agra", crop: "mirch", min: 47870, modal: 47870, max: 47870, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "agra", crop: "lahsun", min: 8500, modal: 8878, max: 12538, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "agra", crop: "makka", min: 4370, modal: 4370, max: 4370, vs: 0, arrivals: "low", date: "2026-09-18", fresh: false },
  { mandi: "agra", crop: "sarson", min: 12500, modal: 12500, max: 12500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "agra", crop: "til", min: 25863, modal: 25863, max: 25863, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "agra", crop: "saunf", min: 30248, modal: 30248, max: 30248, vs: 0, arrivals: "low", date: "2026-09-18", fresh: false },
  { mandi: "agra", crop: "bajra", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-09-19", fresh: false },
  { mandi: "sri-ganganagar", crop: "gehun", min: 2650, modal: 2700, max: 2716, vs: 0, arrivals: "high", date: "2026-09-29", fresh: true },
  { mandi: "jaipur", crop: "gehun", min: 2500, modal: 2590, max: 2680, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kota", crop: "gehun", min: 2700, modal: 2700, max: 2700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "indore", crop: "gehun", min: 2105, modal: 2700, max: 3121, vs: 0, arrivals: "high", date: "2026-09-30", fresh: true },
  { mandi: "ujjain", crop: "gehun", min: 1950, modal: 2600, max: 3074, vs: 0, arrivals: "low", date: "2026-09-30", fresh: true },
  { mandi: "gondal", crop: "gehun", min: 2550, modal: 2770, max: 3000, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "kota", crop: "sarson", min: 7500, modal: 7500, max: 7500, vs: 0, arrivals: "high", date: "2026-09-30", fresh: true },
  { mandi: "baran", crop: "sarson", min: 6650, modal: 7610, max: 8426, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sri-ganganagar", crop: "sarson", min: 6000, modal: 7791, max: 7942, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "indore", crop: "sarson", min: 6940, modal: 6940, max: 6940, vs: 0, arrivals: "low", date: "2026-09-28", fresh: true },
  { mandi: "indore", crop: "chana", min: 2310, modal: 9100, max: 10300, vs: 0, arrivals: "high", date: "2026-09-30", fresh: true },
  { mandi: "ujjain", crop: "chana", min: 7259, modal: 7259, max: 7259, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kota", crop: "chana", min: 5500, modal: 5500, max: 5500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "jaipur", crop: "chana", min: 6000, modal: 6000, max: 6000, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "nagaur", crop: "bajra", min: 2050, modal: 2150, max: 2220, vs: 25, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "merta", crop: "bajra", min: 2030, modal: 2135, max: 2200, vs: 18, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "bikaner", crop: "bajra", min: 2000, modal: 2100, max: 2180, vs: 10, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jodhpur", crop: "bajra", min: 1500, modal: 2000, max: 2400, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "jaipur", crop: "bajra", min: 1960, modal: 2220, max: 2480, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sri-ganganagar", crop: "bajra", min: 2490, modal: 2490, max: 2490, vs: 0, arrivals: "low", date: "2026-09-28", fresh: true },
  { mandi: "deesa", crop: "bajra", min: 2275, modal: 2400, max: 2690, vs: 0, arrivals: "low", date: "2026-09-30", fresh: true },
  { mandi: "indore", crop: "makka", min: 1601, modal: 2424, max: 2424, vs: 0, arrivals: "high", date: "2026-09-30", fresh: true },
  { mandi: "harda", crop: "makka", min: 1402, modal: 1625, max: 2280, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kota", crop: "makka", min: 2100, modal: 2100, max: 2100, vs: 0, arrivals: "low", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "makka", min: 2200, modal: 2280, max: 2350, vs: 30, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "rajkot", crop: "kapas", min: 7300, modal: 8450, max: 9405, vs: 0, arrivals: "high", date: "2026-09-30", fresh: true },
  { mandi: "amreli", crop: "kapas", min: 5000, modal: 8975, max: 9500, vs: 0, arrivals: "high", date: "2026-09-29", fresh: true },
  { mandi: "gondal", crop: "kapas", min: 5755, modal: 8930, max: 9330, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "indore", crop: "kapas", min: 6800, modal: 7100, max: 7450, vs: 0, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "gondal", crop: "moongphali", min: 4455, modal: 7005, max: 8155, vs: 0, arrivals: "high", date: "2026-09-29", fresh: true },
  { mandi: "amreli", crop: "moongphali", min: 5000, modal: 6900, max: 7125, vs: 0, arrivals: "high", date: "2026-09-29", fresh: true },
  { mandi: "rajkot", crop: "moongphali", min: 5750, modal: 7125, max: 7700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bikaner", crop: "moongphali", min: 6907, modal: 6907, max: 6907, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "deesa", crop: "moongphali", min: 6255, modal: 7500, max: 9555, vs: 0, arrivals: "low", date: "2026-09-30", fresh: true },
  { mandi: "unjha", crop: "jeera", min: 18300, modal: 20950, max: 24000, vs: 0, arrivals: "high", date: "2026-09-30", fresh: true },
  { mandi: "jodhpur", crop: "jeera", min: 17000, modal: 19500, max: 21700, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "nagaur", crop: "jeera", min: 17500, modal: 20500, max: 21700, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "merta", crop: "jeera", min: 16000, modal: 20000, max: 22500, vs: 0, arrivals: "high", date: "2026-09-29", fresh: true },
  { mandi: "unjha", crop: "isabgol", min: 10375, modal: 13500, max: 15750, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "merta", crop: "isabgol", min: 11000, modal: 12600, max: 14000, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "unjha", crop: "gwar", min: 5400, modal: 5650, max: 5800, vs: 30, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "nagaur", crop: "gwar", min: 6000, modal: 6200, max: 6325, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "merta", crop: "gwar", min: 5600, modal: 6000, max: 6380, vs: 0, arrivals: "high", date: "2026-09-29", fresh: true },
  { mandi: "bikaner", crop: "gwar", min: 6288, modal: 6288, max: 6288, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "jodhpur", crop: "gwar", min: 5800, modal: 6000, max: 6400, vs: 0, arrivals: "high", date: "2026-09-29", fresh: true },
  { mandi: "jaipur", crop: "gwar", min: 5270, modal: 5615, max: 5960, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "sri-ganganagar", crop: "gwar", min: 6177, modal: 6395, max: 6626, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "bikaner", crop: "moth", min: 4200, modal: 4450, max: 4600, vs: 40, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "nagaur", crop: "moth", min: 4100, modal: 4380, max: 4520, vs: 25, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "merta", crop: "moth", min: 4120, modal: 4410, max: 4560, vs: 22, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jodhpur", crop: "moth", min: 4050, modal: 4320, max: 4480, vs: 20, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jaipur", crop: "moth", min: 4180, modal: 4400, max: 4550, vs: 15, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "indore", crop: "soyabean", min: 705, modal: 5400, max: 6000, vs: 0, arrivals: "high", date: "2026-09-30", fresh: true },
  { mandi: "ujjain", crop: "soyabean", min: 5325, modal: 5430, max: 5570, vs: 0, arrivals: "high", date: "2026-09-30", fresh: true },
  { mandi: "harda", crop: "soyabean", min: 1002, modal: 5300, max: 5781, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kota", crop: "soyabean", min: 5550, modal: 5550, max: 5550, vs: 0, arrivals: "low", date: "2026-09-30", fresh: true },
  { mandi: "indore", crop: "dhan", min: 2280, modal: 2350, max: 2420, vs: 10, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "dhan", min: 4000, modal: 4000, max: 4000, vs: 0, arrivals: "low", date: "2026-09-30", fresh: true },
  { mandi: "kekri", crop: "pyaz", min: 2050, modal: 2200, max: 2400, vs: -40, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "pyaz", min: 3300, modal: 3300, max: 3300, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "baran", crop: "pyaz", min: 1200, modal: 1800, max: 2500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gondal", crop: "pyaz", min: 605, modal: 3305, max: 4755, vs: 0, arrivals: "high", date: "2026-09-29", fresh: true },
  { mandi: "indore", crop: "pyaz", min: 1727, modal: 3830, max: 4106, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "deesa", crop: "aalu", min: 600, modal: 850, max: 1100, vs: 0, arrivals: "high", date: "2026-08-31", fresh: false },
  { mandi: "indore", crop: "aalu", min: 162, modal: 1000, max: 1000, vs: 0, arrivals: "med", date: "2026-09-25", fresh: true },
  { mandi: "jaipur", crop: "aalu", min: 1600, modal: 1700, max: 1800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kota", crop: "aalu", min: 650, modal: 650, max: 650, vs: 0, arrivals: "low", date: "2026-08-25", fresh: false },
  { mandi: "indore", crop: "tamatar", min: 600, modal: 1000, max: 1600, vs: 0, arrivals: "high", date: "2026-08-31", fresh: false },
  { mandi: "kota", crop: "tamatar", min: 1800, modal: 2100, max: 2330, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jaipur", crop: "tamatar", min: 4000, modal: 4200, max: 4400, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "tamatar", min: 1105, modal: 1585, max: 2065, vs: 0, arrivals: "low", date: "2026-08-31", fresh: false },
  { mandi: "mandsaur", crop: "lahsun", min: 4501, modal: 5800, max: 25000, vs: 0, arrivals: "high", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "lahsun", min: 3000, modal: 6000, max: 13500, vs: 0, arrivals: "high", date: "2026-09-30", fresh: true },
  { mandi: "kota", crop: "lahsun", min: 14000, modal: 14000, max: 14000, vs: 0, arrivals: "low", date: "2026-09-30", fresh: true },
  { mandi: "nagaur", crop: "jau", min: 1850, modal: 1980, max: 2050, vs: 15, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "merta", crop: "jau", min: 1860, modal: 1995, max: 2065, vs: 12, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "sri-ganganagar", crop: "jau", min: 2500, modal: 2501, max: 2501, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "jaipur", crop: "moong", min: 7200, modal: 7550, max: 7800, vs: 60, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jodhpur", crop: "moong", min: 7000, modal: 7820, max: 8625, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "nagaur", crop: "moong", min: 8600, modal: 8850, max: 9000, vs: 0, arrivals: "high", date: "2026-09-29", fresh: true },
  { mandi: "merta", crop: "moong", min: 5200, modal: 7700, max: 8500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "bikaner", crop: "moong", min: 8301, modal: 8301, max: 8301, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "sri-ganganagar", crop: "moong", min: 6840, modal: 7900, max: 8601, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "kota", crop: "til", min: 9000, modal: 9000, max: 9000, vs: 0, arrivals: "low", date: "2026-09-30", fresh: true },
  { mandi: "indore", crop: "arhar", min: 6855, modal: 8300, max: 8300, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ujjain", crop: "urad", min: 7011, modal: 8231, max: 8231, vs: 0, arrivals: "low", date: "2026-09-29", fresh: true },
  { mandi: "indore", crop: "masoor", min: 5875, modal: 5875, max: 5875, vs: 0, arrivals: "low", date: "2026-09-28", fresh: true },
  { mandi: "nagaur", crop: "haldi", min: 11200, modal: 11800, max: 12400, vs: 80, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "indore", crop: "adrak", min: 7000, modal: 7000, max: 7000, vs: 0, arrivals: "med", date: "2026-09-17", fresh: false },
  { mandi: "gondal", crop: "mirch", min: 14500, modal: 15800, max: 17200, vs: 300, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "bikaner", crop: "jowar", min: 4200, modal: 4450, max: 4600, vs: 40, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "nagaur", crop: "jowar", min: 4100, modal: 4380, max: 4520, vs: 25, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "merta", crop: "jowar", min: 4120, modal: 4410, max: 4560, vs: 22, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jodhpur", crop: "jowar", min: 4050, modal: 4320, max: 4480, vs: 20, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jaipur", crop: "jowar", min: 2850, modal: 2850, max: 2850, vs: 0, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "gondal", crop: "tamatar", min: 1000, modal: 2000, max: 3000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "gondal", crop: "gwar", min: 1000, modal: 3500, max: 6000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "gondal", crop: "aalu", min: 700, modal: 800, max: 900, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jodhpur", crop: "pyaz", min: 1000, modal: 2300, max: 3600, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jodhpur", crop: "tamatar", min: 1000, modal: 2000, max: 3000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jodhpur", crop: "kapas", min: 7500, modal: 9100, max: 9675, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "jodhpur", crop: "moongphali", min: 5000, modal: 6250, max: 7000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "jodhpur", crop: "gehun", min: 2400, modal: 2600, max: 2720, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "jodhpur", crop: "lahsun", min: 4000, modal: 8000, max: 12000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jodhpur", crop: "aalu", min: 500, modal: 700, max: 900, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jaipur", crop: "pyaz", min: 4600, modal: 4800, max: 5000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "jaipur", crop: "lahsun", min: 6000, modal: 11250, max: 17000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "rajkot", crop: "sarson", min: 6200, modal: 7250, max: 7615, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "lahsun", min: 5675, modal: 8625, max: 12550, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "gehun", min: 2730, modal: 2810, max: 3030, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "pyaz", min: 2250, modal: 3555, max: 4705, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "rajkot", crop: "aalu", min: 470, modal: 955, max: 1445, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "amreli", crop: "gehun", min: 2650, modal: 2725, max: 2825, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "deesa", crop: "lahsun", min: 8000, modal: 12500, max: 17000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "deesa", crop: "gwar", min: 5105, modal: 5850, max: 6010, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "deesa", crop: "pyaz", min: 3000, modal: 3500, max: 4000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "deesa", crop: "tamatar", min: 1800, modal: 2000, max: 2200, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "deesa", crop: "gehun", min: 2705, modal: 2750, max: 2790, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "deesa", crop: "sarson", min: 7505, modal: 7700, max: 7850, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "indore", crop: "lahsun", min: 5500, modal: 6500, max: 13700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ujjain", crop: "lahsun", min: 2000, modal: 6000, max: 16600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ujjain", crop: "aalu", min: 150, modal: 879, max: 879, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ujjain", crop: "pyaz", min: 625, modal: 3000, max: 3900, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ujjain", crop: "tamatar", min: 580, modal: 1348, max: 2130, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "neemuch", crop: "makka", min: 1850, modal: 2457, max: 2457, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "gehun", min: 2600, modal: 2760, max: 3100, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "harda", crop: "gehun", min: 2507, modal: 2642, max: 2672, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "harda", crop: "sarson", min: 6210, modal: 6210, max: 6210, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "harda", crop: "pyaz", min: 1800, modal: 2500, max: 3000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "harda", crop: "aalu", min: 1200, modal: 1300, max: 1400, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "harda", crop: "tamatar", min: 2000, modal: 2200, max: 2500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "mandsaur", crop: "gehun", min: 2620, modal: 2670, max: 2670, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "moongphali", min: 2020, modal: 4500, max: 7100, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "makka", min: 2151, modal: 2440, max: 2440, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "sarson", min: 6200, modal: 7925, max: 7925, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "pyaz", min: 311, modal: 1500, max: 4255, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "aalu", min: 450, modal: 730, max: 910, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "mandsaur", crop: "tamatar", min: 1000, modal: 1750, max: 2000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "baran", crop: "aalu", min: 600, modal: 650, max: 700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "baran", crop: "gehun", min: 2516, modal: 2691, max: 2836, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "baran", crop: "lahsun", min: 5810, modal: 11200, max: 20210, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "baran", crop: "tamatar", min: 1000, modal: 1300, max: 1600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "baran", crop: "makka", min: 1600, modal: 1841, max: 2275, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "jaipur", crop: "sarson", min: 7720, modal: 7910, max: 8100, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "jalore", crop: "tamatar", min: 1400, modal: 1600, max: 1800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "unjha", crop: "sarson", min: 7600, modal: 7650, max: 7710, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mehsana", crop: "aalu", min: 450, modal: 1000, max: 1400, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "mehsana", crop: "pyaz", min: 1750, modal: 3750, max: 4700, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "mehsana", crop: "tamatar", min: 50, modal: 60, max: 70, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "mehsana", crop: "sarson", min: 7375, modal: 7550, max: 7570, vs: 0, arrivals: "med", date: "2026-09-25", fresh: true },
  { mandi: "mehsana", crop: "gehun", min: 2505, modal: 2745, max: 2955, vs: 0, arrivals: "med", date: "2026-09-25", fresh: true },
  { mandi: "patan", crop: "tamatar", min: 1500, modal: 1750, max: 2000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "gondal", crop: "makka", min: 2000, modal: 2505, max: 2755, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "neemuch", crop: "pyaz", min: 200, modal: 4291, max: 4291, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "moongphali", min: 3000, modal: 6700, max: 7750, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ratlam", crop: "pyaz", min: 400, modal: 3500, max: 4204, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ratlam", crop: "gehun", min: 2650, modal: 2650, max: 2650, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ratlam", crop: "lahsun", min: 1000, modal: 6600, max: 17790, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "indore", crop: "moongphali", min: 10000, modal: 10000, max: 10000, vs: 0, arrivals: "med", date: "2026-09-22", fresh: false },
  { mandi: "ujjain", crop: "makka", min: 2210, modal: 2210, max: 2210, vs: 0, arrivals: "med", date: "2026-09-09", fresh: false },
  { mandi: "anupgarh", crop: "gehun", min: 2641, modal: 2641, max: 2641, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "anupgarh", crop: "sarson", min: 7700, modal: 7700, max: 7700, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "ramganj", crop: "aalu", min: 600, modal: 700, max: 800, vs: 0, arrivals: "med", date: "2026-09-03", fresh: false },
  { mandi: "ramganj", crop: "pyaz", min: 3000, modal: 3500, max: 4000, vs: 0, arrivals: "med", date: "2026-09-03", fresh: false },
  { mandi: "ramganj", crop: "tamatar", min: 1500, modal: 2000, max: 2500, vs: 0, arrivals: "med", date: "2026-09-03", fresh: false },
  { mandi: "ramganj", crop: "gehun", min: 2540, modal: 2600, max: 2700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ramganj", crop: "makka", min: 2090, modal: 2301, max: 2512, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "beawar", crop: "makka", min: 2450, modal: 2450, max: 2450, vs: 0, arrivals: "med", date: "2026-09-03", fresh: false },
  { mandi: "nimbahera", crop: "sarson", min: 7397, modal: 7747, max: 8096, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "nimbahera", crop: "gehun", min: 2590, modal: 2767, max: 2944, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "nimbahera", crop: "moongphali", min: 5600, modal: 6300, max: 7000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "nimbahera", crop: "lahsun", min: 4500, modal: 11000, max: 14500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "hisar", crop: "lahsun", min: 18000, modal: 19000, max: 20000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "hisar", crop: "aalu", min: 900, modal: 950, max: 1000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "hisar", crop: "tamatar", min: 2000, modal: 2250, max: 2500, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "hisar", crop: "pyaz", min: 3500, modal: 4000, max: 4200, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "fatehabad", crop: "aalu", min: 800, modal: 800, max: 800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "fatehabad", crop: "tamatar", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "fatehabad", crop: "pyaz", min: 4500, modal: 4500, max: 4500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "jind", crop: "aalu", min: 700, modal: 1000, max: 1200, vs: 0, arrivals: "med", date: "2026-09-18", fresh: false },
  { mandi: "jind", crop: "pyaz", min: 2000, modal: 3500, max: 4000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "jind", crop: "tamatar", min: 1300, modal: 2000, max: 3000, vs: 0, arrivals: "med", date: "2026-09-17", fresh: false },
  { mandi: "sirsa", crop: "pyaz", min: 3000, modal: 4000, max: 4400, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sirsa", crop: "aalu", min: 300, modal: 600, max: 800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sirsa", crop: "tamatar", min: 2000, modal: 2300, max: 2800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "tarori", crop: "aalu", min: 1000, modal: 1200, max: 1500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "tarori", crop: "pyaz", min: 3000, modal: 3500, max: 4000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "panipat", crop: "pyaz", min: 1500, modal: 3000, max: 4500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "panipat", crop: "tamatar", min: 700, modal: 1400, max: 2100, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "panipat", crop: "aalu", min: 500, modal: 900, max: 1300, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sonepat", crop: "tamatar", min: 1900, modal: 2100, max: 3200, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sonepat", crop: "pyaz", min: 3900, modal: 4000, max: 4500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "sonepat", crop: "aalu", min: 1000, modal: 1100, max: 1200, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ganaur", crop: "tamatar", min: 3000, modal: 3500, max: 4000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ganaur", crop: "lahsun", min: 12000, modal: 14000, max: 15000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ganaur", crop: "aalu", min: 1000, modal: 1200, max: 1500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ganaur", crop: "pyaz", min: 4000, modal: 4200, max: 4500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rohtak", crop: "aalu", min: 500, modal: 700, max: 1000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rohtak", crop: "pyaz", min: 3000, modal: 4000, max: 4500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "shahabad", crop: "lahsun", min: 8300, modal: 10000, max: 16000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "shahabad", crop: "pyaz", min: 2625, modal: 4400, max: 4550, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "shahabad", crop: "tamatar", min: 1800, modal: 2700, max: 3200, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "shahabad", crop: "gehun", min: 2450, modal: 2450, max: 2450, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "shahabad", crop: "makka", min: 2200, modal: 2200, max: 2200, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "shahabad", crop: "aalu", min: 400, modal: 600, max: 700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "anupgarh", crop: "moong", min: 8411, modal: 8411, max: 8411, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "anupgarh", crop: "gwar", min: 6200, modal: 6200, max: 6200, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "sri-ganganagar", crop: "chana", min: 6600, modal: 6600, max: 6600, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "baran", crop: "moong", min: 6251, modal: 7075, max: 7799, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "baran", crop: "chana", min: 5201, modal: 5675, max: 6251, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "baran", crop: "urad", min: 6600, modal: 7880, max: 8451, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "baran", crop: "dhan", min: 4051, modal: 4325, max: 4401, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "baran", crop: "dhaniya", min: 12301, modal: 13320, max: 13995, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "baran", crop: "alsi", min: 9301, modal: 9301, max: 9301, vs: 0, arrivals: "med", date: "2026-09-24", fresh: true },
  { mandi: "jalore", crop: "adrak", min: 4000, modal: 4300, max: 4500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "jalore", crop: "hara-dhaniya", min: 2000, modal: 2300, max: 2500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "jaipur", crop: "jau", min: 2420, modal: 2510, max: 2600, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "jaipur", crop: "hara-dhaniya", min: 2000, modal: 6700, max: 11000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jaipur", crop: "kela", min: 2000, modal: 3250, max: 4000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jaipur", crop: "adrak", min: 5500, modal: 8600, max: 14500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jaipur", crop: "amrood", min: 3000, modal: 6000, max: 9000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jaipur", crop: "seb", min: 7000, modal: 11000, max: 20000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jaipur", crop: "anar", min: 3500, modal: 8500, max: 12000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jodhpur", crop: "chana", min: 5500, modal: 5875, max: 7350, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "jodhpur", crop: "adrak", min: 4000, modal: 5000, max: 7000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jodhpur", crop: "til", min: 9000, modal: 11625, max: 16950, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "jodhpur", crop: "dhaniya", min: 13000, modal: 14000, max: 15000, vs: 0, arrivals: "med", date: "2026-09-09", fresh: false },
  { mandi: "jodhpur", crop: "seb", min: 5000, modal: 8000, max: 11000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jodhpur", crop: "amrood", min: 1000, modal: 1900, max: 2800, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jodhpur", crop: "anar", min: 5000, modal: 7000, max: 9000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jodhpur", crop: "arandi", min: 7000, modal: 7075, max: 7150, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "nimbahera", crop: "jau", min: 2500, modal: 2750, max: 3000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "unjha", crop: "til", min: 12430, modal: 12650, max: 12765, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "unjha", crop: "saunf", min: 7900, modal: 11000, max: 23000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mehsana", crop: "kela", min: 1750, modal: 2200, max: 2500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "mehsana", crop: "bajra", min: 2075, modal: 2125, max: 2155, vs: 0, arrivals: "med", date: "2026-09-25", fresh: true },
  { mandi: "mehsana", crop: "arandi", min: 7585, modal: 7650, max: 7680, vs: 0, arrivals: "med", date: "2026-09-25", fresh: true },
  { mandi: "amreli", crop: "bajra", min: 1525, modal: 2050, max: 2175, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "amreli", crop: "arhar", min: 6350, modal: 7250, max: 8450, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "amreli", crop: "jeera", min: 14000, modal: 19000, max: 19300, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "amreli", crop: "jowar", min: 2475, modal: 6575, max: 7000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "amreli", crop: "arandi", min: 6275, modal: 7250, max: 7325, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "amreli", crop: "til", min: 12125, modal: 12125, max: 12125, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "amreli", crop: "chana", min: 4950, modal: 6750, max: 7100, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "amreli", crop: "moong", min: 5900, modal: 7000, max: 7000, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "deesa", crop: "hara-dhaniya", min: 2000, modal: 2750, max: 3500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "deesa", crop: "kela", min: 3000, modal: 3250, max: 3500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "deesa", crop: "anar", min: 5000, modal: 7500, max: 10000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "deesa", crop: "adrak", min: 6000, modal: 7000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "deesa", crop: "arandi", min: 7565, modal: 7585, max: 7595, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "deesa", crop: "seb", min: 8000, modal: 12000, max: 16000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "gondal", crop: "seb", min: 5000, modal: 12750, max: 20500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "gondal", crop: "kela", min: 1700, modal: 2250, max: 2800, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "gondal", crop: "anar", min: 1500, modal: 3250, max: 5000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "gondal", crop: "amrood", min: 2500, modal: 5000, max: 7500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "gondal", crop: "jowar", min: 3500, modal: 6255, max: 7905, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "gondal", crop: "bajra", min: 1455, modal: 1955, max: 2005, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "gondal", crop: "arandi", min: 5255, modal: 6505, max: 7255, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "indore", crop: "moong", min: 4195, modal: 7355, max: 7355, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "indore", crop: "hara-matar", min: 2160, modal: 3740, max: 3740, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "indore", crop: "kela", min: 600, modal: 800, max: 1000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "indore", crop: "hara-dhaniya", min: 300, modal: 500, max: 700, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "indore", crop: "seb", min: 4000, modal: 8000, max: 12000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "indore", crop: "anar", min: 3000, modal: 5000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "ujjain", crop: "adrak", min: 530, modal: 1356, max: 2330, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "ujjain", crop: "hara-dhaniya", min: 540, modal: 1293, max: 2180, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "ujjain", crop: "seb", min: 2333, modal: 6034, max: 9000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "harda", crop: "chana", min: 3601, modal: 7500, max: 7750, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "harda", crop: "arhar", min: 7701, modal: 7701, max: 7701, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "harda", crop: "hara-matar", min: 2030, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "harda", crop: "urad", min: 1000, modal: 7701, max: 8473, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "harda", crop: "moong", min: 1700, modal: 7600, max: 7770, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "harda", crop: "anar", min: 8000, modal: 9000, max: 10000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "harda", crop: "seb", min: 8000, modal: 9000, max: 10000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "harda", crop: "hara-dhaniya", min: 600, modal: 700, max: 1000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "neemuch", crop: "hara-dhaniya", min: 12001, modal: 14000, max: 14370, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "neemuch", crop: "chana", min: 2500, modal: 6629, max: 6681, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "isabgol", min: 6000, modal: 11000, max: 12251, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "masoor", min: 2626, modal: 7800, max: 7800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "moong", min: 6300, modal: 7341, max: 7341, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "jau", min: 3142, modal: 3142, max: 3142, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "til", min: 6000, modal: 6000, max: 11950, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "alsi", min: 8500, modal: 9392, max: 9392, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "urad", min: 2000, modal: 8000, max: 9000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ratlam", crop: "chana", min: 6366, modal: 6501, max: 6501, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ratlam", crop: "hara-matar", min: 1991, modal: 2501, max: 4131, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bhiwani", crop: "amrood", min: 2840, modal: 3011, max: 3250, vs: 0, arrivals: "med", date: "2026-09-07", fresh: false },
  { mandi: "bhiwani", crop: "kela", min: 4210, modal: 4545, max: 5201, vs: 0, arrivals: "med", date: "2026-09-07", fresh: false },
  { mandi: "bhiwani", crop: "seb", min: 5580, modal: 7540, max: 9254, vs: 0, arrivals: "med", date: "2026-09-07", fresh: false },
  { mandi: "bhiwani", crop: "anar", min: 8587, modal: 9580, max: 10255, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "sirsa", crop: "kela", min: 2300, modal: 2300, max: 2300, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sirsa", crop: "seb", min: 3000, modal: 5000, max: 8000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sirsa", crop: "amrood", min: 3500, modal: 3500, max: 3500, vs: 0, arrivals: "med", date: "2026-09-25", fresh: true },
  { mandi: "hisar", crop: "amrood", min: 2000, modal: 2500, max: 3000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "hisar", crop: "adrak", min: 14000, modal: 14500, max: 15000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "hisar", crop: "hara-matar", min: 9000, modal: 9500, max: 10000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "hisar", crop: "anar", min: 12000, modal: 14000, max: 15000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "hisar", crop: "seb", min: 5000, modal: 12500, max: 15000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "ramganj", crop: "amrood", min: 2000, modal: 2500, max: 2700, vs: 0, arrivals: "med", date: "2026-09-03", fresh: false },
  { mandi: "ramganj", crop: "anar", min: 3000, modal: 7500, max: 11000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "ramganj", crop: "seb", min: 5000, modal: 8000, max: 9000, vs: 0, arrivals: "med", date: "2026-09-03", fresh: false },
  { mandi: "ramganj", crop: "adrak", min: 4500, modal: 7400, max: 12000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "ramganj", crop: "hara-dhaniya", min: 8000, modal: 9150, max: 12000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "ramganj", crop: "hara-matar", min: 3400, modal: 6700, max: 10000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "ramganj", crop: "dhan", min: 1800, modal: 2062, max: 2325, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "ramganj", crop: "kela", min: 2000, modal: 2500, max: 3000, vs: 0, arrivals: "med", date: "2026-09-03", fresh: false },
  { mandi: "rohtak", crop: "seb", min: 5000, modal: 8000, max: 10000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rohtak", crop: "kela", min: 1800, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rohtak", crop: "amrood", min: 2000, modal: 3000, max: 4000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "shahabad", crop: "adrak", min: 3500, modal: 6500, max: 7000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "shahabad", crop: "hara-matar", min: 14000, modal: 14000, max: 14000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "shahabad", crop: "anar", min: 9000, modal: 10000, max: 10870, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "shahabad", crop: "seb", min: 3000, modal: 4500, max: 7000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "shahabad", crop: "dhan", min: 2461, modal: 2461, max: 2461, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "patan", crop: "adrak", min: 1500, modal: 2000, max: 2500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "patan", crop: "hara-dhaniya", min: 7, modal: 8, max: 9, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "tarori", crop: "kela", min: 2000, modal: 2200, max: 2500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "panipat", crop: "kela", min: 2000, modal: 2500, max: 3000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "panipat", crop: "amrood", min: 2000, modal: 5000, max: 8000, vs: 0, arrivals: "med", date: "2026-09-11", fresh: false },
  { mandi: "panipat", crop: "seb", min: 2000, modal: 5000, max: 8000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "panipat", crop: "anar", min: 4000, modal: 5500, max: 7000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sonepat", crop: "seb", min: 5000, modal: 6500, max: 10500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sonepat", crop: "amrood", min: 5000, modal: 8000, max: 9500, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "sonepat", crop: "kela", min: 3500, modal: 3600, max: 4000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sonepat", crop: "anar", min: 6500, modal: 9000, max: 10000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "ganaur", crop: "hara-dhaniya", min: 5000, modal: 5500, max: 6000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ganaur", crop: "adrak", min: 8000, modal: 9000, max: 10000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ganaur", crop: "seb", min: 12000, modal: 14000, max: 15000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ganaur", crop: "amrood", min: 2500, modal: 2800, max: 3000, vs: 0, arrivals: "med", date: "2026-09-11", fresh: false },
  { mandi: "mandsaur", crop: "til", min: 8000, modal: 12280, max: 12280, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "hara-dhaniya", min: 7901, modal: 13161, max: 13161, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "masoor", min: 6440, modal: 7352, max: 7352, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "urad", min: 3501, modal: 8050, max: 8500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "alsi", min: 8950, modal: 9301, max: 9401, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "chana", min: 5500, modal: 6991, max: 6991, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "hara-matar", min: 2891, modal: 3390, max: 3390, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "moong", min: 6151, modal: 7160, max: 7160, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "mandsaur", crop: "isabgol", min: 9100, modal: 12700, max: 12700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "fatehabad", crop: "amrood", min: 3000, modal: 3000, max: 3000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "fatehabad", crop: "seb", min: 6000, modal: 6000, max: 6000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "fatehabad", crop: "kela", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "fatehabad", crop: "anar", min: 16000, modal: 16000, max: 16000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "jowar", min: 7125, modal: 7450, max: 7560, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "til", min: 10300, modal: 12000, max: 13050, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "chana", min: 6150, modal: 6700, max: 6925, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "dhaniya", min: 11000, modal: 13500, max: 14000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "bajra", min: 1900, modal: 2025, max: 2085, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "arandi", min: 5500, modal: 6950, max: 7300, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "urad", min: 6500, modal: 9000, max: 9670, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "arhar", min: 6650, modal: 7350, max: 9000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "moong", min: 6920, modal: 7605, max: 8675, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "jeera", min: 18000, modal: 19800, max: 20830, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rajkot", crop: "hara-dhaniya", min: 670, modal: 815, max: 965, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "rajkot", crop: "adrak", min: 6060, modal: 10585, max: 15115, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "ramganj", crop: "matar", min: 8000, modal: 8300, max: 8500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "mandsaur", crop: "jau", min: 2920, modal: 2920, max: 2920, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ujjain", crop: "sarson", min: 7171, modal: 7171, max: 7171, vs: 0, arrivals: "med", date: "2026-09-16", fresh: false },
  { mandi: "ujjain", crop: "moong", min: 5001, modal: 7800, max: 7800, vs: 0, arrivals: "med", date: "2026-09-22", fresh: false },
  { mandi: "ujjain", crop: "til", min: 7400, modal: 9541, max: 9541, vs: 0, arrivals: "med", date: "2026-09-23", fresh: false },
  { mandi: "baran", crop: "methi", min: 6251, modal: 6251, max: 6251, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "nimbahera", crop: "methi", min: 6099, modal: 6650, max: 7201, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "amreli", crop: "methi", min: 6700, modal: 6750, max: 6775, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "rajkot", crop: "methi", min: 4500, modal: 7100, max: 8010, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "indore", crop: "hari-methi", min: 800, modal: 1800, max: 3000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "neemuch", crop: "methi", min: 5100, modal: 6200, max: 8201, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "methi", min: 6276, modal: 6276, max: 6276, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "unjha", crop: "methi", min: 6500, modal: 6500, max: 6500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "jodhpur", crop: "isabgol", min: 9000, modal: 12000, max: 15000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "jodhpur", crop: "sarson", min: 5500, modal: 6900, max: 8300, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "kota", crop: "seb", min: 11000, modal: 11000, max: 11000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "kota", crop: "anar", min: 10000, modal: 10000, max: 10000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "kota", crop: "kela", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "goluwala", crop: "gwar", min: 6200, modal: 6466, max: 6560, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "goluwala", crop: "tamatar", min: 2400, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "goluwala", crop: "pyaz", min: 4000, modal: 4500, max: 4500, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "goluwala", crop: "sarson", min: 7508, modal: 7923, max: 8102, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "goluwala", crop: "aalu", min: 500, modal: 700, max: 700, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "goluwala", crop: "gehun", min: 2500, modal: 2626, max: 2626, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "goluwala", crop: "chana", min: 6014, modal: 6014, max: 6014, vs: 0, arrivals: "med", date: "2026-09-24", fresh: true },
  { mandi: "ramganj", crop: "dhaniya", min: 11000, modal: 13451, max: 14800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ramganj", crop: "masoor", min: 6200, modal: 6200, max: 6200, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "ramganj", crop: "chana", min: 5881, modal: 6270, max: 6361, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ramganj", crop: "sarson", min: 6701, modal: 7520, max: 8120, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "jaipur", crop: "urad", min: 5700, modal: 5700, max: 5700, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "amreli", crop: "urad", min: 5725, modal: 6500, max: 8375, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "indore", crop: "jowar", min: 2401, modal: 2401, max: 2401, vs: 0, arrivals: "med", date: "2026-09-10", fresh: false },
  { mandi: "deesa", crop: "saunf", min: 8005, modal: 8005, max: 8005, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "mandsaur", crop: "kalonji", min: 20899, modal: 21341, max: 21341, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "asaliya", min: 5500, modal: 5921, max: 5921, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "sarson", min: 6500, modal: 8000, max: 8270, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "kalonji", min: 20800, modal: 21600, max: 21600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sirsa", crop: "gehun", min: 2535, modal: 2535, max: 2535, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "adampur", crop: "aalu", min: 500, modal: 600, max: 600, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "adampur", crop: "pyaz", min: 2000, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "adampur", crop: "tamatar", min: 2000, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "adampur", crop: "adrak", min: 7000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "adampur", crop: "lahsun", min: 10000, modal: 13000, max: 13000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "adampur", crop: "hara-matar", min: 7000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "shahabad", crop: "kela", min: 2500, modal: 3300, max: 3500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "shahabad", crop: "amrood", min: 7000, modal: 8000, max: 9000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "hisar", crop: "kela", min: 2000, modal: 2250, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "jalore", crop: "aalu", min: 1200, modal: 1300, max: 1500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "siwani", crop: "kapas", min: 8300, modal: 8800, max: 9160, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ganaur", crop: "kela", min: 3000, modal: 3500, max: 4000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rohtak", crop: "anar", min: 8000, modal: 10000, max: 12000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "rohtak", crop: "tamatar", min: 1500, modal: 2000, max: 2500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kota", crop: "methi", min: 5200, modal: 5200, max: 5200, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kota", crop: "dhaniya", min: 13550, modal: 13550, max: 13550, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kota", crop: "alsi", min: 9150, modal: 9150, max: 9150, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kota", crop: "urad", min: 7000, modal: 7000, max: 7000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kota", crop: "moong", min: 7300, modal: 7300, max: 7300, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kota", crop: "bajra", min: 2350, modal: 2350, max: 2350, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "kota", crop: "jau", min: 2350, modal: 2350, max: 2350, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "beawar", crop: "bajra", min: 2350, modal: 2350, max: 2350, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "beawar", crop: "jau", min: 2900, modal: 2900, max: 2900, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "amreli", crop: "sarson", min: 7975, modal: 8450, max: 8450, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "amreli", crop: "makka", min: 2950, modal: 2950, max: 2950, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "indore", crop: "urad", min: 7700, modal: 9890, max: 9890, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "fatehabad", crop: "moong", min: 6900, modal: 6900, max: 6900, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "ganaur", crop: "hara-matar", min: 12000, modal: 14000, max: 15000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "tarori", crop: "tamatar", min: 3000, modal: 3500, max: 4000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "ramganj", crop: "hari-mirch", min: 2500, modal: 3500, max: 4000, vs: 0, arrivals: "med", date: "2026-09-03", fresh: false },
  { mandi: "jalore", crop: "hari-mirch", min: 1500, modal: 1600, max: 1800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mehsana", crop: "hari-mirch", min: 1250, modal: 3000, max: 5000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "gondal", crop: "hari-mirch", min: 500, modal: 2750, max: 5000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "rajkot", crop: "hari-mirch", min: 2015, modal: 2500, max: 2985, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "deesa", crop: "hari-mirch", min: 2000, modal: 3500, max: 5000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "indore", crop: "hari-mirch", min: 1000, modal: 1600, max: 2500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "mandsaur", crop: "hari-mirch", min: 2750, modal: 3350, max: 4050, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "adampur", crop: "hari-mirch", min: 1000, modal: 1500, max: 1500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "shahabad", crop: "hari-mirch", min: 3500, modal: 5000, max: 5200, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ganaur", crop: "hari-mirch", min: 4000, modal: 4500, max: 5000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ujjain", crop: "hari-mirch", min: 550, modal: 1364, max: 2280, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "sri-ganganagar", crop: "hari-mirch", min: 3050, modal: 3050, max: 3050, vs: 0, arrivals: "med", date: "2026-08-24", fresh: false },
  { mandi: "goluwala", crop: "jau", min: 2300, modal: 2400, max: 2400, vs: 0, arrivals: "med", date: "2026-09-19", fresh: false },
  { mandi: "ramganj", crop: "arhar", min: 5500, modal: 5500, max: 5500, vs: 0, arrivals: "med", date: "2026-08-24", fresh: false },
  { mandi: "beawar", crop: "sarson", min: 7300, modal: 7300, max: 7300, vs: 0, arrivals: "med", date: "2026-09-15", fresh: false },
  { mandi: "bikaner", crop: "tamatar", min: 2200, modal: 2200, max: 2200, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "bikaner", crop: "anar", min: 8500, modal: 8500, max: 8500, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "bikaner", crop: "adrak", min: 4800, modal: 4800, max: 4800, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "bikaner", crop: "seb", min: 5000, modal: 5000, max: 5000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "bikaner", crop: "amrood", min: 2800, modal: 2800, max: 2800, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "bikaner", crop: "pyaz", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "bikaner", crop: "hari-mirch", min: 2100, modal: 2100, max: 2100, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "bikaner", crop: "hara-dhaniya", min: 3400, modal: 3400, max: 3400, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "bikaner", crop: "aalu", min: 1000, modal: 1000, max: 1000, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "jodhpur", crop: "hari-mirch", min: 2000, modal: 2500, max: 3200, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jodhpur", crop: "kela", min: 1000, modal: 1500, max: 2000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jaipur", crop: "hari-mirch", min: 2000, modal: 3375, max: 4000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "patan", crop: "hari-mirch", min: 2000, modal: 2750, max: 3500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "bikaner", crop: "kela", min: 2800, modal: 2800, max: 2800, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "jalore", crop: "pyaz", min: 3000, modal: 3300, max: 3500, vs: 0, arrivals: "med", date: "2026-09-25", fresh: true },
  { mandi: "jalore", crop: "lahsun", min: 13000, modal: 13500, max: 14000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "jaipur", crop: "hara-matar", min: 7000, modal: 7200, max: 7500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "deesa", crop: "jeera", min: 20005, modal: 20005, max: 20005, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "deesa", crop: "til", min: 10725, modal: 10725, max: 10725, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "harda", crop: "hari-mirch", min: 2000, modal: 2200, max: 2500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "fatehabad", crop: "makka", min: 1980, modal: 2096, max: 2200, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "tarori", crop: "seb", min: 3000, modal: 4000, max: 6000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "mandsaur", crop: "haldi", min: 12381, modal: 12381, max: 12381, vs: 0, arrivals: "med", date: "2026-09-12", fresh: false },
  { mandi: "unjha", crop: "sua", min: 7280, modal: 9050, max: 9700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "jodhpur", crop: "sua-patti", min: 5000, modal: 5600, max: 7000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "kota", crop: "hari-mirch", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "ratlam", crop: "urad", min: 6951, modal: 6951, max: 6951, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "fatehabad", crop: "gehun", min: 2500, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "goluwala", crop: "moong", min: 7700, modal: 8300, max: 8531, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "ratlam", crop: "moong", min: 7000, modal: 7900, max: 7900, vs: 0, arrivals: "med", date: "2026-09-17", fresh: false },
  { mandi: "kota", crop: "arandi", min: 5752, modal: 5752, max: 5752, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "ramganj", crop: "rice", min: 1950, modal: 1950, max: 1950, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "ramganj", crop: "alsi", min: 8601, modal: 8851, max: 9141, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "beawar", crop: "moongphali", min: 6250, modal: 6250, max: 6250, vs: 0, arrivals: "med", date: "2026-09-02", fresh: false },
  { mandi: "merta", crop: "saunf", min: 7500, modal: 9500, max: 11500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "merta", crop: "sarson", min: 7800, modal: 7900, max: 8000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "merta", crop: "chana", min: 4900, modal: 5900, max: 6400, vs: 0, arrivals: "med", date: "2026-09-26", fresh: true },
  { mandi: "patan", crop: "jowar", min: 6500, modal: 6500, max: 6500, vs: 0, arrivals: "med", date: "2026-09-21", fresh: false },
  { mandi: "patan", crop: "arandi", min: 7450, modal: 7575, max: 7675, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "patan", crop: "sarson", min: 7400, modal: 7700, max: 7930, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "patan", crop: "saunf", min: 8500, modal: 11000, max: 12850, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "patan", crop: "bajra", min: 2200, modal: 2380, max: 2380, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "patan", crop: "gehun", min: 2700, modal: 2800, max: 2900, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "gondal", crop: "moong", min: 4000, modal: 8005, max: 8505, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "gondal", crop: "urad", min: 5000, modal: 9405, max: 9505, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "gondal", crop: "methi", min: 2380, modal: 6755, max: 7005, vs: 0, arrivals: "med", date: "2026-09-26", fresh: true },
  { mandi: "gondal", crop: "arhar", min: 4880, modal: 8005, max: 9005, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "gondal", crop: "jeera", min: 12505, modal: 20055, max: 21005, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "gondal", crop: "dhaniya", min: 12005, modal: 14205, max: 14855, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "sirsa", crop: "hari-mirch", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "hisar", crop: "sarson", min: 8182, modal: 8200, max: 8211, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "hisar", crop: "kapas", min: 7125, modal: 7500, max: 7926, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "shahabad", crop: "rice", min: 1950, modal: 1950, max: 1950, vs: 0, arrivals: "med", date: "2026-08-27", fresh: false },
  { mandi: "ganaur", crop: "anar", min: 12000, modal: 14000, max: 15000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "harda", crop: "kela", min: 600, modal: 600, max: 600, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "sri-ganganagar", crop: "pyaz", min: 3900, modal: 3900, max: 3900, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "kota", crop: "masoor", min: 5301, modal: 5301, max: 5301, vs: 0, arrivals: "med", date: "2026-09-23", fresh: false },
  { mandi: "kota", crop: "jowar", min: 2450, modal: 2450, max: 2450, vs: 0, arrivals: "med", date: "2026-09-08", fresh: false },
  { mandi: "mehsana", crop: "amrood", min: 2500, modal: 4500, max: 6500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "fatehabad", crop: "bajra", min: 1800, modal: 1800, max: 1800, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "jodhpur", crop: "saunf", min: 5425, modal: 8450, max: 11400, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "jodhpur", crop: "methi", min: 5500, modal: 5750, max: 6000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "ujjain", crop: "hara-matar", min: 4035, modal: 4111, max: 4111, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "anar", min: 1300, modal: 1300, max: 1300, vs: 0, arrivals: "med", date: "2026-09-22", fresh: false },
  { mandi: "fatehabad", crop: "adrak", min: 4000, modal: 4000, max: 4000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "fatehabad", crop: "rice", min: 2600, modal: 2607, max: 2650, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "fatehabad", crop: "lahsun", min: 16000, modal: 16000, max: 16000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "fatehabad", crop: "hari-mirch", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "fatehabad", crop: "sarson", min: 6500, modal: 6500, max: 6500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "sirsa", crop: "adrak", min: 3500, modal: 3500, max: 3500, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "rajkot", crop: "soyabean", min: 5500, modal: 5795, max: 6090, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "amreli", crop: "soyabean", min: 5000, modal: 5600, max: 5625, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "adampur", crop: "gwar", min: 4900, modal: 5675, max: 6450, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "indore", crop: "mirch", min: 11390, modal: 13190, max: 13190, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mandsaur", crop: "soyabean", min: 1200, modal: 5700, max: 5940, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "soyabean", min: 1500, modal: 5900, max: 6031, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ratlam", crop: "soyabean", min: 3400, modal: 5500, max: 5901, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ujjain", crop: "dhan", min: 3500, modal: 3500, max: 3500, vs: 0, arrivals: "med", date: "2026-09-27", fresh: true },
  { mandi: "baran", crop: "soyabean", min: 4900, modal: 5600, max: 5699, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kekri", crop: "chana", min: 5711, modal: 6100, max: 6401, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kekri", crop: "urad", min: 6100, modal: 7600, max: 9030, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kekri", crop: "moong", min: 6700, modal: 7681, max: 9000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kekri", crop: "jowar", min: 2000, modal: 3000, max: 3701, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kekri", crop: "sarson", min: 7000, modal: 7800, max: 8291, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kekri", crop: "gehun", min: 2300, modal: 2500, max: 2681, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "nagaur", crop: "isabgol", min: 10000, modal: 12500, max: 14000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "nagaur", crop: "sarson", min: 7500, modal: 7800, max: 8000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "nagaur", crop: "saunf", min: 8000, modal: 11000, max: 13000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "nimbahera", crop: "soyabean", min: 4500, modal: 5125, max: 5750, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "nokha", crop: "jeera", min: 18700, modal: 19700, max: 20700, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "nokha", crop: "moong", min: 8300, modal: 8550, max: 8800, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "nokha", crop: "gwar", min: 6301, modal: 6315, max: 6329, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "nokha", crop: "isabgol", min: 11500, modal: 12926, max: 14351, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "nokha", crop: "methi", min: 7000, modal: 7000, max: 7000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "nokha", crop: "gehun", min: 2841, modal: 2841, max: 2841, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "ramganj", crop: "moong", min: 4100, modal: 7652, max: 7740, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "ramganj", crop: "methi", min: 5981, modal: 5981, max: 5981, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "ramganj", crop: "soyabean", min: 4750, modal: 5590, max: 5891, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sri-ganganagar", crop: "kapas", min: 8100, modal: 8301, max: 8367, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "patan", crop: "jeera", min: 19000, modal: 19900, max: 20700, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "adampur", crop: "kapas", min: 8650, modal: 8695, max: 8750, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "adampur", crop: "sarson", min: 7550, modal: 7910, max: 8570, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "sirsa", crop: "kapas", min: 8400, modal: 8500, max: 8633, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "sirsa", crop: "sarson", min: 7500, modal: 7600, max: 7776, vs: 0, arrivals: "med", date: "2026-09-12", fresh: false },
  { mandi: "indore", crop: "methi", min: 5700, modal: 5700, max: 5700, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "ratlam", crop: "makka", min: 2023, modal: 2390, max: 2390, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "bikaner", crop: "chana", min: 6561, modal: 6561, max: 6561, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "bikaner", crop: "arandi", min: 6548, modal: 6548, max: 6548, vs: 0, arrivals: "med", date: "2026-09-01", fresh: false },
  { mandi: "bikaner", crop: "isabgol", min: 12975, modal: 12975, max: 12975, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "bikaner", crop: "methi", min: 6320, modal: 6320, max: 6320, vs: 0, arrivals: "med", date: "2026-09-11", fresh: false },
  { mandi: "bikaner", crop: "gehun", min: 2846, modal: 2846, max: 2846, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "kekri", crop: "jau", min: 2121, modal: 2424, max: 2650, vs: 0, arrivals: "med", date: "2026-09-10", fresh: false },
  { mandi: "kekri", crop: "saunf", min: 6000, modal: 7500, max: 9800, vs: 0, arrivals: "med", date: "2026-09-01", fresh: false },
  { mandi: "ramganj", crop: "lahsun", min: 8252, modal: 17878, max: 19752, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "asaliya", min: 5200, modal: 5750, max: 6051, vs: 0, arrivals: "med", date: "2026-09-24", fresh: true },
  { mandi: "baran", crop: "til", min: 9201, modal: 9201, max: 9201, vs: 0, arrivals: "med", date: "2026-09-02", fresh: false },
  { mandi: "bikaner", crop: "jeera", min: 19475, modal: 19475, max: 19475, vs: 0, arrivals: "med", date: "2026-09-14", fresh: false },
  { mandi: "ratlam", crop: "arhar", min: 4876, modal: 4876, max: 4876, vs: 0, arrivals: "med", date: "2026-09-03", fresh: false },
  { mandi: "ramganj", crop: "isabgol", min: 9401, modal: 9401, max: 9401, vs: 0, arrivals: "med", date: "2026-09-03", fresh: false },
  { mandi: "ramganj", crop: "til", min: 9700, modal: 9700, max: 9700, vs: 0, arrivals: "med", date: "2026-09-16", fresh: false },
  { mandi: "guntur", crop: "mirch", min: 16000, modal: 26500, max: 28000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "byadgi", crop: "mirch", min: 5609, modal: 58809, max: 71500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "byadgi", crop: "adrak", min: 39000, modal: 39000, max: 39000, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "byadgi", crop: "makka", min: 2400, modal: 2500, max: 2520, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "mathania", crop: "bajra", min: 2000, modal: 2100, max: 2200, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "mathania", crop: "jeera", min: 16000, modal: 17000, max: 18000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "mathania", crop: "isabgol", min: 10000, modal: 10500, max: 11000, vs: 0, arrivals: "med", date: "2026-09-22", fresh: false },
  { mandi: "mathania", crop: "sarson", min: 7200, modal: 7300, max: 7400, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "mathania", crop: "gehun", min: 2400, modal: 2500, max: 2600, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "mathania", crop: "saunf", min: 6000, modal: 6500, max: 7000, vs: 0, arrivals: "med", date: "2026-09-18", fresh: false },
  { mandi: "bhiwani", crop: "pyaz", min: 2504, modal: 3102, max: 3870, vs: 0, arrivals: "med", date: "2026-09-07", fresh: false },
  { mandi: "bhiwani", crop: "aalu", min: 620, modal: 710, max: 822, vs: 0, arrivals: "med", date: "2026-09-07", fresh: false },
  { mandi: "bhiwani", crop: "tamatar", min: 2014, modal: 2250, max: 2540, vs: 0, arrivals: "med", date: "2026-09-07", fresh: false },
  { mandi: "beawar", crop: "gehun", min: 3150, modal: 3150, max: 3150, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "ramganj", crop: "urad", min: 4301, modal: 7351, max: 8400, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "patan", crop: "sua", min: 8000, modal: 8800, max: 9375, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "shahabad", crop: "gwarphali", min: 4000, modal: 4200, max: 4500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "jalore", crop: "gwarphali", min: 3000, modal: 3300, max: 3500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "jalore", crop: "kela", min: 3000, modal: 3300, max: 3500, vs: 0, arrivals: "med", date: "2026-09-24", fresh: true },
  { mandi: "neemuch", crop: "adrak", min: 13600, modal: 13600, max: 13600, vs: 0, arrivals: "med", date: "2026-09-24", fresh: true },
  { mandi: "goluwala", crop: "arandi", min: 6300, modal: 6300, max: 6300, vs: 0, arrivals: "med", date: "2026-09-16", fresh: false },
  { mandi: "lunkaransar", crop: "gehun", min: 2690, modal: 2795, max: 2900, vs: 0, arrivals: "med", date: "2026-09-25", fresh: true },
  { mandi: "gondal", crop: "sarson", min: 7105, modal: 7105, max: 7105, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "gondal", crop: "til", min: 9005, modal: 11605, max: 12355, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "gondal", crop: "soyabean", min: 5555, modal: 5555, max: 5805, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "adampur", crop: "moong", min: 5470, modal: 6800, max: 8130, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "indore", crop: "til", min: 5625, modal: 5625, max: 5625, vs: 0, arrivals: "med", date: "2026-09-10", fresh: false },
  { mandi: "mandsaur", crop: "mirch", min: 16000, modal: 16000, max: 16000, vs: 0, arrivals: "med", date: "2026-09-08", fresh: false },
  { mandi: "beawar", crop: "moong", min: 7750, modal: 7750, max: 7750, vs: 0, arrivals: "med", date: "2026-09-17", fresh: false },
  { mandi: "deesa", crop: "sua", min: 9005, modal: 9005, max: 9005, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "panipat", crop: "dhan", min: 3851, modal: 4191, max: 4400, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sonepat", crop: "adrak", min: 7000, modal: 8000, max: 8800, vs: 0, arrivals: "med", date: "2026-09-13", fresh: false },
  { mandi: "ratlam", crop: "methi", min: 6115, modal: 6115, max: 6115, vs: 0, arrivals: "med", date: "2026-09-22", fresh: false },
  { mandi: "gondal", crop: "chana", min: 5555, modal: 6680, max: 6980, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "patan", crop: "moong", min: 6075, modal: 8800, max: 10075, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "patan", crop: "methi", min: 6455, modal: 6455, max: 6455, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "sirsa", crop: "dhan", min: 3930, modal: 4100, max: 4200, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "siwani", crop: "gwar", min: 6680, modal: 6697, max: 6707, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "sua", min: 6831, modal: 7430, max: 7430, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "sri-ganganagar", crop: "arandi", min: 7191, modal: 7191, max: 7191, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "ujjain", crop: "methi", min: 4401, modal: 4401, max: 4401, vs: 0, arrivals: "med", date: "2026-09-23", fresh: false },
  { mandi: "ujjain", crop: "arhar", min: 4300, modal: 4300, max: 4300, vs: 0, arrivals: "med", date: "2026-09-10", fresh: false },
  { mandi: "bikaner", crop: "sarson", min: 7275, modal: 7275, max: 7275, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "kekri", crop: "bajra", min: 1991, modal: 2176, max: 2251, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "neemuch", crop: "mirch", min: 14100, modal: 14100, max: 14100, vs: 0, arrivals: "med", date: "2026-09-10", fresh: false },
  { mandi: "neemuch", crop: "jeera", min: 18900, modal: 18900, max: 18900, vs: 0, arrivals: "med", date: "2026-09-24", fresh: true },
  { mandi: "neemuch", crop: "hara-matar", min: 2300, modal: 2400, max: 2400, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "sonepat", crop: "hara-matar", min: 6000, modal: 7000, max: 7800, vs: 0, arrivals: "med", date: "2026-09-13", fresh: false },
  { mandi: "anupgarh", crop: "chana", min: 5800, modal: 5800, max: 5800, vs: 0, arrivals: "med", date: "2026-09-14", fresh: false },
  { mandi: "siwani", crop: "moong", min: 7900, modal: 8140, max: 8200, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "sirsa", crop: "chana", min: 5700, modal: 5780, max: 5820, vs: 0, arrivals: "med", date: "2026-09-24", fresh: true },
  { mandi: "goluwala", crop: "kapas", min: 8600, modal: 8750, max: 8850, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "unjha", crop: "dhaniya", min: 12000, modal: 12000, max: 12000, vs: 0, arrivals: "med", date: "2026-09-22", fresh: false },
  { mandi: "anupgarh", crop: "kapas", min: 8640, modal: 8640, max: 8640, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "kekri", crop: "kapas", min: 6000, modal: 7111, max: 8000, vs: 0, arrivals: "med", date: "2026-09-25", fresh: true },
  { mandi: "gondal", crop: "isabgol", min: 11405, modal: 11405, max: 11405, vs: 0, arrivals: "med", date: "2026-09-18", fresh: false },
  { mandi: "patan", crop: "isabgol", min: 7000, modal: 7000, max: 7000, vs: 0, arrivals: "med", date: "2026-09-17", fresh: false },
  { mandi: "mathania", crop: "moong", min: 7000, modal: 7250, max: 7500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "deesa", crop: "jau", min: 2655, modal: 2655, max: 2655, vs: 0, arrivals: "med", date: "2026-09-18", fresh: false },
  { mandi: "goluwala", crop: "bajra", min: 2099, modal: 2099, max: 2099, vs: 0, arrivals: "med", date: "2026-09-23", fresh: false },
  { mandi: "patan", crop: "urad", min: 6000, modal: 7810, max: 7810, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "patan", crop: "kapas", min: 8250, modal: 8800, max: 9350, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "adampur", crop: "bajra", min: 2220, modal: 2220, max: 2220, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "neemuch", crop: "haldi", min: 15200, modal: 15200, max: 15200, vs: 0, arrivals: "med", date: "2026-09-21", fresh: false },
  { mandi: "patan", crop: "til", min: 7255, modal: 10000, max: 11205, vs: 0, arrivals: "med", date: "2026-09-22", fresh: false },
  { mandi: "adampur", crop: "chana", min: 6565, modal: 6565, max: 6602, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "siwani", crop: "bajra", min: 2200, modal: 2200, max: 2250, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "aligarh", crop: "dhan", min: 3200, modal: 3741, max: 4302, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bareilly", crop: "bajra", min: 1800, modal: 1800, max: 1800, vs: 0, arrivals: "med", date: "2026-09-25", fresh: true },
  { mandi: "bareilly", crop: "hari-mirch", min: 2000, modal: 2647, max: 4000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bareilly", crop: "aalu", min: 500, modal: 500, max: 500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bareilly", crop: "gehun", min: 2600, modal: 2600, max: 2600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gorakhpur", crop: "gehun", min: 2500, modal: 2523, max: 2745, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "hathras", crop: "moong", min: 6276, modal: 6276, max: 6276, vs: 0, arrivals: "med", date: "2026-09-24", fresh: true },
  { mandi: "hathras", crop: "aalu", min: 500, modal: 569, max: 1100, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "lahsun", min: 7000, modal: 7000, max: 7000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "hari-mirch", min: 3000, modal: 3000, max: 3000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "pyaz", min: 3500, modal: 3500, max: 3500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "aalu", min: 550, modal: 550, max: 550, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "tamatar", min: 2100, modal: 2100, max: 2100, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "gehun", min: 2360, modal: 2445, max: 2600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "gehun", min: 2660, modal: 2660, max: 2660, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mainpuri", crop: "lahsun", min: 9000, modal: 9000, max: 9000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mainpuri", crop: "moongphali", min: 6000, modal: 6118, max: 6500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "mainpuri", crop: "aalu", min: 500, modal: 500, max: 500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "lahsun", min: 12000, modal: 12000, max: 12000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "pyaz", min: 3400, modal: 3980, max: 4000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "aalu", min: 500, modal: 550, max: 600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "tamatar", min: 1800, modal: 2086, max: 2200, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "lahsun", min: 7000, modal: 8457, max: 9600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "adrak", min: 3400, modal: 3529, max: 4000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "saharanpur", crop: "hari-mirch", min: 2400, modal: 2457, max: 2500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "moongphali", min: 5500, modal: 8760, max: 13850, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "pyaz", min: 3000, modal: 3205, max: 5500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "aalu", min: 670, modal: 675, max: 700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "rice", min: 3200, modal: 3249, max: 3400, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "aligarh", crop: "bajra", min: 2120, modal: 2120, max: 2120, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "aligarh", crop: "hari-mirch", min: 2500, modal: 2543, max: 2600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "aligarh", crop: "moong", min: 8700, modal: 8769, max: 8860, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "aligarh", crop: "makka", min: 1900, modal: 2061, max: 2200, vs: 0, arrivals: "med", date: "2026-09-23", fresh: false },
  { mandi: "aligarh", crop: "pyaz", min: 3000, modal: 3234, max: 3500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "aligarh", crop: "aalu", min: 500, modal: 500, max: 500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "aligarh", crop: "tamatar", min: 2000, modal: 2062, max: 2200, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "aligarh", crop: "gehun", min: 2500, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "bareilly", crop: "makka", min: 1830, modal: 1855, max: 1900, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "bareilly", crop: "dhan", min: 2000, modal: 2026, max: 2050, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bareilly", crop: "rice", min: 9615, modal: 9658, max: 9915, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bareilly", crop: "tamatar", min: 1700, modal: 1700, max: 1700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gorakhpur", crop: "lahsun", min: 14000, modal: 14000, max: 14000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gorakhpur", crop: "hari-mirch", min: 2200, modal: 2204, max: 5889, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "gorakhpur", crop: "pyaz", min: 3000, modal: 3068, max: 3500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gorakhpur", crop: "dhan", min: 2200, modal: 2200, max: 2200, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gorakhpur", crop: "tamatar", min: 2320, modal: 2320, max: 2320, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "hathras", crop: "bajra", min: 1960, modal: 2057, max: 2214, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "hathras", crop: "makka", min: 1800, modal: 1800, max: 1800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "hathras", crop: "pyaz", min: 4000, modal: 4000, max: 4000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "hathras", crop: "gehun", min: 2600, modal: 2600, max: 2600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "hapur", crop: "makka", min: 2100, modal: 2225, max: 2300, vs: 0, arrivals: "med", date: "2026-09-26", fresh: true },
  { mandi: "hapur", crop: "dhan", min: 2900, modal: 3595, max: 4050, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "hapur", crop: "aalu", min: 600, modal: 602, max: 610, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "hapur", crop: "gehun", min: 2610, modal: 2610, max: 2610, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "mirch", min: 9000, modal: 10184, max: 17290, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "hara-dhaniya", min: 6500, modal: 8817, max: 10700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "mirch", min: 8095, modal: 10297, max: 15000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "hara-dhaniya", min: 6500, modal: 10088, max: 13800, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "lucknow", crop: "adrak", min: 4000, modal: 4000, max: 4000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "moongphali", min: 9500, modal: 10265, max: 11000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "pyaz", min: 3000, modal: 3001, max: 3500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "aalu", min: 800, modal: 800, max: 800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "rice", min: 4517, modal: 6525, max: 7842, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "haldi", min: 15598, modal: 16859, max: 17679, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mainpuri", crop: "makka", min: 1950, modal: 1950, max: 1950, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mainpuri", crop: "gehun", min: 2551, modal: 2578, max: 2585, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "kapas", min: 6621, modal: 7506, max: 8600, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "mathura", crop: "adrak", min: 6400, modal: 7924, max: 8000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "hari-mirch", min: 2600, modal: 3035, max: 3500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "gehun", min: 2500, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "meerut", crop: "aalu", min: 700, modal: 791, max: 2100, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "meerut", crop: "gehun", min: 2600, modal: 2600, max: 2600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "muzaffarnagar", crop: "kapas", min: 12807, modal: 12807, max: 12807, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "muzaffarnagar", crop: "adrak", min: 8000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "muzaffarnagar", crop: "hari-mirch", min: 2450, modal: 2459, max: 2465, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "muzaffarnagar", crop: "aalu", min: 722, modal: 758, max: 805, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "muzaffarnagar", crop: "til", min: 6100, modal: 6100, max: 6100, vs: 0, arrivals: "med", date: "2026-09-19", fresh: false },
  { mandi: "saharanpur", crop: "chana", min: 8750, modal: 8750, max: 8750, vs: 0, arrivals: "med", date: "2026-08-29", fresh: false },
  { mandi: "saharanpur", crop: "dhan", min: 2510, modal: 2510, max: 2510, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "haldi", min: 12000, modal: 12216, max: 12328, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "gehun", min: 2767, modal: 2782, max: 2800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bareilly", crop: "moongphali", min: 7200, modal: 7200, max: 7200, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gorakhpur", crop: "mirch", min: 12400, modal: 12997, max: 14954, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gorakhpur", crop: "moong", min: 8500, modal: 8770, max: 8851, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gorakhpur", crop: "rice", min: 2400, modal: 3154, max: 8900, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "hathras", crop: "kapas", min: 7050, modal: 7364, max: 7946, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "hapur", crop: "rice", min: 6777, modal: 6777, max: 6777, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "kanpur", crop: "alsi", min: 8000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "makka", min: 1700, modal: 1857, max: 2100, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "lahsun", min: 10000, modal: 10000, max: 10000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "jowar", min: 3650, modal: 3650, max: 3650, vs: 0, arrivals: "med", date: "2026-09-14", fresh: false },
  { mandi: "lucknow", crop: "sarson", min: 8650, modal: 8650, max: 8650, vs: 0, arrivals: "med", date: "2026-09-26", fresh: true },
  { mandi: "lucknow", crop: "soyabean", min: 7500, modal: 7500, max: 7500, vs: 0, arrivals: "med", date: "2026-09-15", fresh: false },
  { mandi: "lucknow", crop: "tamatar", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mainpuri", crop: "moong", min: 8768, modal: 8768, max: 8768, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "mathura", crop: "rice", min: 4707, modal: 5002, max: 5966, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "meerut", crop: "hara-dhaniya", min: 13246, modal: 13246, max: 13246, vs: 0, arrivals: "med", date: "2026-08-30", fresh: false },
  { mandi: "saharanpur", crop: "mirch", min: 7000, modal: 9356, max: 13000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "hara-dhaniya", min: 7162, modal: 7895, max: 8500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "makka", min: 4400, modal: 4550, max: 4700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "saunf", min: 7200, modal: 7200, max: 7200, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "tamatar", min: 1500, modal: 1517, max: 2000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "aligarh", crop: "adrak", min: 6000, modal: 6000, max: 6000, vs: 0, arrivals: "med", date: "2026-09-14", fresh: false },
  { mandi: "bareilly", crop: "hara-dhaniya", min: 8000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-09-25", fresh: true },
  { mandi: "bareilly", crop: "adrak", min: 4500, modal: 4500, max: 4500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bareilly", crop: "moong", min: 8400, modal: 9485, max: 10115, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bareilly", crop: "methi", min: 20295, modal: 20295, max: 20295, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bareilly", crop: "haldi", min: 11800, modal: 11800, max: 11800, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "gorakhpur", crop: "moongphali", min: 10000, modal: 10000, max: 10000, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "gorakhpur", crop: "jowar", min: 2835, modal: 2835, max: 2835, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "gorakhpur", crop: "sarson", min: 5550, modal: 6078, max: 6371, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "gorakhpur", crop: "til", min: 12493, modal: 12493, max: 12493, vs: 0, arrivals: "med", date: "2026-09-05", fresh: false },
  { mandi: "hapur", crop: "sarson", min: 12000, modal: 12000, max: 12000, vs: 0, arrivals: "med", date: "2026-09-17", fresh: false },
  { mandi: "kanpur", crop: "bajra", min: 1800, modal: 1800, max: 1800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "moong", min: 7000, modal: 7000, max: 7000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "kanpur", crop: "rice", min: 3215, modal: 3215, max: 3215, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "haldi", min: 12473, modal: 12473, max: 12473, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "jau", min: 3525, modal: 3525, max: 3525, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "hari-mirch", min: 2500, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "lucknow", crop: "moong", min: 9000, modal: 9044, max: 9050, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "dhan", min: 2600, modal: 2600, max: 2600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "bajra", min: 2050, modal: 2162, max: 2296, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "mirch", min: 18995, modal: 19493, max: 19500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "hara-dhaniya", min: 11000, modal: 11422, max: 20000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "moongphali", min: 10550, modal: 10720, max: 12000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "methi", min: 15000, modal: 15000, max: 15000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "saunf", min: 8000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "haldi", min: 8000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "meerut", crop: "bajra", min: 2250, modal: 2250, max: 2250, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "meerut", crop: "jau", min: 2500, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "meerut", crop: "lahsun", min: 12000, modal: 12000, max: 12000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "meerut", crop: "adrak", min: 4500, modal: 5106, max: 10000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "meerut", crop: "hari-mirch", min: 2000, modal: 2130, max: 4000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "meerut", crop: "jowar", min: 3800, modal: 3800, max: 3800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "meerut", crop: "makka", min: 2000, modal: 2461, max: 2600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "meerut", crop: "pyaz", min: 3500, modal: 3515, max: 3700, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "meerut", crop: "dhan", min: 3000, modal: 3000, max: 3000, vs: 0, arrivals: "med", date: "2026-08-31", fresh: false },
  { mandi: "meerut", crop: "tamatar", min: 1800, modal: 1853, max: 4000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "muzaffarnagar", crop: "jau", min: 2135, modal: 2143, max: 2150, vs: 0, arrivals: "med", date: "2026-09-24", fresh: true },
  { mandi: "muzaffarnagar", crop: "lahsun", min: 7200, modal: 7200, max: 7200, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "muzaffarnagar", crop: "moong", min: 8200, modal: 8200, max: 8200, vs: 0, arrivals: "med", date: "2026-09-22", fresh: false },
  { mandi: "muzaffarnagar", crop: "pyaz", min: 3500, modal: 3500, max: 3500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "saharanpur", crop: "jau", min: 3000, modal: 3000, max: 3000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "agra", crop: "hara-matar", min: 4701, modal: 4701, max: 4701, vs: 0, arrivals: "med", date: "2026-09-01", fresh: false },
  { mandi: "aligarh", crop: "jau", min: 2760, modal: 2760, max: 2760, vs: 0, arrivals: "med", date: "2026-09-01", fresh: false },
  { mandi: "aligarh", crop: "arhar", min: 7000, modal: 7000, max: 7000, vs: 0, arrivals: "med", date: "2026-09-01", fresh: false },
  { mandi: "aligarh", crop: "rice", min: 4200, modal: 4200, max: 4200, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "bareilly", crop: "mirch", min: 12476, modal: 12476, max: 12476, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gorakhpur", crop: "aalu", min: 1500, modal: 1500, max: 1500, vs: 0, arrivals: "med", date: "2026-09-17", fresh: false },
  { mandi: "hathras", crop: "sarson", min: 7350, modal: 7350, max: 7350, vs: 0, arrivals: "med", date: "2026-09-08", fresh: false },
  { mandi: "kanpur", crop: "adrak", min: 8735, modal: 8735, max: 8735, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "kanpur", crop: "jowar", min: 1650, modal: 1650, max: 1650, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "sarson", min: 6250, modal: 6292, max: 6680, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "saunf", min: 18600, modal: 18600, max: 18600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "soyabean", min: 4000, modal: 4000, max: 4000, vs: 0, arrivals: "med", date: "2026-09-01", fresh: false },
  { mandi: "mathura", crop: "moong", min: 8768, modal: 9321, max: 9580, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "agra", crop: "arhar", min: 10618, modal: 10618, max: 10618, vs: 0, arrivals: "med", date: "2026-09-02", fresh: false },
  { mandi: "gorakhpur", crop: "hara-dhaniya", min: 14000, modal: 14000, max: 14000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gorakhpur", crop: "methi", min: 4262, modal: 4262, max: 4262, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "lucknow", crop: "til", min: 6667, modal: 6667, max: 6667, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mainpuri", crop: "dhan", min: 3400, modal: 3400, max: 3400, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "aligarh", crop: "lahsun", min: 6500, modal: 6500, max: 6500, vs: 0, arrivals: "med", date: "2026-09-26", fresh: true },
  { mandi: "bareilly", crop: "lahsun", min: 5400, modal: 5400, max: 5400, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bareilly", crop: "sarson", min: 7350, modal: 7350, max: 7350, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bareilly", crop: "til", min: 17235, modal: 17235, max: 17235, vs: 0, arrivals: "med", date: "2026-09-21", fresh: false },
  { mandi: "bareilly", crop: "saunf", min: 13771, modal: 13771, max: 13771, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "gorakhpur", crop: "chana", min: 6800, modal: 7433, max: 8700, vs: 0, arrivals: "med", date: "2026-09-04", fresh: false },
  { mandi: "hathras", crop: "tamatar", min: 3726, modal: 3726, max: 3726, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "lucknow", crop: "chana", min: 7400, modal: 7400, max: 7400, vs: 0, arrivals: "med", date: "2026-09-05", fresh: false },
  { mandi: "mainpuri", crop: "sarson", min: 7000, modal: 7000, max: 7000, vs: 0, arrivals: "med", date: "2026-09-17", fresh: false },
  { mandi: "bareilly", crop: "jau", min: 2975, modal: 2975, max: 2975, vs: 0, arrivals: "med", date: "2026-09-15", fresh: false },
  { mandi: "hathras", crop: "dhan", min: 3200, modal: 3634, max: 4405, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "til", min: 7500, modal: 7500, max: 7500, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "mathura", crop: "sarson", min: 6000, modal: 6012, max: 10000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "kanpur", crop: "arhar", min: 10649, modal: 10649, max: 10649, vs: 0, arrivals: "med", date: "2026-09-06", fresh: false },
  { mandi: "muzaffarnagar", crop: "rice", min: 3559, modal: 3559, max: 3559, vs: 0, arrivals: "med", date: "2026-09-26", fresh: true },
  { mandi: "mathura", crop: "dhan", min: 3000, modal: 3743, max: 4051, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "makka", min: 7200, modal: 8771, max: 10380, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bareilly", crop: "pyaz", min: 3000, modal: 3000, max: 3000, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "hathras", crop: "adrak", min: 12001, modal: 12001, max: 12001, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "hathras", crop: "hari-mirch", min: 4719, modal: 4719, max: 4719, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "kanpur", crop: "dhan", min: 2050, modal: 2223, max: 2350, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "bareilly", crop: "hara-matar", min: 6000, modal: 6000, max: 6000, vs: 0, arrivals: "med", date: "2026-09-11", fresh: false },
  { mandi: "gorakhpur", crop: "alsi", min: 6500, modal: 6500, max: 6500, vs: 0, arrivals: "med", date: "2026-09-11", fresh: false },
  { mandi: "hathras", crop: "lahsun", min: 21329, modal: 21329, max: 21329, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "hapur", crop: "adrak", min: 8040, modal: 8040, max: 8040, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "hapur", crop: "hari-mirch", min: 5922, modal: 5922, max: 5922, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "hapur", crop: "moong", min: 11746, modal: 11746, max: 11746, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "hapur", crop: "moongphali", min: 16750, modal: 16750, max: 16750, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "hapur", crop: "jowar", min: 3595, modal: 3595, max: 3595, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "hapur", crop: "pyaz", min: 5662, modal: 5662, max: 5662, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "hapur", crop: "hara-matar", min: 6084, modal: 6084, max: 6084, vs: 0, arrivals: "med", date: "2026-09-11", fresh: false },
  { mandi: "hapur", crop: "arhar", min: 14930, modal: 14930, max: 14930, vs: 0, arrivals: "med", date: "2026-09-11", fresh: false },
  { mandi: "hapur", crop: "saunf", min: 54605, modal: 54605, max: 54605, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "mathura", crop: "jowar", min: 4184, modal: 4184, max: 4184, vs: 0, arrivals: "med", date: "2026-09-11", fresh: false },
  { mandi: "mathura", crop: "soyabean", min: 11506, modal: 11506, max: 11506, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "muzaffarnagar", crop: "tamatar", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gorakhpur", crop: "bajra", min: 3000, modal: 3000, max: 3000, vs: 0, arrivals: "med", date: "2026-09-12", fresh: false },
  { mandi: "gorakhpur", crop: "makka", min: 2600, modal: 2600, max: 2600, vs: 0, arrivals: "med", date: "2026-09-12", fresh: false },
  { mandi: "lucknow", crop: "arhar", min: 6000, modal: 6000, max: 6000, vs: 0, arrivals: "med", date: "2026-09-12", fresh: false },
  { mandi: "muzaffarnagar", crop: "dhan", min: 3400, modal: 3400, max: 3400, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "moong", min: 9580, modal: 10135, max: 11160, vs: 0, arrivals: "med", date: "2026-09-24", fresh: true },
  { mandi: "saharanpur", crop: "methi", min: 4000, modal: 4000, max: 4000, vs: 0, arrivals: "med", date: "2026-09-12", fresh: false },
  { mandi: "agra", crop: "jowar", min: 4218, modal: 4218, max: 4218, vs: 0, arrivals: "med", date: "2026-09-13", fresh: false },
  { mandi: "agra", crop: "soyabean", min: 11292, modal: 11292, max: 11292, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "lucknow", crop: "saunf", min: 11000, modal: 11000, max: 11000, vs: 0, arrivals: "med", date: "2026-09-27", fresh: true },
  { mandi: "mathura", crop: "makka", min: 2090, modal: 2090, max: 2090, vs: 0, arrivals: "med", date: "2026-09-17", fresh: false },
  { mandi: "aligarh", crop: "sarson", min: 7400, modal: 7400, max: 7400, vs: 0, arrivals: "med", date: "2026-09-21", fresh: false },
  { mandi: "hathras", crop: "mirch", min: 9500, modal: 9500, max: 9500, vs: 0, arrivals: "med", date: "2026-09-15", fresh: false },
  { mandi: "lucknow", crop: "methi", min: 7070, modal: 7070, max: 7070, vs: 0, arrivals: "med", date: "2026-09-26", fresh: true },
  { mandi: "mathura", crop: "jau", min: 2600, modal: 2600, max: 2600, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mathura", crop: "alsi", min: 25982, modal: 25982, max: 25982, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "mathura", crop: "arhar", min: 6000, modal: 6396, max: 6500, vs: 0, arrivals: "med", date: "2026-09-24", fresh: true },
  { mandi: "mathura", crop: "til", min: 25000, modal: 25000, max: 25000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "hathras", crop: "arhar", min: 6500, modal: 6500, max: 6500, vs: 0, arrivals: "med", date: "2026-09-26", fresh: true },
  { mandi: "kanpur", crop: "methi", min: 13300, modal: 13300, max: 13300, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "mainpuri", crop: "bajra", min: 1900, modal: 1900, max: 1900, vs: 0, arrivals: "med", date: "2026-09-21", fresh: false },
  { mandi: "meerut", crop: "sarson", min: 6500, modal: 6500, max: 6500, vs: 0, arrivals: "med", date: "2026-09-16", fresh: false },
  { mandi: "bareilly", crop: "arhar", min: 7640, modal: 7640, max: 7640, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gorakhpur", crop: "adrak", min: 3200, modal: 3202, max: 7000, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "gorakhpur", crop: "haldi", min: 18316, modal: 18316, max: 18316, vs: 0, arrivals: "med", date: "2026-09-17", fresh: false },
  { mandi: "hapur", crop: "mirch", min: 26669, modal: 26669, max: 26669, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "hapur", crop: "hara-dhaniya", min: 20000, modal: 20000, max: 20000, vs: 0, arrivals: "med", date: "2026-09-17", fresh: false },
  { mandi: "hapur", crop: "lahsun", min: 9745, modal: 9745, max: 9745, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "hapur", crop: "alsi", min: 38000, modal: 38000, max: 38000, vs: 0, arrivals: "med", date: "2026-09-17", fresh: false },
  { mandi: "hapur", crop: "methi", min: 5512, modal: 5512, max: 5512, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "hapur", crop: "til", min: 16000, modal: 16000, max: 16000, vs: 0, arrivals: "med", date: "2026-09-17", fresh: false },
  { mandi: "hapur", crop: "tamatar", min: 3612, modal: 3612, max: 3612, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "kanpur", crop: "moongphali", min: 9416, modal: 9416, max: 9416, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "lucknow", crop: "alsi", min: 11500, modal: 11500, max: 11500, vs: 0, arrivals: "med", date: "2026-09-18", fresh: false },
  { mandi: "muzaffarnagar", crop: "bajra", min: 2240, modal: 2240, max: 2240, vs: 0, arrivals: "med", date: "2026-09-22", fresh: false },
  { mandi: "saharanpur", crop: "kapas", min: 15900, modal: 15900, max: 15900, vs: 0, arrivals: "med", date: "2026-09-19", fresh: false },
  { mandi: "kanpur", crop: "hara-matar", min: 4000, modal: 4000, max: 4000, vs: 0, arrivals: "med", date: "2026-09-26", fresh: true },
  { mandi: "mathura", crop: "hara-matar", min: 2800, modal: 2800, max: 2800, vs: 0, arrivals: "med", date: "2026-09-20", fresh: false },
  { mandi: "bareilly", crop: "alsi", min: 12905, modal: 12905, max: 12905, vs: 0, arrivals: "med", date: "2026-09-21", fresh: false },
  { mandi: "hapur", crop: "bajra", min: 3000, modal: 3000, max: 3000, vs: 0, arrivals: "med", date: "2026-09-21", fresh: false },
  { mandi: "muzaffarnagar", crop: "gehun", min: 2600, modal: 2600, max: 2600, vs: 0, arrivals: "med", date: "2026-09-21", fresh: false },
  { mandi: "lucknow", crop: "bajra", min: 2500, modal: 2933, max: 3243, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "lucknow", crop: "hara-matar", min: 5150, modal: 5150, max: 5150, vs: 0, arrivals: "med", date: "2026-09-25", fresh: true },
  { mandi: "hapur", crop: "soyabean", min: 5750, modal: 5750, max: 5750, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "saharanpur", crop: "bajra", min: 2450, modal: 2450, max: 2450, vs: 0, arrivals: "med", date: "2026-09-28", fresh: true },
  { mandi: "ratlam", crop: "til", min: 5450, modal: 5450, max: 5450, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "mathania", crop: "chana", min: 6000, modal: 6200, max: 6400, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "mathania", crop: "gwar", min: 6000, modal: 6100, max: 6200, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "neemuch", crop: "saunf", min: 8501, modal: 8501, max: 8501, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "saharanpur", crop: "jowar", min: 3100, modal: 3100, max: 3100, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
  { mandi: "indore", crop: "jeera", min: 23619, modal: 23619, max: 23619, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "indore", crop: "saunf", min: 12500, modal: 12848, max: 12848, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "neemuch", crop: "arhar", min: 3400, modal: 6311, max: 6311, vs: 0, arrivals: "med", date: "2026-09-29", fresh: true },
  { mandi: "gorakhpur", crop: "hara-matar", min: 6800, modal: 6800, max: 6800, vs: 0, arrivals: "med", date: "2026-09-30", fresh: true },
];

MB.varietyPrices = [
  {
    "crop": "bajra",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "adampur",
    "max": 2220,
    "min": 2220,
    "modal": 2220,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "adampur",
    "max": 6602,
    "min": 6565,
    "modal": 6565,
    "variety": "Other"
  },
  {
    "crop": "gwar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "adampur",
    "max": 6450,
    "min": 4900,
    "modal": 5675,
    "variety": "Other"
  },
  {
    "crop": "kapas",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "adampur",
    "max": 8750,
    "min": 8650,
    "modal": 8695,
    "variety": "American"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "adampur",
    "max": 8130,
    "min": 5470,
    "modal": 6800,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "adampur",
    "max": 8570,
    "min": 7550,
    "modal": 7910,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 500,
    "min": 500,
    "modal": 500,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 5000,
    "min": 5000,
    "modal": 5000,
    "variety": "Other"
  },
  {
    "crop": "alsi",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 8894,
    "min": 8894,
    "modal": 8894,
    "variety": "Other"
  },
  {
    "crop": "arhar",
    "date": "2026-09-02",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 10618,
    "min": 10618,
    "modal": 10618,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 2000,
    "min": 2000,
    "modal": 2000,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 3193,
    "min": 3193,
    "modal": 3193,
    "variety": "Medium"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 2700,
    "min": 2700,
    "modal": 2700,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-01",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 2970,
    "min": 2970,
    "modal": 2970,
    "variety": "Sharbati"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 15798,
    "min": 15798,
    "modal": 15798,
    "variety": "Other"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-01",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 4701,
    "min": 4701,
    "modal": 4701,
    "variety": "Other"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 1500,
    "min": 1500,
    "modal": 1500,
    "variety": "Other"
  },
  {
    "crop": "jowar",
    "date": "2026-09-13",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 4218,
    "min": 4218,
    "modal": 4218,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 12538,
    "min": 8500,
    "modal": 8878,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 4370,
    "min": 4370,
    "modal": 4370,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 15000,
    "min": 15000,
    "modal": 15000,
    "variety": "Other"
  },
  {
    "crop": "mirch",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 47870,
    "min": 47870,
    "modal": 47870,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 9579,
    "min": 9446,
    "modal": 9552,
    "variety": "Other"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 14089,
    "min": 14089,
    "modal": 14089,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 4000,
    "min": 1500,
    "modal": 2449,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 9565,
    "min": 9565,
    "modal": 9565,
    "variety": "Boiled Rice"
  },
  {
    "crop": "rice",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 10306,
    "min": 10306,
    "modal": 10306,
    "variety": "Broken Rice(Kanki)"
  },
  {
    "crop": "rice",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 7098,
    "min": 7098,
    "modal": 7098,
    "variety": "Common"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 9363,
    "min": 6920,
    "modal": 8279,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 7950,
    "min": 4850,
    "modal": 5118,
    "variety": "Rice Bran(Kukuf)"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 12500,
    "min": 12500,
    "modal": 12500,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 30248,
    "min": 30248,
    "modal": 30248,
    "variety": "Other"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 11292,
    "min": 11292,
    "modal": 11292,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 1700,
    "min": 1400,
    "modal": 1429,
    "variety": "Other"
  },
  {
    "crop": "til",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "agra",
    "max": 25863,
    "min": 25863,
    "modal": 25863,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 500,
    "min": 500,
    "modal": 500,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-14",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 6000,
    "min": 6000,
    "modal": 6000,
    "variety": "Other"
  },
  {
    "crop": "arhar",
    "date": "2026-09-01",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 7000,
    "min": 7000,
    "modal": 7000,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 2120,
    "min": 2120,
    "modal": 2120,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 4400,
    "min": 3230,
    "modal": 3670,
    "variety": "Basmati"
  },
  {
    "crop": "dhan",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 3900,
    "min": 3900,
    "modal": 3900,
    "variety": "Common"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 3900,
    "min": 3900,
    "modal": 3900,
    "variety": "Farm Kaddi"
  },
  {
    "crop": "dhan",
    "date": "2026-09-27",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 3200,
    "min": 3200,
    "modal": 3200,
    "variety": "Nellore Sanna"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 4302,
    "min": 3200,
    "modal": 3741,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 3690,
    "min": 3690,
    "modal": 3690,
    "variety": "Ponni"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 3850,
    "min": 3850,
    "modal": 3850,
    "variety": "SuperFine(Basmati)"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 2500,
    "min": 2500,
    "modal": 2500,
    "variety": "Dara"
  },
  {
    "crop": "gehun",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 2550,
    "min": 2530,
    "modal": 2548,
    "variety": "Medium"
  },
  {
    "crop": "gehun",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 2500,
    "min": 2500,
    "modal": 2500,
    "variety": "Other"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 2600,
    "min": 2500,
    "modal": 2543,
    "variety": "Other"
  },
  {
    "crop": "jau",
    "date": "2026-09-01",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 2760,
    "min": 2760,
    "modal": 2760,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 6500,
    "min": 6500,
    "modal": 6500,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 2200,
    "min": 1900,
    "modal": 2061,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 8860,
    "min": 8700,
    "modal": 8769,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 3500,
    "min": 3000,
    "modal": 3234,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 4200,
    "min": 4200,
    "modal": 4200,
    "variety": "Common"
  },
  {
    "crop": "rice",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 5234,
    "min": 5234,
    "modal": 5234,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 7400,
    "min": 7400,
    "modal": 7400,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "aligarh",
    "max": 2200,
    "min": 2000,
    "modal": 2062,
    "variety": "Other"
  },
  {
    "crop": "arandi",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 7325,
    "min": 6275,
    "modal": 7250,
    "variety": "Castor seed"
  },
  {
    "crop": "arhar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 8450,
    "min": 6350,
    "modal": 7250,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 2175,
    "min": 1525,
    "modal": 2050,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 7100,
    "min": 4950,
    "modal": 6750,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 2750,
    "min": 2750,
    "modal": 2750,
    "variety": "Bansi"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 2825,
    "min": 2650,
    "modal": 2725,
    "variety": "Lokwan"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 3350,
    "min": 2250,
    "modal": 2775,
    "variety": "Rajasthan Tukdi"
  },
  {
    "crop": "jeera",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 19300,
    "min": 14000,
    "modal": 19000,
    "variety": "Cummin Seed(Jeera)"
  },
  {
    "crop": "jowar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 7000,
    "min": 2475,
    "modal": 6575,
    "variety": "Other"
  },
  {
    "crop": "kapas",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 9500,
    "min": 5000,
    "modal": 8975,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 2950,
    "min": 2950,
    "modal": 2950,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 6775,
    "min": 6700,
    "modal": 6750,
    "variety": "Methiseeds"
  },
  {
    "crop": "moong",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 7000,
    "min": 5900,
    "modal": 7000,
    "variety": "Other"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 7125,
    "min": 5000,
    "modal": 6900,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 7425,
    "min": 7425,
    "modal": 7425,
    "variety": "Mustard"
  },
  {
    "crop": "sarson",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 8450,
    "min": 7975,
    "modal": 8450,
    "variety": "Rai UP"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 5625,
    "min": 5000,
    "modal": 5600,
    "variety": "Soyabeen"
  },
  {
    "crop": "til",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 17475,
    "min": 10825,
    "modal": 16500,
    "variety": "Black"
  },
  {
    "crop": "til",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 12125,
    "min": 12125,
    "modal": 12125,
    "variety": "Red"
  },
  {
    "crop": "til",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 13300,
    "min": 7250,
    "modal": 12000,
    "variety": "White"
  },
  {
    "crop": "urad",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "amreli",
    "max": 8375,
    "min": 5725,
    "modal": 6500,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-14",
    "fresh": false,
    "grade": "Grade Range-1",
    "mandi": "anupgarh",
    "max": 5800,
    "min": 5800,
    "modal": 5800,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-08-29",
    "fresh": false,
    "grade": "Grade Range-1",
    "mandi": "anupgarh",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "1482"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Grade Range-1",
    "mandi": "anupgarh",
    "max": 2641,
    "min": 2641,
    "modal": 2641,
    "variety": "Dara"
  },
  {
    "crop": "gwar",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Grade Range-1",
    "mandi": "anupgarh",
    "max": 6200,
    "min": 6200,
    "modal": 6200,
    "variety": "Other"
  },
  {
    "crop": "kapas",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "Grade Range-1",
    "mandi": "anupgarh",
    "max": 8283,
    "min": 8283,
    "modal": 8283,
    "variety": "American"
  },
  {
    "crop": "kapas",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Grade Range-1",
    "mandi": "anupgarh",
    "max": 8640,
    "min": 8640,
    "modal": 8640,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Grade Range-1",
    "mandi": "anupgarh",
    "max": 8411,
    "min": 8411,
    "modal": 8411,
    "variety": "Local"
  },
  {
    "crop": "sarson",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Grade Range-1",
    "mandi": "anupgarh",
    "max": 7700,
    "min": 7700,
    "modal": 7700,
    "variety": "Mustard"
  },
  {
    "crop": "sarson",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Grade Range-1",
    "mandi": "anupgarh",
    "max": 8100,
    "min": 8100,
    "modal": 8100,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 700,
    "min": 600,
    "modal": 650,
    "variety": "Other"
  },
  {
    "crop": "alsi",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 9301,
    "min": 9301,
    "modal": 9301,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 6251,
    "min": 5201,
    "modal": 5675,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 4401,
    "min": 4051,
    "modal": 4325,
    "variety": "Other"
  },
  {
    "crop": "dhaniya",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 13995,
    "min": 12301,
    "modal": 13320,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 2836,
    "min": 2516,
    "modal": 2691,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 20210,
    "min": 5810,
    "modal": 11200,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 2275,
    "min": 1600,
    "modal": 1841,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 6251,
    "min": 6251,
    "modal": 6251,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 7799,
    "min": 6251,
    "modal": 7075,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 2500,
    "min": 1200,
    "modal": 1800,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 8426,
    "min": 6650,
    "modal": 7610,
    "variety": "Other"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 5699,
    "min": 4900,
    "modal": 5600,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 1600,
    "min": 1000,
    "modal": 1300,
    "variety": "Other"
  },
  {
    "crop": "til",
    "date": "2026-09-02",
    "fresh": false,
    "grade": "Local",
    "mandi": "baran",
    "max": 9201,
    "min": 9201,
    "modal": 9201,
    "variety": "Other"
  },
  {
    "crop": "urad",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "baran",
    "max": 8451,
    "min": 6600,
    "modal": 7880,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 500,
    "min": 500,
    "modal": 500,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 4500,
    "min": 4500,
    "modal": 4500,
    "variety": "Other"
  },
  {
    "crop": "alsi",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 12905,
    "min": 12905,
    "modal": 12905,
    "variety": "Other"
  },
  {
    "crop": "arhar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 7640,
    "min": 7640,
    "modal": 7640,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 1800,
    "min": 1800,
    "modal": 1800,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-08-29",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 3102,
    "min": 3102,
    "modal": 3102,
    "variety": "1001"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 3900,
    "min": 3091,
    "modal": 3661,
    "variety": "Basmati"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2625,
    "min": 2000,
    "modal": 2136,
    "variety": "Common"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2000,
    "min": 2000,
    "modal": 2000,
    "variety": "Masuri"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2050,
    "min": 2000,
    "modal": 2026,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-27",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2300,
    "min": 2300,
    "modal": 2300,
    "variety": "Sarvati"
  },
  {
    "crop": "dhan",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2300,
    "min": 2300,
    "modal": 2300,
    "variety": "SuperFine(Basmati)"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2602,
    "min": 2600,
    "modal": 2601,
    "variety": "Dara"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2610,
    "min": 2605,
    "modal": 2608,
    "variety": "Dara Mill Quality"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Deshi"
  },
  {
    "crop": "gehun",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2635,
    "min": 2615,
    "modal": 2625,
    "variety": "Kanak"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Medium"
  },
  {
    "crop": "gehun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Medium Fine"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Mill Quality"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2675,
    "min": 2650,
    "modal": 2664,
    "variety": "PBW-343"
  },
  {
    "crop": "gehun",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 3625,
    "min": 3625,
    "modal": 3625,
    "variety": "Sharbati"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2610,
    "min": 2600,
    "modal": 2608,
    "variety": "Wheat-Organic"
  },
  {
    "crop": "haldi",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 11800,
    "min": 11800,
    "modal": 11800,
    "variety": "Other"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 8000,
    "min": 8000,
    "modal": 8000,
    "variety": "Other"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 6000,
    "min": 6000,
    "modal": 6000,
    "variety": "Other"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 4000,
    "min": 2000,
    "modal": 2647,
    "variety": "Other"
  },
  {
    "crop": "jau",
    "date": "2026-09-15",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 2975,
    "min": 2975,
    "modal": 2975,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 5400,
    "min": 5400,
    "modal": 5400,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 1900,
    "min": 1830,
    "modal": 1855,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 20295,
    "min": 20295,
    "modal": 20295,
    "variety": "Other"
  },
  {
    "crop": "mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 12476,
    "min": 12476,
    "modal": 12476,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 10115,
    "min": 8400,
    "modal": 9485,
    "variety": "Other"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 7200,
    "min": 7200,
    "modal": 7200,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 3000,
    "min": 3000,
    "modal": 3000,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 3936,
    "min": 3936,
    "modal": 3936,
    "variety": "Basmati Car"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 3733,
    "min": 2897,
    "modal": 3353,
    "variety": "Broken Rice"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 10562,
    "min": 10562,
    "modal": 10562,
    "variety": "Common"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 9915,
    "min": 9615,
    "modal": 9658,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 7350,
    "min": 7350,
    "modal": 7350,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 13771,
    "min": 13771,
    "modal": 13771,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 1700,
    "min": 1700,
    "modal": 1700,
    "variety": "Other"
  },
  {
    "crop": "til",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "bareilly",
    "max": 17235,
    "min": 17235,
    "modal": 17235,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Local",
    "mandi": "beawar",
    "max": 2350,
    "min": 2350,
    "modal": 2350,
    "variety": "Local"
  },
  {
    "crop": "gehun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Local",
    "mandi": "beawar",
    "max": 3150,
    "min": 3150,
    "modal": 3150,
    "variety": "Local"
  },
  {
    "crop": "jau",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Local",
    "mandi": "beawar",
    "max": 2900,
    "min": 2900,
    "modal": 2900,
    "variety": "Local"
  },
  {
    "crop": "makka",
    "date": "2026-09-03",
    "fresh": false,
    "grade": "Local",
    "mandi": "beawar",
    "max": 2450,
    "min": 2450,
    "modal": 2450,
    "variety": "Local"
  },
  {
    "crop": "moong",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "Local",
    "mandi": "beawar",
    "max": 7750,
    "min": 7750,
    "modal": 7750,
    "variety": "Other"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-02",
    "fresh": false,
    "grade": "Local",
    "mandi": "beawar",
    "max": 6250,
    "min": 6250,
    "modal": 6250,
    "variety": "Local"
  },
  {
    "crop": "sarson",
    "date": "2026-09-15",
    "fresh": false,
    "grade": "Local",
    "mandi": "beawar",
    "max": 7300,
    "min": 7300,
    "modal": 7300,
    "variety": "Mustard"
  },
  {
    "crop": "sarson",
    "date": "2026-08-31",
    "fresh": false,
    "grade": "Local",
    "mandi": "beawar",
    "max": 7250,
    "min": 7250,
    "modal": 7250,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "Grade B",
    "mandi": "bhiwani",
    "max": 822,
    "min": 620,
    "modal": 710,
    "variety": "Potato"
  },
  {
    "crop": "amrood",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "Grade B",
    "mandi": "bhiwani",
    "max": 3250,
    "min": 2840,
    "modal": 3011,
    "variety": "Guava"
  },
  {
    "crop": "kela",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "Grade B",
    "mandi": "bhiwani",
    "max": 5201,
    "min": 4210,
    "modal": 4545,
    "variety": "Medium"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "Grade B",
    "mandi": "bhiwani",
    "max": 3870,
    "min": 2504,
    "modal": 3102,
    "variety": "Onion"
  },
  {
    "crop": "seb",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "Grade B",
    "mandi": "bhiwani",
    "max": 9254,
    "min": 5580,
    "modal": 7540,
    "variety": "Apple"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "Grade B",
    "mandi": "bhiwani",
    "max": 2540,
    "min": 2014,
    "modal": 2250,
    "variety": "Tomato"
  },
  {
    "crop": "arandi",
    "date": "2026-09-01",
    "fresh": false,
    "grade": "Local",
    "mandi": "bikaner",
    "max": 6548,
    "min": 6548,
    "modal": 6548,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "bikaner",
    "max": 6561,
    "min": 6561,
    "modal": 6561,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "bikaner",
    "max": 2846,
    "min": 2846,
    "modal": 2846,
    "variety": "Other"
  },
  {
    "crop": "gwar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "bikaner",
    "max": 6288,
    "min": 6288,
    "modal": 6288,
    "variety": "Other"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "bikaner",
    "max": 12975,
    "min": 12975,
    "modal": 12975,
    "variety": "Other"
  },
  {
    "crop": "jeera",
    "date": "2026-09-14",
    "fresh": false,
    "grade": "Local",
    "mandi": "bikaner",
    "max": 19475,
    "min": 19475,
    "modal": 19475,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "Local",
    "mandi": "bikaner",
    "max": 6320,
    "min": 6320,
    "modal": 6320,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "bikaner",
    "max": 8301,
    "min": 8301,
    "modal": 8301,
    "variety": "Other"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "bikaner",
    "max": 6907,
    "min": 6907,
    "modal": 6907,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Local",
    "mandi": "bikaner",
    "max": 7275,
    "min": 7275,
    "modal": 7275,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Medium",
    "mandi": "byadgi",
    "max": 39000,
    "min": 39000,
    "modal": 39000,
    "variety": "Dry"
  },
  {
    "crop": "makka",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "byadgi",
    "max": 2520,
    "min": 2400,
    "modal": 2500,
    "variety": "Hybrid/Local"
  },
  {
    "crop": "mirch",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Medium",
    "mandi": "byadgi",
    "max": 77000,
    "min": 6719,
    "modal": 62009,
    "variety": "Dabbi"
  },
  {
    "crop": "mirch",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Medium",
    "mandi": "byadgi",
    "max": 26519,
    "min": 2229,
    "modal": 15889,
    "variety": "Guntur"
  },
  {
    "crop": "mirch",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Medium",
    "mandi": "byadgi",
    "max": 71500,
    "min": 5609,
    "modal": 58809,
    "variety": "Kaddi"
  },
  {
    "crop": "arandi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "deesa",
    "max": 7595,
    "min": 7565,
    "modal": 7585,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "deesa",
    "max": 2690,
    "min": 2275,
    "modal": 2400,
    "variety": "Bold"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "deesa",
    "max": 2790,
    "min": 2705,
    "modal": 2750,
    "variety": "Other"
  },
  {
    "crop": "gwar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "deesa",
    "max": 6010,
    "min": 5105,
    "modal": 5850,
    "variety": "Other"
  },
  {
    "crop": "jau",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "deesa",
    "max": 2655,
    "min": 2655,
    "modal": 2655,
    "variety": "Other"
  },
  {
    "crop": "jeera",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "deesa",
    "max": 20005,
    "min": 20005,
    "modal": 20005,
    "variety": "Bold"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "deesa",
    "max": 9555,
    "min": 6255,
    "modal": 7500,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "deesa",
    "max": 7850,
    "min": 7505,
    "modal": 7700,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "deesa",
    "max": 8005,
    "min": 8005,
    "modal": 8005,
    "variety": "Other"
  },
  {
    "crop": "sua",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "deesa",
    "max": 9005,
    "min": 9005,
    "modal": 9005,
    "variety": "Suva (Dill Seed)"
  },
  {
    "crop": "til",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "deesa",
    "max": 10725,
    "min": 10725,
    "modal": 10725,
    "variety": "White"
  },
  {
    "crop": "aalu",
    "date": "2026-09-09",
    "fresh": false,
    "grade": "Local",
    "mandi": "fatehabad",
    "max": 700,
    "min": 700,
    "modal": 700,
    "variety": "Local"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "fatehabad",
    "max": 800,
    "min": 800,
    "modal": 800,
    "variety": "Potato"
  },
  {
    "crop": "amrood",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "fatehabad",
    "max": 3000,
    "min": 3000,
    "modal": 3000,
    "variety": "Other"
  },
  {
    "crop": "anar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "fatehabad",
    "max": 16000,
    "min": 16000,
    "modal": 16000,
    "variety": "Pomogranate"
  },
  {
    "crop": "kela",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "fatehabad",
    "max": 2000,
    "min": 2000,
    "modal": 2000,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "fatehabad",
    "max": 16000,
    "min": 16000,
    "modal": 16000,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "fatehabad",
    "max": 4500,
    "min": 4500,
    "modal": 4500,
    "variety": "Other"
  },
  {
    "crop": "seb",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "fatehabad",
    "max": 6000,
    "min": 6000,
    "modal": 6000,
    "variety": "Apple"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "fatehabad",
    "max": 2000,
    "min": 2000,
    "modal": 2000,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ganaur",
    "max": 1500,
    "min": 1000,
    "modal": 1200,
    "variety": "Potato"
  },
  {
    "crop": "adrak",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "ganaur",
    "max": 10000,
    "min": 8000,
    "modal": 9000,
    "variety": "Green Ginger"
  },
  {
    "crop": "amrood",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "Medium",
    "mandi": "ganaur",
    "max": 3000,
    "min": 2500,
    "modal": 2800,
    "variety": "Other"
  },
  {
    "crop": "anar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "ganaur",
    "max": 15000,
    "min": 12000,
    "modal": 14000,
    "variety": "Pomogranate"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "ganaur",
    "max": 6000,
    "min": 5000,
    "modal": 5500,
    "variety": "Coriander"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "ganaur",
    "max": 15000,
    "min": 12000,
    "modal": 14000,
    "variety": "Peas Wet"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "ganaur",
    "max": 5000,
    "min": 4000,
    "modal": 4500,
    "variety": "Green Chilly"
  },
  {
    "crop": "kela",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "ganaur",
    "max": 4000,
    "min": 3000,
    "modal": 3500,
    "variety": "Banana - Ripe"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "ganaur",
    "max": 15000,
    "min": 12000,
    "modal": 14000,
    "variety": "Average"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ganaur",
    "max": 4500,
    "min": 4000,
    "modal": 4200,
    "variety": "Onion"
  },
  {
    "crop": "seb",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "ganaur",
    "max": 15000,
    "min": 12000,
    "modal": 14000,
    "variety": "Apple"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ganaur",
    "max": 4000,
    "min": 3000,
    "modal": 3500,
    "variety": "Tomato"
  },
  {
    "crop": "aalu",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "goluwala",
    "max": 700,
    "min": 500,
    "modal": 700,
    "variety": "Red Nanital"
  },
  {
    "crop": "arandi",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "Local",
    "mandi": "goluwala",
    "max": 6300,
    "min": 6300,
    "modal": 6300,
    "variety": "Caster"
  },
  {
    "crop": "bajra",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "goluwala",
    "max": 2099,
    "min": 2099,
    "modal": 2099,
    "variety": "Deshi"
  },
  {
    "crop": "bajra",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "goluwala",
    "max": 1980,
    "min": 1980,
    "modal": 1980,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "goluwala",
    "max": 6014,
    "min": 6014,
    "modal": 6014,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "goluwala",
    "max": 2626,
    "min": 2500,
    "modal": 2626,
    "variety": "Other"
  },
  {
    "crop": "gwar",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Local",
    "mandi": "goluwala",
    "max": 6560,
    "min": 6200,
    "modal": 6466,
    "variety": "Other"
  },
  {
    "crop": "jau",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "goluwala",
    "max": 2400,
    "min": 2300,
    "modal": 2400,
    "variety": "Other"
  },
  {
    "crop": "kapas",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "goluwala",
    "max": 8850,
    "min": 8600,
    "modal": 8750,
    "variety": "American"
  },
  {
    "crop": "kapas",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "goluwala",
    "max": 8101,
    "min": 8101,
    "modal": 8101,
    "variety": "Desi"
  },
  {
    "crop": "moong",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "goluwala",
    "max": 8531,
    "min": 7700,
    "modal": 8300,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "goluwala",
    "max": 4500,
    "min": 4000,
    "modal": 4500,
    "variety": "1st Sort"
  },
  {
    "crop": "sarson",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "goluwala",
    "max": 8102,
    "min": 7508,
    "modal": 7923,
    "variety": "Mustard"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "goluwala",
    "max": 2500,
    "min": 2400,
    "modal": 2500,
    "variety": "Deshi"
  },
  {
    "crop": "arandi",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 7255,
    "min": 5255,
    "modal": 6505,
    "variety": "Castor seed"
  },
  {
    "crop": "arhar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 9005,
    "min": 4880,
    "modal": 8005,
    "variety": "Arhar (Whole)"
  },
  {
    "crop": "bajra",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 2005,
    "min": 1455,
    "modal": 1955,
    "variety": "Hybrid"
  },
  {
    "crop": "chana",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 6980,
    "min": 5555,
    "modal": 6680,
    "variety": "Desi (Whole)"
  },
  {
    "crop": "dhaniya",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 14855,
    "min": 12005,
    "modal": 14205,
    "variety": "Coriander Seed"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 3000,
    "min": 2550,
    "modal": 2770,
    "variety": "Lok-1"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 4010,
    "min": 2650,
    "modal": 2870,
    "variety": "Sechor No. 1"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 11405,
    "min": 11405,
    "modal": 11405,
    "variety": "Isabgul (Psyllium)"
  },
  {
    "crop": "jeera",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 21005,
    "min": 12505,
    "modal": 20055,
    "variety": "Cummin Seed(Jeera)"
  },
  {
    "crop": "jowar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 7905,
    "min": 3500,
    "modal": 6255,
    "variety": "Jowar ( White)"
  },
  {
    "crop": "kapas",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 9330,
    "min": 5755,
    "modal": 8930,
    "variety": "H.B (Unginned)"
  },
  {
    "crop": "makka",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 2755,
    "min": 2000,
    "modal": 2505,
    "variety": "Yellow"
  },
  {
    "crop": "methi",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 7005,
    "min": 2380,
    "modal": 6755,
    "variety": "Methiseeds"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 8505,
    "min": 4000,
    "modal": 8005,
    "variety": "Green (Whole)"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 8155,
    "min": 4455,
    "modal": 7005,
    "variety": "Bold"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 4755,
    "min": 605,
    "modal": 3305,
    "variety": "Red"
  },
  {
    "crop": "sarson",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 7105,
    "min": 7105,
    "modal": 7105,
    "variety": "Mustard"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 5805,
    "min": 5555,
    "modal": 5555,
    "variety": "Soyabeen"
  },
  {
    "crop": "til",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 12155,
    "min": 12155,
    "modal": 12155,
    "variety": "Red"
  },
  {
    "crop": "til",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 12355,
    "min": 9005,
    "modal": 11605,
    "variety": "White"
  },
  {
    "crop": "urad",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gondal",
    "max": 9505,
    "min": 5000,
    "modal": 9405,
    "variety": "Black Gram (Whole)"
  },
  {
    "crop": "aalu",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 1500,
    "min": 1500,
    "modal": 1500,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 7000,
    "min": 3200,
    "modal": 3202,
    "variety": "Other"
  },
  {
    "crop": "alsi",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 6500,
    "min": 6500,
    "modal": 6500,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-12",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 3000,
    "min": 3000,
    "modal": 3000,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-04",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 8700,
    "min": 6800,
    "modal": 7433,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 2200,
    "min": 2200,
    "modal": 2200,
    "variety": "Common"
  },
  {
    "crop": "gehun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 2500,
    "min": 2500,
    "modal": 2500,
    "variety": "Coarse"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 2745,
    "min": 2500,
    "modal": 2523,
    "variety": "Dara"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 2550,
    "min": 2500,
    "modal": 2512,
    "variety": "Dara Mill Quality"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 2500,
    "min": 2500,
    "modal": 2500,
    "variety": "Medium"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 2630,
    "min": 2610,
    "modal": 2618,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 2650,
    "min": 2650,
    "modal": 2650,
    "variety": "PBW-343"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 3200,
    "min": 3200,
    "modal": 3200,
    "variety": "Sharbati"
  },
  {
    "crop": "gehun",
    "date": "2026-08-30",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 2500,
    "min": 2500,
    "modal": 2500,
    "variety": "Wheat-Organic"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 2500,
    "min": 2500,
    "modal": 2500,
    "variety": "White"
  },
  {
    "crop": "haldi",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 18316,
    "min": 18316,
    "modal": 18316,
    "variety": "Other"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 14000,
    "min": 14000,
    "modal": 14000,
    "variety": "Other"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 6800,
    "min": 6800,
    "modal": 6800,
    "variety": "Other"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 5889,
    "min": 2200,
    "modal": 2204,
    "variety": "Other"
  },
  {
    "crop": "jowar",
    "date": "2026-08-31",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 2835,
    "min": 2835,
    "modal": 2835,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 14000,
    "min": 14000,
    "modal": 14000,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-12",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 4262,
    "min": 4262,
    "modal": 4262,
    "variety": "Other"
  },
  {
    "crop": "mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 14954,
    "min": 12400,
    "modal": 12997,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 8851,
    "min": 8500,
    "modal": 8770,
    "variety": "Other"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 10000,
    "min": 10000,
    "modal": 10000,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 3500,
    "min": 3000,
    "modal": 3068,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 9833,
    "min": 9833,
    "modal": 9833,
    "variety": "Basmati Dawat"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 8900,
    "min": 2400,
    "modal": 3154,
    "variety": "Common"
  },
  {
    "crop": "rice",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 14000,
    "min": 14000,
    "modal": 14000,
    "variety": "Kalanamak"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 8501,
    "min": 8501,
    "modal": 8501,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-08-31",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 6371,
    "min": 5550,
    "modal": 6078,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 2320,
    "min": 2320,
    "modal": 2320,
    "variety": "Other"
  },
  {
    "crop": "til",
    "date": "2026-09-05",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "gorakhpur",
    "max": 12493,
    "min": 12493,
    "modal": 12493,
    "variety": "Other"
  },
  {
    "crop": "mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "guntur",
    "max": 28500,
    "min": 18000,
    "modal": 27000,
    "variety": "Guntur"
  },
  {
    "crop": "mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "guntur",
    "max": 28000,
    "min": 16000,
    "modal": 26500,
    "variety": "Red"
  },
  {
    "crop": "mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "guntur",
    "max": 28000,
    "min": 15500,
    "modal": 25500,
    "variety": "Red New"
  },
  {
    "crop": "mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "guntur",
    "max": 28000,
    "min": 17500,
    "modal": 26500,
    "variety": "Red Top"
  },
  {
    "crop": "mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Grade Range-3",
    "mandi": "guntur",
    "max": 15500,
    "min": 8000,
    "modal": 14000,
    "variety": "White"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 610,
    "min": 600,
    "modal": 602,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 8040,
    "min": 8040,
    "modal": 8040,
    "variety": "Other"
  },
  {
    "crop": "alsi",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 38000,
    "min": 38000,
    "modal": 38000,
    "variety": "Other"
  },
  {
    "crop": "arhar",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 14930,
    "min": 14930,
    "modal": 14930,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 3000,
    "min": 3000,
    "modal": 3000,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 4330,
    "min": 2802,
    "modal": 3701,
    "variety": "Basmati"
  },
  {
    "crop": "dhan",
    "date": "2026-09-27",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 3980,
    "min": 3980,
    "modal": 3980,
    "variety": "Common"
  },
  {
    "crop": "dhan",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 3700,
    "min": 3700,
    "modal": 3700,
    "variety": "Kalanamak"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 4050,
    "min": 2900,
    "modal": 3595,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 2805,
    "min": 2800,
    "modal": 2802,
    "variety": "Sarvati"
  },
  {
    "crop": "dhan",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 3315,
    "min": 3315,
    "modal": 3315,
    "variety": "SuperFine(Basmati)"
  },
  {
    "crop": "dhan",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 4021,
    "min": 4021,
    "modal": 4021,
    "variety": "White Ponni"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Dara"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Dara Mill Quality"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 2656,
    "min": 2608,
    "modal": 2619,
    "variety": "Deshi"
  },
  {
    "crop": "gehun",
    "date": "2026-08-31",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 2610,
    "min": 2610,
    "modal": 2610,
    "variety": "Local"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 2620,
    "min": 2620,
    "modal": 2620,
    "variety": "Medium"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 2610,
    "min": 2610,
    "modal": 2610,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 2650,
    "min": 2650,
    "modal": 2650,
    "variety": "PBW-343"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 20000,
    "min": 20000,
    "modal": 20000,
    "variety": "Other"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 6084,
    "min": 6084,
    "modal": 6084,
    "variety": "Other"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 5922,
    "min": 5922,
    "modal": 5922,
    "variety": "Other"
  },
  {
    "crop": "jowar",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 3595,
    "min": 3595,
    "modal": 3595,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 9745,
    "min": 9745,
    "modal": 9745,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 2300,
    "min": 2100,
    "modal": 2225,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 5512,
    "min": 5512,
    "modal": 5512,
    "variety": "Other"
  },
  {
    "crop": "mirch",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 26669,
    "min": 26669,
    "modal": 26669,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 11746,
    "min": 11746,
    "modal": 11746,
    "variety": "Other"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 16750,
    "min": 16750,
    "modal": 16750,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 5662,
    "min": 5662,
    "modal": 5662,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 10500,
    "min": 7950,
    "modal": 9779,
    "variety": "Basmati Dawat"
  },
  {
    "crop": "rice",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 6777,
    "min": 6777,
    "modal": 6777,
    "variety": "Common"
  },
  {
    "crop": "rice",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 3500,
    "min": 3500,
    "modal": 3500,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 5250,
    "min": 5250,
    "modal": 5250,
    "variety": "Rice Bran(Kukuf)"
  },
  {
    "crop": "sarson",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 12000,
    "min": 12000,
    "modal": 12000,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 54605,
    "min": 54605,
    "modal": 54605,
    "variety": "Other"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 5750,
    "min": 5750,
    "modal": 5750,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 3612,
    "min": 3612,
    "modal": 3612,
    "variety": "Other"
  },
  {
    "crop": "til",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hapur",
    "max": 16000,
    "min": 16000,
    "modal": 16000,
    "variety": "Other"
  },
  {
    "crop": "arhar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 7701,
    "min": 7701,
    "modal": 7701,
    "variety": "Arhar Dal(Tur)"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 7750,
    "min": 3601,
    "modal": 7500,
    "variety": "Chana Kabuli"
  },
  {
    "crop": "chana",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 5101,
    "min": 5101,
    "modal": 5101,
    "variety": "Chana mausami"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 6331,
    "min": 3900,
    "modal": 6331,
    "variety": "Desi (F.A.Q. Split)"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 9140,
    "min": 1800,
    "modal": 9140,
    "variety": "Dollar Gram"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 2672,
    "min": 2507,
    "modal": 2642,
    "variety": "Mill Quality"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 2500,
    "min": 2030,
    "modal": 2500,
    "variety": "Pea"
  },
  {
    "crop": "makka",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 2280,
    "min": 1402,
    "modal": 1625,
    "variety": "Yellow"
  },
  {
    "crop": "moong",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 7770,
    "min": 1700,
    "modal": 7600,
    "variety": "Green (Whole)"
  },
  {
    "crop": "moong",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 7500,
    "min": 7500,
    "modal": 7500,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 6210,
    "min": 6210,
    "modal": 6210,
    "variety": "Mustard"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 5800,
    "min": 5800,
    "modal": 5800,
    "variety": "Soyabeen"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 5781,
    "min": 1002,
    "modal": 5300,
    "variety": "Yellow"
  },
  {
    "crop": "urad",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "harda",
    "max": 8473,
    "min": 1000,
    "modal": 7701,
    "variety": "Urda/Urd"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 1100,
    "min": 500,
    "modal": 569,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 12001,
    "min": 12001,
    "modal": 12001,
    "variety": "Other"
  },
  {
    "crop": "arhar",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 6500,
    "min": 6500,
    "modal": 6500,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 2214,
    "min": 1960,
    "modal": 2057,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 4411,
    "min": 4411,
    "modal": 4411,
    "variety": "ADT 37"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 3500,
    "min": 3500,
    "modal": 3500,
    "variety": "ADT 38"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 4405,
    "min": 3200,
    "modal": 3634,
    "variety": "Basmati"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 4051,
    "min": 3201,
    "modal": 3374,
    "variety": "Common"
  },
  {
    "crop": "dhan",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 4100,
    "min": 4100,
    "modal": 4100,
    "variety": "Culture"
  },
  {
    "crop": "dhan",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 3800,
    "min": 3800,
    "modal": 3800,
    "variety": "Gowri Sanna"
  },
  {
    "crop": "dhan",
    "date": "2026-09-27",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 3411,
    "min": 3411,
    "modal": 3411,
    "variety": "G. R. 11"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 3792,
    "min": 3752,
    "modal": 3777,
    "variety": "I.R. 80"
  },
  {
    "crop": "dhan",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 3201,
    "min": 3201,
    "modal": 3201,
    "variety": "Nellore Sanna"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 4421,
    "min": 3200,
    "modal": 3863,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 3700,
    "min": 3700,
    "modal": 3700,
    "variety": "Ponni"
  },
  {
    "crop": "dhan",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 3810,
    "min": 3810,
    "modal": 3810,
    "variety": "Rasulu"
  },
  {
    "crop": "gehun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 2595,
    "min": 2500,
    "modal": 2559,
    "variety": "Dara"
  },
  {
    "crop": "gehun",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 2510,
    "min": 2510,
    "modal": 2510,
    "variety": "Hybrid"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 2501,
    "min": 2501,
    "modal": 2501,
    "variety": "Medium"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Other"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 4719,
    "min": 4719,
    "modal": 4719,
    "variety": "Other"
  },
  {
    "crop": "kapas",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 7946,
    "min": 7050,
    "modal": 7364,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 21329,
    "min": 21329,
    "modal": 21329,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 1800,
    "min": 1800,
    "modal": 1800,
    "variety": "Other"
  },
  {
    "crop": "mirch",
    "date": "2026-09-15",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 9500,
    "min": 9500,
    "modal": 9500,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 6276,
    "min": 6276,
    "modal": 6276,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 4000,
    "min": 4000,
    "modal": 4000,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-08",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 7350,
    "min": 7350,
    "modal": 7350,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "hathras",
    "max": 3726,
    "min": 3726,
    "modal": 3726,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 1000,
    "min": 162,
    "modal": 1000,
    "variety": "Local"
  },
  {
    "crop": "aalu",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "indore",
    "max": 810,
    "min": 810,
    "modal": 810,
    "variety": "Local"
  },
  {
    "crop": "aalu",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 615,
    "min": 615,
    "modal": 615,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 7000,
    "min": 7000,
    "modal": 7000,
    "variety": "Dry"
  },
  {
    "crop": "adrak",
    "date": "2026-09-12",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 11180,
    "min": 11180,
    "modal": 11180,
    "variety": "Ginger-Organic"
  },
  {
    "crop": "arhar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 8300,
    "min": 6855,
    "modal": 8300,
    "variety": "Arhar Dal(Tur)"
  },
  {
    "crop": "chana",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 6139,
    "min": 6139,
    "modal": 6139,
    "variety": "Chana Kabuli"
  },
  {
    "crop": "chana",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 5000,
    "min": 5000,
    "modal": 5000,
    "variety": "Desi (F.A.Q. Split)"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 10300,
    "min": 2310,
    "modal": 9100,
    "variety": "Dollar Gram"
  },
  {
    "crop": "chana",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "indore",
    "max": 5500,
    "min": 5500,
    "modal": 5500,
    "variety": "Dollar Gram"
  },
  {
    "crop": "chana",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 8140,
    "min": 8140,
    "modal": 8140,
    "variety": "Double Dollar Chana"
  },
  {
    "crop": "chana",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 7500,
    "min": 5950,
    "modal": 7500,
    "variety": "Gram"
  },
  {
    "crop": "chana",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "indore",
    "max": 5700,
    "min": 5700,
    "modal": 5700,
    "variety": "Gram"
  },
  {
    "crop": "gehun",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 2769,
    "min": 2769,
    "modal": 2769,
    "variety": "Lokwan"
  },
  {
    "crop": "gehun",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "indore",
    "max": 2700,
    "min": 2700,
    "modal": 2700,
    "variety": "Malwa Shakti"
  },
  {
    "crop": "gehun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 2720,
    "min": 2720,
    "modal": 2720,
    "variety": "Mill Quality"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 3121,
    "min": 2105,
    "modal": 2700,
    "variety": "Wheat"
  },
  {
    "crop": "gehun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "indore",
    "max": 2000,
    "min": 1950,
    "modal": 2000,
    "variety": "Wheat"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 3740,
    "min": 2160,
    "modal": 3740,
    "variety": "Pea"
  },
  {
    "crop": "jeera",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 23619,
    "min": 23619,
    "modal": 23619,
    "variety": "Cummin Seed(Jeera)"
  },
  {
    "crop": "jowar",
    "date": "2026-09-10",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 2401,
    "min": 2401,
    "modal": 2401,
    "variety": "Jowar (Yellow)"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-25",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 4000,
    "min": 4000,
    "modal": 4000,
    "variety": "Average"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "indore",
    "max": 5700,
    "min": 5700,
    "modal": 5700,
    "variety": "Average"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 5760,
    "min": 5760,
    "modal": 5760,
    "variety": "China"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 17000,
    "min": 2000,
    "modal": 8500,
    "variety": "Garlic"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "indore",
    "max": 13700,
    "min": 5500,
    "modal": 6500,
    "variety": "Garlic"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 7000,
    "min": 7000,
    "modal": 7000,
    "variety": "Garlic-Organic"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "indore",
    "max": 12500,
    "min": 12500,
    "modal": 12500,
    "variety": "Garlic-Organic"
  },
  {
    "crop": "makka",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 2424,
    "min": 1601,
    "modal": 2424,
    "variety": "Local"
  },
  {
    "crop": "makka",
    "date": "2026-09-02",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 2375,
    "min": 2375,
    "modal": 2375,
    "variety": "Yellow"
  },
  {
    "crop": "masoor",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 5875,
    "min": 5875,
    "modal": 5875,
    "variety": "Masur Dal"
  },
  {
    "crop": "methi",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 5700,
    "min": 5700,
    "modal": 5700,
    "variety": "Methiseeds"
  },
  {
    "crop": "mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 13190,
    "min": 11390,
    "modal": 13190,
    "variety": "Bold"
  },
  {
    "crop": "mirch",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 17960,
    "min": 6000,
    "modal": 14010,
    "variety": "Dry"
  },
  {
    "crop": "mirch",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 18000,
    "min": 8300,
    "modal": 18000,
    "variety": "Red"
  },
  {
    "crop": "moong",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 7355,
    "min": 4195,
    "modal": 7355,
    "variety": "Green (Whole)"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 10000,
    "min": 10000,
    "modal": 10000,
    "variety": "Groundnut seed"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 4290,
    "min": 356,
    "modal": 4275,
    "variety": "Onion"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "indore",
    "max": 4047,
    "min": 396,
    "modal": 3650,
    "variety": "Onion"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 4106,
    "min": 1727,
    "modal": 3830,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "indore",
    "max": 2480,
    "min": 1702,
    "modal": 2480,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 3376,
    "min": 3187,
    "modal": 3376,
    "variety": "White"
  },
  {
    "crop": "sarson",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 6940,
    "min": 6940,
    "modal": 6940,
    "variety": "Mustard"
  },
  {
    "crop": "saunf",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 12848,
    "min": 12500,
    "modal": 12848,
    "variety": "Soanf"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 6000,
    "min": 705,
    "modal": 5400,
    "variety": "Soyabeen"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 5400,
    "min": 5350,
    "modal": 5400,
    "variety": "Yellow"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "indore",
    "max": 3850,
    "min": 3850,
    "modal": 3850,
    "variety": "Yellow"
  },
  {
    "crop": "til",
    "date": "2026-09-10",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 5625,
    "min": 5625,
    "modal": 5625,
    "variety": "Sesame"
  },
  {
    "crop": "urad",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "indore",
    "max": 9890,
    "min": 7700,
    "modal": 9890,
    "variety": "Urda/Urd"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "jaipur",
    "max": 1800,
    "min": 1600,
    "modal": 1700,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "jaipur",
    "max": 2480,
    "min": 1960,
    "modal": 2220,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "jaipur",
    "max": 6000,
    "min": 6000,
    "modal": 6000,
    "variety": "999"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "jaipur",
    "max": 2680,
    "min": 2500,
    "modal": 2590,
    "variety": "Other"
  },
  {
    "crop": "gwar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "jaipur",
    "max": 5960,
    "min": 5270,
    "modal": 5615,
    "variety": "Other"
  },
  {
    "crop": "jau",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "jaipur",
    "max": 2600,
    "min": 2420,
    "modal": 2510,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "jaipur",
    "max": 5000,
    "min": 4600,
    "modal": 4800,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "jaipur",
    "max": 8100,
    "min": 7720,
    "modal": 7910,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "jaipur",
    "max": 4400,
    "min": 4000,
    "modal": 4200,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "jalore",
    "max": 1500,
    "min": 1200,
    "modal": 1300,
    "variety": "Potato"
  },
  {
    "crop": "adrak",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "jalore",
    "max": 4500,
    "min": 4000,
    "modal": 4300,
    "variety": "Other"
  },
  {
    "crop": "gwarphali",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "jalore",
    "max": 3500,
    "min": 3000,
    "modal": 3300,
    "variety": "Cluster Beans"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "jalore",
    "max": 2500,
    "min": 2000,
    "modal": 2300,
    "variety": "Coriander"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "jalore",
    "max": 1800,
    "min": 1500,
    "modal": 1600,
    "variety": "Green Chilly"
  },
  {
    "crop": "kela",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "Local",
    "mandi": "jalore",
    "max": 3500,
    "min": 3000,
    "modal": 3300,
    "variety": "Green Banana"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "Local",
    "mandi": "jalore",
    "max": 3500,
    "min": 3000,
    "modal": 3300,
    "variety": "Onion"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "jalore",
    "max": 1800,
    "min": 1400,
    "modal": 1600,
    "variety": "Tomato"
  },
  {
    "crop": "aalu",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "jind",
    "max": 1200,
    "min": 700,
    "modal": 1000,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "jind",
    "max": 4000,
    "min": 2000,
    "modal": 3500,
    "variety": "Local"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "jind",
    "max": 3000,
    "min": 1300,
    "modal": 2000,
    "variety": "Local"
  },
  {
    "crop": "dhaniya",
    "date": "2026-09-09",
    "fresh": false,
    "grade": "Local",
    "mandi": "jodhpur",
    "max": 15000,
    "min": 13000,
    "modal": 14000,
    "variety": "Other"
  },
  {
    "crop": "gwar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "jodhpur",
    "max": 6400,
    "min": 5800,
    "modal": 6000,
    "variety": "Other"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "jodhpur",
    "max": 15000,
    "min": 9000,
    "modal": 12000,
    "variety": "Other"
  },
  {
    "crop": "jeera",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "jodhpur",
    "max": 21700,
    "min": 17000,
    "modal": 19500,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "jodhpur",
    "max": 6000,
    "min": 5500,
    "modal": 5750,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "jodhpur",
    "max": 8625,
    "min": 7000,
    "modal": 7820,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "jodhpur",
    "max": 8300,
    "min": 5500,
    "modal": 6900,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "jodhpur",
    "max": 11400,
    "min": 5425,
    "modal": 8450,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 550,
    "min": 550,
    "modal": 550,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 8735,
    "min": 8735,
    "modal": 8735,
    "variety": "Other"
  },
  {
    "crop": "alsi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 8000,
    "min": 8000,
    "modal": 8000,
    "variety": "Other"
  },
  {
    "crop": "arhar",
    "date": "2026-09-06",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 10649,
    "min": 10649,
    "modal": 10649,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 1800,
    "min": 1800,
    "modal": 1800,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 2350,
    "min": 2050,
    "modal": 2223,
    "variety": "Common"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 2750,
    "min": 2450,
    "modal": 2669,
    "variety": "Dara"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 2360,
    "min": 2360,
    "modal": 2360,
    "variety": "Dara Mill Quality"
  },
  {
    "crop": "gehun",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 2360,
    "min": 2360,
    "modal": 2360,
    "variety": "Deshi"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 2650,
    "min": 2650,
    "modal": 2650,
    "variety": "Hybrid"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 2360,
    "min": 2360,
    "modal": 2360,
    "variety": "Medium"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 2600,
    "min": 2360,
    "modal": 2445,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 2710,
    "min": 2710,
    "modal": 2710,
    "variety": "Sharbati"
  },
  {
    "crop": "gehun",
    "date": "2026-09-03",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 2360,
    "min": 2360,
    "modal": 2360,
    "variety": "Wheat-Organic"
  },
  {
    "crop": "haldi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 12473,
    "min": 12473,
    "modal": 12473,
    "variety": "Other"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 10700,
    "min": 6500,
    "modal": 8817,
    "variety": "Other"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 4000,
    "min": 4000,
    "modal": 4000,
    "variety": "Other"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 3000,
    "min": 3000,
    "modal": 3000,
    "variety": "Other"
  },
  {
    "crop": "jowar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 1650,
    "min": 1650,
    "modal": 1650,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 7000,
    "min": 7000,
    "modal": 7000,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 2100,
    "min": 1700,
    "modal": 1857,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 13300,
    "min": 13300,
    "modal": 13300,
    "variety": "Other"
  },
  {
    "crop": "mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 17290,
    "min": 9000,
    "modal": 10184,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 7000,
    "min": 7000,
    "modal": 7000,
    "variety": "Other"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 9416,
    "min": 9416,
    "modal": 9416,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 3500,
    "min": 3500,
    "modal": 3500,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 4096,
    "min": 3206,
    "modal": 3829,
    "variety": "Basmati Dawat"
  },
  {
    "crop": "rice",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 5000,
    "min": 4080,
    "modal": 4482,
    "variety": "Basmati Golden Sela New"
  },
  {
    "crop": "rice",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 3000,
    "min": 3000,
    "modal": 3000,
    "variety": "Common"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 3215,
    "min": 3215,
    "modal": 3215,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 6680,
    "min": 6250,
    "modal": 6292,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 18600,
    "min": 18600,
    "modal": 18600,
    "variety": "Other"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-01",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 4000,
    "min": 4000,
    "modal": 4000,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 2100,
    "min": 2100,
    "modal": 2100,
    "variety": "Other"
  },
  {
    "crop": "til",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kanpur",
    "max": 7500,
    "min": 7500,
    "modal": 7500,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kekri",
    "max": 2251,
    "min": 1991,
    "modal": 2176,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kekri",
    "max": 6401,
    "min": 5711,
    "modal": 6100,
    "variety": "999"
  },
  {
    "crop": "gehun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Local",
    "mandi": "kekri",
    "max": 2681,
    "min": 2300,
    "modal": 2500,
    "variety": "Other"
  },
  {
    "crop": "jau",
    "date": "2026-09-01",
    "fresh": false,
    "grade": "Local",
    "mandi": "kekri",
    "max": 2650,
    "min": 2200,
    "modal": 2416,
    "variety": "Barley"
  },
  {
    "crop": "jau",
    "date": "2026-09-10",
    "fresh": false,
    "grade": "Local",
    "mandi": "kekri",
    "max": 2650,
    "min": 2121,
    "modal": 2424,
    "variety": "Other"
  },
  {
    "crop": "jowar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kekri",
    "max": 3701,
    "min": 2000,
    "modal": 3000,
    "variety": "Other"
  },
  {
    "crop": "kapas",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "Local",
    "mandi": "kekri",
    "max": 8000,
    "min": 6000,
    "modal": 7111,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kekri",
    "max": 9000,
    "min": 6700,
    "modal": 7681,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kekri",
    "max": 8291,
    "min": 7000,
    "modal": 7800,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-01",
    "fresh": false,
    "grade": "Local",
    "mandi": "kekri",
    "max": 9800,
    "min": 6000,
    "modal": 7500,
    "variety": "Other"
  },
  {
    "crop": "urad",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kekri",
    "max": 9030,
    "min": 6100,
    "modal": 7600,
    "variety": "Other"
  },
  {
    "crop": "alsi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 9150,
    "min": 9150,
    "modal": 9150,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 2350,
    "min": 2350,
    "modal": 2350,
    "variety": "Local"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 5500,
    "min": 5500,
    "modal": 5500,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 4000,
    "min": 4000,
    "modal": 4000,
    "variety": "Basmati"
  },
  {
    "crop": "dhaniya",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 13550,
    "min": 13550,
    "modal": 13550,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "kota",
    "max": 2700,
    "min": 2700,
    "modal": 2700,
    "variety": "Local"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 2700,
    "min": 2700,
    "modal": 2700,
    "variety": "Local"
  },
  {
    "crop": "jau",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 2350,
    "min": 2350,
    "modal": 2350,
    "variety": "Local"
  },
  {
    "crop": "jowar",
    "date": "2026-09-08",
    "fresh": false,
    "grade": "Local",
    "mandi": "kota",
    "max": 2450,
    "min": 2450,
    "modal": 2450,
    "variety": "Local"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 14000,
    "min": 14000,
    "modal": 14000,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 2100,
    "min": 2100,
    "modal": 2100,
    "variety": "Local"
  },
  {
    "crop": "masoor",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "Local",
    "mandi": "kota",
    "max": 5301,
    "min": 5301,
    "modal": 5301,
    "variety": "Local"
  },
  {
    "crop": "methi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 5200,
    "min": 5200,
    "modal": 5200,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 7300,
    "min": 7300,
    "modal": 7300,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 7500,
    "min": 7500,
    "modal": 7500,
    "variety": "Mustard"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 5550,
    "min": 5550,
    "modal": 5550,
    "variety": "Local"
  },
  {
    "crop": "til",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 9000,
    "min": 9000,
    "modal": 9000,
    "variety": "Sesame"
  },
  {
    "crop": "urad",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "kota",
    "max": 7000,
    "min": 7000,
    "modal": 7000,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 800,
    "min": 800,
    "modal": 800,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 4000,
    "min": 4000,
    "modal": 4000,
    "variety": "Other"
  },
  {
    "crop": "alsi",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 11500,
    "min": 11500,
    "modal": 11500,
    "variety": "Other"
  },
  {
    "crop": "arhar",
    "date": "2026-09-12",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 6000,
    "min": 6000,
    "modal": 6000,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 3243,
    "min": 2500,
    "modal": 2933,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-05",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 7400,
    "min": 7400,
    "modal": 7400,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2000,
    "min": 1990,
    "modal": 1995,
    "variety": "Common"
  },
  {
    "crop": "dhan",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2200,
    "min": 2000,
    "modal": 2104,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Samba Masuri"
  },
  {
    "crop": "dhan",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 3150,
    "min": 3100,
    "modal": 3138,
    "variety": "SuperFine(Basmati)"
  },
  {
    "crop": "gehun",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2690,
    "min": 2690,
    "modal": 2690,
    "variety": "2189 No. 1"
  },
  {
    "crop": "gehun",
    "date": "2026-09-14",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2690,
    "min": 2690,
    "modal": 2690,
    "variety": "2189 No. 2"
  },
  {
    "crop": "gehun",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2690,
    "min": 2690,
    "modal": 2690,
    "variety": "Bansi"
  },
  {
    "crop": "gehun",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2690,
    "min": 2690,
    "modal": 2690,
    "variety": "Coarse"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2425,
    "min": 2400,
    "modal": 2415,
    "variety": "Dara"
  },
  {
    "crop": "gehun",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2425,
    "min": 2425,
    "modal": 2425,
    "variety": "Dara Mill Quality"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2660,
    "min": 2660,
    "modal": 2660,
    "variety": "Deshi"
  },
  {
    "crop": "gehun",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2690,
    "min": 2690,
    "modal": 2690,
    "variety": "Kalawal"
  },
  {
    "crop": "gehun",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2580,
    "min": 2580,
    "modal": 2580,
    "variety": "Local"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2660,
    "min": 2660,
    "modal": 2660,
    "variety": "Medium"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2660,
    "min": 2660,
    "modal": 2660,
    "variety": "Medium Fine"
  },
  {
    "crop": "gehun",
    "date": "2026-09-20",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2450,
    "min": 2450,
    "modal": 2450,
    "variety": "Mill Quality"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2660,
    "min": 2660,
    "modal": 2660,
    "variety": "Super Fine"
  },
  {
    "crop": "haldi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 17679,
    "min": 15598,
    "modal": 16859,
    "variety": "Other"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 13800,
    "min": 6500,
    "modal": 10088,
    "variety": "Other"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 5150,
    "min": 5150,
    "modal": 5150,
    "variety": "Other"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2500,
    "min": 2500,
    "modal": 2500,
    "variety": "Other"
  },
  {
    "crop": "jau",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 3525,
    "min": 3525,
    "modal": 3525,
    "variety": "Other"
  },
  {
    "crop": "jowar",
    "date": "2026-09-14",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 3650,
    "min": 3650,
    "modal": 3650,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 10000,
    "min": 10000,
    "modal": 10000,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 10380,
    "min": 7200,
    "modal": 8771,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 7070,
    "min": 7070,
    "modal": 7070,
    "variety": "Other"
  },
  {
    "crop": "mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 15000,
    "min": 8095,
    "modal": 10297,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 9050,
    "min": 9000,
    "modal": 9044,
    "variety": "Other"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 11000,
    "min": 9500,
    "modal": 10265,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 3500,
    "min": 3000,
    "modal": 3001,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 5901,
    "min": 5901,
    "modal": 5901,
    "variety": "Basmati Dawat"
  },
  {
    "crop": "rice",
    "date": "2026-09-15",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 5372,
    "min": 3461,
    "modal": 5263,
    "variety": "Boiled Rice"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 7842,
    "min": 4517,
    "modal": 6525,
    "variety": "Common"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 8800,
    "min": 4350,
    "modal": 7597,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-08-30",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 4893,
    "min": 4893,
    "modal": 4893,
    "variety": "Sona Raw New"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 6010,
    "min": 6010,
    "modal": 6010,
    "variety": "Sona Raw Old"
  },
  {
    "crop": "rice",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 3690,
    "min": 3690,
    "modal": 3690,
    "variety": "White Parboiled"
  },
  {
    "crop": "sarson",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 8650,
    "min": 8650,
    "modal": 8650,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-27",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 11000,
    "min": 11000,
    "modal": 11000,
    "variety": "Other"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-15",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 7500,
    "min": 7500,
    "modal": 7500,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 2000,
    "min": 2000,
    "modal": 2000,
    "variety": "Other"
  },
  {
    "crop": "til",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "lucknow",
    "max": 6667,
    "min": 6667,
    "modal": 6667,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "Local",
    "mandi": "lunkaransar",
    "max": 2900,
    "min": 2690,
    "modal": 2795,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 500,
    "min": 500,
    "modal": 500,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 1900,
    "min": 1900,
    "modal": 1900,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3400,
    "min": 3400,
    "modal": 3400,
    "variety": "ADT 37"
  },
  {
    "crop": "dhan",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3200,
    "min": 3200,
    "modal": 3200,
    "variety": "ADT 38"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3900,
    "min": 3400,
    "modal": 3572,
    "variety": "Basmati"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3400,
    "min": 3400,
    "modal": 3400,
    "variety": "Common"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3400,
    "min": 3400,
    "modal": 3400,
    "variety": "I.R. 20"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3400,
    "min": 3400,
    "modal": 3400,
    "variety": "I.R. 36"
  },
  {
    "crop": "dhan",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3500,
    "min": 3200,
    "modal": 3322,
    "variety": "I.R. 49"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3500,
    "min": 3400,
    "modal": 3455,
    "variety": "I.R. 64"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3400,
    "min": 3400,
    "modal": 3400,
    "variety": "I.R. 80"
  },
  {
    "crop": "dhan",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3500,
    "min": 3500,
    "modal": 3500,
    "variety": "Jaganath"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3400,
    "min": 3400,
    "modal": 3400,
    "variety": "Kalanamak"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3700,
    "min": 3400,
    "modal": 3429,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3200,
    "min": 3200,
    "modal": 3200,
    "variety": "Ponni"
  },
  {
    "crop": "dhan",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3200,
    "min": 3200,
    "modal": 3200,
    "variety": "Red"
  },
  {
    "crop": "dhan",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3500,
    "min": 3500,
    "modal": 3500,
    "variety": "Sinna Ponni"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3400,
    "min": 3400,
    "modal": 3400,
    "variety": "SuperFine(Basmati)"
  },
  {
    "crop": "dhan",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3200,
    "min": 3200,
    "modal": 3200,
    "variety": "Super Ponni"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 3500,
    "min": 3500,
    "modal": 3500,
    "variety": "White Ponni"
  },
  {
    "crop": "gehun",
    "date": "2026-08-31",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2621,
    "min": 2621,
    "modal": 2621,
    "variety": "147 Best"
  },
  {
    "crop": "gehun",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2561,
    "min": 2561,
    "modal": 2561,
    "variety": "2189 No. 1"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2551,
    "min": 2551,
    "modal": 2551,
    "variety": "2329"
  },
  {
    "crop": "gehun",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2561,
    "min": 2561,
    "modal": 2561,
    "variety": "Bansi"
  },
  {
    "crop": "gehun",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2561,
    "min": 2561,
    "modal": 2561,
    "variety": "Chandausi"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2581,
    "min": 2581,
    "modal": 2581,
    "variety": "Coarse"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2585,
    "min": 2551,
    "modal": 2578,
    "variety": "Dara"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2581,
    "min": 2581,
    "modal": 2581,
    "variety": "Dara Mill Quality"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2585,
    "min": 2585,
    "modal": 2585,
    "variety": "Deshi"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2585,
    "min": 2585,
    "modal": 2585,
    "variety": "H.D."
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2585,
    "min": 2585,
    "modal": 2585,
    "variety": "Hybrid"
  },
  {
    "crop": "gehun",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2581,
    "min": 2581,
    "modal": 2581,
    "variety": "Kalawal"
  },
  {
    "crop": "gehun",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2551,
    "min": 2551,
    "modal": 2551,
    "variety": "Local"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2581,
    "min": 2581,
    "modal": 2581,
    "variety": "Medium"
  },
  {
    "crop": "gehun",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2561,
    "min": 2561,
    "modal": 2561,
    "variety": "Medium Fine"
  },
  {
    "crop": "gehun",
    "date": "2026-08-31",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2621,
    "min": 2621,
    "modal": 2621,
    "variety": "MP 147"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2585,
    "min": 2551,
    "modal": 2556,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2561,
    "min": 2561,
    "modal": 2561,
    "variety": "PBW-343"
  },
  {
    "crop": "gehun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2581,
    "min": 2581,
    "modal": 2581,
    "variety": "Sharbati"
  },
  {
    "crop": "gehun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2581,
    "min": 2581,
    "modal": 2581,
    "variety": "Sonalika"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 2551,
    "min": 2551,
    "modal": 2551,
    "variety": "Super Fine"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 9000,
    "min": 9000,
    "modal": 9000,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 1950,
    "min": 1950,
    "modal": 1950,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 8768,
    "min": 8768,
    "modal": 8768,
    "variety": "Other"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 6500,
    "min": 6000,
    "modal": 6118,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mainpuri",
    "max": 7000,
    "min": 7000,
    "modal": 7000,
    "variety": "Other"
  },
  {
    "crop": "alsi",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 9182,
    "min": 9182,
    "modal": 9182,
    "variety": "Flaxseed"
  },
  {
    "crop": "alsi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 9401,
    "min": 8950,
    "modal": 9301,
    "variety": "Flaxseed"
  },
  {
    "crop": "asaliya",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 5921,
    "min": 5500,
    "modal": 5921,
    "variety": "Asalia"
  },
  {
    "crop": "chana",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 4580,
    "min": 4580,
    "modal": 4580,
    "variety": "Chana Kabuli"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 9800,
    "min": 5231,
    "modal": 9800,
    "variety": "Chana Kabuli"
  },
  {
    "crop": "chana",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 5956,
    "min": 5956,
    "modal": 5956,
    "variety": "Dollar Gram"
  },
  {
    "crop": "chana",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 5781,
    "min": 5781,
    "modal": 5781,
    "variety": "Gram"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 6991,
    "min": 5500,
    "modal": 6991,
    "variety": "Gram"
  },
  {
    "crop": "gehun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 2707,
    "min": 2707,
    "modal": 2707,
    "variety": "Local"
  },
  {
    "crop": "gehun",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 2704,
    "min": 2704,
    "modal": 2704,
    "variety": "Lokwan"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 2770,
    "min": 2660,
    "modal": 2700,
    "variety": "Lokwan"
  },
  {
    "crop": "gehun",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 2561,
    "min": 2561,
    "modal": 2561,
    "variety": "Malwa Shakti"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 2670,
    "min": 2620,
    "modal": 2670,
    "variety": "Malwa Shakti"
  },
  {
    "crop": "gehun",
    "date": "2026-09-01",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 2820,
    "min": 2820,
    "modal": 2820,
    "variety": "Mohan Mondal"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 2826,
    "min": 2826,
    "modal": 2826,
    "variety": "Wheat"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 3081,
    "min": 1500,
    "modal": 2660,
    "variety": "Wheat"
  },
  {
    "crop": "gehun",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 2871,
    "min": 2871,
    "modal": 2871,
    "variety": "Wheat Mix"
  },
  {
    "crop": "haldi",
    "date": "2026-09-12",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 12381,
    "min": 12381,
    "modal": 12381,
    "variety": "Turmeric"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 14780,
    "min": 5701,
    "modal": 14780,
    "variety": "Coriander"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 13161,
    "min": 7901,
    "modal": 13161,
    "variety": "Coriander"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-05",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 3111,
    "min": 3111,
    "modal": 3111,
    "variety": "Pea"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 3390,
    "min": 2891,
    "modal": 3390,
    "variety": "Pea"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 7873,
    "min": 6000,
    "modal": 7873,
    "variety": "Isabgol"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 12700,
    "min": 9100,
    "modal": 12700,
    "variety": "Isabgol"
  },
  {
    "crop": "jau",
    "date": "2026-09-10",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 2300,
    "min": 2300,
    "modal": 2300,
    "variety": "Barley"
  },
  {
    "crop": "jau",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 2920,
    "min": 2920,
    "modal": 2920,
    "variety": "Barley"
  },
  {
    "crop": "kalonji",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 19966,
    "min": 4600,
    "modal": 19966,
    "variety": "Kalonji/Nigella"
  },
  {
    "crop": "kalonji",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 21341,
    "min": 20899,
    "modal": 21341,
    "variety": "Kalonji/Nigella"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 5800,
    "min": 4801,
    "modal": 5800,
    "variety": "Average"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 6711,
    "min": 6711,
    "modal": 6711,
    "variety": "Average"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 5500,
    "min": 4600,
    "modal": 5500,
    "variety": "Desi"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 25000,
    "min": 4501,
    "modal": 5800,
    "variety": "Garlic"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 26800,
    "min": 2000,
    "modal": 8000,
    "variety": "Garlic"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 12400,
    "min": 12400,
    "modal": 12400,
    "variety": "Garlic-Organic"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 6101,
    "min": 6101,
    "modal": 6101,
    "variety": "Garlic-Organic"
  },
  {
    "crop": "lahsun",
    "date": "2026-08-29",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 7900,
    "min": 7900,
    "modal": 7900,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 2521,
    "min": 2200,
    "modal": 2331,
    "variety": "Local"
  },
  {
    "crop": "makka",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 2440,
    "min": 2151,
    "modal": 2440,
    "variety": "Local"
  },
  {
    "crop": "masoor",
    "date": "2026-09-09",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 6951,
    "min": 6951,
    "modal": 6951,
    "variety": "Masur Dal"
  },
  {
    "crop": "masoor",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 7352,
    "min": 6440,
    "modal": 7352,
    "variety": "Masur Dal"
  },
  {
    "crop": "methi",
    "date": "2026-09-09",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 8161,
    "min": 8161,
    "modal": 8161,
    "variety": "Medium"
  },
  {
    "crop": "methi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 7801,
    "min": 4981,
    "modal": 7801,
    "variety": "Methiseeds"
  },
  {
    "crop": "methi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 6276,
    "min": 6276,
    "modal": 6276,
    "variety": "Methiseeds"
  },
  {
    "crop": "mirch",
    "date": "2026-09-08",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 16000,
    "min": 16000,
    "modal": 16000,
    "variety": "Red"
  },
  {
    "crop": "moong",
    "date": "2026-09-05",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 6363,
    "min": 6200,
    "modal": 6363,
    "variety": "Green (Whole)"
  },
  {
    "crop": "moong",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 7160,
    "min": 6151,
    "modal": 7160,
    "variety": "Green (Whole)"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 7522,
    "min": 4001,
    "modal": 7421,
    "variety": "Big (With Shell)"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 7100,
    "min": 2020,
    "modal": 4500,
    "variety": "Big (With Shell)"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 6452,
    "min": 5555,
    "modal": 6452,
    "variety": "Groundnut seed"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 7551,
    "min": 7551,
    "modal": 7551,
    "variety": "Groundnut seed"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-09",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 7150,
    "min": 7150,
    "modal": 7150,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-10",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 2860,
    "min": 2860,
    "modal": 2860,
    "variety": "Local"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 4016,
    "min": 1100,
    "modal": 3681,
    "variety": "Onion"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 4255,
    "min": 311,
    "modal": 1500,
    "variety": "Onion"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 3251,
    "min": 711,
    "modal": 3000,
    "variety": "Onion-Organic"
  },
  {
    "crop": "sarson",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 7791,
    "min": 2100,
    "modal": 7571,
    "variety": "Mustard"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 7925,
    "min": 6200,
    "modal": 7925,
    "variety": "Mustard"
  },
  {
    "crop": "sarson",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 7491,
    "min": 7491,
    "modal": 7491,
    "variety": "Sarson(Black)"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 5832,
    "min": 1000,
    "modal": 5780,
    "variety": "Soyabeen"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 5940,
    "min": 1200,
    "modal": 5700,
    "variety": "Soyabeen"
  },
  {
    "crop": "til",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 8802,
    "min": 8802,
    "modal": 8802,
    "variety": "Sesame"
  },
  {
    "crop": "til",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 12280,
    "min": 8000,
    "modal": 12280,
    "variety": "Sesame"
  },
  {
    "crop": "urad",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mandsaur",
    "max": 7196,
    "min": 7196,
    "modal": 7196,
    "variety": "Urda/Urd"
  },
  {
    "crop": "urad",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "mandsaur",
    "max": 8500,
    "min": 3501,
    "modal": 8050,
    "variety": "Urda/Urd"
  },
  {
    "crop": "bajra",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "mathania",
    "max": 2200,
    "min": 2000,
    "modal": 2100,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "mathania",
    "max": 6400,
    "min": 6000,
    "modal": 6200,
    "variety": "Desi (Whole)"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "mathania",
    "max": 2600,
    "min": 2400,
    "modal": 2500,
    "variety": "Local"
  },
  {
    "crop": "gwar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "mathania",
    "max": 6200,
    "min": 6000,
    "modal": 6100,
    "variety": "Other"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "Local",
    "mandi": "mathania",
    "max": 11000,
    "min": 10000,
    "modal": 10500,
    "variety": "Isabgul (Psyllium)"
  },
  {
    "crop": "jeera",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "mathania",
    "max": 18000,
    "min": 16000,
    "modal": 17000,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "mathania",
    "max": 7500,
    "min": 7000,
    "modal": 7250,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "mathania",
    "max": 7400,
    "min": 7200,
    "modal": 7300,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "Local",
    "mandi": "mathania",
    "max": 7000,
    "min": 6000,
    "modal": 6500,
    "variety": "Soanf"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 600,
    "min": 500,
    "modal": 550,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 8000,
    "min": 6400,
    "modal": 7924,
    "variety": "Other"
  },
  {
    "crop": "alsi",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 25982,
    "min": 25982,
    "modal": 25982,
    "variety": "Other"
  },
  {
    "crop": "arhar",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 6500,
    "min": 6000,
    "modal": 6396,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2296,
    "min": 2050,
    "modal": 2162,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 3643,
    "min": 3643,
    "modal": 3643,
    "variety": "Bangarakovi"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 4141,
    "min": 3000,
    "modal": 3695,
    "variety": "Basmati"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 4081,
    "min": 3002,
    "modal": 3765,
    "variety": "Common"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 4051,
    "min": 3000,
    "modal": 3743,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 3100,
    "min": 3100,
    "modal": 3100,
    "variety": "SuperFine(Basmati)"
  },
  {
    "crop": "gehun",
    "date": "2026-09-20",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "2329"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2525,
    "min": 2525,
    "modal": 2525,
    "variety": "Dara"
  },
  {
    "crop": "gehun",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2622,
    "min": 2622,
    "modal": 2622,
    "variety": "Deshi"
  },
  {
    "crop": "gehun",
    "date": "2026-09-20",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2550,
    "min": 2550,
    "modal": 2550,
    "variety": "Local"
  },
  {
    "crop": "gehun",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2644,
    "min": 2644,
    "modal": 2644,
    "variety": "Lokwan"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2500,
    "min": 2500,
    "modal": 2500,
    "variety": "Medium"
  },
  {
    "crop": "gehun",
    "date": "2026-09-04",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2451,
    "min": 2450,
    "modal": 2450,
    "variety": "Medium Fine"
  },
  {
    "crop": "gehun",
    "date": "2026-09-20",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2550,
    "min": 2550,
    "modal": 2550,
    "variety": "Mill Quality"
  },
  {
    "crop": "gehun",
    "date": "2026-09-27",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2540,
    "min": 2500,
    "modal": 2520,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2610,
    "min": 2610,
    "modal": 2610,
    "variety": "PBW-343"
  },
  {
    "crop": "gehun",
    "date": "2026-09-15",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2511,
    "min": 2500,
    "modal": 2503,
    "variety": "Sharbati"
  },
  {
    "crop": "gehun",
    "date": "2026-09-15",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2500,
    "min": 2500,
    "modal": 2500,
    "variety": "Sonalika"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2640,
    "min": 2640,
    "modal": 2640,
    "variety": "Super Fine"
  },
  {
    "crop": "haldi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 8000,
    "min": 8000,
    "modal": 8000,
    "variety": "Other"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 20000,
    "min": 11000,
    "modal": 11422,
    "variety": "Other"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-20",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2800,
    "min": 2800,
    "modal": 2800,
    "variety": "Other"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 3500,
    "min": 2600,
    "modal": 3035,
    "variety": "Other"
  },
  {
    "crop": "jau",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Other"
  },
  {
    "crop": "jowar",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 4184,
    "min": 4184,
    "modal": 4184,
    "variety": "Other"
  },
  {
    "crop": "kapas",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 8600,
    "min": 6621,
    "modal": 7506,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 12000,
    "min": 12000,
    "modal": 12000,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2090,
    "min": 2090,
    "modal": 2090,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 15000,
    "min": 15000,
    "modal": 15000,
    "variety": "Other"
  },
  {
    "crop": "mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 19500,
    "min": 18995,
    "modal": 19493,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 9580,
    "min": 8768,
    "modal": 9321,
    "variety": "Other"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 12000,
    "min": 10550,
    "modal": 10720,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 4000,
    "min": 3400,
    "modal": 3980,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 5966,
    "min": 4707,
    "modal": 5002,
    "variety": "Broken Rice"
  },
  {
    "crop": "rice",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 7076,
    "min": 7076,
    "modal": 7076,
    "variety": "Common"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 10000,
    "min": 6000,
    "modal": 6012,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 8000,
    "min": 8000,
    "modal": 8000,
    "variety": "Other"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 11506,
    "min": 11506,
    "modal": 11506,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 2200,
    "min": 1800,
    "modal": 2086,
    "variety": "Other"
  },
  {
    "crop": "til",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "mathura",
    "max": 25000,
    "min": 25000,
    "modal": 25000,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 2100,
    "min": 700,
    "modal": 791,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 10000,
    "min": 4500,
    "modal": 5106,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 2250,
    "min": 2250,
    "modal": 2250,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-08-31",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 3000,
    "min": 3000,
    "modal": 3000,
    "variety": "Common"
  },
  {
    "crop": "gehun",
    "date": "2026-08-31",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "2329"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 2640,
    "min": 2600,
    "modal": 2617,
    "variety": "Dara"
  },
  {
    "crop": "gehun",
    "date": "2026-09-14",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 2690,
    "min": 2680,
    "modal": 2684,
    "variety": "Dara Mill Quality"
  },
  {
    "crop": "gehun",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Medium"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "PBW-343"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-08-30",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 13246,
    "min": 13246,
    "modal": 13246,
    "variety": "Other"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 4000,
    "min": 2000,
    "modal": 2130,
    "variety": "Other"
  },
  {
    "crop": "jau",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 2500,
    "min": 2500,
    "modal": 2500,
    "variety": "Other"
  },
  {
    "crop": "jowar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 3800,
    "min": 3800,
    "modal": 3800,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 12000,
    "min": 12000,
    "modal": 12000,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 2600,
    "min": 2000,
    "modal": 2461,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 3700,
    "min": 3500,
    "modal": 3515,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 6500,
    "min": 6500,
    "modal": 6500,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "meerut",
    "max": 4000,
    "min": 1800,
    "modal": 1853,
    "variety": "Other"
  },
  {
    "crop": "arandi",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "Local",
    "mandi": "mehsana",
    "max": 7680,
    "min": 7585,
    "modal": 7650,
    "variety": "Castor seed"
  },
  {
    "crop": "bajra",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "Local",
    "mandi": "mehsana",
    "max": 2155,
    "min": 2075,
    "modal": 2125,
    "variety": "Local"
  },
  {
    "crop": "gehun",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "Local",
    "mandi": "mehsana",
    "max": 2955,
    "min": 2505,
    "modal": 2745,
    "variety": "Local"
  },
  {
    "crop": "sarson",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "Local",
    "mandi": "mehsana",
    "max": 7570,
    "min": 7375,
    "modal": 7550,
    "variety": "Mustard"
  },
  {
    "crop": "chana",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "merta",
    "max": 6400,
    "min": 4900,
    "modal": 5900,
    "variety": "Other"
  },
  {
    "crop": "gwar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "merta",
    "max": 6380,
    "min": 5600,
    "modal": 6000,
    "variety": "Other"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "merta",
    "max": 14000,
    "min": 11000,
    "modal": 12600,
    "variety": "Isabgul (Psyllium)"
  },
  {
    "crop": "jeera",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "merta",
    "max": 22500,
    "min": 16000,
    "modal": 20000,
    "variety": "Cummin Seed(Jeera)"
  },
  {
    "crop": "moong",
    "date": "2026-09-05",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "merta",
    "max": 8800,
    "min": 7200,
    "modal": 7600,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "merta",
    "max": 8500,
    "min": 5200,
    "modal": 7700,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "merta",
    "max": 8000,
    "min": 7800,
    "modal": 7900,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "merta",
    "max": 11500,
    "min": 7500,
    "modal": 9500,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 805,
    "min": 722,
    "modal": 758,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 8000,
    "min": 8000,
    "modal": 8000,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 2240,
    "min": 2240,
    "modal": 2240,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 3400,
    "min": 3400,
    "modal": 3400,
    "variety": "Basmati"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 3400,
    "min": 3400,
    "modal": 3400,
    "variety": "Common"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 3400,
    "min": 3400,
    "modal": 3400,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 3400,
    "min": 3400,
    "modal": 3400,
    "variety": "Sarvati"
  },
  {
    "crop": "gehun",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Local"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 2465,
    "min": 2450,
    "modal": 2459,
    "variety": "Other"
  },
  {
    "crop": "jau",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 2150,
    "min": 2135,
    "modal": 2143,
    "variety": "Other"
  },
  {
    "crop": "kapas",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 12807,
    "min": 12807,
    "modal": 12807,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 7200,
    "min": 7200,
    "modal": 7200,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 8200,
    "min": 8200,
    "modal": 8200,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 3500,
    "min": 3500,
    "modal": 3500,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 3200,
    "min": 3200,
    "modal": 3200,
    "variety": "Common"
  },
  {
    "crop": "rice",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 3559,
    "min": 3559,
    "modal": 3559,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 2000,
    "min": 2000,
    "modal": 2000,
    "variety": "Other"
  },
  {
    "crop": "til",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "muzaffarnagar",
    "max": 6100,
    "min": 6100,
    "modal": 6100,
    "variety": "Other"
  },
  {
    "crop": "gwar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nagaur",
    "max": 6325,
    "min": 6000,
    "modal": 6200,
    "variety": "Other"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nagaur",
    "max": 14000,
    "min": 10000,
    "modal": 12500,
    "variety": "Isabgul (Psyllium)"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-02",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "nagaur",
    "max": 13500,
    "min": 9500,
    "modal": 11500,
    "variety": "Other"
  },
  {
    "crop": "jeera",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nagaur",
    "max": 21500,
    "min": 17000,
    "modal": 20500,
    "variety": "Desi"
  },
  {
    "crop": "jeera",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nagaur",
    "max": 21700,
    "min": 17500,
    "modal": 20500,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nagaur",
    "max": 9000,
    "min": 8600,
    "modal": 8850,
    "variety": "Local"
  },
  {
    "crop": "moong",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "nagaur",
    "max": 8600,
    "min": 7600,
    "modal": 8250,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nagaur",
    "max": 8000,
    "min": 7500,
    "modal": 7800,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nagaur",
    "max": 13000,
    "min": 8000,
    "modal": 11000,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-05",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 18500,
    "min": 18200,
    "modal": 18500,
    "variety": "Dry"
  },
  {
    "crop": "adrak",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 13600,
    "min": 13600,
    "modal": 13600,
    "variety": "Dry"
  },
  {
    "crop": "adrak",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 17100,
    "min": 6450,
    "modal": 17100,
    "variety": "Ginger-Organic"
  },
  {
    "crop": "alsi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 9392,
    "min": 8500,
    "modal": 9392,
    "variety": "Flaxseed"
  },
  {
    "crop": "anar",
    "date": "2026-09-08",
    "fresh": false,
    "grade": "Medium",
    "mandi": "neemuch",
    "max": 2850,
    "min": 2481,
    "modal": 2850,
    "variety": "Other"
  },
  {
    "crop": "anar",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 1300,
    "min": 1300,
    "modal": 1300,
    "variety": "Pomegranate-Organic"
  },
  {
    "crop": "arhar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 6311,
    "min": 3400,
    "modal": 6311,
    "variety": "Arhar Dal(Tur)"
  },
  {
    "crop": "asaliya",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 6051,
    "min": 5200,
    "modal": 5750,
    "variety": "Asalia"
  },
  {
    "crop": "chana",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 8331,
    "min": 8331,
    "modal": 8331,
    "variety": "Chana Kanta"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 9200,
    "min": 4900,
    "modal": 9000,
    "variety": "Dollar Gram"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 6681,
    "min": 2500,
    "modal": 6629,
    "variety": "Gram"
  },
  {
    "crop": "gehun",
    "date": "2026-08-31",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 2641,
    "min": 2641,
    "modal": 2641,
    "variety": "Local"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 3100,
    "min": 2600,
    "modal": 2760,
    "variety": "Wheat"
  },
  {
    "crop": "gehun",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 2777,
    "min": 2777,
    "modal": 2777,
    "variety": "Wheat Mix"
  },
  {
    "crop": "haldi",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 15200,
    "min": 15200,
    "modal": 15200,
    "variety": "Turmeric"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 14370,
    "min": 12001,
    "modal": 14000,
    "variety": "Coriander"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 13361,
    "min": 13271,
    "modal": 13361,
    "variety": "Coriander"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 2400,
    "min": 2300,
    "modal": 2400,
    "variety": "Pea"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 12251,
    "min": 6000,
    "modal": 11000,
    "variety": "Isabgol"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 11811,
    "min": 11811,
    "modal": 11811,
    "variety": "Isabgol"
  },
  {
    "crop": "jau",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 3142,
    "min": 3142,
    "modal": 3142,
    "variety": "Barley"
  },
  {
    "crop": "jau",
    "date": "2026-09-03",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Barley"
  },
  {
    "crop": "jeera",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 18900,
    "min": 18900,
    "modal": 18900,
    "variety": "Cummin Seed(Jeera)"
  },
  {
    "crop": "kalonji",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 21400,
    "min": 20600,
    "modal": 21400,
    "variety": "Kalonji"
  },
  {
    "crop": "kalonji",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 21600,
    "min": 20800,
    "modal": 21600,
    "variety": "Kalonji/Nigella"
  },
  {
    "crop": "kalonji",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 21350,
    "min": 20630,
    "modal": 21170,
    "variety": "Kalonji/Nigella"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 24101,
    "min": 1400,
    "modal": 5500,
    "variety": "Average"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 12100,
    "min": 3200,
    "modal": 11000,
    "variety": "Average"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 30200,
    "min": 3600,
    "modal": 7800,
    "variety": "Garlic"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 13500,
    "min": 3000,
    "modal": 6000,
    "variety": "Garlic"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 6300,
    "min": 6300,
    "modal": 6300,
    "variety": "Garlic-Organic"
  },
  {
    "crop": "makka",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 2213,
    "min": 1580,
    "modal": 2213,
    "variety": "Deshi Red"
  },
  {
    "crop": "makka",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 2457,
    "min": 1850,
    "modal": 2457,
    "variety": "Local"
  },
  {
    "crop": "makka",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 2300,
    "min": 2300,
    "modal": 2300,
    "variety": "Local"
  },
  {
    "crop": "makka",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 2001,
    "min": 1931,
    "modal": 2001,
    "variety": "Yellow"
  },
  {
    "crop": "masoor",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 7800,
    "min": 2626,
    "modal": 7800,
    "variety": "Masur Dal"
  },
  {
    "crop": "methi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 8201,
    "min": 5100,
    "modal": 6200,
    "variety": "Methiseeds"
  },
  {
    "crop": "methi",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 6571,
    "min": 6202,
    "modal": 6571,
    "variety": "Methiseeds"
  },
  {
    "crop": "mirch",
    "date": "2026-09-10",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 14100,
    "min": 14100,
    "modal": 14100,
    "variety": "Dry"
  },
  {
    "crop": "moong",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 7341,
    "min": 6300,
    "modal": 7341,
    "variety": "Green (Whole)"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 7750,
    "min": 3000,
    "modal": 6700,
    "variety": "Big (With Shell)"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 10411,
    "min": 10411,
    "modal": 10411,
    "variety": "Groundnut seed"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 2500,
    "min": 2500,
    "modal": 2500,
    "variety": "Local"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 2701,
    "min": 2701,
    "modal": 2701,
    "variety": "Medium"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 4291,
    "min": 200,
    "modal": 4291,
    "variety": "Onion"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 4550,
    "min": 300,
    "modal": 4550,
    "variety": "Red"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 1900,
    "min": 1900,
    "modal": 1900,
    "variety": "Small - I"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 8270,
    "min": 6500,
    "modal": 8000,
    "variety": "Mustard"
  },
  {
    "crop": "sarson",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 7376,
    "min": 7376,
    "modal": 7376,
    "variety": "Mustard"
  },
  {
    "crop": "saunf",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 8501,
    "min": 8501,
    "modal": 8501,
    "variety": "Soanf"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 6031,
    "min": 1500,
    "modal": 5900,
    "variety": "Soyabeen"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "neemuch",
    "max": 5280,
    "min": 5280,
    "modal": 5280,
    "variety": "Soyabeen"
  },
  {
    "crop": "sua",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 7430,
    "min": 6831,
    "modal": 7430,
    "variety": "Suva"
  },
  {
    "crop": "til",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 12150,
    "min": 5400,
    "modal": 12150,
    "variety": "Chitti"
  },
  {
    "crop": "til",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 11950,
    "min": 6000,
    "modal": 6000,
    "variety": "Sesame"
  },
  {
    "crop": "til",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 10900,
    "min": 3000,
    "modal": 10900,
    "variety": "White"
  },
  {
    "crop": "urad",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "neemuch",
    "max": 9000,
    "min": 2000,
    "modal": 8000,
    "variety": "Urda/Urd"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nimbahera",
    "max": 2944,
    "min": 2590,
    "modal": 2767,
    "variety": "Other"
  },
  {
    "crop": "jau",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nimbahera",
    "max": 3000,
    "min": 2500,
    "modal": 2750,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nimbahera",
    "max": 14500,
    "min": 4500,
    "modal": 11000,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nimbahera",
    "max": 7201,
    "min": 6099,
    "modal": 6650,
    "variety": "Other"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nimbahera",
    "max": 7000,
    "min": 5600,
    "modal": 6300,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nimbahera",
    "max": 8096,
    "min": 7397,
    "modal": 7747,
    "variety": "Other"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "nimbahera",
    "max": 5750,
    "min": 4500,
    "modal": 5125,
    "variety": "Soyabeen"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "nokha",
    "max": 2841,
    "min": 2841,
    "modal": 2841,
    "variety": "Other"
  },
  {
    "crop": "gwar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "nokha",
    "max": 6329,
    "min": 6301,
    "modal": 6315,
    "variety": "Other"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "nokha",
    "max": 14351,
    "min": 11500,
    "modal": 12926,
    "variety": "Isabgul (Psyllium)"
  },
  {
    "crop": "jeera",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "nokha",
    "max": 20700,
    "min": 18700,
    "modal": 19700,
    "variety": "Bold"
  },
  {
    "crop": "methi",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "nokha",
    "max": 7000,
    "min": 7000,
    "modal": 7000,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "nokha",
    "max": 8800,
    "min": 8300,
    "modal": 8550,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "Local",
    "mandi": "panipat",
    "max": 1200,
    "min": 600,
    "modal": 900,
    "variety": "Local"
  },
  {
    "crop": "aalu",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "Local",
    "mandi": "panipat",
    "max": 1200,
    "min": 600,
    "modal": 900,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "panipat",
    "max": 1300,
    "min": 500,
    "modal": 900,
    "variety": "Potato"
  },
  {
    "crop": "amrood",
    "date": "2026-09-11",
    "fresh": false,
    "grade": "Local",
    "mandi": "panipat",
    "max": 8000,
    "min": 2000,
    "modal": 5000,
    "variety": "Other"
  },
  {
    "crop": "anar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "panipat",
    "max": 7000,
    "min": 4000,
    "modal": 5500,
    "variety": "Pomogranate"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "panipat",
    "max": 4400,
    "min": 3851,
    "modal": 4191,
    "variety": "Basmati 1509"
  },
  {
    "crop": "kela",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "panipat",
    "max": 3000,
    "min": 2000,
    "modal": 2500,
    "variety": "Banana - Ripe"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "panipat",
    "max": 4500,
    "min": 1500,
    "modal": 3000,
    "variety": "Onion"
  },
  {
    "crop": "seb",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "panipat",
    "max": 8000,
    "min": 2000,
    "modal": 5000,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "panipat",
    "max": 2100,
    "min": 700,
    "modal": 1400,
    "variety": "Other"
  },
  {
    "crop": "arandi",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 7675,
    "min": 7450,
    "modal": 7575,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 2380,
    "min": 2200,
    "modal": 2380,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 2900,
    "min": 2700,
    "modal": 2800,
    "variety": "Other"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 7000,
    "min": 7000,
    "modal": 7000,
    "variety": "Other"
  },
  {
    "crop": "jeera",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 20700,
    "min": 19000,
    "modal": 19900,
    "variety": "Other"
  },
  {
    "crop": "jowar",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 6500,
    "min": 6500,
    "modal": 6500,
    "variety": "Other"
  },
  {
    "crop": "kapas",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 9350,
    "min": 8250,
    "modal": 8800,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 6455,
    "min": 6455,
    "modal": 6455,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 10075,
    "min": 6075,
    "modal": 8800,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 7930,
    "min": 7400,
    "modal": 7700,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 12850,
    "min": 8500,
    "modal": 11000,
    "variety": "Other"
  },
  {
    "crop": "sua",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 9375,
    "min": 8000,
    "modal": 8800,
    "variety": "Suva (Dill Seed)"
  },
  {
    "crop": "til",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 11205,
    "min": 7255,
    "modal": 10000,
    "variety": "Other"
  },
  {
    "crop": "urad",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "patan",
    "max": 7810,
    "min": 6000,
    "modal": 7810,
    "variety": "Other"
  },
  {
    "crop": "arandi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 7300,
    "min": 5500,
    "modal": 6950,
    "variety": "Castor seed"
  },
  {
    "crop": "arhar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 9000,
    "min": 6650,
    "modal": 7350,
    "variety": "Arhar (Whole)"
  },
  {
    "crop": "bajra",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 2085,
    "min": 1900,
    "modal": 2025,
    "variety": "Deshi"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 6925,
    "min": 6150,
    "modal": 6700,
    "variety": "Desi (Whole)"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 10675,
    "min": 7150,
    "modal": 9750,
    "variety": "White (whole)"
  },
  {
    "crop": "dhaniya",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 14500,
    "min": 11500,
    "modal": 14000,
    "variety": "A-1, Green"
  },
  {
    "crop": "dhaniya",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 14000,
    "min": 11000,
    "modal": 13500,
    "variety": "Coriander Seed"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 3030,
    "min": 2730,
    "modal": 2810,
    "variety": "Lokwan"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 3420,
    "min": 2740,
    "modal": 2840,
    "variety": "Sharbati"
  },
  {
    "crop": "jeera",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 20830,
    "min": 18000,
    "modal": 19800,
    "variety": "Cummin Seed(Jeera)"
  },
  {
    "crop": "jowar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 7560,
    "min": 7125,
    "modal": 7450,
    "variety": "Jowar ( White)"
  },
  {
    "crop": "jowar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 2550,
    "min": 2250,
    "modal": 2375,
    "variety": "Jowar (Yellow)"
  },
  {
    "crop": "kapas",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 9405,
    "min": 7300,
    "modal": 8450,
    "variety": "Narma BT Cotton"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 12550,
    "min": 5675,
    "modal": 8625,
    "variety": "Garlic"
  },
  {
    "crop": "methi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 8010,
    "min": 4500,
    "modal": 7100,
    "variety": "Methiseeds"
  },
  {
    "crop": "moong",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 8675,
    "min": 6920,
    "modal": 7605,
    "variety": "Green (Whole)"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 7700,
    "min": 5750,
    "modal": 7125,
    "variety": "Bold"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 8500,
    "min": 6005,
    "modal": 7625,
    "variety": "G20"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 7615,
    "min": 6200,
    "modal": 7250,
    "variety": "Mustard"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 6090,
    "min": 5500,
    "modal": 5795,
    "variety": "Soyabeen"
  },
  {
    "crop": "til",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 13050,
    "min": 10300,
    "modal": 12000,
    "variety": "White"
  },
  {
    "crop": "urad",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "rajkot",
    "max": 9670,
    "min": 6500,
    "modal": 9000,
    "variety": "Black Gram (Whole)"
  },
  {
    "crop": "alsi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 9141,
    "min": 8601,
    "modal": 8851,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 6361,
    "min": 5881,
    "modal": 6270,
    "variety": "Other"
  },
  {
    "crop": "dhaniya",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 14620,
    "min": 9100,
    "modal": 13725,
    "variety": "Coriander Seed"
  },
  {
    "crop": "dhaniya",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 14800,
    "min": 11000,
    "modal": 13451,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 2700,
    "min": 2540,
    "modal": 2600,
    "variety": "Other"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-03",
    "fresh": false,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 9401,
    "min": 9401,
    "modal": 9401,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 19752,
    "min": 8252,
    "modal": 17878,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 2512,
    "min": 2090,
    "modal": 2301,
    "variety": "Other"
  },
  {
    "crop": "masoor",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 6200,
    "min": 6200,
    "modal": 6200,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 5981,
    "min": 5981,
    "modal": 5981,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 7740,
    "min": 4100,
    "modal": 7652,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 8120,
    "min": 6701,
    "modal": 7520,
    "variety": "Other"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 5891,
    "min": 4750,
    "modal": 5590,
    "variety": "Other"
  },
  {
    "crop": "til",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 9700,
    "min": 9700,
    "modal": 9700,
    "variety": "Other"
  },
  {
    "crop": "urad",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "ramganj",
    "max": 8400,
    "min": 4301,
    "modal": 7351,
    "variety": "Other"
  },
  {
    "crop": "arhar",
    "date": "2026-09-03",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 4876,
    "min": 4876,
    "modal": 4876,
    "variety": "Arhar Dal(Tur)"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 8450,
    "min": 4800,
    "modal": 8450,
    "variety": "Dollar Gram"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 6501,
    "min": 6366,
    "modal": 6501,
    "variety": "Gram"
  },
  {
    "crop": "gehun",
    "date": "2026-09-05",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 2777,
    "min": 2757,
    "modal": 2777,
    "variety": "Local"
  },
  {
    "crop": "gehun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 2841,
    "min": 1760,
    "modal": 2595,
    "variety": "Lokwan"
  },
  {
    "crop": "gehun",
    "date": "2026-09-02",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 2681,
    "min": 2681,
    "modal": 2681,
    "variety": "PISSI"
  },
  {
    "crop": "gehun",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 2745,
    "min": 2745,
    "modal": 2745,
    "variety": "Sharbati"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 3173,
    "min": 2534,
    "modal": 2894,
    "variety": "Wheat"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "ratlam",
    "max": 2650,
    "min": 2650,
    "modal": 2650,
    "variety": "Wheat"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 4131,
    "min": 1991,
    "modal": 2501,
    "variety": "Pea"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-09",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 5700,
    "min": 5700,
    "modal": 5700,
    "variety": "China"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 17790,
    "min": 1000,
    "modal": 6600,
    "variety": "Garlic"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "ratlam",
    "max": 6100,
    "min": 6100,
    "modal": 6100,
    "variety": "Garlic"
  },
  {
    "crop": "makka",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 2390,
    "min": 2023,
    "modal": 2390,
    "variety": "Local"
  },
  {
    "crop": "methi",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 6115,
    "min": 6115,
    "modal": 6115,
    "variety": "Methiseeds"
  },
  {
    "crop": "moong",
    "date": "2026-09-17",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 7900,
    "min": 7000,
    "modal": 7900,
    "variety": "Green (Whole)"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 3080,
    "min": 3080,
    "modal": 3080,
    "variety": "Bellary"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 4150,
    "min": 4150,
    "modal": 4150,
    "variety": "Hybrid"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 4204,
    "min": 400,
    "modal": 3500,
    "variety": "Onion"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "ratlam",
    "max": 4162,
    "min": 3500,
    "modal": 4162,
    "variety": "Onion"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 3226,
    "min": 3226,
    "modal": 3226,
    "variety": "Puna"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 5901,
    "min": 3400,
    "modal": 5500,
    "variety": "Soyabeen"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-26",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "ratlam",
    "max": 5300,
    "min": 5300,
    "modal": 5300,
    "variety": "Soyabeen"
  },
  {
    "crop": "til",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 5450,
    "min": 5450,
    "modal": 5450,
    "variety": "Sesame"
  },
  {
    "crop": "urad",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ratlam",
    "max": 6951,
    "min": 6951,
    "modal": 6951,
    "variety": "Urda/Urd"
  },
  {
    "crop": "aalu",
    "date": "2026-09-09",
    "fresh": false,
    "grade": "Local",
    "mandi": "rohtak",
    "max": 1000,
    "min": 600,
    "modal": 800,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "rohtak",
    "max": 1000,
    "min": 500,
    "modal": 700,
    "variety": "Other"
  },
  {
    "crop": "amrood",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Medium",
    "mandi": "rohtak",
    "max": 4000,
    "min": 2000,
    "modal": 3000,
    "variety": "Other"
  },
  {
    "crop": "anar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "rohtak",
    "max": 12000,
    "min": 8000,
    "modal": 10000,
    "variety": "Other"
  },
  {
    "crop": "kela",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "rohtak",
    "max": 2000,
    "min": 1800,
    "modal": 2000,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "rohtak",
    "max": 4500,
    "min": 3000,
    "modal": 4000,
    "variety": "Other"
  },
  {
    "crop": "seb",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "rohtak",
    "max": 10000,
    "min": 5000,
    "modal": 8000,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "rohtak",
    "max": 2500,
    "min": 1500,
    "modal": 2000,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 700,
    "min": 670,
    "modal": 675,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 4000,
    "min": 3400,
    "modal": 3529,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 2450,
    "min": 2450,
    "modal": 2450,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-08-29",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 8750,
    "min": 8750,
    "modal": 8750,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 3806,
    "min": 2600,
    "modal": 3623,
    "variety": "Basmati"
  },
  {
    "crop": "dhan",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 2498,
    "min": 2498,
    "modal": 2498,
    "variety": "Common"
  },
  {
    "crop": "dhan",
    "date": "2026-09-15",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 3281,
    "min": 3281,
    "modal": 3281,
    "variety": "Other"
  },
  {
    "crop": "dhan",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 2950,
    "min": 2950,
    "modal": 2950,
    "variety": "Sarvati"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 2510,
    "min": 2510,
    "modal": 2510,
    "variety": "SuperFine(Basmati)"
  },
  {
    "crop": "gehun",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 2625,
    "min": 2625,
    "modal": 2625,
    "variety": "Dara"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 2800,
    "min": 2767,
    "modal": 2782,
    "variety": "Dara Mill Quality"
  },
  {
    "crop": "gehun",
    "date": "2026-08-29",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 2600,
    "min": 2600,
    "modal": 2600,
    "variety": "Deshi"
  },
  {
    "crop": "gehun",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 3290,
    "min": 3150,
    "modal": 3252,
    "variety": "Medium Fine"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 3161,
    "min": 3161,
    "modal": 3161,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 2890,
    "min": 2890,
    "modal": 2890,
    "variety": "PBW-299"
  },
  {
    "crop": "gehun",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 2890,
    "min": 2890,
    "modal": 2890,
    "variety": "UP 308"
  },
  {
    "crop": "haldi",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 12328,
    "min": 12000,
    "modal": 12216,
    "variety": "Other"
  },
  {
    "crop": "hara-dhaniya",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 8500,
    "min": 7162,
    "modal": 7895,
    "variety": "Other"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 2500,
    "min": 2400,
    "modal": 2457,
    "variety": "Other"
  },
  {
    "crop": "jau",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 3000,
    "min": 3000,
    "modal": 3000,
    "variety": "Other"
  },
  {
    "crop": "jowar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 3100,
    "min": 3100,
    "modal": 3100,
    "variety": "Other"
  },
  {
    "crop": "kapas",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 15900,
    "min": 15900,
    "modal": 15900,
    "variety": "Other"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 9600,
    "min": 7000,
    "modal": 8457,
    "variety": "Other"
  },
  {
    "crop": "makka",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 4700,
    "min": 4400,
    "modal": 4550,
    "variety": "Other"
  },
  {
    "crop": "methi",
    "date": "2026-09-12",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 4000,
    "min": 4000,
    "modal": 4000,
    "variety": "Other"
  },
  {
    "crop": "mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 13000,
    "min": 7000,
    "modal": 9356,
    "variety": "Other"
  },
  {
    "crop": "moong",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 11160,
    "min": 9580,
    "modal": 10135,
    "variety": "Other"
  },
  {
    "crop": "moongphali",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 13850,
    "min": 5500,
    "modal": 8760,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 5500,
    "min": 3000,
    "modal": 3205,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 10014,
    "min": 9600,
    "modal": 9766,
    "variety": "Basmati Golden Sela New"
  },
  {
    "crop": "rice",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 11700,
    "min": 11700,
    "modal": 11700,
    "variety": "Basmati Haryana Raw (New)"
  },
  {
    "crop": "rice",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 11242,
    "min": 11242,
    "modal": 11242,
    "variety": "Basmati Haryana Raw (Old)"
  },
  {
    "crop": "rice",
    "date": "2026-09-27",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 4000,
    "min": 3000,
    "modal": 3249,
    "variety": "Basmati Haryana Sela(New)"
  },
  {
    "crop": "rice",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 3150,
    "min": 2900,
    "modal": 3046,
    "variety": "Boiled Rice"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 3200,
    "min": 3200,
    "modal": 3200,
    "variety": "Broken Rice(Kanki)"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 3550,
    "min": 2930,
    "modal": 3301,
    "variety": "Common"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 9495,
    "min": 3400,
    "modal": 3660,
    "variety": "Other"
  },
  {
    "crop": "rice",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 3400,
    "min": 3200,
    "modal": 3249,
    "variety": "White Parboiled"
  },
  {
    "crop": "saunf",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 7200,
    "min": 7200,
    "modal": 7200,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "saharanpur",
    "max": 2000,
    "min": 1500,
    "modal": 1517,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "shahabad",
    "max": 700,
    "min": 400,
    "modal": 600,
    "variety": "Potato"
  },
  {
    "crop": "adrak",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "shahabad",
    "max": 7000,
    "min": 3500,
    "modal": 6500,
    "variety": "Vegitable-fresh"
  },
  {
    "crop": "amrood",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "shahabad",
    "max": 9000,
    "min": 7000,
    "modal": 8000,
    "variety": "Guava"
  },
  {
    "crop": "anar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "shahabad",
    "max": 10870,
    "min": 9000,
    "modal": 10000,
    "variety": "Pomogranate"
  },
  {
    "crop": "dhan",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "shahabad",
    "max": 3831,
    "min": 3831,
    "modal": 3831,
    "variety": "Basmati 1509"
  },
  {
    "crop": "dhan",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "shahabad",
    "max": 2461,
    "min": 2461,
    "modal": 2461,
    "variety": "Fine"
  },
  {
    "crop": "gwarphali",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "shahabad",
    "max": 4500,
    "min": 4000,
    "modal": 4200,
    "variety": "Cluster Beans"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "shahabad",
    "max": 14000,
    "min": 14000,
    "modal": 14000,
    "variety": "Peas Wet"
  },
  {
    "crop": "hari-mirch",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "shahabad",
    "max": 5200,
    "min": 3500,
    "modal": 5000,
    "variety": "Green Chilly"
  },
  {
    "crop": "kela",
    "date": "2026-08-28",
    "fresh": false,
    "grade": "Medium",
    "mandi": "shahabad",
    "max": 3500,
    "min": 2800,
    "modal": 3000,
    "variety": "Banana - Ripe"
  },
  {
    "crop": "kela",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "shahabad",
    "max": 3500,
    "min": 2500,
    "modal": 3300,
    "variety": "Medium"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Local",
    "mandi": "shahabad",
    "max": 16000,
    "min": 8300,
    "modal": 10000,
    "variety": "Garlic"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "shahabad",
    "max": 4550,
    "min": 2625,
    "modal": 4400,
    "variety": "Onion"
  },
  {
    "crop": "seb",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "shahabad",
    "max": 7000,
    "min": 3000,
    "modal": 4500,
    "variety": "Apple"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "shahabad",
    "max": 3200,
    "min": 1800,
    "modal": 2700,
    "variety": "Tomato"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "sirsa",
    "max": 800,
    "min": 300,
    "modal": 600,
    "variety": "Other"
  },
  {
    "crop": "amrood",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "Medium",
    "mandi": "sirsa",
    "max": 3500,
    "min": 3500,
    "modal": 3500,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-24",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "sirsa",
    "max": 5820,
    "min": 5700,
    "modal": 5780,
    "variety": "Desi (Whole)"
  },
  {
    "crop": "dhan",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "sirsa",
    "max": 4200,
    "min": 3930,
    "modal": 4100,
    "variety": "Basmati 1509"
  },
  {
    "crop": "kapas",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "sirsa",
    "max": 8633,
    "min": 8400,
    "modal": 8500,
    "variety": "American"
  },
  {
    "crop": "kela",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "sirsa",
    "max": 2300,
    "min": 2300,
    "modal": 2300,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "sirsa",
    "max": 4400,
    "min": 3000,
    "modal": 4000,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-12",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "sirsa",
    "max": 7776,
    "min": 7500,
    "modal": 7600,
    "variety": "Mustard"
  },
  {
    "crop": "seb",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "sirsa",
    "max": 8000,
    "min": 3000,
    "modal": 5000,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "sirsa",
    "max": 2800,
    "min": 2000,
    "modal": 2300,
    "variety": "Other"
  },
  {
    "crop": "bajra",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "siwani",
    "max": 2250,
    "min": 2200,
    "modal": 2200,
    "variety": "Other"
  },
  {
    "crop": "gwar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "siwani",
    "max": 6707,
    "min": 6680,
    "modal": 6697,
    "variety": "Other"
  },
  {
    "crop": "kapas",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "siwani",
    "max": 9160,
    "min": 8300,
    "modal": 8800,
    "variety": "American"
  },
  {
    "crop": "kapas",
    "date": "2026-09-21",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "siwani",
    "max": 8890,
    "min": 8690,
    "modal": 8690,
    "variety": "Desi"
  },
  {
    "crop": "moong",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "siwani",
    "max": 8200,
    "min": 7900,
    "modal": 8140,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "sonepat",
    "max": 1200,
    "min": 1000,
    "modal": 1100,
    "variety": "Desi"
  },
  {
    "crop": "aalu",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "sonepat",
    "max": 1300,
    "min": 1000,
    "modal": 1200,
    "variety": "Other"
  },
  {
    "crop": "adrak",
    "date": "2026-09-13",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "sonepat",
    "max": 8800,
    "min": 7000,
    "modal": 8000,
    "variety": "Other"
  },
  {
    "crop": "amrood",
    "date": "2026-09-09",
    "fresh": false,
    "grade": "Medium",
    "mandi": "sonepat",
    "max": 5000,
    "min": 3500,
    "modal": 4000,
    "variety": "Guava"
  },
  {
    "crop": "amrood",
    "date": "2026-09-05",
    "fresh": false,
    "grade": "Local",
    "mandi": "sonepat",
    "max": 5000,
    "min": 3200,
    "modal": 3400,
    "variety": "Other"
  },
  {
    "crop": "amrood",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Medium",
    "mandi": "sonepat",
    "max": 9500,
    "min": 5000,
    "modal": 8000,
    "variety": "Other"
  },
  {
    "crop": "anar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Medium",
    "mandi": "sonepat",
    "max": 10000,
    "min": 6500,
    "modal": 9000,
    "variety": "Other"
  },
  {
    "crop": "anar",
    "date": "2026-09-25",
    "fresh": true,
    "grade": "Medium",
    "mandi": "sonepat",
    "max": 10000,
    "min": 7000,
    "modal": 8000,
    "variety": "Pomogranate"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-13",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "sonepat",
    "max": 7800,
    "min": 6000,
    "modal": 7000,
    "variety": "Other"
  },
  {
    "crop": "kela",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "Local",
    "mandi": "sonepat",
    "max": 3500,
    "min": 3400,
    "modal": 3400,
    "variety": "Other"
  },
  {
    "crop": "kela",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "sonepat",
    "max": 4000,
    "min": 3500,
    "modal": 3600,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "sonepat",
    "max": 4500,
    "min": 3900,
    "modal": 4000,
    "variety": "Onion"
  },
  {
    "crop": "seb",
    "date": "2026-09-15",
    "fresh": false,
    "grade": "Medium",
    "mandi": "sonepat",
    "max": 10000,
    "min": 5000,
    "modal": 9000,
    "variety": "Apple"
  },
  {
    "crop": "seb",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "Local",
    "mandi": "sonepat",
    "max": 10000,
    "min": 6000,
    "modal": 8000,
    "variety": "Other"
  },
  {
    "crop": "seb",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Medium",
    "mandi": "sonepat",
    "max": 10500,
    "min": 5000,
    "modal": 6500,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "sonepat",
    "max": 3200,
    "min": 1900,
    "modal": 2100,
    "variety": "Local"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-15",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "sonepat",
    "max": 3000,
    "min": 2000,
    "modal": 2500,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-10",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "sonepat",
    "max": 3200,
    "min": 2000,
    "modal": 2500,
    "variety": "Tomato"
  },
  {
    "crop": "arandi",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "sri-ganganagar",
    "max": 7191,
    "min": 7191,
    "modal": 7191,
    "variety": "Castor seed"
  },
  {
    "crop": "bajra",
    "date": "2026-09-28",
    "fresh": true,
    "grade": "Local",
    "mandi": "sri-ganganagar",
    "max": 2490,
    "min": 2490,
    "modal": 2490,
    "variety": "Other"
  },
  {
    "crop": "chana",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "sri-ganganagar",
    "max": 6600,
    "min": 6600,
    "modal": 6600,
    "variety": "Other"
  },
  {
    "crop": "gehun",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "sri-ganganagar",
    "max": 2716,
    "min": 2650,
    "modal": 2700,
    "variety": "Other"
  },
  {
    "crop": "gwar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "sri-ganganagar",
    "max": 6626,
    "min": 6177,
    "modal": 6395,
    "variety": "Gwar"
  },
  {
    "crop": "jau",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "sri-ganganagar",
    "max": 2501,
    "min": 2500,
    "modal": 2501,
    "variety": "Other"
  },
  {
    "crop": "kapas",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "sri-ganganagar",
    "max": 8596,
    "min": 8300,
    "modal": 8481,
    "variety": "American"
  },
  {
    "crop": "kapas",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "sri-ganganagar",
    "max": 8367,
    "min": 8100,
    "modal": 8301,
    "variety": "Desi"
  },
  {
    "crop": "moong",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "sri-ganganagar",
    "max": 8601,
    "min": 6840,
    "modal": 7900,
    "variety": "Other"
  },
  {
    "crop": "sarson",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Local",
    "mandi": "sri-ganganagar",
    "max": 7942,
    "min": 6000,
    "modal": 7791,
    "variety": "Mustard"
  },
  {
    "crop": "aalu",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "Grade A",
    "mandi": "tarori",
    "max": 1500,
    "min": 1000,
    "modal": 1200,
    "variety": "Desi"
  },
  {
    "crop": "aalu",
    "date": "2026-08-28",
    "fresh": false,
    "grade": "Grade B",
    "mandi": "tarori",
    "max": 1200,
    "min": 800,
    "modal": 1000,
    "variety": "Desi"
  },
  {
    "crop": "aalu",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Medium",
    "mandi": "tarori",
    "max": 1500,
    "min": 1000,
    "modal": 1200,
    "variety": "Desi"
  },
  {
    "crop": "kela",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Medium",
    "mandi": "tarori",
    "max": 2500,
    "min": 2000,
    "modal": 2200,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-07",
    "fresh": false,
    "grade": "Medium",
    "mandi": "tarori",
    "max": 4000,
    "min": 3000,
    "modal": 3500,
    "variety": "Nasik"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Grade A",
    "mandi": "tarori",
    "max": 4000,
    "min": 3000,
    "modal": 3500,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-27",
    "fresh": true,
    "grade": "Medium",
    "mandi": "tarori",
    "max": 4000,
    "min": 3000,
    "modal": 3500,
    "variety": "Other"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "tarori",
    "max": 4000,
    "min": 3000,
    "modal": 3500,
    "variety": "Other"
  },
  {
    "crop": "seb",
    "date": "2026-09-03",
    "fresh": false,
    "grade": "Medium",
    "mandi": "tarori",
    "max": 6000,
    "min": 5000,
    "modal": 5500,
    "variety": "Apple"
  },
  {
    "crop": "seb",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Medium",
    "mandi": "tarori",
    "max": 6000,
    "min": 3000,
    "modal": 4000,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-06",
    "fresh": false,
    "grade": "Grade A",
    "mandi": "tarori",
    "max": 4000,
    "min": 3000,
    "modal": 3500,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "Medium",
    "mandi": "tarori",
    "max": 4000,
    "min": 3000,
    "modal": 3500,
    "variety": "Other"
  },
  {
    "crop": "tamatar",
    "date": "2026-09-27",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "tarori",
    "max": 4000,
    "min": 3000,
    "modal": 3500,
    "variety": "Other"
  },
  {
    "crop": "aalu",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 750,
    "min": 601,
    "modal": 750,
    "variety": "Potato"
  },
  {
    "crop": "aalu",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "ujjain",
    "max": 879,
    "min": 150,
    "modal": 879,
    "variety": "Potato"
  },
  {
    "crop": "arhar",
    "date": "2026-09-10",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 4300,
    "min": 4300,
    "modal": 4300,
    "variety": "Arhar Dal(Tur)"
  },
  {
    "crop": "chana",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 7259,
    "min": 7259,
    "modal": 7259,
    "variety": "Dollar Gram"
  },
  {
    "crop": "chana",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 3450,
    "min": 3450,
    "modal": 3450,
    "variety": "Gram"
  },
  {
    "crop": "chana",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "ujjain",
    "max": 5800,
    "min": 5800,
    "modal": 5800,
    "variety": "Gram"
  },
  {
    "crop": "dhan",
    "date": "2026-09-27",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 3500,
    "min": 3500,
    "modal": 3500,
    "variety": "Paddy"
  },
  {
    "crop": "gehun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 3074,
    "min": 1950,
    "modal": 2600,
    "variety": "Wheat"
  },
  {
    "crop": "gehun",
    "date": "2026-09-19",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "ujjain",
    "max": 2400,
    "min": 2400,
    "modal": 2400,
    "variety": "Wheat"
  },
  {
    "crop": "hara-matar",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 4111,
    "min": 4035,
    "modal": 4111,
    "variety": "Pea"
  },
  {
    "crop": "lahsun",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 16600,
    "min": 2000,
    "modal": 6000,
    "variety": "Garlic"
  },
  {
    "crop": "makka",
    "date": "2026-09-09",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 2210,
    "min": 2210,
    "modal": 2210,
    "variety": "Local"
  },
  {
    "crop": "methi",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 4401,
    "min": 4401,
    "modal": 4401,
    "variety": "Methiseeds"
  },
  {
    "crop": "moong",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 7800,
    "min": 5001,
    "modal": 7800,
    "variety": "Green (Whole)"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 3900,
    "min": 625,
    "modal": 3000,
    "variety": "Onion"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "Non-FAQ",
    "mandi": "ujjain",
    "max": 3869,
    "min": 904,
    "modal": 3000,
    "variety": "Onion"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-10",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 2929,
    "min": 2929,
    "modal": 2929,
    "variety": "Onion-Organic"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-02",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 2589,
    "min": 2589,
    "modal": 2589,
    "variety": "Small - I"
  },
  {
    "crop": "pyaz",
    "date": "2026-09-15",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 3662,
    "min": 3662,
    "modal": 3662,
    "variety": "White"
  },
  {
    "crop": "sarson",
    "date": "2026-09-16",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 7171,
    "min": 7171,
    "modal": 7171,
    "variety": "Mustard"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 5911,
    "min": 3500,
    "modal": 5600,
    "variety": "Soyabeen"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-18",
    "fresh": false,
    "grade": "Non-FAQ",
    "mandi": "ujjain",
    "max": 6911,
    "min": 4400,
    "modal": 6911,
    "variety": "Soyabeen"
  },
  {
    "crop": "soyabean",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 5570,
    "min": 5325,
    "modal": 5430,
    "variety": "Yellow"
  },
  {
    "crop": "til",
    "date": "2026-09-23",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 9541,
    "min": 7400,
    "modal": 9541,
    "variety": "Sesame"
  },
  {
    "crop": "urad",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "ujjain",
    "max": 8231,
    "min": 7011,
    "modal": 8231,
    "variety": "Urda/Urd"
  },
  {
    "crop": "dhaniya",
    "date": "2026-09-22",
    "fresh": false,
    "grade": "FAQ",
    "mandi": "unjha",
    "max": 12000,
    "min": 12000,
    "modal": 12000,
    "variety": "Coriander Seed"
  },
  {
    "crop": "isabgol",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "unjha",
    "max": 15750,
    "min": 10375,
    "modal": 13500,
    "variety": "Isabgul (Psyllium)"
  },
  {
    "crop": "jeera",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "unjha",
    "max": 24000,
    "min": 18300,
    "modal": 20950,
    "variety": "Cummin Seed(Jeera)"
  },
  {
    "crop": "methi",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "unjha",
    "max": 6500,
    "min": 6500,
    "modal": 6500,
    "variety": "Methiseeds"
  },
  {
    "crop": "sarson",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "unjha",
    "max": 7710,
    "min": 7600,
    "modal": 7650,
    "variety": "Mustard"
  },
  {
    "crop": "sarson",
    "date": "2026-09-29",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "unjha",
    "max": 8750,
    "min": 8750,
    "modal": 8750,
    "variety": "Other"
  },
  {
    "crop": "saunf",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "unjha",
    "max": 23000,
    "min": 7900,
    "modal": 11000,
    "variety": "Soanf"
  },
  {
    "crop": "sua",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "unjha",
    "max": 9700,
    "min": 7280,
    "modal": 9050,
    "variety": "Suva (Dill Seed)"
  },
  {
    "crop": "til",
    "date": "2026-09-30",
    "fresh": true,
    "grade": "FAQ",
    "mandi": "unjha",
    "max": 12765,
    "min": 12430,
    "modal": 12650,
    "variety": "White"
  }
];

MB.cropModalHistory = {
  "aalu": [
    {
      "date": "2026-09-21",
      "mandis": 16,
      "modal": 650
    },
    {
      "date": "2026-09-22",
      "mandis": 13,
      "modal": 800
    },
    {
      "date": "2026-09-23",
      "mandis": 14,
      "modal": 664
    },
    {
      "date": "2026-09-24",
      "mandis": 15,
      "modal": 800
    },
    {
      "date": "2026-09-25",
      "mandis": 15,
      "modal": 900
    },
    {
      "date": "2026-09-26",
      "mandis": 25,
      "modal": 650
    },
    {
      "date": "2026-09-27",
      "mandis": 26,
      "modal": 675
    },
    {
      "date": "2026-09-28",
      "mandis": 26,
      "modal": 738
    },
    {
      "date": "2026-09-29",
      "mandis": 24,
      "modal": 644
    },
    {
      "date": "2026-09-30",
      "mandis": 22,
      "modal": 662
    }
  ],
  "adrak": [
    {
      "date": "2026-09-21",
      "mandis": 4,
      "modal": 8250
    },
    {
      "date": "2026-09-22",
      "mandis": 4,
      "modal": 8250
    },
    {
      "date": "2026-09-23",
      "mandis": 5,
      "modal": 10000
    },
    {
      "date": "2026-09-24",
      "mandis": 4,
      "modal": 8250
    },
    {
      "date": "2026-09-25",
      "mandis": 4,
      "modal": 9250
    },
    {
      "date": "2026-09-26",
      "mandis": 8,
      "modal": 6250
    },
    {
      "date": "2026-09-27",
      "mandis": 8,
      "modal": 6250
    },
    {
      "date": "2026-09-28",
      "mandis": 13,
      "modal": 7107
    },
    {
      "date": "2026-09-29",
      "mandis": 8,
      "modal": 4400
    },
    {
      "date": "2026-09-30",
      "mandis": 10,
      "modal": 5053
    }
  ],
  "alsi": [
    {
      "date": "2026-09-21",
      "mandis": 5,
      "modal": 9300
    },
    {
      "date": "2026-09-22",
      "mandis": 4,
      "modal": 9050
    },
    {
      "date": "2026-09-23",
      "mandis": 4,
      "modal": 9000
    },
    {
      "date": "2026-09-24",
      "mandis": 5,
      "modal": 9301
    },
    {
      "date": "2026-09-25",
      "mandis": 5,
      "modal": 9301
    },
    {
      "date": "2026-09-26",
      "mandis": 5,
      "modal": 9301
    },
    {
      "date": "2026-09-27",
      "mandis": 5,
      "modal": 9301
    },
    {
      "date": "2026-09-28",
      "mandis": 5,
      "modal": 9150
    },
    {
      "date": "2026-09-29",
      "mandis": 5,
      "modal": 9030
    },
    {
      "date": "2026-09-30",
      "mandis": 5,
      "modal": 9150
    }
  ],
  "amrood": [
    {
      "date": "2026-09-21",
      "mandis": 5,
      "modal": 2500
    },
    {
      "date": "2026-09-22",
      "mandis": 5,
      "modal": 3000
    },
    {
      "date": "2026-09-23",
      "mandis": 5,
      "modal": 3000
    },
    {
      "date": "2026-09-24",
      "mandis": 5,
      "modal": 3000
    },
    {
      "date": "2026-09-25",
      "mandis": 5,
      "modal": 3000
    },
    {
      "date": "2026-09-26",
      "mandis": 5,
      "modal": 3500
    },
    {
      "date": "2026-09-27",
      "mandis": 5,
      "modal": 3500
    },
    {
      "date": "2026-09-28",
      "mandis": 5,
      "modal": 3500
    },
    {
      "date": "2026-09-29",
      "mandis": 3,
      "modal": 3000
    },
    {
      "date": "2026-09-30",
      "mandis": 2,
      "modal": 5500
    }
  ],
  "anar": [
    {
      "date": "2026-09-21",
      "mandis": 7,
      "modal": 8000
    },
    {
      "date": "2026-09-22",
      "mandis": 6,
      "modal": 8500
    },
    {
      "date": "2026-09-23",
      "mandis": 7,
      "modal": 8000
    },
    {
      "date": "2026-09-24",
      "mandis": 7,
      "modal": 8000
    },
    {
      "date": "2026-09-25",
      "mandis": 7,
      "modal": 8000
    },
    {
      "date": "2026-09-26",
      "mandis": 6,
      "modal": 8500
    },
    {
      "date": "2026-09-27",
      "mandis": 6,
      "modal": 8500
    },
    {
      "date": "2026-09-28",
      "mandis": 5,
      "modal": 8000
    },
    {
      "date": "2026-09-29",
      "mandis": 5,
      "modal": 9000
    },
    {
      "date": "2026-09-30",
      "mandis": 5,
      "modal": 10000
    }
  ],
  "arandi": [
    {
      "date": "2026-09-21",
      "mandis": 6,
      "modal": 7388
    },
    {
      "date": "2026-09-22",
      "mandis": 6,
      "modal": 7378
    },
    {
      "date": "2026-09-23",
      "mandis": 6,
      "modal": 7528
    },
    {
      "date": "2026-09-24",
      "mandis": 6,
      "modal": 7425
    },
    {
      "date": "2026-09-25",
      "mandis": 6,
      "modal": 7388
    },
    {
      "date": "2026-09-26",
      "mandis": 6,
      "modal": 7415
    },
    {
      "date": "2026-09-27",
      "mandis": 6,
      "modal": 7415
    },
    {
      "date": "2026-09-28",
      "mandis": 6,
      "modal": 7402
    },
    {
      "date": "2026-09-29",
      "mandis": 2,
      "modal": 7150
    },
    {
      "date": "2026-09-30",
      "mandis": 2,
      "modal": 7268
    }
  ],
  "arhar": [
    {
      "date": "2026-09-21",
      "mandis": 5,
      "modal": 7200
    },
    {
      "date": "2026-09-22",
      "mandis": 5,
      "modal": 8000
    },
    {
      "date": "2026-09-23",
      "mandis": 5,
      "modal": 8075
    },
    {
      "date": "2026-09-24",
      "mandis": 5,
      "modal": 8025
    },
    {
      "date": "2026-09-25",
      "mandis": 5,
      "modal": 7150
    },
    {
      "date": "2026-09-26",
      "mandis": 8,
      "modal": 6938
    },
    {
      "date": "2026-09-27",
      "mandis": 8,
      "modal": 6938
    },
    {
      "date": "2026-09-28",
      "mandis": 6,
      "modal": 7325
    },
    {
      "date": "2026-09-29",
      "mandis": 3,
      "modal": 7450
    },
    {
      "date": "2026-09-30",
      "mandis": 4,
      "modal": 7670
    }
  ],
  "asaliya": [
    {
      "date": "2026-09-21",
      "mandis": 2,
      "modal": 5940
    },
    {
      "date": "2026-09-22",
      "mandis": 1,
      "modal": 6355
    },
    {
      "date": "2026-09-23",
      "mandis": 1,
      "modal": 6427
    },
    {
      "date": "2026-09-24",
      "mandis": 1,
      "modal": 6340
    },
    {
      "date": "2026-09-25",
      "mandis": 2,
      "modal": 6045
    },
    {
      "date": "2026-09-26",
      "mandis": 2,
      "modal": 6045
    },
    {
      "date": "2026-09-27",
      "mandis": 2,
      "modal": 6045
    },
    {
      "date": "2026-09-28",
      "mandis": 1,
      "modal": 6300
    },
    {
      "date": "2026-09-29",
      "mandis": 1,
      "modal": 5756
    },
    {
      "date": "2026-09-30",
      "mandis": 1,
      "modal": 5921
    }
  ],
  "bajra": [
    {
      "date": "2026-09-21",
      "mandis": 11,
      "modal": 2082
    },
    {
      "date": "2026-09-22",
      "mandis": 13,
      "modal": 2150
    },
    {
      "date": "2026-09-23",
      "mandis": 12,
      "modal": 2178
    },
    {
      "date": "2026-09-24",
      "mandis": 14,
      "modal": 2200
    },
    {
      "date": "2026-09-25",
      "mandis": 13,
      "modal": 2191
    },
    {
      "date": "2026-09-26",
      "mandis": 18,
      "modal": 2108
    },
    {
      "date": "2026-09-27",
      "mandis": 17,
      "modal": 2125
    },
    {
      "date": "2026-09-28",
      "mandis": 17,
      "modal": 2115
    },
    {
      "date": "2026-09-29",
      "mandis": 10,
      "modal": 2110
    },
    {
      "date": "2026-09-30",
      "mandis": 11,
      "modal": 2176
    }
  ],
  "chana": [
    {
      "date": "2026-09-21",
      "mandis": 15,
      "modal": 6275
    },
    {
      "date": "2026-09-22",
      "mandis": 16,
      "modal": 6071
    },
    {
      "date": "2026-09-23",
      "mandis": 17,
      "modal": 6171
    },
    {
      "date": "2026-09-24",
      "mandis": 20,
      "modal": 6410
    },
    {
      "date": "2026-09-25",
      "mandis": 20,
      "modal": 6266
    },
    {
      "date": "2026-09-26",
      "mandis": 20,
      "modal": 6341
    },
    {
      "date": "2026-09-27",
      "mandis": 19,
      "modal": 6500
    },
    {
      "date": "2026-09-28",
      "mandis": 14,
      "modal": 6526
    },
    {
      "date": "2026-09-29",
      "mandis": 12,
      "modal": 6425
    },
    {
      "date": "2026-09-30",
      "mandis": 12,
      "modal": 6664
    }
  ],
  "dhan": [
    {
      "date": "2026-09-21",
      "mandis": 4,
      "modal": 3695
    },
    {
      "date": "2026-09-22",
      "mandis": 5,
      "modal": 3800
    },
    {
      "date": "2026-09-23",
      "mandis": 5,
      "modal": 3831
    },
    {
      "date": "2026-09-24",
      "mandis": 5,
      "modal": 3831
    },
    {
      "date": "2026-09-25",
      "mandis": 5,
      "modal": 3900
    },
    {
      "date": "2026-09-26",
      "mandis": 15,
      "modal": 3435
    },
    {
      "date": "2026-09-27",
      "mandis": 15,
      "modal": 3400
    },
    {
      "date": "2026-09-28",
      "mandis": 15,
      "modal": 3401
    },
    {
      "date": "2026-09-29",
      "mandis": 13,
      "modal": 3528
    },
    {
      "date": "2026-09-30",
      "mandis": 15,
      "modal": 3400
    }
  ],
  "dhaniya": [
    {
      "date": "2026-09-21",
      "mandis": 4,
      "modal": 13726
    },
    {
      "date": "2026-09-22",
      "mandis": 6,
      "modal": 13155
    },
    {
      "date": "2026-09-23",
      "mandis": 6,
      "modal": 13150
    },
    {
      "date": "2026-09-24",
      "mandis": 6,
      "modal": 13452
    },
    {
      "date": "2026-09-25",
      "mandis": 6,
      "modal": 13478
    },
    {
      "date": "2026-09-26",
      "mandis": 5,
      "modal": 13700
    },
    {
      "date": "2026-09-27",
      "mandis": 5,
      "modal": 13700
    },
    {
      "date": "2026-09-28",
      "mandis": 4,
      "modal": 13838
    },
    {
      "date": "2026-09-29",
      "mandis": 4,
      "modal": 13600
    },
    {
      "date": "2026-09-30",
      "mandis": 4,
      "modal": 13476
    }
  ],
  "gehun": [
    {
      "date": "2026-09-21",
      "mandis": 24,
      "modal": 2720
    },
    {
      "date": "2026-09-22",
      "mandis": 24,
      "modal": 2700
    },
    {
      "date": "2026-09-23",
      "mandis": 24,
      "modal": 2728
    },
    {
      "date": "2026-09-24",
      "mandis": 25,
      "modal": 2714
    },
    {
      "date": "2026-09-25",
      "mandis": 25,
      "modal": 2714
    },
    {
      "date": "2026-09-26",
      "mandis": 35,
      "modal": 2685
    },
    {
      "date": "2026-09-27",
      "mandis": 34,
      "modal": 2667
    },
    {
      "date": "2026-09-28",
      "mandis": 33,
      "modal": 2670
    },
    {
      "date": "2026-09-29",
      "mandis": 25,
      "modal": 2600
    },
    {
      "date": "2026-09-30",
      "mandis": 24,
      "modal": 2646
    }
  ],
  "gwar": [
    {
      "date": "2026-09-21",
      "mandis": 9,
      "modal": 6415
    },
    {
      "date": "2026-09-22",
      "mandis": 11,
      "modal": 6400
    },
    {
      "date": "2026-09-23",
      "mandis": 11,
      "modal": 6300
    },
    {
      "date": "2026-09-24",
      "mandis": 11,
      "modal": 6300
    },
    {
      "date": "2026-09-25",
      "mandis": 11,
      "modal": 6300
    },
    {
      "date": "2026-09-26",
      "mandis": 9,
      "modal": 6338
    },
    {
      "date": "2026-09-27",
      "mandis": 9,
      "modal": 6338
    },
    {
      "date": "2026-09-28",
      "mandis": 7,
      "modal": 6101
    },
    {
      "date": "2026-09-29",
      "mandis": 4,
      "modal": 5925
    },
    {
      "date": "2026-09-30",
      "mandis": 2,
      "modal": 6448
    }
  ],
  "gwarphali": [
    {
      "date": "2026-09-21",
      "mandis": 2,
      "modal": 3750
    },
    {
      "date": "2026-09-22",
      "mandis": 2,
      "modal": 3750
    },
    {
      "date": "2026-09-23",
      "mandis": 2,
      "modal": 3700
    },
    {
      "date": "2026-09-24",
      "mandis": 2,
      "modal": 3900
    },
    {
      "date": "2026-09-25",
      "mandis": 2,
      "modal": 4000
    },
    {
      "date": "2026-09-26",
      "mandis": 2,
      "modal": 4000
    },
    {
      "date": "2026-09-27",
      "mandis": 2,
      "modal": 4000
    },
    {
      "date": "2026-09-28",
      "mandis": 2,
      "modal": 3750
    },
    {
      "date": "2026-09-29",
      "mandis": 2,
      "modal": 4000
    },
    {
      "date": "2026-09-30",
      "mandis": 2,
      "modal": 3750
    }
  ],
  "haldi": [
    {
      "date": "2026-08-30",
      "mandis": 1,
      "modal": 14285
    },
    {
      "date": "2026-09-15",
      "mandis": 1,
      "modal": 12381
    },
    {
      "date": "2026-09-22",
      "mandis": 1,
      "modal": 15200
    },
    {
      "date": "2026-09-23",
      "mandis": 1,
      "modal": 15200
    },
    {
      "date": "2026-09-24",
      "mandis": 1,
      "modal": 15200
    },
    {
      "date": "2026-09-26",
      "mandis": 2,
      "modal": 14412
    },
    {
      "date": "2026-09-27",
      "mandis": 2,
      "modal": 14412
    },
    {
      "date": "2026-09-28",
      "mandis": 3,
      "modal": 12396
    },
    {
      "date": "2026-09-29",
      "mandis": 3,
      "modal": 12843
    },
    {
      "date": "2026-09-30",
      "mandis": 4,
      "modal": 12344
    }
  ],
  "hara-dhaniya": [
    {
      "date": "2026-09-21",
      "mandis": 5,
      "modal": 13580
    },
    {
      "date": "2026-09-22",
      "mandis": 4,
      "modal": 8250
    },
    {
      "date": "2026-09-23",
      "mandis": 4,
      "modal": 8250
    },
    {
      "date": "2026-09-24",
      "mandis": 4,
      "modal": 9250
    },
    {
      "date": "2026-09-25",
      "mandis": 4,
      "modal": 9250
    },
    {
      "date": "2026-09-26",
      "mandis": 9,
      "modal": 9551
    },
    {
      "date": "2026-09-27",
      "mandis": 9,
      "modal": 8000
    },
    {
      "date": "2026-09-28",
      "mandis": 8,
      "modal": 7750
    },
    {
      "date": "2026-09-29",
      "mandis": 6,
      "modal": 12140
    },
    {
      "date": "2026-09-30",
      "mandis": 6,
      "modal": 10120
    }
  ],
  "hara-matar": [
    {
      "date": "2026-09-21",
      "mandis": 7,
      "modal": 3790
    },
    {
      "date": "2026-09-22",
      "mandis": 7,
      "modal": 3930
    },
    {
      "date": "2026-09-23",
      "mandis": 7,
      "modal": 4000
    },
    {
      "date": "2026-09-24",
      "mandis": 7,
      "modal": 3905
    },
    {
      "date": "2026-09-25",
      "mandis": 7,
      "modal": 4025
    },
    {
      "date": "2026-09-26",
      "mandis": 9,
      "modal": 4025
    },
    {
      "date": "2026-09-27",
      "mandis": 9,
      "modal": 4025
    },
    {
      "date": "2026-09-28",
      "mandis": 7,
      "modal": 4035
    },
    {
      "date": "2026-09-29",
      "mandis": 8,
      "modal": 3500
    },
    {
      "date": "2026-09-30",
      "mandis": 8,
      "modal": 3926
    }
  ],
  "hari-methi": [
    {
      "date": "2026-08-27",
      "mandis": 1,
      "modal": 1800
    },
    {
      "date": "2026-08-28",
      "mandis": 1,
      "modal": 1800
    },
    {
      "date": "2026-08-29",
      "mandis": 1,
      "modal": 1800
    },
    {
      "date": "2026-08-30",
      "mandis": 1,
      "modal": 1800
    }
  ],
  "hari-mirch": [
    {
      "date": "2026-09-21",
      "mandis": 4,
      "modal": 2750
    },
    {
      "date": "2026-09-22",
      "mandis": 4,
      "modal": 2900
    },
    {
      "date": "2026-09-23",
      "mandis": 4,
      "modal": 2900
    },
    {
      "date": "2026-09-24",
      "mandis": 4,
      "modal": 2800
    },
    {
      "date": "2026-09-25",
      "mandis": 4,
      "modal": 3300
    },
    {
      "date": "2026-09-26",
      "mandis": 11,
      "modal": 2621
    },
    {
      "date": "2026-09-27",
      "mandis": 12,
      "modal": 2610
    },
    {
      "date": "2026-09-28",
      "mandis": 15,
      "modal": 3826
    },
    {
      "date": "2026-09-29",
      "mandis": 11,
      "modal": 2563
    },
    {
      "date": "2026-09-30",
      "mandis": 11,
      "modal": 2543
    }
  ],
  "isabgol": [
    {
      "date": "2026-09-21",
      "mandis": 7,
      "modal": 11500
    },
    {
      "date": "2026-09-22",
      "mandis": 8,
      "modal": 11762
    },
    {
      "date": "2026-09-23",
      "mandis": 8,
      "modal": 11962
    },
    {
      "date": "2026-09-24",
      "mandis": 9,
      "modal": 12000
    },
    {
      "date": "2026-09-25",
      "mandis": 8,
      "modal": 12106
    },
    {
      "date": "2026-09-26",
      "mandis": 7,
      "modal": 12213
    },
    {
      "date": "2026-09-27",
      "mandis": 7,
      "modal": 12213
    },
    {
      "date": "2026-09-28",
      "mandis": 6,
      "modal": 11350
    },
    {
      "date": "2026-09-29",
      "mandis": 4,
      "modal": 12226
    },
    {
      "date": "2026-09-30",
      "mandis": 3,
      "modal": 12700
    }
  ],
  "jau": [
    {
      "date": "2026-09-21",
      "mandis": 7,
      "modal": 2655
    },
    {
      "date": "2026-09-22",
      "mandis": 6,
      "modal": 2620
    },
    {
      "date": "2026-09-23",
      "mandis": 5,
      "modal": 2800
    },
    {
      "date": "2026-09-24",
      "mandis": 5,
      "modal": 2650
    },
    {
      "date": "2026-09-25",
      "mandis": 5,
      "modal": 2851
    },
    {
      "date": "2026-09-26",
      "mandis": 5,
      "modal": 2851
    },
    {
      "date": "2026-09-27",
      "mandis": 5,
      "modal": 2851
    },
    {
      "date": "2026-09-28",
      "mandis": 5,
      "modal": 2854
    },
    {
      "date": "2026-09-29",
      "mandis": 5,
      "modal": 2576
    },
    {
      "date": "2026-09-30",
      "mandis": 8,
      "modal": 2835
    }
  ],
  "jeera": [
    {
      "date": "2026-09-21",
      "mandis": 8,
      "modal": 19522
    },
    {
      "date": "2026-09-22",
      "mandis": 10,
      "modal": 19528
    },
    {
      "date": "2026-09-23",
      "mandis": 10,
      "modal": 19528
    },
    {
      "date": "2026-09-24",
      "mandis": 12,
      "modal": 19415
    },
    {
      "date": "2026-09-25",
      "mandis": 12,
      "modal": 19802
    },
    {
      "date": "2026-09-26",
      "mandis": 11,
      "modal": 20055
    },
    {
      "date": "2026-09-27",
      "mandis": 11,
      "modal": 19875
    },
    {
      "date": "2026-09-28",
      "mandis": 9,
      "modal": 19805
    },
    {
      "date": "2026-09-29",
      "mandis": 4,
      "modal": 19625
    },
    {
      "date": "2026-09-30",
      "mandis": 2,
      "modal": 20375
    }
  ],
  "jowar": [
    {
      "date": "2026-09-21",
      "mandis": 3,
      "modal": 6450
    },
    {
      "date": "2026-09-22",
      "mandis": 5,
      "modal": 6500
    },
    {
      "date": "2026-09-23",
      "mandis": 5,
      "modal": 5305
    },
    {
      "date": "2026-09-24",
      "mandis": 5,
      "modal": 6125
    },
    {
      "date": "2026-09-25",
      "mandis": 3,
      "modal": 6155
    },
    {
      "date": "2026-09-26",
      "mandis": 4,
      "modal": 4275
    },
    {
      "date": "2026-09-27",
      "mandis": 4,
      "modal": 4275
    },
    {
      "date": "2026-09-28",
      "mandis": 4,
      "modal": 6875
    },
    {
      "date": "2026-09-29",
      "mandis": 3,
      "modal": 2375
    },
    {
      "date": "2026-09-30",
      "mandis": 6,
      "modal": 3450
    }
  ],
  "kalonji": [
    {
      "date": "2026-09-21",
      "mandis": 2,
      "modal": 17940
    },
    {
      "date": "2026-09-22",
      "mandis": 2,
      "modal": 17335
    },
    {
      "date": "2026-09-23",
      "mandis": 2,
      "modal": 19511
    },
    {
      "date": "2026-09-24",
      "mandis": 2,
      "modal": 20665
    },
    {
      "date": "2026-09-25",
      "mandis": 2,
      "modal": 20665
    },
    {
      "date": "2026-09-26",
      "mandis": 2,
      "modal": 20665
    },
    {
      "date": "2026-09-27",
      "mandis": 2,
      "modal": 20665
    },
    {
      "date": "2026-09-28",
      "mandis": 2,
      "modal": 20450
    },
    {
      "date": "2026-09-29",
      "mandis": 2,
      "modal": 20640
    },
    {
      "date": "2026-09-30",
      "mandis": 2,
      "modal": 21470
    }
  ],
  "kapas": [
    {
      "date": "2026-09-21",
      "mandis": 8,
      "modal": 8822
    },
    {
      "date": "2026-09-22",
      "mandis": 11,
      "modal": 8750
    },
    {
      "date": "2026-09-23",
      "mandis": 11,
      "modal": 8750
    },
    {
      "date": "2026-09-24",
      "mandis": 11,
      "modal": 8640
    },
    {
      "date": "2026-09-25",
      "mandis": 11,
      "modal": 8625
    },
    {
      "date": "2026-09-26",
      "mandis": 13,
      "modal": 8650
    },
    {
      "date": "2026-09-27",
      "mandis": 13,
      "modal": 8650
    },
    {
      "date": "2026-09-28",
      "mandis": 13,
      "modal": 8600
    },
    {
      "date": "2026-09-29",
      "mandis": 4,
      "modal": 8575
    },
    {
      "date": "2026-09-30",
      "mandis": 4,
      "modal": 8625
    }
  ],
  "kela": [
    {
      "date": "2026-09-21",
      "mandis": 9,
      "modal": 2500
    },
    {
      "date": "2026-09-22",
      "mandis": 9,
      "modal": 2500
    },
    {
      "date": "2026-09-23",
      "mandis": 9,
      "modal": 2500
    },
    {
      "date": "2026-09-24",
      "mandis": 9,
      "modal": 2500
    },
    {
      "date": "2026-09-25",
      "mandis": 9,
      "modal": 2500
    },
    {
      "date": "2026-09-26",
      "mandis": 9,
      "modal": 2500
    },
    {
      "date": "2026-09-27",
      "mandis": 9,
      "modal": 2500
    },
    {
      "date": "2026-09-28",
      "mandis": 8,
      "modal": 2350
    },
    {
      "date": "2026-09-29",
      "mandis": 8,
      "modal": 2350
    },
    {
      "date": "2026-09-30",
      "mandis": 7,
      "modal": 2500
    }
  ],
  "lahsun": [
    {
      "date": "2026-09-21",
      "mandis": 12,
      "modal": 8250
    },
    {
      "date": "2026-09-22",
      "mandis": 13,
      "modal": 9000
    },
    {
      "date": "2026-09-23",
      "mandis": 13,
      "modal": 10850
    },
    {
      "date": "2026-09-24",
      "mandis": 13,
      "modal": 8500
    },
    {
      "date": "2026-09-25",
      "mandis": 12,
      "modal": 9788
    },
    {
      "date": "2026-09-26",
      "mandis": 19,
      "modal": 9000
    },
    {
      "date": "2026-09-27",
      "mandis": 19,
      "modal": 9000
    },
    {
      "date": "2026-09-28",
      "mandis": 23,
      "modal": 9000
    },
    {
      "date": "2026-09-29",
      "mandis": 19,
      "modal": 8200
    },
    {
      "date": "2026-09-30",
      "mandis": 22,
      "modal": 9500
    }
  ],
  "makka": [
    {
      "date": "2026-09-21",
      "mandis": 8,
      "modal": 2381
    },
    {
      "date": "2026-09-22",
      "mandis": 8,
      "modal": 2040
    },
    {
      "date": "2026-09-23",
      "mandis": 9,
      "modal": 2226
    },
    {
      "date": "2026-09-24",
      "mandis": 10,
      "modal": 2336
    },
    {
      "date": "2026-09-25",
      "mandis": 10,
      "modal": 2336
    },
    {
      "date": "2026-09-26",
      "mandis": 14,
      "modal": 2124
    },
    {
      "date": "2026-09-27",
      "mandis": 14,
      "modal": 2195
    },
    {
      "date": "2026-09-28",
      "mandis": 14,
      "modal": 1950
    },
    {
      "date": "2026-09-29",
      "mandis": 12,
      "modal": 2075
    },
    {
      "date": "2026-09-30",
      "mandis": 13,
      "modal": 2301
    }
  ],
  "masoor": [
    {
      "date": "2026-09-21",
      "mandis": 3,
      "modal": 7101
    },
    {
      "date": "2026-09-22",
      "mandis": 2,
      "modal": 6650
    },
    {
      "date": "2026-09-23",
      "mandis": 3,
      "modal": 7351
    },
    {
      "date": "2026-09-24",
      "mandis": 3,
      "modal": 5500
    },
    {
      "date": "2026-09-25",
      "mandis": 3,
      "modal": 5500
    },
    {
      "date": "2026-09-26",
      "mandis": 3,
      "modal": 5500
    },
    {
      "date": "2026-09-27",
      "mandis": 2,
      "modal": 6585
    },
    {
      "date": "2026-09-28",
      "mandis": 3,
      "modal": 7630
    },
    {
      "date": "2026-09-29",
      "mandis": 3,
      "modal": 6500
    },
    {
      "date": "2026-09-30",
      "mandis": 2,
      "modal": 7576
    }
  ],
  "matar": [
    {
      "date": "2026-08-31",
      "mandis": 1,
      "modal": 8300
    },
    {
      "date": "2026-09-01",
      "mandis": 1,
      "modal": 8300
    },
    {
      "date": "2026-09-02",
      "mandis": 1,
      "modal": 8300
    },
    {
      "date": "2026-09-03",
      "mandis": 1,
      "modal": 8300
    }
  ],
  "methi": [
    {
      "date": "2026-09-21",
      "mandis": 12,
      "modal": 6250
    },
    {
      "date": "2026-09-22",
      "mandis": 12,
      "modal": 5900
    },
    {
      "date": "2026-09-23",
      "mandis": 14,
      "modal": 6050
    },
    {
      "date": "2026-09-24",
      "mandis": 15,
      "modal": 6000
    },
    {
      "date": "2026-09-25",
      "mandis": 15,
      "modal": 6115
    },
    {
      "date": "2026-09-26",
      "mandis": 15,
      "modal": 6300
    },
    {
      "date": "2026-09-27",
      "mandis": 11,
      "modal": 6400
    },
    {
      "date": "2026-09-28",
      "mandis": 13,
      "modal": 6400
    },
    {
      "date": "2026-09-29",
      "mandis": 9,
      "modal": 6400
    },
    {
      "date": "2026-09-30",
      "mandis": 10,
      "modal": 6875
    }
  ],
  "mirch": [
    {
      "date": "2026-09-21",
      "mandis": 4,
      "modal": 21195
    },
    {
      "date": "2026-09-22",
      "mandis": 3,
      "modal": 13709
    },
    {
      "date": "2026-09-23",
      "mandis": 2,
      "modal": 19450
    },
    {
      "date": "2026-09-24",
      "mandis": 3,
      "modal": 16000
    },
    {
      "date": "2026-09-25",
      "mandis": 3,
      "modal": 16000
    },
    {
      "date": "2026-09-26",
      "mandis": 7,
      "modal": 16000
    },
    {
      "date": "2026-09-27",
      "mandis": 6,
      "modal": 14000
    },
    {
      "date": "2026-09-28",
      "mandis": 7,
      "modal": 12000
    },
    {
      "date": "2026-09-29",
      "mandis": 5,
      "modal": 14460
    },
    {
      "date": "2026-09-30",
      "mandis": 8,
      "modal": 12736
    }
  ],
  "moong": [
    {
      "date": "2026-09-21",
      "mandis": 19,
      "modal": 7281
    },
    {
      "date": "2026-09-22",
      "mandis": 20,
      "modal": 7550
    },
    {
      "date": "2026-09-23",
      "mandis": 21,
      "modal": 7555
    },
    {
      "date": "2026-09-24",
      "mandis": 23,
      "modal": 7800
    },
    {
      "date": "2026-09-25",
      "mandis": 24,
      "modal": 7788
    },
    {
      "date": "2026-09-26",
      "mandis": 30,
      "modal": 8000
    },
    {
      "date": "2026-09-27",
      "mandis": 28,
      "modal": 7800
    },
    {
      "date": "2026-09-28",
      "mandis": 24,
      "modal": 7878
    },
    {
      "date": "2026-09-29",
      "mandis": 14,
      "modal": 7800
    },
    {
      "date": "2026-09-30",
      "mandis": 12,
      "modal": 7628
    }
  ],
  "moongphali": [
    {
      "date": "2026-09-21",
      "mandis": 10,
      "modal": 7450
    },
    {
      "date": "2026-09-22",
      "mandis": 8,
      "modal": 7110
    },
    {
      "date": "2026-09-23",
      "mandis": 9,
      "modal": 7275
    },
    {
      "date": "2026-09-24",
      "mandis": 9,
      "modal": 7200
    },
    {
      "date": "2026-09-25",
      "mandis": 9,
      "modal": 7200
    },
    {
      "date": "2026-09-26",
      "mandis": 11,
      "modal": 7200
    },
    {
      "date": "2026-09-27",
      "mandis": 12,
      "modal": 6900
    },
    {
      "date": "2026-09-28",
      "mandis": 14,
      "modal": 7301
    },
    {
      "date": "2026-09-29",
      "mandis": 8,
      "modal": 6875
    },
    {
      "date": "2026-09-30",
      "mandis": 9,
      "modal": 7200
    }
  ],
  "moth": [
    {
      "date": "2026-08-22",
      "mandis": 5,
      "modal": 4400
    },
    {
      "date": "2026-08-23",
      "mandis": 5,
      "modal": 4400
    },
    {
      "date": "2026-08-24",
      "mandis": 5,
      "modal": 4400
    },
    {
      "date": "2026-08-25",
      "mandis": 5,
      "modal": 4400
    }
  ],
  "pyaz": [
    {
      "date": "2026-09-21",
      "mandis": 19,
      "modal": 3380
    },
    {
      "date": "2026-09-22",
      "mandis": 17,
      "modal": 3755
    },
    {
      "date": "2026-09-23",
      "mandis": 18,
      "modal": 3680
    },
    {
      "date": "2026-09-24",
      "mandis": 18,
      "modal": 3450
    },
    {
      "date": "2026-09-25",
      "mandis": 19,
      "modal": 3400
    },
    {
      "date": "2026-09-26",
      "mandis": 28,
      "modal": 3450
    },
    {
      "date": "2026-09-27",
      "mandis": 27,
      "modal": 3500
    },
    {
      "date": "2026-09-28",
      "mandis": 30,
      "modal": 3550
    },
    {
      "date": "2026-09-29",
      "mandis": 26,
      "modal": 3500
    },
    {
      "date": "2026-09-30",
      "mandis": 20,
      "modal": 3508
    }
  ],
  "rice": [
    {
      "date": "2026-09-21",
      "mandis": 1,
      "modal": 3000
    },
    {
      "date": "2026-09-22",
      "mandis": 1,
      "modal": 3300
    },
    {
      "date": "2026-09-23",
      "mandis": 1,
      "modal": 3043
    },
    {
      "date": "2026-09-24",
      "mandis": 1,
      "modal": 3388
    },
    {
      "date": "2026-09-25",
      "mandis": 1,
      "modal": 9565
    },
    {
      "date": "2026-09-26",
      "mandis": 8,
      "modal": 3606
    },
    {
      "date": "2026-09-27",
      "mandis": 9,
      "modal": 4863
    },
    {
      "date": "2026-09-28",
      "mandis": 9,
      "modal": 3559
    },
    {
      "date": "2026-09-29",
      "mandis": 7,
      "modal": 4200
    },
    {
      "date": "2026-09-30",
      "mandis": 7,
      "modal": 5002
    }
  ],
  "sarson": [
    {
      "date": "2026-09-21",
      "mandis": 22,
      "modal": 7500
    },
    {
      "date": "2026-09-22",
      "mandis": 23,
      "modal": 7500
    },
    {
      "date": "2026-09-23",
      "mandis": 23,
      "modal": 7491
    },
    {
      "date": "2026-09-24",
      "mandis": 24,
      "modal": 7512
    },
    {
      "date": "2026-09-25",
      "mandis": 23,
      "modal": 7580
    },
    {
      "date": "2026-09-26",
      "mandis": 23,
      "modal": 7550
    },
    {
      "date": "2026-09-27",
      "mandis": 24,
      "modal": 7550
    },
    {
      "date": "2026-09-28",
      "mandis": 23,
      "modal": 7550
    },
    {
      "date": "2026-09-29",
      "mandis": 14,
      "modal": 7620
    },
    {
      "date": "2026-09-30",
      "mandis": 15,
      "modal": 7610
    }
  ],
  "saunf": [
    {
      "date": "2026-09-21",
      "mandis": 4,
      "modal": 10275
    },
    {
      "date": "2026-09-22",
      "mandis": 4,
      "modal": 10475
    },
    {
      "date": "2026-09-23",
      "mandis": 4,
      "modal": 10550
    },
    {
      "date": "2026-09-24",
      "mandis": 5,
      "modal": 11000
    },
    {
      "date": "2026-09-25",
      "mandis": 5,
      "modal": 10875
    },
    {
      "date": "2026-09-26",
      "mandis": 6,
      "modal": 10925
    },
    {
      "date": "2026-09-27",
      "mandis": 7,
      "modal": 11000
    },
    {
      "date": "2026-09-28",
      "mandis": 7,
      "modal": 10625
    },
    {
      "date": "2026-09-29",
      "mandis": 3,
      "modal": 8450
    },
    {
      "date": "2026-09-30",
      "mandis": 5,
      "modal": 8501
    }
  ],
  "seb": [
    {
      "date": "2026-09-21",
      "mandis": 8,
      "modal": 6000
    },
    {
      "date": "2026-09-22",
      "mandis": 8,
      "modal": 6000
    },
    {
      "date": "2026-09-23",
      "mandis": 8,
      "modal": 6500
    },
    {
      "date": "2026-09-24",
      "mandis": 8,
      "modal": 6000
    },
    {
      "date": "2026-09-25",
      "mandis": 8,
      "modal": 6000
    },
    {
      "date": "2026-09-26",
      "mandis": 8,
      "modal": 6250
    },
    {
      "date": "2026-09-27",
      "mandis": 8,
      "modal": 6250
    },
    {
      "date": "2026-09-28",
      "mandis": 8,
      "modal": 6500
    },
    {
      "date": "2026-09-29",
      "mandis": 8,
      "modal": 6500
    },
    {
      "date": "2026-09-30",
      "mandis": 7,
      "modal": 6000
    }
  ],
  "soyabean": [
    {
      "date": "2026-09-21",
      "mandis": 12,
      "modal": 5588
    },
    {
      "date": "2026-09-22",
      "mandis": 13,
      "modal": 5555
    },
    {
      "date": "2026-09-23",
      "mandis": 13,
      "modal": 5500
    },
    {
      "date": "2026-09-24",
      "mandis": 13,
      "modal": 5500
    },
    {
      "date": "2026-09-25",
      "mandis": 13,
      "modal": 5500
    },
    {
      "date": "2026-09-26",
      "mandis": 13,
      "modal": 5454
    },
    {
      "date": "2026-09-27",
      "mandis": 13,
      "modal": 5500
    },
    {
      "date": "2026-09-28",
      "mandis": 13,
      "modal": 5400
    },
    {
      "date": "2026-09-29",
      "mandis": 12,
      "modal": 5448
    },
    {
      "date": "2026-09-30",
      "mandis": 11,
      "modal": 5550
    }
  ],
  "sua": [
    {
      "date": "2026-09-21",
      "mandis": 2,
      "modal": 8512
    },
    {
      "date": "2026-09-22",
      "mandis": 2,
      "modal": 8688
    },
    {
      "date": "2026-09-23",
      "mandis": 2,
      "modal": 8750
    },
    {
      "date": "2026-09-24",
      "mandis": 3,
      "modal": 9000
    },
    {
      "date": "2026-09-25",
      "mandis": 3,
      "modal": 8800
    },
    {
      "date": "2026-09-26",
      "mandis": 3,
      "modal": 8800
    },
    {
      "date": "2026-09-27",
      "mandis": 3,
      "modal": 8800
    },
    {
      "date": "2026-09-28",
      "mandis": 3,
      "modal": 8800
    },
    {
      "date": "2026-09-29",
      "mandis": 2,
      "modal": 8852
    },
    {
      "date": "2026-09-30",
      "mandis": 1,
      "modal": 9050
    }
  ],
  "sua-patti": [
    {
      "date": "2026-08-25",
      "mandis": 1,
      "modal": 5600
    },
    {
      "date": "2026-08-26",
      "mandis": 1,
      "modal": 5600
    },
    {
      "date": "2026-08-27",
      "mandis": 1,
      "modal": 5600
    },
    {
      "date": "2026-08-28",
      "mandis": 1,
      "modal": 5600
    }
  ],
  "tamatar": [
    {
      "date": "2026-09-21",
      "mandis": 12,
      "modal": 2200
    },
    {
      "date": "2026-09-22",
      "mandis": 12,
      "modal": 2650
    },
    {
      "date": "2026-09-23",
      "mandis": 13,
      "modal": 2500
    },
    {
      "date": "2026-09-24",
      "mandis": 13,
      "modal": 2500
    },
    {
      "date": "2026-09-25",
      "mandis": 13,
      "modal": 2400
    },
    {
      "date": "2026-09-26",
      "mandis": 19,
      "modal": 2000
    },
    {
      "date": "2026-09-27",
      "mandis": 19,
      "modal": 2000
    },
    {
      "date": "2026-09-28",
      "mandis": 22,
      "modal": 2152
    },
    {
      "date": "2026-09-29",
      "mandis": 19,
      "modal": 2000
    },
    {
      "date": "2026-09-30",
      "mandis": 20,
      "modal": 2000
    }
  ],
  "til": [
    {
      "date": "2026-09-21",
      "mandis": 7,
      "modal": 11450
    },
    {
      "date": "2026-09-22",
      "mandis": 7,
      "modal": 11575
    },
    {
      "date": "2026-09-23",
      "mandis": 10,
      "modal": 11088
    },
    {
      "date": "2026-09-24",
      "mandis": 10,
      "modal": 11562
    },
    {
      "date": "2026-09-25",
      "mandis": 10,
      "modal": 11525
    },
    {
      "date": "2026-09-26",
      "mandis": 8,
      "modal": 11565
    },
    {
      "date": "2026-09-27",
      "mandis": 7,
      "modal": 11630
    },
    {
      "date": "2026-09-28",
      "mandis": 8,
      "modal": 11078
    },
    {
      "date": "2026-09-29",
      "mandis": 9,
      "modal": 11625
    },
    {
      "date": "2026-09-30",
      "mandis": 7,
      "modal": 12000
    }
  ],
  "urad": [
    {
      "date": "2026-09-21",
      "mandis": 8,
      "modal": 7806
    },
    {
      "date": "2026-09-22",
      "mandis": 12,
      "modal": 7656
    },
    {
      "date": "2026-09-23",
      "mandis": 12,
      "modal": 7450
    },
    {
      "date": "2026-09-24",
      "mandis": 13,
      "modal": 7700
    },
    {
      "date": "2026-09-25",
      "mandis": 13,
      "modal": 8000
    },
    {
      "date": "2026-09-26",
      "mandis": 12,
      "modal": 7722
    },
    {
      "date": "2026-09-27",
      "mandis": 12,
      "modal": 7722
    },
    {
      "date": "2026-09-28",
      "mandis": 11,
      "modal": 7380
    },
    {
      "date": "2026-09-29",
      "mandis": 8,
      "modal": 7730
    },
    {
      "date": "2026-09-30",
      "mandis": 10,
      "modal": 7790
    }
  ]
};

MB.aliases = [
  ["rice", "rice"], ["chawal", "rice"], ["चावल", "rice"],
  ["coriander", "dhaniya"], ["dhaniya", "dhaniya"], ["धनिया", "dhaniya"],
  ["green coriander", "hara-dhaniya"], ["हरा धनिया", "hara-dhaniya"],
  ["fennel", "saunf"], ["saunf", "saunf"], ["सौंफ", "saunf"],
  ["dill leaves", "sua-patti"], ["sua leaves", "sua-patti"], ["sua patti", "sua-patti"], ["सुआ पत्ती", "sua-patti"],
  ["dill", "sua"], ["dill seed", "sua"], ["dill seeds", "sua"], ["sowa", "sua"], ["suva", "sua"], ["सुआ", "sua"],
  ["fenugreek leaves", "hari-methi"], ["methi leaves", "hari-methi"], ["green fenugreek", "hari-methi"], ["hari methi", "hari-methi"], ["पान मेथी", "hari-methi"], ["हरी मेथी", "hari-methi"],
  ["fenugreek", "methi"], ["methi", "methi"], ["मेथी", "methi"],
  ["green peas", "hara-matar"], ["hara matar", "hara-matar"], ["हरी मटर", "hara-matar"],
  ["peas", "matar"], ["matar", "matar"], ["मटर", "matar"],
  ["castor", "arandi"], ["castor seed", "arandi"], ["arandi", "arandi"], ["अरंडी", "arandi"],
  ["linseed", "alsi"], ["alsi", "alsi"], ["अलसी", "alsi"],
  ["guava", "amrood"], ["amrood", "amrood"], ["अमरूद", "amrood"],
  ["banana", "kela"], ["green banana", "kela"], ["banana green", "kela"], ["kela", "kela"], ["केला", "kela"],
  ["apple", "seb"], ["seb", "seb"], ["सेब", "seb"],
  ["pomegranate", "anar"], ["anar", "anar"], ["अनार", "anar"],
  ["wheat", "gehun"], ["kanak", "gehun"], ["गेहूँ", "gehun"],
  ["mustard", "sarson"], ["rapeseed", "sarson"],
  ["gram", "chana"], ["chickpea", "chana"],
  ["pearl millet", "bajra"],
  ["maize", "makka"], ["corn", "makka"],
  ["cotton", "kapas"], ["narma", "kapas"], ["american cotton", "kapas"], ["bt cotton", "kapas"], ["narma bt cotton", "kapas"],
  ["groundnut", "moongphali"], ["peanut", "moongphali"],
  ["cumin", "jeera"], ["जीरो", "jeera"],
  ["soybean", "soyabean"], ["soya", "soyabean"],
  ["paddy", "dhan"], ["rice", "dhan"], ["basmati", "dhan"], ["paddy basmati", "dhan"], ["धान", "dhan"],
  ["onion", "pyaz"], ["kanda", "pyaz"], ["कांदा", "pyaz"],
  ["potato", "aalu"], ["aloo", "aalu"], ["alu", "aalu"],
  ["tomato", "tamatar"],
  ["guar", "gwar"], ["गवार", "gwar"],
  ["cluster bean", "gwarphali"], ["cluster beans", "gwarphali"], ["gwar phali", "gwarphali"], ["gwarphali", "gwarphali"], ["ग्वार फली", "gwarphali"], ["ग्वारफली", "gwarphali"],
  ["barley", "jau"],
  ["green gram", "moong"],
  ["sesame", "til"],
  ["jwar", "jowar"], ["sorghum", "jowar"],
  ["tur", "arhar"], ["toor", "arhar"], ["pigeon pea", "arhar"],
  ["black gram", "urad"],
  ["lentil", "masoor"],
  ["psyllium", "isabgol"],
  ["garlic", "lahsun"], ["lehsun", "lahsun"],
  ["turmeric", "haldi"],
  ["ginger", "adrak"],
  ["chilli", "mirch"], ["chili", "mirch"], ["मिर्च", "mirch"],
  ["green chilli", "hari-mirch"], ["green chili", "hari-mirch"], ["हरी मिर्च", "hari-mirch"],
  ["ganganagar", "sri-ganganagar"], ["श्रीगंगानगर", "sri-ganganagar"],
  ["merta", "merta"], ["marta", "merta"], ["मेड़ता", "merta"], ["मेड़ता", "merta"], ["मरता", "merta"],
  ["basssi", "jaipur"], ["bassi", "jaipur"],
  ["उंझा", "unjha"],
  ["mp", "madhya-pradesh"], ["मध्यप्रदेश", "madhya-pradesh"],
  ["raj", "rajasthan"], ["राजस्थान", "rajasthan"],
  ["gj", "gujarat"], ["गुजरात", "gujarat"],
];

MB.seo = {
  gehun: { hi: "गेहूं का भाव आज जानना हर किसान और व्यापारी के लिए ज़रूरी है। सही समय पर सही जानकारी मिलने से फसल बेचने का फ़ैसला बेहतर तरीके से लिया जा सकता है। राजस्थान, गुजरात, मध्य प्रदेश और हरियाणा की मंडियों के उपलब्ध भाव इसी पेज पर देखें।", en: "Check available wheat mandi prices from Rajasthan, Gujarat, Madhya Pradesh and Haryana before you sell." },
  sarson: { hi: "सरसों का भाव कोटा, बारां और श्रीगंगानगर जैसी पट्टी की मंडियों से आता है। तेलहन है इसलिए क्विंटल का मॉडल देखें, किलो नहीं।", en: "Mustard rates come from Kota, Baran and Sri Ganganagar. Oilseed — read the quintal modal, not kg." },
  chana: { hi: "चना इंदौर, उज्जैन और कोटा में खूब आता है। दलहन का भाव क्विंटल में है। राज्य का मीडियन और सबसे ऊँचा मॉडल दोनों काम के हैं।", en: "Gram arrivals are strong in Indore, Ujjain and Kota. Pulse rates are per quintal — use the state median and the top modal." },
  bajra: { hi: "बाजरा नागौर, बीकानेर, जोधपुर और डीसा की मंडियों का मोटा अनाज है। शुष्क पट्टी का भाव क्विंटल में देखें।", en: "Bajra is the dry-belt grain of Nagaur, Bikaner, Jodhpur and Deesa. Check the quintal modal." },
  makka: { hi: "मक्का इंदौर, हरदा, कोटा और राजकोट में बिकता है। पशु आहार और उद्योग दोनों मांग करते हैं, इसलिए आवक के साथ मॉडल देखें।", en: "Maize trades in Indore, Harda, Kota and Rajkot. Feed and industry demand both move the modal — watch arrivals." },
  kapas: { hi: "कपास के इस पेज में नरमा, BT Cotton और देशी कपास के उपलब्ध मंडी भाव देखें। भाव क्विंटल में हैं; किस्म और मंडी के अनुसार तुलना करें।", en: "Check available Cotton, Narma, BT Cotton and Desi Cotton mandi rates in one place, per quintal." },
  moongphali: { hi: "मूंगफली गोंडल, अमरेली, राजकोट, बीकानेर और डीसा में उतरती है। तेलहन का भाव क्विंटल में है — पास की मंडी का मॉडल काफी है।", en: "Groundnut arrives in Gondal, Amreli, Rajkot, Bikaner and Deesa. Oilseed modal is per quintal — nearby mandi is enough." },
  jeera: { hi: "जीरा का सबसे जाना-माना भाव उंझा मंडी का है। मेड़ता, जोधपुर और नागौर भी दिखते हैं। मसाला महंगा है, क्विंटल का मॉडल ध्यान से पढ़ें।", en: "Cumin’s benchmark mandi is Unjha. Merta, Jodhpur and Nagaur also report. Spice rates are high — read the quintal modal carefully." },
  soyabean: { hi: "सोयाबीन मालवा-निमाड़ की फसल है — इंदौर, उज्जैन, हरदा और कोटा। क्विंटल मॉडल और MSP साथ रखें।", en: "Soybean is a Malwa–Nimar crop — Indore, Ujjain, Harda and Kota. Keep quintal modal and MSP together." },
  dhan: { hi: "धान (धान/चावल) का मंडी भाव इंदौर और कोटा से है। क्विंटल में मॉडल देखें। आवक कम हो तो भाव जल्दी बदलता है।", en: "Paddy mandi rates are from Indore and Kota, in ₹/qtl. Thin arrivals can move the modal fast." },
  pyaz: { hi: "प्याज का भाव केकरी, कोटा, बारां, गोंडल और इंदौर में रोज़ बदलता है। सब्जी है इसलिए क्विंटल और किलो दोनों दिखते हैं। पास की मंडी चुनें, देश का सबसे महंगा भाव नहीं।", en: "Onion moves daily in Kekri, Kota, Baran, Gondal and Indore. Vegetable — see ₹/qtl and ₹/kg. Pick a nearby mandi, not the national high." },
  aalu: { hi: "आलू डीसा, इंदौर, जयपुर और कोटा में आता है। सब्जी पर क्विंटल के साथ किलो का भाव भी है, ताकि मंडी और दुकान दोनों समझ आएँ।", en: "Potato arrives in Deesa, Indore, Jaipur and Kota. Veg crop — quintal plus kg, so mandi and shop rates both read clearly." },
  tamatar: { hi: "टमाटर इंदौर, कोटा, जयपुर और राजकोट में चढ़ता-गिरता रहता है। जल्दी खराब होने वाली सब्जी — आवक और किलो भाव साथ देखें।", en: "Tomato swings in Indore, Kota, Jaipur and Rajkot. Perishable veg — watch arrivals and the kg rate together." },
  gwar: { hi: "ग्वार राजस्थान की बड़ी फसल है — मेड़ता, नागौर, बीकानेर, जोधपुर, जयपुर, श्रीगंगानगर। उंझा भी दिखता है। क्विंटल का मॉडल गुम की मांग से बदलता है।", en: "Guar is a major Rajasthan crop — Merta, Nagaur, Bikaner, Jodhpur, Jaipur, Sri Ganganagar. Unjha also reports. Quintal modal moves with gum demand." },
  jau: { hi: "जौ नागौर और श्रीगंगानगर जैसी उत्तर-पश्चिम मंडियों में आता है। मोटा अनाज — क्विंटल का मॉडल और MSP देखें।", en: "Barley arrives in north-west mandis like Nagaur and Sri Ganganagar. Coarse grain — quintal modal and MSP." },
  moong: { hi: "मूंग जयपुर और जोधपुर की मंडियों में दिखता है। दलहन का भाव क्विंटल में है। MSP से तुलना करके बेचें।", en: "Moong shows up in Jaipur and Jodhpur. Pulse rate is per quintal. Compare with MSP before you sell." },
  moth: { hi: "मोठ बीकानेर और नागौर की शुष्क पट्टी का दलहन है। आवक कम हो तो एक मंडी का मॉडल ही काफी जानकारी देता है।", en: "Moth is a dry-belt pulse of Bikaner and Nagaur. When arrivals are thin, one mandi’s modal still tells you a lot." },
  til: { hi: "तिल का मंडी भाव कोटा से है। तेलहन महंगा होता है — क्विंटल का न्यूनतम, मॉडल और अधिकतम तीनों पढ़ें।", en: "Sesame mandi rate is from Kota. Oilseed can be dear — read min, modal and max per quintal." },
  jowar: { hi: "ज्वार राजस्थान-मध्य प्रदेश की मोटा अनाज पट्टी की फसल है। भाव क्विंटल में देखें। आवक वाले दिन मॉडल स्थिर रहता है।", en: "Jowar is a coarse grain of the Rajasthan–MP belt. Check ₹/qtl. Modal holds better on arrival days." },
  arhar: { hi: "अरहर (तूर) का मंडी भाव इंदौर से है। दलहन — क्विंटल मॉडल और MSP साथ रखें।", en: "Arhar (tur) mandi rate is from Indore. Pulse — keep quintal modal and MSP together." },
  urad: { hi: "उड़द उज्जैन जैसी मालवा मंडी में दिखता है। दलहन का भाव क्विंटल में है। एक राज्य की कई मंडियां बाद में जुड़ेंगी।", en: "Urad shows in Malwa mandis such as Ujjain. Pulse rates are per quintal. More mandis in the same state will follow." },
  masoor: { hi: "मसूर का मंडी भाव इंदौर से है। दाल वाली फसल — क्विंटल का मॉडल देखकर पास की मंडी तय करें।", en: "Masoor mandi rate is from Indore. Lentil crop — read the quintal modal, then choose a nearby mandi." },
  isabgol: { hi: "इसबगोल का जाना-माना भाव उंझा मंडी का है, जीरे के साथ। क्विंटल का मॉडल देखें — यह फसल महँगी पट्टी में बैठती है।", en: "Isabgol’s known rate is Unjha, alongside cumin. Read the quintal modal — this crop sits in a high-value belt." },
  lahsun: { hi: "लहसुन मंदसौर और नीमच की मालवा पट्टी का बड़ा भाव है, कोटा भी दिखता है। सब्जी-मसाला — क्विंटल और किलो दोनों।", en: "Garlic’s big belt is Mandsaur and Neemuch in Malwa; Kota also reports. Spice-veg — both qtl and kg." },
  haldi: { hi: "हल्दी का मंडी भाव नागौर से है। मसाला क्विंटल में बिकता है। गुणवत्ता और आवक दोनों मॉडल बदलते हैं।", en: "Turmeric mandi rate is from Nagaur. Spice is sold per quintal. Quality and arrivals both move the modal." },
  adrak: { hi: "अदरक का मंडी भाव इंदौर से है। जल्दी भाव बदलने वाली सब्जी — किलो और क्विंटल साथ देखें।", en: "Ginger mandi rate is from Indore. Fast-moving veg — read kg and quintal together." },
  mirch: { hi: "मिर्च के उपलब्ध मंडी भाव गोंडल, गुंटूर और ब्याडगी से देखें। गुंटूर और ब्याडगी के सूखी मिर्च रिकॉर्ड में किस्म और grade अलग हो सकते हैं, इसलिए तुलना एक ही किस्म में करें।", en: "Check available chilli mandi prices from Gondal, Guntur and Byadgi. Guntur and Byadgi dry-chilli records can differ by variety and grade, so compare like with like." },
  "hari-mirch": { hi: "हरी मिर्च जल्दी भाव बदलने वाली सब्जी है। नीचे उपलब्ध मंडियों के मॉडल भाव क्विंटल और प्रति किलो दोनों में देखें।", en: "Green chilli is a fast-moving vegetable. Read available mandi modal prices both per quintal and per kg below." },
  rajasthan: { hi: "राजस्थान में श्रीगंगानगर, कोटा, केकरी, बारां, बीकानेर, नागौर, मेड़ता, जोधपुर, जयपुर (बस्सी) और जालौर के आज के मॉडल भाव। ग्वार, बाजरा, मूंग, मोठ, गेहूं, सरसों, प्याज और जीरा यहीं की मुख्य खोज हैं।", en: "Today’s modal from Sri Ganganagar, Kota, Kekri, Baran, Bikaner, Nagaur, Merta, Jodhpur, Jaipur (Bassi) and Jalore. Guar, bajra, moong, moth, wheat, mustard, onion and cumin are the main searches." },
  gujarat: { hi: "गुजरात में उंझा, मेहसाणा, पाटन, गोंडल, राजकोट, अमरेली और डीसा। जीरा-इसबगोल उंझा, कपास-मूंगफली सौराष्ट्र, प्याज-आलू भी यहीं के भाव से चलते हैं।", en: "Gujarat: Unjha, Mehsana, Patan, Gondal, Rajkot, Amreli and Deesa. Cumin and isabgol at Unjha, cotton and groundnut in Saurashtra, onion and potato too." },
  "madhya-pradesh": { hi: "मध्य प्रदेश में इंदौर, उज्जैन, हरदा, मंदसौर, नीमच और रतलाम। सोयाबीन, चना, गेहूं, लहसुन और सब्जी का मालवा भाव यहीं मिलता है।", en: "Madhya Pradesh: Indore, Ujjain, Harda, Mandsaur, Neemuch and Ratlam. Soybean, gram, wheat, garlic and vegetables follow the Malwa mandis." },
  haryana: { hi: "हरियाणा में सिरसा, हिसार, फतेहाबाद, जींद, रोहतक, शाहाबाद, तरावड़ी, पानीपत, सोनीपत और गन्नौर के आज के मॉडल भाव। गेहूं, चना, सरसों और सब्जियों का मंडी रेट यहाँ देखें।", en: "Today’s modal rates from Haryana mandis including Sirsa, Hisar, Fatehabad, Jind, Rohtak, Shahabad, Tarori, Panipat, Sonepat and Ganaur. Check wheat, gram, mustard and vegetable market prices here." },
  "andhra-pradesh": { hi: "आंध्र प्रदेश में गुंटूर मंडी के उपलब्ध फसल भाव देखें। सूखी मिर्च के रिकॉर्ड में किस्म और grade के अनुसार अलग-अलग रेट हो सकते हैं।", en: "Check available Andhra Pradesh mandi prices from Guntur. Dry-chilli records can have separate rates by variety and grade." },
  karnataka: { hi: "कर्नाटक में ब्याडगी मंडी के उपलब्ध फसल भाव देखें। सूखी मिर्च के रिकॉर्ड में किस्म और grade के अनुसार अलग-अलग रेट हो सकते हैं।", en: "Check available Karnataka mandi prices from Byadgi. Dry-chilli records can have separate rates by variety and grade." },
  "sri-ganganagar": { hi: "श्रीगंगानगर नहर पट्टी की मंडी है — गेहूं, सरसों और जौ का भाव यहाँ से देखें। क्विंटल का मॉडल पास के किसान के काम का है।", en: "Sri Ganganagar is a canal-belt mandi — wheat, mustard and barley. The quintal modal is what nearby farmers need." },
  kota: { hi: "कोटा हाड़ौती की बड़ी मंडी है। सरसों, गेहूं, प्याज, चना और तिल यहाँ आते हैं। एक मंडी में कई फसलों का मॉडल एक साथ दिखता है।", en: "Kota is Hadoti’s big mandi. Mustard, wheat, onion, gram and sesame arrive here. One mandi, many crop modals." },
  kekri: { hi: "केकरी अजमेर जिले की मंडी है, प्याज के भाव के लिए जानी जाती है। सब्जी पर क्विंटल और किलो दोनों पढ़ें।", en: "Kekri in Ajmer district is known for onion. Veg crop — read both quintal and kg." },
  baran: { hi: "बारां हाड़ौती की मंडी है। सरसों और प्याज का मॉडल यहाँ कोटा के साथ तुलना करके देखें।", en: "Baran is a Hadoti mandi. Compare mustard and onion modal here with Kota." },
  bikaner: { hi: "बीकानेर शुष्क पट्टी की मंडी है — बाजरा, मूंगफली, ग्वार और मोठ। मोटा अनाज और दलहन का क्विंटल भाव यहीं से लें।", en: "Bikaner is a dry-belt mandi — bajra, groundnut, guar and moth. Coarse grain and pulse quintal rates start here." },
  nagaur: { hi: "नागौर से बाजरा, जीरा, ग्वार, जौ, मोठ और हल्दी का भाव मिलता है। पास में मेड़ता मंडी भी है। पश्चिमी राजस्थान — क्विंटल मॉडल देखें।", en: "Nagaur reports bajra, cumin, guar, barley, moth and turmeric. Merta mandi is nearby. Western Rajasthan — read the quintal modal." },
  merta: { hi: "मेड़ता नागौर जिले की बड़ी मंडी है — ग्वार, जीरा, बाजरा, मूंग, मोठ, जौ और इसबगोल। राजस्थान के किसान यहीं भाव देखते हैं।", en: "Merta is a major mandi in Nagaur district — guar, cumin, bajra, moong, moth, barley and isabgol. Rajasthan farmers watch this rate." },
  jodhpur: { hi: "जोधपुर मारवाड़ की मंडी है। जीरा, बाजरा और मूंग यहाँ दिखते हैं। उंझा के जीरे से तुलना करके बेचें।", en: "Jodhpur is Marwar’s mandi. Cumin, bajra and moong show up. Compare cumin with Unjha before you sell." },
  jaipur: { hi: "जयपुर (बस्सी) की मंडी से गेहूं, चना, आलू, टमाटर और मूंग का भाव दिखता है। शहर के पास की मंडी — सब्जी पर किलो भी है।", en: "Jaipur (Bassi) lists wheat, gram, potato, tomato and moong. Near-city mandi — veg also in kg." },
  unjha: { hi: "उंझा मेहसाणा की मंडी है, जीरा और इसबगोल के लिए देश में पहचानी जाती है। ग्वार भी आता है। मसाला भाव क्विंटल में पढ़ें।", en: "Unjha in Mehsana is known nationwide for cumin and isabgol. Guar also arrives. Spice rates are per quintal." },
  gondal: { hi: "गोंडल राजकोट जिले की मंडी है। कपास, मूंगफली, प्याज, गेहूं और मिर्च यहाँ बिकते हैं। सौराष्ट्र का मिश्रित भाव।", en: "Gondal in Rajkot district trades cotton, groundnut, onion, wheat and chilli. Mixed Saurashtra rates." },
  rajkot: { hi: "राजकोट कपास और मूंगफली की बड़ी मंडी है। मक्का और टमाटर भी दिखते हैं। सौराष्ट्र का क्विंटल मॉडल यहीं से लें।", en: "Rajkot is a major cotton and groundnut mandi. Maize and tomato also appear. Take Saurashtra’s quintal modal from here." },
  amreli: { hi: "अमरेली कपास और मूंगफली की आवक वाली मंडी है। गोंडल-राजकोट से भाव मिलाकर बेचने की जगह चुनें।", en: "Amreli has cotton and groundnut arrivals. Compare with Gondal and Rajkot, then pick where to sell." },
  deesa: { hi: "डीसा बनासकांठा की मंडी है। आलू और बाजरा, मूंगफली भी। उत्तर गुजरात का भाव — सब्जी पर किलो भी दिखेगा।", en: "Deesa in Banaskantha lists potato, bajra and groundnut. North Gujarat rates — veg also in kg." },
  indore: { hi: "इंदौर मालवा की सबसे बड़ी मंडी है। सोयाबीन, चना, गेहूं, प्याज, टमाटर, अदरक और और भी फसलें। एक जगह कई भाव।", en: "Indore is Malwa’s largest mandi. Soybean, gram, wheat, onion, tomato, ginger and more. Many rates, one place." },
  ujjain: { hi: "उज्जैन मालवा की मंडी है। सोयाबीन, चना, गेहूं और उड़द का मॉडल इंदौर के साथ तुलना करें।", en: "Ujjain is a Malwa mandi. Compare soybean, gram, wheat and urad modal with Indore." },
  harda: { hi: "हरदा निमाड़-मालवा की मंडी है। सोयाबीन और मक्का यहाँ की मुख्य फसलें हैं। क्विंटल का मॉडल देखें।", en: "Harda sits on the Nimar–Malwa belt. Soybean and maize are the main crops. Read the quintal modal." },
  mandsaur: { hi: "मंदसौर लहसुन के भाव के लिए जानी जाती है। मालवा की मंडी — क्विंटल और किलो दोनों पढ़ें।", en: "Mandsaur is known for garlic rates. Malwa mandi — read both quintal and kg." },
  neemuch: { hi: "नीमच मंदसौर के पास की मंडी है, लहसुन का दूसरा बड़ा भाव। दोनों मंडियां साथ देखकर बेचें।", en: "Neemuch is next to Mandsaur, the other big garlic rate. Read both mandis before you sell." },
  anupgarh: { hi: "अनूपगढ़ मंडी भाव आज: गेहूं, सरसों, मूंग और ग्वार के उपलब्ध न्यूनतम, मॉडल और अधिकतम भाव इस पेज पर देखें। बिक्री से पहले नज़दीकी मंडियों से तुलना करें।", en: "Anupgarh Mandi Bhav Today: check available wheat, mustard, moong and guar prices before you sell." },
  goluwala: { hi: "गोलूवाला मंडी भाव आज: ग्वार, सरसों, गेहूं, चना, आलू और सब्जियों के उपलब्ध मंडी भाव देखें। अपनी फसल का भाव पास की मंडियों से मिलाकर समझें।", en: "Goluwala Mandi Bhav Today: compare available guar, mustard, wheat, gram and vegetable market prices." },
  ramganj: { hi: "रामगंज मंडी भाव आज: धनिया के साथ गेहूं, सरसों, चना, मक्का, फल और सब्जियों के उपलब्ध भाव इस पेज पर देखें। मंडी-वार range देखकर निर्णय लें।", en: "Ramganj Mandi Bhav Today: see available coriander, grain, fruit and vegetable market prices." },
  beawar: { hi: "ब्यावर मंडी भाव आज: मक्का, बाजरा और जौ के उपलब्ध मंडी भाव देखें। अपनी उपज के लिए मॉडल भाव और न्यूनतम–अधिकतम range की तुलना करें।", en: "Beawar Mandi Bhav Today: check available maize, bajra and barley market prices." },
  nokha: { hi: "नोखा मंडी भाव से जुड़े उपलब्ध records और आसपास की मंडियों की तुलना इस पेज पर देखें। भाव समझते समय फसल, grade और record की तारीख जरूर मिलाएँ।", en: "Nokha Mandi Bhav: compare available records and nearby market prices by crop and grade." },
  lunkaransar: { hi: "लूणकरणसर मंडी भाव से जुड़े उपलब्ध records और आसपास की मंडियों की तुलना इस पेज पर देखें। एक ही भाव के बजाय फसल और quality के अनुसार range समझें।", en: "Lunkaransar Mandi Bhav: compare available records and nearby market prices by crop and quality." },
  jalore: { hi: "जालौर मंडी भाव आज: टमाटर, आलू, अदरक, हरा धनिया और हरी मिर्च के उपलब्ध भाव देखें। सब्जियों में ताजगी और प्रति किलो rate का फर्क समझें।", en: "Jalore Mandi Bhav Today: see available tomato, potato, ginger and vegetable prices." },
  nimbahera: { hi: "निंबाहेड़ा मंडी भाव आज: सरसों, गेहूं, मूंगफली, लहसुन, जौ और मेथी के उपलब्ध भाव इस पेज पर देखें। समान quality वाले lot से तुलना करें।", en: "Nimbahera Mandi Bhav Today: check available mustard, wheat, groundnut, garlic and barley prices." },
  mehsana: { hi: "मेहसाणा मंडी भाव आज: आलू, प्याज, टमाटर, सरसों, गेहूं, केला और अरंडी के उपलब्ध मंडी भाव देखें। फसल के हिसाब से क्विंटल या किलो rate पढ़ें।", en: "Mehsana Mandi Bhav Today: see available potato, onion, tomato, mustard, wheat and castor prices." },
  patan: { hi: "पाटन मंडी भाव आज: टमाटर, अदरक और हरा धनिया के उपलब्ध भाव इस पेज पर देखें। ताजी उपज में quality और प्रति किलो range की तुलना उपयोगी रहती है।", en: "Patan Mandi Bhav Today: check available tomato, ginger and coriander leaf prices." },
  ratlam: { hi: "रतलाम मंडी भाव आज: गेहूं, चना, प्याज, लहसुन और हरी मटर के उपलब्ध भाव देखें। अनाज और सब्जी के rate को उनकी इकाई के साथ समझें।", en: "Ratlam Mandi Bhav Today: see available wheat, gram, onion, garlic and green pea prices." },
  bhiwani: { hi: "भिवानी मंडी भाव आज: अमरूद, केला, सेब और अनार के उपलब्ध फल मंडी भाव इस पेज पर देखें। फल का आकार, quality और प्रति किलो rate साथ में समझें।", en: "Bhiwani Mandi Bhav Today: check available guava, banana, apple and pomegranate prices." },
  siwani: { hi: "सिवानी मंडी भाव आज: देशी कपास के उपलब्ध मंडी भाव और न्यूनतम, मॉडल तथा अधिकतम range देखें। कपास की quality, नमी और साफ-सफाई के अनुसार बोली अलग हो सकती है।", en: "Siwani Mandi Bhav Today: check available desi cotton prices and the mandi price range." },
  sirsa: { hi: "सिरसा मंडी भाव आज: गेहूं, प्याज, आलू, टमाटर और फलों के उपलब्ध मंडी भाव देखें। अनाज और ताजी उपज की price range अलग-अलग समझें।", en: "Sirsa Mandi Bhav Today: see available wheat, onion, potato, tomato and fruit prices." },
  hisar: { hi: "हिसार मंडी भाव आज: लहसुन, आलू, टमाटर, प्याज, अदरक और फलों के उपलब्ध भाव इस पेज पर देखें। सब्जी और फल की quality के साथ प्रति किलो rate पढ़ें।", en: "Hisar Mandi Bhav Today: check available garlic, vegetable, ginger and fruit prices." },
  adampur: { hi: "आदमपुर मंडी भाव आज: आलू, प्याज, टमाटर, अदरक, लहसुन, हरी मटर और हरी मिर्च के उपलब्ध भाव देखें। ताजी उपज में nearest mandi comparison उपयोगी रहता है।", en: "Adampur Mandi Bhav Today: see available potato, onion, tomato, ginger, garlic and vegetable prices." },
  fatehabad: { hi: "फतेहाबाद मंडी भाव आज: आलू, टमाटर, प्याज, मूंग और फलों के उपलब्ध भाव इस पेज पर देखें। फसल या फल की quality के साथ भाव-range की तुलना करें।", en: "Fatehabad Mandi Bhav Today: check available potato, tomato, onion, moong and fruit prices." },
  jind: { hi: "जींद मंडी भाव आज: आलू, प्याज और टमाटर के उपलब्ध मंडी भाव देखें। जल्दी खराब होने वाली सब्जियों में ताजगी, आकार और प्रति किलो भाव का फर्क समझें।", en: "Jind Mandi Bhav Today: see available potato, onion and tomato market prices." },
  rohtak: { hi: "रोहतक मंडी भाव आज: आलू, प्याज, टमाटर और फलों के उपलब्ध भाव इस पेज पर देखें। अलग size और quality वाले lot की तुलना अलग करके करें।", en: "Rohtak Mandi Bhav Today: check available potato, onion, tomato and fruit prices." },
  shahabad: { hi: "शाहाबाद मंडी भाव आज: गेहूं, मक्का, धान, लहसुन, आलू, टमाटर और फलों के उपलब्ध मंडी भाव देखें। फसल के अनुसार क्विंटल या किलो की सही इकाई पढ़ें।", en: "Shahabad Mandi Bhav Today: see available wheat, maize, paddy, vegetable and fruit prices." },
  tarori: { hi: "तरावड़ी मंडी भाव आज: आलू, प्याज, टमाटर और केले के उपलब्ध भाव देखें। सब्जी और फल की ताजगी तथा प्रति किलो rate के अनुसार तुलना करें।", en: "Tarori Mandi Bhav Today: check available potato, onion, tomato and banana prices." },
  panipat: { hi: "पानीपत मंडी भाव आज: प्याज, टमाटर, आलू और फलों के उपलब्ध मंडी भाव इस पेज पर देखें। खरीद या बिक्री से पहले नज़दीकी market range की तुलना करें।", en: "Panipat Mandi Bhav Today: see available onion, tomato, potato and fruit prices." },
  sonepat: { hi: "सोनीपत मंडी भाव आज: टमाटर, प्याज, आलू और फलों के उपलब्ध भाव देखें। ताजी उपज में quality, आकार और प्रति किलो भाव का फर्क ध्यान में रखें।", en: "Sonepat Mandi Bhav Today: check available tomato, onion, potato and fruit prices." },
  ganaur: { hi: "गन्नौर मंडी भाव आज: टमाटर, लहसुन, आलू, प्याज, हरा धनिया, अदरक, हरी मटर और फलों के उपलब्ध भाव देखें। फसल के अनुसार सही इकाई और quality मिलाकर तुलना करें।", en: "Ganaur Mandi Bhav Today: see available tomato, garlic, potato, onion, herb and fruit prices." },
  guntur: { hi: "गुंटूर मंडी भाव आज: सूखी मिर्च के उपलब्ध मंडी भाव और किस्म-वार रेट इस पेज पर देखें। तुलना करते समय किस्म और grade एक ही रखें।", en: "Guntur Mandi Bhav Today: check available dry-chilli market prices and variety-wise rates. Compare the same variety and grade." },
  byadgi: { hi: "ब्याडगी मंडी भाव आज: सूखी मिर्च की Guntur, Kaddi और Dabbi जैसी उपलब्ध किस्मों के भाव इस पेज पर देखें। तुलना करते समय किस्म और grade एक ही रखें।", en: "Byadgi Mandi Bhav Today: check available dry-chilli rates for varieties such as Guntur, Kaddi and Dabbi. Compare the same variety and grade." },
  mathania: { hi: "मथानिया मंडी भाव आज: बाजरा, जीरा, इसबगोल, सरसों, सौंफ और गेहूं के उपलब्ध मंडी भाव इस पेज पर देखें। तुलना करते समय फसल और किस्म एक ही रखें।", en: "Mathania Mandi Bhav Today: check available bajra, cumin, isabgol, mustard, fennel and wheat market prices. Compare the same crop and variety." },
  agra: { hi: "आगरा मंडी भाव आज: Agra APMC में आलू, बाजरा, सरसों, तिल, गेहूं और अन्य उपलब्ध उपज के न्यूनतम, मॉडल व अधिकतम रेट देखें।", en: "Agra Mandi Bhav Today: check available live rates for potato, bajra, mustard, sesame, wheat and other commodities reported by Agra APMC." },
  kanpur: { hi: "कानपुर मंडी भाव आज: Kanpur Grain APMC के गेहूं, धान, बाजरा, आलू और दूसरी उपलब्ध फसलों के न्यूनतम, मॉडल व अधिकतम रेट देखें।", en: "Kanpur Mandi Bhav Today: check available wheat, paddy, bajra, potato and other crop rates reported by Kanpur Grain APMC." },
  meerut: { hi: "मेरठ मंडी भाव आज: मेरठ APMC में गेहूं, सरसों, आलू, प्याज और अन्य उपलब्ध उपज के ताजा प्रकाशित रेट देखें।", en: "Meerut Mandi Bhav Today: check available wheat, mustard, potato, onion and other commodity rates reported by Meerut APMC." },
  aligarh: { hi: "अलीगढ़ मंडी भाव आज: धान, गेहूं, सरसों, बाजरा, आलू और अन्य उपलब्ध फसलों के न्यूनतम, मॉडल व अधिकतम भाव देखें।", en: "Aligarh Mandi Bhav Today: compare available paddy, wheat, mustard, bajra, potato and other crop rates." },
  bareilly: { hi: "बरेली मंडी भाव आज: धान, गेहूं, आलू, मूंग, लहसुन और दूसरी उपलब्ध उपज के प्रकाशित मंडी रेट देखें।", en: "Bareilly Mandi Bhav Today: check available paddy, wheat, potato, moong, garlic and other commodity prices." },
  lucknow: { hi: "लखनऊ मंडी भाव आज: आलू, टमाटर, प्याज, हरी मिर्च, धान, गेहूं और दूसरी उपलब्ध उपज के भाव देखें।", en: "Lucknow Mandi Bhav Today: check available potato, tomato, onion, green chilli, paddy, wheat and other market rates." },
  mathura: { hi: "मथुरा मंडी भाव आज: बाजरा, धान, गेहूं, सरसों, आलू और अन्य उपलब्ध फसलों की आज की प्रकाशित भाव-range देखें।", en: "Mathura Mandi Bhav Today: compare available bajra, paddy, wheat, mustard, potato and other crop rates." },
  hathras: { hi: "हाथरस मंडी भाव आज: बाजरा, धान, गेहूं, सरसों, कपास, आलू और दूसरी उपलब्ध फसलों के भाव देखें।", en: "Hathras Mandi Bhav Today: check available bajra, paddy, wheat, mustard, cotton, potato and other crop prices." },
  gorakhpur: { hi: "गोरखपुर मंडी भाव आज: धान, गेहूं, आलू, लहसुन, प्याज और दूसरी उपलब्ध कृषि उपज के भाव देखें।", en: "Gorakhpur Mandi Bhav Today: check available paddy, wheat, potato, garlic, onion and other agricultural commodity rates." },
  muzaffarnagar: { hi: "मुजफ्फरनगर मंडी भाव आज: धान, गेहूं, बाजरा, जौ, आलू और दूसरी उपलब्ध फसलों के प्रकाशित रेट देखें।", en: "Muzaffarnagar Mandi Bhav Today: compare available paddy, wheat, bajra, barley, potato and other crop rates." },
  hapur: { hi: "हापुड़ मंडी भाव आज: गेहूं, धान, मक्का, बाजरा, आलू और दूसरी उपलब्ध उपज के न्यूनतम, मॉडल व अधिकतम भाव देखें।", en: "Hapur Mandi Bhav Today: check available wheat, paddy, maize, bajra, potato and other commodity prices." },
  saharanpur: { hi: "सहारनपुर मंडी भाव आज: धान, गेहूं, आलू, प्याज, टमाटर और अन्य उपलब्ध उपज के प्रकाशित भाव देखें।", en: "Saharanpur Mandi Bhav Today: check available paddy, wheat, potato, onion, tomato and other commodity rates." },
  mainpuri: { hi: "मैनपुरी मंडी भाव आज: आलू, लहसुन, धान, गेहूं, मक्का और दूसरी उपलब्ध फसलों के रेट देखें।", en: "Mainpuri Mandi Bhav Today: check available potato, garlic, paddy, wheat, maize and other crop prices." },
  "uttar-pradesh": { hi: "उत्तर प्रदेश की उपलब्ध मंडियों के आज के न्यूनतम, मॉडल और अधिकतम कृषि उपज भाव देखें।", en: "Check today's available minimum, modal and maximum agricultural market prices from Uttar Pradesh mandis." },
  ker: { hi: "केर का मंडी भाव आज देखें। राजस्थान की इस पारंपरिक शुष्क उपज के उपलब्ध रिकॉर्ड, क्विंटल इकाई और मंडीवार भाव यहां देखें।", en: "Check available Ker berry mandi prices from Rajasthan. Read verified records per quintal and compare by mandi." },
  sangri: { hi: "सांगरी का मंडी भाव आज देखें। राजस्थान की इस पारंपरिक सूखी फलियों की उपलब्ध मंडी दर, तारीख और क्विंटल इकाई में तुलना करें।", en: "Check available Sangri mandi prices from Rajasthan. Compare verified dates and quintal rates for this traditional dry produce." },
};

MB.articles = {
  "crops": {
    "gehun": {
      "title": "गेहूं का भाव आज: मंडी रेट, MSP और भाव घटने-बढ़ने के कारण",
      "paragraphs": [
        "राम-राम किसान भाइयों! गेहूं रबी की सबसे बड़ी फसल है और हर किसान के मन में एक ही सवाल रहता है कि आज मंडी में गेहूं का भाव क्या चल रहा है। माल अभी बेचें या कुछ दिन रोकें, अपनी मंडी में बेचें या दूसरी मंडी में ले जाएँ, इन सब फ़ैसलों की जड़ में गेहूं का भाव ही होता है।",
        "इसी ज़रूरत को ध्यान में रखकर FasalBhav.in पर हम गेहूं का मंडी भाव रोज़ अपडेट करते हैं, ताकि आप सही जानकारी के साथ सौदा कर सकें।"
      ],
      "sections": [
        {
          "title": "गेहूं का भाव क्यों घटता-बढ़ता है?",
          "paragraphs": ["कई किसान पूछते हैं कि एक ही हफ़्ते में भाव ऊपर-नीचे क्यों हो जाता है। इसके पीछे ये मुख्य कारण होते हैं:"],
          "items": [
            "मंडी में आवक: कटाई के मौसम में माल एक साथ बहुत आता है, इसलिए भाव पर दबाव रहता है। आवक घटने पर भाव को सहारा मिलता है।",
            "सरकारी खरीद और MSP: सरकार हर साल गेहूं का न्यूनतम समर्थन मूल्य घोषित करती है और तय केंद्रों पर खरीद करती है। खुले बाज़ार का भाव अक्सर इसी के आसपास घूमता है।",
            "उत्पादन का अनुमान: बारिश, पाला, गर्मी की लहर या बुवाई का रकबा घटने-बढ़ने से पैदावार का अनुमान बदलता है, और उसके साथ बाज़ार का मूड भी।",
            "आटा मिलों की माँग: मिलों की खरीद बढ़ने पर अच्छी क्वालिटी के गेहूं के रेट ऊपर जाते हैं।",
            "सरकारी नीतियाँ: स्टॉक सीमा, निर्यात-आयात के नियम और सरकारी गोदामों से खुले बाज़ार में बिक्री जैसे फ़ैसले भाव पर सीधा असर डालते हैं।",
            "त्योहार और शादी का सीज़न: इस समय आटे की खपत बढ़ती है, जिससे माँग में तेज़ी आ सकती है।",
            "ढुलाई और मौसम: बारिश या रास्ते की दिक़्क़त से माल की आवाजाही रुके तो स्थानीय मंडी के भाव में अंतर आ जाता है।"
          ]
        },
        {
          "title": "गेहूं की किस्म और क्वालिटी से भाव में फ़र्क",
          "paragraphs": ["सभी गेहूं एक भाव पर नहीं बिकते। मंडी में माल की पहचान आमतौर पर इन नामों से होती है:"],
          "items": [
            "शरबती: चमकदार, मोटा और भारी दाना। मध्य प्रदेश के इलाकों का यह गेहूं अक्सर बाकी किस्मों से ऊँचे भाव पर बिकता है।",
            "लोकवन: मध्यम आकार का सुनहरा दाना, जिसकी रोटी और आटे में अच्छी माँग रहती है।",
            "मिल क्वालिटी: आटा मिलों के लिए बिकने वाला सामान्य माल।",
            "सामान्य या कमज़ोर क्वालिटी: जिसमें नमी, टूटा-सिकुड़ा दाना, मिट्टी या कंकड़ ज़्यादा हो, उसका भाव कम मिलता है।"
          ]
        },
        {
          "title": "",
          "paragraphs": [
            "भाव पर सबसे ज़्यादा असर दाने के आकार, चमक और वज़न का पड़ता है। इसके बाद नमी की मात्रा, टूटे या कीड़े लगे दानों का प्रतिशत और मिट्टी-कचरे की मिलावट देखी जाती है।",
            "प्रो टिप: गेहूं को अच्छी तरह साफ़ करके और सुखाकर मंडी ले जाएँ। थोड़ी सी सफ़ाई और सुखाई की मेहनत से भाव में सीधा फ़र्क पड़ सकता है।"
          ]
        },
        {
          "title": "गेहूं का MSP क्या होता है और मंडी भाव से कैसे जुड़ा है?",
          "paragraphs": [
            "MSP यानी न्यूनतम समर्थन मूल्य वह भाव है जिस पर सरकार तय शर्तों के साथ किसान से गेहूं खरीदती है। इसकी घोषणा आमतौर पर रबी की बुवाई से पहले होती है। MSP किसान के लिए सुरक्षा कवच का काम करता है, क्योंकि बाज़ार में भाव बहुत गिर जाए तब भी एक आधार भाव का सहारा रहता है।",
            "खुले बाज़ार में गेहूं का भाव MSP से ऊपर भी जा सकता है और नीचे भी। जब मंडी भाव MSP से ऊपर चलता है तो निजी व्यापारी और मिलें ज़्यादा खरीदारी करती हैं। जब भाव MSP के आसपास या नीचे आता है तो किसान सरकारी खरीद केंद्रों की तरफ़ रुख करते हैं।",
            "सरकारी केंद्र पर बेचने के लिए आमतौर पर पहले पंजीकरण कराना पड़ता है। पंजीकरण की तारीख, ज़रूरी कागज़ात और खरीद केंद्र की जानकारी अपने ज़िले के कृषि या खाद्य विभाग से लें। नियम हर राज्य और हर साल थोड़े बदल सकते हैं।"
          ]
        },
        {
          "title": "राजस्थान और देश की प्रमुख गेहूं मंडियाँ",
          "paragraphs": [
            "गेहूं की सबसे ज़्यादा आवक उत्तर और मध्य भारत की मंडियों में होती है। मध्य प्रदेश की इंदौर, उज्जैन और सीहोर मंडियाँ, उत्तर प्रदेश की कानपुर और हापुड़ मंडियाँ, पंजाब-हरियाणा की मंडियाँ तथा राजस्थान की कोटा, श्रीगंगानगर, जयपुर, भरतपुर और जोधपुर मंडियाँ प्रमुख हैं।",
            "हर मंडी का भाव उस इलाके की पैदावार, आवक और स्थानीय माँग पर निर्भर करता है। इसीलिए एक ही दिन कोटा और जोधपुर, या इंदौर और जयपुर के भाव में फ़र्क दिख सकता है। अपनी नज़दीकी मंडी के साथ आसपास की दूसरी मंडियों के भाव भी देखें, क्योंकि कभी-कभी थोड़ी दूर की मंडी में बेहतर रेट मिल जाता है। लेकिन फ़ैसला करने से पहले ढुलाई का खर्च ज़रूर जोड़ लें।"
          ]
        },
        {
          "title": "साल भर गेहूं के भाव का आम रुझान",
          "items": [
            "कटाई और आवक का समय (मार्च से मई के आसपास): मंडियों में माल की भरमार रहती है, इसलिए भाव अक्सर दबा रहता है। सरकारी खरीद भी इसी समय चलती है।",
            "आवक घटने के बाद (गर्मी और बरसात): बाज़ार में माल कम आता है और भाव को सहारा मिलने की गुंजाइश रहती है।",
            "त्योहार और बुवाई का समय: खपत और बीज की माँग के कारण बाज़ार में हलचल रहती है।"
          ]
        },
        {
          "title": "",
          "paragraphs": ["यह सिर्फ़ आम रुझान है। हर साल का भाव उस साल की पैदावार, सरकारी नीति और माँग पर निर्भर करता है, इसलिए किसी साल इसका उल्टा भी हो सकता है।"]
        },
        {
          "title": "गेहूं बेचने से पहले इन बातों का ध्यान रखें",
          "items": [
            "सिर्फ़ एक दिन के भाव पर फ़ैसला न लें। 2-3 दिन या हफ़्ते भर का रुझान देखें।",
            "अपनी मंडी के साथ आसपास की 2-3 मंडियों के भाव की तुलना करें।",
            "ढुलाई, हम्माली, तुलाई और मंडी शुल्क घटाकर असली बचत निकालें।",
            "माल की क्वालिटी के हिसाब से ही भाव की उम्मीद रखें।",
            "अगर सुरक्षित भंडारण है और पैसों की तुरंत ज़रूरत नहीं है, तो कुछ समय रोककर बेचने पर विचार कर सकते हैं। पर रोकने में भाव गिरने का जोखिम और भंडारण का खर्च भी है।",
            "तौल की पर्ची और भुगतान की रसीद हमेशा संभालकर रखें।",
            "उधार या बाद के भुगतान पर सौदा करने से पहले खरीदार और आढ़ती के बारे में अच्छी तरह जाँच-पड़ताल कर लें।"
          ],
          "ordered": true
        },
        {
          "title": "गेहूं का भंडारण और भाव का संबंध",
          "paragraphs": ["माल रोककर बेचना हो तो भंडारण में लापरवाही सबसे बड़ा नुकसान करती है। नमी, घुन और चूहों से खराब हुआ गेहूं बाद में कम भाव पर बिकता है, और रोकने का पूरा फ़ायदा चला जाता है।"],
          "items": [
            "भंडारण से पहले दानों को अच्छी तरह धूप में सुखाएँ।",
            "बोरों को ज़मीन से ऊपर लकड़ी के पट्टों पर, सूखी और हवादार जगह में रखें।",
            "कोठी, टंकी या बोरों की पहले सफ़ाई करें और पुराने अनाज के अवशेष हटा दें।",
            "बीच-बीच में माल का निरीक्षण करते रहें।",
            "कीट नियंत्रण की दवा इस्तेमाल करनी हो तो पहले कृषि विशेषज्ञ या KVK से सलाह लें और लेबल पर लिखी सावधानियों का पालन करें।"
          ]
        },
        {
          "title": "निष्कर्ष",
          "paragraphs": [
            "गेहूं बेचना सिर्फ़ आज का भाव देखने का काम नहीं है। माल की क्वालिटी, भंडारण, आसपास की मंडियों का रेट और अपनी ज़रूरत, इन सबको मिलाकर फ़ैसला लेने से ही अच्छा दाम मिलता है। रोज़ गेहूं और दूसरी फसलों का ताज़ा मंडी भाव जानने के लिए FasalBhav.in पर आते रहें।",
            "खेती की उपयोगी जानकारी और मंडी भाव सीधे अपने फोन पर पाने के लिए हमारा मुफ्त WhatsApp ग्रुप ज़रूर जॉइन करें।",
            "सूचना: इस पेज पर दिए गए भाव केवल जानकारी के लिए हैं। खरीद-बिक्री का फ़ैसला करने से पहले अपनी मंडी में भाव की पुष्टि ज़रूर करें।"
          ]
        }
      ]
    },
    "sarson": {
      "title": "सरसों का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["सरसों का भाव तेलहन बाजार, मंडी की आवक और माल की गुणवत्ता के साथ बदलता है। एक ही दिन अलग मंडियों में दर अलग हो सकती है, इसलिए उपलब्ध भावों की तुलना उपयोगी रहती है।"],
      "sections": [
        {
          "title": "आज का सरसों भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["सरसों में दाने की सफाई, नमी, तेल की मात्रा और बाहरी मिलावट भाव पर असर डालती है। एक ही नाम की सरसों में अलग lot की गुणवत्ता अलग हो सकती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["नई फसल की आवक, तेल मिलों की खरीद और खाद्य तेल की मांग से सरसों बाजार प्रभावित होता है। MSP सरकारी खरीद का समर्थन मूल्य है; खुली मंडी में कीमत अलग हो सकती है।"]
        },
        {
          "title": "सरसों बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "नमी और सफाई देखकर अपना lot अलग रखें।",
            "नज़दीकी तेलहन मंडियों के मॉडल भाव की तुलना करें।",
            "सरकारी खरीद की शर्तें और केंद्र की जानकारी अलग से जाँचें।"
          ],
          "ordered": true
        }
      ]
    },
    "chana": {
      "title": "चना का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["चना का भाव दाल बाजार, मंडी में उपलब्ध किस्म और माल की गुणवत्ता से बदलता है। देसी और काबुली जैसे अलग grade को एक ही भाव से नहीं मिलाना चाहिए।"],
      "sections": [
        {
          "title": "आज का चना भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["दाने का आकार, रंग, सफाई, टूटे दाने और नमी चने के lot की कीमत बदल सकते हैं। खरीददार किस्म और गुणवत्ता देखकर बोली लगाते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["नई रबी आवक, दाल मिलों की मांग और स्थानीय व्यापार चने के भाव में उतार-चढ़ाव ला सकते हैं। MSP को सरकारी खरीद के संदर्भ में समझें, खुली मंडी की गारंटी के रूप में नहीं।"]
        },
        {
          "title": "चना बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "देसी और काबुली चने के भाव अलग-अलग तुलना करें।",
            "बिक्री से पहले दाने की सफाई और नमी पर ध्यान दें।",
            "एक ही भाव के बजाय 2–3 मंडियों का मॉडल भाव देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "bajra": {
      "title": "बाजरा का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["बाजरा शुष्क क्षेत्रों की प्रमुख मोटा अनाज फसल है। इसका भाव स्थानीय आवक, दाने की गुणवत्ता और खाद्य या पशु-आहार की मांग के अनुसार अलग हो सकता है।"],
      "sections": [
        {
          "title": "आज का बाजरा भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["बाजरे में नमी, दाने की सफाई, रंग, आकार और अन्य दानों की मिलावट पर बोली का अंतर आ सकता है। सूखा और साफ माल अलग grade में देखा जाता है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["कटाई के समय नई आवक बढ़ने और स्थानीय मांग बदलने से बाजार पर असर पड़ता है। पास की मंडियों में परिवहन लागत भी मिलने वाले भाव का फर्क बढ़ा सकती है।"]
        },
        {
          "title": "बाजरा बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "बाजरे को अच्छी तरह सुखाकर ले जाएँ।",
            "खाद्य और पशु-आहार खरीदारों की मांग का अंतर समझें।",
            "नागौर, बीकानेर या पास की उपलब्ध मंडियों से तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "makka": {
      "title": "मक्का का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["मक्का का भाव दाने की नमी, आवक और फीड तथा औद्योगिक खरीदारों की मांग से प्रभावित हो सकता है। नई और भंडारित फसल की स्थिति भी अलग तरह से देखी जाती है।"],
      "sections": [
        {
          "title": "आज का मक्का भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["मक्के में नमी, टूटे दाने, फफूंद का जोखिम, सफाई और विदेशी पदार्थ की मात्रा खरीददार के लिए महत्वपूर्ण होती है। एकसार और सूखे lot को अलग बोली मिल सकती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["पोल्ट्री या पशु-आहार, स्टार्च और अन्य प्रसंस्करण खरीद की जरूरत बदलने पर मक्के के भाव में अंतर आ सकता है। कटाई के बाद आवक बढ़ना भी भाव को प्रभावित करता है।"]
        },
        {
          "title": "मक्का बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "नमी कम करने के बाद ही lot बेचने पर विचार करें।",
            "नया और पुराना माल अलग रखकर तुलना करें।",
            "मंडी का मॉडल भाव और न्यूनतम–अधिकतम range दोनों देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "kapas": {
      "title": "कपास और नरमा का भाव: मंडी में सही रेट कैसे समझें",
      "paragraphs": [
        "राम-राम किसान भाइयों! FasalBhav पर आपका स्वागत है। 'सफेद सोना' (White Gold) कही जाने वाली कपास और नरमा हमारे कई राज्यों (जैसे राजस्थान, हरियाणा, पंजाब और गुजरात) के किसानों की मुख्य नकदी फसल है।",
        "मंडी में अपनी मेहनत की फसल ले जाने से पहले सही भाव और बाज़ार का रुख जानना बहुत ज़रूरी है। ऊपर दी गई तालिका में आप आज अलग-अलग मंडियों के कपास के रेट देख सकते हैं। आइए जानते हैं कि मंडी में कपास का सही दाम कैसे तय होता है और आप अपनी उपज का सबसे बेहतरीन भाव कैसे ले सकते हैं।"
      ],
      "sections": [
        {
          "title": "कपास, नरमा और रूई के भाव में अंतर",
          "paragraphs": ["ऊपर की सारणी में खेत से आने वाली कपास और नरमा के उपलब्ध मंडी रिकॉर्ड दिए हैं। जिनिंग के बाद बीज अलग करके मिलने वाली रूई (Lint) का कारोबार अलग रूप और कई जगह अलग इकाई में होता है, इसलिए रूई के भाव को कपास या नरमा के प्रति क्विंटल भाव से सीधे नहीं मिलाना चाहिए। सारणी में American, Desi और Other जैसे किस्म नाम तथा FAQ या Non-FAQ जैसे grade उसी प्रकाशित source record के अनुसार दिखते हैं; तुलना उसी किस्म और grade के बीच करें।"]
        },
        {
          "title": "कपास का 'टॉप भाव' (Maximum Price) कैसे पाएं?",
          "paragraphs": ["कपास एक ऐसी फसल है जिसमें क्वालिटी का भाव पर सीधा और सबसे बड़ा असर पड़ता है। अगर आप चाहते हैं कि आपका माल मंडी में सबसे ऊँचे रेट पर बिके, तो इन 3 बातों का विशेष ध्यान रखें:"],
          "items": [
            "चुगाई में सफाई (Clean Picking): कपास में सूखे पत्ते, डंठल या कचरा (Trash) नहीं होना चाहिए। साफ और कम कचरे वाले लॉट को बेहतर grade मिल सकता है। अधिक कचरा, पत्ते या डंठल होने पर बोली कम हो सकती है।",
            "नमी (Moisture) का रखें खास ध्यान: कपास में नमी की मात्रा भाव तय करने में सबसे बड़ी भूमिका निभाती है। सुबह की ओस या बारिश की नमी वाली कपास को अच्छी तरह धूप में सुखाकर ही मंडी लाएं। नमी वाले माल में वजन घटने के डर से व्यापारी बहुत कम बोली लगाते हैं।",
            "दागी या पीली कपास को अलग रखें: कई बार बारिश या कीट के कारण कुछ कपास पीली या काली पड़ जाती है। इसे अच्छी सफेद कपास के साथ न मिलाएं। थोड़ी सी खराब कपास आपके पूरे शानदार ढेर (लॉट) का भाव गिरा सकती है।"
          ],
          "ordered": true
        },
        {
          "title": "कपास की किस्में और भाव का अंतर",
          "paragraphs": ["सारणी में कपास के source records किस्म और grade के साथ दिखते हैं, इसलिए अलग नाम वाले रिकॉर्ड का भाव सीधे एक जैसा नहीं मानना चाहिए।"],
          "items": [
            "नरमा/American Cotton: सारणी में American variety वाले रिकॉर्ड अलग दिखाई देते हैं। Bt Cotton का matching source record भी अलग पेज बनाने के बजाय इसी कपास पेज में शामिल होता है। किस्म और grade देखकर ही भाव मिलाएं।",
            "देशी कपास (Desi): सारणी में Desi नाम से दर्ज रिकॉर्ड को American variety से अलग देखकर तुलना करें। रेशे और लॉट की गुणवत्ता के अनुसार दोनों के भाव अलग हो सकते हैं।",
            "Other: स्रोत में स्पष्ट किस्म उपलब्ध न होने पर रिकॉर्ड Other नाम से दिखाई देता है। ऐसे रिकॉर्ड को किसी खास American, Bt या Desi किस्म का भाव न मानें।"
          ]
        },
        {
          "title": "मंडी भाव को सही तरीके से कैसे समझें?",
          "paragraphs": ["ऊपर दी गई भाव-तालिका में तीन तरह के रेट दिए गए हैं। अधिकतम भाव देखकर कभी भी भ्रमित न हों:"],
          "items": [
            "न्यूनतम भाव: सारणी के उपलब्ध रिकॉर्ड में दर्ज सबसे कम भाव। इसे हर बार कचरे या अधिक नमी वाले माल का भाव नहीं मानना चाहिए।",
            "अधिकतम भाव: सारणी के उपलब्ध रिकॉर्ड में दर्ज सबसे ऊँचा भाव। यह किसी खास किस्म, grade या लॉट का भाव हो सकता है।",
            "मॉडल भाव (Model Price): यह उस दिन मंडी में प्रमुख रूप से दर्ज प्रतिनिधि भाव है। अपनी फसल की किस्म और grade मिलाकर बाजार की सामान्य स्थिति समझने के लिए मॉडल भाव देखें।"
          ]
        },
        {
          "title": "भाव किन बातों से घटते-बढ़ते हैं?",
          "paragraphs": ["कपास के भाव पर स्थानीय मंडी की आवक, जिनिंग इकाइयों की खरीद, सूत (Yarn) बनाने वाली स्पिनिंग मिलों की मांग, घरेलू कपड़ा बाजार, अंतरराष्ट्रीय कपास बाजार की स्थिति और विदेशों में कपास के उत्पादन का असर पड़ता है।"]
        },
        {
          "title": "",
          "paragraphs": ["तेज़ और सटीक मंडी भाव सीधा अपने मोबाइल पर पाने के लिए हमारा WhatsApp ग्रुप जॉइन करें।"]
        }
      ]
    },
    "moongphali": {
      "title": "मूंगफली का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["मूंगफली का भाव बेचने के रूप—फली सहित या दाना—के अनुसार अलग हो सकता है। तुलना करते समय दोनों रूपों के भाव को सीधे एक जैसा नहीं मानना चाहिए।"],
      "sections": [
        {
          "title": "आज का मूंगफली भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["दाने का आकार, नमी, भराव, टूट-फूट और lot की सफाई मूंगफली की कीमत में अंतर ला सकते हैं। फली और गिरी की गुणवत्ता की जांच अलग तरीके से होती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["खाने के उपयोग और तेल मिलों की मांग, नई आवक तथा भंडारण की स्थिति से मूंगफली के भाव में बदलाव आ सकता है।"]
        },
        {
          "title": "मूंगफली बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "पहले स्पष्ट करें कि भाव फली का है या गिरी का।",
            "नमी और भराव देखकर lot तैयार करें।",
            "तेलहन मंडियों के उपलब्ध मॉडल भाव की तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "jeera": {
      "title": "जीरा का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["जीरा मसाला फसल है, इसलिए इसका भाव सामान्य अनाज से अलग तरह से चलता है। उपलब्ध मंडियों में दाने की गुणवत्ता, stock और खरीदारों की मांग के अनुसार rate बदल सकता है।"],
      "sections": [
        {
          "title": "आज का जीरा भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["जीरे के दाने का आकार, रंग, सुगंध, सफाई, नमी और टूटे या हल्के दाने lot की बोली बदल सकते हैं। अच्छे और सामान्य grade को अलग रखना उपयोगी है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["मसाला व्यापार की खरीद, उपलब्ध stock, नई आवक और घरेलू या निर्यात मांग जैसे कारक जीरे के बाजार को प्रभावित कर सकते हैं।"]
        },
        {
          "title": "जीरा बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "जीरे को साफ और सूखे lot में रखें।",
            "समान grade के भाव से ही तुलना करें।",
            "उंझा तथा अपने पास की उपलब्ध मंडियों के record देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "soyabean": {
      "title": "सोयाबीन का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["सोयाबीन का भाव तेल-निकासी, प्रसंस्करण मांग और मंडी की आवक से प्रभावित हो सकता है। अलग मंडियों में उपलब्ध lot और गुणवत्ता के कारण मॉडल भाव अलग दिख सकते हैं।"],
      "sections": [
        {
          "title": "आज का सोयाबीन भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["नमी, खराब या टूटे दाने, विदेशी पदार्थ और lot की सफाई सोयाबीन की खरीद में देखे जाते हैं। अच्छी तरह सुखाया और साफ माल अलग grade में आ सकता है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["तेल मिलों और प्रोसेसरों की खरीद, नई फसल की आवक और stock की स्थिति भाव में उतार-चढ़ाव ला सकती है। MSP सरकारी खरीद का संदर्भ है, खुली मंडी की निश्चित दर नहीं।"]
        },
        {
          "title": "सोयाबीन बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "नमी और विदेशी पदार्थ कम रखने पर ध्यान दें।",
            "इंदौर, उज्जैन या पास की उपलब्ध मंडियों से तुलना करें।",
            "सिर्फ उच्चतम भाव देखकर नहीं, model range देखकर निर्णय लें।"
          ],
          "ordered": true
        }
      ]
    },
    "dhan": {
      "title": "धान का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["धान बिना मिल वाला paddy है और इसे चावल के भाव से अलग समझना चाहिए। किस्म, नमी और मिलिंग के लिए उपयुक्तता के अनुसार इसकी मंडी कीमत बदल सकती है।"],
      "sections": [
        {
          "title": "आज का धान भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["धान में किस्म, नमी, भरे दाने, सफाई और टूटे या हल्के दानों का अनुपात खरीददार के लिए महत्वपूर्ण होता है। अलग किस्मों की तुलना एक ही भाव में नहीं करनी चाहिए।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["कटाई के समय नई आवक, राइस मिलों की खरीद और सरकारी खरीद की प्रक्रिया धान बाजार को प्रभावित कर सकती है। MSP धान की सरकारी खरीद के संदर्भ में होता है।"]
        },
        {
          "title": "धान बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "धान और चावल के भाव अलग-अलग देखें।",
            "किस्म लिखकर ही नज़दीकी मंडियों की तुलना करें।",
            "नमी और सफाई की शर्तों की जानकारी पहले लें।"
          ],
          "ordered": true
        }
      ]
    },
    "pyaz": {
    "title": "प्याज का भाव आज: मंडी रेट, 1 किलो का भाव और भाव घटने-बढ़ने के कारण",
    "paragraphs": [
      "राम-राम किसान भाइयों! प्याज ऐसी फसल है जो रसोई से लेकर मंडी तक हर जगह चर्चा में रहती है। कभी इसके भाव आसमान छूते हैं तो कभी किसान को लागत निकालना भी भारी पड़ जाता है। इसीलिए हर किसान और व्यापारी की नज़र रोज़ इसी पर रहती है कि आज मंडी में प्याज का भाव क्या चल रहा है, और आने वाले दिनों में भाव किस तरफ़ जा सकता है।",
      "FasalBhav.in पर हम प्याज का मंडी भाव रोज़ अपडेट करते हैं, ताकि आप सही जानकारी के साथ बेचने या रोकने का फ़ैसला कर सकें।"
    ],
    "sections": [
      { "title": "प्याज का भाव रोज़ इतना क्यों बदलता है?", "paragraphs": ["प्याज उन फसलों में है जिनका भाव सबसे जल्दी ऊपर-नीचे होता है। इसकी वजह यह है कि इसकी आवक, माँग और मौसम, तीनों का असर तुरंत बाज़ार पर दिखता है। मुख्य कारण ये हैं:"], "items": [
        "मंडी में आवक: जिस दिन मंडी में माल ज़्यादा आता है, उस दिन भाव दब जाता है। आवक घटते ही भाव को सहारा मिल जाता है। प्याज में यह असर इतना तेज़ होता है कि एक-दो दिन में ही भाव पलट सकता है।",
        "महाराष्ट्र की आवक का असर: देश में प्याज का बड़ा हिस्सा महाराष्ट्र, खासकर नासिक और लासलगाँव इलाके से आता है। वहाँ की आवक और भाव का असर राजस्थान, मध्य प्रदेश, गुजरात और दिल्ली की मंडियों तक पहुँचता है।",
        "बारिश और मौसम: ज़्यादा बारिश या बेमौसम बारिश से मंडी तक माल पहुँचने में देरी होती है और खेत से निकला प्याज खराब भी होता है। इससे बाज़ार में माल कम पड़ता है और भाव चढ़ सकता है।",
        "भंडारित माल की स्थिति: पुराने प्याज का स्टॉक कितना बचा है, इस पर नए प्याज के आने तक का भाव काफ़ी निर्भर करता है। स्टॉक कम हो तो भाव को सहारा मिलता है, स्टॉक ज़्यादा हो तो दबाव रहता है।",
        "निर्यात और सरकारी नीतियाँ: निर्यात पर शुल्क, रोक या छूट जैसे फ़ैसले प्याज के भाव पर सीधा असर डालते हैं। निर्यात खुलने पर माँग बढ़ती है और रोक लगने पर घरेलू बाज़ार में माल बढ़ने से भाव गिर सकता है।",
        "त्योहार और शादी का सीज़न: इस समय होटल, ढाबे और घरों में खपत बढ़ती है, जिससे माँग में तेज़ी आती है।",
        "ढुलाई और मौसम की रुकावट: रास्ते बंद होने, ट्रकों की कमी या ढुलाई महँगी होने से भी अलग-अलग मंडियों के भाव में फ़र्क आ जाता है।"
      ] },
      { "title": "1 किलो प्याज का भाव कैसे निकालें?", "paragraphs": [
        "मंडी में प्याज का भाव आमतौर पर प्रति क्विंटल (100 किलो) बताया जाता है, जबकि आम आदमी 1 किलो का भाव जानना चाहता है। हिसाब सीधा है: क्विंटल का भाव लेकर उसे 100 से भाग दे दें, तो 1 किलो का थोक भाव निकल आता है।",
        "ध्यान रखें कि यह मंडी का थोक भाव होता है। सब्ज़ी की दुकान या ठेले पर मिलने वाला खुदरा भाव इससे अलग होता है, क्योंकि उसमें ढुलाई, मंडी शुल्क, हम्माली, छँटाई में होने वाला नुकसान और दुकानदार का मुनाफ़ा जुड़ जाता है। इसलिए किसान को मिलने वाला भाव और ग्राहक के भुगतान का भाव कभी बराबर नहीं होते।"
      ] },
      { "title": "प्याज की किस्म और क्वालिटी से भाव में फ़र्क", "paragraphs": ["मंडी में सभी प्याज एक भाव पर नहीं बिकते। एक ही मंडी में एक ही दिन अलग-अलग क्वालिटी का माल अलग-अलग दाम पर बिकता है।"], "items": [
        "सुपर या वीआईपी क्वालिटी: एक समान बड़ा आकार, चमकदार छिलका, ठोस और साफ़ माल। सबसे ऊँचा भाव इसी को मिलता है।",
        "अच्छी क्वालिटी: आकार ठीक-ठाक, दाग-धब्बे कम, छँटाई अच्छी।",
        "एवरेज या सामान्य माल: आकार मिला-जुला, थोड़ा छोटा-बड़ा।",
        "गोल्टा या गोल्टी: छोटे आकार का प्याज। इसका भाव सबसे कम रहता है।",
        "लाल और सफ़ेद प्याज: दोनों की माँग और खपत का इलाका अलग है, इसलिए भाव में भी अंतर रहता है। लाल प्याज की खपत सबसे ज़्यादा है।",
        "नासिक और लोकल प्याज: नासिक इलाके का प्याज अपनी क्वालिटी के लिए जाना जाता है। स्थानीय मंडियों में अपने इलाके का प्याज भी बड़ी मात्रा में बिकता है और दोनों के भाव में फ़र्क दिख सकता है।",
        "नया और पुराना प्याज: पुराने भंडारित प्याज में नमी कम होती है और वह टिकाऊ होता है, जबकि नए प्याज में नमी ज़्यादा होती है। दोनों के भाव में अक्सर अंतर रहता है।"
      ] },
      { "title": "", "paragraphs": ["प्रो टिप: प्याज को छाँटकर, सूखा और साफ़ करके मंडी ले जाएँ। एक समान आकार का साफ़ माल अलग से बिके तो उसका भाव ऊपर की श्रेणी में मिलता है, जबकि मिला-जुला माल औसत भाव में चला जाता है। थोड़ी सी छँटाई की मेहनत का फ़र्क सीधा भाव में दिखता है।"] },
      { "title": "राजस्थान की मंडियों में प्याज का भाव", "paragraphs": ["राजस्थान में प्याज का कारोबार जयपुर, जोधपुर, अलवर, झालावाड़, कोटा, बीकानेर जैसी कई मंडियों में होता है। इन सब मंडियों का भाव एक जैसा नहीं रहता, क्योंकि हर मंडी की आवक, स्थानीय पैदावार, आसपास के राज्यों से आने वाले माल और खपत अलग होती है।"], "items": [
        "जयपुर मंडी: राज्य की सबसे बड़ी मंडी होने के कारण यहाँ आवक भी ज़्यादा होती है और यहाँ का भाव पूरे प्रदेश के लिए एक संकेत का काम करता है।",
        "जोधपुर मंडी: पश्चिमी राजस्थान की बड़ी मंडी है। यहाँ का भाव अक्सर बाहर से आने वाले माल और स्थानीय माँग पर निर्भर रहता है।",
        "अलवर मंडी: दिल्ली-एनसीआर के करीब होने से यहाँ के भाव पर दिल्ली की माँग का असर दिखता है।",
        "झालावाड़ मंडी: मध्य प्रदेश से सटा इलाका है, इसलिए वहाँ की मंडियों की हलचल का असर यहाँ भी पड़ता है।"
      ] },
      { "title": "", "paragraphs": ["अपनी नज़दीकी मंडी के साथ आसपास की एक-दो मंडियों का भाव भी ज़रूर देखें। कभी-कभी थोड़ी दूर की मंडी में बेहतर भाव मिल जाता है। पर वहाँ माल ले जाने से पहले ढुलाई और दूसरे खर्च जोड़कर देख लें कि असली बचत कितनी होगी।"] },
      { "title": "दूसरे राज्यों की प्रमुख प्याज मंडियाँ", "items": [
        "महाराष्ट्र: लासलगाँव, पिंपलगाँव और नासिक इलाके की मंडियाँ देश में प्याज के भाव की दिशा तय करने वाली मानी जाती हैं।",
        "मध्य प्रदेश: इंदौर, उज्जैन और मंदसौर की मंडियों में प्याज की अच्छी आवक रहती है। इंदौर की मंडी में महाराष्ट्र और स्थानीय, दोनों का माल आता है।",
        "गुजरात: महुवा और गोंडल की मंडियाँ प्याज के लिए जानी जाती हैं।",
        "दिल्ली: आज़ादपुर मंडी उत्तर भारत की सबसे बड़ी मंडियों में है और यहाँ के भाव की चर्चा पूरे देश में होती है।",
        "उत्तर प्रदेश: प्रयागराज, कानपुर और लखनऊ जैसी मंडियों में भी प्याज का बड़ा कारोबार होता है।"
      ] },
      { "title": "प्याज का भाव कब बढ़ता है और कब गिरता है?", "paragraphs": ["हर साल प्याज के भाव का एक आम चक्र देखा जाता है, हालाँकि यह हर साल एक जैसा नहीं रहता।"], "items": [
        "नई फसल की आवक का समय: जब मंडियों में नया प्याज बड़ी मात्रा में आता है, तब भाव पर दबाव रहता है। रबी का प्याज आमतौर पर मार्च से मई के बीच बड़ी मात्रा में आता है, इसीलिए इस दौरान भाव अक्सर नरम रहता है।",
        "भंडारित माल पर निर्भरता का समय: नई आवक घटने के बाद बाज़ार काफ़ी हद तक भंडारित प्याज पर चलता है। अगर स्टॉक कम बचा हो, तो इस दौरान भाव में तेज़ी आ सकती है।",
        "खरीफ की नई आवक से पहले: जब पुराना माल खत्म होने लगता है और नया माल आने में देर होती है, तब कई बार भाव चढ़ते देखे गए हैं।",
        "त्योहारी माँग: त्योहार और शादियों के मौसम में खपत बढ़ने से बाज़ार में मज़बूती आती है।"
      ] },
      { "title": "", "paragraphs": ["यह केवल आम रुझान है। हर साल की पैदावार, बारिश, निर्यात नीति और स्टॉक के हिसाब से तस्वीर बदल सकती है।"] },
      { "title": "प्याज का भाव कब बढ़ेगा, और आगे कैसा रहेगा?", "paragraphs": [
        "यह सवाल हर किसान पूछता है, लेकिन सच्चाई यह है कि प्याज का भविष्य का भाव कोई पक्के तौर पर नहीं बता सकता। जो भी ‘पक्का बढ़ेगा’ या ‘पक्का गिरेगा’ जैसे दावे करे, उन पर आँख मूँदकर भरोसा न करें।",
        "हाँ, कुछ बातें देखकर आप अपना अंदाज़ा ज़रूर लगा सकते हैं:"
      ], "items": [
        "मंडियों में आवक बढ़ रही है या घट रही है",
        "पिछले कुछ दिनों में भाव किस तरफ़ जा रहा है",
        "मौसम और बारिश की स्थिति कैसी है",
        "निर्यात और सरकारी नीति में कोई बदलाव तो नहीं आया",
        "भंडारण में कितना माल बचा है, इसकी चर्चा मंडी में क्या है"
      ] },
      { "title": "", "paragraphs": ["रोज़ भाव देखने की आदत बना लें। दो-चार दिन लगातार भाव देखने से आपको दिशा का अंदाज़ा मिलने लगेगा और आप जल्दबाज़ी में फ़ैसला लेने से बच पाएँगे।"] },
      { "title": "प्याज बेचने से पहले इन बातों का ध्यान रखें", "items": [
        "सिर्फ़ एक दिन के भाव पर फ़ैसला न लें। कुछ दिनों का रुझान ज़रूर देखें।",
        "अपनी मंडी के साथ आसपास की 2-3 मंडियों का भाव मिलाकर देखें।",
        "ढुलाई, हम्माली, तुलाई और मंडी शुल्क घटाकर असली बचत निकालें।",
        "प्याज को छाँटकर और साफ़ करके ले जाएँ, क्योंकि छँटे हुए माल का भाव बेहतर मिलता है।",
        "बहुत ज़्यादा आवक वाले दिन माल ले जाने से बचें, अगर आपके पास रुकने की गुंजाइश हो।",
        "आढ़ती या व्यापारी से भुगतान की शर्तें पहले तय कर लें, और उधार पर सौदा करते समय खास सावधानी रखें।",
        "तौल की पर्ची और भुगतान की रसीद हमेशा संभालकर रखें।"
      ], "ordered": true },
      { "title": "प्याज का भंडारण और भाव का संबंध", "paragraphs": ["प्याज उन फसलों में है जिनका भंडारण भाव का बड़ा खेल तय करता है। जिन किसानों के पास सही भंडारण की सुविधा होती है, वे भाव कमज़ोर होने पर माल रोक सकते हैं और भाव सुधरने पर बेच सकते हैं। लेकिन इसमें जोखिम भी है: भंडारण के दौरान प्याज में सड़न, अंकुरण और वज़न में कमी होती है, और भाव न सुधरे तो नुकसान बढ़ जाता है।"], "items": [
        "भंडारण के लिए सूखा, अच्छी तरह पका और साफ़ माल ही रखें।",
        "हवादार जगह पर भंडारण करें, जहाँ नमी न हो।",
        "बीच-बीच में माल की जाँच करते रहें और सड़ने वाले प्याज को अलग कर दें।",
        "भंडारण में होने वाले नुकसान और खर्च को भी हिसाब में रखें, तभी सही अंदाज़ा लगेगा कि रोकने का फ़ायदा है या नहीं।"
      ] },
      { "title": "निष्कर्ष", "paragraphs": [
        "प्याज का सौदा सिर्फ़ आज का भाव देखकर नहीं होता। आवक, क्वालिटी, आसपास की मंडियों का रेट, भंडारण की सुविधा और अपनी आर्थिक ज़रूरत, इन सबको मिलाकर फ़ैसला लेने से ही अच्छा दाम मिलता है। रोज़ प्याज और दूसरी फसलों का ताज़ा मंडी भाव जानने के लिए FasalBhav.in पर आते रहें।",
        "खेती की उपयोगी जानकारी और मंडी भाव सीधे अपने फोन पर पाने के लिए हमारा मुफ्त WhatsApp ग्रुप ज़रूर जॉइन करें।",
        "सूचना: इस पेज पर दिए गए भाव केवल जानकारी के लिए हैं। खरीद-बिक्री का फ़ैसला करने से पहले अपनी मंडी में भाव की पुष्टि ज़रूर करें।"
      ] }
    ]
  },
    "aalu": {
      "title": "आलू का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["आलू का भाव अलग-अलग मंडियों में आवक, छंटाई, आकार, गुणवत्ता और स्थानीय मांग के अनुसार बदल सकता है। मंडी भाव और खुदरा दुकान का भाव एक जैसा होना जरूरी नहीं है, इसलिए बिक्री या खरीद से पहले उपलब्ध मंडी records की तुलना उपयोगी रहती है।"],
      "sections": [
        {
          "title": "आज का आलू भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी के साथ उपलब्ध दूसरी मंडियों की range देखने से केवल एक भाव पर निर्भर रहने की जरूरत नहीं पड़ती।"],
          "items": [
            "आलू की मंडी और राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव के अंतर को समझें।",
            "भाव को प्रति क्विंटल और जरूरत हो तो प्रति किलो में देखें।"
          ]
        },
        {
          "title": "आकार, छंटाई और गुणवत्ता का असर",
          "paragraphs": ["आलू में size, छंटाई, छिलके की स्थिति, कटे या सड़े कंद और lot की एकरूपता से grade बनते हैं। बड़े, साफ और एक जैसे कंद की बोली छोटे या मिश्रित lot से अलग हो सकती है।"]
        },
        {
          "title": "नई फसल, cold storage और आवक",
          "paragraphs": ["नई खुदाई की आवक और cold storage से निकला आलू बाजार में अलग स्थिति बना सकते हैं। स्थानीय उत्पादन, परिवहन और खरीदारों की मांग बदलने पर मंडी की भाव-range भी बदल सकती है।"]
        },
        {
          "title": "आलू बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "छंटा हुआ और मिश्रित माल अलग-अलग रखें।",
            "सड़े, कटे या बहुत छोटे आलू अच्छे lot में न मिलाएँ।",
            "मंडी भाव और खुदरा भाव की सीधी तुलना न करें।",
            "बिक्री से पहले 2–3 नज़दीकी मंडियों के उपलब्ध भाव देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "tamatar": {
      "title": "टमाटर का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["टमाटर जल्दी खराब होने वाली सब्जी है, इसलिए इसका भाव आवक और ताजगी के साथ बहुत तेजी से बदल सकता है। केवल एक मंडी के भाव के बजाय उपलब्ध range देखना बेहतर रहता है।"],
      "sections": [
        {
          "title": "आज का टमाटर भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["पकाव, firmness, आकार, रंग, चोट और सड़न टमाटर के grade बनाते हैं। एक ही खेप में बहुत पका और कच्चा माल मिलने पर बोली अलग हो सकती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["मौसम, स्थानीय खेतों की आवक, परिवहन और जल्दी खराब होने की प्रकृति टमाटर के बाजार पर तत्काल असर डालते हैं।"]
        },
        {
          "title": "टमाटर बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "बहुत पके और मजबूत टमाटर अलग-अलग रखें।",
            "दूर की मंडी भेजने से पहले परिवहन लागत जोड़ें।",
            "भाव प्रति किलो और प्रति क्विंटल दोनों रूप में देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "gwar": {
      "title": "ग्वार का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["यहाँ ग्वार को seed crop के रूप में देखा जाता है, सब्जी के रूप में नहीं। इसका भाव दाने की गुणवत्ता, नमी और प्रसंस्करण मांग के कारण अलग हो सकता है।"],
      "sections": [
        {
          "title": "आज का ग्वार भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["ग्वार में दाने की सफाई, नमी, रंग, आकार और विदेशी पदार्थ की मात्रा lot की कीमत बदल सकती है। साफ और सूखा माल अलग grade में आता है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["ग्वार gum और अन्य प्रसंस्करण की खरीद, मौसमी आवक तथा stock की स्थिति बाजार के रुझान पर असर डाल सकती है।"]
        },
        {
          "title": "ग्वार बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "ग्वार seed के भाव की ही तुलना करें।",
            "नमी और सफाई पर ध्यान दें।",
            "बीकानेर, नागौर या अपनी नज़दीकी उपलब्ध मंडी का record देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "jau": {
      "title": "जौ का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["जौ का भाव दाने की गुणवत्ता, स्थानीय आवक और अलग-अलग खरीदारों की जरूरत पर बदल सकता है। इसे गेहूं के भाव का सीधा विकल्प नहीं मानना चाहिए।"],
      "sections": [
        {
          "title": "आज का जौ भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["दाने का आकार, भराव, सफाई, नमी और टूटे दाने जौ के lot की बोली को प्रभावित कर सकते हैं। एकसार और सूखे माल की तुलना अलग तरह से होती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["खाद्य, पशु-आहार और प्रसंस्करण खरीदारों की मांग बदलने पर जौ के भाव में अंतर आ सकता है। कटाई के बाद आवक बढ़ना भी महत्वपूर्ण है।"]
        },
        {
          "title": "जौ बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "जौ को साफ और सूखा रखकर बेचें।",
            "गेहूं नहीं, जौ के उपलब्ध records से तुलना करें।",
            "मंडी की range और record की ताजगी दोनों देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "moong": {
      "hideTitle": true,
      "paragraphs": ["राम-राम किसान भाईयों! मूंग दलहन की एक महत्वपूर्ण फसल है। कम समय में तैयार होने वाली और कम पानी में भी अच्छी पैदावार देने के कारण बहुत से किसान भाई इसे अपनी खेती का हिस्सा बनाते हैं। लेकिन मंडी में मूंग का सही भाव पाना केवल किस्मत का खेल नहीं, बल्कि सही जानकारी और तैयारी का परिणाम है। आइए, मूंग के बाज़ार को करीब से समझते हैं।"],
      "sections": [
        {
          "title": "मंडी में सही भाव कैसे पाएं?",
          "paragraphs": ["व्यापारी मूंग को देखते ही भांप लेते हैं कि माल कैसा है। अगर आप चाहते हैं कि आपको बाज़ार का सबसे ऊँचा दाम मिले, तो तीन बातों का ध्यान रखें: नमी (10-12% से कम), दाने की चमक, और सफाई। जो मूंग अच्छी तरह धूप में सुखाई गई हो, उसे व्यापारी हमेशा प्रीमियम भाव देते हैं। बेचने से पहले अपनी मूंग की ग्रेडिंग खुद करें—साफ और बोल्ड दाने का दाम हमेशा छंटाई न किए हुए माल से 200-500 रुपये प्रति क्विंटल ज्यादा होता है।"]
        },
        {
          "title": "उन्नत किस्में और पैदावार",
          "paragraphs": ["किसान भाई अक्सर पूछते हैं कि कौन सी किस्म बोएं? आज के दौर में सम्राट, गंगा-8, और पूसा जैसी किस्में अपनी पैदावार और रोग-प्रतिरोधक क्षमता के लिए जानी जाती हैं। व्यापारी भी उन्हीं किस्मों को ज्यादा पसंद करते हैं जिनका छिलका पतला और दाना चमकदार होता है। किस्म का चयन अपनी मिट्टी और मौसम के हिसाब से करें, क्योंकि अच्छा दाना मतलब सीधा मुनाफे में बढ़ोतरी।"]
        },
        {
          "title": "बाज़ार का ट्रेंड: तेज़ी कब आएगी?",
          "paragraphs": ["लोग पूछते हैं—\"मूंग का भाव आगे क्या होगा?\" भाई, बाज़ार में दो ही चीज़ें चलती हैं—आवक और दाल मिलों की मांग। जब सीजन की शुरुआत में भारी मात्रा में मूंग मंडियों में पहुँचती है, तो शुरुआत में थोड़े दबाव के कारण भाव कम हो सकते हैं। लेकिन जैसे-जैसे आवक कम होती है और दाल मिलों व निर्यातकों की मांग बढ़ती है, भाव में तेज़ी आने लगती है। हमेशा अपने नज़दीकी बड़े केंद्रों के भावों पर नज़र रखें, वहां का ट्रेंड बाज़ार की दिशा बताता है।"]
        },
        {
          "title": "MSP और सरकारी खरीद का लाभ",
          "paragraphs": ["मूंग के लिए सरकार द्वारा घोषित न्यूनतम समर्थन मूल्य (MSP) हमारे लिए एक सुरक्षा घेरा है। अगर बाज़ार में भाव बहुत गिर जाए, तो घबराना नहीं है। सरकारी खरीद केंद्रों (NAFED) पर पंजीकरण कराकर आप अपना माल MSP पर बेच सकते हैं। एक जागरूक किसान के तौर पर हमेशा बेचने से पहले बाज़ार भाव और सरकारी MSP की तुलना ज़रूर करें।"]
        },
        {
          "title": "भंडारण में सावधानी",
          "paragraphs": ["अक्सर हम भाव बढ़ने के इंतज़ार में मूंग घर पर स्टॉक कर लेते हैं। यहाँ एक बात ज़रूर ध्यान रखें—भंडारण करते समय अगर नमी रह गई, तो घुन या कीड़े लगने का खतरा बना रहता है। नीम की पत्तियों का इस्तेमाल करें या एयर-टाइट बैग्स में रखें। बिना क्वालिटी के स्टोरेज से भाव बढ़ना तो दूर, माल की कीमत ही गिर जाती है।"]
        },
        {
          "title": "",
          "paragraphs": ["खेती करना मेहनत का काम है, लेकिन सही समय पर सही मंडी में फसल बेचना बुद्धिमानी का। याद रखें, आपकी मूंग की चमक ही आपकी मेहनत की असल पहचान है। अगली बार मंडी जाने से पहले इस पेज को चेक करें और अपनी फसल का पूरा हक पाएं।"]
        }
      ]
    },
    "moth": {
      "title": "मोठ का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["मोठ सूखा क्षेत्र की दलहन फसल है। इसकी मंडी आवक सभी जगह एक जैसी नहीं होती, इसलिए एक record को पूरे बाजार का भाव मानना ठीक नहीं है।"],
      "sections": [
        {
          "title": "आज का मोठ भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["दाने का आकार, रंग, सफाई, नमी और हल्के दानों की मात्रा मोठ की बोली में अंतर ला सकती है। lot की एकरूपता उपयोगी रहती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["स्थानीय खरीदारों की जरूरत, उपलब्ध stock और सीमित या अधिक आवक के अनुसार मोठ का भाव बदल सकता है। पास की 2–3 मंडियों की तुलना बेहतर संकेत देती है।"]
        },
        {
          "title": "मोठ बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "एक ही ऊँचे भाव पर बिक्री तय न करें।",
            "साफ और सूखे दाने अलग lot में रखें।",
            "नोखा, बीकानेर, नागौर या पास के उपलब्ध records देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "til": {
      "title": "तिल का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["तिल तेलहन और खाद्य बीज दोनों रूप में कारोबार होता है। इसका भाव रंग, प्रकार, सफाई तथा मांग के अनुसार मंडी से मंडी अलग हो सकता है।"],
      "sections": [
        {
          "title": "आज का तिल भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["तिल में रंग, बीज की एकरूपता, नमी, सफाई और अन्य बीजों की मिलावट पर खरीददार ध्यान देते हैं। अलग रंग या type के तिल की तुलना सावधानी से करें।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["खाद्य उपयोग, तेल निकालने की मांग, seasonal आवक और stock की स्थिति तिल के भाव को प्रभावित कर सकती है।"]
        },
        {
          "title": "तिल बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "रंग और type साफ लिखकर भाव पूछें।",
            "नमी तथा मिलावट कम रखें।",
            "एक ही मंडी की जगह उपलब्ध कई records देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "jowar": {
      "title": "ज्वार का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["ज्वार का भाव किस्म, दाने की गुणवत्ता और खाद्य या पशु-आहार की स्थानीय मांग से बदल सकता है। विभिन्न रंग या किस्मों को एक ही lot की तरह नहीं देखना चाहिए।"],
      "sections": [
        {
          "title": "आज का ज्वार भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["दाने की सफाई, रंग, आकार, नमी और भराव ज्वार की मंडी बोली को प्रभावित कर सकते हैं। साफ और सूखे माल का grade अलग हो सकता है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["नई आवक, स्थानीय consumption और feed demand बदलने पर ज्वार के भाव में अंतर आ सकता है। नज़दीकी राज्यों की मंडियों में भी अलग range मिल सकती है।"]
        },
        {
          "title": "ज्वार बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "किस्म बताकर ही भाव की तुलना करें।",
            "नमी और सफाई पर ध्यान दें।",
            "मंडी-वार मॉडल भाव देखकर निर्णय लें।"
          ],
          "ordered": true
        }
      ]
    },
    "arhar": {
      "title": "अरहर का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["अरहर को तूर भी कहा जाता है और इसका भाव दाल बाजार, दाने की गुणवत्ता तथा आवक से बदल सकता है। whole grain और processed दाल की कीमत अलग होती है।"],
      "sections": [
        {
          "title": "आज का अरहर भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["दाने का आकार, रंग, सफाई, नमी और टूटे दानों की मात्रा अरहर के grade में अंतर लाती है। lot की गुणवत्ता के अनुसार बोली बदल सकती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["दाल मिलों की खरीद, नई फसल की आवक और उपलब्ध stock अरहर के बाजार को प्रभावित कर सकते हैं। MSP को सरकारी खरीद के संदर्भ में ही देखें।"]
        },
        {
          "title": "अरहर बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "अरहर और तैयार दाल के भाव न मिलाएँ।",
            "नमी और दाने की सफाई पर ध्यान दें।",
            "उपलब्ध मंडियों की range से तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "urad": {
      "title": "उड़द का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["उड़द का बाजार whole grain और दाल प्रसंस्करण की मांग से प्रभावित हो सकता है। रंग, आकार और lot की सफाई के कारण अलग मंडियों में भाव की range बदल सकती है।"],
      "sections": [
        {
          "title": "आज का उड़द भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["काले दाने की रंगत, आकार, सफाई, नमी और टूटे दाने उड़द की खरीद में देखे जाते हैं। एकसार lot की कीमत अलग हो सकती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["दाल मिलों की जरूरत, मौसमी आवक और stock की स्थिति उड़द के भाव पर असर डाल सकती है। खुली मंडी का भाव सरकारी समर्थन मूल्य से अलग हो सकता है।"]
        },
        {
          "title": "उड़द बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "whole उड़द और processed दाल को अलग समझें।",
            "दाने का रंग और नमी देखकर lot तैयार करें।",
            "कई मंडियों के उपलब्ध भाव मिलाकर देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "masoor": {
      "title": "मसूर का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["मसूर दाल की फसल है और इसका भाव दाने के रंग, आकार, गुणवत्ता तथा स्थानीय दाल व्यापार के अनुसार बदल सकता है। whole मसूर और तैयार दाल की कीमत अलग रहती है।"],
      "sections": [
        {
          "title": "आज का मसूर भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["समान रंग, दाने का आकार, सफाई, नमी और टूटे दानों की मात्रा मसूर के grade को प्रभावित करती है। साफ lot की तुलना साफ lot से ही करें।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["रबी आवक, दाल मिलों की मांग और उपलब्ध stock बदलने पर मसूर बाजार में अंतर आ सकता है। अलग मंडियों की price range देखना उपयोगी है।"]
        },
        {
          "title": "मसूर बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "whole मसूर और दाल की कीमत न मिलाएँ।",
            "माल को सूखा और साफ रखें।",
            "एक दिन के एक भाव के बजाय मंडी-वार range देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "isabgol": {
      "title": "इसबगोल का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["इसबगोल बीज और भूसी से जुड़े विशेष बाजार की फसल है। इसका भाव सामान्य अनाज की तरह नहीं समझना चाहिए; lot की शुद्धता और प्रसंस्करण-योग्यता महत्वपूर्ण हो सकती है।"],
      "sections": [
        {
          "title": "आज का इसबगोल भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["बीज की सफाई, नमी, विदेशी पदार्थ और lot की एकरूपता इसबगोल की खरीद में देखी जाती है। बीज और भूसी के बाजार-मूल्य को सीधे एक जैसा नहीं माना जाता।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["प्रसंस्करण इकाइयों की मांग, उपलब्ध stock और seasonal आवक के अनुसार इसबगोल के भाव में अंतर आ सकता है। स्वास्थ्य संबंधी दावे कीमत का विश्वसनीय आधार नहीं हैं।"]
        },
        {
          "title": "इसबगोल बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "बीज और भूसी का भाव अलग-अलग पूछें।",
            "नमी और विदेशी पदार्थ कम रखें।",
            "उंझा या पास की उपलब्ध मंडियों के समान grade records से तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "lahsun": {
      "title": "लहसुन का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["लहसुन का भाव गांठ के आकार, सूखाई, ताजगी और मंडी आवक के साथ बदल सकता है। नई और भंडारित फसल के lot की बोली अलग हो सकती है।"],
      "sections": [
        {
          "title": "आज का लहसुन भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["गांठ का आकार, बाहरी छिलके की सूखाई, सफाई, टूटे bulb, सड़न और रंग लहसुन की quality को प्रभावित करते हैं। अलग grade को अलग lot में रखें।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["नई आवक, भंडारण से निकला माल, घरेलू मांग और मौसम के कारण लहसुन की उपलब्धता तथा भाव बदल सकते हैं।"]
        },
        {
          "title": "लहसुन बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "बड़े और छोटे bulb अलग करें।",
            "गीले या खराब lot को अच्छे माल से न मिलाएँ।",
            "प्रति क्विंटल और प्रति किलो दोनों भाव समझें।"
          ],
          "ordered": true
        }
      ]
    },
    "haldi": {
      "title": "हल्दी का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["हल्दी मसाला फसल है और इसका भाव सूखी गांठ की गुणवत्ता, रंग तथा मंडी में उपलब्ध lot के अनुसार बदल सकता है। नई और stored हल्दी में भी अंतर हो सकता है।"],
      "sections": [
        {
          "title": "आज का हल्दी भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["गांठ या finger का आकार, रंग, सुखाई, नमी, सफाई और टूट-फूट हल्दी की बोली को प्रभावित कर सकते हैं। समान grade की तुलना करना जरूरी है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["मसाला व्यापार, पिसाई या प्रसंस्करण की मांग, seasonal आवक और stock की स्थिति हल्दी बाजार में बदलाव ला सकती है।"]
        },
        {
          "title": "हल्दी बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "अच्छी तरह सूखी हल्दी का lot अलग रखें।",
            "रंग और आकार के अनुसार grade समझें।",
            "एक से अधिक उपलब्ध मंडियों के भाव की तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "adrak": {
      "title": "अदरक का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["अदरक ताजी उपज है, इसलिए इसका भाव गांठ की ताजगी, आकार और परिवहन के साथ जल्दी बदल सकता है। अलग मंडियों में स्थानीय आवक का असर अलग दिखता है।"],
      "sections": [
        {
          "title": "आज का अदरक भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["गांठ का आकार, maturity, ताजगी, सफाई, टूट-फूट और अधिक रेशा quality में अंतर ला सकते हैं। गीला या चोट वाला माल अलग grade में जाता है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["बारिश, परिवहन, स्थानीय आवक और जल्दी खराब होने की प्रकृति अदरक के भाव को प्रभावित कर सकती है।"]
        },
        {
          "title": "अदरक बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "ताजा और पुराना/कमजोर माल अलग रखें।",
            "भेजने से पहले परिवहन खर्च जोड़ें।",
            "क्विंटल और किलो की दर का फर्क समझें।"
          ],
          "ordered": true
        }
      ]
    },
    "mirch": {
      "title": "मिर्च का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["इस page पर मिर्च को सामान्य commodity के रूप में दिखाया गया है; source में जिस रूप का record उपलब्ध हो, उसी के अनुसार भाव समझें। इसे अपने-आप हरी या सूखी मिर्च मानना ठीक नहीं है।"],
      "sections": [
        {
          "title": "आज का मिर्च भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["किस्म, रंग, आकार, नमी, सफाई और lot की स्थिति मिर्च की कीमत बदल सकते हैं। अलग form या variety के भाव को एक साथ न मिलाएँ।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["मसाला या ताजी उपज की मांग, मौसमी आवक और stock के अनुसार मिर्च बाजार में अंतर आ सकता है। उपलब्ध record का commodity नाम पहले पढ़ें।"]
        },
        {
          "title": "मिर्च बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "भाव देखने से पहले commodity form जाँचें।",
            "किस्म और quality एक जैसी रखकर तुलना करें।",
            "हरी मिर्च के लिए अलग page के भाव देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "hari-mirch": {
      "title": "हरी मिर्च का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["हरी मिर्च ताजी और जल्दी खराब होने वाली सब्जी है; यह सामान्य मिर्च crop से अलग है। इसका भाव ताजगी, रंग और रोज की स्थानीय आवक से जल्दी बदल सकता है।"],
      "sections": [
        {
          "title": "आज का हरी मिर्च भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["हरा रंग, firmness, आकार, ताजगी, चोट और सड़न हरी मिर्च के grade को प्रभावित करते हैं। मिलेजुले आकार के lot को अलग बोली मिल सकती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["मौसम, स्थानीय उत्पादन, परिवहन और कम shelf life के कारण हरी मिर्च की मंडी range तेजी से बदल सकती है।"]
        },
        {
          "title": "हरी मिर्च बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "हरी मिर्च को सामान्य मिर्च के record से न मिलाएँ।",
            "ताजा और खराब माल अलग रखें।",
            "प्रति किलो भाव ध्यान से देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "rice": {
      "title": "चावल का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["चावल धान से अलग, मिलिंग के बाद का उत्पाद है। इसलिए धान के भाव या MSP को चावल के मंडी भाव का सीधा विकल्प नहीं मानना चाहिए।"],
      "sections": [
        {
          "title": "आज का चावल भाव कैसे देखें",
          "paragraphs": ["चावल में उपलब्ध record देखते समय variety, grain length, टूटे दाने और grade जरूर मिलाएँ। धान की table या paddy record से चावल का मूल्य अनुमानित न करें।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["चावल की किस्म, दाने की लंबाई, टूटे दानों का अनुपात, रंग, polish और सफाई grade तय कर सकते हैं। अलग प्रकार के rice का भाव अलग होता है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["मिलिंग, थोक खरीद, पैकिंग और seasonal supply चावल के व्यापार को प्रभावित कर सकते हैं। उपलब्ध record कम हों तो एक भाव को पूरे बाजार का मानक न समझें।"]
        },
        {
          "title": "चावल बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "धान और चावल के भाव अलग-अलग देखें।",
            "किस्म और broken grade पूछकर ही तुलना करें।",
            "कम records होने पर नज़दीकी व्यापारी या मंडी से अतिरिक्त पुष्टि लें।"
          ],
          "ordered": true
        }
      ]
    },
    "dhaniya": {
      "title": "धनिया का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["धनिया दाना मसाला फसल है; इसे हरे धनिये की पत्तियों के भाव से अलग समझना चाहिए। दाने की quality और मसाला व्यापार की खरीद से इसका बाजार बदल सकता है।"],
      "sections": [
        {
          "title": "आज का धनिया भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["दाने का आकार, रंग, सुगंध, नमी, सफाई और हल्के दाने धनिया की बोली को प्रभावित करते हैं। छंटा हुआ lot अलग grade में आ सकता है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["मसाला व्यापार, नई आवक, उपलब्ध stock और घरेलू मांग धनिया के भाव पर असर डाल सकते हैं। अलग मंडियों की range देखकर निर्णय लेना बेहतर है।"]
        },
        {
          "title": "धनिया बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "धनिया दाना और हरा धनिया अलग रखें।",
            "सुगंध, रंग और सफाई के अनुसार lot बनाएं।",
            "रामगंज मंडी या पास के उपलब्ध records से तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "hara-dhaniya": {
      "title": "हरा धनिया का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["हरा धनिया पत्तेदार ताजी उपज है और धनिया दाने से अलग crop है। इसकी कीमत पत्तियों की freshness, bunch quality और स्थानीय आवक पर तेजी से बदल सकती है।"],
      "sections": [
        {
          "title": "आज का हरा धनिया भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["पत्तियों का हरा रंग, सुगंध, कोमलता, साफ-सफाई और bunch की एकरूपता भाव पर असर डालते हैं। मुरझाया या पीला माल अलग grade में जाता है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["मौसम, स्थानीय आपूर्ति, परिवहन और कम shelf life के कारण हरे धनिये की उपलब्धता जल्दी बदल सकती है।"]
        },
        {
          "title": "हरा धनिया बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "हरा धनिया और धनिया दाना के भाव न मिलाएँ।",
            "ताजा bunch अलग रखें।",
            "प्रति किलो कीमत और bunch की गुणवत्ता दोनों समझें।"
          ],
          "ordered": true
        }
      ]
    },
    "saunf": {
      "title": "सौंफ का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["सौंफ मसाला बीज है और इसका भाव दाने की गुणवत्ता, रंग, सुगंध और व्यापार की मांग के अनुसार बदल सकता है। समान नाम की अलग quality में भाव अलग होना सामान्य है।"],
      "sections": [
        {
          "title": "आज का सौंफ भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["दाने का आकार, हरा या हल्का रंग, सुगंध, नमी, सफाई और मिलावट सौंफ के grade को प्रभावित करते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["मसाला खरीदारों की मांग, seasonal आवक और stock की स्थिति सौंफ बाजार में अंतर ला सकती है।"]
        },
        {
          "title": "सौंफ बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "रंग और आकार के आधार पर lot अलग रखें।",
            "नमी और सफाई की स्थिति जांचें।",
            "उंझा या उपलब्ध अन्य मंडियों के समान grade भाव देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "sua": {
      "title": "सुआ का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["सुआ एक सुगंधित बीज वाली फसल है, जिसका उपयोग मसाले के रूप में होता है। इसे हरी सुआ पत्ती से अलग समझना जरूरी है, क्योंकि दोनों की बिक्री का रूप और भाव की इकाई अलग हो सकती है।"],
      "sections": [
        {
          "title": "आज का सुआ भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["सुआ के सूखे बीज में दाने की सफाई, एकरूपता, खुशबू, नमी और दूसरे बीजों या धूल की मिलावट बोली पर असर डाल सकती है। साफ और अच्छी तरह सूखा हुआ लॉट अलग गुणवत्ता में माना जाता है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["मौसमी आवक, स्थानीय मसाला कारोबार और उपलब्ध स्टॉक के कारण सुआ के भाव में मंडी-वार अंतर हो सकता है। उपलब्ध रिकॉर्ड आने पर मॉडल भाव के साथ न्यूनतम और अधिकतम रेट की तुलना करना उपयोगी रहेगा।"]
        },
        {
          "title": "सुआ बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "सुआ और सुआ पत्ती के भाव को एक-दूसरे से न मिलाएं।",
            "बिक्री से पहले दाने की नमी, सफाई और मिलावट अलग से जांचें।",
            "एक ही रेट के बजाय उपलब्ध मंडियों के मॉडल भाव और रिकॉर्ड की तारीख देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "sua-patti": {
      "title": "सुआ पत्ती का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["सुआ पत्ती ताजी, खुशबूदार हरी पत्तियों वाली मौसमी सब्जी है। यह सूखे सुआ बीज से अलग उत्पाद है और इसकी कीमत सामान्यतः प्रति किलो समझी जाती है।"],
      "sections": [
        {
          "title": "आज का सुआ पत्ती भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["ताजगी, हरा रंग, कोमल पत्तियां, साफ छंटाई और बिना मुरझाए बंडल सुआ पत्ती की गुणवत्ता में फर्क लाते हैं। पीली, दबाई हुई या ज्यादा डंठल वाली पत्तियों का भाव अलग हो सकता है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["सर्दियों की स्थानीय आवक, जल्दी खराब होने की प्रकृति और आसपास की मांग के कारण सुआ पत्ती का बाजार भाव तेजी से बदल सकता है। उपलब्ध रिकॉर्ड में प्रति किलो भाव देखकर ही तुलना करें।"]
        },
        {
          "title": "सुआ पत्ती बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "सुआ पत्ती का भाव सूखे सुआ बीज से अलग देखें।",
            "ताजे और मुरझाए बंडल अलग रखकर गुणवत्ता समझें।",
            "खरीद या बिक्री से पहले प्रति किलो दर और बंडल की ताजगी दोनों देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "methi": {
      "title": "मेथी दाना का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["मेथी दाना मसाला और बीज फसल है; इसे पान मेथी की ताजी पत्तियों के भाव से अलग देखें। दाने की quality और seasonal आवक के साथ इसका रेट बदल सकता है।"],
      "sections": [
        {
          "title": "आज का मेथी दाना भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["दाने का रंग, आकार, सफाई, नमी और टूटे दाने मेथी के lot की बोली को प्रभावित कर सकते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["मसाला व्यापार, प्रसंस्करण मांग और नई आवक मेथी के भाव पर असर डाल सकते हैं। उपलब्ध मंडियों में range अलग हो सकती है।"]
        },
        {
          "title": "मेथी दाना बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "मेथी दाना और पान मेथी अलग रखें।",
            "साफ और सूखे दाने बेचें।",
            "किस्म या grade मिलाकर तुलना न करें।"
          ],
          "ordered": true
        }
      ]
    },
    "hari-methi": {
      "title": "पान मेथी का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["पान मेथी ताजी पत्तेदार उपज है और मेथी दाने से अलग crop है। इसकी कीमत कोमल पत्तियों, freshness और स्थानीय supply के अनुसार जल्दी बदल सकती है।"],
      "sections": [
        {
          "title": "आज का पान मेथी भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["कोमल हरे पत्ते, bunch की सफाई, एकरूपता और मुरझाने की स्थिति पान मेथी की गुणवत्ता तय करती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["ठंडे मौसम, दैनिक स्थानीय आवक, परिवहन और जल्दी खराब होने की प्रकृति पान मेथी के भाव पर असर डाल सकती है।"]
        },
        {
          "title": "पान मेथी बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "पान मेथी और मेथी दाना के भाव अलग देखें।",
            "ताजे bunch को खराब पत्तियों से अलग रखें।",
            "प्रति किलो भाव पर ध्यान दें।"
          ],
          "ordered": true
        }
      ]
    },
    "arandi": {
      "title": "अरंडी का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["अरंडी castor seed है और इसका भाव बीज की quality, नमी तथा तेल-प्रसंस्करण की मांग से बदल सकता है। यह खाने वाले तेलहन की तरह सीधे नहीं समझी जाती।"],
      "sections": [
        {
          "title": "आज का अरंडी भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["बीज की maturity, सफाई, नमी, टूटे दाने और विदेशी पदार्थ अरंडी के lot के मूल्यांकन को प्रभावित कर सकते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["castor oil processing, औद्योगिक खरीद, seasonal आवक और उपलब्ध stock अरंडी बाजार में अंतर ला सकते हैं।"]
        },
        {
          "title": "अरंडी बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "अरंडी के बीज की साफ-सफाई पर ध्यान दें।",
            "नमी वाले और सूखे lot अलग रखें।",
            "राजस्थान–गुजरात की उपलब्ध मंडियों से तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "matar": {
      "title": "मटर का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["मटर यहाँ सूखी field pea फसल के रूप में है; इसे हरी मटर की ताजी फली के भाव से अलग समझना चाहिए। इसकी कीमत दाने की quality और स्थानीय खरीद से बदल सकती है।"],
      "sections": [
        {
          "title": "आज का मटर भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["दाने का आकार, रंग, सफाई, नमी और टूटे दाने सूखी मटर के grade को प्रभावित कर सकते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["स्थानीय आवक, प्रसंस्करण या खाद्य खरीदारों की मांग और उपलब्ध stock सूखी मटर के भाव में अंतर ला सकते हैं।"]
        },
        {
          "title": "मटर बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "सूखी मटर और हरी मटर के भाव न मिलाएँ।",
            "दाने को सूखा और साफ रखें।",
            "कम records होने पर पास की मंडी से भी पुष्टि करें।"
          ],
          "ordered": true
        }
      ]
    },
    "hara-matar": {
      "title": "हरी मटर का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["हरी मटर ताजी फली वाली सब्जी है और सूखी field pea से अलग crop है। इसका भाव फली की भरावट, हरापन और seasonal आवक के अनुसार बदल सकता है।"],
      "sections": [
        {
          "title": "आज का हरी मटर भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["फली की भरावट, हरा रंग, कोमलता, आकार और ताजगी हरी मटर की quality में अंतर लाते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["कटाई के मौसम, जल्दी खराब होने की प्रकृति, स्थानीय supply और परिवहन से हरी मटर की कीमत बदल सकती है।"]
        },
        {
          "title": "हरी मटर बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "हरी और सूखी मटर का भाव अलग देखें।",
            "भरी हुई, हरी फलियां अलग रखें।",
            "प्रति किलो भाव और क्वालिटी साथ में तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "gwarphali": {
      "title": "ग्वार फली का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["ग्वार फली ताज़ी सब्जी है और इसे ग्वार के दाने वाली फसल से अलग समझना चाहिए। फली की कोमलता, रंग और ताजगी के अनुसार एक ही मंडी में अलग lot का भाव बदल सकता है।"],
      "sections": [
        {
          "title": "आज का ग्वार फली भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["कोमल, हरी और बिना दाग वाली फली को अलग grade मिल सकता है। अधिक पकी, रेशेदार, टूटी हुई या मुरझाई फली की बोली कम हो सकती है, इसलिए एक जैसे माल की ही तुलना करें।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["स्थानीय आवक, मौसम, परिवहन और जल्दी खराब होने की प्रकृति ग्वार फली के भाव पर असर डालती है। अलग मंडियों में उपलब्धता अलग होने से प्रति क्विंटल और प्रति किलो दर में अंतर दिख सकता है।"]
        },
        {
          "title": "ग्वार फली बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "ग्वार फली और ग्वार दाने के भाव को एक साथ न मिलाएँ।",
            "ताज़ी, कोमल और अधिक पकी फलियों का lot अलग रखें।",
            "मंडी-वार उपलब्ध भाव और प्रति किलो दर देखकर तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "alsi": {
      "title": "अलसी का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["अलसी तेलहन बीज है और इसका भाव बीज की सफाई, नमी तथा तेल या बीज उपयोग की मांग के अनुसार बदल सकता है। कम records में एक भाव को पूरा बाजार न मानें।"],
      "sections": [
        {
          "title": "आज का अलसी भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["दाने की एकरूपता, सफाई, नमी, टूटे बीज और विदेशी पदार्थ अलसी के lot की बोली पर असर डाल सकते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["तेल या बीज खरीद, seasonal आवक और उपलब्ध stock से अलसी के भाव में अंतर आ सकता है। record की तारीख भी ध्यान से देखें।"]
        },
        {
          "title": "अलसी बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "कम उपलब्ध मंडियों में range और तारीख दोनों देखें।",
            "नमी और सफाई कमियों को अलग करें।",
            "एक record के बजाय पास के विकल्पों से तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "asaliya": {
      "title": "असालिया का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["असालिया garden cress seed की विशेष बीज फसल है। इसका बाजार सामान्य अनाज की तरह व्यापक नहीं हो सकता, इसलिए शुद्धता और lot की गुणवत्ता पर ध्यान देना जरूरी है।"],
      "sections": [
        {
          "title": "आज का असालिया भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["बीज की सफाई, शुद्धता, नमी, एकरूपता और विदेशी पदार्थ असालिया की खरीद में महत्व रखते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["विशेष खरीदारों की मांग, seasonal आवक और सीमित उपलब्धता के कारण असालिया के भाव में मंडी-वार अंतर हो सकता है।"]
        },
        {
          "title": "असालिया बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "असालिया का भाव दूसरी बीज फसलों से न मिलाएँ।",
            "साफ और सूखा lot रखें।",
            "कम records होने पर समान quality की अतिरिक्त पुष्टि लें।"
          ],
          "ordered": true
        }
      ]
    },
    "kalonji": {
      "title": "कलौंजी का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["कलौंजी nigella seed की मसाला फसल है और इसका भाव शुद्धता, रंग तथा quality के अनुसार बदल सकता है। इसे सामान्य काले बीजों के भाव से नहीं मिलाना चाहिए।"],
      "sections": [
        {
          "title": "आज का कलौंजी भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["काला रंग, दाने की एकरूपता, सफाई, सुगंध, नमी और मिलावट कलौंजी के grade को प्रभावित करते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["विशेष मसाला मांग, उपलब्ध stock और seasonal आवक से कलौंजी की price range बदल सकती है।"]
        },
        {
          "title": "कलौंजी बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "कलौंजी की purity और सफाई जांचें।",
            "नमी या मिलावट वाले lot अलग रखें।",
            "एक ही मंडी के बजाय उपलब्ध records की तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "amrood": {
      "title": "अमरूद का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["अमरूद का भाव variety, आकार, पकाव और स्थानीय फल आवक के साथ बदल सकता है। फल होने के कारण चोट या दाग की स्थिति से grade में काफी फर्क आता है।"],
      "sections": [
        {
          "title": "आज का अमरूद भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["आकार, maturity, बाहरी रंग, दाग, चोट, firmness और पैकिंग अमरूद की बोली को प्रभावित कर सकते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["स्थानीय बागों की आवक, मौसम, जल्दी खराब होने की प्रकृति और transport से अमरूद बाजार में बदलाव आ सकता है।"]
        },
        {
          "title": "अमरूद बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "अलग size और quality के फल अलग रखें।",
            "चोट या दाग वाले फल अच्छे grade में न मिलाएँ।",
            "प्रति किलो भाव और पैकिंग खर्च दोनों देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "kela": {
      "title": "केला का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["केले का भाव variety, पकने की अवस्था और हाथ या फल के आकार के अनुसार बदल सकता है। handling और transport भी फल की गुणवत्ता को प्रभावित करते हैं।"],
      "sections": [
        {
          "title": "आज का केला भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["फल का आकार, रंग, maturity, चोट, हाथ की एकरूपता और पकाव केले के grade में अंतर लाते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["स्थानीय supply, transport, मौसम और पकने की गति से केले की उपलब्धता तथा भाव बदल सकते हैं।"]
        },
        {
          "title": "केला बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "कच्चे और पके केले का lot अलग रखें।",
            "चोट लगे फल अलग करें।",
            "प्रति किलो/गुच्छा का आधार साफ करके भाव तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "seb": {
      "title": "सेब का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["सेब का भाव variety, origin, आकार, रंग और firmness के अनुसार बदल सकता है। एक ही नाम के सेब में grade और storage की स्थिति के कारण बड़ा अंतर संभव है।"],
      "sections": [
        {
          "title": "आज का सेब भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["फल का आकार, रंग, firmness, दाग, चोट और packing से सेब का grade तय हो सकता है। अलग variety का भाव सीधे न मिलाएँ।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["seasonal supply, cold storage, transport और थोक खरीदारों की मांग से सेब की price range बदल सकती है।"]
        },
        {
          "title": "सेब बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "variety और origin पूछकर ही भाव तुलना करें।",
            "grade और size अलग रखें।",
            "प्रति किलो भाव के साथ packing quality भी देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "anar": {
      "title": "अनार का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": ["अनार का भाव फल के आकार, वजन grade, रंग और छिलके की स्थिति के अनुसार बदल सकता है। fresh lot और handling की गुणवत्ता इसकी बोली में महत्वपूर्ण होती है।"],
      "sections": [
        {
          "title": "आज का अनार भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["फल का आकार, वजन, बाहरी रंग, छिलके के दाग या दरार और firmness अनार की quality को प्रभावित करते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["seasonal उपलब्धता, स्थानीय आवक, transport और थोक खरीदारों की मांग अनार के मंडी भाव में अंतर ला सकते हैं।"]
        },
        {
          "title": "अनार बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "size और weight grade अलग रखें।",
            "दाग या फटे फल अच्छे lot में न मिलाएँ।",
            "प्रति किलो भाव के साथ फल की quality तुलना करें।"
          ],
          "ordered": true
        }
      ]
    }
    ,
  "ker": {
    "title": "केर के भाव आज: राजस्थान में केर का मंडी भाव, केर सांगरी और खेती की जानकारी",
    "paragraphs": [
      "राम राम किसान भाइयों! केर राजस्थान की मरुधरा से जुड़ी पारंपरिक शुष्क उपज है। इस पेज पर उपलब्ध सत्यापित मंडी रिकॉर्ड, उनकी तारीख और क्विंटल की इकाई में भाव देखे जा सकते हैं। केर के भाव आज कितने हैं, राजस्थान में केर का मंडी भाव क्या चल रहा है, केर का भाव प्रति किलो और प्रति क्विंटल कितना है और भाव में तेजी-मंदी क्यों आती है, इन सब सवालों के जवाब इस लेख में मिलेंगे।",
      "केर सिर्फ़ एक जंगली झाड़ी का फल नहीं है। यह पश्चिमी राजस्थान के किसानों और ग्रामीणों के लिए नकद आमदनी का मज़बूत ज़रिया है। इसकी खास खटास और पारंपरिक खान-पान में इसकी जगह के कारण इसकी माँग बनी रहती है। राजस्थान के मशहूर पंचकूट और पारंपरिक अचार में केर की मुख्य भूमिका होती है।"
    ],
    "sections": [
      {
        "title": "केर क्या है? कैर, केरिया, करील, टींट और डेला",
        "paragraphs": [
          "केर का वैज्ञानिक नाम Capparis decidua है। अलग-अलग इलाकों में इसके अलग नाम हैं। राजस्थान में इसे केर या कैर, मारवाड़ में कच्चे फल को केरिया, कई जगह करील, हरियाणा में टींट या डेला और अंग्रेज़ी में केपर बेरी कहते हैं। इसीलिए लोग इंटरनेट पर केर का भाव, कैर का भाव और केरिया का भाव, तीनों तरह से खोजते हैं।",
          "केर का पौधा आम फलदार पेड़ों से बहुत अलग दिखता है। यह काँटेदार, बहुत शाखाओं वाली झाड़ी या छोटा पेड़ है, जिसकी ऊँचाई आमतौर पर 3 से 5 मीटर होती है। यह गर्म, शुष्क और कम पानी वाले इलाकों में भी अच्छी तरह जीवित रहता है, इसीलिए इसे थार मरुस्थल की पहचान माना जाता है।"
        ]
      },
      {
        "title": "केर का वैज्ञानिक नाम क्या है?",
        "paragraphs": [
          "केर का वैज्ञानिक नाम Capparis decidua है। यह पौधा गर्म और शुष्क इलाकों में प्राकृतिक रूप से मिलता है। अंग्रेज़ी में इसे केपर बेरी भी कहा जाता है। राजस्थान के अलावा पंजाब, हरियाणा और गुजरात के शुष्क तथा अर्ध-शुष्क क्षेत्रों में भी यह पाया जाता है।"
        ]
      },
      {
        "title": "केर का फल कैसा होता है?",
        "paragraphs": [
          "केर के फल छोटे और गोल होते हैं। कच्चे फल हरे रंग के होते हैं और पकने पर रंग गुलाबी से लाल की ओर जाता है। कच्चे फल से सब्ज़ी और अचार बनते हैं और पके फल भी उपयोग में आते हैं।"
        ]
      },
      {
        "title": "केर कब मिलता है? केर का सीज़न",
        "paragraphs": [
          "केर में साल में दो बार फल आते हैं। फूल मार्च-अप्रैल और अगस्त-सितंबर में आते हैं और फल मई तथा अक्टूबर तक पक जाते हैं। इसलिए बाज़ार में गर्मी का सीज़न (लगभग मार्च से जून) मुख्य रहता है और अक्टूबर के आसपास दूसरा सीज़न आता है, जब आवक कम रहने से कई बार भाव अच्छे मिलते हैं।"
        ]
      },
      {
        "title": "केर के भाव में क्या देखें?",
        "paragraphs": [
          "केर की सफाई, आकार, सूखापन और lot की एकरूपता के अनुसार खरीदारों की पसंद बदल सकती है। अलग मंडियों के रिकॉर्ड की तुलना करते समय तारीख और इकाई एक जैसी रखें।",
          "केर का बाज़ार भाव एक जैसा नहीं रहता। यह फल के आकार, गुणवत्ता, ताज़गी, कच्ची या सूखी अवस्था, सफ़ाई, उपलब्धता और माँग पर निर्भर करता है। किसी एक मंडी का भाव पूरे राजस्थान के केर बाज़ार का प्रतिनिधि नहीं होता।"
        ]
      },
      {
        "title": "केर के भाव में तेजी-मंदी क्यों आती है?",
        "items": [
          "आकार और ग्रेडिंग: बारीक (छोटा) दानेदार केर की माँग अचार और खास पकवानों में सबसे ज़्यादा रहती है, इसलिए इसका भाव आमतौर पर ऊँचा मिलता है। मोटा केर छँटाई के बाद अपेक्षाकृत कम भाव पर बिकता है।",
          "कच्चा या सूखा केर: कच्चे केर की आवक सीज़न में जोधपुर, बीकानेर, नागौर, बाड़मेर और फलोदी जैसी स्थानीय मंडियों में सीधी होती है। सूखा केर साल भर सुरक्षित रहता है और उसका भाव कई गुना ज़्यादा रहता है।",
          "कड़वाहट निकालने और सुखाने की गुणवत्ता: साफ़-सुथरा, बिना कंकड़-पत्थर, धूल और डंठल वाला माल व्यापारी सबसे ऊँचे भाव पर लेते हैं।",
          "मंडी में आवक: आवक ज़्यादा होने पर भाव दबाव में आ सकते हैं और आवक कम होने पर ऊपर जा सकते हैं।",
          "मौसम और पैदावार: केर प्राकृतिक रूप से मिलने वाला उत्पाद है। अच्छी बारिश के बाद पैदावार बढ़ने पर भाव नरम रह सकते हैं, जबकि सूखे साल में ऊँचे रह सकते हैं।",
          "तुड़ाई की मज़दूरी: केर काँटेदार झाड़ी पर लगता है, इसलिए तुड़ाई की मेहनत भी भाव में जुड़ती है।",
          "देश-विदेश की माँग: मुंबई, दिल्ली, अहमदाबाद और बेंगलुरु जैसे शहरों में, विदेशों में बसे प्रवासी भारतीयों में और राजस्थानी कैटरिंग व होटलों में केर की माँग रहती है।",
          "केर-सांगरी की माँग, शादी-विवाह और त्योहार: विशेष अवसरों और सीज़न में माँग बढ़ने पर भाव चढ़ सकते हैं।",
          "व्यापारियों और खरीदारों की माँग: अलग-अलग मंडियों में खरीदार और आवक अलग होती है, इसलिए भाव भी अलग रहता है।"
        ],
        "ordered": true
      },
      {
        "title": "बारीक और मोटे केर के भाव में अंतर क्यों होता है?",
        "paragraphs": [
          "केर के भाव में सबसे बड़ा अंतर उसके आकार से आता है। बारीक यानी छोटा केर, जिसे दानेदार या प्रीमियम केर भी कहा जाता है, अचार और खास पकवानों के लिए सबसे ज़्यादा पसंद किया जाता है। इसकी माँग ज़्यादा होने से मंडियों में इसका भाव आमतौर पर सबसे ऊँचा मिलता है। मोटे यानी बड़े आकार के केर की माँग अपेक्षाकृत कम रहती है, इसलिए छँटाई के बाद उसका भाव कम मिलता है।",
          "इसीलिए तुड़ाई के समय ही बारीक और मोटे केर को अलग-अलग रखना फायदेमंद रहता है। दोनों को मिला देने पर बारीक केर का भी पूरा भाव नहीं मिल पाता।"
        ]
      },
      {
        "title": "कच्चे और सूखे केर के भाव में फर्क क्यों?",
        "paragraphs": [
          "कच्चा केर तोड़ने के बाद जल्दी खराब होने लगता है, इसलिए ज़्यादातर किसान उसे उसी दिन या एक-दो दिन में बेच देते हैं। सूखा केर पहले कड़वाहट निकालकर फिर धूप में सुखाया जाता है। इससे वह महीनों तक चलता है और वज़न घट जाता है। मेहनत ज़्यादा लगने, वज़न कम होने और साल भर उपलब्ध रहने के कारण सूखे केर का प्रति किलो भाव कच्चे केर से कई गुना ज़्यादा रहता है।"
        ]
      },
      {
        "title": "केर की कड़वाहट कैसे निकाली जाती है?",
        "paragraphs": [
          "केर में प्राकृतिक कड़वाहट होती है, इसलिए इसे तोड़कर सीधे नहीं खाया जाता। पारंपरिक तरीके में मटके में छाछ और नमक का पानी डालकर केर को कई दिन भिगोया जाता है। सब्ज़ी या अचार से पहले भी इसे 4-5 दिन नमक या छाछ में भिगोकर रखा जाता है। इसके बाद इसे साफ़ जगह पर धूप में अच्छी तरह सुखाया जाता है। ठीक से संसाधित माल का भाव बेहतर मिलता है।"
        ]
      },
      {
        "title": "केर को सुखाकर और सुरक्षित कैसे रखें?",
        "paragraphs": [
          "राजस्थान के पारंपरिक खान-पान में ऐसे खाद्य पदार्थों का बड़ा महत्व रहा है जो लंबे समय तक सुरक्षित रह सकें। केर को भी कड़वाहट निकालने के बाद सुखाकर साल भर उपयोग में लिया जाता है। सूखे केर में कंकड़-पत्थर, धूल, डंठल और नमी नहीं होनी चाहिए, क्योंकि यही चीज़ें भाव गिराती हैं।",
          "सूखे केर को नमी रहित साफ़ बोरियों या एयरटाइट बैग में रखना बेहतर रहता है। नमी रह जाने पर फफूँद लग सकती है, जिससे माल खराब हो जाता है और भाव भी कम मिलता है।"
        ]
      },
      {
        "title": "केर-सांगरी का भाव इतना ज़्यादा क्यों होता है?",
        "paragraphs": [
          "केर और सांगरी दोनों प्राकृतिक रूप से उगने वाले उत्पाद हैं। इनकी तुड़ाई हाथ से काँटों के बीच करनी पड़ती है, पैदावार सीमित होती है और कड़वाहट निकालने व सुखाने में मेहनत लगती है। इसके ऊपर देश-विदेश में राजस्थानी खाने की माँग रहती है, खासकर शादी-विवाह, त्योहार और कैटरिंग में। इन सब कारणों से सूखी केर-सांगरी का भाव आम सब्ज़ियों और उपज के मुकाबले काफ़ी ऊँचा रहता है।"
        ]
      },
      {
        "title": "केर और सांगरी में क्या अंतर है?",
        "paragraphs": [
          "केर-सांगरी राजस्थान की सबसे मशहूर पारंपरिक सब्ज़ियों में से एक है। केर झाड़ी पर लगने वाला छोटा गोल फल है, जबकि सांगरी खेजड़ी के पेड़ पर लगने वाली पतली, लंबी फली है। दोनों को मिलाकर सब्ज़ी बनाई जाती है, इसीलिए बाज़ार में दोनों के भाव साथ-साथ पूछे जाते हैं। लोग केर का भाव, केर सांगरी का भाव और कैर की कीमत एक साथ खोजते हैं, और कई बार इनमें सूखे केर का भाव भी पूछा जा रहा होता है।"
        ]
      },
      {
        "title": "केर का भाव प्रति किलो और प्रति क्विंटल कैसे निकालें?",
        "paragraphs": [
          "केर की खरीद-बिक्री अलग-अलग बाज़ारों में अलग इकाइयों में हो सकती है, इसलिए प्रति किलो और प्रति क्विंटल भाव का अंतर समझना ज़रूरी है। 1 क्विंटल में 100 किलोग्राम होते हैं। अगर किसी जगह केर का भाव ₹X प्रति किलो है, तो समान दर पर प्रति क्विंटल कीमत ₹X × 100 होगी। असल मंडी व्यापार में गुणवत्ता और माल की हालत के कारण खरीद दर अलग हो सकती है।",
          "इसलिए बेचने से पहले न्यूनतम, अधिकतम और प्रचलित भाव तीनों देखें। केवल अधिकतम भाव देखकर पूरा माल बेचने का फैसला न लें।"
        ]
      },
      {
        "title": "केर का भाव कहाँ और कैसे देखें?",
        "paragraphs": [
          "केर का भाव देखने के लिए इसी पेज पर दी गई मंडी भाव की सारणी सबसे आसान तरीका है। भाव देखते समय तीन बातों का ध्यान रखें: पहली, रिकॉर्ड की तारीख क्या है। दूसरी, भाव किस इकाई में है, किलो में या क्विंटल में। तीसरी, भाव कच्चे केर का है या सूखे का। इन तीनों में से कोई एक अलग हो तो दो भावों की सीधी तुलना गलत नतीजा दे सकती है।",
          "किसी एक मंडी के भाव के भरोसे पूरा माल बेचने के बजाय अपनी नज़दीकी मंडी और दूसरी मंडियों के भाव मिलाकर देखना बेहतर रहता है।"
        ]
      },
      {
        "title": "केर के फल के उपयोग",
        "items": [
          "केर-सांगरी की सब्ज़ी",
          "पंचकूट",
          "केर का अचार, नमक, तेल और मसालों के साथ",
          "सूखे केर की सब्ज़ी",
          "सूखे केर से कढ़ी",
          "दही या छाछ के साथ बनी केर की सब्ज़ी",
          "अन्य पारंपरिक राजस्थानी व्यंजन और मसालेदार खाद्य उत्पाद"
        ]
      },
      {
        "title": "केर के पारंपरिक स्वास्थ्य लाभ",
        "paragraphs": [
          "पारंपरिक रूप से केर और सांगरी को पौष्टिक माना जाता है और आयुर्वेदिक चर्चाओं में इसका ज़िक्र होता है। फल के साथ इसकी छाल और जड़ें भी घरेलू उपयोग में आती रही हैं। यह सामान्य जानकारी है, चिकित्सकीय सलाह नहीं। किसी रोग में उपयोग से पहले डॉक्टर या वैद्य से सलाह ज़रूर लें।"
        ]
      },
      {
        "title": "बेचने से पहले ध्यान रखें",
        "items": [
          "उपज को साफ और अच्छी तरह सूखा रखें।",
          "गीली या मिली-जुली उपज को अलग lot में रखें।",
          "मंडी भाव के साथ उसी दिन की तारीख और गुणवत्ता भी देखें।",
          "तुड़ाई के समय ही बारीक और मोटे केर को अलग-अलग टोकरियों में रखें। मिलाने से बारीक केर का भी सही भाव नहीं मिलता।",
          "कच्चे और पके फल अलग रखें, क्योंकि दोनों का भाव अलग होता है।",
          "सीज़न में आवक ज़्यादा होने से भाव दबाव में हों, तो कड़वाहट निकालकर केर सुखाएँ और सुरक्षित रखें। ऑफ-सीज़न में सूखा केर बेचने पर आमतौर पर बेहतर भाव मिलता है।",
          "नमी रहित साफ़ बोरियों या एयरटाइट बैग में पैक करें। नमी से फफूँद लग सकती है और भाव गिर सकता है।",
          "एक ही मंडी या व्यापारी पर निर्भर न रहें, दो-तीन जगह भाव पूछें।",
          "तौल के समय खुद मौजूद रहें।"
        ],
        "ordered": true
      },
      {
        "title": "केर की खेती के लिए कैसी जलवायु और ज़मीन चाहिए?",
        "paragraphs": [
          "केर गर्म और शुष्क जलवायु के अनुकूल पौधा है। यह कम पानी और कठिन परिस्थितियों में भी जीवित रह सकता है और रेतीली, पथरीली या कम उपजाऊ ज़मीन पर भी टिक जाता है। इसीलिए इसे बंजर और कम देखभाल वाली ज़मीन के लिए उपयुक्त माना जाता है।",
          "यह मुख्य रूप से राजस्थान के शुष्क और मरुस्थलीय क्षेत्रों का पौधा है। ICAR के शोध के अनुसार यह राजस्थान, पंजाब, हरियाणा और गुजरात के शुष्क तथा अर्ध-शुष्क क्षेत्रों में पाया जाता है।"
        ]
      },
      {
        "title": "केर की खेती किसानों के लिए क्यों फायदेमंद है?",
        "paragraphs": [
          "जहाँ आम फसलों के लिए पानी सबसे बड़ी चुनौती है, वहाँ केर जैसे पौधे टिक सकते हैं। यह खाद्य उत्पाद के साथ-साथ ग्रामीण इलाकों में अतिरिक्त आमदनी का साधन भी है। ICFRE के अनुसार केर का फल ग्रामीणों की पूरक आय का स्रोत रहा है और इससे अचार जैसे मूल्यवर्धित उत्पाद बनाए जाते हैं।",
          "कई किसान इसे खेत की मेड़ या खाली पड़ी ज़मीन पर लगाकर अतिरिक्त आय का ज़रिया बनाते हैं। पौधा लगने के बाद फल आने में समय लगता है, इसलिए यह लंबे समय का निवेश है। इलाके, पौधे की स्थिति, उत्पादन और बाज़ार के हिसाब से काफ़ी अंतर हो सकता है, इसलिए खेती शुरू करने से पहले स्थानीय कृषि विशेषज्ञ से सलाह लें।"
        ]
      },
      {
        "title": "केर के बारे में खास बातें",
        "items": [
          "वैज्ञानिक नाम: Capparis decidua",
          "स्थानीय नाम: केर, कैर, करील, केरिया, टींट, डेला",
          "अंग्रेज़ी नाम: केपर बेरी",
          "मुख्य क्षेत्र: राजस्थान सहित शुष्क और अर्ध-शुष्क क्षेत्र",
          "फल का समय: साल में दो बार, मई और अक्टूबर के आसपास",
          "प्रमुख उपयोग: सब्ज़ी, अचार, कढ़ी, केर-सांगरी और पंचकूट",
          "विशेषता: कम पानी और गर्म, शुष्क परिस्थितियों में जीवित रहने की क्षमता"
        ]
      },
      {
        "title": "किसान भाइयों के लिए ज़रूरी बात",
        "paragraphs": [
          "राजस्थान के रेगिस्तानी इलाके की यह उपज कठिन परिस्थितियों में भी किसानों को मज़बूत आर्थिक सहारा देती है। केर का भाव, केर-सांगरी की माँग और पारंपरिक उपयोग इसे आम फलों से अलग बनाते हैं। केर बेचने की तैयारी करते समय अपनी नज़दीकी मंडी का आज का भाव, आवक और माल की गुणवत्ता के अनुसार चल रहा रेट ज़रूर पता करें।",
          "नोट: मंडी भाव में रोज़ बदलाव संभव है। असल खरीद-बिक्री दर गुणवत्ता, आवक, माँग और स्थानीय व्यापारिक परिस्थितियों के अनुसार अलग हो सकती है।"
        ]
      }
    ]
  },
  "sangri": {
    "title": "सांगरी के भाव आज: राजस्थान में सांगरी का मंडी भाव, खेजड़ी की सांगरी, सूखी सांगरी और पूरी जानकारी",
    "paragraphs": [
      "राम राम किसान भाइयों! सांगरी के भाव आज कितने हैं? राजस्थान में सांगरी का मंडी भाव क्या चल रहा है? सूखी सांगरी और हरी सांगरी में कितना अंतर है? सांगरी किस पेड़ पर लगती है और केर-सांगरी कैसे बनती है? अगर आप इन सवालों के जवाब खोज रहे हैं, तो इस पेज पर उपलब्ध सत्यापित मंडी रिकॉर्ड, उनकी तारीख और इकाई के साथ सांगरी के भाव देखे जा सकते हैं। साथ ही खेजड़ी की सांगरी, सूखी सांगरी, तुड़ाई, सुखाने का तरीका, उपयोग, बाज़ार की माँग और भाव में तेजी-मंदी के कारणों की पूरी जानकारी इस लेख में मिलेगी।",
      "थार के कल्पवृक्ष यानी खेजड़ी की फली सांगरी राजस्थान की पहचान है। इसे कई लोग रेगिस्तान का हरा सोना भी कहते हैं। यह सिर्फ़ एक वनोपज नहीं, बल्कि पश्चिमी राजस्थान के किसानों और ग्रामीणों के लिए नकद आमदनी का मज़बूत ज़रिया है। पौष्टिकता, स्वाद और लंबे समय तक सुरक्षित रहने की खासियत के कारण सूखी सांगरी की माँग सीज़न के बाद भी बनी रहती है। राजस्थान की मशहूर केर-सांगरी और पंचकूट सब्ज़ी की मुख्य सामग्री होने के कारण घरेलू मंडियों से लेकर बाहर के बाज़ारों तक इसकी अलग पहचान है।"
    ],
    "sections": [
      {
        "title": "सांगरी क्या है? खेजड़ी की फली की पहचान",
        "paragraphs": [
          "सांगरी खेजड़ी के पेड़ पर लगने वाली लंबी और पतली फली है। इसे मरुस्थल की फली भी कहा जाता है। कच्ची अवस्था में फली हरे रंग की होती है और पकने पर भूरे रंग की हो जाती है। खेजड़ी की कच्ची, कोमल फलियों को ही सांगरी कहा जाता है। इन्हें तोड़कर ताज़ा सब्ज़ी के रूप में इस्तेमाल किया जाता है और सुखाकर लंबे समय तक भी रखा जाता है। राजस्थान पर्यटन और वन विभाग की सामग्री में भी सांगरी का उल्लेख पारंपरिक भोजन और सूखी सांगरी की सब्ज़ी के रूप में मिलता है।",
          "राजस्थान में इसे सांगरी, कई जगह सिंगरी भी कहा जाता है। यही वजह है कि लोग इंटरनेट पर सांगरी का भाव, सिंगरी का भाव, सूखी सांगरी का भाव और खेजड़ी की फली का भाव, कई तरह से खोजते हैं।"
        ]
      },
      {
        "title": "सांगरी किस पेड़ पर लगती है? खेजड़ी का पेड़",
        "paragraphs": [
          "सांगरी खेजड़ी के पेड़ पर लगती है। खेजड़ी का वैज्ञानिक नाम Prosopis cineraria है। इसे राजस्थान का राज्य वृक्ष माना जाता है और थार मरुस्थल में इसे कल्पवृक्ष जैसा उपयोगी पेड़ कहा जाता है। शोध साहित्य में इसे रेगिस्तान का राजा और भारतीय रेगिस्तान का सुनहरा वृक्ष भी कहा गया है। यह पेड़ राजस्थान के अलावा हरियाणा, उत्तर प्रदेश, पंजाब, मध्य प्रदेश और गुजरात के शुष्क इलाकों में भी मिलता है।",
          "खेजड़ी एक छोटा काँटेदार पेड़ है, जिसकी ऊँचाई आमतौर पर 3 से 5 मीटर होती है। यह कठिन गर्मी और कम पानी में भी जीवित रहता है और कुछ हद तक खारी मिट्टी को भी सहन कर लेता है। इसकी पत्तियाँ पशुओं के लिए पौष्टिक चारा हैं और इसकी लकड़ी घरेलू ईंधन के काम आती है। इसीलिए खेजड़ी सिर्फ़ फली देने वाला पेड़ नहीं, बल्कि पशुपालन, खेती और शुष्क इलाके के पर्यावरण में भी बड़ी भूमिका निभाता है।"
        ]
      },
      {
        "title": "सांगरी की खेती या बागवानी कैसे होती है?",
        "paragraphs": [
          "सांगरी आम मौसमी सब्ज़ियों की तरह खेत में बोई जाने वाली फसल नहीं है। यह खेजड़ी के पेड़ से मिलती है। हालाँकि अब सांगरी के उत्पादन को व्यवस्थित करने के लिए खेजड़ी की बागवानी पर भी काम हो रहा है। ICAR के केंद्रीय शुष्क क्षेत्रीय बागवानी संस्थान (CIAH) ने सांगरी उत्पादन के लिए खेजड़ी की बागवानी पर तकनीकी सामग्री प्रकाशित की है। राजस्थान किसान आयोग की रिपोर्ट में भी गुणवत्ता वाली सांगरी के उत्पादन के लिए खेजड़ी की व्यवस्थित बागवानी और थार शोभा जैसी चयनित सामग्री के उपयोग का उल्लेख मिलता है।",
          "यानी सांगरी को सिर्फ़ प्राकृतिक रूप से मिलने वाला उत्पाद मानना पूरी तस्वीर नहीं है। खेजड़ी आधारित व्यवस्थित बागवानी भी एक कृषि विकल्प के रूप में विकसित की जा रही है। खेती या बागवानी शुरू करने से पहले स्थानीय कृषि विशेषज्ञ या कृषि विज्ञान केंद्र से सलाह ज़रूर लें, क्योंकि पेड़ लगाने के बाद फली आने में समय लगता है और नतीजे इलाके व पेड़ की स्थिति पर निर्भर करते हैं।"
        ]
      },
      {
        "title": "सांगरी का सीज़न: तुड़ाई कब होती है?",
        "paragraphs": [
          "सांगरी की मुख्य तुड़ाई गर्मी के मौसम में होती है, लगभग अप्रैल से जून के बीच। शुष्क पश्चिमी राजस्थान में गर्मी बढ़ने के साथ खेजड़ी पर नई फलियाँ आने लगती हैं। इसी समय जोधपुर, बीकानेर, नागौर, बाड़मेर और चूरू जैसे इलाकों की स्थानीय मंडियों में हरी सांगरी की आवक होती है। तुड़ाई का सटीक समय मौसम, बारिश, पेड़ों की स्थिति और इलाके के हिसाब से आगे-पीछे हो सकता है।",
          "इसी कारण सांगरी की मंडी आवक पूरे साल एक जैसी नहीं रहती। उपलब्धता कम होने पर बाज़ार भाव पर असर पड़ सकता है।"
        ]
      },
      {
        "title": "सांगरी की तुड़ाई कैसे करें? सही अवस्था कौन-सी है?",
        "paragraphs": [
          "अच्छे भाव के लिए तुड़ाई का समय सबसे अहम है। सांगरी की तुड़ाई तभी करें जब फली पतली, कोमल और बिना रेशे की हो। फली के पकने से पहले तोड़ने पर आमतौर पर सबसे अच्छी श्रेणी का माल मिलता है और भाव भी बेहतर रहता है। पकने लगी फली में बीज कड़े हो जाते हैं और उसका भाव काफ़ी गिर जाता है।",
          "तुड़ाई के समय फलियों को छाँटकर रखें और कोमल, पतली फलियों को मोटी या पकी फलियों के साथ न मिलाएँ।"
        ]
      },
      {
        "title": "सांगरी के भाव में क्या देखें?",
        "paragraphs": [
          "सांगरी की सफाई, रंग, सूखापन, फली की लंबाई-मोटाई और lot की एकरूपता के अनुसार खरीदारों की पसंद बदल सकती है। अलग मंडियों के रिकॉर्ड की तुलना करते समय तारीख और इकाई एक जैसी रखें, और यह भी देखें कि भाव हरी सांगरी का है या सूखी का।",
          "सांगरी का बाज़ार भाव एक जैसा नहीं रहता। यह अवस्था, गुणवत्ता, ताज़गी, सफ़ाई, उपलब्धता और माँग पर निर्भर करता है। किसी एक मंडी का भाव पूरे राजस्थान के सांगरी बाज़ार का प्रतिनिधि नहीं होता।"
        ]
      },
      {
        "title": "सांगरी के भाव में तेजी-मंदी क्यों आती है?",
        "items": [
          "आवक: मंडी में जितनी ज़्यादा सांगरी आती है, आपूर्ति का असर भाव पर उतना ही पड़ता है। आवक कम होने पर भाव ऊपर जा सकते हैं।",
          "मौसम और उत्पादन में कमी: गर्मी, बारिश और बेमौसम बारिश खेजड़ी पर फली के उत्पादन को प्रभावित कर सकती है। किसी मौसम में उत्पादन कम रहने से उपलब्धता घटती है और कीमत काफ़ी बढ़ सकती है। अलग-अलग वर्षों में ऐसे उतार-चढ़ाव की रिपोर्टें आती रही हैं।",
          "आकार और ग्रेडिंग: पतली, छोटी और कोमल सांगरी का भाव सबसे ऊँचा रहता है, जबकि मोटी और बीज वाली सांगरी का भाव काफ़ी कम मिलता है।",
          "हरी या सूखी सांगरी: दोनों एक जैसा उत्पाद नहीं हैं। हरी सांगरी जल्दी खराब होती है और उसका भाव दैनिक आवक के हिसाब से घटता-बढ़ता है। सूखी सांगरी का बाज़ार अलग है और भाव कई गुना ज़्यादा रहता है।",
          "रंग और सुखाने की गुणवत्ता: साफ़, प्राकृतिक हरापन लिए हुए सूखी सांगरी को व्यापारी बेहतर दाम देते हैं। काली पड़ी सांगरी का भाव काफ़ी गिर जाता है।",
          "सफ़ाई और नमी: धूल-मिट्टी, डंठल, फफूँद या नमी वाला माल कम भाव पर जाता है।",
          "बाहर के बाज़ारों की माँग: राजस्थान के बाहर माँग बढ़ने पर स्थानीय बाज़ार पर भी असर पड़ता है।",
          "शादी-विवाह, त्योहार और कैटरिंग की माँग: शादी-त्योहार के सीज़न में माँग बढ़ने पर सूखी सांगरी के भाव चढ़ सकते हैं।",
          "तुड़ाई की मेहनत: सांगरी ऊँचे काँटेदार पेड़ों से हाथ से तोड़ी जाती है, इसलिए तुड़ाई की मज़दूरी और मेहनत भी कीमत में जुड़ती है।"
        ],
        "ordered": true
      },
      {
        "title": "बारीक और मोटी सांगरी के भाव में अंतर क्यों होता है?",
        "paragraphs": [
          "मंडी और खुले व्यापार में सांगरी का भाव सबसे ज़्यादा उसकी लंबाई, मोटाई और कोमलता पर निर्भर करता है। पतली और छोटी सांगरी, जिसे कई व्यापारी बारीक सांगरी कहते हैं, में बीज नहीं बने होते या बेहद कोमल होते हैं। होटलों, शादी-ब्याह की कैटरिंग और बाहर के बाज़ारों में इसी सांगरी की माँग सबसे ज़्यादा रहती है, इसलिए इसका भाव मंडियों में सबसे ऊँचा मिलता है।",
          "मोटी और बीज वाली सांगरी में फली पकने लगती है और बीज कड़े हो जाते हैं। ऐसी सांगरी की माँग कम रहती है, इसलिए उसका भाव काफ़ी नीचे आ जाता है। इसीलिए तुड़ाई के समय ही अलग-अलग आकार की सांगरी को अलग रखना फायदेमंद होता है।"
        ]
      },
      {
        "title": "हरी सांगरी और सूखी सांगरी में अंतर",
        "paragraphs": [
          "हरी सांगरी ताज़ी तोड़ी हुई कोमल फली होती है। इसे साफ़ करके तुरंत सब्ज़ी में इस्तेमाल किया जाता है। सीज़न में स्थानीय बाज़ार में इसकी उपलब्धता ज़्यादा दिखती है। यह जल्दी खराब हो जाती है, इसलिए इसका भाव दैनिक आवक के हिसाब से बदलता रहता है।",
          "सूखी सांगरी वह है जिसे उबालकर या साफ़ करके धूप में अच्छी तरह सुखाया जाता है। सूखने पर वज़न घटता है, मेहनत ज़्यादा लगती है, लेकिन माल कई महीनों तक सुरक्षित रहता है। इसी कारण सूखी सांगरी का प्रति किलो भाव हरी से कई गुना ज़्यादा रहता है। सूखी सांगरी को ज़रूरत के हिसाब से भिगोकर सब्ज़ी बनाई जाती है, जिससे सीज़न के बाद भी इसका उपयोग हो पाता है।"
        ]
      },
      {
        "title": "सांगरी को उबालने और सुखाने का सही तरीका",
        "paragraphs": [
          "किसान आमतौर पर तुड़ाई के तुरंत बाद कोमल सांगरी को धोकर हल्का उबालते हैं। इसके बाद इसे साफ़ कपड़े या तिरपाल पर फैलाकर धूप में सुखाया जाता है। सीधे मिट्टी या धूल के संपर्क से बचाना ज़रूरी है, ताकि माल की चमक और रंग बना रहे।",
          "रंग का भाव पर सीधा असर पड़ता है। सूखी सांगरी का रंग जितना साफ़, प्राकृतिक और हरापन लिए हुए होगा, व्यापारी उतना बेहतर दाम देंगे। अगर उबालते समय या धूप में सुखाते समय सांगरी काली पड़ जाए, तो बाज़ार में उसका भाव बहुत कम मिलता है।"
        ]
      },
      {
        "title": "क्या सांगरी को सुखाकर लंबे समय तक रखा जा सकता है?",
        "paragraphs": [
          "हाँ, सांगरी को सुखाकर लंबे समय तक सुरक्षित रखा जा सकता है। राजस्थान की पारंपरिक रसोई में सूखी सांगरी का इसीलिए खास महत्व है। सूखी सांगरी में कंकड़, धूल, डंठल और नमी नहीं होनी चाहिए, क्योंकि यही चीज़ें भाव गिराती हैं।",
          "सूखी सांगरी को नमी रहित साफ़ बोरियों या एयरटाइट बैग में रखना बेहतर रहता है। नमी रह जाने पर फफूँद लग सकती है, जिससे माल खराब हो जाता है और भाव भी कम मिलता है।"
        ]
      },
      {
        "title": "सांगरी का भाव इतना ज़्यादा क्यों होता है?",
        "paragraphs": [
          "सांगरी प्राकृतिक रूप से खेजड़ी पर उगती है और इसकी पैदावार सीमित रहती है। तुड़ाई हाथ से होती है, उबालने-सुखाने में मेहनत लगती है और हर साल की पैदावार मौसम पर निर्भर करती है। दूसरी तरफ़ राजस्थानी खाने की माँग देश-विदेश में बनी रहती है। सीमित उपलब्धता और स्थिर माँग के इसी मेल से सूखी सांगरी का भाव आम सब्ज़ियों के मुकाबले काफ़ी ऊँचा रहता है और कई बार मेवों के भाव के आसपास चला जाता है।"
        ]
      },
      {
        "title": "सांगरी की बाज़ार में माँग: महानगर और बाहर के बाज़ार",
        "paragraphs": [
          "सांगरी की माँग सिर्फ़ राजस्थान तक सीमित नहीं है। सूखी सांगरी को लंबे समय तक रखा जा सकता है, इसलिए इसे दूसरे राज्यों के बाज़ारों तक भेजा जाता है। मारवाड़ी समाज और राजस्थानी व्यंजनों के शौकीन लोग मुंबई, कोलकाता, अहमदाबाद, सूरत, दिल्ली और चेन्नई जैसे बड़े शहरों में और विदेशों में बसे हैं। वहाँ पैकेज्ड सूखी सांगरी की अच्छी माँग रहती है। बड़े शहरों की किराना दुकानों, होटल-रेस्तरां और ऑनलाइन बाज़ार में भी सूखी केर-सांगरी की बिक्री की रिपोर्टें मिलती हैं।",
          "इसी वजह से सांगरी का भाव सिर्फ़ स्थानीय मंडी की आवक से नहीं, बल्कि बाहर के बाज़ारों की माँग से भी प्रभावित होता है। अच्छी गुणवत्ता की सूखी सांगरी खरीदने के लिए थोक व्यापारियों में होड़ रहती है।"
        ]
      },
      {
        "title": "केर-सांगरी क्या है? पंचकूट क्या है?",
        "paragraphs": [
          "केर-सांगरी राजस्थान की प्रसिद्ध पारंपरिक सब्ज़ी है। इसमें खेजड़ी की सांगरी और केर को मिलाकर मसालों के साथ सब्ज़ी तैयार की जाती है। इसे राजस्थान के पारंपरिक भोजन की पहचान माना जाता है और विशेष अवसरों तथा मारवाड़ी शादियों में परोसा जाता है। पंचकूट भी राजस्थान की पारंपरिक सब्ज़ी है, जिसमें सांगरी और केर जैसी सूखी सामग्री की मुख्य भूमिका होती है।",
          "यही कारण है कि इंटरनेट पर सांगरी का भाव, केर सांगरी, सूखी सांगरी, खेजड़ी की सांगरी और सांगरी की सब्ज़ी जैसे कई सर्च एक-दूसरे से जुड़े हुए हैं।"
        ]
      },
      {
        "title": "सांगरी और केर में क्या अंतर है?",
        "paragraphs": [
          "सांगरी खेजड़ी के पेड़ पर लगने वाली पतली, लंबी फली है, जबकि केर एक अलग काँटेदार झाड़ी पर लगने वाला छोटा गोल फल है। दोनों को मिलाकर केर-सांगरी की सब्ज़ी बनाई जाती है, इसलिए बाज़ार में दोनों के भाव साथ-साथ पूछे जाते हैं।",
          "स्वाद में सांगरी हल्की और कुछ मेवे जैसी लगती है, जबकि केर में खटास और कड़वाहट होती है। इसीलिए दोनों के मेल से सब्ज़ी का संतुलित स्वाद बनता है।"
        ]
      },
      {
        "title": "पकी हुई फली को खोखा क्यों कहते हैं?",
        "paragraphs": [
          "खेजड़ी की जो फली पेड़ पर ही पककर भूरी हो जाती है, उसे खोखा कहते हैं। हरी, कच्ची फली सब्ज़ी के काम आती है, जबकि पकी हुई फली को ताज़ा खाने और आटा बनाने में भी इस्तेमाल किया जाता है। इसलिए सांगरी और खोखा दोनों एक ही पेड़ की उपज हैं, पर उनकी अवस्था, उपयोग और भाव अलग होते हैं।"
        ]
      },
      {
        "title": "सांगरी का उपयोग किस-किस काम में होता है?",
        "items": [
          "सांगरी की सब्ज़ी, हरी और सूखी दोनों रूप में",
          "केर-सांगरी की सब्ज़ी",
          "पंचकूट",
          "सांगरी की कढ़ी",
          "सांगरी का अचार",
          "विवाह, त्योहार और विशेष अवसरों का पारंपरिक राजस्थानी भोजन",
          "लंबे समय तक भंडारण के लिए सूखा उत्पाद",
          "सूखी सांगरी का दूसरे राज्यों और बड़े शहरों की दुकानों में बिकना"
        ]
      },
      {
        "title": "सांगरी के पारंपरिक स्वास्थ्य लाभ",
        "paragraphs": [
          "पारंपरिक रूप से सांगरी को पौष्टिक माना जाता है। शोध साहित्य में खेजड़ी को प्रोटीन का एक ऐसा स्रोत बताया गया है जो पारंपरिक दलहन की श्रेणी में अपेक्षाकृत कम जाना जाता है, और इसके अलग-अलग हिस्से पारंपरिक चिकित्सा में भी काम आते रहे हैं। यह सामान्य जानकारी है, चिकित्सकीय सलाह नहीं। किसी रोग में उपयोग से पहले डॉक्टर या वैद्य से सलाह ज़रूर लें।"
        ]
      },
      {
        "title": "सांगरी का भाव प्रति किलो और प्रति क्विंटल कैसे निकालें?",
        "paragraphs": [
          "सांगरी का बाज़ार भाव कई जगह प्रति किलो बताया जाता है, जबकि मंडियों में बड़ी मात्रा के लिए प्रति क्विंटल की गणना भी हो सकती है। 1 क्विंटल में 100 किलोग्राम होते हैं। अगर किसी जगह सांगरी का भाव ₹X प्रति किलो है, तो समान दर पर प्रति क्विंटल कीमत ₹X × 100 होगी।",
          "लेकिन सांगरी में हरी और सूखी अवस्था के बीच वज़न और बाज़ार मूल्य में बड़ा अंतर होता है, इसलिए सिर्फ़ किलो से क्विंटल में गणना काफ़ी नहीं है। यह भी देखना ज़रूरी है कि सांगरी किस अवस्था में है और किस गुणवत्ता की है। बेचने से पहले न्यूनतम, अधिकतम और प्रचलित भाव तीनों देखें, और केवल अधिकतम भाव देखकर पूरा माल बेचने का फैसला न लें।"
        ]
      },
      {
        "title": "सांगरी का भाव कहाँ और कैसे देखें?",
        "paragraphs": [
          "सांगरी का भाव देखने के लिए इसी पेज पर दी गई मंडी भाव की सारणी सबसे आसान तरीका है। भाव देखते समय तीन बातों का ध्यान रखें: पहली, रिकॉर्ड की तारीख क्या है। दूसरी, भाव किस इकाई में है, किलो में या क्विंटल में। तीसरी, भाव हरी सांगरी का है या सूखी सांगरी का। इनमें से कोई एक भी अलग हो तो दो भावों की सीधी तुलना गलत नतीजा दे सकती है।",
          "किसी एक मंडी के भाव के भरोसे पूरा माल बेचने के बजाय अपनी नज़दीकी मंडी और दूसरी मंडियों के भाव मिलाकर देखना बेहतर रहता है।"
        ]
      },
      {
        "title": "सांगरी का सर्वोत्तम भाव पाने के लिए सुझाव",
        "items": [
          "सही समय पर तुड़ाई करें। फली पतली, कोमल और बिना रेशे की हो, तभी तोड़ें।",
          "तुड़ाई के तुरंत बाद धोकर हल्का उबालें और साफ़ कपड़े या तिरपाल पर फैलाकर सुखाएँ। सीधे मिट्टी और धूल से बचाएँ ताकि रंग और चमक बनी रहे।",
          "काली पड़ी, गीली या फफूँद लगी फलियों को अलग रखें, नहीं तो पूरे lot का भाव गिर सकता है।",
          "पतली और मोटी सांगरी को अलग-अलग रखें। मिलाने से बारीक सांगरी का भी पूरा भाव नहीं मिलता।",
          "हरी और सूखी सांगरी का भाव अलग समझें और अलग-अलग बेचें।",
          "पीक सीज़न में जब मंडियों में हरी सांगरी की आवक बहुत ज़्यादा हो, तो कम दाम पर बेचने के बजाय उसे सही तरीके से सुखाकर सुरक्षित रखें। शादी-त्योहार के सीज़न में सूखी सांगरी बेचने पर आमतौर पर बेहतर भाव मिलता है।",
          "नमी रहित साफ़ बोरियों या एयरटाइट बैग में पैक करें।",
          "उसी दिन की मंडी आवक, न्यूनतम और अधिकतम भाव और माँग की जानकारी लें।",
          "एक ही मंडी या व्यापारी पर निर्भर न रहें, दो-तीन जगह भाव पूछें।",
          "केवल पुराने भाव के आधार पर आज बेचने का फैसला न करें।",
          "तौल के समय खुद मौजूद रहें।"
        ],
        "ordered": true
      },
      {
        "title": "सांगरी का राजस्थान के किसानों के लिए महत्व",
        "paragraphs": [
          "खेजड़ी राजस्थान के शुष्क कृषि क्षेत्र में बहुत महत्वपूर्ण पेड़ है। इसके कारण सांगरी सिर्फ़ खाद्य पदार्थ नहीं, बल्कि मरुस्थलीय खेती और ग्रामीण जीवन से जुड़ा उत्पाद है। खेजड़ी आधारित खेती में पेड़ और फसल साथ-साथ रहने से शुष्क क्षेत्रों में कृषि विविधता को सहारा मिलता है। शोध में यह भी बताया गया है कि खेजड़ी के नीचे की मिट्टी में जैविक पदार्थ बढ़ता है, जिससे आसपास की फसलों को भी फायदा मिल सकता है।",
          "कई किसान खेत की मेड़ या खाली पड़ी ज़मीन पर खेजड़ी के पेड़ों से अतिरिक्त आमदनी लेते हैं। सांगरी अपेक्षाकृत कम लागत में तैयार होने वाली उपज है, पर उसकी पैदावार मौसम और पेड़ की स्थिति पर निर्भर करती है।"
        ]
      },
      {
        "title": "सांगरी के बारे में खास बातें",
        "items": [
          "पेड़ का नाम: खेजड़ी, वैज्ञानिक नाम Prosopis cineraria",
          "सांगरी क्या है: खेजड़ी की कच्ची, कोमल फलियाँ; पकी फली को खोखा कहते हैं",
          "स्थानीय नाम: सांगरी, सिंगरी",
          "मुख्य क्षेत्र: राजस्थान के शुष्क और मरुस्थलीय क्षेत्र सहित अन्य शुष्क क्षेत्र",
          "तुड़ाई का समय: मुख्य रूप से गर्मी, लगभग अप्रैल से जून",
          "प्रमुख उपयोग: सब्ज़ी, कढ़ी, अचार, केर-सांगरी और पंचकूट",
          "सूखी सांगरी: उबालकर और सुखाकर लंबे समय तक सुरक्षित रखी जाने वाली सांगरी",
          "बाज़ार: स्थानीय मंडियों के साथ राजस्थान के बाहर के शहरों में भी सूखी सांगरी की माँग",
          "पेड़ की खासियत: कम पानी और गर्म, शुष्क परिस्थितियों में जीवित रहने की क्षमता"
        ]
      },
      {
        "title": "किसान भाइयों के लिए ज़रूरी बात",
        "paragraphs": [
          "सांगरी राजस्थान की मरुस्थलीय परिस्थितियों से जुड़ा ऐसा पारंपरिक खाद्य उत्पाद है, जिसकी पहचान अब राजस्थान से बाहर भी बन चुकी है। खेजड़ी से मिलने वाली सांगरी का उपयोग ताज़ी सब्ज़ी से लेकर सूखी सांगरी और प्रसिद्ध केर-सांगरी तक कई रूपों में होता है। दैनिक बाज़ार के रुझान, माल की ग्रेडिंग और साफ़-सफ़ाई का ध्यान रखकर सांगरी बेचेंगे तो अपनी मेहनत का वाजिब भाव पाने की संभावना बेहतर रहेगी।",
          "अगर आप सांगरी बेचने की तैयारी कर रहे हैं, तो अपनी नज़दीकी मंडी का आज का सांगरी भाव, आवक और माल की गुणवत्ता के अनुसार चल रही कीमत ज़रूर देखें। ध्यान रखें कि अलग-अलग मंडियों में भाव अलग हो सकता है और हरी सांगरी तथा सूखी सांगरी की कीमत की सीधे तुलना नहीं करनी चाहिए।",
          "नोट: मंडी भाव में प्रतिदिन बदलाव संभव है। वास्तविक खरीद-बिक्री दर सांगरी की गुणवत्ता, आवक, माँग, अवस्था और स्थानीय बाज़ार की परिस्थितियों के अनुसार अलग हो सकती है।"
        ]
      }
    ]
  }
  },
  "mandis": {
    "sri-ganganagar": {
      "title": "श्रीगंगानगर मंडी भाव: बाज़ार की चाल और किसानों के लिए खास जानकारी",
      "paragraphs": ["राम-राम किसान भाईयों! श्रीगंगानगर मंडी (Sri Ganganagar Mandi) में अपनी उपज लेकर आने वाले सभी किसानों और व्यापारियों का स्वागत है। ऊपर दी गई तालिका में हमने आज के ताज़ा भाव अपडेट कर दिए हैं। भाईयों, श्रीगंगानगर मंडी सिर्फ़ एक बाज़ार नहीं है, बल्कि यह उत्तर भारत के सबसे बड़े व्यापारिक केंद्रों में से एक है। यहाँ होने वाली बोलियों का असर आसपास के राज्यों पर भी पड़ता है। मंडी में अपनी फसल बेचने जाने से पहले बाज़ार का हाल और ट्रेंड समझना बहुत ज़रूरी है, ताकि आपको अपनी मेहनत का पूरा दाम मिल सके।"],
      "sections": [
        {
          "title": "नरमा, कपास और ग्वार की स्थिति: अंतर्राष्ट्रीय बाज़ार का असर",
          "paragraphs": ["श्रीगंगानगर बेल्ट मुख्य रूप से नरमा (कपास), ग्वार और सरसों के लिए जाना जाता है। यहाँ की कपास की क्वालिटी देश-विदेश में मशहूर है।"]
        },
        {
          "title": "नरमा और कपास:",
          "paragraphs": ["क्या आप जानते हैं कि श्रीगंगानगर में नरमा का भाव सिर्फ़ स्थानीय मांग पर नहीं, बल्कि अंतर्राष्ट्रीय कॉटन बाज़ार (NYCE) पर भी निर्भर करता है? जब विदेशी बाज़ारों में मांग बढ़ती है, तो यहाँ की मिलें भी ऊँचे रेट पर खरीद करती हैं। साफ़ और सूखी (कम नमी वाली) कपास की मांग हमेशा अच्छी रहती है। अगर आपकी कपास में नमी ज़्यादा है, तो व्यापारी सीधे भाव में कटौती करते हैं।"]
        },
        {
          "title": "ग्वार और सरसों:",
          "paragraphs": ["ग्वार के भाव में होने वाला उतार-चढ़ाव ग्वार-गम की मांग पर टिका होता है। सरसों की बात करें, तो इसमें तेल की मात्रा (Oil Content) सबसे ज़रूरी है। तेल मिलों की खरीद के हिसाब से मॉडल भाव रोज़ ऊपर-नीचे होता है, इसलिए सिर्फ एक दिन का नहीं, बल्कि पिछले 4-5 दिनों का ट्रेंड ज़रूर देखें।"]
        },
        {
          "title": "अपनी उपज का सबसे बेहतरीन भाव कैसे पाएं?",
          "paragraphs": ["मंडी में सबसे ऊंचे रेट पर फसल बेचने के लिए इन 3 बातों का हमेशा ध्यान रखें:"],
          "items": [
            "फसल सुखाकर लाएं: श्रीगंगानगर की धूप में दम है! चाहे सरसों हो या नरमा, उसे अच्छी तरह सुखाकर मंडी लाएं। नमी (Moisture) सरकारी मानकों के अनुसार 8% से 12% के बीच ही होनी चाहिए। गीली फसल का भाव हमेशा कम लगता है क्योंकि उसे स्टोर करने पर खराब होने का डर रहता है।",
            "ढेरी की सफाई (Grading): फसल में मिट्टी, डंठल या अन्य कचरा न हो। व्यापारी जब साफ़ ढेरी देखते हैं, तो वे बिना हिचकिचाए अच्छी बोली लगाते हैं। मुमकिन हो तो घर पर ही छंटाई कर लें, इससे मंडी में समय और पैसा दोनों बचता है।",
            "औसत (Model) भाव को समझें: बाज़ार में 'अधिकतम भाव' (Maximum Rate) केवल उसी 1-2 ढेरी को मिलता है जो 'सुपर ए-वन क्वालिटी' की होती है। इसलिए अपना अंदाज़ा हमेशा 'मॉडल भाव' को देखकर लगाएं, जिस पर मंडी का ज़्यादातर माल बिका है। इससे आपको सही मोल-भाव करने में मदद मिलेगी।"
          ],
          "ordered": true
        },
        {
          "title": "मंडी में खरीद या बिक्री से पहले ज़रूरी सलाह",
          "paragraphs": ["श्रीगंगानगर मंडी पंजाब और हरियाणा की सीमाओं के पास है, इसलिए यहाँ की आवक पर पड़ोसी राज्यों का भी असर होता है। मंडी में आने से पहले आसपास की मंडियों (जैसे सादुलशहर, सूरतगढ़ या गोलूवाला) के रेट की भी तुलना कर लेनी चाहिए। इससे आढ़तियों के साथ बात करते समय आपका पक्ष मज़बूत रहता है। साथ ही, मंडी के आधिकारिक समय, बोली के घंटों और छुट्टियों की जानकारी पहले ही कर लें ताकि आपको वहां रात न बितानी पड़े।"]
        },
        {
          "title": "निष्कर्ष",
          "paragraphs": ["किसान की असली ताकत उसकी जानकारी है। खेती की मेहनत तभी सफल होती है जब बाज़ार में उसकी सही कीमत मिले। यह पेज आपको रोज़ाना के सटीक भाव तो देता ही है, लेकिन याद रखें—जानकारी के साथ आपकी फसल की चमक और ईमानदारी ही आपको मंडी का असली विजेता बनाती है। अगली बार श्रीगंगानगर मंडी जाने से पहले इस पेज को चेक करें और अपनी फसल का पूरा हक पाएं।"]
        }
      ]
    },
    "anupgarh": {
      "title": "अनूपगढ़ मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["अनूपगढ़ मंडी भाव आज या Anupgarh Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "अनूपगढ़ मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में कपास, गेहूं, सरसों, मूंग, ग्वार और चना शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "सरसों और कपास में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है। गेहूं, मूंग और ग्वार जैसी अनाज और दलहन फसलों में किस्म, दाने की गुणवत्ता और नमी भाव को प्रभावित कर सकती है।"
          ]
        },
        {
          "title": "अनूपगढ़ मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "अनूपगढ़ मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "goluwala": {
      "title": "गोलूवाला मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["गोलूवाला मंडी भाव आज या Goluwala Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "गोलूवाला मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में कपास, ग्वार, टमाटर, प्याज, सरसों, आलू और 6 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "टमाटर, प्याज और आलू जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं। सरसों, अरंडी और कपास में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है।"
          ]
        },
        {
          "title": "गोलूवाला मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "गोलूवाला मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "kota": {
      "title": "कोटा मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["कोटा मंडी भाव आज या Kota Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "कोटा मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में गेहूं, सरसों, चना, मक्का, सोयाबीन, धान और 19 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "मेथी दाना और धनिया जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। प्याज, आलू और टमाटर जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "कोटा मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "कोटा मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "ramganj": {
      "title": "रामगंज मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["रामगंज मंडी भाव आज या Ramganj Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "रामगंज मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में धनिया, धान, हरा धनिया, अमरूद, अनार, सेब और 23 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "धनिया, मेथी दाना और इसबगोल जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। आलू, प्याज और टमाटर जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "रामगंज मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "रामगंज मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "kekri": {
      "title": "केकरी मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["केकरी मंडी भाव आज या Kekri Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "केकरी मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में प्याज, चना, उड़द, मूंग, ज्वार, सरसों और 5 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "सौंफ जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। प्याज जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "केकरी मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "केकरी मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "beawar": {
      "title": "ब्यावर मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["ब्यावर मंडी भाव आज या Beawar Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "ब्यावर मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में मक्का, बाजरा, जौ, सरसों, मूंगफली, गेहूं और 1 अन्य फसल शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "सरसों और मूंगफली में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है। मक्का, बाजरा और जौ जैसी अनाज और दलहन फसलों में किस्म, दाने की गुणवत्ता और नमी भाव को प्रभावित कर सकती है।"
          ]
        },
        {
          "title": "ब्यावर मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "ब्यावर मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "baran": {
      "title": "बारां मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["बारां मंडी भाव आज या Baran Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "बारां मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में सरसों, उड़द, धान, अलसी, प्याज, आलू और 10 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "धनिया और मेथी दाना जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। प्याज, आलू और लहसुन जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "बारां मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "बारां मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "bikaner": {
      "title": "बीकानेर मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["बीकानेर मंडी भाव आज या Bikaner Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "बीकानेर मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में ग्वार, मोठ, बाजरा, मूंग, मूंगफली, ज्वार और 17 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "इसबगोल, मेथी दाना और जीरा जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। टमाटर, अनार और अदरक जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "बीकानेर मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "बीकानेर मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "nokha": {
      "title": "नोखा मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["नोखा मंडी भाव आज या Nokha Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "नोखा मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में जीरा, मूंग, ग्वार, इसबगोल, मेथी दाना और गेहूं शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "जीरा, इसबगोल और मेथी दाना जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। मूंग, ग्वार और गेहूं जैसी अनाज और दलहन फसलों में किस्म, दाने की गुणवत्ता और नमी भाव को प्रभावित कर सकती है।"
          ]
        },
        {
          "title": "नोखा मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "नोखा मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "lunkaransar": {
      "title": "लूणकरणसर मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["लूणकरणसर मंडी भाव आज या Lunkaransar Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "लूणकरणसर मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "इस पेज पर अभी गेहूं का उपलब्ध रेट रिकॉर्ड शामिल है। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "गेहूं जैसी अनाज और दलहन फसलों में किस्म, दाने की गुणवत्ता और नमी भाव को प्रभावित कर सकती है।"
          ]
        },
        {
          "title": "लूणकरणसर मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "लूणकरणसर मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "nagaur": {
      "title": "नागौर मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["नागौर मंडी भाव आज या Nagaur Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "नागौर मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में मूंग, जीरा, ग्वार, बाजरा, मोठ, जौ और 5 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "जीरा, हल्दी और इसबगोल जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। सरसों में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है।"
          ]
        },
        {
          "title": "नागौर मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "नागौर मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "merta": {
      "title": "मेड़ता मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["मेड़ता मंडी भाव आज या Merta Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "मेड़ता मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में मूंग, ग्वार, जीरा, इसबगोल, मोठ, जौ और 5 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "जीरा, इसबगोल और सौंफ जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। सरसों में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है।"
          ]
        },
        {
          "title": "मेड़ता मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "मेड़ता मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "jodhpur": {
      "title": "जोधपुर मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["जोधपुर मंडी भाव आज या Jodhpur Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "जोधपुर मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में बाजरा, जीरा, ग्वार, मोठ, मूंग, कपास और 22 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "जीरा, धनिया और इसबगोल जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। प्याज, टमाटर और लहसुन जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "जोधपुर मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "जोधपुर मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "jaipur": {
      "title": "जयपुर (बस्सी) मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["जयपुर (बस्सी) मंडी भाव आज या Jaipur (Bassi) Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "जयपुर (बस्सी) मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में गेहूं, आलू, टमाटर, मूंग, उड़द, चना और 16 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "आलू, टमाटर और प्याज जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं। सरसों में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है।"
          ]
        },
        {
          "title": "जयपुर (बस्सी) मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "जयपुर (बस्सी) मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "jalore": {
      "title": "जालौर मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["जालौर मंडी भाव आज या Jalore Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "जालौर मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में अदरक, हरा धनिया, हरी मिर्च, ग्वार फली, टमाटर, आलू और 3 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "टमाटर, अदरक और हरा धनिया जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "जालौर मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "जालौर मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "nimbahera": {
      "title": "निम्बाहेड़ा मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["निम्बाहेड़ा मंडी भाव आज या Nimbahera Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "निम्बाहेड़ा मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में मेथी दाना, सरसों, गेहूं, मूंगफली, लहसुन, जौ और 1 अन्य फसल शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "मेथी दाना जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। लहसुन जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "निम्बाहेड़ा मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "निम्बाहेड़ा मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "unjha": {
      "title": "उंझा मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["उंझा मंडी भाव आज या Unjha Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "उंझा मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में जीरा, इसबगोल, सौंफ, ग्वार, सरसों, तिल और 3 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "जीरा, इसबगोल और सौंफ जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। सरसों और तिल में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है।"
          ]
        },
        {
          "title": "उंझा मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "उंझा मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "mehsana": {
      "title": "मेहसाणा मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["मेहसाणा मंडी भाव आज या Mehsana Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "मेहसाणा मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में केला, अरंडी, हरी मिर्च, आलू, प्याज, टमाटर और 4 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "आलू, प्याज और टमाटर जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं। सरसों और अरंडी में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है।"
          ]
        },
        {
          "title": "मेहसाणा मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "मेहसाणा मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "patan": {
      "title": "पाटन मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["पाटन मंडी भाव आज या Patan Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "पाटन मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में अदरक, हरा धनिया, टमाटर, हरी मिर्च, ज्वार, अरंडी और 12 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "सौंफ, जीरा और सुआ जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। टमाटर, अदरक और हरा धनिया जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "पाटन मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "पाटन मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "gondal": {
      "title": "गोंडल मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["गोंडल मंडी भाव आज या Gondal Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "गोंडल मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में कपास, मूंगफली, प्याज, मिर्च, गेहूं, टमाटर और 22 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "मेथी दाना, जीरा और धनिया जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। प्याज, मिर्च और टमाटर जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "गोंडल मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "गोंडल मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "rajkot": {
      "title": "राजकोट मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["राजकोट मंडी भाव आज या Rajkot Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "राजकोट मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में मक्का, कपास, टमाटर, अरंडी, अरहर, मूंगफली और 18 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "धनिया, जीरा और मेथी दाना जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। टमाटर, लहसुन और प्याज जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "राजकोट मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "राजकोट मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "amreli": {
      "title": "अमरेली मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["अमरेली मंडी भाव आज या Amreli Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "अमरेली मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में कपास, मूंगफली, अरहर, अरंडी, गेहूं, बाजरा और 10 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "जीरा और मेथी दाना जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। कपास, मूंगफली और अरंडी में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है।"
          ]
        },
        {
          "title": "अमरेली मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "अमरेली मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "deesa": {
      "title": "डीसा मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["डीसा मंडी भाव आज या Deesa Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "डीसा मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में बाजरा, मूंगफली, आलू, अरंडी, लहसुन, ग्वार और 15 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "सौंफ, जीरा और सुआ जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। आलू, लहसुन और प्याज जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "डीसा मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "डीसा मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "indore": {
      "title": "इंदौर मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["इंदौर मंडी भाव आज या Indore Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "इंदौर मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में सोयाबीन, गेहूं, लहसुन, चना, मक्का, प्याज और 22 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "मेथी दाना जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। प्याज, आलू और टमाटर जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "इंदौर मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "इंदौर मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "ujjain": {
      "title": "उज्जैन मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["उज्जैन मंडी भाव आज या Ujjain Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "उज्जैन मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में चना, सोयाबीन, उड़द, गेहूं, लहसुन, आलू और 14 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "मेथी दाना जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। लहसुन, आलू और प्याज जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "उज्जैन मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "उज्जैन मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "harda": {
      "title": "हरदा मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["हरदा मंडी भाव आज या Harda Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "हरदा मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में मक्का, सोयाबीन, अरहर, गेहूं, सरसों, प्याज और 11 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "प्याज, आलू और टमाटर जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं। सरसों में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है।"
          ]
        },
        {
          "title": "हरदा मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "हरदा मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "mandsaur": {
      "title": "मंदसौर मंडी भाव आज: लहसुन, सोयाबीन और प्रमुख फसलों की सटीक रिपोर्ट",
      "paragraphs": ["राम-राम किसान भाइयों! FasalBhav पर आपका स्वागत है। अगर आप मालवा अंचल की प्रमुख कृषि उपज मंडी यानी मंदसौर मंडी में अपनी फसल बेचने आ रहे हैं, तो घर से निकलने से पहले बाज़ार की सही स्थिति जानना बहुत ज़रूरी है। ऊपर दी गई भाव-तालिका में आप आज के ताज़ा रेट देख सकते हैं। हमारा उद्देश्य आपको सिर्फ भाव बताना नहीं, बल्कि मंडी की असली तस्वीर दिखाना है, ताकि आपको अपनी मेहनत का पूरा मोल मिल सके।"],
      "sections": [
        {
          "title": "अपनी फसल का सबसे बेहतरीन भाव (Top Price) कैसे लें?",
          "paragraphs": ["मंडी में हर ढेर (लॉट) का भाव अलग होता है। अगर आप चाहते हैं कि आपकी उपज ऊपर के भावों में बिके, तो इन बातों पर विशेष ध्यान दें:"],
          "items": [
            "सफाई और ग्रेडिंग (Sorting): व्यापारी सबसे पहले माल की चमक और सफाई देखता है। लहसुन को आकार के हिसाब से अलग करें और सोयाबीन या गेहूं से डंठल-मिट्टी साफ कर लें। Fair Average Quality (FAQ) के मानक पूरे करने वाले और Non-FAQ grade के माल का भाव गुणवत्ता के अनुसार अलग हो सकता है।",
            "नमी (Moisture) बिल्कुल न हो: फसल (विशेषकर सोयाबीन और मक्का) को पूरी तरह सुखाकर ही मंडी लाएं। नमी वाले माल में व्यापारी वजन घटने के डर से हमेशा भाव काटकर ही बोली लगाता है।",
            "सही भाव की पहचान (Model Price): मंडी में कोई एक सुपर क्वालिटी का लॉट बहुत ऊँचे दाम (अधिकतम भाव) पर बिक सकता है, लेकिन वह पूरे बाज़ार का भाव नहीं होता। अपनी फसल की तुलना मॉडल भाव से करें, क्योंकि यह उस दिन की सामान्य कारोबार स्थिति का प्रतिनिधि संकेत देता है।"
          ]
        },
        {
          "title": "मंदसौर में लहसुन और सोयाबीन की गुणवत्ता",
          "paragraphs": ["लहसुन में गांठ का आकार, कली की मोटाई, बाहरी परत, सूखापन और टूट-फूट देखकर अलग-अलग ग्रेड बनते हैं। सोयाबीन में नमी के साथ कचरा, टूटे या खराब दाने और लॉट की सफाई भी बोली पर असर डालती है। इसलिए अपने माल की तुलना उसी फसल, किस्म और मिलते-जुलते ग्रेड के भाव से करें।"]
        },
        {
          "title": "मंदसौर मंडी से जुड़ी ज़रूरी बातें",
          "items": [
            "नीलामी व्यवस्था: उपज लेकर निकलने से पहले संबंधित फसल की नीलामी की जगह और समय की पुष्टि मंडी समिति की आधिकारिक सूचना से कर लें।",
            "तुलाई और भुगतान: माल बेचने से पहले तुलाई की पर्ची, लागू मंडी शुल्क और भुगतान का तरीका स्पष्ट कर लें तथा भुगतान का रिकॉर्ड सुरक्षित रखें।",
            "मंडी अवकाश: रविवार, त्योहार या अन्य अवकाश पर नीलामी की स्थिति बदल सकती है। छुट्टी की सही जानकारी के लिए मंडी समिति की आधिकारिक सूचना या स्थानीय मंडी कार्यालय से पुष्टि करें।"
          ]
        },
        {
          "title": "पास की मंडियों के भाव भी देखें",
          "paragraphs": ["मंदसौर का भाव देखने के साथ नीमच और रतलाम जैसी आसपास की उपलब्ध मंडियों के रेट भी मिलाएं। तुलना करते समय फसल, किस्म, गुणवत्ता, इकाई और रिकॉर्ड की तारीख एक जैसी रखें; केवल सबसे ऊँचे भाव को देखकर फैसला न करें।"]
        }
      ]
    },
    "neemuch": {
      "title": "नीमच मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["नीमच मंडी भाव आज या Neemuch Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "नीमच मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में लहसुन, इसबगोल, कलौंजी, मसूर, अलसी, मक्का और 20 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "इसबगोल, मेथी दाना और कलौंजी जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। लहसुन, प्याज और हरा धनिया जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "नीमच मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "नीमच मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "ratlam": {
      "title": "रतलाम मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["रतलाम मंडी भाव आज या Ratlam Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "रतलाम मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में हरी मटर, प्याज, गेहूं, लहसुन, चना, उड़द और 6 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "मेथी दाना जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। प्याज, लहसुन और हरी मटर जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "रतलाम मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "रतलाम मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "bhiwani": {
      "title": "भिवानी मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["भिवानी मंडी भाव आज या Bhiwani Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "भिवानी मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में अमरूद, केला, सेब, अनार, प्याज, आलू और 1 अन्य फसल शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "अमरूद, केला और सेब जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "भिवानी मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "भिवानी मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "siwani": {
      "title": "सिवानी मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["सिवानी मंडी भाव आज या Siwani Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "सिवानी मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में कपास, ग्वार, मूंग और बाजरा शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "कपास में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है। ग्वार, मूंग और बाजरा जैसी अनाज और दलहन फसलों में किस्म, दाने की गुणवत्ता और नमी भाव को प्रभावित कर सकती है।"
          ]
        },
        {
          "title": "सिवानी मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "सिवानी मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "sirsa": {
      "title": "सिरसा मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["सिरसा मंडी भाव आज या Sirsa Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "सिरसा मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में प्याज, आलू, टमाटर, केला, सेब, अमरूद और 7 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "प्याज, आलू और टमाटर जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं। कपास और सरसों में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है।"
          ]
        },
        {
          "title": "सिरसा मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "सिरसा मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "hisar": {
      "title": "हिसार मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["हिसार मंडी भाव आज या Hisar Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "हिसार मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में अमरूद, अनार, सेब, लहसुन, आलू, टमाटर और 6 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "लहसुन, आलू और टमाटर जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं। सरसों और कपास में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है।"
          ]
        },
        {
          "title": "हिसार मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "हिसार मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "adampur": {
      "title": "आदमपुर मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["आदमपुर मंडी भाव आज या Adampur Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "आदमपुर मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में हरी मटर, आलू, प्याज, टमाटर, अदरक, लहसुन और 7 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "आलू, प्याज और टमाटर जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं। कपास और सरसों में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है।"
          ]
        },
        {
          "title": "आदमपुर मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "आदमपुर मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "fatehabad": {
      "title": "फतेहाबाद मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["फतेहाबाद मंडी भाव आज या Fatehabad Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "फतेहाबाद मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में आलू, टमाटर, प्याज, अमरूद, सेब, केला और 10 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "आलू, टमाटर और प्याज जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं। सरसों में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है।"
          ]
        },
        {
          "title": "फतेहाबाद मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "फतेहाबाद मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "jind": {
      "title": "जींद मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["जींद मंडी भाव आज या Jind Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "जींद मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में आलू, प्याज और टमाटर शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "आलू, प्याज और टमाटर जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "जींद मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "जींद मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "rohtak": {
      "title": "रोहतक मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["रोहतक मंडी भाव आज या Rohtak Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "रोहतक मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में आलू, प्याज, सेब, केला, अमरूद, अनार और 1 अन्य फसल शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "आलू, प्याज और सेब जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "रोहतक मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "रोहतक मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "shahabad": {
      "title": "शाहाबाद मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["शाहाबाद मंडी भाव आज या Shahabad Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "शाहाबाद मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में धान, ग्वार फली, लहसुन, प्याज, टमाटर, गेहूं और 10 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "लहसुन, प्याज और टमाटर जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं। गेहूं, मक्का और धान जैसी अनाज और दलहन फसलों में किस्म, दाने की गुणवत्ता और नमी भाव को प्रभावित कर सकती है।"
          ]
        },
        {
          "title": "शाहाबाद मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "शाहाबाद मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "tarori": {
      "title": "तरावड़ी मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["तरावड़ी मंडी भाव आज या Tarori Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "तरावड़ी मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में आलू, प्याज, केला, टमाटर और सेब शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "आलू, प्याज और केला जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "तरावड़ी मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "तरावड़ी मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "panipat": {
      "title": "पानीपत मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["पानीपत मंडी भाव आज या Panipat Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "पानीपत मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में प्याज, टमाटर, आलू, केला, अमरूद, सेब और 2 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "प्याज, टमाटर और आलू जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं। धान जैसी अनाज और दलहन फसलों में किस्म, दाने की गुणवत्ता और नमी भाव को प्रभावित कर सकती है।"
          ]
        },
        {
          "title": "पानीपत मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "पानीपत मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "sonepat": {
      "title": "सोनीपत मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["सोनीपत मंडी भाव आज या Sonepat Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "सोनीपत मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में टमाटर, प्याज, आलू, सेब, अमरूद, केला और 3 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "टमाटर, प्याज और आलू जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "सोनीपत मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "सोनीपत मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "ganaur": {
      "title": "गन्नौर मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["गन्नौर मंडी भाव आज या Ganaur Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "गन्नौर मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में हरा धनिया, हरी मटर, टमाटर, लहसुन, आलू, प्याज और 6 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "टमाटर, लहसुन और आलू जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "गन्नौर मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "गन्नौर मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "guntur": {
      "title": "गुंटूर मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["गुंटूर मंडी भाव आज या Guntur Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "गुंटूर मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "इस पेज पर अभी मिर्च का उपलब्ध रेट रिकॉर्ड शामिल है। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "मिर्च जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं।"
          ]
        },
        {
          "title": "गुंटूर मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "गुंटूर मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "byadgi": {
      "title": "ब्याडगी मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["ब्याडगी मंडी भाव आज या Byadgi Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "ब्याडगी मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में मिर्च, अदरक और मक्का शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "मिर्च और अदरक जैसे ताज़े उत्पादों में आकार, ताजगी, छंटाई और संभाल के कारण अलग-अलग लॉट के भाव अलग हो सकते हैं। मक्का जैसी अनाज और दलहन फसलों में किस्म, दाने की गुणवत्ता और नमी भाव को प्रभावित कर सकती है।"
          ]
        },
        {
          "title": "ब्याडगी मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "ब्याडगी मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "mathania": {
      "title": "मथानिया मंडी भाव आज: फसलवार रेट और मंडी जानकारी",
      "paragraphs": ["मथानिया मंडी भाव आज या Mathania Mandi Bhav Today खोजने वाले पाठक ऊपर दी गई तालिका में इस मंडी की उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम रेट देख सकते हैं। मॉडल भाव सबसे आम दर्ज दर का संकेत देता है; अंतिम सौदा फसल के ग्रेड और लॉट पर निर्भर हो सकता है।"],
      "sections": [
        {
          "title": "मथानिया मंडी में उपलब्ध फसलें और भाव",
          "paragraphs": [
            "उपलब्ध रेट रिकॉर्ड में बाजरा, जीरा, इसबगोल, सौंफ, सरसों, गेहूं और 3 अन्य फसलें शामिल हैं। एक ही फसल के अलग-अलग लॉट का रेट समान होना ज़रूरी नहीं है, इसलिए अपनी उपज की किस्म और गुणवत्ता के साथ तालिका पढ़ें।",
            "जीरा, इसबगोल और सौंफ जैसी मसाला और बीज वाली फसलों में दाने की सफाई, नमी और ग्रेड के अनुसार रेट में अंतर आ सकता है। सरसों में किस्म, नमी और लॉट की गुणवत्ता को देखकर ही रेट की तुलना करना बेहतर रहता है।"
          ]
        },
        {
          "title": "मथानिया मंडी भाव को सही तरह कैसे पढ़ें",
          "paragraphs": ["भाव की तुलना केवल उसी फसल, उसी किस्म और समान इकाई के साथ करें। न्यूनतम, मॉडल और अधिकतम रेट तीन अलग बातें हैं; मॉडल भाव बाजार की सामान्य दिशा समझने में मदद करता है।"],
          "items": [
            "पहले अपनी फसल की सही पंक्ति और उसकी इकाई चुनें।",
            "किस्म, नमी, सफाई और लॉट के अनुसार कीमत में अंतर को ध्यान में रखें।",
            "निर्णय से पहले अन्य उपलब्ध मंडियों के उसी फसल वाले रेट से तुलना करें।"
          ]
        },
        {
          "title": "मथानिया मंडी में बेचने या खरीदने से पहले ध्यान रखें",
          "paragraphs": [],
          "items": [
            "सिर्फ सबसे ऊँचे रेट को लक्ष्य न मानें; अपनी उपज के ग्रेड से उसका मिलान करें।",
            "मॉडल भाव, न्यूनतम और अधिकतम भाव—तीनों को साथ पढ़ें।",
            "पुराने और नए उपलब्ध भाव रिकॉर्ड के अंतर को समझकर ही तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "agra": {
      "title": "आगरा मंडी भाव आज: स्थानीय फसलों और रेट की उपयोगी जानकारी",
      "paragraphs": ["आगरा कृषि उपज मंडी (Agra APMC) में अनाज, तिलहन, दालों के साथ आलू और दूसरी सब्जियों के भी प्रकाशित रिकॉर्ड मिलते हैं। इस पेज पर केवल आगरा मंडी से मेल खाने वाले उपलब्ध न्यूनतम, मॉडल और अधिकतम भाव दिखाए जाते हैं; खुदरा बाजार का रेट इससे अलग हो सकता है।"],
      "sections": [
        {
          "title": "आज का Agra Mandi Bhav कैसे पढ़ें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["आगरा मंडी में आलू की छंटाई और आकार, गेहूं व बाजरा की नमी-सफाई तथा सरसों और तिल की गुणवत्ता के अनुसार अलग lot की बोली बदल सकती है। इसलिए केवल सबसे ऊँचे भाव को सामान्य रेट मानने के बजाय मॉडल भाव और पूरी range साथ देखें।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["आलू की स्थानीय आवक, अनाज और तिलहन की मौसमी उपलब्धता, व्यापारी मांग तथा परिवहन की स्थिति आगरा मंडी के भाव पर असर डाल सकती है। अलग फसल का नवीनतम प्रकाशित दिन भी अलग हो सकता है, इसलिए तालिका में freshness संकेत देखकर तुलना करें।"]
        },
        {
          "title": "आगरा मंडी में खरीद या बिक्री से पहले ध्यान रखें",
          "items": [
            "Agra APMC और आसपास की दूसरी मंडियों के नाम आपस में न मिलाएँ।",
            "सरसों, तिल, बाजरा और गेहूं की तुलना एक ही फसल और समान गुणवत्ता में करें।",
            "सब्जियों के प्रति किलो भाव को मंडी के प्रति क्विंटल रिकॉर्ड से सही रूपांतरण के बाद ही समझें।"
          ],
          "ordered": true
        }
      ]
    },
    "kanpur": {
      "title": "कानपुर मंडी भाव आज: Grain APMC की फसलवार जानकारी",
      "paragraphs": ["कानपुर (Grain) APMC के इस पेज पर गेहूं, धान, बाजरा, आलू और दूसरी उपलब्ध उपज के सत्यापित न्यूनतम, मॉडल और अधिकतम भाव दिखते हैं। केवल कानपुर Grain APMC से मेल खाने वाले प्रकाशित रिकॉर्ड लिए जाते हैं।"],
      "sections": [
        {
          "title": "आज का कानपुर भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["अनाज में नमी, दाने की सफाई और किस्म तथा आलू-सब्जियों में आकार और छंटाई के कारण अलग lot की बोली बदल सकती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["कानपुर में अनाज और ताजी उपज के रिकॉर्ड अलग तारीखों पर प्रकाशित हो सकते हैं, इसलिए प्रत्येक पंक्ति की freshness और इकाई देखकर तुलना करें।"]
        },
        {
          "title": "कानपुर बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "Kanpur Grain APMC को जिले की दूसरी sub-markets से न मिलाएँ।",
            "धान और rice के रिकॉर्ड अलग फसल नामों में पढ़ें।",
            "सब्जी के प्रति किलो और अनाज के प्रति क्विंटल भाव की सही इकाई देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "meerut": {
      "title": "मेरठ मंडी भाव आज: अनाज, तिलहन और सब्जी रेट",
      "paragraphs": ["मेरठ APMC के उपलब्ध प्रकाशित रिकॉर्ड में गेहूं, सरसों, आलू, प्याज और दूसरी उपज शामिल हो सकती है। यह पेज उन्हीं सत्यापित रिकॉर्ड की भाव-range दिखाता है।"],
      "sections": [
        {
          "title": "आज का मेरठ भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["गेहूं और सरसों में नमी व सफाई, जबकि आलू-प्याज में आकार, ताजगी और छंटाई भाव को प्रभावित कर सकती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["पश्चिमी उत्तर प्रदेश की मौसमी आवक और स्थानीय थोक मांग से मेरठ के अलग-अलग फसल भाव बदलते हैं; पुरानी और नई पंक्तियां अलग पहचानें।"]
        },
        {
          "title": "मेरठ बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "Meerut APMC का भाव Mawana या Sardhana APMC का भाव न मानें।",
            "गेहूं और सरसों की तुलना समान grade में करें।",
            "खुदरा रेट को मंडी के थोक रिकॉर्ड से सीधे न मिलाएँ।"
          ],
          "ordered": true
        }
      ]
    },
    "aligarh": {
      "title": "अलीगढ़ मंडी भाव आज: धान, गेहूं और सरसों की जानकारी",
      "paragraphs": ["अलीगढ़ APMC के सत्यापित रिकॉर्ड से धान, गेहूं, सरसों, बाजरा, आलू और अन्य उपलब्ध फसलों के न्यूनतम, मॉडल व अधिकतम भाव इस पेज पर दिए जाते हैं।"],
      "sections": [
        {
          "title": "आज का अलीगढ़ भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["धान की किस्म, गेहूं की नमी-सफाई, सरसों में तेल-अंश और बाजरे के दाने की गुणवत्ता अलग बोली का कारण बन सकती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["नई फसल की आवक, खरीदारों की मांग और भंडारण योग्य उपज की उपलब्धता अलीगढ़ मंडी की भाव-range बदल सकती है।"]
        },
        {
          "title": "अलीगढ़ बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "Aligarh APMC को Atrauli, Charra या Khair APMC से अलग रखें।",
            "धान की किस्म जाने बिना ऊंचे और सामान्य भाव की तुलना न करें।",
            "मॉडल भाव को सामान्य दिशा समझें, अंतिम सौदा नहीं।"
          ],
          "ordered": true
        }
      ]
    },
    "bareilly": {
      "title": "बरेली मंडी भाव आज: धान, गेहूं और उपलब्ध उपज के रेट",
      "paragraphs": ["बरेली APMC में प्रकाशित धान, गेहूं, आलू, मूंग, लहसुन और दूसरी उपलब्ध उपज के सत्यापित भाव इस पेज पर एक साथ देखे जा सकते हैं।"],
      "sections": [
        {
          "title": "आज का बरेली भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["धान-गेहूं में किस्म, नमी और टूटन तथा मूंग व लहसुन में सफाई, आकार और lot की एकरूपता भाव में फर्क ला सकती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["रुहेलखंड क्षेत्र की मौसमी आवक के साथ अनाज और सब्जी रिकॉर्ड की तारीख अलग हो सकती है, इसलिए freshness संकेत जरूरी है।"]
        },
        {
          "title": "बरेली बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "Bareilly APMC को Baheri या Anwala APMC से न मिलाएँ।",
            "धान और rice की पंक्तियां अलग अर्थ में पढ़ें।",
            "एक ही फसल की समान तारीख और grade वाली range तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "lucknow": {
      "title": "लखनऊ मंडी भाव आज: सब्जी, धान और अनाज के रेट",
      "paragraphs": ["लखनऊ APMC के उपलब्ध रिकॉर्ड में आलू, टमाटर, प्याज, हरी मिर्च के साथ धान, गेहूं और अन्य उपज भी मिलती है। पेज केवल official Lucknow APMC mapping का डेटा दिखाता है।"],
      "sections": [
        {
          "title": "आज का लखनऊ भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["ताजी सब्जियों में आकार, ताजगी और छंटाई तेजी से भाव बदलती है; धान व गेहूं में किस्म, नमी और सफाई अधिक महत्वपूर्ण हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["शहर की थोक मांग और दैनिक सब्जी आवक के कारण लखनऊ में ताजी उपज का भाव अनाज की तुलना में ज्यादा तेजी से बदल सकता है।"]
        },
        {
          "title": "लखनऊ बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "Lucknow APMC को Banthara या Sitapur APMC का रिकॉर्ड न मानें।",
            "डबग्गा/स्थानीय नाम खोजते समय table में official Lucknow APMC mapping समझें।",
            "सब्जी का प्रति किलो रूपांतरण सही इकाई में देखें।"
          ],
          "ordered": true
        }
      ]
    },
    "mathura": {
      "title": "मथुरा मंडी भाव आज: बाजरा, धान, गेहूं और सरसों",
      "paragraphs": ["मथुरा APMC के बाजरा, धान, गेहूं, सरसों, आलू और दूसरी उपलब्ध फसलों के सत्यापित भाव इस पेज पर दिखाए जाते हैं।"],
      "sections": [
        {
          "title": "आज का मथुरा भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["बाजरा व गेहूं में दाने की सफाई और नमी, धान में किस्म तथा सरसों में तेल-अंश और lot quality भाव बदल सकते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["मथुरा क्षेत्र की अनाज-तिलहन आवक और ताजी उपज की दैनिक उपलब्धता अलग-अलग तारीखों पर रिकॉर्ड हो सकती है।"]
        },
        {
          "title": "मथुरा बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "Mathura APMC को Kosikalan APMC से अलग रखें।",
            "धान की किस्म और सरसों का grade मिलाकर तुलना करें।",
            "सबसे ऊंचे भाव को हर lot का सामान्य रेट न मानें।"
          ],
          "ordered": true
        }
      ]
    },
    "hathras": {
      "title": "हाथरस मंडी भाव आज: अनाज, तिलहन और कपास रेट",
      "paragraphs": ["Official source में Haathras APMC नाम से मिलने वाले बाजरा, धान, गेहूं, सरसों, कपास, आलू और अन्य उपलब्ध रिकॉर्ड इस हाथरस पेज पर दिखते हैं।"],
      "sections": [
        {
          "title": "आज का हाथरस भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["कपास में नमी और सफाई, धान-गेहूं में किस्म व दाने की गुणवत्ता तथा आलू में आकार-छंटाई अलग भाव का कारण बनते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["फसल की मौसमी आवक और खरीदार मांग के अनुसार हाथरस APMC की अलग फसलों की नवीनतम रिकॉर्ड तारीख बदल सकती है।"]
        },
        {
          "title": "हाथरस बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "Haathras APMC की official spelling को Hathras page से map किया गया है।",
            "Sikandraraau या Shadabad APMC के भाव इसमें न मिलाएँ।",
            "कपास और अनाज की इकाई व grade अलग-अलग पढ़ें।"
          ],
          "ordered": true
        }
      ]
    },
    "gorakhpur": {
      "title": "गोरखपुर मंडी भाव आज: पूर्वी उत्तर प्रदेश की फसलवार दरें",
      "paragraphs": ["गोरखपुर APMC के धान, गेहूं, आलू, लहसुन, प्याज और दूसरी उपलब्ध कृषि उपज के सत्यापित भाव इस पेज पर दिए जाते हैं।"],
      "sections": [
        {
          "title": "आज का गोरखपुर भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["धान की किस्म और नमी, गेहूं की सफाई तथा आलू-प्याज-लहसुन की ताजगी और आकार मंडी बोली में अंतर ला सकते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["पूर्वी उत्तर प्रदेश की स्थानीय आवक, परिवहन और थोक मांग के कारण अनाज और सब्जी भाव की चाल अलग हो सकती है।"]
        },
        {
          "title": "गोरखपुर बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "Gorakhpur APMC को Chorichora या Sehjanwa APMC से अलग रखें।",
            "धान और गेहूं की समान तारीख व गुणवत्ता तुलना करें।",
            "सब्जी के पुराने रिकॉर्ड को आज का live rate न मानें।"
          ],
          "ordered": true
        }
      ]
    },
    "muzaffarnagar": {
      "title": "मुजफ्फरनगर मंडी भाव आज: अनाज और उपलब्ध फसल रेट",
      "paragraphs": ["Official Agmarknet में Muzzafarnagar APMC नाम से प्रकाशित धान, गेहूं, बाजरा, जौ, आलू और अन्य उपलब्ध फसल रिकॉर्ड इस पेज पर दिखते हैं।"],
      "sections": [
        {
          "title": "आज का मुजफ्फरनगर भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["अनाज में नमी, किस्म और सफाई तथा आलू-सब्जियों में आकार और ताजगी अलग lot के भाव बदल सकते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["क्षेत्र का गुड़-गन्ना व्यापार अलग उत्पाद श्रेणी है; इस तालिका में केवल site की verified crop mapping वाले उपलब्ध APMC रिकॉर्ड दिखते हैं।"]
        },
        {
          "title": "मुजफ्फरनगर बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "Muzzafarnagar official spelling को Muzaffarnagar page से map किया गया है।",
            "Khatauli या Shahpur APMC के रिकॉर्ड इसमें न मिलाएँ।",
            "तालिका में न दिखने वाली फसल का भाव अनुमान से न निकालें।"
          ],
          "ordered": true
        }
      ]
    },
    "hapur": {
      "title": "हापुड़ मंडी भाव आज: गेहूं, धान और अनाज की दरें",
      "paragraphs": ["हापुड़ APMC के गेहूं, धान, मक्का, बाजरा, आलू और दूसरी उपलब्ध उपज के न्यूनतम, मॉडल और अधिकतम रिकॉर्ड इस पेज पर दिए जाते हैं।"],
      "sections": [
        {
          "title": "आज का हापुड़ भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["गेहूं, धान और मक्का में किस्म, नमी व सफाई तथा आलू में आकार-छंटाई के कारण भाव-range बदल सकती है।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["अनाज की मौसमी आवक और स्थानीय भंडारण-खरीद मांग से हापुड़ के प्रकाशित मॉडल भाव में बदलाव आ सकता है।"]
        },
        {
          "title": "हापुड़ बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "Hapur APMC की exact market identity से ही रिकॉर्ड लिया गया है।",
            "धान, rice और गेहूं की पंक्तियों को एक-दूसरे का विकल्प न मानें।",
            "पुराने और fresh रिकॉर्ड का संकेत देखकर तुलना करें।"
          ],
          "ordered": true
        }
      ]
    },
    "saharanpur": {
      "title": "सहारनपुर मंडी भाव आज: धान, गेहूं और ताजी उपज",
      "paragraphs": ["सहारनपुर APMC के धान, गेहूं, आलू, प्याज, टमाटर, हरी मिर्च और अन्य उपलब्ध उपज के सत्यापित भाव इस पेज पर मिलते हैं।"],
      "sections": [
        {
          "title": "आज का सहारनपुर भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["धान-गेहूं में किस्म व नमी, जबकि फल-सब्जी रिकॉर्ड में ताजगी, आकार और handling के अनुसार अलग भाव हो सकते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["दैनिक ताजी उपज और मौसमी धान-गेहूं आवक की वजह से सहारनपुर में फसलवार रिकॉर्ड तारीख और range अलग हो सकती है।"]
        },
        {
          "title": "सहारनपुर बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "Saharanpur APMC को Deoband, Gangoh या Chhutmalpur APMC से अलग रखें।",
            "ताजी उपज का भाव उसकी record date देखकर पढ़ें।",
            "धान की किस्म और गेहूं के grade की पुष्टि करें।"
          ],
          "ordered": true
        }
      ]
    },
    "mainpuri": {
      "title": "मैनपुरी मंडी भाव आज: आलू, लहसुन और अनाज के रेट",
      "paragraphs": ["मैनपुरी APMC के आलू, लहसुन, धान, गेहूं, मक्का और दूसरी उपलब्ध फसलों के सत्यापित न्यूनतम, मॉडल व अधिकतम भाव इस पेज पर दिए जाते हैं।"],
      "sections": [
        {
          "title": "आज का मैनपुरी भाव कैसे देखें",
          "paragraphs": ["इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी तथा उपलब्ध दूसरी मंडियों के भाव की तुलना करके फैसला लेना अधिक उपयोगी रहता है।"],
          "items": [
            "अपनी मंडी या राज्य चुनकर भाव देखें।",
            "न्यूनतम, मॉडल और अधिकतम भाव में अंतर समझें।",
            "पुराने और नए उपलब्ध रिकॉर्ड में फर्क देखकर निर्णय लें।"
          ]
        },
        {
          "title": "गुणवत्ता और ग्रेड का असर",
          "paragraphs": ["आलू में आकार व छंटाई, लहसुन में गांठ की गुणवत्ता और नमी तथा अनाज में किस्म-सफाई बोली को प्रभावित कर सकते हैं।"]
        },
        {
          "title": "आवक, मांग और बाजार",
          "paragraphs": ["आलू और लहसुन की स्थानीय आवक तथा धान-गेहूं के मौसमी रिकॉर्ड मैनपुरी की अलग फसल भाव-range बदल सकते हैं।"]
        },
        {
          "title": "मैनपुरी बेचने या खरीदने से पहले ध्यान रखें",
          "items": [
            "Mainpuri APMC को Bewar या Ghiraur APMC से अलग रखें।",
            "आलू और लहसुन के प्रति किलो रूपांतरण सही आधार पर करें।",
            "अनाज की तुलना समान किस्म और रिकॉर्ड तारीख में करें।"
          ],
          "ordered": true
        }
      ]
    }
  },
  "states": {},
  "archive": {
    "kapas-previous-profile": {
      "intro": "कपास के इस एक पेज में नरमा, BT/American Cotton और देशी कपास के उपलब्ध मंडी रिकॉर्ड शामिल हैं। किस्म, lot की गुणवत्ता और नमी के कारण मंडी भाव में फर्क आ सकता है।",
      "quality": "कपास में नमी, साफ-सफाई, कचरे की मात्रा और रेशे की स्थिति पर खरीदार ध्यान देते हैं। एक ही मंडी में अलग किस्म या lot को अलग बोली मिलना सामान्य है।",
      "market": "जिनिंग इकाइयों की खरीद, स्थानीय आवक, बारिश या नमी तथा कपड़ा बाजार की मांग से कपास के भाव प्रभावित हो सकते हैं।",
      "advice": [
        "तालिका में दी हुई किस्म देखकर ही मंडी भाव की तुलना करें।",
        "गीले या अधिक कचरे वाले माल को अलग रखें।",
        "बिक्री से पहले आसपास की कपास मंडियों के भाव देखें।"
      ]
    },
    "moong-previous-profile": {
      "intro": "मूंग दलहन फसल है और इसका भाव दाने की रंगत, आकार, नमी तथा दाल बाजार की मांग से बदल सकता है। नई और पुरानी मूंग की गुणवत्ता भी एक जैसी नहीं होती।",
      "quality": "हरेपन, दाने के आकार, सफाई, टूटे दाने और नमी के आधार पर मूंग का grade बनता है। अच्छी तरह साफ lot को अलग बोली मिल सकती है।",
      "market": "मंडी में नई आवक, दाल मिलों की जरूरत और स्थानीय व्यापार मूंग के भाव को प्रभावित कर सकते हैं। अलग राज्यों की उपलब्ध मंडियों की तुलना उपयोगी रहती है।",
      "advice": [
        "नमी और टूटे दाने कम रखने पर ध्यान दें।",
        "नागौर, मेड़ता या पास की उपलब्ध मंडियों से तुलना करें।",
        "मूंग की किस्म या grade मिलाकर भाव न देखें।"
      ]
    }
  }
};

MB.faqs = {
  "mathania": [
    { "q": "मथानिया मिर्च की पहचान कैसे करें?", "a": "इसे केवल रंग या लंबाई देखकर पक्का नहीं पहचाना जा सकता। आमतौर पर यह सूखी, लंबी और गहरी लाल फलियों वाली मिर्च के रूप में मिलती है, लेकिन रंग, आकार, नमी और तीखापन lot के अनुसार बदल सकते हैं। खरीदते समय विक्रेता से मथानिया/Mathania Long किस्म, उत्पादन क्षेत्र और grade की जानकारी लें।" },
    { "q": "मथानिया मिर्च को हिंदी में क्या कहते हैं?", "a": "इसे आम तौर पर मथानिया लाल मिर्च या मथानिया लोंग कहा जाता है। यह किसी अलग भाषा का अनुवाद नहीं, बल्कि जोधपुर के मथानिया क्षेत्र से जुड़ा स्थानीय नाम है।" },
    { "q": "मथानिया किस लिए जाना जाता है?", "a": "मथानिया जोधपुर-मारवाड़ की लाल मिर्च, उसके गहरे रंग, स्वाद और तीखेपन के लिए जाना जाता है। इस मिर्च का उपयोग स्थानीय राजस्थानी व्यंजनों, खासकर लाल मांस जैसे पकवानों में भी किया जाता है।" },
    { "q": "मथानिया क्या है?", "a": "मथानिया जोधपुर जिले का एक क्षेत्र और कृषि उपज मंडी है। मथानिया मिर्च नाम वहां से जुड़ी स्थानीय लाल मिर्च की पहचान के लिए इस्तेमाल होता है। इस पेज पर भाव केवल उपलब्ध प्रकाशित मंडी रिकॉर्ड से दिखते हैं; मिर्च का प्रकाशित रिकॉर्ड न हो तो अनुमानित भाव नहीं दिखाया जाता।" }
  ],
  "guntur": [
    { "q": "गुंटूर किस लिए प्रसिद्ध है?", "a": "गुंटूर सूखी लाल मिर्च की खेती और व्यापार के लिए प्रसिद्ध है। यहां का मिर्च बाजार कई किस्मों की खरीद-बिक्री का महत्वपूर्ण केंद्र है; Guntur Sannam मिर्च भी इसी क्षेत्र से जुड़ी पहचान है।" },
    { "q": "गुंटूर कहाँ है?", "a": "गुंटूर भारत के आंध्र प्रदेश राज्य में स्थित है। यह पेज गुंटूर APMC के उपलब्ध प्रकाशित मंडी रिकॉर्ड दिखाता है।" },
    { "q": "आंध्र प्रदेश में कौन सी फसल उगाई जाती है?", "a": "आंध्र प्रदेश में धान, मिर्च, कपास, तंबाकू, दालें, मक्का, मूंगफली और कई बागवानी फसलें उगाई जाती हैं। गुंटूर जिले के प्रमुख कृषि उत्पादों में धान, तंबाकू, कपास और मिर्च शामिल हैं।" },
    { "q": "क्या गुंटूर आंध्र प्रदेश में स्थित है?", "a": "हां। गुंटूर आंध्र प्रदेश में स्थित है और यहां की मिर्च खेती तथा मिर्च बाजार की अलग पहचान है।" },
    { "q": "सबसे महंगी मिर्ची कौन सी है?", "a": "सबसे महंगी मिर्च का कोई एक स्थिर नाम नहीं है। भाव किस्म, grade, नमी, रंग, तीखापन, आवक और उस दिन की मांग पर बदलता है; इसलिए खरीद या तुलना में उसी मंडी के प्रकाशित रिकॉर्ड और किस्म को देखें।" },
    { "q": "सबसे अच्छी लाल मिर्च कौन सी होती है?", "a": "एक ही किस्म हर उपयोग के लिए सबसे अच्छी नहीं होती। तीखेपन के लिए Guntur Sannam जैसी मिर्च उपयुक्त मानी जाती है, जबकि गहरे लाल रंग और अपेक्षाकृत कम तीखेपन के लिए Byadgi को देखा जाता है। खरीदते समय अपने उपयोग, किस्म और grade के अनुसार चयन करें।" },
    { "q": "Is guntur chilli spicy or Byadgi?", "a": "Guntur Sannam is generally much spicier than Byadgi. Guntur Sannam is known for pungency, while Byadgi is usually chosen for deep red colour and lower pungency." }
  ],
  "byadgi": [
    { "q": "Is Byadgi chilli very spicy?", "a": "No. Byadgi chilli is generally known for deep red colour and low to mild pungency, not for very high heat. Heat can still vary by variety, grade and lot." },
    { "q": "Are Kashmiri and Byadgi chilli the same?", "a": "No. Kashmiri and Byadgi are different chilli types from different regions. Both can add red colour, but they should be compared by their own variety and grade rather than treated as the same chilli." },
    { "q": "Is guntur chilli spicy or Byadgi?", "a": "Guntur Sannam is generally much spicier than Byadgi. Guntur Sannam is known for pungency, while Byadgi is usually chosen for deep red colour and lower pungency." },
    { "q": "Why is Byadgi chilli famous?", "a": "Byadgi chilli is famous for its deep red colour, low pungency and use in chilli powder and colour extraction. Byadagi Chilli is a registered GI product of Karnataka." },
    { "q": "What is Byadgi mirchi called in English?", "a": "It is called Byadgi chilli or Byadagi chilli in English. The spelling Byadagi is also used for the Karnataka geographical indication." },
    { "q": "What is Byadgi chilli powder used for?", "a": "Byadgi chilli powder is mainly used to add a rich red colour to curries, gravies and spice blends without making the dish very hot. Check the pack or seller for the actual variety and blend." },
    { "q": "Where is the Byadgi chilli market?", "a": "Byadgi chilli is traded at Byadagi APMC in Haveri district, Karnataka. This page shows the available published records from that market." },
    { "q": "What is Byadgi Dabbi chilli?", "a": "Dabbi is one of the Byadgi chilli types listed in the official GI specifications. Its rate should be compared only with the same Dabbi variety and grade, not with Kaddi or Guntur lots." }
  ],
  "mirch": [
    { "q": "मथानिया मिर्च की पहचान कैसे करें?", "a": "मथानिया मिर्च को केवल रंग या लंबाई देखकर पक्का नहीं पहचाना जा सकता। आमतौर पर यह सूखी, लंबी और गहरी लाल फलियों वाली मिर्च के रूप में मिलती है, लेकिन रंग, आकार, नमी और तीखापन lot के अनुसार बदल सकते हैं। खरीदते समय किस्म, उत्पादन क्षेत्र और grade की जानकारी लें।" },
    { "q": "मथानिया मिर्च को हिंदी में क्या कहते हैं?", "a": "इसे आम तौर पर मथानिया लाल मिर्च या मथानिया लोंग कहा जाता है। यह जोधपुर के मथानिया क्षेत्र से जुड़ा स्थानीय नाम है।" },
    { "q": "मथानिया किस लिए जाना जाता है?", "a": "मथानिया जोधपुर-मारवाड़ की लाल मिर्च, उसके गहरे रंग, स्वाद और तीखेपन के लिए जाना जाता है। इस मिर्च का उपयोग स्थानीय राजस्थानी व्यंजनों, खासकर लाल मांस जैसे पकवानों में भी किया जाता है।" },
    { "q": "गुंटूर किस लिए प्रसिद्ध है?", "a": "गुंटूर सूखी लाल मिर्च की खेती और व्यापार के लिए प्रसिद्ध है। Guntur Sannam मिर्च इस क्षेत्र से जुड़ी पहचान है और गुंटूर बाजार में अलग-अलग किस्मों के भाव प्रकाशित होते हैं।" },
    { "q": "Is Byadgi chilli very spicy?", "a": "No. Byadgi chilli is generally known for deep red colour and low to mild pungency, not for very high heat. Heat can still vary by variety, grade and lot." },
    { "q": "Are Kashmiri and Byadgi chilli the same?", "a": "No. Kashmiri and Byadgi are different chilli types from different regions. Both can add red colour, but they should be compared by their own variety and grade rather than treated as the same chilli." },
    { "q": "Is guntur chilli spicy or Byadgi?", "a": "Guntur Sannam is generally much spicier than Byadgi. Guntur Sannam is known for pungency, while Byadgi is usually chosen for deep red colour and lower pungency." },
    { "q": "Why is Byadgi chilli famous?", "a": "Byadgi chilli is famous for its deep red colour, low pungency and use in chilli powder and colour extraction. Byadagi Chilli is a registered GI product of Karnataka." },
    { "q": "What is Byadgi mirchi called in English?", "a": "It is called Byadgi chilli or Byadagi chilli in English. The spelling Byadagi is also used for the Karnataka geographical indication." },
    { "q": "What is Byadgi chilli powder used for?", "a": "Byadgi chilli powder is mainly used to add a rich red colour to curries, gravies and spice blends without making the dish very hot. Check the pack or seller for the actual variety and blend." },
    { "q": "What is Byadgi Dabbi chilli?", "a": "Dabbi is one of the Byadgi chilli types listed in the official GI specifications. Its rate should be compared only with the same Dabbi variety and grade, not with Kaddi or Guntur lots." },
    { "q": "सबसे महंगी मिर्ची कौन सी है?", "a": "सबसे महंगी मिर्च का कोई एक स्थिर नाम नहीं है। भाव किस्म, grade, नमी, रंग, तीखापन, आवक और उस दिन की मांग पर बदलता है; इसलिए एक ही किस्म और grade के प्रकाशित रिकॉर्ड की तुलना करें।" },
    { "q": "सबसे अच्छी लाल मिर्च कौन सी होती है?", "a": "एक ही किस्म हर उपयोग के लिए सबसे अच्छी नहीं होती। तीखेपन के लिए Guntur Sannam जैसी मिर्च और गहरे लाल रंग के लिए Byadgi को देखा जाता है। अपने उपयोग, किस्म और grade के अनुसार चयन करें।" }
  ],
  "andhra-pradesh": [
    { "q": "आंध्र प्रदेश में कौन सी फसल उगाई जाती है?", "a": "आंध्र प्रदेश में धान, मिर्च, कपास, तंबाकू, दालें, मक्का, मूंगफली और कई बागवानी फसलें उगाई जाती हैं। गुंटूर जिले के प्रमुख कृषि उत्पादों में धान, तंबाकू, कपास और मिर्च शामिल हैं।" },
    { "q": "क्या गुंटूर आंध्र प्रदेश में स्थित है?", "a": "हां। गुंटूर आंध्र प्रदेश में स्थित है और सूखी लाल मिर्च की खेती तथा व्यापार के लिए जाना जाता है।" }
  ],
  "karnataka": [
    { "q": "Where is the Byadgi chilli market?", "a": "Byadgi chilli is traded at Byadagi APMC in Haveri district, Karnataka. Its published mandi records should be compared variety-wise, such as Kaddi and Dabbi." }
  ],
  "sua": [
    { "q": "सुआ और सुआ पत्ती में क्या अंतर है?", "a": "सुआ सूखे बीज वाली मसाला फसल है, जबकि सुआ पत्ती उसी पौधे की ताजी हरी पत्तियां हैं। दोनों की बिक्री का रूप, उपयोग और भाव अलग-अलग समझें।" },
    { "q": "सुआ का भाव किस इकाई में देखें?", "a": "सुआ सूखे बीज के रूप में दर्ज हो तो उसका भाव प्रति क्विंटल देखना उचित है। उपलब्ध मंडी रिकॉर्ड में न्यूनतम, मॉडल और अधिकतम रेट साथ में मिलेंगे।" },
    { "q": "सुआ के भाव में कौन-सी बातें फर्क डालती हैं?", "a": "दाने की सफाई, नमी, खुशबू, एकरूपता, स्थानीय आवक और खरीदारों की मांग के अनुसार सुआ के अलग-अलग लॉट का भाव बदल सकता है।" }
  ],
  "sua-patti": [
    { "q": "सुआ पत्ती का भाव किलो में क्यों देखा जाता है?", "a": "सुआ पत्ती ताजी हरी सब्जी है, इसलिए उसका भाव प्रति किलो समझना अधिक उपयोगी रहता है। इसे सूखे सुआ बीज के क्विंटल भाव से न मिलाएं।" },
    { "q": "सुआ पत्ती किस मौसम में मिलती है?", "a": "सुआ पत्ती की उपलब्धता स्थानीय मौसम और आवक पर निर्भर करती है। सर्दियों में इसकी आवक आम तौर पर अधिक दिख सकती है, लेकिन मंडी-वार स्थिति अलग रहती है।" },
    { "q": "अच्छी सुआ पत्ती की पहचान क्या है?", "a": "ताजी हरी, कोमल, साफ और बिना मुरझाई पत्तियों वाले बंडल बेहतर गुणवत्ता में माने जाते हैं। ज्यादा पीली पत्तियां या दबे हुए बंडल का भाव अलग हो सकता है।" }
  ],
  "ker": [
    { "q": "केर और सांगरी में क्या अंतर है?", "a": "केर काँटेदार झाड़ी पर लगने वाला छोटा गोल फल है, जबकि सांगरी खेजड़ी के पेड़ की लंबी पतली फली है। दोनों का उपयोग केर-सांगरी की सब्ज़ी में होता है।" },
    { "q": "केर का भाव देखते समय क्या जाँचें?", "a": "मंडी रिकॉर्ड की तारीख, भाव की इकाई और माल कच्चा है या सूखा, यह जाँचें। अलग अवस्था और तारीख वाले भाव की सीधी तुलना न करें।" },
    { "q": "केर का उपयोग किस काम में होता है?", "a": "केर का उपयोग पारंपरिक केर-सांगरी की सब्ज़ी, पंचकूट और अचार में होता है।" }
  ],
  "sangri": [
    { "q": "सांगरी किस पेड़ पर लगती है?", "a": "सांगरी खेजड़ी के पेड़ की कच्ची, कोमल फली है। पकी हुई फली को खोखा कहते हैं।" },
    { "q": "हरी और सूखी सांगरी में क्या अंतर है?", "a": "हरी सांगरी ताज़ी तोड़ी हुई फली है; सूखी सांगरी को सुखाकर लंबे समय तक रखा जाता है। दोनों की अवस्था और कीमत अलग-अलग होती हैं, इसलिए भाव की सीधी तुलना न करें।" },
    { "q": "सांगरी का भाव देखते समय क्या जाँचें?", "a": "मंडी रिकॉर्ड की तारीख, भाव की इकाई और सांगरी हरी है या सूखी, यह जाँचें। अलग अवस्था और तारीख वाले भाव की सीधी तुलना न करें।" }
  ],
  "gujarat": [
    {
      "q": "राजकोट में क्या खबर है?",
      "a": "राजकोट गुजरात की covered मंडियों में है। इस राज्य page पर उपलब्ध फसलों का भाव और राजकोट सहित सभी covered मंडियों की सूची देखी जा सकती है।"
    },
    {
      "q": "सूरत मंडी में आज के भाव क्या हैं?",
      "a": "सूरत मंडी अभी हमारी covered मंडियों की सूची में शामिल नहीं है। इस page पर गुजरात की जिन मंडियों के उपलब्ध भाव हैं, वे दिखाए जाते हैं।"
    },
    {
      "q": "आज गुजरात में गेहूं का क्या भाव है?",
      "a": "गुजरात की अलग-अलग मंडियों में गेहूं का भाव अलग होता है। इस राज्य की उपलब्ध मंडीवार भाव तालिका ऊपर देखें।"
    }
  ],
  "ramganj": [
    { "q": "आज रामगंज मंडी में क्या ताजा खबर है?", "a": "रामगंज मंडी के आज के ताजा भाव ऊपर दी गई तालिका में अपडेट होते रहते हैं, जिसमें धनिया, प्याज़, गेहूं, मक्का धान आदि के लेटेस्ट भाव शामिल हैं। भाव रोज़ मंडी के अनुसार अपडेट किए जाते हैं, इसलिए यहां हमेशा ताजा जानकारी मिलेगी।" },
    { "q": "रामगंज मंडी में क्या-क्या बिकता है?", "a": "रामगंज मंडी मुख्य रूप से धनिया (Coriander) के व्यापार के लिए पूरे एशिया में प्रसिद्ध है। धनिया की भारी आवक के कारण ही इसे 'धनिया नगरी' कहा जाता है। धनिया के अलावा, यहाँ की कृषि उपज मंडी में मुख्य रूप से सोयाबीन, सरसों, चना, लहसुन और गेहूं की सबसे ज्यादा खरीद-फरोख्त होती है।" },
    { "q": "Ramganj Mandi Bhav Today", "a": "रामगंज मंडी के आज के सभी उपलब्ध नवीनतम भाव (धनिया, सोयाबीन, सरसों आदि) इसी पेज पर ऊपर टेबल में दिए गए हैं। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और इस पेज के भाव अपडेट किए जाते हैं।" },
    { "q": "रामगंज मंडी की ताजा खबर", "a": "फसलों के बाज़ार रुझान से जुड़ी सभी ताज़ा जानकारियाँ हमारे इसी पेज पर नियमित रूप से अपडेट की जाती हैं। मंडी की हर ताज़ा हलचल और दैनिक भाव के लिए इस पेज को प्रतिदिन चेक करते रहें।" },
  ],
  "kekri": [
    { "q": "आज केकड़ी मंडी का भाव क्या है?", "a": "केकड़ी मंडी के आज के सभी प्रमुख फसलों (जैसे- उड़द, मूंग, चना, सरसों, जीरा, तिल, ज्वार और गेहूं आदि) के उपलब्ध नवीनतम भाव इसी पेज पर ऊपर टेबल में दिए गए हैं। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और इस पेज के भाव अपडेट किए जाते हैं, जुड़े रहने के लिए whatspp ग्रुप जॉइन करें ताकि वहाँ से सीधे आप यहाँ आ सकें।" },
    { "q": "Kekri Mandi bhav Today", "a": "Kekri Mandi (केकड़ी मंडी) के आज के सभी ताज़ा भाव (उपलब्ध भाव) इसी पेज पर ऊपर टेबल में विस्तार से दिए गए हैं। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ मूंग, उड़द, सरसों, चना, तिल और अन्य सभी प्रमुख फसलों के न्यूनतम और अधिकतम भाव अपडेट करते हैं। कृपया आज के उपलब्ध नवीनतम भाव देखने के लिए पेज को ऊपर स्क्रॉल करें।" },
  ],
  "baran": [
    { "q": "बारां मंडी के भाव क्या हैं?", "a": "बारां मंडी की सभी प्रमुख फसलों—जैसे लहसुन, सोयाबीन, सरसों, धनिया, गेहूं, चना और मक्का आदि—के उपलब्ध नवीनतम भाव इसी पेज पर ऊपर टेबल में दिए गए हैं। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ बारां कृषि उपज मंडी के उपलब्ध न्यूनतम और अधिकतम भाव अपडेट करते हैं। कृपया आज के उपलब्ध नवीनतम भाव देखने के लिए पेज को थोड़ा ऊपर की तरफ स्क्रॉल करें।" },
    { "q": "Baran Mandi Bhav Today", "a": "Baran Mandi (बारां मंडी) के आज के सभी ताज़ा भाव (उपलब्ध भाव) इसी पेज पर ऊपर टेबल में विस्तार से दिए गए हैं।किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ लहसुन, सोयाबीन, सरसों, धनिया, गेहूं और अन्य सभी प्रमुख फसलों के न्यूनतम और अधिकतम भाव अपडेट करते हैं। हमसे जुड़े रहने के लिए Whatsapp ग्रुप जॉइन करें।" }
  ],
  "bikaner": [
    { "q": "बीकानेर मंडी का आज का क्या भाव है?", "a": "बीकानेर मंडी की सभी प्रमुख फसलों—जैसे मूंगफली, ग्वार, मोठ, चना, सरसों, गेहूं, इसबगोल आदि—के उपलब्ध नवीनतम भाव इस पेज पर ऊपर टेबल में दिए गए हैं। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ बीकानेर कृषि उपज मंडी के उपलब्ध न्यूनतम और अधिकतम भाव अपडेट करते हैं। कृपया आज के उपलब्ध नवीनतम भाव देखने के लिए पेज को थोड़ा ऊपर की तरफ स्क्रॉल करें।" },
    { "q": "बीकानेर मंडी भाव", "a": "बीकानेर मंडी की सभी प्रमुख फसलों—जैसे ग्वार, मूंगफली, मोठ, चना, सरसों, गेहूं और इसबगोल आदि—के उपलब्ध नवीनतम भाव इसी पेज पर ऊपर टेबल में दिए गए हैं। हमसे जुड़े रहने के लिए Whatsapp ग्रुप जॉइन करें।" },
    { "q": "Nokha Mandi Bhav Today", "a": "Nokha Mandi (नोखा मंडी) के आज के सभी ताज़ा भाव (उपलब्ध भाव) इसी पेज पर ऊपर टेबल में विस्तार से दिए गए हैं। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ मोठ, ग्वार, मूंगफली, इसबगोल, जीरा, मूंग, चना और अन्य सभी प्रमुख फसलों के न्यूनतम और अधिकतम भाव अपडेट करते हैं। कृपया आज के उपलब्ध नवीनतम भाव देखने के लिए पेज को ऊपर स्क्रॉल करें।" }
  ],
  "nokha": [
    { "q": "Nokha Mandi Bhav Today", "a": "Nokha Mandi (नोखा मंडी) के आज के सभी ताज़ा भाव (उपलब्ध भाव) इसी पेज पर ऊपर टेबल में विस्तार से दिए गए हैं। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ मोठ, ग्वार, मूंगफली, इसबगोल, जीरा, मूंग, चना और अन्य सभी प्रमुख फसलों के न्यूनतम और अधिकतम भाव अपडेट करते हैं। कृपया आज के उपलब्ध नवीनतम भाव देखने के लिए पेज को ऊपर स्क्रॉल करें।" }
  ],
  "beawar": [
    { "q": "Beawar sabji mandi bhav today", "a": "Beawar Sabji Mandi (ब्यावर सब्जी मंडी) के आज के सभी ताज़ा भाव (उपलब्ध भाव) इसी पेज पर ऊपर टेबल में विस्तार से दिए गए हैं। किसानों, व्यापारियों और आम जनता की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ आलू, प्याज, लहसुन, टमाटर, हरी मिर्च और अन्य सभी ताज़ी सब्जियों के दैनिक भाव अपडेट करते हैं। कृपया आज के उपलब्ध नवीनतम भाव देखने के लिए पेज को ऊपर स्क्रॉल करें।" },
  ],
  "rajasthan": [
    { "q": "राजस्थान में सबसे बड़ी मंडी कौन सी है?", "a": "राजस्थान में अलग-अलग फसलों के लिए अलग-अलग मंडियां बड़ी मानी जाती हैं। जयपुर की मुहाना मंडी राजस्थान की सबसे बड़ी फल और सब्जी मंडी है। रामगंज मंडी धनिया के लिए पूरे एशिया की सबसे बड़ी मंडी है। बीकानेर कृषि उपज मंडी मूंगफली और ग्वार के लिए, श्रीगंगानगर मंडी अनाज और कपास के लिए और नोखा मंडी मोठ के व्यापार के लिए सबसे बड़ी मानी जाती है। किसानों की सुविधा के लिए हमारी वेबसाइट पर इन सभी मंडियों के ताज़ा भाव रोज़ाना source से उपलब्ध नए रिकॉर्ड के साथ अपडेट किए जाते हैं। हमसे जुड़े रहने के लिए हमारा Whatsapp ग्रुप जॉइन करें।" },
    { "q": "राजस्थान की सबसे बड़ी कृषि उपज मंडी कौन सी है?", "a": "राजस्थान में सबसे बड़ी कृषि उपज मंडी (अनाज मंडी) के रूप में श्रीगंगानगर मंडी और कोटा की भामाशाह कृषि उपज मंडी का नाम सबसे ऊपर आता है। श्रीगंगानगर मंडी गेहूं, सरसों और कपास के लिए प्रदेश की सबसे प्रमुख मंडी है, वहीं कोटा की भामाशाह मंडी में सोयाबीन, मक्का और गेहूं का बड़े पैमाने पर व्यापार होता है। इसके अलावा विशिष्ट फसलों की बात करें तो रामगंज मंडी धनिया के लिए और बीकानेर मंडी मूंगफली व ग्वार के लिए राजस्थान ही नहीं बल्कि पूरे एशिया में सबसे बड़ी मानी जाती है। इन सभी बड़ी मंडियों के दैनिक और ताज़ा भाव आप भाव रोज़ाना source से प्राप्त और हमारी वेबसाइट पर चेक कर सकते हैं।" },
    { "q": "Rajasthan Mandi Bhav today", "a": "राजस्थान की सभी प्रमुख कृषि उपज मंडियों (जैसे कोटा, रामगंज मंडी, केकड़ी, बीकानेर, नोखा, श्रीगंगानगर, मेड़ता और जयपुर आदि) के आज के ताज़ा भाव (उपलब्ध भाव) भाव रोज़ाना source से प्राप्त और हमारी वेबसाइट पर अपडेट किए जाते हैं। यहाँ आप सरसों, गेहूं, चना, ग्वार, मूंगफली, सोयाबीन, धनिया, जीरा और इसबगोल जैसी सभी प्रमुख फसलों के न्यूनतम और अधिकतम भाव विस्तार से देख सकते हैं। आज के उपलब्ध नवीनतम और उपलब्ध मंडी भाव जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" },
    { "q": "गेहूं का भाव राजस्थान", "a": "राजस्थान की अलग-अलग मंडियों में गेहूं का भाव अलग होता है। इस राज्य की उपलब्ध मंडीवार भाव तालिका ऊपर देखें।" }
  ],
  "jeera": [
    { "q": "राजस्थान की सबसे बड़ी जीरा मंडी कौन सी है?", "a": "राजस्थान में जीरे के व्यापार के लिए नागौर जिले की मेड़ता सिटी कृषि उपज मंडी और जोधपुर कृषि उपज मंडी सबसे बड़ी और प्रमुख मानी जाती हैं। पूरे प्रदेश और आस-पास के इलाकों से किसान अपना जीरा बेचने के लिए मुख्य रूप से इन्हीं मंडियों में आते हैं क्योंकि यहाँ जीरे की भारी आवक होती है और भाव भी अच्छे मिलते हैं। मेड़ता सिटी और जोधपुर सहित राजस्थान की सभी प्रमुख मंडियों के आज के ताज़ा जीरा भाव आप हमारी वेबसाइट पर ऊपर टेबल में आसानी से देख सकते हैं।" }
  ],
  "bajra": [
    { "q": "100 किलो बाजरा का भाव क्या है?", "a": "100 किलो यानी 1 क्विंटल बाजरा का भाव विभिन्न कृषि उपज मंडियों में गुणवत्ता और आवक के आधार पर तय होता है। अलग-अलग मंडियों में 100 किलो बाजरे के उपलब्ध नवीनतम उपलब्ध भाव जानने के लिए हमारी वेबसाइट पर ऊपर दी गई टेबल देखें, जहाँ दैनिक आधार पर न्यूनतम और अधिकतम भाव अपडेट किए जाते हैं। हमसे जुड़े रहने के लिए हमारा WhatsApp ग्रुप जॉइन करें।" }
  ],
  "merta": [
    { "q": "आज मेड़ता मंडी का क्या भाव है?", "a": "मेड़ता सिटी कृषि उपज मंडी (नागौर) की सभी प्रमुख फसलों—जैसे जीरा, इसबगोल, सौंफ, मूंग, ग्वार, चना, सरसों (रायड़ा) और तारामीरा आदि—के उपलब्ध नवीनतम भाव इसी पेज पर ऊपर टेबल में दिए गए हैं। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ मेड़ता मंडी के उपलब्ध न्यूनतम और अधिकतम भाव अपडेट करते हैं। आज के उपलब्ध नवीनतम भाव देखने के लिए कृपया पेज को थोड़ा ऊपर की तरफ स्क्रॉल करें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" },
    { "q": "मेड़ता मंडी का आज का भाव क्या है?", "a": "मेड़ता कृषि उपज मंडी के आज के सभी ताज़ा भाव (उपलब्ध भाव) इसी पेज पर ऊपर टेबल में विस्तार से दिए गए हैं। यहाँ आप जीरा, मूंग, ग्वार, इसबगोल, सौंफ, चना और सरसों जैसी प्रमुख फसलों के दैनिक न्यूनतम और अधिकतम भाव आसानी से देख सकते हैं। कृपया आज के उपलब्ध नवीनतम भाव जानने के लिए पेज को ऊपर की ओर स्क्रॉल करें।" },
    { "q": "Merta Mandi Bhav Today", "a": "अगर आप मेड़ता मंडी भाव टुडे (Merta Mandi Bhav Today) की सटीक जानकारी खोज रहे हैं, तो इस पेज पर आपको पूरी अपडेट मिलेगी। मेड़ता सिटी कृषि मंडी में आज जीरा, ग्वार, मूंग, सौंफ, चना और अन्य फसलों की क्या स्थिति है, इसका पूरा विवरण हमने इस पेज के बिल्कुल शुरुआत में एक आसान टेबल के रूप में दे रखा है। चूंकि मंडी के भाव प्रतिदिन बाजार की मांग और आवक के अनुसार बदलते रहते हैं, इसलिए सबसे ताज़ा और असली रेट तुरंत जानने के लिए कृपया ऊपर की तरफ स्क्रॉल करें और ऊपर दी गई मूल्य तालिका चेक करें।" },
    { "q": "Merta Mandi Bhav Today 2026", "a": "Merta Mandi (मेड़ता मंडी) के आज के सभी ताज़ा भाव (उपलब्ध भाव) इसी पेज पर ऊपर टेबल में विस्तार से दिए गए हैं। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ जीरा, मूंग, ग्वार, इसबगोल, सौंफ, चना और सरसों जैसी सभी प्रमुख फसलों के न्यूनतम और अधिकतम भाव अपडेट करते हैं। कृपया आज के उपलब्ध नवीनतम भाव देखने के लिए पेज को ऊपर स्क्रॉल करें।" },
  ],
  "nagaur": [
    { "q": "नागौर मंडी में आज के भाव क्या हैं?", "a": "नागौर कृषि उपज मंडी की सभी प्रमुख फसलों—जैसे जीरा, ग्वार, मूंग, मोठ, सरसों, इसबगोल, चना, मेथी और तारामीरा आदि—के उपलब्ध नवीनतम भाव इसी पेज पर ऊपर टेबल में दिए गए हैं। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ नागौर मंडी के उपलब्ध न्यूनतम और अधिकतम भाव अपडेट करते हैं। आज के उपलब्ध नवीनतम भाव देखने के लिए कृपया पेज को थोड़ा ऊपर की तरफ स्क्रॉल करें।" },
    { "q": "नागौर मंडी आज का भाव", "a": "आपको बता दें कि आज मंडी में जीरा, ग्वार, सरसों, चना और मूंग जैसी सभी महत्वपूर्ण फसलों के रेट्स की पूरी अपडेटेड लिस्ट ऊपर उपलब्ध करा दी गई है। बाजार में चल रहे ताज़ा उतार-चढ़ाव और फसलों की डिमांड के अनुसार जो भी नए रेट तय होते हैं, उन्हें ऊपर की तालिका में उपलब्ध किया जाता है। अपनी उपज का बिल्कुल सही और वर्तमान दाम जानने के लिए कृपया पेज को थोड़ा सा ऊपर स्क्रॉल करें और आज की ताज़ा प्राइस लिस्ट देखें।" },
    { "q": "नागौर मंडी भाव आज का 2026", "a": "नागौर कृषि उपज मंडी के आज (2026) के सभी उपलब्ध नवीनतम भाव हमारी वेबसाइट पर ऊपर टेबल में विस्तार से दिए गए हैं। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ जीरा, ग्वार, मूंग, मोठ, सरसों, इसबगोल, चना, मेथी और तारामीरा जैसी सभी प्रमुख फसलों के दैनिक न्यूनतम और अधिकतम भाव अपडेट करते हैं। आज के उपलब्ध नवीनतम और उपलब्ध मंडी भाव जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें।" },
    { "q": "नागौर मंडी सर्विसेस", "a": "नागौर कृषि उपज मंडी से जुड़ी सभी प्रमुख सर्विसेस और अपडेट्स, जैसे फसलों की दैनिक आवक, बाज़ार का रुझान और ताज़ा मंडी भाव हमारी वेबसाइट पर नियमित रूप से उपलब्ध कराए जाते हैं। source से रोज़ाना उपलब्ध नए रिकॉर्ड के अनुसार जीरा, ग्वार, मूंग, मोठ, सरसों और इसबगोल जैसी सभी प्रमुख फसलों के उपलब्ध नवीनतम और उपलब्ध भाव प्रदान करने की सर्विस देते हैं। नागौर मंडी की ताज़ा हलचल और आज के न्यूनतम व अधिकतम भाव जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करके टेबल देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "moong": [
    { "q": "मूंग के भाव क्या हैं?", "a": "मूंग के उपलब्ध नवीनतम भाव हर दिन मंडी की आवक और फसल की गुणवत्ता के आधार पर बदलते रहते हैं। आज के मूंग के उपलब्ध नवीनतम (न्यूनतम और अधिकतम) भाव जानने के लिए कृपया इसी पेज पर ऊपर दी गई टेबल देखें। हम किसानों और व्यापारियों की सुविधा के लिए source से रोज़ाना उपलब्ध नए रिकॉर्ड के अनुसार हमारी वेबसाइट पर मूंग और अन्य सभी प्रमुख फसलों के उपलब्ध भाव अपडेट करते हैं।" },
    { "q": "मूंग का भाव क्या है?", "a": "अगर आप आज का ताज़ा मूंग का भाव जानना चाहते हैं, तो इसकी पूरी जानकारी ऊपर लिस्ट में दी गई है। मूंग की क्वालिटी (हल्का, मीडियम या बढ़िया) और मंडियों में उसकी डिमांड के हिसाब से हर दिन कीमतों में उतार-चढ़ाव देखने को मिलता है। हमने इसी पेज पर ऊपर की तरफ जो टेबल दी है, उसमें मूंग के आज के सबसे सटीक और उपलब्ध भाव दर्ज किए गए हैं, ताकि किसानों और व्यापारियों को तुरंत सही जानकारी मिल सके। कृपया आज का मंडी रेट देखने के लिए पेज को थोड़ा ऊपर की ओर स्क्रॉल करें।" },
    { "q": "आज मध्य प्रदेश में मूंग मंडी भाव क्या है?", "a": "मध्य प्रदेश की अलग-अलग मंडियों में मूंग का भाव अलग होता है। उपलब्ध मंडीवार भाव ऊपर दी गई तालिका में देखें।" },
    { "q": "Moong ka bhav near me", "a": "यह पेज आपकी location अपने-आप नहीं लेता। ऊपर दी गई मंडीवार तालिका में अपने नज़दीक की मंडी चुनकर मूंग का भाव देखें।" },
    { "q": "Moong ka Bhav today Rajasthan", "a": "राजस्थान की अलग-अलग मंडियों में मूंग का भाव अलग होता है। उपलब्ध मंडीवार भाव ऊपर दी गई तालिका में देखें।" },
    { "q": "Moong price today in Rajasthan mandi", "a": "राजस्थान की अलग-अलग मंडियों में मूंग का भाव अलग होता है। उपलब्ध मंडीवार भाव ऊपर दी गई तालिका में देखें।" }
  ],
  "jodhpur": [
    { "q": "आज जोधपुर मंडी में ताजा भाव क्या है?", "a": "जोधपुर कृषि उपज मंडी के आज के एकदम उपलब्ध नवीनतम भाव जानने के लिए आप बिल्कुल सही पेज पर आए हैं। यहाँ प्रतिदिन जीरा, मूंग, ग्वार, रायड़ा, मोठ और इसबगोल जैसी प्रमुख फसलों के उपलब्ध भाव अपडेट किए जाते हैं। बाजार की मांग और आवक के हिसाब से बदलते हुए दामों की पूरी जानकारी आपको इसी पेज के सबसे ऊपरी हिस्से में दी गई सूची में आसानी से मिल जाएगी। किसान भाई अपनी उपज का सही मूल्य और आज का ताज़ा रेट देखने के लिए कृपया पेज को ऊपर की ओर स्क्रॉल करें और टेबल चेक करें।" },
    { "q": "जोधपुर मंडी आज का भाव", "a": "जोधपुर मंडी में आज के भाव की ताज़ा जानकारी प्राप्त करने के लिए हमने इस पेज के सबसे ऊपरी हिस्से में एक विस्तृत टेबल उपलब्ध कराई है। चाहे आप जीरा, ग्वार, मूंग के दाम ढूँढ रहे हों या फिर सरसों, मोठ और इसबगोल के रेट, आपको यहाँ जोधपुर कृषि उपज मंडी के सभी दैनिक न्यूनतम और अधिकतम भाव आसानी से मिल जाएंगे। बाजार की हलचल और आवक के अनुसार कीमतों में होने वाले बदलावों को हम तुरंत अपडेट करते हैं। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" },
  ],
  "jaipur": [
    { "q": "आज जयपुर मंडी में क्या भाव चल रहे हैं?", "a": "जयपुर कृषि उपज मंडी में आज के ताज़ा भाव की स्थिति जानने के लिए आपको इस पेज पर पूरी जानकारी मिल जाएगी। राजधानी की प्रमुख मंडी होने के कारण यहाँ गेहूं, सरसों, चना, बाजरा और मूंग जैसी विभिन्न फसलों की अच्छी आवक होती है, जिससे प्रतिदिन मार्केट के रेट्स में उतार-चढ़ाव आते रहते हैं। बाजार की इसी हलचल और फसलों के एकदम उपलब्ध भाव की अपडेट हमने इस पेज के सबसे ऊपर एक आसान टेबल के माध्यम से साझा की है। आज का मंडी रुझान और सभी फसलों के सटीक भाव देखने के लिए कृपया थोड़ा ऊपर की तरफ स्क्रॉल करें और ताज़ा सूची चेक करें।" },
    { "q": "जयपुर की सबसे बड़ी मंडी कौन सी है?", "a": "जयपुर में मुहाना मंडी को पूरे प्रदेश की सबसे बड़ी फल और सब्जी मंडी का दर्जा प्राप्त है, वहीं कृषि उपज और अनाज के व्यापार के लिए कुकरखेड़ा तथा सूरजपोल मंडियों का नाम प्रमुखता से लिया जाता है। राजधानी क्षेत्र होने के कारण यहाँ पूरे राजस्थान से विभिन्न प्रकार की फसलों की भारी आवक देखने को मिलती है।" },
    { "q": "Dausa Mandi Bhav Today", "a": "Are you looking for the latest Dausa Mandi bhav today? We provide daily updates on the market prices for all major crops arriving at the Dausa Krishi Upaj Mandi, including wheat, mustard, bajra, and chana. Since commodity rates frequently change depending on daily market demand and supply, we ensure our data reflects the current market trends. To check the exact live prices and stay informed about today's market conditions in Dausa, please scroll to the top of this page and view the detailed daily price table." },
    { "q": "Bassi anaj Mandi Bhav Today", "a": "Looking for the latest Bassi anaj Mandi bhav today? On this page, you will find daily updated price information for all major crops arriving at the Bassi Krishi Upaj Mandi, including wheat, mustard, bajra, and gram (chana). Market rates fluctuate each day according to trading demand, total arrivals, and crop quality. To stay updated with today's live market rates and recent price trends in Bassi, please scroll up to the top of this page to view our comprehensive daily price table." }
  ],
  "sarson": [{ "q": "आज सरसों का लाइव रेट क्या है?", "a": "सरसों के आज के ताज़ा बाजार भाव और दैनिक उतार-चढ़ाव की पूरी जानकारी इस पेज पर ऊपर दी गई टेबल में उपलब्ध करा दी गई है। विभिन्न मंडियों में सरसों की आवक, तेल की मात्रा (लैब प्रतिशत) और क्वालिटी के अनुसार दामों में अंतर देखने को मिलता है। सरसों के न्यूनतम, अधिकतम और मॉडल भाव के उपलब्ध रिकॉर्ड के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और आज की ताज़ा लिस्ट देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }],
  "gwar": [
    { "q": "Gwar ka bhav", "a": "ग्वार का भाव अलग-अलग मंडियों में अलग होता है। उपलब्ध मंडीवार न्यूनतम, मॉडल और अधिकतम भाव ऊपर दी गई तालिका में देखें।" }
  ],
  "nimbahera": [
    { "q": "आज निंबाहेड़ा मंडी में क्या भाव चल रहे हैं?", "a": "निंबाहेड़ा कृषि उपज मंडी (चित्तौड़गढ़) में आज के ताज़ा बाजार भाव और फसलों के उतार-चढ़ाव की पूरी जानकारी इस पेज के सबसे ऊपर उपलब्ध करा दी गई है। इस प्रमुख मंडी में गेहूं, मक्का, सोयाबीन, चना, सरसों, लहसुन और मूंगफली जैसी महत्वपूर्ण उपजों की दैनिक आवक और गुणवत्ता के अनुसार दाम तय होते हैं। निंबाहेड़ा मंडी के आज के सटीक न्यूनतम, अधिकतम और मॉडल भाव जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और ताज़ा सूची चेक करें।" }, 
    { "q": "Nimbahera Mandi Bhav Today", "a": "If you are looking for the latest Nimbahera Mandi bhav today, you can find the complete and updated price list on this page. Nimbahera Krishi Upaj Mandi in Chittorgarh is a major agricultural hub for commodities such as wheat, maize, soybean, mustard, garlic, chana, and groundnut. Daily market rates fluctuate based on arrival quantities and crop quality. To check today's accurate minimum, maximum, and modal prices and track current market trends, please scroll to the top of this page and view the detailed daily price table." }, 
    { "q": "निम्बाहेड़ा मंडी भाव आज का 2026", "a": "निम्बाहेड़ा कृषि उपज मंडी (चित्तौड़गढ़) के आज (2026) के उपलब्ध नवीनतम भाव हमारी वेबसाइट पर ऊपर टेबल में विस्तार से दिए गए हैं। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ गेहूं, मक्का, सोयाबीन, चना, सरसों, लहसुन और मूंगफली जैसी सभी प्रमुख फसलों के दैनिक न्यूनतम, अधिकतम और मॉडल भाव अपडेट करते हैं। आज के मंडी भाव और बाजार का ताज़ा रुझान जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और लिस्ट देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "patan": [
    { "q": "आज पाटन मंडी में क्या भाव चल रहे हैं?", "a": "पाटन कृषि उपज मंडी के आज के ताज़ा बाजार भाव और फसलों के रेट की विस्तृत जानकारी इस पेज के ऊपरी हिस्से में दी गई टेबल में उपलब्ध है। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ पाटन मंडी में आने वाली प्रमुख फसलों जैसे गेहूं, सरसों, चना, और अन्य कृषि उत्पादों के सटीक न्यूनतम, अधिकतम और मॉडल भाव अपडेट करते हैं। बाजार में हो रहे दैनिक उतार-चढ़ाव और आज के ताज़ा मंडी भाव की पूरी लिस्ट देखने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें।" }, 
    { "q": "पाटन जबलपुर मंडी भाव अरहर", "a": "पाटन कृषि उपज मंडी (जबलपुर, मध्य प्रदेश) में अरहर (तुअर) के आज के ताज़ा बाजार भाव और आवक की पूरी जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई टेबल में उपलब्ध करा दी गई है। जबलपुर क्षेत्र की प्रमुख मंडी होने के नाते यहाँ अरहर की दैनिक आवक, दाने की क्वालिटी और नमी के आधार पर रेट तय होते हैं। पाटन मंडी में आज अरहर के न्यूनतम, अधिकतम और मॉडल भाव की विस्तृत जानकारी प्राप्त करने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और ताज़ा सूची देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "gondal": [
    { "q": "गोंडल बाजार में आज कौन-कौन से भाव चल रहे हैं?", "a": "गुजरात की प्रमुख गोंडल कृषि उपज मंडी में आज के ताज़ा बाजार भाव और विभिन्न फसलों के रेट की पूरी जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई तालिका (टेबल) में उपलब्ध करा दी गई है। गोंडल मंडी विशेष रूप से मूंगफली, कपास, जीरा, धनिया, चना, गेहूं और लहसुन की भारी आवक और व्यापार के लिए प्रसिद्ध है। बाजार की दैनिक मांग, कुल आवक और फसल की क्वालिटी के अनुसार तय हुए आज के सटीक न्यूनतम, अधिकतम और मॉडल भाव (औसत रेट) विस्तार से जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और आज की ताज़ा सूची देखें।" },
    { "q": "उत्तर प्रदेश में आज के मंडी भाव क्या हैं?", "a": "उत्तर प्रदेश की विभिन्न कृषि उपज मंडियों में आज के ताज़ा बाजार भाव और फसलों की दैनिक आवक की पूरी जानकारी इस पेज के सबसे ऊपर उपलब्ध करा दी गई है। यूपी की प्रमुख मंडियों में गेहूं, धान, आलू, सरसों, गन्ना, मक्का और विभिन्न दलहनी फसलों के दाम दैनिक मांग, गुणवत्ता और आवक के आधार पर तय होते हैं। राज्य के सभी प्रमुख जिलों और मंडियों के आज के सटीक न्यूनतम, अधिकतम और मॉडल भाव विस्तार से जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और ताज़ा सूची देखें।" }
  ],
  "rajkot": [
  ],
  "kota": [
    { "q": "आज कोटा मंडी में क्या भाव चल रहे हैं?", "a": "राजस्थान के हाड़ौती अंचल की प्रमुख कृषि उपज मंडी (भामाशाह मंडी, कोटा) में आज के ताज़ा बाजार भाव की पूरी रिपोर्ट इस पेज के बिल्कुल ऊपरी हिस्से में दी गई टेबल में उपलब्ध करा दी गई है। कोटा मंडी में विशेष रूप से सोयाबीन, धनिया, गेहूं, लहसुन, चना और सरसों की बड़े पैमाने पर आवक होती है। स्थानीय बाजार की दैनिक मांग, कुल आवक और क्वालिटी के अनुसार इन सभी फसलों के आज के सटीक न्यूनतम, अधिकतम और मॉडल रेट जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और आज की ताज़ा लिस्ट चेक करें।" }
  ],
  "madhya-pradesh": [
    { "q": "मध्य प्रदेश में आज के मंडी भाव क्या हैं?", "a": "मध्य प्रदेश की विभिन्न कृषि उपज मंडियों में आज के ताज़ा बाजार भाव और फसलों के रेट की पूरी जानकारी इस पेज के सबसे ऊपर दी गई तालिका में उपलब्ध करा दी गई है। एमपी की प्रमुख मंडियों (जैसे इंदौर, उज्जैन, जबलपुर, नीमच, मंदसौर और भोपाल) में सोयाबीन, गेहूं, चना, लहसुन, प्याज, मक्का और सरसों की भारी आवक देखने को मिलती है। दैनिक मांग, कुल आवक और फसल की गुणवत्ता के अनुसार तय हुए आज के सटीक न्यूनतम, अधिकतम और मॉडल भाव जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और ताज़ा अपडेट देखें।" }
  ],
  "gehun": [
    { "q": "1 कुंटल गेहूं का आज का रेट क्या है?", "a": "विभिन्न कृषि उपज मंडियों में 1 क्विंटल गेहूं का आज का बाजार भाव मुख्य रूप से उसकी किस्म (जैसे शरबती, लोकवन या मिल क्वालिटी), दाने की चमक, नमी की मात्रा और कुल दैनिक आवक के आधार पर निर्धारित होता है। गेहूं की वर्तमान कीमतों में हो रहे दैनिक उतार-चढ़ाव और आज के सटीक न्यूनतम, अधिकतम तथा मॉडल भाव की विस्तृत जानकारी इस पेज के बिल्कुल ऊपरी हिस्से में दी गई तालिका (टेबल) में उपलब्ध करा दी गई है। अपनी स्थानीय मंडी के ताज़ा रेट जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और आज की अपडेटेड लिस्ट देखें।" },
    { "q": "यूपी में गेहूं का आज का ताजा रेट क्या है?", "a": "उत्तर प्रदेश की विभिन्न कृषि उपज मंडियों में गेहूं के आज के ताज़ा बाजार भाव और दैनिक आवक की पूरी जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई तालिका में उपलब्ध करा दी गई है। राज्य की मंडियों में गेहूं के दाम मुख्य रूप से उसकी किस्म (जैसे शरबती, लोकवन, दड़ा या मिल क्वालिटी), दाने की चमक, नमी और स्थानीय व बाहरी मांग के आधार पर तय होते हैं। यूपी के अलग-अलग जिलों और मंडियों में गेहूं के आज के सटीक न्यूनतम, अधिकतम और मॉडल भाव जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और आज की ताज़ा लिस्ट देखें।" },
    { "q": "आज गेहूं का क्या भाव है?", "a": "देश की विभिन्न कृषि उपज मंडियों में आज गेहूं के ताज़ा बाजार भाव और आवक की विस्तृत जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई तालिका में उपलब्ध करा दी गई है। गेहूं की कीमतें मुख्य रूप से उसकी किस्म (जैसे शरबती, लोकवन, दड़ा या मिल क्वालिटी), दाने की चमक, नमी और दैनिक बाजार मांग के आधार पर निर्धारित होती हैं। वर्तमान बाजार के रुझान और गेहूं के आज के सटीक न्यूनतम, अधिकतम तथा मॉडल रेट जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और आज की अपडेटेड लिस्ट देखें।" },
    { "q": "1 कुंटल गेहूं कितने रुपए का है?", "a": "1 क्विंटल गेहूं की कीमत अलग-अलग कृषि मंडियों में उसकी क्वालिटी (जैसे शरबती, लोकवन, टुकड़ी या मिल क्वालिटी), दाने के आकार, चमक, नमी और दैनिक आवक के आधार पर तय होती है। विभिन्न राज्यों और स्थानीय कृषि उपज मंडियों में गेहूं के आज के ताज़ा न्यूनतम, अधिकतम और मॉडल भाव की पूरी जानकारी इस पेज के सबसे ऊपर दी गई तालिका में उपलब्ध करा दी गई है। अपनी नजदीकी मंडी के ताज़ा रेट और बाजार का रुख जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और आज की अपडेटेड लिस्ट देखें।" },
    { "q": "2026 में गेहूं का रेट क्या है?", "a": "देश की विभिन्न कृषि उपज मंडियों में 2026 के ताज़ा गेहूं भाव और दैनिक आवक की पूरी जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई तालिका (टेबल) में उपलब्ध करा दी गई है। मंडियों में गेहूं के रेट मुख्य रूप से उसकी किस्म (जैसे शरबती, लोकवन, मिल क्वालिटी या दड़ा), दाने की चमक, नमी और बाजार की मांग के आधार पर प्रतिदिन निर्धारित होते हैं। सभी प्रमुख राज्यों और स्थानीय मंडियों के आज के सटीक न्यूनतम, अधिकतम तथा मॉडल भाव जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और आज की अपडेटेड लिस्ट देखें।" },
    { "q": "1482 गेहूं का भाव", "a": "1482 गेहूं का भाव मंडी और उपलब्ध किस्म-रिकॉर्ड के अनुसार अलग हो सकता है। मंडीवार और किस्म-वार उपलब्ध रिकॉर्ड ऊपर दी गई तालिका में देखें।" },
    { "q": "देसी गेहूं का भाव", "a": "देसी गेहूं का एक ही मंडी भाव नहीं होता। मंडीवार और किस्म-वार उपलब्ध रिकॉर्ड ऊपर दी गई तालिका में देखें।" },
  ],
  "haldi": [
    { "q": "आज हल्दी मंडी में क्या भाव चल रहे हैं?", "a": "देश की प्रमुख कृषि उपज मंडियों में आज हल्दी के ताज़ा बाजार भाव और दैनिक आवक की पूरी जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई तालिका में उपलब्ध करा दी गई है। हल्दी के प्रमुख व्यापारिक केंद्रों (जैसे निजामाबाद, इरोड, सांगली, नांदेड़ और हिंगोली) में हल्दी के दाम मुख्य रूप से उसकी किस्म (जैसे फिंगर या गट्टा/बल्ब), रंग, कुरकुमिन (Curcumin) की मात्रा, नमी और घरेलू व मसाला कंपनियों की मांग के आधार पर तय होते हैं। विभिन्न मंडियों में आज के सटीक न्यूनतम, अधिकतम और मॉडल भाव (जिस भाव पर सबसे ज्यादा व्यापार हुआ) की विस्तृत सूची देखने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और आज की ताज़ा लिस्ट देखें।" }
  ],
  "haryana": [
    { "q": "हरियाणा की सबसे बड़ी मंडी कौन सी है?", "a": "हरियाणा की सबसे बड़ी अनाज मंडी कुरुक्षेत्र जिले के लाडवा (Ladwa) में स्थित है। लाडवा अनाज मंडी को न केवल हरियाणा की सबसे बड़ी, बल्कि एशिया की दूसरी सबसे बड़ी अनाज मंडी होने का दर्जा प्राप्त है। यहाँ मुख्य रूप से गेहूं, धान और अन्य फसलों की भारी मात्रा में आवक होती है और बड़े स्तर पर व्यापार किया जाता है। इसके अलावा, फल और सब्जियों के व्यापार के लिए हरियाणा के गन्नौर (सोनीपत) में भी एक बहुत बड़ी अंतरराष्ट्रीय बागवानी मंडी (International Horticulture Market) का निर्माण किया जा रहा है। लाडवा मंडी सहित हरियाणा की सभी प्रमुख कृषि उपज मंडियों के आज के सटीक न्यूनतम, अधिकतम और मॉडल भाव (जिस रेट पर सबसे ज्यादा व्यापार हुआ हो) की पूरी जानकारी प्राप्त करने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और ताज़ा अपडेटेड लिस्ट देखें।" },
    { "q": "हरियाणा की सबसे बड़ी अनाज मंडी कौन सी है?", "a": "हरियाणा की सबसे बड़ी अनाज मंडी कुरुक्षेत्र जिले के लाडवा (Ladwa) में स्थित है। लाडवा अनाज मंडी को न केवल हरियाणा की, बल्कि पूरे एशिया की दूसरी सबसे बड़ी अनाज मंडी होने का गौरव प्राप्त है। इस मंडी में मुख्य रूप से गेहूं, धान (बासमती और अन्य किस्में) तथा अन्य अनाजों की भारी मात्रा में दैनिक आवक होती है और बड़े स्तर पर व्यापार किया जाता है। लाडवा मंडी सहित हरियाणा की सभी प्रमुख कृषि उपज मंडियों के आज के सटीक न्यूनतम, अधिकतम और मॉडल भाव (वह भाव जिस पर मंडी में सबसे ज्यादा मात्रा में व्यापार हुआ हो) की पूरी जानकारी प्राप्त करने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और ताज़ा अपडेटेड लिस्ट देखें।" },
    { "q": "आज हरियाणा में मंडी भाव क्या हैं?", "a": "हरियाणा की विभिन्न प्रमुख कृषि उपज मंडियों (जैसे लाडवा, सिरसा, हिसार, रोहतक, और करनाल) में आज के ताज़ा बाजार भाव और दैनिक आवक की पूरी जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई तालिका (टेबल) में उपलब्ध करा दी गई है। हरियाणा की मंडियों में मुख्य रूप से गेहूं, धान (बासमती और परमल), सरसों, नरमा-कपास (Cotton), और ग्वार जैसी प्रमुख फसलों की खरीद-बिक्री होती है। इन सभी फसलों के दाम उनकी क्वालिटी, नमी की मात्रा और स्थानीय मांग के आधार पर निर्धारित होते हैं। हरियाणा के अलग-अलग जिलों की मंडियों के आज के सटीक न्यूनतम, अधिकतम और मॉडल भाव (वह भाव जिस पर मंडी में सबसे ज्यादा फसल की बिक्री हुई हो) की विस्तृत सूची देखने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और आज की ताज़ा अपडेटेड लिस्ट चेक करें।" },
    { "q": "Anaj Mandi Bhav Today", "a": "देश की विभिन्न प्रमुख कृषि उपज और अनाज मंडियों में आज के ताज़ा बाजार भाव और दैनिक आवक की पूरी जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई तालिका (टेबल) में उपलब्ध करा दी गई है। अनाज मंडियों में मुख्य रूप से गेहूं, धान, मक्का, बाजरा, जौ, चना, सरसों और विभिन्न दलहनों का दैनिक व्यापार होता है। इन सभी फसलों के दाम उनकी गुणवत्ता, किस्म, नमी की मात्रा और स्थानीय व राष्ट्रीय बाजार की मांग के आधार पर तय किए जाते हैं। सभी प्रमुख राज्यों और अनाज मंडियों के आज के सटीक न्यूनतम, अधिकतम और मॉडल भाव (वह भाव जिस पर मंडी में सबसे ज्यादा मात्रा में फसल का व्यापार हुआ हो) की पूरी सूची देखने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और आज की ताज़ा अपडेटेड लिस्ट चेक करें।" },
    { "q": "E Mandi Bhav Today", "a": "The latest live electronic trading, minimum, maximum, and modal prices (the price at which the highest volume of produce was traded) across various e-NAM and online agricultural markets are updated in the table at the top of the page. Please scroll up to check the current rates." },
    { "q": "आज हरियाणा में 1718 धान का भाव क्या है?", "a": "हरियाणा की अलग-अलग मंडियों में 1718 धान का भाव अलग हो सकता है। इस राज्य की उपलब्ध मंडीवार भाव तालिका ऊपर देखें।" },
    { "q": "हरियाणा में 1509 धान का क्या रेट है?", "a": "हरियाणा की अलग-अलग मंडियों में 1509 धान का भाव अलग हो सकता है। इस राज्य की उपलब्ध मंडीवार भाव तालिका ऊपर देखें।" },
    { "q": "हरियाणा में गेहूं का आज का रेट क्या है?", "a": "हरियाणा की अलग-अलग मंडियों में गेहूं का भाव अलग होता है। इस राज्य की उपलब्ध मंडीवार भाव तालिका ऊपर देखें।" },
    { "q": "Dhan 1121 mandi bhav today haryana", "a": "हरियाणा की अलग-अलग मंडियों में 1121 धान का भाव अलग हो सकता है। इस राज्य की उपलब्ध मंडीवार भाव तालिका ऊपर देखें।" },
    { "q": "हरियाणा में आज बाजरे का क्या भाव है?", "a": "हरियाणा की अलग-अलग मंडियों में बाजरे का भाव अलग होता है। इस राज्य की उपलब्ध मंडीवार भाव तालिका ऊपर देखें।" },
  ],
  "shahabad": [
  ],
  "panipat": [
  ],
  "ganaur": [
  ],
  "fatehabad": [
  ],
  "jind": [
  ],
  "rohtak": [
  ],
  "bhiwani": [
    { "q": "भिवानी मंडी का भाव क्या है?", "a": "भिवानी मंडी (हरियाणा) में आज सरसों, ग्वार, चना, गेहूं, बाजरा और कपास जैसी फसलों के ताज़ा न्यूनतम, अधिकतम और मॉडल भाव की सूची पेज के सबसे ऊपर दी गई टेबल में अपडेट कर दी गई है। आज के सटीक रेट देखने के लिए कृपया पेज को ऊपर स्क्रॉल करें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" },
    { "q": "Bhiwani Mandi Bhav Today", "a": "The latest minimum, maximum, and modal prices (the price at which the highest volume of produce was traded) for mustard, guar, wheat, gram, bajra, and cotton in Bhiwani Mandi are updated in the table at the top of the page. Please scroll up to view the current rates." },
  ],
  "sirsa": [
    { "q": "Sirsa Mandi Bhav 1401 Today", "a": "The minimum, maximum, and modal prices (the price at which the highest volume of produce was traded) for 1401 paddy in Sirsa Mandi are updated in the table at the top of the page. Please scroll up to check the current rates." }
  ],
  "hisar": [
    { "q": "Hisar Mandi Bhav Today", "a": "The latest minimum, maximum, and modal prices (the price at which the highest volume of produce was traded) for crops like mustard, cotton, guar, and vegetables in Hisar Mandi are updated in the table at the top of the page. Please scroll up to check the current rates." },
    { "q": "Adampur Mandi Bhav Today", "a": "The minimum, maximum, and modal prices (the price at which the highest volume of produce was traded) for crops like mustard, guar, and cotton in Adampur Mandi are updated in the table at the top of the page. Please scroll up to check the current rates." },
  ],
  "dhan": [
    { "q": "1 कुंटल धान की कीमत क्या है?", "a": "धान का एक ही भाव नहीं होता; मंडी, किस्म और गुणवत्ता के अनुसार दर बदलती है। मंडीवार और किस्म-वार उपलब्ध रिकॉर्ड ऊपर दी गई तालिका में देखें।" },
    { "q": "Dhan 1121 mandi bhav today", "a": "The minimum, maximum, and modal prices (the price at which the highest volume of produce was traded) for 1121 paddy (dhan) in major mandis are updated in the table at the top of the page. Please scroll up to check the current rates." },
    { "q": "Dhan Mandi Bhav Today", "a": "The minimum, maximum, and modal prices (the price at which the highest volume of produce was traded) for paddy (dhan) across major mandis are updated in the table at the top of the page. Please scroll up to check the current rates." },
    { "q": "बासमती 30 नंबर का भाव क्या है?", "a": "बासमती 30 नंबर का भाव मंडी और उपलब्ध किस्म-रिकॉर्ड के अनुसार अलग हो सकता है। मंडीवार और किस्म-वार उपलब्ध रिकॉर्ड ऊपर दी गई तालिका में देखें।" },
    { "q": "आज 1718 धान का ताजा भाव क्या है?", "a": "1718 धान का भाव अलग-अलग मंडियों में अलग हो सकता है। मंडीवार और किस्म-वार उपलब्ध रिकॉर्ड ऊपर दी गई तालिका में देखें।" },
    { "q": "बासमती का रेट क्या है?", "a": "बासमती का एक ही मंडी भाव नहीं होता। मंडीवार और किस्म-वार उपलब्ध रिकॉर्ड ऊपर दी गई तालिका में देखें।" },
  ],
  "unjha": [
    { "q": "Unjha mandi bhav live", "a": "Are you searching for the most recent Unjha Mandi bhav? Unjha Krishi Upaj Mandi in Gujarat is widely recognized as Asia's largest spice market, receiving massive daily arrivals of jeera (cumin), saunf (fennel), isabgol (psyllium husk), and mustard. The daily commodity rates here are determined by domestic demand, international export requirements, and the overall quality of the produce. To stay informed about today's exact minimum, maximum, and modal prices for all major crops arriving in Unjha, please scroll up to the top of this page and check the complete, updated daily price table." },
    { "q": "उंझा मंडी ताजा भाव", "a": "गुजरात की विश्व प्रसिद्ध उंझा कृषि उपज मंडी में आज के ताज़ा बाजार भाव और फसलों के रेट की पूरी जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई टेबल में उपलब्ध करा दी गई है। उंझा मंडी विशेष रूप से जीरा, सौंफ, इसबगोल, अजवाइन, और सरसों जैसे मसालों और कृषि उत्पादों के बड़े पैमाने पर होने वाले व्यापार के लिए जानी जाती है। दैनिक मंडी आवक, घरेलू व अंतरराष्ट्रीय बाजार की मांग और उपज की गुणवत्ता के आधार पर तय हुए आज के सटीक न्यूनतम, अधिकतम और मॉडल भाव जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और हमारी ताज़ा अपडेटेड लिस्ट चेक करें।" },
    { "q": "Unjha mandi shop ka bhav", "a": "एशिया की सबसे बड़ी मसाला मंडी, उंझा (गुजरात) में आज सौंफ (Fennel) के ताज़ा बाजार भाव और दैनिक आवक की विस्तृत जानकारी इस पेज के ऊपरी हिस्से में दी गई टेबल में उपलब्ध करा दी गई है। उंझा मंडी में सौंफ के दाम मुख्य रूप से उसके दाने के रंग, क्वालिटी (जैसे एक्स्ट्रा ग्रीन या सामान्य), नमी और घरेलू व अंतरराष्ट्रीय बाजार की मांग के आधार पर तय होते हैं। सौंफ के वर्तमान बाजार रुझान और आज के सटीक न्यूनतम, अधिकतम तथा मॉडल भाव की पूरी लिस्ट देखने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और हमारी ताज़ा अपडेटेड तालिका चेक करें।" }
  ],
  "aalu": [
    {
      "q": "आलू का भाव किस इकाई में दिखता है?",
      "a": "मुख्य भाव रुपये प्रति क्विंटल में है। यह सब्जी है, इसलिए उसके साथ अनुमानित रुपये प्रति किलो भी दिखाया जाता है।"
    },
    {
      "q": "मॉडल भाव का क्या अर्थ है?",
      "a": "मॉडल भाव उस दिन मंडी में सबसे आम दर्ज दर है। यह न्यूनतम या अधिकतम भाव नहीं है।"
    }
  ],
  "sri-ganganagar": [
    { "crop": "gwar", "q": "गंगानगर मंडी में आज ग्वार का क्या भाव है?" },
    { "crop": "kapas", "q": "श्रीगंगानगर में नरमा का क्या भाव है?" },
    { "crop": "sarson", "q": "गंगानगर मंडी में आज सरसों का क्या भाव है?" },
    { "crop": "sarson", "q": "Sri ganganagar sarso mandi bhav today" },
    { "crop": "kapas", "q": "Sri ganganagar mein narme ka bhav" },
    { "crop": "gwar", "q": "गंगानगर ग्वार का भाव" },
    { "crop": "kapas", "q": "Narma ka bhav ganganagar" }
  ],
  "anupgarh": [
    { "crop": "sarson", "q": "अनूपगढ़ में सरसों का भाव क्या है?" }
  ],
  "kota": [
    { "crop": "lahsun", "q": "कोटा मंडी में आज ताजा लहसुन का क्या भाव है?" },
    { "crop": "gehun", "q": "राजस्थान के कोटा मंडी में गेहूं का आज का भाव क्या है?" },
    { "crop": "lahsun", "q": "कोटा मंडी लहसुन का भाव 2026" },
    { "crop": "soyabean", "q": "कोटा मंडी भाव सोयाबीन आज का" },
    { "crop": "sarson", "q": "कोटा मंडी सरसों का भाव आज का" }
  ],
  "indore": [
    { "q": "इंदौर मंडी में आज के भाव क्या हैं?", "a": "इंदौर मंडी में आज उपलब्ध सभी फसलों के न्यूनतम, मॉडल और अधिकतम भाव ऊपर दी गई मंडी भाव तालिका में देखें।" },
    { "q": "Indore Mandi Bhav Today live", "a": "इंदौर मंडी के उपलब्ध live rates और सभी फसलों की पूरी price range ऊपर दी गई मंडी भाव तालिका में देखें।" },
    { "crop": "pyaz", "q": "इंदौर मंडी में प्याज का आज का भाव क्या है?" },
    { "crop": "soyabean", "q": "आज इंदौर मंडी में सोयाबीन का क्या भाव है?" },
    { "crop": "gehun", "q": "इंदौर मंडी में गेहूं का आज का रेट क्या है?" },
    { "crop": "lahsun", "q": "इंदौर मंडी लहसुन भाव" },
    { "crop": "pyaz", "q": "Indore Mandi bhav pyaj" },
    { "crop": "gehun", "q": "इंदौर मंडी गेहूं का भाव" },
    { "crop": "chana", "variety": "Dollar", "q": "Indore Mandi Dollar Chana Bhav Today" },
    { "crop": "soyabean", "q": "इंदौर मंडी सोयाबीन भाव" }
  ],
  "ujjain": [
    { "crop": "lahsun", "q": "आज उज्जैन मंडी में लहसुन का क्या भाव है?" },
    { "crop": "soyabean", "q": "उज्जैन में सोयाबीन का आज का भाव क्या है?" },
    { "crop": "gehun", "q": "आज उज्जैन मंडी में गेहूं का क्या भाव बिका?" },
    { "crop": "soyabean", "q": "Ujjain mandi soyabean bhav today" },
    { "crop": "gehun", "q": "Ujjain mandi gehu bhav today" },
    { "crop": "pyaz", "q": "उज्जैन मंडी प्याज का भाव" },
    { "crop": "lahsun", "q": "उज्जैन मंडी लहसुन का भाव" },
    { "crop": "soyabean", "q": "Ujjain mandi bhav soybean" }
  ],
  "harda": [
    { "crop": "gehun", "q": "हरदा मंडी में गेहूं का आज का भाव क्या है?" },
    { "crop": "chana", "q": "हरदा मंडी में आज चना का क्या भाव है?" },
    { "crop": "chana", "q": "हरदा मंडी भाव चना Today" },
    { "crop": "moong", "q": "Harda mandi mung bhav today" },
    { "crop": "makka", "q": "हरदा मंडी भाव मक्का" },
    { "crop": "chana", "q": "72 gold chana harda mandi bhav" }
  ],
  "mandsaur": [
    { "q": "आज मंदसौर मंडी में कौन-कौन से भाव चल रहे हैं?", "a": "मंदसौर मंडी में आज उपलब्ध सभी फसलों के न्यूनतम, मॉडल और अधिकतम भाव ऊपर दी गई मंडी भाव तालिका में देखें।" },
    { "crop": "soyabean", "q": "मंदसौर मंडी में आज सोयाबीन का क्या भाव बिका?" },
    { "crop": "lahsun", "q": "मंदसौर में आज लहसुन का क्या भाव है?" },
    { "crop": "soyabean", "q": "मंदसौर मंडी भाव सोयाबीन" },
    { "crop": "gehun", "q": "मंदसौर मंडी गेहूं का भाव" },
    { "crop": "lahsun", "q": "मंदसौर मंडी भाव लहसुन" }
  ],
  "gwarphali": [
    { "q": "ग्वार फली का दूसरा नाम क्या है?", "a": "ग्वार फली को ग्वार की कोमल फली, Cluster Beans और Guar Bean भी कहा जाता है। यह ग्वार के सूखे दाने से अलग सब्जी है, इसलिए दोनों के भाव और उपयोग को एक जैसा नहीं मानना चाहिए।" },
    { "q": "ग्वार की फली खाने के क्या फायदे हैं?", "a": "ग्वार की फली एक फलीदार सब्जी है। इसे संतुलित भोजन में शामिल करने से आहारीय रेशा और कुछ विटामिन-खनिज मिलते हैं। इसे किसी बीमारी का इलाज न मानें; व्यक्तिगत आहार संबंधी सलाह के लिए योग्य स्वास्थ्य विशेषज्ञ से बात करें।" },
    { "q": "ग्वार की फली कौन से महीने में बोई जाती है?", "a": "बुआई का समय क्षेत्र, किस्म और सिंचाई पर निर्भर है। राजस्थान जैसे वर्षा-आधारित क्षेत्रों में प्रभावी मानसून के बाद जुलाई का पहला-दूसरा सप्ताह सामान्य समय माना जाता है; कुछ सिंचित या गर्म क्षेत्रों में दूसरी ऋतु भी संभव होती है। अपने जिले के कृषि विभाग या कृषि विज्ञान केंद्र की सलाह के अनुसार समय चुनें।" }
  ],
  "agra": [
    { "q": "Agra mandi live", "a": "आगरा मंडी के उपलब्ध live rates और सभी फसलों की पूरी price range ऊपर दी गई मंडी भाव तालिका में देखें।" },
    { "q": "Agra mandi today", "a": "आगरा मंडी में आज उपलब्ध सभी फसलों के भाव ऊपर दी गई मंडी भाव तालिका में देखें।" },
    { "q": "Agra Mandi bhav Today", "a": "आगरा मंडी के आज उपलब्ध न्यूनतम, मॉडल और अधिकतम भाव ऊपर दी गई मंडी भाव तालिका में देखें।" },
    { "q": "Agra anaj mandi bhav today", "a": "आगरा अनाज मंडी के आज उपलब्ध फसल भाव ऊपर दी गई मंडी भाव तालिका में देखें।" },
    { "q": "Agra Mandi Rate Today", "a": "Agra Mandi के आज उपलब्ध सभी crop rates ऊपर दी गई मंडी भाव तालिका में देखें।" }
  ],
  "kanpur": [
    { "q": "Kanpur Mandi bhav today", "a": "कानपुर Grain APMC में आज उपलब्ध सभी फसलों के न्यूनतम, मॉडल और अधिकतम भाव ऊपर दी गई मंडी भाव तालिका में देखें।" }
  ],
  "meerut": [
    { "q": "Meerut Mandi bhav today", "a": "मेरठ APMC के आज उपलब्ध सभी crop rates और पूरी भाव-range ऊपर दी गई तालिका में देखें।" }
  ],
  "aligarh": [
    { "q": "Aligarh Mandi bhav today", "a": "अलीगढ़ मंडी में आज उपलब्ध फसलों के न्यूनतम, मॉडल और अधिकतम भाव ऊपर दी गई मंडी भाव तालिका में देखें।" }
  ],
  "bareilly": [
    { "q": "Bareilly Mandi bhav today", "a": "बरेली APMC में आज उपलब्ध सभी फसल भाव ऊपर दी गई तालिका में देखें; हर पंक्ति में उपलब्ध नवीनतम record date का freshness संकेत भी दिया गया है।" }
  ],
  "lucknow": [
    { "q": "Lucknow Mandi bhav today", "a": "लखनऊ APMC के आज उपलब्ध सब्जी, अनाज और दूसरी उपज के भाव ऊपर दी गई पूरी मंडी तालिका में देखें।" }
  ],
  "mathura": [
    { "q": "Mathura Mandi bhav today", "a": "मथुरा APMC में आज उपलब्ध सभी फसलों की न्यूनतम, मॉडल और अधिकतम price range ऊपर दी गई तालिका में देखें।" }
  ],
  "hathras": [
    { "q": "Hathras Mandi bhav today", "a": "हाथरस (Haathras APMC) के आज उपलब्ध सभी crop rates ऊपर दी गई मंडी भाव तालिका में देखें।" }
  ],
  "gorakhpur": [
    { "q": "Gorakhpur Mandi bhav today", "a": "गोरखपुर APMC में आज उपलब्ध सभी फसल भाव और उनकी न्यूनतम-मॉडल-अधिकतम range ऊपर दी गई तालिका में देखें।" }
  ],
  "muzaffarnagar": [
    { "q": "Muzaffarnagar Mandi bhav today", "a": "मुजफ्फरनगर (official Muzzafarnagar APMC) में उपलब्ध सभी mapped फसल भाव ऊपर दी गई मंडी तालिका में देखें।" }
  ],
  "hapur": [
    { "q": "Hapur Mandi bhav today", "a": "हापुड़ APMC में आज उपलब्ध गेहूं, धान और दूसरी उपज समेत सभी mapped rates ऊपर दी गई तालिका में देखें।" }
  ],
  "saharanpur": [
    { "q": "Saharanpur Mandi bhav today", "a": "सहारनपुर APMC के आज उपलब्ध सभी अनाज और ताजी उपज के भाव ऊपर दी गई मंडी भाव तालिका में देखें।" }
  ],
  "mainpuri": [
    { "q": "Mainpuri Mandi bhav today", "a": "मैनपुरी APMC में आज उपलब्ध आलू, लहसुन, अनाज और दूसरी फसलों के भाव ऊपर दी गई पूरी तालिका में देखें।" }
  ],
  "ratlam": [
    { "crop": "gehun", "q": "रतलाम मंडी में गेहूं का आज का भाव क्या है?" },
    { "crop": "chana", "q": "रतलाम मंडी में आज डालर चने का भाव क्या है?" },
    { "crop": "pyaz", "q": "रतलाम में प्याज का आज का भाव क्या है?" },
    { "crop": "soyabean", "q": "रतलाम मंडी में आज सोयाबीन का क्या भाव है?" },
    { "crop": "pyaz", "q": "रतलाम मंडी प्याज का भाव" },
    { "crop": "soyabean", "q": "Ratlam mandi soyabean bhav today" },
    { "crop": "lahsun", "q": "Ratlam mandi lahsun bhav today" }
  ]
};

MB.dynamicMandiFaqs = {
  "unjha": [
    { "crop": "jeera", "q": "आज उंझा मंडी जीरा का क्या भाव है?" },
    { "crop": "isabgol", "q": "आज उंझा मंडी में इसबगोल का क्या भाव है?" },
    { "crop": "saunf", "q": "ऊंझा मंडी में आज वरियाली का क्या भाव है?" },
    { "crop": "jeera", "q": "ऊंझा मंडी में जीरा का लाइव भाव क्या है?" },
    { "crop": "isabgol", "q": "Isabgol unjha mandi bhav today" },
    { "crop": "jeera", "q": "Unjha mandi jeera bhav today" },
    { "crop": "saunf", "q": "ऊंझा मंडी वरियाली का भाव" },
    { "crop": "isabgol", "q": "ऊंझा मंडी ईसब भाव आज" },
    { "crop": "jeera", "q": "ऊंझा मंडी जीरा भाव आज का 2026" }
  ]
};

Object.assign(MB.dynamicMandiFaqs, {
  "nimbahera": [
    { "crop": "makka", "q": "निंबाहेड़ा मंडी में आज मक्के का क्या भाव है?" }, 
    { "crop": "gehun", "q": "निंबाहेड़ा मंडी में गेहूं के क्या भाव चल रहे हैं?" }, 
    { "crop": "moongphali", "q": "निंबाहेड़ा मंडी में मूंगफली का आज का भाव क्या है?" }, 
    { "crop": "chana", "q": "Nimbahera Mandi chana bhav Today" }, 
    { "crop": "makka", "q": "निम्बाहेड़ा मंडी भाव आज का मक्का" }, 
    { "crop": "soyabean", "q": "निम्बाहेड़ा मंडी भाव आज का सोयाबीन" }, 
    { "crop": "gehun", "q": "निम्बाहेड़ा मंडी भाव आज का गेहूं" }, 
    { "crop": "sarson", "q": "निम्बाहेड़ा मंडी भाव आज का सरसों" }, 
    { "crop": "lahsun", "q": "निंबाहेड़ा मंडी लहसुन भाव" }
  ],
  "patan": [
    { "crop": "gehun", "q": "आज पाटन मंडी में गेहूं का क्या रेट है?" }, 
    { "crop": "urad", "q": "पाटन मंडी में उर्द का क्या रेट है?" }, 
    { "crop": "moong", "q": "आज पाटन मंडी में मूंग का भाव क्या है?" }, 
    { "crop": "urad", "q": "पाटन मंडी भाव उड़द" }, 
    { "crop": "moong", "q": "पाटन मंडी मूंग भाव" }, 
    { "crop": "makka", "q": "Patan mandi bhav today makka" }, 
    { "crop": "moong", "q": "Patan mandi bhav Today moong" }, 
    { "crop": "gehun", "q": "पाटन मंडी गेहूं का भाव" }, 
    { "crop": "gehun", "q": "Patan mandi bhav today gehu" }, 
    { "crop": "sarson", "q": "पाटन मंडी सरसों का भाव" }
  ],
  "jodhpur": [
    { "crop": "jeera", "q": "जोधपुर मंडी जीरे का क्या भाव है आज का?" }, 
    { "crop": "gehun", "q": "जोधपुर मंडी में गेहूं का आज का भाव क्या है?" }, 
    { "crop": "sarson", "q": "जोधपुर मंडी रायड़ा का भाव" }, 
    { "crop": "jeera", "q": "जोधपुर मंडी जीरा भाव आज का" }, 
    { "crop": "chana", "q": "Jodhpur Mandi chana Bhav today" }, 
    { "crop": "sarson", "q": "जोधपुर मंडी सरसों का भाव" }, 
    { "crop": "gwar", "q": "जोधपुर मंडी आज का भाव ग्वार" }, 
    { "crop": "moth", "q": "जोधपुर मंडी आज का भाव मोठ" }
  ],
  "jaipur": [
    { "crop": "gehun", "q": "Bassi mandi gehun ka bhav" }, 
    { "crop": "bajra", "q": "Bassi mandi bajra bhav today" }, 
    { "crop": "chana", "q": "Bassi mandi chana ka bhav" }, 
    { "crop": "sarson", "q": "Bassi mandi sarso ka bhav" }
  ],
  "nagaur": [
    { "crop": "moong", "q": "नागौर में मूंग का क्या भाव है?" },
    { "crop": "gehun", "q": "नागौर मंडी में गेहूं का भाव क्या है?" },
    { "crop": "isabgol", "q": "नागौर मंडी आज का भाव इसबगोल" },
    { "crop": "sarson", "q": "नागौर मंडी आज का भाव रायड़ा" },
    { "crop": "gehun", "q": "नागौर मंडी आज का भाव गेहूं" },
    { "crop": "jeera", "q": "नागौर मंडी आज का भाव जीरा" },
    { "crop": "moong", "q": "नागौर मंडी आज का भाव मूंग" }
  ],
  "merta": [
    { "crop": "gwar", "q": "मेड़ता मंडी में आज ग्वार का क्या भाव है?" },
    { "crop": "jeera", "q": "जीरा मेड़ता मंडी में क्या भाव है?" },
    { "crop": "jeera", "q": "मेड़ता मंडी आज का भाव | जीरा" },
    { "crop": "isabgol", "q": "मेड़ता मंडी इसबगोल का भाव" },
    { "crop": "gwar", "q": "मेड़ता मंडी आज का भाव ग्वार" },
    { "crop": "sarson", "q": "मेड़ता मंडी सरसों का भाव" },
    { "crop": "sarson", "q": "मेड़ता मंडी आज का भाव रायड़ा" }
  ],
  "nokha": [
    { "crop": "moth", "q": "मोठ का भाव नोखा मंडी" }
  ],
  "lunkaransar": [
    { "crop": "moth", "q": "लूणकरणसर मंडी का आज का मोठ का भाव" }
  ],
  "baran": [
    { "crop": "dhaniya", "q": "बारा मंडी में धनिया का भाव क्या है?" },
    { "crop": "dhan", "q": "आज बारान मंडी में धान का भाव क्या है?" },
    { "crop": "gehun", "q": "Baran Mandi Bhav today gehu" },
    { "crop": "sarson", "q": "Baran Mandi sarso Bhav today" },
    { "crop": "lahsun", "q": "बारां मंडी भाव लहसुन today" },
    { "crop": "dhan", "q": "Baran Mandi Dhan Bhav Today" },
    { "crop": "soyabean", "q": "Baran Mandi soyabean Bhav today" },
    { "crop": "dhan", "q": "Baran Mandi Bhav today dhan 1718" },
    { "crop": "makka", "q": "Baran mandi makka bhav today" }
  ],
  "bikaner": [
    { "crop": "gwar", "q": "आज बीकानेर में ग्वार का क्या भाव है?" },
    { "crop": "bajra", "q": "बीकानेर मंडी में आज बाजरे का क्या भाव है?" },
    { "crop": "moth", "q": "बीकानेर में मोठ का भाव क्या है?" },
    { "crop": "moong", "q": "मूंग का भाव बीकानेर मंडी" },
    { "crop": "gwar", "q": "बीकानेर मंडी आज का भाव ग्वार" },
    { "crop": "gwar", "q": "ग्वार का भाव आज बीकानेर 2026" }
  ],
  "kekri": [
    { "crop": "gehun", "q": "आज केकड़ी मंडी में गेहूं का क्या भाव है?" },
    { "crop": "chana", "q": "आज केकड़ी में चना का भाव क्या है?" },
    { "crop": "sarson", "q": "Kekri mandi sarso bhav today" },
    { "crop": "urad", "q": "Kekri Mandi Bhav Today urad" },
    { "crop": "jeera", "q": "Kekri mandi jeera bhav today" },
    { "crop": "gehun", "q": "केकड़ी मंडी में गेहूं का भाव" },
    { "crop": "moong", "q": "Kekri mandi moong bhav today" },
    { "crop": "moong", "q": "केकड़ी मंडी मूंग का भाव" }
  ],
  "beawar": [
    { "crop": "gehun", "q": "ब्यावर मंडी में गेहूं का आज का रेट क्या है?" },
    { "crop": "gehun", "q": "ब्यावर मंडी में गेहूं का भाव" },
    { "crop": "chana", "q": "ब्यावर मंडी चना का भाव" },
    { "crop": "kapas", "q": "ब्यावर मंडी कपास का भाव" }
  ],
  "merta": [
    { "crop": "gwar", "q": "मेड़ता मंडी ग्वार का भाव" }
  ],
  "ramganj": [
    { "crop": "soyabean", "q": "आज रामगंज मंडी में सोयाबीन का क्या भाव बिकी?" },
    { "crop": "dhaniya", "q": "रामगंज मंडी धनिया का भाव" }
  ],
  "shahabad": [
    { "crop": "gehun", "q": "शाहबाद मंडी में गेहूं का आज का रेट क्या है?" }
  ],
  "panipat": [
    { "crop": "gehun", "q": "पानीपत मंडी में गेहूं का आज का रेट क्या है?" }
  ],
  "bhiwani": [
    { "crop": "kapas", "q": "आज भिवानी, हरियाणा में कपास का भाव क्या है?" },
    { "crop": "sarson", "q": "Bhiwani mandi sarso Bhav today" },
    { "crop": "chana", "q": "Bhiwani mandi chana bhav today" },
    { "crop": "gwar", "q": "Bhiwani mandi guar bhav today" },
    { "crop": "gehun", "q": "Bhiwani mandi gehun ka bhav" },
    { "crop": "bajra", "q": "Bhiwani मंडी भाव today bajra" },
    { "crop": "sarson", "q": "Bhiwani mandi sarson ka bhav" }
  ],
  "sirsa": [
    { "crop": "dhan", "q": "सिरसा मंडी में आज धान का भाव क्या है?" },
    { "crop": "gehun", "q": "सिरसा में गेहूं का क्या रेट है?" },
    { "crop": "kapas", "q": "आज सिरसा मंडी में कपास का भाव क्या है?" },
    { "crop": "sarson", "q": "Sirsa mandi bhav today sarso" },
    { "crop": "chana", "q": "Sirsa mandi chana bhav today" }
  ],
  "hisar": [
    { "crop": "gehun", "q": "हिसार मंडी में गेहूं का भाव क्या है?" },
    { "crop": "kapas", "q": "हिसार, हरियाणा में आज कपास का क्या भाव है?" },
    { "crop": "gehun", "q": "हिसार मंडी भाव टुडे गेहूं" },
    { "crop": "sarson", "q": "Hisar Mandi sarso bhav Today" },
    { "crop": "chana", "q": "Hisar mandi bhav today chana" }
  ],
  "gondal": [
    { "crop": "lahsun", "q": "गोंडल में लहसुन का भाव क्या है?" }
  ],
  "rajkot": [
    { "crop": "jeera", "q": "राजकोट मंडी में जीरा का भाव क्या है?" }
  ],
  "sri-ganganagar": MB.faqs["sri-ganganagar"].filter((item) => item.crop),
  "anupgarh": MB.faqs["anupgarh"].filter((item) => item.crop),
  "kota": MB.faqs["kota"].filter((item) => item.crop),
  "indore": MB.faqs["indore"].filter((item) => item.crop),
  "ujjain": MB.faqs["ujjain"].filter((item) => item.crop),
  "harda": MB.faqs["harda"].filter((item) => item.crop),
  "mandsaur": MB.faqs["mandsaur"].filter((item) => item.crop),
  "ratlam": MB.faqs["ratlam"].filter((item) => item.crop),
});
[
  "sri-ganganagar", "anupgarh", "kota", "indore",
  "ujjain", "harda", "mandsaur", "ratlam",
].forEach((slug) => {
  MB.faqs[slug] = MB.faqs[slug].filter((item) => item.a);
});

Object.assign(MB.dynamicMandiFaqs, {
  "guntur": [
    { "crop": "mirch", "variety": "Red", "unit": "kg", "q": "1 किलो मिर्च का क्या रेट है?" },
    { "crop": "mirch", "variety": "Red", "q": "गुंटूर में लाल मिर्च का आज का भाव क्या है?" }
  ],
  "byadgi": [
    { "crop": "mirch", "varieties": ["Kaddi", "Dabbi", "Guntur"], "q": "Byadgi mirchi price" },
    { "crop": "mirch", "variety": "Kaddi", "unit": "kg", "q": "Byadgi Chilli 1kg price" },
    { "crop": "mirch", "variety": "Dabbi", "unit": "kg", "q": "Dabbi Byadgi Chilli Price today" }
  ],
  "jodhpur": (MB.dynamicMandiFaqs["jodhpur"] || []).concat([
    { "crop": "gehun", "q": "गेहूं का भाव जोधपुर मंडी" }
  ]),
  "jaipur": (MB.dynamicMandiFaqs["jaipur"] || []).concat([
    { "crop": "gehun", "q": "गेहूं का भाव जयपुर मंडी" }
  ])
});

Object.assign(MB.dynamicMandiFaqs, {
  "kekri": (MB.dynamicMandiFaqs["kekri"] || []).concat([
    { "crop": "kalonji", "q": "Kekri mandi mein kalonji ka bhav" }
  ]),
  "beawar": (MB.dynamicMandiFaqs["beawar"] || []).concat([
    { "crop": "gehun", "q": "आज ब्यावरा मंडी में गेहूं का क्या भाव है?" },
    { "crop": "sarson", "q": "ब्यावर मंडी रायड़ा का भाव" }
  ]),
  "merta": (MB.dynamicMandiFaqs["merta"] || []).concat([
    { "crop": "asaliya", "q": "मेड़ता मंडी आज का भाव असालिया" }
  ])
});

Object.assign(MB.dynamicMandiFaqs, {
  "adampur": [
    { "crop": "sarson", "q": "Adampur Mandi sarso bhav Today" }
  ],
  "siwani": [
    { "crop": "sarson", "q": "Siwani mandi sarso bhav today" }
  ]
});

Object.assign(MB.dynamicMandiFaqs, {
  "goluwala": [
    { "crop": "kapas", "q": "Narma bhav today goluwala" }
  ],
  "neemuch": [
    { "crop": "chirayata", "cropHi": "चिरायता", "q": "नीमच मंडी में चिरायता का आज का भाव क्या है?" },
    { "crop": "chia", "cropHi": "चिया", "q": "नीमच मंडी चिया भाव आज का" }
  ]
});

Object.assign(MB.dynamicMandiFaqs, {
  "indore": (MB.dynamicMandiFaqs["indore"] || []).concat([
    { "type": "container", "q": "डालर चने का कंटेनर रेट क्या है?" },
    { "type": "container", "q": "Indore Mandi Bhav container" },
    { "crop": "gehun", "variety": "Lokwan", "q": "इंदौर मंडी लोकवन में गेहूं का आज का भाव क्या है?" },
    { "crop": "pyaz", "q": "Indore Mandi Bhav Today pyaj" },
    { "crop": "lahsun", "q": "Indore Mandi bhav today lahsun" },
    { "crop": "aalu", "q": "Indore mandi bhav today aalu" }
  ])
});

Object.assign(MB.dynamicMandiFaqs, {
  "mandsaur": (MB.dynamicMandiFaqs["mandsaur"] || []).concat([
    { "crop": "lahsun", "q": "मंदसौर में आज लहसुन का मंडी भाव क्या है?" },
    { "crop": "soyabean", "q": "Mandsaur Mandi Bhav today soyabean" },
    { "crop": "alsi", "q": "Mandsaur Mandi Bhav today alsi" },
    { "crop": "lahsun", "q": "Mandsaur Mandi Bhav today lahsun" },
    { "crop": "pyaz", "q": "Mandsaur Mandi Bhav today pyaj" },
    { "type": "previous", "q": "Mandsaur mandi bhav yesterday" },
    { "crop": "gehun", "q": "Mandsaur mandi bhav gehu" }
  ])
});

Object.assign(MB.dynamicMandiFaqs, {
  "agra": [
    { "crop": "sarson", "q": "Agra mandi bhav today sarso" },
    { "crop": "sarson", "q": "Agra mandi bhav sarso" },
    { "crop": "sarson", "q": "Agra mandi sarso rate today" },
    { "crop": "til", "q": "Agra mandi til ka bhav" },
    { "crop": "bajra", "q": "agra mandi bajra bhav today" }
  ]
});

Object.assign(MB.dynamicMandiFaqs, {
  "kanpur": [
    { "crop": "gehun", "q": "Kanpur mandi gehun ka bhav today" },
    { "crop": "dhan", "q": "Kanpur mandi dhan ka bhav today" },
    { "crop": "aalu", "q": "Kanpur mandi aalu ka bhav today" }
  ],
  "meerut": [
    { "crop": "gehun", "q": "Meerut mandi gehun ka bhav today" },
    { "crop": "sarson", "q": "Meerut mandi sarso bhav today" }
  ],
  "aligarh": [
    { "crop": "sarson", "q": "Aligarh mandi sarso bhav today" },
    { "crop": "dhan", "q": "Aligarh mandi dhan bhav today" },
    { "crop": "gehun", "q": "Aligarh mandi gehun bhav today" }
  ],
  "bareilly": [
    { "crop": "dhan", "q": "Bareilly mandi dhan bhav today" },
    { "crop": "gehun", "q": "Bareilly mandi gehun bhav today" }
  ],
  "lucknow": [
    { "crop": "aalu", "q": "Lucknow mandi aalu bhav today" },
    { "crop": "tamatar", "q": "Lucknow mandi tamatar rate today" },
    { "crop": "pyaz", "q": "Lucknow mandi pyaj bhav today" }
  ],
  "mathura": [
    { "crop": "sarson", "q": "Mathura mandi sarso bhav today" },
    { "crop": "gehun", "q": "Mathura mandi gehun bhav today" },
    { "crop": "bajra", "q": "Mathura mandi bajra bhav today" }
  ],
  "hathras": [
    { "crop": "sarson", "q": "Hathras mandi sarso bhav today" },
    { "crop": "gehun", "q": "Hathras mandi gehun bhav today" },
    { "crop": "bajra", "q": "Hathras mandi bajra bhav today" }
  ],
  "gorakhpur": [
    { "crop": "dhan", "q": "Gorakhpur mandi dhan bhav today" },
    { "crop": "gehun", "q": "Gorakhpur mandi gehun bhav today" }
  ],
  "muzaffarnagar": [
    { "crop": "gehun", "q": "Muzaffarnagar mandi gehun bhav today" },
    { "crop": "dhan", "q": "Muzaffarnagar mandi dhan bhav today" }
  ],
  "hapur": [
    { "crop": "gehun", "q": "Hapur mandi gehun bhav today" },
    { "crop": "dhan", "q": "Hapur mandi dhan bhav today" }
  ],
  "saharanpur": [
    { "crop": "dhan", "q": "Saharanpur mandi dhan bhav today" },
    { "crop": "gehun", "q": "Saharanpur mandi gehun bhav today" },
    { "crop": "aalu", "q": "Saharanpur mandi aalu bhav today" }
  ],
  "mainpuri": [
    { "crop": "aalu", "q": "Mainpuri mandi aalu bhav today" },
    { "crop": "lahsun", "q": "Mainpuri mandi lahsun bhav today" }
  ]
});

MB.dynamicCropFaqs = {
  "moong": [
    { "type": "per-kg", "q": "1 किलो मूंग का दाम क्या है?" },
    { "type": "mandi", "mandi": "jhunjhunu", "mandiHi": "झुंझुनू", "q": "झुंझुनू मंडी में मूंग का आज का भाव क्या है?" },
    { "type": "mandi", "mandi": "malpura", "mandiHi": "मालपुरा", "q": "Moong ka bhav malpura mandi" },
    { "type": "mandi", "mandi": "jaipur", "mandiHi": "जयपुर", "q": "Moong Price in Jaipur Mandi today" },
    { "type": "per-kg", "q": "1 kilo mung ka bhav" },
    { "type": "per-kg", "q": "Moong rate today per kg" }
  ],
  "gehun": [
    { "type": "per-kg", "q": "गेहूं का भाव 1 kg" },
    { "type": "msp", "q": "Gehu ka bhav msp" }
  ],
  "mirch": [
    { "type": "per-kg", "q": "1 किलो मिर्च का क्या रेट है?" },
    { "type": "per-kg", "q": "1 किलो सूखी मिर्च का भाव कैसे समझें?" }
  ],
  "gwarphali": [
    { "type": "per-kg", "q": "ग्वार फली का रेट क्या है?" }
  ],
  "pyaz": [
    { "type": "per-kg", "q": "1 किलो प्याज का रेट क्या है?" },
    { "type": "per-kg", "q": "1 किलो प्याज का आज का भाव क्या है?" }
  ],
  "lahsun": [
    { "type": "per-kg", "q": "1 किलो लहसुन का भाव क्या है?" }
  ]
};

Object.assign(MB.dynamicCropFaqs, {
  "gehun": (MB.dynamicCropFaqs["gehun"] || []).concat([
    { "type": "msp", "q": "गेहूं का रेट सरकारी" }
  ])
});

MB.dynamicStateFaqs = {
  "gujarat": [
    { "type": "mandi-crop", "mandi": "rajkot", "crop": "jeera", "q": "राजकोट मंडी में जीरा का भाव क्या है?" }
  ]
};

MB.pendingFaqs = {
  "jaora": [
    { "q": "Jaora Mandi bhav Today", "a": "जावरा मंडी का सत्यापित भाव रिकॉर्ड और public mandi page अभी इस साइट पर नहीं जुड़ा है।" }
  ],
  "khargone": [
    { "q": "Khargone Mandi bhav", "a": "खरगोन मंडी का सत्यापित भाव रिकॉर्ड अभी इस साइट पर नहीं जुड़ा है।" }
  ],
  "dhamnod": [
    { "q": "Dhamnod Mandi Bhav", "a": "धामनोद मंडी में आज कपास, सोयाबीन, गेहूं, मक्का और चना जैसी प्रमुख फसलों के हाजिर भाव क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई तालिका को देखें।" }
  ],
  "sri-ganganagar": [
    { "q": "आज श्रीगंगानगर मंडी में क्या भाव चल रहे हैं?", "a": "श्रीगंगानगर मंडी में आज ग्वार, नरमा, कपास, गेंहू, जौ, सरसों और मूंग जैसी प्रमुख फसलों के हाजिर भाव क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई मंडी भाव सारणी में उपलब्ध है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई मूल्य तालिका को देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "sarson": [
    { "q": "Sarso ka bhav", "a": "इसकी विस्तृत जानकारी ऊपर दी गई मंडी भाव सारणी में उपलब्ध है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए, हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "kapas": [
    { "q": "Narma ka bhav today", "a": "इसकी विस्तृत जानकारी ऊपर दी गई है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई तालिका को देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "rajasthan": [
    { "q": "राजस्थान की सबसे बड़ी कृषि उपज मंडी कौन सी है?", "a": "राजस्थान की सबसे बड़ी कृषि उपज मंडी मुहाना मंडी (जयपुर) और श्रीगंगानगर मंडी को उनकी विशाल आवक और व्यापार के दायरे के हिसाब से प्रमुख माना जाता है। इसके अलावा, कोटा और जोधपुर मंडियों की गिनती भी राज्य की सबसे बड़ी और व्यस्त मंडियों में होती है। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" },
    { "q": "राजस्थान की सबसे महंगी सब्जी कौन सी है?", "a": "राजस्थान की सबसे महंगी और प्रसिद्ध पारंपरिक सब्जी 'सांगरी' (खेजड़ी के पेड़ की फली) है। यह सूखे मेवों (जैसे बादाम और काजू) से भी ज्यादा कीमत पर बिकती है। अपने बेहतरीन औषधीय गुणों, पोषक तत्वों और पारंपरिक स्वाद के कारण इसकी मांग बाजार में हमेशा उच्च बनी रहती है, जो मौसम और आवक के आधार पर तय होती है।" },
    { "q": "पूरे भारत में सबसे बड़ी मंडी कौन सी है?", "a": "भारत और पूरे एशिया में फलों और सब्जियों की सबसे बड़ी थोक मंडी दिल्ली की आज़ादपुर मंडी (Azadpur Mandi) है। इसके अलावा, अनाज, मसाले और अन्य कृषि उत्पादों के लिहाज से नवी मुंबई की वाशी एपीएमसी मंडी (APMC Market, Vashi) और मध्य प्रदेश की नीमच मंडी को देश की सबसे बड़ी कृषि उपज मंडियों में गिना जाता है। विभिन्न जिंसों के दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं।" },
    { "q": "राजस्थान में सबसे बड़ी मंडी कौन सी है?", "a": "राजस्थान में कृषि उपज के व्यापार और बड़े पैमाने पर आवक के मामले में श्रीगंगानगर मंडी और जयपुर की मुहाना मंडी को सबसे बड़ी मंडियों में गिना जाता है। इसके अलावा, कोटा, जोधपुर और बीकानेर की कृषि उपज मंडियां भी राज्य के प्रमुख और बड़े व्यापारिक केंद्रों में शामिल हैं जहाँ भारी मात्रा में फसलों की खरीद-फरोख्त होती है। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "anupgarh": [
    { "q": "अनूपगढ़ मंडी में आज क्या भाव चल रहे हैं?", "a": "अनूपगढ़ मंडी में आज ग्वार, नरमा, कपास, गेंहू, जौ, सरसों और मूंग जैसी प्रमुख फसलों के हाजिर भाव क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई तालिका को देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "kota": [
    { "q": "भामाशाह मंडी क्या है?", "a": "राजस्थान के कोटा में स्थित भामाशाह मंडी (भामाशाह कृषि उपज मंडी) राज्य की सबसे बड़ी और प्रमुख अनाज मंडियों में से एक है। यहाँ गेंहू, धनिया, सोयाबीन, चना, सरसों और अन्य कृषि जिंसों का बड़े पैमाने पर व्यापार होता है। यह किसानों और व्यापारियों के लिए एक मुख्य केंद्र है जहाँ फसलों की नीलामी और खरीद-फरोख्त की जाती है। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "haryana": [
    { "q": "आज हरियाणा मंडी का भाव क्या है?", "a": "हरियाणा की विभिन्न अनाज मंडियों में आज गेहूं, सरसों, नरमा, कपास, ग्वार और जौ जैसी प्रमुख फसलों के हाजिर भाव क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई तालिका को देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "mehsana": [
    { "q": "Mehsana ganj bazar bhav today", "a": "The live market prices for key agricultural commodities like castor seed, wheat, mustard, and cumin in Mehsana Ganj Bazar are detailed in the price table provided above. These commodity rates fluctuate based on daily arrivals, quality, and market demand. Please refer to the table above for precise and up-to-date figures. Join our WhatsApp group to stay connected for daily updates." },
    { "q": "Mehsana APMC Market Price", "a": "Live market prices for agricultural commodities at Mehsana APMC are detailed in the price table provided above. These rates fluctuate based on daily market arrivals, product quality, and prevailing demand. Please check the table above for precise, up-to-date figures. Join our WhatsApp group to stay connected for daily updates." },
    { "q": "Mehsana APMC Market Price today", "a": "Current market prices for agricultural commodities at Mehsana APMC (such as wheat, mustard, castor seed, and bajra) are detailed in the price table provided above. These rates fluctuate based on daily arrivals, product quality, and market demand. Please check the table above for precise, up-to-date figures. Join our WhatsApp group to stay connected for daily updates." },
    { "q": "Mehsana apmc Market Price today in Gujarat", "a": "उत्तर लिखें" }
  ],
  "indore": [
    { "q": "Indore Mandi Bhav", "a": "इंदौर मंडी में आज सोयाबीन, गेहूं, चना, मक्का, मसूर, प्याज और लहसुन जैसी प्रमुख फसलों के हाजिर भाव क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई तालिका को देखें।" },
    { "q": "इंदौर मंडी कंटेनर भाव", "a": "इंदौर मंडी में काबुली चना और अन्य प्रमुख जिंसों के कंटेनर भाव (जैसे क्वालिटी और काउंट के अनुसार) क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई तालिका को देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "ujjain": [
    { "q": "आज उज्जैन मंडी में क्या भाव चल रहे हैं?", "a": "उज्जैन मंडी में आज सोयाबीन, गेहूं, लहसुन, प्याज और चना जैसी प्रमुख फसलों के हाजिर भाव क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई तालिका को देखें।" },
    { "q": "उज्जैन मंडी भाव", "a": "उज्जैन कृषि उपज मंडी (विक्रमी नगर) में इस समय सोयाबीन, लोकवन और मालवी गेहूं के साथ-साथ लहसुन और प्याज की बंपर आवक देखने को मिल रही है। व्यापारियों की मांग और फसल की क्वालिटी (नमी व सफाई) के आधार पर इनके दाम तय हो रहे हैं। उपलब्ध नवीनतम रेट्स के लिए ऊपर दी गई ऊपर दी गई मूल्य तालिका चेक करें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" },
  ],
  "harda": [
    { "q": "आज हरदा मंडी में क्या भाव चल रहे हैं?", "a": "हरदा कृषि उपज मंडी में आज गेहूं, सोयाबीन, मक्का, चना और सरसों जैसी प्रमुख फसलों की आवक बनी हुई है। बाजार में अनाज की गुणवत्ता, नमी की मात्रा और दैनिक खरीद-फरोख्त के हिसाब से इनके भाव तय हो रहे हैं। सटीक और ताज़ा उपलब्ध भाव के लिए ऊपर दी गई प्राइस टेबल देखें।" },
    { "q": "Harda mandi bhav aaj ka", "a": "आज हरदा कृषि उपज मंडी में गेहूं, सोयाबीन, मक्का और चना जैसी प्रमुख फसलों का कारोबार हो रहा है। फसलों में नमी की मात्रा, सफाई और स्थानीय व्यापारियों की मांग के हिसाब से इनके दाम तय हो रहे हैं। सटीक और ताज़ा उपलब्ध भाव के लिए ऊपर दी गई प्राइस टेबल देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" },
  ],
  "madhya-pradesh": [
    { "q": "मध्य प्रदेश में आज मंडी का क्या भाव है?", "a": "मध्य प्रदेश की प्रमुख कृषि उपज मंडियों (जैसे इंदौर, उज्जैन, नीमच और भोपाल) में आज गेहूं, सोयाबीन, चना, मक्का और लहसुन जैसी फसलों के कारोबार में स्थानीय आवक और गुणवत्ता के हिसाब से अलग-अलग दाम मिल रहे हैं। फसल विशेष के उपलब्ध हाजिर रेट्स के लिए कृपया ऊपर दी गई मूल्य तालिका देखें।" }
  ],
  "moong": [
    { "q": "मूंग का क्या भाव चल रहा है?", "a": "नई और पुरानी मूंग की आवक के आधार पर मंडियों में इसका कारोबार चल रहा है। बढ़िया क्वालिटी (दानेदार और साफ माल) की मूंग के दाम बाजार में मजबूत बने हुए हैं, जबकि हल्की नमी वाले माल के भाव में थोड़ा अंतर देखने को मिलता है। अपनी नजदीकी मंडी के सटीक उपलब्ध भाव जानने के लिए ऊपर दी गई लिस्ट चेक करें।" }
  ],
  "mandsaur": [
    { "q": "मंदसौर मंडी भाव", "a": "मंदसौर कृषि उपज मंडी में आज सोयाबीन, लहसुन, मेथी और धनिया जैसी प्रमुख फसलों की भारी आवक बनी हुई है। उच्च गुणवत्ता वाले माल और स्थानीय बोली के आधार पर इनके दाम तय हो रहे हैं, जहाँ विशेषकर लहसुन और मसालों के कारोबार में तेजी देखने को मिल रही है। सटीक और उपलब्ध भाव के लिए ऊपर दी गई प्राइस लिस्ट देखें।" },
    { "q": "मंदसौर मंडी कब खुलेगी", "a": "मंदसौर कृषि उपज मंडी आमतौर पर सुबह के समय (करीब 8:30 या 9:00 बजे) नीलाम प्रक्रिया के साथ शुरू होती है। हालांकि, रविवार को, त्योहारों के दिनों या सरकारी अवकाश के अवसर पर मंडी बंद रहती है। सटीक समय और अवकाश की पुष्टि के लिए मंडी समिति की आधिकारिक सूचना या स्थानीय बाजार का शेड्यूल देखना सबसे सही रहता है। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" },
    { "q": "Mandsaur Mandi Bhav", "a": "Trading at the Mandsaur Agricultural Produce Market is currently active for key commodities such as soybean, garlic, coriander, and fenugreek. Prices are driven by local auction bids, daily arrivals, and the moisture or cleaning grade of the produce. Please refer to the live price table above for exact, up-to-date figures." }
  ],
  "neemuch": [
    { "q": "Neemuch Mandi bhav Today", "a": "Today at the Neemuch Agricultural Produce Market, key commodities like soybean, wheat, maize, and lentils are actively traded, alongside strong demand for specialty crops and spices such as garlic, coriander seeds, and isabgol. Prices are fluctuating based on daily arrivals, moisture levels, and local auction bids. Please check the live price table above for precise, up-to-date figures." },
    { "q": "नीमच मंडी का आज का भाव क्या है?", "a": "नीमच कृषि उपज मंडी में आज सोयाबीन, गेहूं और मक्का के साथ-साथ लहसुन, कलौंजी, इसबगोल और धनिया जैसी प्रमुख मसालों व औषधीय फसलों की अच्छी आवक बनी हुई है। बढ़िया क्वालिटी की लहसुन और चुनिंदा फसलों के दाम ऊंचे स्तर पर चल रहे हैं, जबकि अन्य जिंसों के रेट क्वालिटी और बोली के अनुसार तय हो रहे हैं। फसलों के उपलब्ध हाजिर रेट्स के लिए ऊपर दी गई मूल्य तालिका देखें।" },
    { "q": "नीमच मंडी में सबसे महंगा क्या बिकता है?", "a": "एशिया की प्रमुख कृषि और औषधि मंडियों में शुमार नीमच मंडी में सबसे महंगे बिकने वाले उत्पादों में अफीम का दाना (पोस्ट दाना) और चुनिंदा औषधीय जड़ी-बूटियाँ (जैसे सफेद मूसली और अकरकरा) शामिल हैं। अच्छी क्वालिटी का पोस्ट दाना और कुछ खास मसाले व जड़ी-बूटियाँ बाजार में सबसे ऊंचे दामों (कई बार प्रति क्विंटल हजारों से लाखों रुपए तक) पर बिकती हैं, क्योंकि यहाँ मसालों के साथ दुर्लभ औषधियों का भी बड़ा कारोबार होता है।" },
    { "q": "नीमच मंडी में कौन-कौन सी फसल बिकती है?", "a": "एशिया की सबसे बड़ी कृषि और औषधीय उपज मंडियों में से एक नीमच मंडी में मुख्य रूप से अनाज, तिलहन, मसाले और दुर्लभ जड़ी-बूटियों का बड़ा कारोबार होता है। यहाँ बिकने वाली प्रमुख फसलों में शामिल हैं:  अनाज और दलहन: गेहूं, मक्का, जौ, ज्वार, चना, मूंग, उड़द और मसूर।तिलहन फसलें: सोयाबीन, सरसों, मूंगफली, अलसी और तिल।  प्रमुख मसाले: धनिया, मेथी, अजवायन, कलौंजी, जीरा और लहसुन-प्याज।  औषधियाँ और विशेष फसलें: अफीम (सरकारी लाइसेंस के तहत), पोस्ट दाना (खसखस), ईसबगोल, अश्वगंधा, सफेद मूसली, चिया सीड्स, कालमेघ और विभिन्न जड़ी-बूटियाँ।" },
    { "q": "नीमच मंडी औषधि लिस्ट", "a": "एशिया की सबसे बड़ी औषधीय मंडियों में शुमार नीमच मंडी में कई तरह की जड़ी-बूटियाँ, आयुर्वेदिक जड़ें और पौधे बिकने आते हैं। यहाँ की प्रमुख औषधीय फसलों और जड़ी-बूटियों की सूची में ये नाम शामिल हैं:  प्रमुख जड़ें और कंद: अश्वगंधा, सफेद मूसली, शतावरी, अकरकरा और चित्रक जड़।औषधीय पौधे व पंचांग: गिलोय (डंडी व स्टेम), कालमेघ, चिरायता, ब्राह्मी और ममीजवा।  फल, बीज और छिलके: ईसबगोल, कौंच बीज, मुसकदाना, बहेड़ा, हरड़, आंवला (सूखा व उबला हुआ), अमालतास, और नींबू/संतरे के सूखे छिलके।पत्तियाँ व फूल: मोरिंगा (सहजन) की सूखी पत्तियाँ, नीम पत्ती, मेहंदी पत्ता, सूखी कश्मीरी व देसी गुलाब की पंखुड़ियाँ।" },
    { "q": "नीमच मंडी भाव", "a": "नीमच कृषि उपज मंडी में आज सोयाबीन, गेहूं और मक्का जैसी सामान्य फसलों के साथ-साथ लहसुन, धनिया, कलौंजी और ईसबगोल जैसे मसालों व औषधीय उत्पादों का अच्छा कारोबार चल रहा है। उच्च गुणवत्ता वाले माल और स्थानीय बोली के आधार पर इनके दाम तय हो रहे हैं, जहाँ विशेषकर औषधियों और मसालों की मांग मजबूत बनी हुई है। सटीक और उपलब्ध भाव के लिए ऊपर दी गई प्राइस लिस्ट देखें।" },
    { "q": "नीमच मंडी औषधि भाव", "a": "नीमच कृषि उपज मंडी में बिकने वाली औषधीय फसलों और जड़ी-बूटियों के सटीक उपलब्ध भाव आपके इस पेज पर ऊपर दिए गए हैं। आप उन्हीं रेट्स को देखकर ताजा बाजार की स्थिति जान सकते हैं।" },
    { "q": "नीमच मंडी कब खुलेगी", "a": "नीमच कृषि उपज मंडी में नीलामी का कार्य आमतौर पर सुबह के समय (लगभग 9:00 से 10:00 बजे के बीच) शुरू होता है। ध्यान रहे कि रविवार, प्रमुख त्योहारों और सरकारी अवकाश के दिनों में मंडी बंद रहती है। सटीक समय और अवकाश की पुष्टि के लिए आप मंडी समिति की आधिकारिक सूचना देख सकते हैं।" },
  ],
  "ratlam": [
    { "q": "रतलाम मंडी आज का भाव", "a": "रतलाम कृषि उपज मंडी में आज लहसुन, सोयाबीन, प्याज, गेहूं और काबुली चने का कारोबार मुख्य रूप से देखने को मिल रहा है। बढ़िया क्वालिटी की लहसुन और सोयाबीन के दाम ऊंचे स्तर पर बने हुए हैं, जबकि स्थानीय बोली और माल की गुणवत्ता के आधार पर हर जिंस के दाम अलग-अलग तय हो रहे हैं। फसलों के उपलब्ध हाजिर रेट्स के लिए ऊपर दी गई मूल्य तालिका देखें।" },
    { "q": "रतलाम मंडी कब खुलेगी", "a": "रतलाम कृषि उपज मंडी में नीलामी का कार्य आमतौर पर सुबह 8:00 से 9:00 बजे के बीच शुरू हो जाता है। ध्यान रखें कि रविवार, प्रमुख त्योहारों और सरकारी अवकाश के दिन मंडी में काम बंद रहता है। मंडी खुलने के सटीक समय और अवकाश की जानकारी के लिए मंडी समिति द्वारा जारी की गई आधिकारिक समय-सारणी देखना सबसे उचित रहता है।" },
  ]
};

