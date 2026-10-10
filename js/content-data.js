window.MB = window.MB || {};

MB.BRAND_HI = "फसल भाव";
MB.BRAND_EN = "FasalBhav";
MB.GA_MEASUREMENT_ID = "G-WFENY16HN7";
MB.WA_GROUP = "https://chat.whatsapp.com/J6Q5UqZ86Q66sy0nRN3bt0";
MB.WA_JOIN_SHORT = "मुफ्त मंडी भाव";
MB.WA_JOIN = "मुफ्त मंडी भाव — WhatsApp ग्रुप जॉइन करें";

// IBJA PM physical-market reference rates. Gold values are ₹/10 g and silver is ₹/kg.
// Keep this separate from mandi prices; GST and jewellery making charges are not included.
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
  { slug: "methi", hi: "मेथी दाना", en: "Fenugreek Seed", veg: false, msp: null },
  { slug: "hari-methi", hi: "पान मेथी", en: "Fenugreek Leaves", veg: false, msp: null },
  { slug: "arandi", hi: "अरंडी", en: "Castor Seed", veg: false, msp: null },
  { slug: "matar", hi: "मटर", en: "Field Pea", veg: false, msp: null },
  { slug: "hara-matar", hi: "हरी मटर", en: "Green Peas", veg: true, msp: null },
  { slug: "gwarphali", hi: "ग्वार फली", en: "Cluster Beans", veg: true, msp: null },
  { slug: "alsi", hi: "अलसी", en: "Linseed", veg: false, msp: null },
  { slug: "asaliya", hi: "असालिया", en: "Garden Cress", veg: false, msp: null },
  { slug: "kalonji", hi: "कलौंजी", en: "Nigella Seeds", veg: false, msp: null },
  { slug: "ker", hi: "केर", en: "Ker Berries", veg: false, msp: null, cityRate: true },
  { slug: "sangri", hi: "सांगरी", en: "Desert Bean Pods", veg: false, msp: null, cityRate: true },
  { slug: "sua-patti", hi: "सुआ पत्ती", en: "Dill Leaves", veg: true, msp: null, cityRate: true },
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
      "title": "सरसों का भाव आज: मंडी रेट, तेल प्रतिशत और भाव तय करने वाले प्रमुख कारक",
      "paragraphs": [
        "राम राम किसान भाइयों! भारतीय कृषि और तिलहन बाजार में सरसों (Mustard) सबसे प्रमुख और नकदी फसल मानी जाती है। राजस्थान, हरियाणा, मध्य प्रदेश, उत्तर प्रदेश और पंजाब के किसानों के लिए सरसों केवल एक फसल नहीं, बल्कि पूरे साल की आर्थिक रीढ़ है।",
        "घरेलू खाद्य तेलों में सरसों के तेल और पशु आहार के लिए खल (Mustard Cake) की निरंतर मांग बनी रहने के कारण मंडियों में सरसों की खरीद-फरोख्त हमेशा सबसे सक्रिय रहती है। जयपुर, भरतपुर, अलवर, कोटा, दिल्ली और चरखी दादरी जैसे प्रमुख व्यापारिक केंद्रों में होने वाले सौदे सीधे तौर पर सरसों के मंडी भाव की दिशा तय करते हैं। सरसों के रेट केवल स्थानीय आवक पर निर्भर नहीं करते, बल्कि कई घरेलू और अंतरराष्ट्रीय पहलू मिलकर इसके दैनिक भाव को प्रभावित करते हैं।"
      ],
      "sections": [
        {
          "title": "सरसों के भाव में तेल प्रतिशत (Oil Content) का असर",
          "paragraphs": ["सरसों की खरीद में सबसे बड़ा पैमाना उसमें मौजूद तेल की मात्रा होती है।"],
          "items": [
            "भारतीय मंडियों में आमतौर पर 42% कंडीशन (मानक तेल प्रतिशत) को आधार मानकर सरसों का भाव तय किया जाता है।",
            "यदि सरसों में तेल की मात्रा 42% से अधिक निकलती है, तो किसान भाइयों को तय भाव से अतिरिक्त प्रीमियम मिलता है।",
            "कम तेल प्रतिशत या अपरिपक्व दाने होने पर भाव में कटौती की जाती है।"
          ]
        },
        {
          "title": "नमी, कचरा और दाने की गुणवत्ता",
          "paragraphs": ["सरसों की क्वालिटी मंडी में उसके रेट को सीधे प्रभावित करती है।"],
          "items": [
            "कटाई के तुरंत बाद नई सरसों में नमी की मात्रा अधिक होती है।",
            "8% से कम नमी वाले सूखे, साफ और मोटे दाने की सरसों को तेल मिलें और व्यापारी सबसे ऊंची बोली पर खरीदते हैं।",
            "मिट्टी, कंकड़ या तिनके मिला माल होने पर तेल निष्कर्षण की लागत बढ़ती है, जिससे मंडी में उसकी कीमत कम आंकी जाती है।"
          ]
        },
        {
          "title": "अंतरराष्ट्रीय बाजार और खाद्य तेल आयात नीति",
          "paragraphs": ["भारत में खाद्य तेलों का बड़ा हिस्सा बाहर से आयात होता है, जिसमें पाम ऑयल (Palm Oil) और सोयाबीन तेल प्रमुख हैं।"],
          "items": [
            "विदेशी बाजारों (KLCE मलेशिया और CBOT अमेरिका) में पाम और सोया तेल की कीमतों में उतार-चढ़ाव का असर घरेलू मंडियों में सरसों के भाव पर पड़ता है।",
            "केंद्र सरकार द्वारा लगाई जाने वाली आयात शुल्क (Import Duty) भी सरसों के भाव को सीधे प्रभावित करती है।",
            "जब आयात शुल्क बढ़ता है, तो सरसों के स्थानीय भाव में मजबूती आती है।"
          ]
        },
        {
          "title": "तेल मिलों और प्लांटों की दैनिक मांग",
          "paragraphs": ["बड़ी सॉल्वेंट एक्सट्रैक्शन मिलों और क्रशर प्लांटों (सलोनी, अदानी, बीपी ऑयल आदि) द्वारा हर दिन खरीद भाव (Delivery Price) जारी किए जाते हैं।"],
          "items": [
            "त्योहारी सीजन, शादियों के दौर या सर्दियों के समय सरसों तेल और कच्ची घानी तेल की खपत बढ़ती है।",
            "ऐसे समय मिलों की सक्रिय मांग से मंडियों में सरसों के भाव में तेजी देखने को मिलती है।"
          ]
        },
        {
          "title": "सरसों का MSP (समर्थन मूल्य) और सरकारी खरीद",
          "paragraphs": ["केंद्र सरकार द्वारा घोषित न्यूनतम समर्थन मूल्य (MSP) किसानों के लिए एक सुरक्षा कवच का काम करता है।"],
          "items": [
            "नैफेड (NAFED) और राज्य सहकारी संस्थाओं द्वारा खरीद केंद्र खोले जाने पर खुले बाजार के व्यापारियों पर भी भाव सुधारने का दबाव बनता है।",
            "इससे किसानों को प्रतिस्पर्धी दाम मिलते हैं।"
          ]
        },
        {
          "title": "सरसों का सर्वोत्तम भाव पाने के लिए जरूरी सुझाव",
          "items": [
            "उचित सुखाने के बाद ही बिक्री: मंडी में माल ले जाने से पहले सरसों को धूप में अच्छी तरह सुखाएं। 8 प्रतिशत से कम नमी रहने पर व्यापारी बिना किसी हिचकिचाहट के अधिकतम बोली लगाते हैं।",
            "साफ-सफाई और छंटाई (Grading): छलने या पंखे की मदद से कचरा और हल्के दाने अलग कर लें। एक समान और साफ दाना हमेशा सामान्य माल से ₹50 से ₹150 प्रति क्विंटल अधिक दाम दिलाता है।",
            "सीजनल दबाव से बचें: रबी कटाई के समय (मार्च और अप्रैल) मंडियों में भारी आवक होने के कारण भाव अक्सर दबाव में आ जाते हैं। जिन किसान भाइयों के पास सुरक्षित भंडारण की सुविधा है, वे धीरे-धीरे टुकड़ों में माल बेचकर ऑफ-सीजन की तेजी का लाभ उठा सकते हैं।",
            "प्लांट और हाजिर भाव पर नजर: स्थानीय मंडी में माल बेचने से पहले प्रमुख बड़े व्यापारिक केंद्रों और मिल डिलीवरी भाव के रुख को समझें, ताकि अपनी उपज का मोलभाव करते समय सही फैसला ले सकें।"
          ],
          "ordered": true
        },
        {
          "title": "सरसों के दैनिक भाव में बदलाव",
          "paragraphs": ["सरसों के दैनिक भाव में मांग, आपूर्ति और वैश्विक तिलहन रुझानों के अनुसार निरंतर बदलाव होते रहते हैं। मंडियों की स्थिति और बाजार के रुख को समझकर अपनी उपज का सौदा करना ही किसान भाइयों को उनकी कड़ी मेहनत का सही और पूरा मूल्य दिलाता है।"]
        }
      ]
    },
    "chana": {
      "title": "चने के मंडी भाव को प्रभावित करने वाले मुख्य कारक और अधिकतम भाव पाने के सुझाव",
      "paragraphs": [
        "राम राम किसान भाइयों! भारतीय कृषि और दलहन बाजार में चना (Gram / Chickpea) दलहनी फसलों का राजा माना जाता है। राजस्थान, मध्य प्रदेश, महाराष्ट्र, गुजरात और उत्तर प्रदेश जैसे प्रमुख राज्यों के किसानों के लिए चना सबसे मुख्य और भरोसेमंद रबी नकदी फसल है। दालों की दैनिक घरेलू खपत, बेसन उद्योग और अंतरराष्ट्रीय बाजारों में भारतीय चने की निरंतर मांग बनी रहने के कारण देशभर की कृषि उपज मंडियों में चने का व्यापार हमेशा तेज और सक्रिय रहता है।"
      ],
      "sections": [
        {
          "title": "आज का चना मंडी भाव कैसे देखें",
          "paragraphs": ["इस पेज पर मंडी-वार चने का भाव प्रति क्विंटल (100 किलो) में दिया जाता है। अपनी नज़दीकी मंडी के साथ-साथ दूसरी मंडियों के चने के रेट की तुलना करके बेचने का फैसला लेना ज्यादा फायदेमंद रहता है।"],
          "items": [
            "अपना राज्य और नज़दीकी मंडी चुनकर आज का चना भाव देखें।",
            "न्यूनतम भाव, मॉडल भाव और अधिकतम भाव, तीनों का अंतर समझें।",
            "देशी चना और काबुली चने का भाव अलग-अलग देखें, क्योंकि दोनों के रेट में काफी अंतर रहता है।",
            "एक ही दिन अलग-अलग मंडियों में चने का रेट अलग हो सकता है, इसलिए कम से कम 2 से 3 मंडियों के भाव मिलाएं।",
            "पिछले दिनों के उपलब्ध भावों से देखें कि चने के रेट में तेजी का रुख है या मंदी का।"
          ]
        },
        {
          "title": "चने के मंडी भाव को प्रभावित करने वाले मुख्य कारक",
          "paragraphs": ["मंडियों में चने के दैनिक भाव केवल स्थानीय आवक पर निर्भर नहीं करते, बल्कि कई प्रमुख व्यापारिक और गुणवत्ता संबंधी कारकों से तय होते हैं:"]
        },
        {
          "title": "किस्म और ग्रेड (देशी चना बनाम काबुली/डॉलर चना)",
          "items": [
            "देशी चना (Desi Chana): इसका उपयोग मुख्य रूप से दाल मिलों में चना दाल और बेसन तैयार करने के लिए होता है। इसकी मांग पूरे साल स्थिर बनी रहती है।",
            "काबुली / डॉलर चना (Kabuli / Dollar Gram): बड़े और सफेद दाने वाले काबुली या डॉलर चने की मांग बड़े शहरों, होटल-कैटरिंग इंडस्ट्री और विदेशों में निर्यात के लिए बहुत ज्यादा होती है। यही वजह है कि काबुली चने के मंडी भाव देशी चने की तुलना में काफी ऊंचे रहते हैं।"
          ]
        },
        {
          "title": "नमी, चमक और दानों का आकार",
          "items": [
            "खरीददार और दाल मिल मालिक बोली लगाते समय माल की चमक, दाने की मोटाई और उसमें नमी का स्तर सबसे पहले परखते हैं।",
            "अच्छी तरह सुखाए गए, बिना घुन और बिना कटे-फटे दानों वाले चने को व्यापारी हमेशा अधिकतम और प्रीमियम भाव पर खरीदते हैं। वहीं अधिक गीले या मिट्टी मिले माल पर भाव कटकर मिलता है।"
          ]
        },
        {
          "title": "दाल मिलों की मांग और स्टॉक सीमा (Stock Limits)",
          "items": [
            "देश की प्रमुख दाल मिलों (इंदौर, बीकानेर, कटनी, जलगांव, दिल्ली) की दैनिक लेवाली जितनी मजबूत होती है, हाजिर मंडियों में चने के दाम में उतनी ही तेजी आती है।",
            "इसके अलावा केंद्र सरकार द्वारा दलहन की उपलब्धता और महंगाई को नियंत्रित करने के लिए उठाए जाने वाले कदम (जैसे स्टॉक लिमिट या आयात नीतियां) भी बाजार के रुख को सीधे प्रभावित करते हैं।"
          ]
        },
        {
          "title": "सरकारी समर्थन मूल्य (MSP) और नैफेड खरीद",
          "items": [
            "केंद्र सरकार द्वारा घोषित न्यूनतम समर्थन मूल्य (MSP) चने के बाजार भाव को एक मजबूत आधार प्रदान करता है।",
            "जब सरकारी खरीद एजेंसियां (NAFED आदि) खरीद केंद्र शुरू करती हैं, तो खुले बाजार के व्यापारियों पर भी भाव सुधारने का दबाव बनता है, जिससे किसानों को प्रतिस्पर्धी दाम मिलते हैं।"
          ]
        },
        {
          "title": "आवक का दबाव और मौसमी चक्र",
          "items": [
            "मार्च से मई के दौरान जब रबी की नई फसल मंडियों में एक साथ उतरती है, तो भारी आवक के कारण कीमतों पर दबाव देखने को मिलता है। त्योहारों और शादियों के सीजन में मांग बढ़ने पर भाव में दोबारा सुधार दर्ज होता है।"
          ]
        },
        {
          "title": "चने का अधिकतम भाव पाने के लिए किसान भाइयों को सुझाव",
          "items": [
            "सफाई और ग्रेडिंग: थ्रेशर से निकालने के बाद चने को अच्छी तरह छानकर मिट्टी, कंकड़ और कचरा अलग कर लें। साफ-सुथरा चना सामान्य माल से ₹50 से ₹100 प्रति क्विंटल तक अधिक भाव दिलाता है।",
            "नमी पर नियंत्रण: मंडी में ले जाने से पहले चने को धूप में ठीक से सुखा लें। कम नमी रहने पर व्यापारी बिना किसी हिचकिचाहट के ऊंची बोली लगाते हैं और तौल में भी कटौती का जोखिम नहीं रहता।",
            "विभिन्न मंडियों के मॉडल भाव की तुलना: अपनी नजदीकी मंडी के साथ-साथ आसपास की प्रमुख कृषि उपज मंडियों के मॉडल भाव और दैनिक रुझान पर नजर रखकर ही अपनी उपज की बिक्री का निर्णय लें।"
          ],
          "ordered": true
        },
        {
          "title": "चने का मॉडल भाव क्या होता है",
          "paragraphs": ["मंडी भाव की तालिका में न्यूनतम और अधिकतम भाव के बीच एक मॉडल भाव भी दिया जाता है। मॉडल भाव उस भाव को कहते हैं जिस पर उस दिन मंडी में सबसे ज्यादा सौदे हुए। इसलिए सामान्य क्वालिटी का चना बेचने वाले किसान भाइयों के लिए मॉडल भाव, सबसे ऊंचे अधिकतम भाव के मुकाबले, अपने माल के रेट का बेहतर अंदाजा देता है। अधिकतम भाव आमतौर पर सबसे बढ़िया क्वालिटी के छोटे lot को मिलता है।"]
        },
        {
          "title": "देशी चना और काबुली चना भाव में अंतर",
          "items": [
            "देशी चना और काबुली चना अलग-अलग किस्में हैं, इसलिए दोनों का मंडी भाव अलग-अलग बोला जाता है। भाव देखते समय किस्म जरूर मिलाएं।",
            "काबुली चने में दाने के आकार (साइज) के हिसाब से भी भाव अलग हो सकता है, इसलिए बेचने से पहले अपने माल का दाना किस श्रेणी में आता है, यह व्यापारी से पूछ लें।",
            "देशी चने में रंग, चमक और साफ-सफाई के आधार पर भाव ऊपर-नीचे होता है।"
          ]
        },
        {
          "title": "चने का MSP और मंडी भाव में अंतर",
          "items": [
            "MSP सरकार द्वारा तय किया गया न्यूनतम समर्थन मूल्य है, जबकि मंडी भाव रोज़ मांग और आपूर्ति के हिसाब से बदलने वाला खुले बाजार का रेट है।",
            "चने का MSP हर साल रबी सीजन के लिए नए सिरे से घोषित होता है, इसलिए ताजा MSP सरकारी स्रोत या अपने जिले के कृषि कार्यालय से जरूर जाँचें।",
            "सरकारी खरीद केंद्र पर बेचने के लिए आमतौर पर पंजीकरण, तय गुणवत्ता की शर्तें और खरीद की तय सीमा लागू होती है। इनकी जानकारी खरीद शुरू होने से पहले देख लें।",
            "जब मंडी में चने का भाव MSP से नीचे चला जाए, तब सरकारी खरीद का विकल्प किसान भाइयों के लिए खास तौर पर काम आता है।"
          ]
        },
        {
          "title": "चना बेचने से पहले चेकलिस्ट",
          "items": [
            "बेचने से पहले आज के चने के भाव की कम से कम दो-तीन नज़दीकी मंडियों से तुलना करें।",
            "माल की नमी, घुन और सफाई की जाँच खुद कर लें, ताकि बोली के समय भाव में अनावश्यक कटौती न हो।",
            "अपना चना देशी है या काबुली और दाने का आकार क्या है, यह बोली से पहले साफ कर लें।",
            "तौल की पर्ची और बिक्री की रसीद जरूर लें और उसमें वजन, भाव व तारीख मिलाकर देखें।",
            "भुगतान कब और किस तरीके से होगा, यह पहले ही साफ कर लें।",
            "ढुलाई, तुलाई, हम्माली और मंडी शुल्क जैसे खर्च जोड़कर ही शुद्ध भाव का हिसाब लगाएं।"
          ],
          "ordered": true
        },
        {
          "title": "चने के भाव से जुड़े आम सवाल (FAQ)",
          "paragraphs": [
            "सवाल: चने का भाव रोज़ क्यों बदलता है? जवाब: चने का भाव मंडी की आवक, माल की गुणवत्ता, दाल मिलों की लेवाली, सरकार की स्टॉक लिमिट और आयात नीति तथा त्योहार-शादी के सीजन की मांग के अनुसार रोज़ बदलता है।",
            "सवाल: देशी चना और काबुली चने के भाव में फर्क क्यों होता है? जवाब: देशी चना मुख्य रूप से चना दाल और बेसन के लिए इस्तेमाल होता है, जबकि बड़े और सफेद दाने वाले काबुली चने की मांग बड़े शहरों, होटल-कैटरिंग और निर्यात में ज्यादा है। इसी वजह से काबुली चने के भाव देशी चने से ऊंचे रहते हैं।",
            "सवाल: चने का भाव प्रति क्विंटल क्यों बताया जाता है? जवाब: मंडियों में अनाज और दलहन का भाव प्रति क्विंटल यानी 100 किलो के हिसाब से बोला जाता है। प्रति किलो भाव निकालने के लिए क्विंटल भाव को 100 से भाग दें।",
            "सवाल: चने के भाव सबसे ज्यादा दबाव में कब रहते हैं? जवाब: मार्च से मई के दौरान, जब रबी की नई फसल एक साथ मंडियों में आती है, तो भारी आवक के कारण भाव पर दबाव देखने को मिलता है।",
            "सवाल: चने का MSP और मंडी भाव में क्या फर्क है? जवाब: MSP सरकार द्वारा घोषित न्यूनतम समर्थन मूल्य है, जबकि मंडी भाव खुले बाजार में रोज़ की मांग-आपूर्ति से तय होने वाला रेट है।"
          ]
        },
        {
          "title": "चने का दैनिक भाव और बाजार का रुख",
          "paragraphs": [
            "चने के बाजार भाव में दैनिक आवक और दाल बाजार की मांग के अनुसार बदलाव होते रहते हैं। बाजार के रुख और अपनी उपज की गुणवत्ता को समझकर सौदा करने से किसान भाई अपनी उपज का पूरा और वाजिब मूल्य प्राप्त कर सकते हैं।",
            "ध्यान दें: माल की गुणवत्ता, नमी, दाने के आकार और बोली के समय के अनुसार आपको मिलने वाला वास्तविक रेट इस पेज पर दिखे भाव से कम-ज्यादा हो सकता है, इसलिए सौदा करने से पहले अपनी स्थानीय मंडी में भाव की पुष्टि जरूर कर लें।"
          ]
        }
      ]
    },
    "bajra": {
      "title": "बाजरे के मंडी भाव को तय करने वाले प्रमुख कारक और सर्वोत्तम भाव पाने के सुझाव",
      "paragraphs": [
        "राम राम किसान भाइयों! भारतीय कृषि और मोटे अनाजों (Millets / श्री अन्न) के बाजार में बाजरा (Pearl Millet) खरीफ सीजन की सबसे प्रमुख और किसानों की मुख्य नकदी व आहार फसल है। राजस्थान, हरियाणा, उत्तर प्रदेश, गुजरात और महाराष्ट्र के बारानी व सिंचित क्षेत्रों में बाजरे का उत्पादन सबसे बड़े पैमाने पर होता है। दैनिक खान-पान के अलावा पोल्ट्री फीड (मुर्गी दाना), पशु आहार, शराब/स्टार्च उद्योग और श्री अन्न मिशन के तहत सुपरफूड के रूप में बढ़ती मांग के कारण देशभर की मंडियों में बाजरे का व्यापार हमेशा सक्रिय रहता है।"
      ],
      "sections": [
        {
          "title": "बाजरे के मंडी भाव को तय करने वाले प्रमुख कारक",
          "paragraphs": ["मंडियों में बाजरे के भाव केवल स्थानीय उत्पादन पर निर्भर नहीं करते, बल्कि कई व्यावहारिक और बाजार संबंधी कारणों से तय होते हैं:"]
        },
        {
          "title": "उपयोग और गुणवत्ता के आधार पर मांग (खपत बनाम पोल्ट्री/फीड)",
          "items": [
            "खाने योग्य बाजरा (Food Grade): साफ, चमकदार, हरे-भूरे रंग का और बिना बारिश में भीगा हुआ बाजरा घरेलू खान-पान और पैकेज्ड फूड बनाने वाली कंपनियों द्वारा सबसे ऊंची कीमत पर खरीदा जाता है।",
            "फीड और डिस्टिलरी ग्रेड (Feed Grade): यदि दाना थोड़ा फीका हो या बारिश से प्रभावित हो, तो उसे पोल्ट्री फीड व अल्कोहल उद्योग कम भाव पर खरीदते हैं।"
          ]
        },
        {
          "title": "नमी और दाने की चमक",
          "items": [
            "कटाई और गहाई के समय बाजरे में नमी की मात्रा भाव तय करने में सबसे अहम भूमिका निभाती है।",
            "12% से कम नमी वाले सूखे और कड़क दाने के लिए व्यापारी प्रतिस्पर्धी बोलियां लगाते हैं। अधिक गीले या फफूंद लगे माल पर भाव में भारी कटौती की जाती है।"
          ]
        },
        {
          "title": "सरकारी समर्थन मूल्य (MSP) और खरीद व्यवस्था",
          "items": [
            "केंद्र सरकार द्वारा बाजरे का न्यूनतम समर्थन मूल्य (MSP) अन्य मोटे अनाजों की तुलना में काफी आकर्षक रखा जाता है।",
            "जब राज्य सरकारें (विशेषकर हरियाणा और राजस्थान) समर्थन मूल्य या भावांतर योजना के तहत खरीद प्रक्रिया सक्रिय करती हैं, तो खुले बाजार में भी व्यापारियों पर भाव सुधारने का दबाव बनता है।"
          ]
        },
        {
          "title": "मक्का और टूटे चावल (Broken Rice) के भाव",
          "items": [
            "फीड इंडस्ट्री में मक्का और बाजरा एक-दूसरे के विकल्प के तौर पर काम करते हैं। जब पोल्ट्री और स्टार्च सेक्टर में मक्के के भाव ऊंचे होते हैं, तो बाजरे की औद्योगिक मांग अचानक बढ़ जाती है, जिससे मंडियों में तेजी देखने को मिलती है।"
          ]
        },
        {
          "title": "सीजनल आवक का दबाव",
          "items": [
            "सितंबर से नवंबर के दौरान जब नई फसल एक साथ मंडियों में उतरती है, तो भारी आवक के चलते भाव कुछ समय के लिए दबाव में आ जाते हैं। सर्दियों के आगमन के साथ खान-पान में मांग बढ़ने पर कीमतों में दोबारा सुधार आता है।"
          ]
        },
        {
          "title": "बाजरे का सर्वोत्तम भाव पाने के लिए किसान भाइयों को सुझाव",
          "items": [
            "उचित सुखाने के बाद ही बिक्री: गहाई के तुरंत बाद बाजरे को पक्के फर्श या तिरपाल पर फैलाकर अच्छी तरह धूप में सुखाएं। सूखा दाना सुरक्षित रहता है और व्यापारी बिना हिचकिचाहट के अधिकतम बोली लगाते हैं।",
            "सफाई और छंटाई: थ्रेशर से निकालने के बाद छलने या पंखे से कचरा, मिट्टी और खोखले दाने अलग कर लें। एक समान और साफ दाना सामान्य माल से ₹50 से ₹100 प्रति क्विंटल तक अधिक दाम दिलाता है।",
            "नमी से बचाव: कटाई के बाद फसल को भीगने से बचाएं। बारिश में भीगने से दाने पर कालापन आ जाता है, जिससे उसकी सीधी गिनती फीड ग्रेड में हो जाती है और भाव कम मिलता है।",
            "मंडियों के मॉडल भाव की तुलना: अपनी स्थानीय मंडी के साथ-साथ राज्य की प्रमुख मंडियों के दैनिक मॉडल भाव और आवक के रुख पर नजर रखकर ही अपनी उपज की बिक्री का सही समय तय करें।"
          ],
          "ordered": true
        },
        {
          "title": "बाजरे का मॉडल भाव क्या होता है",
          "paragraphs": ["मंडी भाव की तालिका में न्यूनतम और अधिकतम भाव के बीच एक मॉडल भाव भी दिया जाता है। मॉडल भाव उस भाव को कहते हैं जिस पर उस दिन मंडी में सबसे ज्यादा सौदे हुए। इसलिए सामान्य माल बेचने वाले किसान भाइयों के लिए मॉडल भाव, सबसे ऊंचे अधिकतम भाव के मुकाबले, अपने माल के रेट का बेहतर अंदाजा देता है।"]
        },
        {
          "title": "बाजरे का MSP और मंडी भाव में अंतर",
          "items": [
            "MSP सरकार द्वारा तय किया गया न्यूनतम समर्थन मूल्य है, जबकि मंडी भाव रोज़ मांग और आपूर्ति के हिसाब से बदलने वाला खुले बाजार का रेट है।",
            "जब मंडी में बाजरे का भाव MSP से नीचे चला जाए, तब सरकारी खरीद का विकल्प किसान भाइयों के लिए खास तौर पर काम आता है।"
          ]
        },
        {
          "title": "बाजरे का दैनिक भाव और बाजार का रुख",
          "paragraphs": ["बाजरे के बाजार भाव में दैनिक आवक, मौसम और औद्योगिक मांग के अनुसार निरंतर उतार-चढ़ाव होते रहते हैं। बाजार के रुझान और माल की गुणवत्ता को परखकर सौदा करने से किसान भाई अपनी उपज का वाजिब और पूरा मूल्य प्राप्त कर सकते हैं।"]
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
      "title": "आलू के मंडी भाव को तय करने वाले प्रमुख कारक और सर्वोत्तम भाव पाने के सुझाव",
      "paragraphs": [
        "राम राम किसान भाइयों! भारतीय सब्जी मंडियों में आलू (Potato) सब्जियों का राजा होने के साथ-साथ किसानों और व्यापारियों के लिए सबसे बड़ी नकदी फसल है। उत्तर प्रदेश (आगरा, फर्रुखाबाद, अलीगढ़), पश्चिम बंगाल, पंजाब, बिहार, मध्य प्रदेश और राजस्थान (जयपुर, कोटा) के किसानों के लिए आलू की खेती और उसका दैनिक बाजार भाव पूरे साल की आजीविका को तय करता है। घरेलू रसोई की दैनिक खपत से लेकर चिप्स व नमकीन उद्योग (Processing Plants) तक आलू की मांग हमेशा बनी रहती है, जिसके कारण देश की प्रमुख फल-सब्जी मंडियों में इसकी आवक और खरीद-फरोख्त लगातार तेज रहती है।"
      ],
      "sections": [
        {
          "title": "आलू के मंडी भाव को तय करने वाले प्रमुख कारक",
          "paragraphs": ["मंडी में आलू का भाव सिर्फ दैनिक आवक पर ही नहीं, बल्कि कई व्यावहारिक, औद्योगिक और भंडारण संबंधी कारकों पर निर्भर करता है:"]
        },
        {
          "title": "किस्म और उपयोग (टेबल आलू बनाम चिप्सोना)",
          "items": [
            "चिप्सोना व 3797 आलू: चिप्स, वेफर्स और फूड प्रोसेसिंग कंपनियों के लिए 'चिप्सोना' (Chipsona 1, 2, 3) और सफेद दाने वाले '3797' आलू की मांग सबसे ज्यादा रहती है। इनमें शुगर की मात्रा कम होने के कारण फैक्ट्रियां और व्यापारी इनका भाव हमेशा सामान्य आलू से ₹200 से ₹400 प्रति क्विंटल ऊंचा लगाते हैं।",
            "टेबल व लाल आलू (हॉलैंड/पुखराज): रोजमर्रा के खान-पान के लिए बिकने वाले आलू का भाव स्थानीय ग्राहकी और खुदरा बाजार की दैनिक मांग के आधार पर स्थिर चलता है।"
          ]
        },
        {
          "title": "ताजा (नया) बनाम कोल्ड स्टोरेज का आलू",
          "items": [
            "सर्दियों की नई आवक: नवंबर से फरवरी के दौरान जब खेतों से सीधा खोदा गया नया आलू मंडियों में आता है, तो छिलका पतला और नमी अधिक होने के कारण शुरुआत में भाव तेज रहते हैं, फिर बंपर आवक से कुछ समय दबाव बनता है।",
            "कोल्ड स्टोरेज निकासी: मार्च से अक्टूबर के महीनों में मंडियों में कोल्ड स्टोर से आलू की निकासी होती है। कोल्ड स्टोरेज में उपलब्ध कुल स्टॉक, बिजली खर्च और कोल्ड स्टोर भाड़े का सीधा असर गर्मियों और त्योहारी सीजन के भाव पर पड़ता है।"
          ]
        },
        {
          "title": "प्रमुख उत्पादक मंडियों का असर (आगरा, फर्रुखाबाद और इंदौर)",
          "items": [
            "देश में आलू के भाव की दिशा तय करने में उत्तर प्रदेश की आगरा और फर्रुखाबाद मंडियां सबसे आगे रहती हैं।",
            "जब आगरा और फर्रुखाबाद की मंडियों में भाव मजबूत होते हैं, तो उसका सीधा असर राजस्थान की जयपुर मुहाना मंडी, कोटा तथा दिल्ली की आजादपुर मंडी पर तुरंत दिखाई देता है।"
          ]
        },
        {
          "title": "ग्रेडिंग, छंटाई और दाग-धब्बे",
          "items": [
            "आलू की बोली में आकार (साइज) सबसे अहम पैमाना है। 'सुपर / मोटा' साइज का एक समान छंटाई किया हुआ माल सबसे ऊंची बोली में बिकता है।",
            "हरापन लिए हुए (धूप से हरा हुआ), कटा-फटा या चेचक/झुलसा से प्रभावित छोटे दाने (गुल्ली) का भाव आधा रह जाता है।"
          ]
        },
        {
          "title": "आलू का सर्वोत्तम भाव पाने के लिए किसान भाइयों को सुझाव",
          "items": [
            "उचित ग्रेडिंग (छंटाई): खेत से खुदाई के बाद या कोल्ड स्टोर से निकालते समय मोटे, मध्यम और गुल्ली (छोटे) आलू को अलग-अलग कट्टों (जाली बैग) में पैक करें। मिलावटी माल बेचने पर पूरे लॉट का भाव गिर जाता है।",
            "गीलेपन से बचाव: आलू को धूप में ज्यादा देर खुला न छोड़ें ताकि वह हरा न पड़े, और न ही नमी वाले कट्टों में पैक करें, जिससे सड़न का खतरा न रहे। साफ और चमकदार आलू को खरीदार बिना झिझक के प्रीमियम भाव देते हैं।",
            "टुकड़ों में बिक्री की रणनीति: पूरा स्टॉक एक साथ मंडी में ले जाने के बजाय बाजार के उतार-चढ़ाव को देखकर धीरे-धीरे माल निकालें।",
            "बड़ी उत्पादक मंडियों के रुख पर नजर: स्थानीय मंडी में अपनी ट्रॉली या गाड़ी ले जाने से पहले प्रमुख थोक मंडियों (आगरा, फर्रुखाबाद, जयपुर) के दैनिक मॉडल भाव और कोल्ड स्टोरेज की आवक का विश्लेषण जरूर करें।"
          ],
          "ordered": true
        },
        {
          "title": "आलू का मॉडल भाव क्या होता है",
          "paragraphs": ["मंडी भाव की तालिका में न्यूनतम और अधिकतम भाव के बीच एक मॉडल भाव भी दिया जाता है। मॉडल भाव उस भाव को कहते हैं जिस पर उस दिन मंडी में सबसे ज्यादा सौदे हुए। इसलिए सामान्य माल बेचने वाले किसान भाइयों के लिए मॉडल भाव, सबसे ऊंचे अधिकतम भाव के मुकाबले, अपने माल के रेट का बेहतर अंदाजा देता है।"]
        },
        {
          "title": "नए आलू और कोल्ड स्टोरेज के आलू के भाव में अंतर",
          "items": [
            "नए आलू और कोल्ड स्टोरेज के आलू का मंडी भाव अलग-अलग चलता है, इसलिए आलू का भाव देखते समय माल का प्रकार जरूर मिलाएं।",
            "कोल्ड स्टोरेज के आलू के भाव में स्टोर का भाड़ा और बिजली खर्च जुड़ा रहता है, जबकि नए आलू का भाव सीधे खेत की आवक से तय होता है।"
          ]
        },
        {
          "title": "आलू का दैनिक भाव और बाजार का रुख",
          "paragraphs": ["आलू के दैनिक भाव में मौसमी आवक, कोल्ड स्टोर की स्थिति और औद्योगिक मांग के आधार पर लगातार बदलाव होते रहते हैं। बाजार की चाल और अपनी उपज की क्वालिटी को ध्यान में रखकर सौदा करने से किसान भाई अपनी उपज का भरपूर और वाजिब मूल्य ले सकते हैं।"]
        }
      ]
    },
    "tamatar": {
      "title": "टमाटर के भाव: देशी बनाम हाइब्रिड, थोक बनाम फुटकर रेट और वार्षिक चक्र",
      "paragraphs": [
        "राम राम किसान भाइयों! भारतीय सब्जी मंडियों में टमाटर (Tomato) एक ऐसी नकदी फसल है, जिसके भाव में होने वाले दैनिक उतार-चढ़ाव देश की अर्थव्यवस्था और आम जनता की जेब दोनों पर सीधा असर डालते हैं। राजस्थान की प्रमुख मंडियों (जयपुर मुहाना मंडी, चौमूं मंडी, जोधपुर, कोटा) से लेकर उत्तर भारत की सबसे बड़ी आजादपुर मंडी (दिल्ली) तक, टमाटर का थोक व्यापार पूरे साल सबसे अधिक हलचल भरा रहता है। किसान भाई हमेशा यह जानने की कोशिश में रहते हैं कि आज मंडियों में टमाटर का ताजा भाव (Tamatar ka bhav price) क्या है, 1 कैरट का सौदा कितने में हुआ और आने वाले हफ्तों में भाव सुधरेंगे या गिरेंगे।"
      ],
      "sections": [
        {
          "title": "देशी बनाम हाइब्रिड (गोल बनाम अंडाकार) टमाटर: भाव में किसका पलड़ा भारी?",
          "paragraphs": ["मंडी में व्यापारी और आढ़ती केवल टमाटर देखकर ही बोली नहीं लगाते, बल्कि उसकी किस्म (Variety) के आधार पर रेट तय करते हैं:"],
          "items": [
            "हाइब्रिड / कड़क टमाटर (Shivaji, Abhinav, US 440 आदि): यह टमाटर आकार में अंडाकार (Oval/Square), कड़क छिलके वाला और ठोस गूदेदार होता है। इसकी सबसे बड़ी खूबी यह है कि यह लंबी दूरी के परिवहन (Transport) में दबता या फूटता नहीं है और 5 से 7 दिनों तक खराब नहीं होता। बाहरी राज्यों (जैसे दिल्ली, पंजाब, जम्मू या बिहार) के बड़े थोक व्यापारी इसी हाइब्रिड टमाटर की कैरट को हमेशा ₹100 से ₹250 प्रति कैरट अधिक देकर खरीदते हैं।",
            "देशी / गोल टमाटर (खट्टा रसदार): देशी किस्म का टमाटर गोल, पतले छिलके वाला और अत्यधिक रसदार होता है। इसका स्वाद बेहतरीन होने के कारण स्थानीय खुदरा बाजार और गृहणियों के बीच इसकी मांग तुरंत रहती है। लेकिन छिलका पतला होने से यह 2-3 दिन से ज्यादा टिक नहीं पाता। यही कारण है कि स्थानीय मंडी में जब तक ताजा माल बिके तब तक इसका भाव अच्छा मिलता है, लेकिन दूर की मंडियों में भेजने पर व्यापारी इस पर जोखिम लेने से बचते हैं।"
          ]
        },
        {
          "title": "थोक मंडी भाव (Wholesale) और फुटकर (Retail) रेट में इतना अंतर क्यों?",
          "paragraphs": ["अक्सर किसान भाइयों का यह सवाल होता है कि मंडी में उनका टमाटर ₹10 से ₹15 किलो बिका, लेकिन शहर की दुकानों पर वही टमाटर ₹30 से ₹40 किलो क्यों बिक रहा है? इसके पीछे के प्रमुख कारण:"],
          "items": [
            "छंटाई और वेस्टेज (डैमेज लॉस): थोक मंडी से माल खरीदने के बाद फुटकर विक्रेता जब 25 किलो की कैरट खोलता है, तो उसमें 2 से 3 किलो टमाटर दबा हुआ, दाग वाला या गीला निकलता है जिसे फेंकना पड़ता है।",
            "परिवहन और स्थानीय भाड़ा: मुख्य मंडी से शहर के मोहल्लों और सब्जी ठेलों तक लाने में टेम्पो/ई-रिक्शा का भाड़ा, मंडी टैक्स और लेबर (पल्लेदारी) का खर्च जुड़ जाता है।",
            "खुदरा जोखिम: टमाटर एक सड़नशील (Perishable) सब्जी है। अगर 2 दिन में माल नहीं बिका तो वह गलने लगता है, इसलिए फुटकर व्यापारी अपने नुकसान की भरपाई के लिए मार्जिन जोड़कर 1 किलो टमाटर का खुदरा रेट तय करते हैं।"
          ],
          "ordered": true
        },
        {
          "title": "टमाटर के दाम का वार्षिक चक्र: कब आती है तेजी और कब मंदी?",
          "paragraphs": ["टमाटर का भाव साल के 12 महीने एक जैसा नहीं रहता। इसका एक प्राकृतिक मौसमी चक्र होता है:"],
          "items": [
            "सस्ते का दौर (दिसंबर से मार्च): सर्दियों के महीनों में देश के लगभग हर राज्य (राजस्थान, मध्य प्रदेश, गुजरात, उत्तर प्रदेश, महाराष्ट्र) में स्थानीय स्तर पर टमाटर की बंपर तुड़ाई होती है। मंडियों में माल की आवक बहुत अधिक होने से कीमतें साल के सबसे निचले स्तर पर पहुंच जाती हैं।",
            "भाव में चढ़ाव का समय (मई से जुलाई/अगस्त): गर्मियों के अंत और मानसून के शुरुआती महीनों में अत्यधिक गर्मी या भारी बारिश के कारण स्थानीय फसलें खत्म हो जाती हैं। इस दौरान देश की मंडियों में आपूर्ति मुख्य रूप से कर्नाटक (कोलार), आंध्र प्रदेश (मदनपल्ले) और महाराष्ट्र (नासिक/नारायणगांव) जैसे खास पॉकेट्स पर निर्भर हो जाती है। जब दक्षिण या पहाड़ी क्षेत्रों में बारिश से ट्रांसपोर्ट बाधित होता है, तब टमाटर के भाव ₹50 से ₹100 प्रति किलो के ऐतिहासिक स्तर तक पहुंच जाते हैं।",
            "संतुलन का दौर (सितंबर से नवंबर): त्योहारी सीजन और शादियों के समय मांग बहुत तेज रहती है, लेकिन खरीफ की नई फसल बाजार में आने से कीमतें स्थिर और मुनाफेदार दायरे में कारोबार करती हैं।"
          ]
        },
        {
          "title": "देश के प्रमुख सप्लायर हब और मंडियों का कनेक्शन",
          "paragraphs": ["राजस्थान और उत्तर भारत की मंडियों के भाव पूरे देश के नेटवर्क से जुड़े होते हैं:"],
          "items": [
            "नासिक व पिंपलगांव (महाराष्ट्र): देश की सबसे बड़ी टमाटर बेल्ट में से एक है। यहां से आने वाले माल के भाड़े और क्वालिटी पर दिल्ली-जयपुर के भाव निर्भर करते हैं।",
            "कोलार व मदनपल्ले: जब उत्तर भारत में फसल नहीं होती, तब इन मंडियों से ट्रकों की रवानगी तय करती है कि आजादपुर या मुहाना मंडी में टमाटर का क्या रुख रहेगा।",
            "चौमूं और जयपुर (मुहाना मंडी): राजस्थान में स्थानीय टमाटर का सबसे बड़ा गढ़ है। जब चौमूं क्षेत्र का टमाटर चालू होता है, तो जयपुर, अजमेर, बीकानेर और जोधपुर की मंडियों में बाहरी राज्यों से आने वाला महंगा माल आना बंद हो जाता है।"
          ]
        },
        {
          "title": "कैरट (Crate) का हिसाब और शुद्ध मुनाफे का गणित",
          "paragraphs": ["थोक मंडियों में टमाटर का व्यापार हमेशा 'प्लास्टिक कैरट' में होता है:"],
          "items": [
            "मानक वजन: 1 प्लास्टिक कैरट में शुद्ध टमाटर का वजन 23 से 25 किलोग्राम तक भरा जाता है।",
            "भाव की गणना: यदि मंडी में आपकी कैरट की बोली ₹400 लगी है और उसमें 25 किलो टमाटर है, तो आपका थोक भाव निकला ₹16 प्रति किलो (400 ÷ 25 = 16)।",
            "मंडी खर्चे: अपनी शुद्ध बचत निकालते समय आढ़त/कमीशन (यदि राज्य में लागू हो), गाड़ी भाड़ा और कैरट खाली कराने की पल्लेदारी को काटकर ही प्रति किलो का वास्तविक मुनाफा तय करें।"
          ]
        },
        {
          "title": "मंडी में सबसे ऊंची बोली पाने के 4 व्यावहारिक गुर",
          "items": [
            "तुड़ाई की सही अवस्था (Color Stage): अगर आपका माल उसी दिन स्थानीय मंडी में बिकना है, तो 80-90% लाल पके टमाटर तोड़ें। अगर आपकी गाड़ी 200 से 500 किलोमीटर दूर किसी बड़ी मंडी (जैसे दिल्ली या जोधपुर) जा रही है, तो 'ब्रेकर स्टेज' यानी हल्के गुलाबी-पीलेपन (Turning Stage) पर ही तुड़ाई करें। मंडी पहुंचते-पहुंचते वह प्राकृतिक रूप से चमकदार लाल और कड़क रहेगा।",
            "सख्त ग्रेडिंग (छंटाई): सुपर बड़ा माल, मध्यम माल और छोटा/दागी माल अलग-अलग कैरट में रखें। एक समान साइज वाली कैरट को देखकर खरीदार तुरंत प्रीमियम रेट का टैग लगा देते हैं।",
            "दोपहर की धूप में तुड़ाई न करें: टमाटर की तुड़ाई हमेशा सुबह जल्दी या शाम के समय करें। तेज धूप में तोड़ा गया टमाटर अंदर से गर्म रहता है, जिससे कैरट में बंद होते ही वह तेजी से पसीजने और गलने लगता है।",
            "बड़ी मंडियों के रुख पर नजर: गाड़ी लोड करने से पहले हमेशा प्रमुख मंडियों के आवक आंकड़ों और पिछले दिन के मॉडल रेट का अध्ययन करें ताकि आप सही समय पर सही मंडी चुन सकें।"
          ],
          "ordered": true
        },
        {
          "title": "टमाटर का मॉडल भाव क्या होता है",
          "paragraphs": ["मंडी भाव की तालिका में न्यूनतम और अधिकतम भाव के बीच एक मॉडल भाव भी दिया जाता है। मॉडल भाव उस भाव को कहते हैं जिस पर उस दिन मंडी में सबसे ज्यादा सौदे हुए। इसलिए सामान्य माल बेचने वाले किसान भाइयों के लिए मॉडल भाव, सबसे ऊंचे अधिकतम भाव के मुकाबले, अपने माल के रेट का बेहतर अंदाजा देता है।"]
        },
        {
          "title": "टमाटर का दैनिक भाव और बाजार का रुख",
          "paragraphs": ["टमाटर के बाजार में मांग, मौसम और आपूर्ति का संतुलन हर रोज नया समीकरण बनाता है। बाजार के सही ट्रेंड और अपनी उपज की क्वालिटी का सही तालमेल बैठाकर ही किसान भाई अपनी मेहनत का सबसे बेहतरीन मुनाफा कमा सकते हैं।"]
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
      "title": "लहसुन के भाव: किस्मों, ग्रेडिंग, बेंचमार्क मंडियों और वार्षिक मूल्य चक्र के आधार पर",
      "paragraphs": [
        "राम राम किसान भाइयों! भारतीय मसाला और नकदी फसलों में लहसुन (Garlic) को किसानों का \"सफेद सोना\" कहा जाता है। मध्य प्रदेश का मालवा-निमाड़ क्षेत्र (मंदसौर, नीमच, रतलाम, इंदौर) और राजस्थान का हाड़ौती अंचल (कोटा, बारां, झालावाड़) पूरे देश के लहसुन उत्पादन और व्यापार की मुख्य जीवनरेखा हैं। रसोई में दैनिक उपयोग, आयुर्वेदिक औषधियों और बड़े स्तर पर लहसुन पेस्ट व पाउडर बनाने वाले फूड प्रोसेसिंग प्लांट्स में निरंतर मांग रहने के कारण कृषि उपज मंडियों में इसकी खरीद-फरोख्त पूरे साल सबसे ज्यादा गर्म रहती है। किसान भाई हमेशा यह जानने के लिए सक्रिय रहते हैं कि आज राजस्थान और मध्य प्रदेश की प्रमुख मंडियों में लहसुन का भाव क्या है, 1 किलो लहसुन का खुदरा रेट क्या चल रहा है और आने वाले महीनों में बाजार में तेजी आएगी या मंदी।"
      ],
      "sections": [
        {
          "title": "देशी लहसुन बनाम ऊटी व रियावन: किस्मों के आधार पर भाव का बड़ा अंतर",
          "paragraphs": ["मंडी में व्यापारी केवल ढेरी देखकर बोली नहीं लगाते, बल्कि लहसुन की वैरायटी और उसके कंद के आकार के आधार पर प्रीमियम तय करते हैं:"],
          "items": [
            "ऊटी लहसुन (Ooty Garlic): यह आकार में बहुत बड़ा, सफेद और चमकदार होता है। इसकी कलियां मोटी होती हैं और छिलका आसानी से उतरता है। दक्षिण भारत और बड़े मेट्रो शहरों के व्यापारी ऊटी लहसुन की सबसे ऊंची बोली लगाते हैं। सीजन के दौरान इसका भाव सामान्य देशी लहसुन से ₹2,000 से लेकर ₹5,000 प्रति क्विंटल तक ऊपर बिकता है।",
            "रियावन सिल्वर (Riyawan Garlic): मध्य प्रदेश के रतलाम-मंदसौर बेल्ट की यह प्रसिद्ध किस्म अपने सफेद चमकदार पर्दे, तेज गंध और अधिक तेल प्रतिशत के लिए देश-विदेश में विख्यात है। इसका पर्दा बेहद मजबूत होता है, जिससे इसे लंबे समय तक बिना सूखे भंडारित किया जा सकता है। मंडियों में रियावन को हमेशा 'सुपर क्वालिटी' की श्रेणी में रखा जाता है।",
            "देशी लहसुन (Desi Lahsun): यह कंद आकार में मध्यम से छोटा होता है, लेकिन इसका तीखापन, स्वाद और भंडारण क्षमता (Shelf Life) सबसे बेहतरीन होती है। दैनिक घरेलू उपयोग और मसाला उद्योगों में देशी लहसुन की मांग सालभर लगातार बनी रहती है।",
            "जी-2 (यमुना सफेद) व अमलेटा: यह किस्में व्यावसायिक रूप से अधिक उत्पादन और मध्यम-मोटे कंद के लिए जानी जाती हैं, जिनका बाजार भाव देशी और ऊटी के बीच स्थिर रहता है।"
          ]
        },
        {
          "title": "लहसुन की 5 प्रमुख ग्रेडिंग और भाव का गणित",
          "paragraphs": ["थोक मंडियों में लहसुन का कोई एक निश्चित भाव नहीं होता; पूरी बोली माल के साइज और पर्दे (छिलके) की मजबूती पर निर्भर करती है:"],
          "items": [
            "सुपर बम / रियावन स्पेशल (Super Bom): 50 मिमी से अधिक बड़ा, मजबूत सफेद पर्दे वाला कंद। यह लॉट मंडी का 'टॉप मॉडल भाव' तय करता है।",
            "बम / मोटा साइज (Bom): 40 से 50 मिमी आकार का कंद। निर्यातकों और बड़े शहरों के खरीदारों की पहली पसंद।",
            "लड्डू लहसुन (Ladoo Quality): 30 से 40 मिमी आकार। खुदरा बाजार और गृहणियों के बीच सबसे ज्यादा बिकने वाला ग्रेड, जिसकी मांग हर समय स्थिर रहती है।",
            "मीडियम साइज (Medium): 20 से 30 मिमी आकार। छोटे होटल, ढाबों और पेस्ट कंपनियों द्वारा खरीदा जाता है। इसका भाव लड्डू से 20-30% कम रहता है।",
            "छर्री / बारीक लहसुन (Chharri): 20 मिमी से छोटा कंद। यह सबसे निचली श्रेणी होती है, जिसे मुख्य रूप से डीहाइड्रेशन प्लांट्स या पाउडर बनाने के लिए न्यूनतम भाव पर उठाया जाता है।"
          ],
          "ordered": true
        },
        {
          "title": "देश की बेंचमार्क मंडियां: मंदसौर, कोटा और बारां का बाजार पर असर",
          "paragraphs": ["लहसुन के देशव्यापी भाव की दिशा तय करने में दो प्रमुख राज्यों की मंडियों का सबसे बड़ा दबदबा है:"],
          "items": [
            "मंदसौर और नीमच मंडी (मध्य प्रदेश): मंदसौर मंडी को एशिया की सबसे बड़ी लहसुन मंडियों में गिना जाता है। यहां की दैनिक आवक, नीलामी की शुरुआत और बोली की रफ्तार पूरे उत्तर व मध्य भारत के लहसुन भाव की नींव रखती है। मंदसौर में आई तेजी का असर तुरंत इंदौर मंडी और दिल्ली आजादपुर तक फैलता है।",
            "कोटा और बारां मंडी (राजस्थान): हाड़ौती क्षेत्र की कोटा (भामाशाह मंडी) और बारां कृषि उपज मंडी राजस्थान में लहसुन व्यापार का सबसे बड़ा केंद्र हैं। जब बारां और कोटा में स्थानीय आवक तेज होती है, तो जयपुर मुहाना मंडी और जोधपुर मंडी में भी उसी अनुरूप भाव तय होते हैं।"
          ]
        },
        {
          "title": "लहसुन का वार्षिक मूल्य चक्र: भाव कब बढ़ते हैं और कब घटते हैं?",
          "paragraphs": ["लहसुन एक ऐसी नकदी फसल है जिसमें भंडारण और सीजन के हिसाब से कीमतों में बहुत भारी उतार-चढ़ाव आता है:"],
          "items": [
            "भारी आवक और मंदी का दौर (फरवरी से मई): इस दौरान मध्य प्रदेश और राजस्थान के खेतों से नई गीली फसल मंडियों में उतरती है। गीलेपन के कारण किसान लंबे समय तक माल रोक नहीं पाते, जिससे मंडियों में बंपर आवक होती है और भाव साल के सबसे निचले स्तर पर रहते हैं।",
            "स्थिरता और छंटाई का दौर (जून से अगस्त): किसान और स्टॉकिस्ट लहसुन को सुखाकर ग्रेडिंग करते हैं। इस समय गीलेपन की छंटनी के बाद सूखा माल मंडियों में आता है, जिससे भाव में मजबूती आनी शुरू होती है।",
            "बीज की मांग और त्योहारी उछाल (सितंबर से दिसंबर): यह समय पूरे देश में लहसुन की नई बुवाई का होता है। किसान भाई उन्नत किस्मों के मोटे कंद को बीज (Seed Garlic) के रूप में भारी दामों में खरीदते हैं। साथ ही दशहरा, दिवाली और सर्दियों में घरेलू खपत दोगुनी हो जाती है। इस दौर में यदि कोल्ड स्टोरेज या गोदामों में पुराना स्टॉक कम हो, तो लहसुन के भाव ऐतिहासिक रिकॉर्ड बना देते हैं।"
          ]
        },
        {
          "title": "थोक मंडी भाव (प्रति क्विंटल) और 1 किलो के खुदरा रेट में अंतर क्यों?",
          "paragraphs": ["कई बार किसान भाइयों को लगता है कि मंडी में उनका लहसुन ₹80 किलो (₹8,000 प्रति क्विंटल) बिका, लेकिन बाजार में उपभोक्ता को वही लहसुन ₹140 से ₹160 प्रति किलो मिल रहा है। इसके पीछे 3 व्यावहारिक कारण हैं:"],
          "items": [
            "सूखने से वजन की घटत (Weight Loss): लहसुन जब मंडी से खुदरा दुकान तक पहुंचता है, तो हवा और गर्मी से सूखने के कारण उसका 8% से 12% वजन कम हो जाता है।",
            "छर्री और कली की छंटाई: बोरी खोलते समय टूटी हुई कलियां, छिलके और सड़े हुए दाने निकलते हैं, जो कचरे में चले जाते हैं।",
            "परिवहन और आढ़त खर्च: मंडी से लंबी दूरी की लोडिंग, जाली बैग की पैकिंग, मंडी शुल्क और स्थानीय दुकानदारों का मुनाफा प्रति किलो के खुदरा रेट को बढ़ा देता है।"
          ],
          "ordered": true
        },
        {
          "title": "मंडी में सबसे ऊंची (प्रीमियम) बोली पाने के 4 अचूक तरीके",
          "items": [
            "सफेद पर्दा बचाकर रखें (Parda Quality): लहसुन का पर्दा जितना चमकदार, सफेद और कड़क होगा, व्यापारी उतनी ही आक्रामक बोली लगाएंगे। खेत से उखाड़ते समय कंद पर मिट्टी न चिपकने दें और उसे धूप में डायरेक्ट ज्यादा न झुलसाएं ताकि पर्दा काला या पीला न पड़े।",
            "डंठल की सही कटाई: कंद के ऊपर लगभग 1 से 1.5 इंच का डंठल छोड़कर ही कटाई करें। बिल्कुल जड़ से काटकर कली खोलने की गलती न करें, इससे हवा लगने पर कलियां ढीली हो जाती हैं।",
            "गीला माल मंडी न ले जाएं: पूरी तरह सूखा (Cured) लहसुन ही मंडी ले जाएं। गीले माल में व्यापारी वजन घटने का अंदेशा जताकर भाव में ₹1,500 से ₹2,500 प्रति क्विंटल तक की सीधी कटौती कर देते हैं।",
            "घर पर ही कर लें ग्रेडिंग: मोटे कंद (सुपर/लड्डू) और बारीक कंद (छर्री) को अलग-अलग कट्टों में भरकर मंडी ले जाएं। अगर पूरा माल एक ही ढेरी में मिला होगा, तो व्यापारी पूरी ढेरी का भाव सबसे बारीक लहसुन के हिसाब से आंकेगा।"
          ],
          "ordered": true
        },
        {
          "title": "लहसुन का दैनिक भाव और बाजार का रुख",
          "paragraphs": ["लहसुन का बाजार पूरी तरह गुणवत्ता, सूखेपन और सटीक समय पर की गई बिक्री पर निर्भर करता है। मध्य प्रदेश और राजस्थान की मंडियों के दैनिक मॉडल रेट, आवक की स्थिति और स्टॉक के रुझान को समझकर निर्णय लेने से किसान भाई अपनी उपज का सर्वाधिक मुनाफा हासिल कर सकते हैं।"]
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
      "title": "अदरक के भाव: प्रमुख मंडियां, किस्में और क्वालिटी, मूल्य चक्र और सोंठ का विकल्प",
      "paragraphs": [
        "राम राम किसान भाइयों! भारतीय मसाला और सब्जी बाजार में अदरक (Ginger) एक ऐसी उच्च मूल्य वाली नकदी फसल है, जिसके भाव में आने वाली तेजी सीधे रसोई से लेकर थोक व्यापार तक हलचल मचा देती है। दैनिक खान-पान, मसाला उद्योग, सर्दियों में चाय की खपत और आयुर्वेदिक औषधियों में व्यापक उपयोग के कारण अदरक की मांग पूरे साल बेहद मजबूत रहती है। महाराष्ट्र की प्रमुख मंडियों (कन्नड, लातूर, पुणे), मध्य प्रदेश की इंदौर मंडी से लेकर राजस्थान की उदयपुर और जयपुर (मुहाना) मंडी तक अदरक का थोक व्यापार हमेशा सक्रिय रहता है। किसान और व्यापारी भाई हमेशा यह जानने के लिए उत्सुक रहते हैं कि आज मंडियों में 1 किलो अदरक का रेट क्या है, अदरक का भाव कब बढ़ेगा और देश की बेंचमार्क मंडियों में क्या रुख चल रहा है।"
      ],
      "sections": [
        {
          "title": "महाराष्ट्र से राजस्थान-एमपी का कनेक्शन: कौन सी मंडियां तय करती हैं रुख?",
          "paragraphs": ["अदरक एक ऐसा उत्पाद है जिसकी खेती कुछ खास भौगोलिक क्षेत्रों में अधिक होती है, लेकिन इसकी खपत पूरे देश में है। यही वजह है कि इसके भाव सीधे तौर पर प्रमुख उत्पादक केंद्रों से जुड़े होते हैं:"],
          "items": [
            "कन्नड व छत्रपति संभाजीनगर (महाराष्ट्र): महाराष्ट्र का कन्नड (Kannad) इलाका देश में अदरक उत्पादन का सबसे बड़ा गढ़ माना जाता है। कन्नड और लातूर मंडी में अदरक का जो बाजार भाव (Adrak bhav today Latur) खुलता है, वही पूरे उत्तर भारत के लिए बेस रेट तय करता है।",
            "इंदौर मंडी (मध्य प्रदेश): मध्य भारत में इंदौर मंडी अदरक का सबसे बड़ा वितरण केंद्र (Re-distribution Hub) है। महाराष्ट्र और स्थानीय माल की आवक इंदौर मंडी में आने के बाद ही राजस्थान, उत्तर प्रदेश और गुजरात की मंडियों के लिए गाड़ियां रवाना होती हैं।",
            "उदयपुर और जयपुर मंडी (राजस्थान): राजस्थान में उदयपुर संभाग के आदिवासी अंचल में अदरक की स्थानीय पैदावार अच्छी होती है, जिसके चलते उदयपुर मंडी में स्थानीय और बाहरी दोनों तरह के माल का कड़ा मुकाबला रहता है। वहीं जयपुर की मुहाना मंडी में मुख्य रूप से महाराष्ट्र और बेंगलुरु से आने वाले धुले अदरक की बड़ी खेप बिकती है।"
          ]
        },
        {
          "title": "धुला हुआ (Washed) बनाम मिट्टी वाला अदरक",
          "paragraphs": ["मंडी में व्यापारी केवल ढेरी का वजन नहीं देखते, बल्कि अदरक की बनावट, गांठ की मोटाई और सफाई के आधार पर उसका ग्रेड तय करते हैं:"],
          "items": [
            "धुला हुआ अदरक: मशीनों में साफ पानी से धोकर चमक लाया गया अदरक बड़े शहरों और सुपरमार्केट्स की पहली पसंद होता है। इसमें मिट्टी नहीं होती, इसलिए व्यापारी इस पर ₹500 से ₹1,000 प्रति क्विंटल का अतिरिक्त प्रीमियम देते हैं।",
            "बिना धुला (मिट्टी वाला माल): खेत से सीधा निकला हुआ अदरक, जिसमें मिट्टी चिपकी होती है। इसमें वजन में मिट्टी का हिस्सा कटने और धोने के खर्च के चलते इसका भाव हमेशा कम आंका जाता है।"
          ]
        },
        {
          "title": "पुराना अदरक (Old Ginger) बनाम नया कच्चा अदरक",
          "items": [
            "पुराना परिपक्व अदरक: जब फसल पूरी तरह पक जाती है, तो उसमें रेशा मजबूत हो जाता है, तीखापन बढ़ जाता है और छिलका कड़क हो जाता है। यह अदरक लंबे समय तक सड़ता नहीं है। होटल, ढाबों और मसाला फैक्ट्रियों में इसी पुराने अदरक की सबसे ऊंची बोली लगती है।",
            "नया गीला अदरक: शुरुआती तुड़ाई में आने वाला नया अदरक बहुत नाजुक होता है। इसमें पानी की मात्रा अधिक होने से यह जल्दी सड़ने लगता है, इसलिए इसका भाव पुराने माल से 30% से 40% तक कम रहता है।"
          ]
        },
        {
          "title": "गांठ का आकार (बोल्ड / पंजा साइज)",
          "paragraphs": ["अदरक का पंजा (हाथ की तरह फैली हुई गांठें) जितना बड़ा, गूदेदार और बिना दाग वाला होगा, वह 'सुपर बोल्ड' क्वालिटी में गिना जाएगा। टूटी हुई छोटी गांठें और पतले रेशे वाले अदरक को 'गोली/कटिंग' ग्रेड में डालकर सस्ते भाव में बेचा जाता है।"]
        },
        {
          "title": "अदरक का मूल्य चक्र: भाव कब बढ़ता है और कब घटता है?",
          "paragraphs": ["अदरक के भाव में सालभर भारी उतार-चढ़ाव देखने को मिलते हैं:"],
          "items": [
            "मंदी का समय (जनवरी से अप्रैल): सर्दियों के अंत और बसंत ऋतु में महाराष्ट्र, कर्नाटक और मध्य प्रदेश के खेतों से नई फसल की मुख्य खुदाई होती है। मंडियों में एक साथ बंपर आवक होने के कारण इन महीनों में अदरक का थोक भाव साल के सबसे निचले स्तर पर पहुंच जाता है।",
            "तेजी और उछाल का दौर (जुलाई से नवंबर): मानसून के महीनों में बारिश के चलते खेतों से तुड़ाई रुक जाती है और ढुलाई में माल सड़ने का जोखिम बढ़ जाता है। साथ ही इसी दौरान नए सीजन के लिए किसान भाइयों द्वारा 'बीज के लिए अदरक' की जबरदस्त खरीद की जाती है। बीज की तगड़ी मांग, कम आवक और आगे सर्दियों में चाय व काढ़े की भारी घरेलू खपत मिलकर अदरक के भाव में जोरदार तेजी लाते हैं।"
          ]
        },
        {
          "title": "थोक मंडी भाव (क्विंटल) और 1 किलो के खुदरा रेट में इतना अंतर क्यों?",
          "paragraphs": ["उपभोक्ताओं और किसान भाइयों के मन में यह सवाल अक्सर उठता है कि मंडी में अदरक ₹40 से ₹50 किलो (₹4,000-₹5,000 प्रति क्विंटल) बिका, तो शहर की दुकानों पर 1 किलो अदरक का रेट ₹90 से ₹120 तक क्यों पहुंच गया? इसके 3 मुख्य कारण हैं:"],
          "items": [
            "सड़न और नमी का नुकसान (Weight Loss & Dripping): अदरक जमीन के नीचे उगने वाला कंद है। मंडी से फुटकर दुकान तक पहुंचने में धूप और हवा से इसका पानी सूखता है, जिससे 1 बोरी (60 किलो) में 3 से 5 किलो वजन घट जाता है। साथ ही कंद सड़न (Rotting) के कारण 5-7% माल फेंकना पड़ता है।",
            "धुलाई और ग्रेडिंग खर्च: मिट्टी वाले अदरक को पानी के फव्वारों या ड्रमों में धोकर साफ करने, सुखाने और छंटाई करने में लेबर खर्च जुड़ता है।",
            "लंबी दूरी का ट्रांसपोर्ट: महाराष्ट्र के कन्नड या लातूर से उत्तर भारत (राजस्थान, दिल्ली, पंजाब) तक ट्रकों का ठंडा व सुरक्षित परिवहन भाड़ा प्रति किलो लागत को सीधे बढ़ा देता है।"
          ],
          "ordered": true
        },
        {
          "title": "सूखा अदरक (सोंठ) का विकल्प: जब बाजार में मंदी हो",
          "paragraphs": ["अदरक उत्पादक किसानों के लिए सबसे बड़ा फायदा यह है कि यह टमाटर की तरह तुरंत नष्ट होने वाली फसल नहीं है।"],
          "items": [
            "यदि मंडियों में ताजे गीले अदरक का भाव बहुत गिर जाए, तो किसान भाई इसे औने-पौने दाम पर बेचने के बजाय सोंठ (Dry Ginger) बना सकते हैं।",
            "अच्छे पके हुए अदरक को छीलकर, चूने के पानी में उपचारित कर धूप में सुखाकर सोंठ तैयार की जाती है।",
            "सोंठ को सालों तक सुरक्षित रखा जा सकता है और जब आयुर्वेदिक दवा कंपनियों या मसाला मिलों में इसकी मांग निकलती है, तो यह कई गुना ऊंचे दामों में बिकती है।"
          ]
        },
        {
          "title": "मंडी में अदरक का सबसे ऊंचा भाव पाने के 4 व्यावहारिक टिप्स",
          "items": [
            "कंद सड़न (Soft Rot) वाले टुकड़े तुरंत अलग करें: बोरी या क्रेट में अगर एक भी सड़ा हुआ या बदबूदार अदरक का टुकड़ा रह गया, तो वह पूरी बोरी को गीला कर देगा। मंडी में ऐसा माल पहुंचते ही आढ़ती पूरे लॉट का भाव गिरा देते हैं।",
            "खेत से निकालने के बाद तुरंत पैक न करें: खुदाई के बाद अदरक को 1 दिन छायादार और हवादार जगह पर फैलाकर रखें ताकि उसकी ऊपरी अतिरिक्त नमी सूख जाए और छिलका बैठ जाए।",
            "कन्नड और इंदौर मंडी के रुख पर नजर रखें: राजस्थान और आसपास के किसान भाई अपनी स्थानीय मंडी (जैसे उदयपुर, कोटा या जयपुर) में माल ले जाने से पहले महाराष्ट्र और इंदौर की बड़ी मंडियों के दैनिक मॉडल भाव और आवक की जानकारी जरूर लें।",
            "जालीदार बोरियों (Mesh Bags) का उपयोग: अदरक को कभी भी प्लास्टिक के बंद कट्टों में न भरें। हवादार जाली वाली लाल बोरियों में माल पैक करने से अंदर हवा लगती रहती है और अदरक तरोताजा बना रहता है।"
          ],
          "ordered": true
        },
        {
          "title": "अदरक का दैनिक भाव और बाजार का रुख",
          "paragraphs": ["अदरक का बाजार पूरी तरह मौसम, बीज की मांग और प्रमुख उत्पादक राज्यों की आवक पर टिका होता है। बाजार के सही उतार-चढ़ाव को समझकर और अपने माल की उचित छंटाई करके बिक्री करने से किसान भाई अपनी मेहनत का भरपूर और सबसे बेहतरीन दाम हासिल कर सकते हैं।"]
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
      "title": "हरी मिर्च के भाव: किस्में और तीखापन, प्रमुख मंडियां, मौसमी चक्र और बोली के टिप्स",
      "paragraphs": [
        "राम राम किसान भाइयों! भारतीय सब्जी मंडियों में हरी मिर्च (Green Chilli) एक ऐसी लगातार बिकने वाली नकदी फसल है, जिसके भाव में आने वाली तेजी-मंदी सीधे किसान की जेब और व्यापारी के मुनाफे पर असर डालती है। चाहे राजस्थान में हरी मिर्च का भाव हो, मध्य प्रदेश की इंदौर मंडी हो या फिर देश की सबसे बड़ी आजादपुर मंडी (दिल्ली), हरी मिर्च का थोक व्यापार पूरे साल तेजी से चलता है। किसान भाई और व्यापारी हमेशा यह जानने के लिए उत्सुक रहते हैं कि आज हरी मिर्च का मंडी भाव क्या है, 1 किलो हरी मिर्च का आज का रेट क्या चल रहा है और आने वाले हफ्तों में बाजार में क्या रुख रहेगा।"
      ],
      "sections": [
        {
          "title": "मिर्च की किस्में और तीखेपन का भाव पर असर",
          "paragraphs": ["मंडी में आढ़ती या खरीदार सिर्फ मिर्च की ढेरी देखकर बोली नहीं लगाते, बल्कि मिर्च की लंबाई, रंग, चमक और तीखेपन के आधार पर हरी मिर्च का भाव (Hari Mirch ka bhav price) तय होता है:"],
          "items": [
            "जी-4 (G-4) और तेजा मिर्च (तीखी और लंबी): यह किस्म गहरी हरी, 7 से 10 सेमी लंबी और बेहद तीखी होती है। होटल, रेस्टोरेंट, ढाबों और मसाला उद्योगों में इसकी मांग सबसे ज्यादा रहती है। इस मिर्च की शेल्फ लाइफ लंबी होती है, जिससे दूर की मंडियों (जैसे दिल्ली या पंजाब) में भेजने पर व्यापारी इस पर प्रीमियम भाव लगाते हैं। यदि किसान इसे हरी बेचने के बजाय पकाकर सुखा लें, तो आगे चलकर सूखी मिर्च का भाव और लाल मिर्च का भाव भी इस पर काफी आकर्षक मिलता है।",
            "वीएनआर (VNR 305) व हाइब्रिड मिर्च: चमकदार, सीधी और बिना दाग वाली यह मिर्च पैकेजिंग और बड़े शहरों की मंडियों के लिए पहली पसंद मानी जाती है। जयपुर मंडी में आज हरी मिर्च का क्या भाव है, इसे देखा जाए तो ऐसी हाइब्रिड मिर्च को सामान्य क्वालिटी से ₹5 से ₹10 प्रति किलो तक ऊंचा रेट मिलता है।",
            "भावनगरी / मोटी मिर्च (कम तीखी): अचार, पकौड़े और भरवां सब्जी के लिए उपयोग होने वाली मोटी हरी मिर्च का खरीदार वर्ग अलग होता है। इसका बाजार मुख्यतः स्थानीय खुदरा मांग और शादियों के सीजन के आधार पर अलग रेंज में चलता है।"
          ]
        },
        {
          "title": "देश की प्रमुख मंडियों का कनेक्शन: कहाँ से तय होता है रुख?",
          "paragraphs": ["हरी मिर्च का बाजार पूरे देश के सप्लाई नेटवर्क से जुड़ा होता है:"],
          "items": [
            "आजादपुर मंडी (दिल्ली): उत्तर भारत का सबसे बड़ा वितरण केंद्र आजादपुर मंडी है। यहाँ राजस्थान, हरियाणा, मध्य प्रदेश और दक्षिण भारत से मिर्च की गाड़ियां पहुंचती हैं। आजादपुर मंडी में हरी मिर्च का क्या भाव है, इसी पर पूरे उत्तर भारत के मॉडल रेट निर्भर करते हैं।",
            "जयपुर मंडी (मुहाना मंडी): राजस्थान का सबसे बड़ा थोक बाजार जयपुर मंडी हरी मिर्च का भाव तय करता है। यहाँ चौमूं, बस्सी और दौसा बेल्ट से स्थानीय माल आने पर बाहरी राज्यों की आवक कम होती है और भाव स्थिर रहते हैं।",
            "जोधपुर मंडी हरी मिर्च का भाव: पश्चिमी राजस्थान के जिलों के लिए जोधपुर मंडी एक प्रमुख व्यापारिक केंद्र है, जहाँ मथानिया व स्थानीय बेल्ट के साथ-साथ गुजरात सीमा से भी मिर्च की आवक होती है।",
            "इंदौर मंडी (मध्य प्रदेश): मध्य प्रदेश में निमाड़ और मालवा क्षेत्र की मिर्च का सबसे बड़ा केंद्र इंदौर मंडी है। इंदौर से माल महाराष्ट्र, गुजरात और राजस्थान तक सप्लाई होता है।"
          ]
        },
        {
          "title": "हरी मिर्च का मौसमी चक्र: कब आती है तेजी और कब मंदी?",
          "paragraphs": ["हरी मिर्च के रेट में साल के दौरान बदलाव मौसम और फसल की आवक पर निर्भर करता है:"],
          "items": [
            "बंपर आवक और मंदी का दौर (दिसंबर से मार्च): सर्दियों के महीनों में सभी प्रमुख राज्यों में फसल पूरी तरह चालू हो जाती है। मंडियों में ढेरों गाड़ियां आने से आवक बहुत बढ़ जाती है और थोक रेट साल के निचले दायरे में कारोबार करते हैं।",
            "तेजी और उछाल का समय (मई से सितंबर): भीषण गर्मी और मानसून की भारी बारिश से पौधों में फूल झड़ने और सड़न की समस्या आती है, जिससे खेतों में उत्पादन अचानक घट जाता है। सप्लाई टूटते ही हरी मिर्च का भाव आज का 2026 में भी अचानक उछाल मारता है और थोक भाव दोगुने तक पहुंच जाते हैं।",
            "त्योहारी मांग (अक्टूबर से नवंबर): नवरात्रि, दिवाली और शादियों के सीजन में खान-पान की थोक खपत बढ़ने से बाजार में उठाव लगातार मजबूत बना रहता है।"
          ]
        },
        {
          "title": "थोक क्रेट और 1 किलो के खुदरा रेट में अंतर का कारण",
          "paragraphs": ["किसान भाई अक्सर सोचते हैं कि मंडी में उनकी मिर्च ₹20 से ₹25 किलो बिकी, लेकिन शहर की दुकान पर 1 किलो हरी मिर्च का आज का रेट ₹50 से ₹60 क्यों चल रहा है? इसके पीछे 3 व्यावहारिक कारण हैं:"],
          "items": [
            "वजन की घटत (Moisture Loss): हरी मिर्च तोड़े जाने के बाद हवा और गर्मी से सूखने लगती है। 24 से 48 घंटे में 1 क्रेट में 1 से 1.5 किलो वजन प्राकृतिक रूप से घट जाता है।",
            "दागी और डंठल टूटी मिर्च: फुटकर विक्रेता जब क्रेट खोलता है, तो उसमें पीली पड़ी, दागी या दबी हुई मिर्च को अलग निकालकर फेंकना पड़ता है, जिससे नुकसान की भरपाई प्रति किलो रेट में जोड़नी पड़ती है।",
            "लोकल भाड़ा और पल्लेदारी: मुख्य मंडी से शहर के अलग-अलग मोहल्लों तक ले जाने का ट्रांसपोर्ट, पैकिंग और मजदूरी खर्च जुड़ने से खुदरा रेट बढ़ जाता है।"
          ],
          "ordered": true
        },
        {
          "title": "मंडी में क्रेट और वजन का हिसाब",
          "paragraphs": ["थोक बाजार में हरी मिर्च का सौदा अक्सर प्लास्टिक क्रेट या जाली की बोरियों में होता है:"],
          "items": [
            "मानक क्रेट: 1 प्लास्टिक क्रेट में आमतौर पर 20 से 22 किलोग्राम हरी मिर्च भरी जाती है।",
            "भाव की गणना: यदि मंडी में आपकी 1 क्रेट ₹600 में बिकी है और उसमें 20 किलो मिर्च है, तो थोक रेट ₹30 प्रति किलो (600 ÷ 20 = 30) निकलकर आता है।"
          ]
        },
        {
          "title": "मंडी में सबसे ऊंची बोली पाने के 4 व्यावहारिक टिप्स",
          "items": [
            "सुबह जल्दी या शाम को तुड़ाई: तेज धूप में मिर्च कभी न तोड़ें। धूप में तोड़ी गई मिर्च अंदर से गर्म रहती है, जो क्रेट में बंद होते ही पसीजने और काली पड़ने लगती है।",
            "डंठल के साथ तुड़ाई: मिर्च को हमेशा डंठल (डंडी) सहित तोड़ें। बिना डंठल वाली मिर्च जल्दी गल जाती है और व्यापारी उसकी बोली कम लगाते हैं।",
            "सख्त ग्रेडिंग (छंटाई): सीधी, लंबी और ताजी हरी मिर्च को अलग क्रेट में भरें। टेढ़ी-मेढ़ी, छोटे आकार या दाग-धब्बे वाली मिर्च को अलग लॉट में बेचें ताकि मुख्य माल का भाव न कटे।",
            "बड़ी मंडियों के डेली रेट पर नजर: माल गाड़ी में लोड करने से पहले आसपास की प्रमुख मंडियों की आवक और मॉडल रेट को ट्रैक करें ताकि सही मंडी का चुनाव किया जा सके।"
          ],
          "ordered": true
        },
        {
          "title": "हरी मिर्च का दैनिक भाव और बाजार का रुख",
          "paragraphs": ["हरी मिर्च का बाजार पूरी तरह ताजा आवक, मौसम और ट्रांसपोर्ट सुविधा पर टिका होता है। सही ग्रेडिंग और बाजार के रुख पर ध्यान रखकर बिक्री करने से किसान भाई अपनी मेहनत का पूरा और सही मुनाफा कमा सकते हैं।"]
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
      "title": "",
      "paragraphs": [
        "राम राम किसान भाइयों! भारतीय सब्जी मंडियों में हरा धनिया (Green Coriander) सबसे ज्यादा मांग वाली और अत्यधिक संवेदनशील हरी नकदी फसल है। चाहे रसोई में रोजाना बनने वाली दाल-सब्जी की गार्निशिंग हो, तीखी हरी चटनी हो या फिर होटल, ढाबों और कैटरिंग का काम—हरे धनिए के बिना भारतीय थाली अधूरी मानी जाती है। अत्यधिक सड़नशील (Perishable) होने के कारण इसके दैनिक थोक भाव में 24 घंटे के भीतर भारी उछाल और मंदी देखने को मिलती है। मध्य प्रदेश की जबलपुर, छिंदवाड़ा और इंदौर मंडी से लेकर महाराष्ट्र की नागपुर मंडी, गुजरात की अहमदाबाद सब्जी मंडी और राजस्थान की मुहाना मंडी (जयपुर) तक, हरा धनिया का व्यापार पूरे साल बेहद तेज रफ्तार से चलता है। किसान भाई और व्यापारी हमेशा यह जानने के लिए उत्सुक रहते हैं कि आज मंडियों में हरा धनिया का क्या रेट चल रहा है (Hara dhaniya ka rate kya hai), 1 किलो हरी धनिया की कीमत क्या है और आने वाले दिनों में बाजार का क्या रुख रहेगा।"
      ],
      "sections": [
        {
          "title": "देशी बनाम हाइब्रिड धनिया: मंडी बोली में किसका भाव अधिक?",
          "paragraphs": ["मंडी में व्यापारी और आढ़ती केवल हरे पत्तों का ढेर देखकर भाव नहीं लगाते, बल्कि किस्म, खुशबू और डंठल के आधार पर लॉट का मॉडल भाव तय करते हैं:"],
          "items": [
            "देशी हरा धनिया (छोटा पत्ता, जबरदस्त खुशबू): देशी धनिए की पत्तियां थोड़ी कटी हुई और छोटी होती हैं, लेकिन इसकी प्राकृतिक सुगंध और स्वाद बहुत तीखा व लाजवाब होता है। स्थानीय सब्जी विक्रेता और गृहणियां देशी धनिए को सबसे पहले चुनते हैं। स्थानीय मंडियों में यह हाइब्रिड की तुलना में ₹15 से ₹25 प्रति किलो तक ऊंचे प्रीमियम भाव पर बिकता है। हालांकि, इसकी पत्तियां बहुत नाजुक होती हैं और यह लंबी दूरी के परिवहन को ज्यादा सहन नहीं कर पाता।",
            "हाइब्रिड / चौड़ी पत्ती वाला धनिया: यह पौधा अधिक वजनदार, मोटे डंठल और बड़ी पत्तियों वाला होता है। इसमें देशी की तुलना में खुशबू थोड़ी कम होती है, लेकिन इसकी शेल्फ लाइफ (टिकने की क्षमता) 3 से 5 दिन तक अच्छी रहती है। दूर-दराज की बड़ी मंडियों (जैसे दिल्ली, अहमदाबाद या मुंबई) में ट्रक भेजने वाले व्यापारी इसी हाइब्रिड धनिए की जालीदार बोरियों को प्राथमिकता देते हैं।"
          ]
        },
        {
          "title": "प्रमुख उत्पादक बेल्ट और बेंचमार्क मंडियों का नेटवर्क",
          "paragraphs": ["हरा धनिया की आपूर्ति पूरे देश में कुछ खास सप्लायर पॉकेट्स और बड़ी मंडियों के तालमेल पर चलती है:"],
          "items": [
            "छिंदवाड़ा और जबलपुर मंडी (मध्य प्रदेश): मध्य प्रदेश का छिंदवाड़ा क्षेत्र हरा धनिया उत्पादन का एक प्रमुख राष्ट्रीय केंद्र है। छिंदवाड़ा (Hara dhaniya Mandi bhav today Chhindwara) और जबलपुर मंडी में आज हरी धनिया का क्या भाव है, इसका सीधा असर मध्य भारत और उत्तर भारत की आपूर्ति पर पड़ता है। यहां से प्रतिदिन दर्जनों गाड़ियां दूसरे राज्यों के लिए रवाना होती हैं।",
            "इंदौर मंडी (Indore Mandi hara dhaniya ka bhav): मालवा अंचल की प्रमुख व्यापारिक मंडी होने के नाते इंदौर आसपास के जिलों के लिए बड़ा हब है, जहां से माल गुजरात और राजस्थान की सीमावर्ती मंडियों तक पहुंचता है।",
            "नागपुर मंडी (महाराष्ट्र): विदर्भ क्षेत्र में हरा धनिया आज का भाव Nagpur तय करता है कि महाराष्ट्र और दक्षिण-मध्य भारत में आपूर्ति की क्या स्थिति है।",
            "अहमदाबाद सब्जी मंडी (गुजरात): गुजरात की सबसे बड़ी थोक मंडी अहमदाबाद में स्थानीय सौराष्ट्र/उत्तर गुजरात की आवक के साथ-साथ मध्य प्रदेश और राजस्थान से भी बड़े पैमाने पर हरा धनिया पहुंचता है।"
          ]
        },
        {
          "title": "हरा धनिया का मौसमी चक्र: भाव कब बढ़ेगा और कब घटेगा?",
          "paragraphs": ["धनिया का बाजार मौसम के मिजाज पर सबसे तेजी से प्रतिक्रिया देता है:"],
          "items": [
            "सस्ते और बंपर आवक का दौर (दिसंबर से मार्च): सर्दियों के महीनों में मौसम ठंडा और अनुकूल रहने से हर क्षेत्र में स्थानीय फसल भरपूर तैयार होती है। मंडियों में आवक इतनी बढ़ जाती है कि थोक भाव ₹5 से ₹15 प्रति किलो के न्यूनतम दायरे में आ जाते हैं।",
            "भीषण तेजी और रिकॉर्ड उछाल का समय (मई से सितंबर): गर्मियों में तेज धूप और लू के कारण पौधे सूख जाते हैं, वहीं मानसून की भारी बारिश में पत्तियां खेतों में ही गलने लगती हैं। इस दौरान देश के 80% इलाकों में स्थानीय फसल नष्ट हो जाती है। मांग सामान्य रहती है लेकिन सप्लाई 10 गुना घट जाती है। यही वह दौर होता है जब थोक मंडियों में हरा धनिया ₹80 से ₹150 प्रति किलो और खुदरा में ₹200 से ₹250 प्रति किलो तक बिकता है।",
            "धनिया का भाव कब बढ़ेगा 2026 में? मानसून के महीनों में जब भी भारी बारिश से खेतों में पानी भरता है या तेज उमस से पत्तियां पीली पड़ने लगती हैं, मंडियों में आवक घटते ही भाव में तात्कालिक बड़ा उछाल देखने को मिलता है।"
          ]
        },
        {
          "title": "हरा धनिया बनाम सूखा धनिया (Sukha Dhaniya Ka Bhav): किसान का सेफ्टी वाल्व",
          "paragraphs": ["धनिया उत्पादक किसानों के पास एक सबसे बड़ा प्राकृतिक सुरक्षा चक्र (Safety Valve) होता है।"],
          "items": [
            "जब सर्दियों के चरम पर मंडियों में भारी मंदी आ जाए और हरा धनिया काटने और मंडी ले जाने की लागत भी न निकल रही हो, तो किसान भाई उसे हरी अवस्था में औने-पौने दाम पर बेचने के बजाय खेत में ही छोड़ देते हैं।",
            "फसल पकने पर उससे बीज तैयार कर लिया जाता है, जिसे सूखा धनिया (Coriander Seeds) कहते हैं।",
            "राजस्थान की रामगंजमंडी (कोटा) और मध्य प्रदेश की गुना-कुंभराज मंडियों में सूखे धनिए का राष्ट्रीय स्तर पर बड़ा कारोबार होता है। सूखा धनिया गैर-सड़नशील होता है, जिसे किसान गोदामों में रखकर ऑफ-सीजन में अच्छे भाव पर बेच सकते हैं।"
          ]
        },
        {
          "title": "थोक गड्डी/बोरी और 1 किलो के खुदरा रेट में अंतर का गणित",
          "paragraphs": ["उपभोक्ताओं को अक्सर लगता है कि मंडी में हरा धनिया ₹20 किलो बिका तो शहर के ठेलों पर 1 किलो हरी धनिया की कीमत या धनिया का भाव 1kg ₹60 से ₹80 क्यों है? इसके पीछे 3 ठोस कारण हैं:"],
          "items": [
            "सड़न और पानी छिड़काव का नुकसान (Spoilage & Loss): धनिया सबसे तेजी से गलने वाली फसल है। मंडी से दुकान तक पहुंचते-पहुंचते और रातभर रखने में 15% से 25% पत्तियां पीली पड़कर या गलकर कचरे में चली जाती हैं।",
            "वजन की घटत: हवा लगने पर हरी पत्तियां तेजी से नमी छोड़ती हैं, जिससे उनका वजन प्राकृतिक रूप से घट जाता है। दुकानदार को तरोताजा रखने के लिए बार-बार पानी छिड़कना पड़ता है, फिर भी वास्तविक पत्तियों का वजन कम हो जाता है।",
            "गड्डी (बंडल) की बंधाई और मजदूरी: थोक में धनिया बोरियों या टोकनों में तौलकर मिलता है, जबकि फुटकर में व्यापारी को 50-100 ग्राम की छोटी-छोटी गड्डियां बांधनी पड़ती हैं, जिसमें अतिरिक्त समय और लेबर लगती है।"
          ],
          "ordered": true
        },
        {
          "title": "मंडी में सबसे ऊंची बोली पाने के 4 व्यावहारिक टिप्स",
          "items": [
            "तुड़ाई का सही समय (सुबह या देर शाम): तेज धूप में धनिया की कटाई कभी न करें। धूप में कटी पत्तियां तुरंत मुरझा जाती हैं और बोरी में भरते ही अंदर से गर्म होकर काली पड़ने लगती हैं।",
            "पीली और गली पत्तियों की छंटाई: खेत से कटाई के तुरंत बाद नीचे की सड़ी, पीली या मिट्टी लगी पत्तियों को निकाल दें। एक समान हरी और साफ गड्डियों को देखकर खरीदार तुरंत ऊंची बोली लगाते हैं।",
            "हवादार जालीदार बोरियां (Jali Bags): हरे धनिए को कभी भी प्लास्टिक के बंद कट्टों में न दबाएं। हवादार जाली या बांस के टोकनों (Carrots/Baskets) में गीली बोरी की हल्की परत लगाकर माल पैक करें ताकि हवा का संचार बना रहे।",
            "स्थानीय और बाहरी मंडियों के रेट की तुलना: माल मंडी भेजने से पहले अपनी नजदीकी मंडी के साथ-साथ राज्य की बड़ी थोक मंडियों के दैनिक मॉडल भाव और आवक के रुख पर नजर जरूर रखें।"
          ],
          "ordered": true
        },
        {
          "paragraphs": ["हरा धनिया का बाजार पूरी तरह ताजा माल, पत्तियों के गहरे हरे रंग और मौसम की परिस्थितियों पर टिका होता है। उचित समय पर कटाई, साफ-सुथरी ग्रेडिंग और बाजार के सटीक उतार-चढ़ाव को समझकर बिक्री करने से किसान भाई अपनी फसल का सर्वोत्तम और अधिकतम मुनाफा हासिल कर सकते हैं।"]
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
      "title": "सुआ (सिंधी सुआ) मंडी भाव आज: मेड़ता, ऊंझा, राजकोट मंडी रेट प्रति क्विंटल",
      "paragraphs": [
        "राम राम किसान भाइयों!",
        "देशभर की मसाला व कृषि उपज मंडियों में सुआ (Dill Seeds) एक अत्यधिक महत्वपूर्ण, औषधीय और नकदी मुनाफा देने वाली प्रमुख मसाला फसल है। क्षेत्रीय बोलचाल और व्यापारिक भाषा में इसे अलग-अलग स्थानों पर सुवा, सोआ, सवा या सिंधी सुआ के नाम से जाना जाता है। अंतरराष्ट्रीय स्तर पर और अंग्रेजी व्यापार जगत में इसे Dill Seeds / Suva Seeds तथा इसकी ताजी हरी पत्तियों को Dill leaves (सुवा भाजी) कहा जाता है। पश्चिमी भारत में राजस्थान का नागौर जिला और विशेष रूप से मेड़ता मंडी, जोधपुर, बीकानेर, बाड़मेर तथा गुजरात की प्रमुख मसाला मंडियां जैसे ऊंझा, राजकोट और गोंडल, सिंधी सुआ के व्यापार के सबसे बड़े केंद्र माने जाते हैं। घरेलू रसोई, आयुर्वेदिक दवा निर्माण, खाद्य प्रसंस्करण और अंतरराष्ट्रीय निर्यात में भारी खपत होने के कारण मंडियों में सुआ के दैनिक भावों पर किसानों, स्थानीय आढ़तियों और निर्यातकों की सालभर गहरी नजर रहती है।"
      ],
      "sections": [
        {
          "title": "सुआ (सोआ) का बहुआयामी बाजार और दोहरी मांग",
          "paragraphs": [
            "सुआ एक ऐसी अनोखी उपज है जिसका बाजार दो पूरी तरह अलग-अलग व्यापारिक स्तरों पर संचालित होता है:"
          ],
          "items": [
            "हरी पत्तियां व भाजी (Suva / Dill Leaves): स्थानीय सब्जी मंडियों में सुवा की ताजी हरी पत्तियों की मांग सर्दियों और बसंत में चरम पर रहती है। अपनी विशिष्ट सुगंध, पाचन सुधारने वाले औषधीय गुणों और पारंपरिक व्यंजनों में उपयोग के कारण सुवा की सब्जी आम उपभोक्ताओं के बीच काफी पसंद की जाती है। सब्जी उत्पादक किसान इसकी समय से कटाई कर दैनिक नकद आय प्राप्त करते हैं।",
            "सूखे बीज (सिंधी सुआ): मसाला, किराना और कमोडिटी मंडियों में असली बड़ा कारोबार सुआ के बीजों का होता है। सिंधी सुआ के सूखे बीजों का उपयोग मुख्य रूप से आयुर्वेदिक पाचन चूर्ण, ग्राइप वाटर, हर्बल तेल, अचार मसाला मिश्रण और माउथ फ्रेशनर (मुखवास) उद्योग में बड़े पैमाने पर कच्चे माल के रूप में किया जाता है।"
          ]
        },
        {
          "title": "सुआ का थोक क्विंटल भाव बनाम खुदरा प्रति किलो भाव",
          "paragraphs": [
            "थोक कृषि उपज मंडियों में सुआ का सौदा मुख्य रूप से प्रति क्विंटल के आधार पर तय होता है, जबकि खुदरा दुकानों, आयुर्वेदिक फार्मेसियों और ऑनलाइन ई-कॉमर्स प्लेटफॉर्म्स पर आम उपभोक्ता व कंपनियां इसे प्रति किलो (Dill Seeds price per kg) के ऊंचे खुदरा भाव पर खरीदती हैं। जब किसान सीधे प्राथमिक थोक मंडी में अपनी साफ उपज पेश करते हैं, तो उन्हें बिचौलियों के बिना सीधे बेहतर दाम मिलते हैं।"
          ]
        },
        {
          "title": "सिंधी सुआ के मंडी भाव तय करने वाले प्रमुख व्यापारिक मानक",
          "paragraphs": [
            "मंडियों में सुआ का रेट केवल स्थानीय आवक से तय नहीं होता, बल्कि कई गुणवत्ता और बाजार मानकों पर निर्भर करता है:"
          ],
          "items": [
            "दाने की बनावट, रंग और बोल्डनेस: मंडी में सिंधी सुआ की ढेरी लगते ही व्यापारी सबसे पहले उसके दाने का आकार और प्राकृतिक रंग परखते हैं। हल्का हरापन लिए हुए सुनहरे, चमकदार, चपटे और बड़े (बोल्ड) दानों वाले लॉट को सबसे ऊपरी प्रीमियम भाव मिलता है। यदि दाना सिकुड़ा, अपरिपक्व या अत्यधिक धूप व मौसम से काला पड़ चुका हो, तो उसके भाव में भारी कटौती की जाती है।",
            "सफाई का स्तर (मशीन क्लीन बनाम सॉर्टेक्स ग्रेड): सुआ की कीमत में सफाई सबसे बड़ा कारक बनती है। खेत से सीधे निकले सामान्य माल में बारीक तिनके, डंठल और धूल होती है, जिसका भाव कम रहता है। इसके विपरीत, मशीन क्लीन (डबल छना हुआ) और सॉर्टेक्स (पूरी तरह कचरा व पत्थर रहित) माल को निर्यातक और बड़ी मसाला कंपनियां हाथों-हाथ सबसे ऊंची बोली लगाकर खरीदती हैं।",
            "प्राकृतिक तेल और सुगंध (Essential Oil Percentage): सिंधी सुआ की वास्तविक कीमत उसमें मौजूद वाष्पशील तेल (Dill Oil) और उसकी तीखी खुशबू में होती है। औषधि और हर्बल एक्सट्रैक्ट बनाने वाली औद्योगिक कंपनियां उन लाटों को प्राथमिकता देती हैं जिनमें तेल की मात्रा अधिक हो, और इसके लिए वे सामान्य मंडी भाव से अतिरिक्त प्रीमियम देने को तैयार रहती हैं।",
            "मेड़ता मंडी का व्यापारिक प्रभाव और मौसमी आवक: राजस्थान की मेड़ता मंडी पूरे देश में सिंधी सुआ के भावों का मुख्य पैमाना मानी जाती है। रबी फसल के बाद, यानी मार्च से मई के महीनों में जब नई फसल की कटाई होकर मंडियों में भारी आवक पहुंचती है, तब थोक भाव अपेक्षाकृत संतुलित स्तर पर रहते हैं। जैसे-जैसे पीक सीजन समाप्त होता है और मंडियों में दैनिक आवक घटती है, बाजार में स्टॉक की मांग बढ़ने से भावों में तेजी का रुख बन जाता है।",
            "वैश्विक निर्यात मांग और अंतरराष्ट्रीय आर्डर: भारत से सिंधी सुआ का बड़ा हिस्सा अमेरिका, यूरोप, खाड़ी देशों और दक्षिण-पूर्व एशिया में निर्यात किया जाता है। जब अंतरराष्ट्रीय स्तर पर विदेशी खरीदारों के टेंडर और सौदे खुलते हैं, तो घरेलू मंडियों में सुआ के भाव में तुरंत बड़ा उछाल देखने को मिलता है।"
          ]
        },
        {
          "title": "किसानों के लिए अधिकतम भाव और शुद्ध मुनाफा कमाने की रणनीति",
          "paragraphs": [
            "सुआ की फसल से अपनी मेहनत का पूरा मूल्य पाने के लिए तुड़ाई और बाजार प्रबंधन पर ध्यान देना जरूरी है:"
          ],
          "items": [
            "गहाई (थ्रेशिंग) का सटीक समय: सुआ के पौधों की कटाई तभी करें जब उनके छत्ते (Umbels) पूरी तरह पककर सुनहरे भूरे रंग के हो जाएं। अधिक कच्चा काटने से दाना सिकुड़ जाता है और जरूरत से ज्यादा पकाने पर खेत में दाने बिखरने का जोखिम रहता है।",
            "नमी नियंत्रण और सुरक्षित सुखाई: गहाई के बाद दानों को पक्के फर्श या तिरपाल पर फैलाकर अच्छी तरह सुखाएं। बीजों में बिल्कुल भी नमी नहीं रहनी चाहिए; नमी वाला माल बोरों में बंद होने पर फंगस पकड़ लेता है और दाना काला पड़ जाता है, जिससे मंडी में उसकी कीमत आधी रह जाती है।",
            "घर पर ही प्राथमिक छंटाई: मंडी ले जाने से पहले साधारण छलने से बारीक डंठल, सूखे पत्ते और मिट्टी अलग कर लें। साफ-सुथरी ढेरी देखकर आढ़तियों के बीच प्रतिस्पर्धा बढ़ती है और वे बिना किसी कटौती के उच्चतम भाव लगाते हैं।",
            "मेड़ता और ऊंझा मंडी के रुझानों पर नजर: माल बेचने से पहले मेड़ता मंडी और गुजरात के ऊंझा बाजार की दैनिक आवक और निर्यात रुझानों की जानकारी रखें। जब बाजार में तेजी का दौर हो, तभी अपनी उपज मंडी में उतारें ताकि आपको अपनी मेहनत का सर्वोत्तम मूल्य प्राप्त हो सके।"
          ]
        }
      ]
    },
    "sua-patti": {
      "title": "सुआ पत्ती (शेपू भाजी) मंडी भाव आज: आज़ादपुर, मुंबई APMC, पुणे रेट",
      "paragraphs": [
        "राम राम किसान भाइयों!",
        "देशभर की हरी सब्जी मंडियों और एपीएमसी (APMC) यार्ड्स में सुआ पत्ती (Dill leaves) एक बेहद संवेदनशील, विशिष्ट सुगंध वाली और दैनिक नकदी प्रवाह देने वाली प्रमुख पत्तेदार फसल है। क्षेत्रीय मंडियों और खानपान की आदतों के अनुसार इसे सुवा भाजी, सोआ का साग, सवा पत्ती और महाराष्ट्र-कर्नाटक के बाजारों में शेपू भाजी (Shepu Bhaji) या सब्बक्की के नाम से जाना जाता है। जहां उत्तर भारत की आजादपुर (दिल्ली), मुहाना (जयपुर) और दुबग्गा (लखनऊ) मंडियों में इसे मुख्य रूप से आलू-सोआ की सब्जी व साग के लिए थोक में खरीदा जाता है, वहीं पश्चिमी व दक्षिणी भारत की प्रमुख मंडियों—जैसे मुंबई एपीएमसी (वाशी), पुणे (गुलटेकड़ी व खडकी), नासिक और राहूरी में शेपू की दैनिक नीलामी बड़े पैमाने पर होती है। इसकी पत्तियां ताजी हालत में जितनी तेजी से बिकती हैं, डिहाइड्रेटेड (सूखी पत्तियों) और हर्बल एक्सट्रैक्ट उद्योग में भी इसकी मांग सालभर बनी रहती है।"
      ],
      "sections": [
        {
          "title": "सुवा पत्ती (शेपू/सोआ) का व्यापारिक ढांचा: गड्डी की नीलामी बनाम प्रति किलो का भाव",
          "paragraphs": [
            "हरी पत्तेदार सब्जियों की मंडियों में सुआ पत्ती का व्यापार दो अलग-अलग व्यापारिक इकाइयों में चलता है:"
          ],
          "items": [
            "थोक मंडियों में गड्डी (पेंडी) व क्विंटल का सौदा: महाराष्ट्र और गुजरात के एपीएमसी यार्ड्स में शेपू/सुवा भाजी का सौदा प्रति 100 गड्डी (पेंडी) या वजन के आधार पर प्रति क्विंटल तय किया जाता है। किसान आमतौर पर 150 से 250 ग्राम की गड्डियां बनाकर जालीदार कैरेटों में लाते हैं। थोक व्यापारी और उपभोग केंद्रों के दलाल पत्तियों के हरे रंग, ताजगी और वजन को देखकर 50 या 100 गड्डियों के पूरे लॉट पर एकमुश्त खुली बोली लगाते हैं।",
            "खुदरा मंडियों व क्विक-कॉमर्स में प्रति किलो और पैकेट भाव: स्थानीय सब्जी दुकानों, ठेलों और आधुनिक डिलीवरी प्लेटफॉर्म्स (जैसे Zepto, Blinkit या सुपरमार्केट्स) पर आम उपभोक्ता इसे 100 ग्राम से 250 ग्राम के पैकेट या प्रति किलो भाव से खरीदता है। थोक नीलामी दर और खुदरा कीमत के बीच स्थानीय परिवहन, मंडी आढ़त, पल्लेदारी और जल्दी मुरझाने के कारण होने वाली छीजत (Weight Loss) का मार्जिन जुड़ा होता है। जो किसान अपनी उपज को खेत से ही साफ करके और मानक वजन की गड्डियों में बांधकर लाते हैं, उन्हें व्यापारी बिना किसी वजन कटौती के शीर्ष भाव देते हैं।"
          ]
        },
        {
          "title": "सुआ पत्ती (शेपू भाजी) के मंडी भाव तय करने वाले प्रमुख व्यापारिक मानक",
          "paragraphs": [
            "हरी भाजी का जीवनकाल केवल कुछ घंटों से एक दिन का होता है, इसलिए मंडियों में इसके दाम इन बुनियादी गुणवत्ता मानकों से तय होते हैं:"
          ],
          "items": [
            "पत्तियों का प्राकृतिक हरापन और ताज़ा खिंचाव: मंडी में गाड़ी खाली होते ही खरीदार सबसे पहले पत्तियों की चमक और रंगत देखते हैं। चटक गहरा हरा रंग और सख्त पत्तियां प्रीमियम भाव दिलाती हैं। यदि पत्तियों पर पीलापन आ चुका हो, पानी की अधिकता से सड़न शुरू हो गई हो या वे मुरझा चुकी हों, तो भाव आधे से भी कम रह जाते हैं।",
            "डंठल की कोमलता बनाम कड़ापन: रसोई और होटल व्यापार में केवल पतले और मुलायम डंठल वाली सुवा पत्ती की ही मांग रहती है। यदि फसल की तुड़ाई सही समय पर की गई है और उसमें फूल (छत्ता) नहीं निकला है, तो वह सबसे ऊंची श्रेणी में बिकती है। फूल आने के बाद पत्तियां कड़वी और डंठल रेशेदार हो जाते हैं, जिसे व्यापारी रिजेक्ट लॉट में डाल देते हैं।",
            "जड़ों की सफाई और मिट्टी-खरपतवार से मुक्ति: खेत से उखाड़ते समय जड़ों में चिपकी गीली मिट्टी और बीच में शामिल घास-फूस माल का वजन तो बढ़ा देती है, लेकिन बोली के समय व्यापारी भारी कटौती करते हैं। साफ पानी में धुली हुई और जड़े तराशी हुई गड्डियों को छांटने में व्यापारियों का समय बचता है, जिससे वे उस पर सबसे ऊंची बोली लगाते हैं।",
            "मौसम का दबाव और दैनिक आवक का समीकरण: सर्दियों के महीनों में जब स्थानीय खेतों से भरपूर आवक मंडियों में उतरती है, तो थोक भाव प्रतिस्पर्धी रहते हैं। वहीं अधिक गर्मी, भारी बारिश या पाला पड़ने के समय जब खेतों से कटाई रुक जाती है और मंडियों में दैनिक आवक घटती है, तब शेपू/सुवा पत्ती के दाम तेजी से उछलकर रिकॉर्ड स्तर छू लेते हैं।",
            "हवादार पैकेजिंग का महत्व: प्लास्टिक के बंद कट्टों में भरकर लाया गया माल अंदरूनी गर्मी और भाप से काला पड़ जाता है। इसके विपरीत, प्लास्टिक की जालीदार क्रेट्स या बांस की हवादार टोकरियों में करीने से सजाकर लाई गई गड्डियां लंबी दूरी के सफर में भी ताजी बनी रहती हैं, जिससे खरीदार बिना संकोच ऊंची कीमत चुकाते हैं।"
          ]
        },
        {
          "title": "सब्जी उत्पादकों के लिए अधिकतम भाव पाने की व्यावहारिक रणनीति",
          "paragraphs": [
            "सुआ पत्ती से पूरा मुनाफा निकालने के लिए खेत से लेकर मंडी के चबूतरे तक का समय प्रबंधन सबसे अहम है:"
          ],
          "items": [
            "तुड़ाई का सटीक समय: सुवा पत्ती की कटाई हमेशा अलसुबह (सूरज निकलने से पहले) या देर शाम के समय करें। तेज धूप में तुड़ाई करने से पत्तियों की नमी तुरंत उड़ जाती है और वे मंडी पहुंचने से पहले ही मुरझा जाती हैं, जिससे वजन और भाव दोनों का नुकसान होता है।",
            "फूल खिलने से पहले कटाई: पौधों में फूल का छत्ता बनने से पहले ही पत्तियों की कटाई पूरी कर लें। फूल निकलने के बाद पत्तियों का तीखापन बिगड़ जाता है और मंडी में खरीदार कड़े डंठल देखकर बोली गिरा देते हैं।",
            "गड्डियों की सफाई और छंटाई: कटाई के तुरंत बाद पीली, सूखी या कीड़े लगी पत्तियों को अलग कर दें। साफ पानी का हल्का छींटा देकर एकसमान वजन (200 से 250 ग्राम) की गड्डियां सुतली से बांधें। एकसमान और साफ गड्डियों का लॉट देखते ही आढ़तियों के बीच प्रतिस्पर्धा बढ़ती है।",
            "हवादार क्रेट्स का उपयोग: गड्डियों को बंद बोरियों में दबाकर भरने से बचें, क्योंकि बंद बोरी के भीतर पैदा होने वाली गर्मी पत्तियों को कुछ ही घंटों में सड़ा देती है। जालीदार क्रेट्स का उपयोग करें ताकि हवा का आवागमन बना रहे।",
            "सुबह की पहली नीलामी में पहुंचना: थोक सब्जी मंडियों में सुबह 4 से 6 बजे के बीच सबसे अधिक खुदरा व्यापारी और होटल सप्लायर सक्रिय रहते हैं। अपनी गाड़ी समय पर मंडी में उतारें ताकि शुरुआती नीलामियों में माल रखकर दिन का सबसे ऊंचा और प्रतिस्पर्धी भाव हासिल किया जा सके।"
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
      "title": "हरी मटर के मंडी भाव को प्रभावित करने वाले कारक",
      "paragraphs": [
        "राम राम किसान भाइयों! सर्दियों के मौसम और रबी नकदी फसलों में हरी मटर (Green Peas) किसानों के लिए सबसे कम समय में बंपर मुनाफा देने वाली फसल मानी जाती है। शादी-ब्याह के सीजन, रोजमर्रा की रसोई, बड़े होटलों और फ्रोजन मटर (सफल मटर) बनाने वाली प्रोसेसिंग कंपनियों में इसकी अटूट मांग रहती है। मध्य प्रदेश और उत्तर प्रदेश के बुंदेलखंड बेल्ट से लेकर छत्तीसगढ़ की बिलासपुर मंडी और दंतेवाड़ा तक हरी मटर का थोक व्यापार बहुत बड़े पैमाने पर चलता है। किसान भाई और स्थानीय व्यापारी हर दिन यह जानने के लिए सक्रिय रहते हैं कि आज मंडियों में हरी मटर का क्या भाव चल रहा है, प्रमुख उत्पादक मंडियों में आवक की क्या स्थिति है और आने वाले दिनों में बाजार का रुख कैसा रहेगा।"
      ],
      "sections": [
        {
          "title": "बुंदेलखंड और मध्य प्रदेश: देश के सबसे बड़े मटर हब का असर",
          "paragraphs": ["हरी मटर के देशव्यापी थोक भाव तय करने में मध्य प्रदेश और उत्तर प्रदेश के बुंदेलखंड क्षेत्र की मंडियों का सबसे बड़ा दबदबा रहता है:"],
          "items": [
            "जबलपुर मंडी (मध्य प्रदेश): जबलपुर को देश में हरी मटर की राजधानी कहा जाए तो गलत नहीं होगा। मध्य प्रदेश में हरी मटर का भाव (Hari matar ka bhav MP) और जबलपुर मंडी में आज हरी मटर का क्या भाव है, इस पर पूरे उत्तर और दक्षिण भारत के व्यापारियों की नजर टिकी रहती है। जबलपुर से रोजाना सैकड़ों गाड़ियां दिल्ली, मुंबई, नागपुर, रायपुर, बिलासपुर (Bilaspur mandi hari matar ka rate) और दंतेवाड़ा (Dantewada hari matar ka bhav) तक भेजी जाती हैं।",
            "ललितपुर और महोबा मंडी (उत्तर प्रदेश): बुंदेलखंड की ललितपुर मंडी और महोबा कृषि उपज मंडी देश के सबसे प्रमुख मटर व्यापारिक केंद्रों में शामिल हैं। ललितपुर मंडी में आज हरी मटर का क्या रेट है और महोबा मंडी में आज हरे मटर का क्या भाव है, यह तय करता है कि कानपुर, लखनऊ और दिल्ली की आजादपुर मंडी में मटर किस स्तर पर खुलेगी।",
            "मोहनपुरा और क्षेत्रीय मंडियां: मोहनपुरा मंडी में मटर का भाव (Mohanpura Mandi matar ka bhav today) और आसपास के ग्रामीण संग्रह केंद्रों से माल सीधे बड़ी मंडियों में रूट होता है, जिससे स्थानीय स्तर पर प्रतिस्पर्धा बनी रहती है।"
          ]
        },
        {
          "title": "सबसे ज्यादा पैदावार देने वाली किस्में और उनका भाव पर असर",
          "paragraphs": ["मंडी में व्यापारी केवल ढेरी नहीं देखते, बल्कि फलियों की लंबाई, दानों की मिठास और दानों की संख्या के आधार पर बोली लगाते हैं:"],
          "items": [
            "एडवांटा जीएस-10 (GS-10): यदि किसान भाइयों के मन में सवाल है कि सबसे ज्यादा पैदावार देने वाली मटर कौन सी है, तो व्यावसायिक रूप से जीएस-10 आज सबसे लोकप्रिय किस्मों में शीर्ष पर है। इसकी फली 9 से 10 सेमी लंबी, गहरे हरे रंग की और 8 से 10 मीठे दानों से भरी होती है। गहरे रंग और दानों के वजन के कारण मंडियों में इस किस्म को सामान्य मटर से ₹5 से ₹10 प्रति किलो अधिक भाव मिलता है।",
            "आर्केल (Arkel) व अगेती किस्में (AP-3, पूसा प्रगति): यह किस्में 50 से 60 दिन में तैयार हो जाती हैं। अगेती बाजार पकड़ने के लिए यह सबसे बेहतरीन मानी जाती हैं, जिससे सीजन की शुरुआत में किसानों को रिकॉर्ड तोड़ रेट मिलते हैं।",
            "आजाद पी-1 व काशी नंदिनी: सब्जी मंडी और लंबी दूरी के परिवहन के लिए यह किस्में काफी मजबूत मानी जाती हैं, क्योंकि इनकी फलियां ट्रांसपोर्ट में जल्दी पीली नहीं पड़तीं।"
          ]
        },
        {
          "title": "हरी मटर का मौसमी चक्र: कब मिलती है भारी तेजी और कब आती है मंदी?",
          "paragraphs": ["हरी मटर के दाम पूरी तरह आवक के दबाव और तापमान पर निर्भर करते हैं:"],
          "items": [
            "शुरुआती अगेती उछाल (अक्टूबर से नवंबर): सीजन की शुरुआत में जब पंजाब, हिमाचल या अगेती बुवाई वाला माल मंडियों में आता है, तो आवक बहुत सीमित होती है। इस समय शादियों की मांग निकलने से थोक भाव ₹80 से ₹120 प्रति किलो और खुदरा में ₹150 प्रति किलो तक बिकते हैं।",
            "चरम आवक और मंदी का दौर (दिसंबर से जनवरी): जब जबलपुर, ललितपुर और महोबा बेल्ट की मुख्य फसल एक साथ टूटती है, तो मंडियों में ट्रकों की कतारें लग जाती हैं। भारी आवक के कारण थोक भाव ₹15 से ₹25 प्रति किलो के दायरे में आ जाते हैं।",
            "फ्रोजन मटर इंडस्ट्री का सहारा: जब बाजार में बंपर आवक से कीमतें नीचे आने लगती हैं, तब बड़ी फूड प्रोसेसिंग कंपनियां (जैसे सफल आदि) मटर छीलने और माइनस तापमान में फ्रीज करने के लिए भारी थोक खरीद शुरू करती हैं। इससे भाव एक निश्चित स्तर से नीचे नहीं गिरते और बाजार को सहारा मिलता है।"
          ]
        },
        {
          "title": "सूखे मटर का भाव (Sukhe Matar Ka Bhav): घाटे से बचने का विकल्प",
          "paragraphs": ["हरी मटर उगाने वाले किसानों के पास यह बड़ा लाभ होता है कि यदि किसी वर्ष मौसम खराब होने या मंडियों में अत्यधिक मंदी आने से हरी तुड़ाई का खर्च भी न निकल रहा हो, तो वे फसल को खेत में ही सूखने के लिए छोड़ सकते हैं।"],
          "items": [
            "पूरी तरह पकने के बाद इसकी कटाई करके सूखा मटर तैयार किया जाता है।",
            "सूखे सफेद और हरे मटर का उपयोग छोले-कुल्चे, चाट, नमकीन और दाल के रूप में सालभर होता है।",
            "सूखे मटर को किसान भाई सुरक्षित भंडारण (Storage) में रखकर ऑफ-सीजन में अच्छे भाव पर बेच सकते हैं।"
          ]
        },
        {
          "title": "थोक फली भाव और 1 किलो छीले हुए दाने के खुदरा रेट में अंतर",
          "paragraphs": ["उपभोक्ता अक्सर पूछते हैं कि जब मंडी में हरी मटर ₹20 किलो बिक रही है, तो खुदरा बाजार में छीले हुए दाने ₹70 से ₹80 प्रति किलो क्यों मिल रहे हैं? इसके पीछे का गणित:"],
          "items": [
            "छिलके का भारी वजन (Shelling Ratio): हरी मटर की फली में केवल 40% से 45% ही शुद्ध दाना निकलता है, जबकि 55% से 60% वजन छिलके का होता है। यानी 1 किलो शुद्ध दाना निकालने के लिए कम से कम सवा दो से ढाई किलो फली की जरूरत होती है।",
            "पसीजने और सड़न का नुकसान: फली बंद बोरी में रहने पर गर्मी छोड़ती है। 24 घंटे के सफर में 5% से 8% फलियां पीली पड़ जाती हैं या दाने अंकुरित होने लगते हैं।",
            "छिलाई और लेबर खर्च: खुदरा दुकानदार को हाथ से फली छीलने और छंटाई करने में अतिरिक्त मजदूरी लगानी पड़ती है।"
          ],
          "ordered": true
        },
        {
          "title": "मंडी में सबसे ऊंची बोली पाने के 4 व्यावहारिक सुझाव",
          "items": [
            "ओस सूखने के बाद ही तुड़ाई करें: सुबह खेत में अत्यधिक ओस या नमी के समय फलियां न तोड़ें। गीली फलियों को बोरी में पैक करने पर अंदर फंगस लगने और फलियों के काले पड़ने का खतरा रहता है। दोपहर से पहले सूखी फली तोड़ना सबसे सुरक्षित है।",
            "चपटी (बिना दाने वाली) फली अलग रखें: केवल पूरी तरह भरी हुई और कड़क फलियों की ही पैकिंग करें। आधी भरी या चपटी फलियों को अलग छांट लें, क्योंकि चपटी फली देखते ही व्यापारी पूरी ढेरी की बोली गिरा देते हैं।",
            "जालीदार बोरियों (Mesh Net Bags) का इस्तेमाल: हरी मटर को कभी भी प्लास्टिक के सीलबंद कट्टों में न भरें। हवादार लाल या हरी जालीदार बोरियों में 40-50 किलो की पैकिंग करें ताकि हवा लगती रहे और माल ताजा बना रहे।",
            "प्रमुख मंडियों के दैनिक मॉडल भाव पर नजर: माल गाड़ी में लोड करने से पहले जबलपुर, ललितपुर, इंदौर और आजादपुर जैसी बड़ी मंडियों के दैनिक मॉडल रेट और आवक का विश्लेषण जरूर करें।"
          ]
        },
        {
          "paragraphs": ["हरी मटर की बाजार दरें दैनिक आवक, मौसम के मिजाज और माल की ताजगी पर निर्भर करती हैं। सही समय पर तुड़ाई, साफ-सुथरी ग्रेडिंग और प्रमुख मंडियों के रुख को समझकर बिक्री करने से किसान भाई अपनी मेहनत का सबसे अच्छा और लाभकारी मूल्य प्राप्त कर सकते हैं।"]
        }
      ]
    },
    "gwarphali": {
      "title": "ग्वार फली के मंडी भाव को प्रभावित करने वाले कारक",
      "paragraphs": [
        "राम राम किसान भाइयों! भारतीय सब्जी मंडियों में ग्वार फली (Cluster Beans) एक ऐसी नकदी हरी सब्जी है, जो कम लागत और कम पानी में किसानों को तुरंत नकद मुनाफा देती है। राजस्थान (जोधपुर, सीकर, जयपुर, नागौर, बीकानेर), हरियाणा और गुजरात के किसानों के लिए ग्वार फली केवल पारंपरिक आहार नहीं, बल्कि सब्जी मंडियों में रोज की नकद कमाई का सबसे मजबूत जरिया है। अपनी सेहतमंद खूबियों, उच्च फाइबर और मधुमेह (शुगर) रोगियों के लिए उत्तम आहार होने के कारण शहरों के खुदरा बाजारों, होटलों और कैटरिंग कारोबार में हरी ग्वार फली की मांग सालभर लगातार बनी रहती है। यही कारण है कि किसान भाई और स्थानीय व्यापारी रोजाना यह जानने के लिए सक्रिय रहते हैं कि आज सब्जी मंडी में ग्वार फली कितने रुपए किलो है, प्रमुख मंडियों में ग्वार फली का ताजा रेट क्या चल रहा है और आने वाले दिनों में बाजार का रुख कैसा रहेगा।"
      ],
      "sections": [
        {
          "title": "ग्वार फली (हरी सब्जी) बनाम ग्वार दाना (गम उद्योग): किसानों के मन का भ्रम",
          "paragraphs": ["अक्सर किसान भाई और इंटरनेट पर सर्च करने वाले लोग 'हरी ग्वार फली' और 'सूखे ग्वार दाने' के बाजार में अंतर को लेकर भ्रमित हो जाते हैं। दोनों के खरीदार, मंडियां और भाव तय होने के नियम पूरी तरह अलग हैं:"],
          "items": [
            "हरी ग्वार फली (सब्जी मंडी व्यापार): यह कच्ची, कोमल और मुलायम फली होती है, जिसे पौधों से तोड़कर सीधे फल-सब्जी मंडियों (जैसे जयपुर मुहाना मंडी, जोधपुर भदवासिया मंडी या सीकर सब्जी मंडी) में दैनिक बोली पर बेचा जाता है। इसका भाव प्रति किलो या प्लास्टिक क्रेट के हिसाब से प्रतिदिन तय होता है।",
            "सूखा ग्वार दाना (अनाज मंडी व गम उद्योग): यह फसल को खेत में पूरा पकाने और सुखाने के बाद थ्रेशर से निकाला गया दाना होता है, जिसकी बिक्री अनाज मंडियों में प्रति क्विंटल होती है। इसका उपयोग ग्वार गम (Guar Gum) बनाने, पेट्रोलियम शेल गैस ड्रिलिंग और पशु आहार (ग्वार कोरमा/चूरी) के लिए होता है।",
            "\"ग्वार का भाव 30000 कब आएगा\" और 2026 का सच: साल 2012 में अमेरिकी शेल गैस बूम के दौरान सूखे ग्वार दाने का भाव सट्टेबाजी और अचानक आई वैश्विक मांग से ₹30,000 प्रति क्विंटल तक उछल गया था। आज भी किसान भाई अक्सर पूछते हैं कि ग्वार का भाव 30,000 कब आएगा या ग्वार का भाव कब बढ़ेगा 2026 में। हकीकत यह है कि अंतरराष्ट्रीय गम बाजार अब काफी स्थिर और रासायनिक विकल्पों पर आधारित हो चुका है। इसलिए सूखे दाने के किसी अवास्तविक सट्टे की उम्मीद में बैठने के बजाय, अगेती हरी ग्वार फली को सब्जी मंडी में बेचना किसानों को प्रति एकड़ कम समय में कहीं ज्यादा ठोस और सुरक्षित नकद मुनाफा दे जाता है।"
          ]
        },
        {
          "title": "किस्मों का गणित: देशी ग्वार फली बनाम हाइब्रिड फली का मंडी भाव",
          "paragraphs": ["सब्जी मंडी में आढ़ती और थोक खरीदार फली के छिलके, कोमलता और बीजों के उभार के आधार पर प्रीमियम तय करते हैं:"],
          "items": [
            "देशी ग्वार फली (पूसा नवबहार, पूसा सदाबहार, दुर्गापुरा सफेद): देशी किस्म की ग्वार फली पतली, चमकीली हरी, अत्यधिक मुलायम और बिना रेशे (Stringless) वाली होती है। पकाने में जल्दी गलने और बेहतरीन स्वाद के कारण गृहणियों और शहर के खुदरा खरीदारों की यह पहली पसंद होती है। सब्जी मंडी में देशी फली का भाव हमेशा हाइब्रिड से ₹15 से ₹30 प्रति किलो तक ऊंचा बिकता है।",
            "हाइब्रिड / मोटी फली वाली किस्में: इन फलियों का उत्पादन अधिक होता है और छिलका थोड़ा मोटा होता है। इनमें वजन ज्यादा बैठता है और ये 2 से 3 दिनों तक मुरझाती नहीं हैं। दूर-दराज की मंडियों में ट्रक भेजने वाले व्यापारी हाइब्रिड फली को अधिक पसंद करते हैं, हालांकि खुदरा बाजार में इसका भाव देशी से थोड़ा कम रहता है।",
            "कड़ी व दानेदार फली पर कटौती: अगर फली में दाना पक गया हो और तोड़ने पर धागा (रेशा) निकलता हो, तो व्यापारी उसे 'कड़क/बासी माल' घोषित कर देते हैं। ऐसी फली का भाव सीधे 50% से 60% तक कट जाता है।"
          ]
        },
        {
          "title": "राजस्थान की बेंचमार्क मंडियां: कहाँ से तय होता है ग्वार फली का रेट?",
          "paragraphs": ["राजस्थान देश में ग्वार का सबसे बड़ा उत्पादक राज्य है, और यहाँ की सब्जी मंडियों के भाव पूरे उत्तर भारत के बाजार को प्रभावित करते हैं:"],
          "items": [
            "जोधपुर मंडी (मंडोर / भदवासिया कृषि मंडी): मारवाड़ क्षेत्र का सबसे बड़ा व्यापारिक केंद्र होने के नाते जोधपुर मंडी में स्थानीय बाड़मेर, फलौदी, नागौर और जोधपुर ग्रामीण से बड़ी आवक होती है। पश्चिमी राजस्थान के दैनिक बाजार भाव की दिशा तय करने में जोधपुर मंडी की भूमिका सबसे अहम रहती है।",
            "सीकर मंडी (शेखावाटी बेल्ट): Gwar ka Bhav Today सीकर राजस्थान सर्च करने वाले किसान भाइयों के लिए सीकर, नीमकाथाना और चौमूं बेल्ट सब्जी उत्पादन का बड़ा गढ़ है। सीकर से दिल्ली आजादपुर मंडी और हरियाणा की मंडियों के लिए सीधी पिकअप गाड़ियां निकलती हैं, जिससे यहाँ का थोक भाव प्रतिस्पर्धी बना रहता है।",
            "जयपुर मुहाना मंडी: प्रदेश की सबसे बड़ी थोक फल-सब्जी मंडी होने के नाते मुहाना मंडी में राजस्थान के हर जिले के अलावा बाहरी राज्यों का माल भी आता है। यहाँ बनने वाला औसत मॉडल रेट अन्य सभी छोटी मंडियों का आधार बनता है।"
          ]
        },
        {
          "title": "ग्वार फली का मौसमी चक्र: कब मिलता है सबसे ऊंचा भाव?",
          "paragraphs": ["ग्वार फली के भाव में साल के अलग-अलग महीनों में भारी उतार-चढ़ाव देखा जाता है:"],
          "items": [
            "ग्रीष्मकालीन अगेती उछाल (अप्रैल से जून): यह ग्वार फली उत्पादक किसानों के लिए सबसे ज्यादा कमाई का समय होता है। भीषण गर्मी में जब अन्य हरी सब्जियों (जैसे भिंडी, तोरई, लौकी) की आवक कम होने लगती है, तब जायद (गर्मी) की अगेती ग्वार फली बाजार में उतरती है। इस दौरान थोक मंडियों में भाव ₹50 से ₹80 प्रति किलो और खुदरा में ₹100 प्रति किलो के पार पहुंच जाते हैं।",
            "मानसून और खरीफ की सामान्य आवक (अगस्त से अक्टूबर): बारिश के सीजन में बारानी (बिना सिंचाई वाले) खेतों में बड़े पैमाने पर ग्वार की प्राकृतिक फसल तैयार होती है। इस समय मंडियों में माल की भारी आवक होने से थोक भाव ₹15 से ₹25 प्रति किलो के सामान्य दायरे में आ जाते हैं।",
            "दीवाली और सहालग का समय (अक्टूबर अंत से दिसंबर): शादियों के सीजन में कैटरिंग और हलवाइयों द्वारा ग्वार फली व ढोकली के पारंपरिक व्यंजनों की मांग बढ़ने से बाजार में उठाव दोबारा मजबूत हो जाता है।"
          ]
        },
        {
          "title": "थोक मंडी भाव और 1 किलो खुदरा रेट में अंतर की वजह",
          "paragraphs": ["उपभोक्ता और नए किसान अक्सर पूछते हैं कि मंडी में ग्वार फली ₹20 से ₹25 किलो बिकी, लेकिन शहर की दुकानों और ठेलों पर 1 किलो ग्वार फली का दाम ₹50 से ₹60 क्यों चल रहा है? इसके पीछे 3 व्यावहारिक कारण हैं:"],
          "items": [
            "नमी सूखने से वजन का घटना: ग्वार फली तोड़े जाने के बाद तेजी से नमी छोड़ती है। 24 घंटे के भीतर 1 बोरी या क्रेट में 1 से 1.5 किलो वजन प्राकृतिक रूप से घट जाता है।",
            "छंटाई और वेस्टेज: फुटकर व्यापारी जब 20 किलो की बोरी खाली करता है, तो उसमें 2 से 3 किलो कड़ी, काली पड़ी या डंठल टूटी फलियां निकलती हैं जिन्हें छांटकर फेंकना पड़ता है।",
            "लोकल ट्रांसपोर्ट और मजदूरी: मुख्य थोक मंडी से शहर के अलग-अलग मोहल्लों तक लाने का टेम्पो भाड़ा, पल्लेदारी और दुकानदार का जोखिम मार्जिन जुड़ने से खुदरा रेट बढ़ जाता है।"
          ],
          "ordered": true
        },
        {
          "title": "मंडी में ग्वार फली का सबसे ऊंचा भाव पाने के 4 व्यावहारिक टिप्स",
          "items": [
            "सख्त तुड़ाई चक्र (3 से 4 दिन का अंतराल): पौधे पर फली को कभी भी ज्यादा दिन न छोड़ें। हर तीसरे या चौथे दिन कोमल अवस्था में ही तुड़ाई कर लें। बीज उभरने से पहले तोड़ी गई फली ही मंडी में 'सुपर क्वालिटी' की बोली दिलाती है।",
            "ओस सूखने के बाद या शाम को तुड़ाई: सुबह के समय खेत में भारी ओस होने पर फली न तोड़ें। गीली फलियों को बोरी में पैक करने से अंदर गर्मी बनती है, जिससे फलियों की सतह पर काले दाग पड़ जाते हैं। दोपहर बाद या शाम को सूखी फली तोड़ना सबसे सुरक्षित रहता है।",
            "हवादार जालीदार बोरियां (Net Mesh Bags) या क्रेट्स: ग्वार फली को कभी भी खाद या सीमेंट के प्लास्टिक कट्टों में न दबाएं। जालीदार लाल-हरी बोरियों या प्लास्टिक कैरट में पैक करने से हवा का संचार बना रहता है और फली 48 घंटे तक ताजी और चमकदार दिखती है।",
            "समान छंटाई (Grading): कच्ची-मुलायम फलियों को अलग रखें और गलती से टूटी हुई कड़ी या बड़ी फलियों को अलग लॉट में बेचें। दोनों को मिलाने पर व्यापारी पूरी ढेरी को कड़े माल के भाव पर तौलता है।"
          ],
          "ordered": true
        },
        {
          "paragraphs": ["हरी ग्वार फली का बाजार पूरी तरह फलियों की ताजगी, कोमलता और सही समय पर की गई तुड़ाई पर निर्भर करता है। प्रमुख उत्पादक मंडियों के दैनिक मॉडल भाव और बाजार के रुख को समझकर बिक्री करने से किसान भाई कम समय में अपनी उपज का सर्वाधिक मुनाफा हासिल कर सकते हैं।"]
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
      "title": "अमरूद के मंडी भाव को प्रभावित करने वाले कारक",
      "paragraphs": [
        "राम राम किसान भाइयों! भारतीय बागवानी और फल मंडियों में अमरूद (Guava) सबसे लोकप्रिय, पौष्टिक और किसानों को नियमित रूप से बंपर मुनाफा देने वाली प्रमुख नकदी फल फसल है। उत्तर प्रदेश (प्रयागराज/इलाहाबाद, बदायूं), राजस्थान (सवाई माधोपुर, जयपुर, जोधपुर) और मध्य प्रदेश के मालवा-निमाड़ क्षेत्र के उत्पादकों के लिए अमरूद केवल एक मौसमी फल नहीं, बल्कि सर्दियों की मजबूत आर्थिक रीढ़ है। घरेलू रसोई में ताजे फल के सेवन से लेकर जैम, जेली और फ्रूट जूस प्रोसेसिंग यूनिट्स तक अमरूद की जबरदस्त मांग रहती है। यही कारण है कि फल-सब्जी मंडियों में इसकी नीलामी हमेशा तेज रहती है और किसान भाई व फल विक्रेता रोजाना यह जानने के लिए उत्सुक रहते हैं कि आज अमरूद का क्या भाव है, 1 किलो अमरूद की कीमत क्या चल रही है और देश की प्रमुख थोक मंडियों में बाजार का रुख कैसा है।"
      ],
      "sections": [
        {
          "title": "अमरूद की प्रमुख किस्में: सफेदा, ताइवान पिंक और वीएनआर का मंडी में मुकाबला",
          "paragraphs": ["मंडी में व्यापारी और आढ़ती केवल ढेर की चमक देखकर बोली नहीं लगाते, बल्कि अमरूद की वैरायटी, फल के वजन और गूदे के रंग के आधार पर प्रीमियम भाव तय करते हैं:"],
          "items": [
            "सवाई माधोपुर व इलाहाबादी सफेदा (Allahabadi Safeda): राजस्थान के सवाई माधोपुर का अमरूद अपनी बेजोड़ मिठास, पतले छिलके और सफेद मक्खन जैसे गूदे के लिए पूरे उत्तर भारत में प्रसिद्ध है। पारंपरिक रूप से इलाहाबादी सफेदा और सवाई माधोपुर के अमरूद की मांग दिल्ली, जयपुर और जोधपुर की फल मंडियों में सबसे पहले निकलती है। इसका स्वाद उत्तम होने के कारण स्थानीय और खुदरा बाजारों में इसका उठान सबसे तेज रहता है।",
            "ताइवान पिंक और वीएनआर बिही (VNR Bihi - जंबो साइज): यह व्यावसायिक बागवानी की आधुनिक और सबसे ज्यादा मुनाफा देने वाली किस्में हैं। इनका फल आकार में बहुत बड़ा (300 ग्राम से लेकर 800 ग्राम तक), कम बीजों वाला और अंदर से हल्का गुलाबी होता है। कड़क छिलके और 7 से 10 दिनों की लंबी शेल्फ लाइफ के कारण बड़े शहरों के सुपरमार्केट्स और निर्यातकों द्वारा इस अमरूद की सबसे ऊंची बोली लगाई जाती है। मंडियों में ताइवान पिंक को सामान्य अमरूद से ₹15 से ₹30 प्रति किलो तक अधिक भाव मिलता है।",
            "लखनऊ सरदार (एल-49 / L-49): यह किस्म खुरदुरे छिलके, भरपूर मिठास और भारी पैदावार के लिए जानी जाती है। उत्तर प्रदेश और मध्य प्रदेश के बागों में इसका उत्पादन बड़े पैमाने पर होता है और थोक मंडियों में इसका औसत मॉडल भाव हमेशा स्थिर बना रहता है।"
          ]
        },
        {
          "title": "1 किलो में कितने अमरूद होते हैं और साइज ग्रेडिंग का गणित",
          "paragraphs": ["उपभोक्ताओं और फल उत्पादकों के बीच अक्सर यह सवाल रहता है कि 1 किलो में कितने अमरूद चढ़ते हैं? थोक मंडी की नीलामी और खुदरा बिक्री में फलों की संख्या उनके आकार (Size Grading) पर निर्भर करती है:"],
          "items": [
            "सुपर जंबो ग्रेड (ताइवान पिंक / वीएनआर): इस ग्रेड में 1 अमरूद का वजन 350 से 500 ग्राम या उससे अधिक होता है। यानी 1 किलो में केवल 2 से 3 अमरूद ही आते हैं। यह फल गिफ्ट हैंपर्स और बड़े मॉल्स में प्रीमियम दरों पर बिकता है।",
            "टेबल / मीडियम साइज (सफेदा व एल-49): दैनिक खान-पान के लिए सबसे पसंदीदा आकार, जिसमें 1 फल का वजन 150 से 250 ग्राम तक बैठता है। इस साइज में 1 किलो में 4 से 6 अमरूद चढ़ते हैं। खुदरा बाजार और ठेलों पर सबसे ज्यादा बिक्री इसी साइज की होती है।",
            "छर्री / छोटा साइज: 100 ग्राम से छोटे आकार वाले अमरूद, जिसमें 1 किलो में 7 से 10 अमरूद आते हैं। इन्हें मुख्य रूप से जैम-जूस प्रोसेसिंग फैक्ट्रियों द्वारा न्यूनतम थोक भाव पर उठाया जाता है।"
          ]
        },
        {
          "title": "अमरूद की 'बहार' और मौसमी चक्र: सर्दियों के अमरूद में रिकॉर्ड तेजी क्यों?",
          "paragraphs": ["अमरूद के पेड़ साल में दो से तीन बार फल देते हैं, लेकिन मंडी भाव में मौसम के अनुसार जमीन-आसमान का अंतर देखने को मिलता है:"],
          "items": [
            "बरसाती अमरूद (मृग बहार - जुलाई से सितंबर): मानसून के मौसम में पकने वाले अमरूद में पानी की मात्रा अधिक होती है, मिठास कम बैठती है और फल मक्खी (Fruit Fly) व कीड़े लगने का भारी जोखिम रहता है। जल्दी सड़ने के कारण व्यापारी बरसाती अमरूद पर जोखिम लेने से बचते हैं, जिससे थोक भाव साल के सबसे निचले स्तर पर रहते हैं।",
            "सर्दियों का अमरूद (हस्त बहार - नवंबर से फरवरी): अमरूद उत्पादक किसानों के लिए यह 'गोल्डन सीजन' होता है। रात की ठंडक और दिन की धूप से फल एकदम बेदाग, कड़क, रोगमुक्त और प्राकृतिक रूप से अत्यधिक मीठा तैयार होता है। इस मौसम में घरेलू मांग चरम पर होती है और दूर-दराज के राज्यों में परिवहन सुरक्षित रहता है, जिसके चलते सर्दियों में अमरूद का मंडी भाव आज का मॉडल रेट सबसे ऊंचे स्तरों पर पहुंचता है।"
          ]
        },
        {
          "title": "देश के प्रमुख अमरूद व्यापार केंद्र और मंडियों का कनेक्शन",
          "paragraphs": ["अमरूद के देशव्यापी बाजार भाव की दिशा तय करने में कुछ प्रमुख राज्यों की मंडियों की अहम भूमिका होती है:"],
          "items": [
            "सवाई माधोपुर और जोधपुर (राजस्थान): राजस्थान में अमरूद का मंडी भाव तय करने में सवाई माधोपुर की स्थानीय बागवानी बेल्ट सबसे आगे है। वहीं मारवाड़ क्षेत्र के सबसे बड़े वितरण केंद्र जोधपुर (फल और सब्जी) मंडी में पश्चिमी राजस्थान, गुजरात सीमा और उत्तर भारत से आने वाले अमरूद की दैनिक आवक से मजबूत व्यापार चलता है।",
            "उत्तर प्रदेश की मंडियां (प्रयागराज व पश्चिमी यूपी): उत्तर प्रदेश में अमरूद का मंडी भाव पूरे उत्तर भारत के रेट को प्रभावित करता है। प्रयागराज और कौशांबी बेल्ट से निकलने वाली गाड़ियों का रुख सीधे दिल्ली की आजादपुर मंडी और लखनऊ तक रहता है।",
            "मध्य प्रदेश की मंडियां: मध्य प्रदेश में अमरूद का मंडी भाव इंदौर, उज्जैन और भोपाल की थोक मंडियों की दैनिक आवक पर टिका होता है, जहां से माल महाराष्ट्र और दक्षिण भारत के शहरों के लिए भी लोड किया जाता है।"
          ]
        },
        {
          "title": "थोक कैरट (Crate) और 1 किलो के खुदरा रेट में अंतर की वजह",
          "paragraphs": ["किसान भाई अक्सर तुलना करते हैं कि जब मंडी में उनकी 20 किलो की क्रेट औसतन ₹25 से ₹35 प्रति किलो के थोक भाव में बिकी, तो शहर के बाजारों में 1 किलो अमरूद की कीमत ₹60 से ₹90 तक क्यों पहुंच जाती है? इसके पीछे 3 ठोस कारण हैं:"],
          "items": [
            "सॉफ्ट होने और दबने का नुकसान (Spoilage Loss): अमरूद पकने के बाद बहुत जल्दी नरम पड़ता है। क्रेट के नीचे दबे हुए 2 से 3 किलो फल यात्रा के दौरान पिचक जाते हैं या उन पर काले निशान पड़ जाते हैं, जिन्हें खुदरा दुकानदार को कौड़ियों के भाव बेचना पड़ता है।",
            "फोम नेट और सुरक्षित पैकेजिंग खर्च: प्रीमियम क्वालिटी अमरूद (जैसे ताइवान पिंक) को दाग-धब्बों से बचाने के लिए प्रत्येक फल पर फोम नेट की जाली लगाई जाती है। इस सुरक्षित पैकिंग और पल्लेदारी का खर्च प्रति किलो लागत को बढ़ा देता है।",
            "लोकल ट्रांसपोर्ट और खुदरा रिस्क: थोक मंडी से शहर के अलग-अलग चौराहों और कॉलोनियों तक लाने का टेम्पो भाड़ा और फल के बासी होने का जोखिम खुदरा व्यापारी अपने मार्जिन में जोड़कर चलता है।"
          ],
          "ordered": true
        },
        {
          "title": "मंडी में अमरूद का सबसे ऊंचा (प्रीमियम) भाव पाने के 4 व्यावहारिक सुझाव",
          "items": [
            "तुड़ाई की सही अवस्था (कच्चा-पक्का नियम): अमरूद को पेड़ पर पूरी तरह पीला पड़ने तक न छोड़ें। जब फल का गहरा हरा रंग हल्का होकर चमकदार हल्का हरा या पीलापन लेने लगे और फल कड़क हो, तभी तुड़ाई करें। यह कड़क अवस्था लंबी दूरी के परिवहन में सुरक्षित रहती है और मंडी पहुंचते-पहुंचते बेहतरीन रंग पकड़ती है।",
            "सुबह या शाम की ठंडी तुड़ाई: दोपहर की तेज धूप में अमरूद कभी न तोड़ें। धूप में तोड़ा गया फल अंदर से गर्म रहता है, जिससे कैरट में बंद होते ही वह तेजी से पसीजता है और उसके छिलके पर काले धब्बे आने लगते हैं।",
            "जालीदार क्रेट में पेपर या फोम की परत: प्लास्टिक कैरट में अमरूद भरते समय नीचे और किनारों पर अखबार की रद्दी या फोम की शीट जरूर लगाएं। इससे परिवहन के दौरान फल आपस में रगड़ नहीं खाते और छिलके की प्राकृतिक चमक जस की तस बनी रहती है।",
            "साइज के आधार पर सख्त छंटाई (Grading): मोटे, मध्यम और छोटे दागी अमरूद को कभी भी एक ही क्रेट में न मिलाएं। बड़े और एक समान आकार वाले लॉट को अलग पैक करें; खरीदार ऐसे लॉट को देखते ही बिना झिझक के सबसे ऊंची बोली लगाते हैं।"
          ],
          "ordered": true
        },
        {
          "paragraphs": ["अमरूद का थोक बाजार पूरी तरह फल की ताजगी, छिलके की चमक, कड़कपन और मौसम की अनुकूलता पर निर्भर करता है। अपने नजदीकी और राज्य की प्रमुख थोक मंडियों के दैनिक मॉडल भाव और आवक के रुख पर नजर रखकर समय पर माल निकालने से किसान भाई अपनी मेहनत का सबसे बेहतरीन और पूरा मुनाफा प्राप्त कर सकते हैं।"]
        }
      ]
    },
    "kela": {
      "title": "केला का भाव कैसे देखें और रेट किन बातों से बदलता है",
      "paragraphs": [
        "राम राम किसान भाइयों!",
        "देशभर की कृषि उपज मंडियों में केला (Banana) सबसे अधिक बिकने वाली और नकदी प्रवाह देने वाली प्रमुख बागवानी फसलों में से एक है। महाराष्ट्र के जलगांव व रावेर, मध्य प्रदेश के बुरहानपुर, गुजरात, आंध्र प्रदेश तथा उत्तर प्रदेश के लखीमपुर-खीरी व कोसी नगर के बाजारों में केले का दैनिक कारोबार करोड़ों रुपये में होता है। चाहे वह रसोई व चिप्स उद्योग के लिए कच्चा केला हो या सीधे उपभोग के लिए पका हुआ मीठा केला, इसकी निरंतर मांग बारह महीने बनी रहती है।"
      ],
      "sections": [
        {
          "title": "केले की मांग और अखिल भारतीय व्यापारिक बाजार",
          "paragraphs": [
            "केला देश का सबसे सुलभ और लोकप्रिय फल है, जिसका उपभोग हर वर्ग में नियमित होता है। शादी-ब्याह, त्योहारों, धार्मिक अनुष्ठानों और उपवास के दिनों में इसकी मांग में भारी उछाल दर्ज किया जाता है। इसके अलावा, खाद्य प्रसंस्करण उद्योग में कच्चे केले की मांग चिप्स, वेफर्स और पारंपरिक नमकीन बनाने के लिए लगातार बढ़ रही है। बुरहानपुर और जलगांव की थोक मंडियों में तय होने वाले दैनिक सौदे उत्तर भारत, दिल्ली-एनसीआर, पंजाब और बिहार की प्रमुख उपभोग मंडियों के खुदरा भाव तय करने में अहम भूमिका निभाते हैं।"
          ]
        },
        {
          "title": "केले के मंडी भाव तय करने वाले मुख्य व्यापारिक कारक",
          "paragraphs": [
            "मंडियों में केले के दाम केवल आवक पर नहीं, बल्कि कई व्यावहारिक और तकनीकी मानकों पर निर्भर करते हैं:"
          ],
          "items": [
            "किस्म और व्यावसायिक उपयोग (G-9, रोबस्टा): व्यावसायिक रूप से ग्रांड नैन (G-9) किस्म सबसे अधिक पसंद की जाती है। इसके घौद लंबे, एकसमान और छिलके से मजबूत होते हैं, जिससे लंबी दूरी के परिवहन में खराबी नहीं आती। उन्नत किस्मों को स्थानीय व देशी किस्मों की तुलना में सदैव प्रीमियम भाव मिलता है।",
            "कच्चा बनाम पका केला (उपयोग के आधार पर भाव): सब्जी मंडियों और चिप्स निर्माण इकाइयों में गहरे हरे, बिना पके और कड़े कच्चे केले की भारी मांग रहती है। वहीं आधुनिक पकाने वाले संयंत्र (Ethylene Ripening Chambers) केवल अच्छी तरह विकसित, परिपक्व और बेदाग घौदों की ही थोक खरीद ऊंची दर पर करते हैं।",
            "ग्रेडिंग, आकार और दाग-धब्बे: मंडी में बोली लगाते समय व्यापारी घौद के दानों (फिंगर्स) की लंबाई, मोटाई और छिलके की सफाई को सबसे पहले परखते हैं। परिवहन व कटाई के समय खरोंच या काले धब्बों से मुक्त माल को हमेशा शीर्ष भाव श्रेणी में रखा जाता है।",
            "मौसम, कटाई चक्र और स्थानीय आवक: तेज आंधी, बेमौसम बारिश या अत्यधिक ठंड के दिनों में जब बागों से कटाई प्रभावित होती है, तो मंडियों में आपूर्ति घटने से दाम तुरंत बढ़ जाते हैं। इसके विपरीत, पीक सीजन में जब कई राज्यों से एक साथ भारी आवक होती है, तो बाजार में हल्का दबाव देखा जाता है।",
            "अंतर्राज्यीय लोडिंग और परिवहन लागत: बुरहानपुर और महाराष्ट्र की मंडियों से उत्तर भारत की ओर चलने वाले ट्रकों की दैनिक संख्या और भाड़े की दरें भी स्थानीय मंडियों के अंतिम खरीद मूल्य पर सीधा असर डालती हैं।"
          ]
        },
        {
          "title": "केले का अधिकतम भाव पाने के लिए व्यावहारिक सुझाव",
          "paragraphs": [
            "केला एक संवेदनशील और जल्दी खराब होने वाला फल है, इसलिए इसकी सही कीमत पाना तुड़ाई और विपणन की सही रणनीति पर निर्भर करता है:"
          ],
          "items": [
            "सावधानीपूर्वक तुड़ाई: घौद को काटते समय जमीन पर गिरने से बचाएं और सीधे धूप में रखने के बजाय छायादार स्थान पर रखें, ताकि फल में कालापन न आए।",
            "ग्रेडिंग और छंटाई: कमजोर, छोटे या मुड़े हुए केलों को अलग कर लें। एकसमान आकार के केलों का लॉट बनाकर मंडी ले जाने से व्यापारियों की बोली ऊंची लगती है।",
            "व्यापारियों से निरंतर संपर्क: मंडी ले जाने से पहले स्थानीय आढ़तियों और अंतर्राज्यीय व्यापारियों से भाव का रुझान समझें, जिससे सही दिन और सही समय पर माल बेचकर बेहतर मुनाफा कमाया जा सके।"
          ]
        }
      ]
    },
    "seb": {
      "title": "सेब का भाव आज: पेटी रेट, किलो रेट और भाव बदलने के कारण",
      "paragraphs": [
        "राम राम किसान भाइयों!",
        "देशभर की फल मंडियों में सेब (Apple) सबसे अधिक नकदी प्रवाह और ऊंचा मुनाफा देने वाली प्रमुख बागवानी फसलों में सबसे आगे माना जाता है। उत्तर भारत की ठंडी वादियों यानी हिमाचल प्रदेश और जम्मू-कश्मीर के बागानों से टूटने वाला सेब जब देश के अलग-अलग राज्यों की कृषि उपज मंडियों में पहुंचता है, तो इसका दैनिक कारोबार करोड़ों रुपये का आंकड़ा पार कर जाता है। कश्मीर की सोपोर, श्रीनगर व कुलगाम मंडियों से लेकर हिमाचल प्रदेश की सोलन मंडी, शिमला, ढली और एशिया की सबसे बड़ी थोक फल मंडी आज़ादपुर (दिल्ली) तक, सेब की दैनिक आवक और व्यापारिक हलचल पर देशभर के फल व्यापारियों की नजर टिकी रहती है। मंडी में उतरने वाली प्रत्येक खेप का थोक मूल्य और स्थानीय खुदरा बाजार में आम उपभोक्ता तक पहुंचने वाली अंतिम दरें सीधे तौर पर उत्पादक किसानों की जेब और मुनाफा तय करती हैं।"
      ],
      "sections": [
        {
          "title": "सेब का व्यापारिक ढांचा: थोक पेटी बनाम प्रति किलो का भाव",
          "paragraphs": [
            "मंडी व्यापार की दुनिया में सेब की खरीद-फरोख्त दो मुख्य स्तरों पर काम करती है। थोक मंडियों में किसान और बड़े आढ़ती कभी भी किलो के तराजू पर सीधे मोलभाव नहीं करते, बल्कि वहां पूरा व्यापार प्रति पेटी (Carton/Box) के हिसाब से चलता है। मानक लकड़ी की पेटियों या आधुनिक टेलीस्कोपिक गत्ते के कार्टन में 20 से 24 किलोग्राम का वजन होता है, जबकि छोटी या हाफ पेटी में 10 से 12 किलोग्राम माल भरा जाता है।",
            "इसके विपरीत, जब वही माल स्थानीय फल विक्रेताओं, ठेलों और खुदरा दुकानों तक पहुंचता है, तो ग्राहक सीधे 1 किलो सेब की कीमत के आधार पर फल खरीदता है। थोक पेटी के कुल भाव और खुदरा में प्रति किलो की दर के बीच का यह अंतर मंडी आढ़त, लोडिंग-अनलोडिंग, भाड़ा, तुलाई और खुदरा व्यापारी के मुनाफे पर निर्भर करता है। जब किसान अपने माल की सख्त ग्रेडिंग करके उसे सही कार्टन में पैक करके मंडी में पेश करते हैं, तो व्यापारियों के बीच पेटी पर अधिकतम बोली लगाने की होड़ मच जाती है, जिसका सीधा आर्थिक लाभ किसान को मिलता है।"
          ]
        },
        {
          "title": "सेब के दैनिक मंडी भाव तय करने वाले प्रमुख व्यापारिक मानक",
          "paragraphs": [
            "मंडियों में सेब का भाव किसी एक नियम से तय नहीं होता, बल्कि इसके पीछे गुणवत्ता, आकार और बाजार की मांग से जुड़े कई ठोस मानक काम करते हैं:"
          ],
          "items": [
            "किस्म और बाजार में व्यावसायिक मांग: मंडी में सेब की किस्म सबसे पहला पैमाना होती है। पारंपरिक रॉयल डेलिशियस (Royal Delicious), रेड डेलिशियस और उन्नत विदेशी किस्में जैसे गाला (Gala), डार्क बैरन गाला और रेड वेलॉक्स की मंडियों में सबसे ज्यादा पूछ-परख रहती है। गहरे चटक लाल रंग, नैचुरल चमक और करारेपन से भरपूर किस्मों को हमेशा बाजार में सबसे ऊपरी प्रीमियम भाव मिलता है।",
            "साइज, ग्रेडिंग और काउंट (प्रति पेटी दाना): सेब की पेटी की असली कीमत उसके भीतर मौजूद दानों की एकसमान बनावट और काउंट (Count) पर टिकी होती है। सुपर लार्ज, लार्ज और मीडियम साइज के बेदाग फलों की पेटियां छोटे (स्मॉल या पिट्ठू) आकार के दानों की तुलना में दोगुने तक भाव पर बिकती हैं। यदि एक पेटी में सभी दाने बिल्कुल एक समान नाप के हों, तो व्यापारी बिना हिचकिचाहट के सबसे ऊंची बोली लगाते हैं।",
            "दाग-धब्बे, ओलावृष्टि और छिलके की चमक: पहाड़ी क्षेत्रों में बेमौसम ओलावृष्टि (Hailstorm) या तुड़ाई के दौरान हाथों के दबाव से फल पर लगे काले निशान भाव को तेजी से गिरा देते हैं। वहीं पेड़ से सीधे सुरक्षित तोड़े गए, बिना खरोंच वाले और प्राकृतिक वैक्स की चमक लिए हुए सेबों की मांग बड़े शहरों के मॉल और प्रीमियम फ्रूट स्टोर्स में सबसे ज्यादा रहती है।",
            "पैकेजिंग तकनीक और ट्रे-पैक की मजबूती: पुराने समय की लकड़ी की पेटियों की जगह अब यूनिवर्सल ग्रेडिंग कार्टन और ट्रे-पैक पैकेजिंग ने ले ली है। ट्रे में रखा फल लंबी दूरी के सफर में आपस में रगड़ नहीं खाता और न ही दबता है। दिल्ली, मुंबई, बेंगलुरु और कोलकाता जैसी दूरस्थ उपभोग मंडियों के खरीदार केवल मजबूत और सुरक्षित पैकेजिंग वाली पेटियों पर ही शीर्ष दाम लगाते हैं।",
            "मौसम चक्र और सस्ता सेब मिलने का समय: सेब की बंपर कटाई का मुख्य सीजन अगस्त से शुरू होकर नवंबर तक चलता है। इस अवधि के दौरान जब हिमाचल के निचले व ऊंचे इलाकों और कश्मीर घाटी से लाखों पेटियां एक साथ मंडियों में पहुंचती हैं, तब बाजार में भरपूर आवक होने के कारण थोक भाव सबसे प्रतिस्पर्धी और अपेक्षाकृत सस्ते स्तर पर रहते हैं। पीक सीजन समाप्त होते ही मंडियों में ताजा आवक कम हो जाती है और भाव दोबारा चढ़ने लगते हैं।",
            "सीए कोल्ड स्टोरेज (CA Store) और ऑफ-सीजन की तेजी: मुख्य सीजन खत्म होने के बाद दिसंबर से लेकर अगली गर्मियों तक देश का सेब व्यापार सीए (Controlled Atmosphere) कोल्ड स्टोर के भरोसे चलता है। जो किसान या व्यापारी अपनी उच्च गुणवत्ता वाली फसल को तुड़ाई के तुरंत बाद सस्ते में बेचने के बजाय आधुनिक कोल्ड स्टोर में सुरक्षित रख लेते हैं, वे ऑफ-सीजन में सीमित आपूर्ति का फायदा उठाकर दोगुने तक ऊंचे दामों पर अपना माल बेचते हैं।"
          ]
        },
        {
          "title": "बागवानों के लिए अधिकतम मुनाफा कमाने की व्यावहारिक रणनीति",
          "paragraphs": [
            "मंडी में अपनी फसल का सबसे ऊंचा भाव पाना केवल बाजार की किस्मत पर नहीं, बल्कि तुड़ाई और विपणन की सही रणनीति पर निर्भर करता है:"
          ],
          "items": [
            "तुड़ाई का सही समय: सेब को कभी भी जरूरत से ज्यादा कच्चा या बहुत अधिक पकने के बाद न तोड़ें। फल में 70 से 80 प्रतिशत प्राकृतिक लाल रंग उतरने और उसमें उचित मिठास (TSS) आने पर ही पेड़ से उतारें।",
            "सख्त छंटाई और ग्रेडिंग: पेड़ से उतरने के बाद कभी भी बड़ा, मध्यम और छोटा दाना एक साथ न भरें। अलग-अलग आकार के अनुसार अलग लॉट और अलग पेटी तैयार करें। दागी और चोटिल सेबों को मुख्य पेटी से बिल्कुल अलग कर दें।",
            "मंडी का सही चुनाव और आढ़तियों से तालमेल: अपनी नजदीकी प्राथमिक मंडी जैसे सोलन या शिमला के अलावा देश की बड़ी टर्मिनल मंडियों (जैसे आज़ादपुर मंडी दिल्ली) के थोक आढ़तियों और पंजीकृत व्यापारियों से दैनिक आवक का हाल जानें। जिस मंडी में उस समय माल की कमी और मांग ज्यादा हो, वहीं अपनी गाड़ी लोड करके भेजें।",
            "मौसम का पूर्वानुमान देखकर लोडिंग: भारी बारिश, लैंडस्लाइड या राष्ट्रीय राजमार्गों के जाम होने की स्थिति में गाड़ियां रास्ते में फंसने से फल की गुणवत्ता गिर जाती है। हमेशा मौसम और सड़क मार्ग की स्थिति की पुष्टि करने के बाद ही माल रवाना करें ताकि उत्पाद ताजी हालत में मंडी पहुंचे और सबसे ऊंचा भाव दिला सके।"
          ]
        }
      ]
    },
    "anar": {
      "title": "अनार मंडी भाव आज: जीवाणा, नासिक, सोलापुर मंडी रेट (पेटी व किलो)",
      "paragraphs": [
        "राम राम किसान भाइयों!",
        "देशभर के फल बाजारों और कृषि उपज मंडियों में अनार (Pomegranate) सबसे अधिक मुनाफा देने वाली और नकदी प्रवाह वाली बागवानी फसलों में शीर्ष स्थान रखता है। महाराष्ट्र के सोलापुर व नासिक अनार मंडी से लेकर राजस्थान के पश्चिमी अंचल—जालौर, बाड़मेर, सांचौर और जोधपुर तक—अनार की दैनिक खरीद-फरोख्त पर पूरे देश के बड़े फल व्यापारियों की नजर टिकी रहती है। विशेष रूप से राजस्थान की सबसे बड़ी अनार मंडी के रूप में उभरी जीवाणा अनार मंडी में आज अनार का क्या भाव है, यह जानने के लिए स्थानीय बागवानों से लेकर दिल्ली, पंजाब, हरियाणा, गुजरात और दक्षिण भारत के आढ़ती बेहद उत्सुक रहते हैं। थोक स्तर पर तय होने वाला पेटी का भाव और उपभोग केंद्रों पर प्रति किलो की दरें किसानों की वास्तविक कमाई का मुख्य आधार बनती हैं।"
      ],
      "sections": [
        {
          "title": "अनार का बाजार तंत्र: थोक पेटी बनाम खुदरा प्रति किलो का गणित",
          "paragraphs": [
            "थोक मंडियों और खुदरा दुकानों में अनार का व्यापार दो अलग-अलग व्यापारिक पैमानों पर काम करता है। नासिक, सोलापुर या जीवाणा जैसी प्रमुख प्राथमिक मंडियों में किसान जब अपनी उपज लाते हैं, तो व्यापारी मुख्य रूप से कार्टन या पेटी के हिसाब से मोलभाव करते हैं। मानक निर्यात और घरेलू गुणवत्ता की पेटियों में आमतौर पर 9 से 10 किलोग्राम या 12 से 14 किलोग्राम के हिसाब से पैकिंग की जाती है। प्रत्येक पेटी में फलों की गिनती (Counts) और वजन के आधार पर बोली तय होती है।",
            "इसके ठीक विपरीत, स्थानीय किराना और फल बाजारों में जब आम उपभोक्ता फल खरीदने पहुंचता है, तो लेनदेन 1 किलो अनार कितने रुपए का है के आधार पर तय होता है। थोक पेटी के कुल मूल्य और खुदरा में प्रति किलो के भाव के बीच आढ़त, मंडी टैक्स, लंबी दूरी का भाड़ा, तुलाई और खुदरा दुकानदार का मार्जिन जुड़ा होता है। जब किसान अपने माल की सटीक छंटाई करके उसे एकसमान वजन के मजबूत कार्टन में पैक करके मंडी में पेश करते हैं, तो व्यापारी बिना झिझक के उच्चतम बोली लगाते हैं, जिससे किसानों को सीधा आर्थिक लाभ मिलता है।"
          ]
        },
        {
          "title": "अनार के मंडी भाव तय करने वाले प्रमुख व्यापारिक मानक",
          "paragraphs": [
            "मंडियों में अनार की कीमत केवल आवक की संख्या पर नहीं, बल्कि कई जरूरी गुणवत्ता मानकों पर तय की जाती है:"
          ],
          "items": [
            "किस्म और बाजार में पूछ-परख (भगवा/सिंदूरी): व्यावसायिक रूप से भारत में 'भगवा' (जिसे सिंदूरी अनार भी कहा जाता है) किस्म की मांग सबसे अधिक है। गहरे सिंदूरी लाल रंग के छिलके, मुलायम बीज और चमकदार मीठे दानों (Arils) वाली किस्म को देश के सभी बड़े बाजारों और अंतरराष्ट्रीय निर्यात में सदैव प्रीमियम दाम मिलता है।",
            "साइज, वजन और ग्रेडिंग (A, B, C ग्रेड): अनार का भाव प्रति फल के वजन पर सबसे ज्यादा निर्भर करता है। 250 ग्राम से 400 ग्राम से अधिक वजन वाले बड़े, सुडौल फलों (सुपर साइज) को उच्चतम भाव श्रेणी में रखा जाता है। इसके मुकाबले 150 से 200 ग्राम वाले मध्यम और छोटे फलों की पेटियों के भाव में भारी अंतर देखने को मिलता है।",
            "दाग-धब्बे, तेला और छिलके की सफाई: फंगल इन्फेक्शन, तेला (Black Spot) या तुड़ाई व धूप से जले हुए छिलके वाले अनार की कीमत मंडी में तेजी से गिर जाती है। वहीं पूरी तरह बेदाग, साफ और प्राकृतिक चमक लिए हुए चिकने फलों को बड़े रिटेलर्स और निर्यातक सबसे पहली प्राथमिकता देते हैं।",
            "मौसम चक्र और सस्ता अनार मिलने का समय: अनार की तुड़ाई अलग-अलग बहारों (मृग, हस्त और आंबे बहार) के अनुसार होती है। जब राजस्थान के जालौर-बाड़मेर क्षेत्र और महाराष्ट्र के बागों से एक साथ भारी आवक मंडियों में उतरती है, तब थोक बाजारों में भरपूर आपूर्ति होने के कारण दाम काफी प्रतिस्पर्धी स्तर पर आ जाते हैं। वहीं जब आवक सीमित होती है, तो भाव तुरंत आसमान छूने लगते हैं।",
            "पैकेजिंग और लंबी दूरी का परिवहन: थर्माकोल नेटिंग और ट्रे-पैक कार्टन में पैक किए गए अनार लंबी दूरी के सफर में आपस में टकराते नहीं हैं और न ही दबते हैं। नासिक या जीवाणा से दिल्ली, कोलकाता और गुवाहाटी जैसे दूरस्थ शहरों के व्यापारी ऐसी मजबूत पैकेजिंग वाली पेटियों पर सबसे ऊंची बोली लगाते हैं।"
          ]
        },
        {
          "title": "किसानों के लिए अधिकतम भाव और मुनाफा पाने की ठोस रणनीति",
          "paragraphs": [
            "मंडी में अपनी मेहनत का सही मूल्य पाना सही तुड़ाई और चतुराई भरे विपणन पर निर्भर करता है:"
          ],
          "items": [
            "तुड़ाई की सही परिपक्वता: फल जब पेड़ पर पूरी तरह लाल सिंदूरी रंग पकड़ ले और उसके दाने पूरी मिठास से भर जाएं, तभी कटर की मदद से सावधानीपूर्वक डंठल काटकर तुड़ाई करें।",
            "कठोर ग्रेडिंग: बड़े, मध्यम और छोटे आकार के फलों को कभी एक साथ न भरें। दागी, चटके हुए और बेदाग फलों के अलग-अलग लॉट बनाएं। एकसमान साइज की पेटी देखकर आढ़ती तेजी से दाम बढ़ाते हैं।",
            "प्रमुख मंडियों के भावों की निगरानी: केवल स्थानीय मंडी पर निर्भर रहने के बजाय राजस्थान में जीवाणा मंडी और महाराष्ट्र में नासिक व सोलापुर मंडियों के दैनिक खरीद-बिक्री रुझानों पर नजर रखें।",
            "व्यापारियों और दलालों से सीधा संपर्क: गाड़ी लोड करने से पहले टर्मिनल मंडियों के भरोसेमंद आढ़तियों से दैनिक मांग की पुष्टि करें, ताकि माल सही समय पर पहुंचे और किसानों को अपनी उपज का सबसे बेहतरीन दाम हासिल हो सके।"
          ],
          "ordered": true
        }
      ]
    },
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
    { "q": "बारां मंडी के भाव क्या हैं?", "a": "बारां मंडी की सभी प्रमुख फसलों—जैसे लहसुन, सोयाबीन, सरसों, धनिया, गेहूं, चना और मक्का आदि—के उपलब्ध नवीनतम भाव इसी पेज पर ऊपर टेबल में दिए गए हैं। किसानों और व्यापारियों की सुविधा के लिए भाव रोज़ाना source से प्राप्त और हम यहाँ बारां कृषि उपज मंडी के उपलब्ध न्यूनतम और अधिकतम भाव अपडेट करते हैं। कृपया उपलब्ध नवीनतम भाव देखने के लिए पेज को थोड़ा ऊपर की तरफ स्क्रॉल करें।" },
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
    { "q": "राजस्थान की सबसे बड़ी जीरा मंडी कौन सी है?", "a": "राजस्थान में जीरे के व्यापार के लिए नागौर जिले की मेड़ता सिटी कृषि उपज मंडी और जोधपुर कृषि उपज मंडी सबसे बड़ी और प्रमुख मानी जाती हैं। पूरे प्रदेश और आस-पास के इलाकों से किसान अपना जीरा बेचने के लिए मुख्य रूप से इन्हीं मंडियों में आते हैं क्योंकि यहाँ जीरे की भारी आवक होती है और भाव भी अच्छे मिलते हैं। मेड़ता सिटी और जोधपुर सहित राजस्थान की सभी प्रमुख मंडियों के ताज़ा जीरा भाव आप हमारी वेबसाइट पर ऊपर टेबल में आसानी से देख सकते हैं।" }
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
    { "q": "नागौर मंडी सर्विसेस", "a": "नागौर कृषि उपज मंडी से जुड़ी सभी प्रमुख सर्विसेस और अपडेट्स, जैसे फसलों की दैनिक आवक, बाज़ार का रुझान और ताज़ा मंडी भाव हमारी वेबसाइट पर नियमित रूप से उपलब्ध कराए जाते हैं। source से रोज़ाना उपलब्ध नए रिकॉर्ड के अनुसार जीरा, ग्वार, मूंग, मोठ, सरसों और इसबगोल जैसी सभी प्रमुख फसलों के उपलब्ध नवीनतम और उपलब्ध भाव प्रदान करने की सर्विस देते हैं। नागौर मंडी की ताज़ा हलचल और न्यूनतम व अधिकतम भाव जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करके टेबल देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "moong": [
    { "q": "मूंग के भाव क्या हैं?", "a": "मूंग के उपलब्ध नवीनतम भाव हर दिन मंडी की आवक और फसल की गुणवत्ता के आधार पर बदलते रहते हैं। मूंग के उपलब्ध नवीनतम (न्यूनतम और अधिकतम) भाव जानने के लिए कृपया इसी पेज पर ऊपर दी गई टेबल देखें। हम किसानों और व्यापारियों की सुविधा के लिए source से रोज़ाना उपलब्ध नए रिकॉर्ड के अनुसार हमारी वेबसाइट पर मूंग और अन्य सभी प्रमुख फसलों के उपलब्ध भाव अपडेट करते हैं।" },
    { "q": "मूंग का भाव क्या है?", "a": "अगर आप ताज़ा मूंग का भाव जानना चाहते हैं, तो इसकी पूरी जानकारी ऊपर लिस्ट में दी गई है। मूंग की क्वालिटी (हल्का, मीडियम या बढ़िया) और मंडियों में उसकी डिमांड के हिसाब से हर दिन कीमतों में उतार-चढ़ाव देखने को मिलता है। हमने इसी पेज पर ऊपर की तरफ जो टेबल दी है, उसमें मूंग के सबसे सटीक और उपलब्ध भाव दर्ज किए गए हैं, ताकि किसानों और व्यापारियों को तुरंत सही जानकारी मिल सके। कृपया मंडी रेट देखने के लिए पेज को थोड़ा ऊपर की ओर स्क्रॉल करें।" },
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
    { "q": "पाटन जबलपुर मंडी भाव अरहर", "a": "पाटन कृषि उपज मंडी (जबलपुर, मध्य प्रदेश) में अरहर (तुअर) के ताज़ा बाजार भाव और आवक की पूरी जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई टेबल में उपलब्ध करा दी गई है। जबलपुर क्षेत्र की प्रमुख मंडी होने के नाते यहाँ अरहर की दैनिक आवक, दाने की क्वालिटी और नमी के आधार पर रेट तय होते हैं। पाटन मंडी में अरहर के न्यूनतम, अधिकतम और मॉडल भाव की विस्तृत जानकारी प्राप्त करने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और ताज़ा सूची देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
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
    { "q": "1 कुंटल गेहूं का आज का रेट क्या है?", "a": "सभी मंडियों में फसलों के मंडी भाव 1 कुंटल के भाव के रूप में ही दिखाए जाते है। ऊपर सारणी में आज के गेहूं के मंडी भाव है देख लें।" },
    { "q": "यूपी में गेहूं का आज का ताजा रेट क्या है?", "a": "उत्तर प्रदेश की विभिन्न कृषि उपज मंडियों में गेहूं के आज के ताज़ा बाजार भाव ऊपर सारणी में दर्ज किया गया है।" },
    { "q": "आज गेहूं का क्या भाव है?", "a": "देश की विभिन्न कृषि उपज मंडियों में आज गेहूं के ताज़ा बाजार भाव और आवक की विस्तृत जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई तालिका में उपलब्ध करा दी गई है।" },
    { "q": "1 कुंटल गेहूं कितने रुपए का है?", "a": "1 क्विंटल गेहूं की कीमत अलग-अलग कृषि मंडियों में उसकी क्वालिटी (जैसे शरबती, लोकवन, टुकड़ी या मिल क्वालिटी), दाने के आकार, चमक, नमी और दैनिक आवक के आधार पर तय होती है। विभिन्न राज्यों और स्थानीय कृषि उपज मंडियों में गेहूं के ताज़ा न्यूनतम, अधिकतम और मॉडल भाव की पूरी जानकारी इस पेज के सबसे ऊपर दी गई तालिका में उपलब्ध करा दी गई है। अपनी नजदीकी मंडी के ताज़ा रेट और बाजार का रुख जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और अपडेटेड लिस्ट देखें।" },
    { "q": "2026 में गेहूं का रेट क्या है?", "a": "देश की विभिन्न कृषि उपज मंडियों में 2026 के ताज़ा गेहूं भाव और दैनिक आवक की पूरी जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई तालिका (टेबल) में उपलब्ध करा दी गई है। मंडियों में गेहूं के रेट मुख्य रूप से उसकी किस्म (जैसे शरबती, लोकवन, मिल क्वालिटी या दड़ा), दाने की चमक, नमी और बाजार की मांग के आधार पर प्रतिदिन निर्धारित होते हैं। सभी प्रमुख राज्यों और स्थानीय मंडियों के आज के सटीक न्यूनतम, अधिकतम तथा मॉडल भाव जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और आज की अपडेटेड लिस्ट देखें।" },
    { "q": "1482 गेहूं का भाव", "a": "1482 गेहूं का भाव मंडी और उपलब्ध किस्म-रिकॉर्ड के अनुसार अलग हो सकता है। मंडीवार और किस्म-वार उपलब्ध रिकॉर्ड ऊपर दी गई तालिका में देखें।" },
    { "q": "देसी गेहूं का भाव", "a": "देसी गेहूं का एक ही मंडी भाव नहीं होता। मंडीवार और किस्म-वार उपलब्ध रिकॉर्ड ऊपर दी गई तालिका में देखें।" },
  ],
  "haldi": [
    { "q": "आज हल्दी मंडी में क्या भाव चल रहे हैं?", "a": "देश की प्रमुख कृषि उपज मंडियों में आज हल्दी के ताज़ा बाजार भाव और दैनिक आवक की पूरी जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई तालिका में उपलब्ध करा दी गई है। हल्दी के प्रमुख व्यापारिक केंद्रों (जैसे निजामाबाद, इरोड, सांगली, नांदेड़ और हिंगोली) में हल्दी के दाम मुख्य रूप से उसकी किस्म (जैसे फिंगर या गट्टा/बल्ब), रंग, कुरकुमिन (Curcumin) की मात्रा, नमी और घरेलू व मसाला कंपनियों की मांग के आधार पर तय होते हैं। विभिन्न मंडियों में आज के सटीक न्यूनतम, अधिकतम और मॉडल भाव (जिस भाव पर सबसे ज्यादा व्यापार हुआ) की विस्तृत सूची देखने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और आज की ताज़ा लिस्ट देखें।" }
  ],
  "haryana": [
    { "q": "हरियाणा की सबसे बड़ी मंडी कौन सी है?", "a": "हरियाणा की सबसे बड़ी अनाज मंडी कुरुक्षेत्र जिले के लाडवा (Ladwa) में स्थित है। लाडवा अनाज मंडी को न केवल हरियाणा की सबसे बड़ी, बल्कि एशिया की दूसरी सबसे बड़ी अनाज मंडी होने का दर्जा प्राप्त है। यहाँ मुख्य रूप से गेहूं, धान और अन्य फसलों की भारी मात्रा में आवक होती है और बड़े स्तर पर व्यापार किया जाता है। इसके अलावा, फल और सब्जियों के व्यापार के लिए हरियाणा के गन्नौर (सोनीपत) में भी एक बहुत बड़ी अंतरराष्ट्रीय बागवानी मंडी (International Horticulture Market) का निर्माण किया जा रहा है। लाडवा मंडी सहित हरियाणा की सभी प्रमुख कृषि उपज मंडियों के सटीक न्यूनतम, अधिकतम और मॉडल भाव (जिस रेट पर सबसे ज्यादा व्यापार हुआ हो) की पूरी जानकारी प्राप्त करने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और ताज़ा अपडेटेड लिस्ट देखें।" },
    { "q": "हरियाणा की सबसे बड़ी अनाज मंडी कौन सी है?", "a": "हरियाणा की सबसे बड़ी अनाज मंडी कुरुक्षेत्र जिले के लाडवा (Ladwa) में स्थित है। लाडवा अनाज मंडी को न केवल हरियाणा की, बल्कि पूरे एशिया की दूसरी सबसे बड़ी अनाज मंडी होने का गौरव प्राप्त है। इस मंडी में मुख्य रूप से गेहूं, धान (बासमती और अन्य किस्में) तथा अन्य अनाजों की भारी मात्रा में दैनिक आवक होती है और बड़े स्तर पर व्यापार किया जाता है। लाडवा मंडी सहित हरियाणा की सभी प्रमुख कृषि उपज मंडियों के सटीक न्यूनतम, अधिकतम और मॉडल भाव (वह भाव जिस पर मंडी में सबसे ज्यादा मात्रा में व्यापार हुआ हो) की पूरी जानकारी प्राप्त करने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और ताज़ा अपडेटेड लिस्ट देखें।" },
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
    { "q": "भिवानी मंडी का भाव क्या है?", "a": "भिवानी मंडी (हरियाणा) में सरसों, ग्वार, चना, गेहूं, बाजरा और कपास जैसी फसलों के ताज़ा न्यूनतम, अधिकतम और मॉडल भाव की सूची पेज के सबसे ऊपर दी गई टेबल में अपडेट कर दी गई है। सटीक रेट देखने के लिए कृपया पेज को ऊपर स्क्रॉल करें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" },
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
    { "q": "Unjha mandi bhav live", "a": "Are you searching for the most recent Unjha Mandi bhav? Unjha Krishi Upaj Mandi in Gujarat is widely recognized as Asia's largest spice market, receiving massive daily arrivals of jeera (cumin), saunf (fennel), isabgol (psyllium husk), and mustard. The daily commodity rates here are determined by domestic demand, international export requirements, and the overall quality of the produce. To stay informed about the exact minimum, maximum, and modal prices for all major crops arriving in Unjha, please scroll up to the top of this page and check the complete, updated daily price table." },
    { "q": "उंझा मंडी ताजा भाव", "a": "गुजरात की विश्व प्रसिद्ध उंझा कृषि उपज मंडी में ताज़ा बाजार भाव और फसलों के रेट की पूरी जानकारी इस पेज के सबसे ऊपरी हिस्से में दी गई टेबल में उपलब्ध करा दी गई है। उंझा मंडी विशेष रूप से जीरा, सौंफ, इसबगोल, अजवाइन, और सरसों जैसे मसालों और कृषि उत्पादों के बड़े पैमाने पर होने वाले व्यापार के लिए जानी जाती है। दैनिक मंडी आवक, घरेलू व अंतरराष्ट्रीय बाजार की मांग और उपज की गुणवत्ता के आधार पर तय हुए सटीक न्यूनतम, अधिकतम और मॉडल भाव जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और हमारी ताज़ा अपडेटेड लिस्ट चेक करें।" },
    { "q": "Unjha mandi shop ka bhav", "a": "एशिया की सबसे बड़ी मसाला मंडी, उंझा (गुजरात) में सौंफ (Fennel) के ताज़ा बाजार भाव और दैनिक आवक की विस्तृत जानकारी इस पेज के ऊपरी हिस्से में दी गई टेबल में उपलब्ध करा दी गई है। उंझा मंडी में सौंफ के दाम मुख्य रूप से उसके दाने के रंग, क्वालिटी (जैसे एक्स्ट्रा ग्रीन या सामान्य), नमी और घरेलू व अंतरराष्ट्रीय बाजार की मांग के आधार पर तय होते हैं। सौंफ के वर्तमान बाजार रुझान और सटीक न्यूनतम, अधिकतम तथा मॉडल भाव की पूरी लिस्ट देखने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें और हमारी ताज़ा अपडेटेड तालिका चेक करें।" }
  ],
  "aalu": [
    {
      "q": "आलू का भाव किस इकाई में दिखता है?",
      "a": "दुकान या सब्ज़ी बाज़ार में आलू का भाव ₹ प्रति किलो में बताया जाता है। जबकि भारत की मंडियों में आलू समेत ज़्यादातर फसलों का भाव आमतौर पर ₹ प्रति क्विंटल (1 क्विंटल = 100 किलो) में बताया जाता है।"
    },
    {
      "q": "यूपी में आलू का भाव today",
      "a": "आज उतर प्रदेश की विभिन्न मंडियों से आलू के भाव ऊपर सारणी में दिए गए है।"
    },
    {
      "q": "आलू का आज का होलसेल रेट क्या है?",
      "a": "आलू का आज का होलसेल रेट देश की मंडियों से ऊपर सारणी में हम रोज अपडेट करते है। ऊपर दो सारणी में आज और कल का मंडी भाव है।"
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
    { "q": "ग्वार फली का दूसरा नाम क्या है?", "a": "ग्वार फली को Cluster Beans और Guar Bean भी कहा जाता है। यह ग्वार के पौधे पर लगती है। इसी फली के अंदर का दाना ग्वार है। इससे सब्जी बनाई जाती है। देशी ग्वार की फलियों को बाद में सब्जी बनाने के लिए सुखाकर भी रखा जाता है।" },
    { "q": "ग्वार की फली खाने के क्या फायदे हैं?", "a": "ग्वार की फली में रेशा, कैल्शियम और आयरन होता है। यह पाचन, शुगर और हड्डियों के लिए अच्छी है।" },
    { "q": "ग्वार की फली कौन से महीने में बोई जाती है?", "a": "ग्वार की बुवाई गर्मी और बरसात के मौसम में होती है। उत्तर भारत में इसे जून से जुलाई में बोया जाता है, और गर्मी की फसल के लिए फरवरी से मार्च में भी बो सकते हैं।" }
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
    { "crop": "jeera", "q": "आज उंझा मंडी जीरा का क्या भाव है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "isabgol", "q": "आज उंझा मंडी में इसबगोल का क्या भाव है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "saunf", "q": "ऊंझा मंडी में आज वरियाली का क्या भाव है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "jeera", "q": "ऊंझा मंडी में जीरा का लाइव भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "isabgol", "q": "Isabgol unjha mandi bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "jeera", "q": "Unjha mandi jeera bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "saunf", "q": "ऊंझा मंडी वरियाली का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "isabgol", "q": "ऊंझा मंडी ईसब भाव आज", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "jeera", "q": "ऊंझा मंडी जीरा भाव आज का 2026", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ]
};

Object.assign(MB.dynamicMandiFaqs, {
  "nimbahera": [
    { "crop": "makka", "q": "निंबाहेड़ा मंडी में आज मक्के का क्या भाव है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "gehun", "q": "निंबाहेड़ा मंडी में गेहूं के क्या भाव चल रहे हैं?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "moongphali", "q": "निंबाहेड़ा मंडी में मूंगफली का आज का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "chana", "q": "Nimbahera Mandi chana bhav Today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "makka", "q": "निम्बाहेड़ा मंडी भाव आज का मक्का", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "soyabean", "q": "निम्बाहेड़ा मंडी भाव आज का सोयाबीन", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "gehun", "q": "निम्बाहेड़ा मंडी भाव आज का गेहूं", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "sarson", "q": "निम्बाहेड़ा मंडी भाव आज का सरसों", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "lahsun", "q": "निंबाहेड़ा मंडी लहसुन भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "patan": [
    { "crop": "gehun", "q": "आज पाटन मंडी में गेहूं का क्या रेट है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "urad", "q": "पाटन मंडी में उर्द का क्या रेट है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "moong", "q": "आज पाटन मंडी में मूंग का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "urad", "q": "पाटन मंडी भाव उड़द", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "moong", "q": "पाटन मंडी मूंग भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "makka", "q": "Patan mandi bhav today makka", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "moong", "q": "Patan mandi bhav Today moong", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "gehun", "q": "पाटन मंडी गेहूं का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "gehun", "q": "Patan mandi bhav today gehu", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "sarson", "q": "पाटन मंडी सरसों का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "jodhpur": [
    { "crop": "jeera", "q": "जोधपुर मंडी जीरे का क्या भाव है आज का?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "gehun", "q": "जोधपुर मंडी में गेहूं का आज का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "sarson", "q": "जोधपुर मंडी रायड़ा का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "jeera", "q": "जोधपुर मंडी जीरा भाव आज का", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "chana", "q": "Jodhpur Mandi chana Bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "sarson", "q": "जोधपुर मंडी सरसों का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "gwar", "q": "जोधपुर मंडी आज का भाव ग्वार", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "moth", "q": "जोधपुर मंडी आज का भाव मोठ", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "jaipur": [
    { "crop": "gehun", "q": "Bassi mandi gehun ka bhav", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "bajra", "q": "Bassi mandi bajra bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "chana", "q": "Bassi mandi chana ka bhav", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }, 
    { "crop": "sarson", "q": "Bassi mandi sarso ka bhav", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "nagaur": [
    { "crop": "moong", "q": "नागौर में मूंग का क्या भाव है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "नागौर मंडी में गेहूं का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "isabgol", "q": "नागौर मंडी आज का भाव इसबगोल", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "sarson", "q": "नागौर मंडी आज का भाव रायड़ा", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "नागौर मंडी आज का भाव गेहूं", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "jeera", "q": "नागौर मंडी आज का भाव जीरा", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "moong", "q": "नागौर मंडी आज का भाव मूंग", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "merta": [
    { "crop": "gwar", "q": "मेड़ता मंडी में आज ग्वार का क्या भाव है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "jeera", "q": "जीरा मेड़ता मंडी में क्या भाव है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "jeera", "q": "मेड़ता मंडी आज का भाव | जीरा", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "isabgol", "q": "मेड़ता मंडी इसबगोल का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gwar", "q": "मेड़ता मंडी आज का भाव ग्वार", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "sarson", "q": "मेड़ता मंडी सरसों का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "sarson", "q": "मेड़ता मंडी आज का भाव रायड़ा", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "nokha": [
    { "crop": "moth", "q": "मोठ का भाव नोखा मंडी", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "lunkaransar": [
    { "crop": "moth", "q": "लूणकरणसर मंडी का आज का मोठ का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "baran": [
    { "crop": "dhaniya", "q": "बारा मंडी में धनिया का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "dhan", "q": "आज बारान मंडी में धान का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "Baran Mandi Bhav today gehu", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "sarson", "q": "Baran Mandi sarso Bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "lahsun", "q": "बारां मंडी भाव लहसुन today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "dhan", "q": "Baran Mandi Dhan Bhav Today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "soyabean", "q": "Baran Mandi soyabean Bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "dhan", "q": "Baran Mandi Bhav today dhan 1718", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "makka", "q": "Baran mandi makka bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "bikaner": [
    { "crop": "gwar", "q": "आज बीकानेर में ग्वार का क्या भाव है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "bajra", "q": "बीकानेर मंडी में आज बाजरे का क्या भाव है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "moth", "q": "बीकानेर में मोठ का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "moong", "q": "मूंग का भाव बीकानेर मंडी", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gwar", "q": "बीकानेर मंडी आज का भाव ग्वार", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gwar", "q": "ग्वार का भाव आज बीकानेर 2026", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "kekri": [
    { "crop": "gehun", "q": "आज केकड़ी मंडी में गेहूं का क्या भाव है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "chana", "q": "आज केकड़ी में चना का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "sarson", "q": "Kekri mandi sarso bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "urad", "q": "Kekri Mandi Bhav Today urad", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "jeera", "q": "Kekri mandi jeera bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "केकड़ी मंडी में गेहूं का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "moong", "q": "Kekri mandi moong bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "moong", "q": "केकड़ी मंडी मूंग का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "beawar": [
    { "crop": "gehun", "q": "ब्यावर मंडी में गेहूं का आज का रेट क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "ब्यावर मंडी में गेहूं का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "chana", "q": "ब्यावर मंडी चना का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "kapas", "q": "ब्यावर मंडी कपास का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "merta": [
    { "crop": "gwar", "q": "मेड़ता मंडी ग्वार का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "ramganj": [
    { "crop": "soyabean", "q": "आज रामगंज मंडी में सोयाबीन का क्या भाव बिकी?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "dhaniya", "q": "रामगंज मंडी धनिया का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "shahabad": [
    { "crop": "gehun", "q": "शाहबाद मंडी में गेहूं का आज का रेट क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "panipat": [
    { "crop": "gehun", "q": "पानीपत मंडी में गेहूं का आज का रेट क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "bhiwani": [
    { "crop": "kapas", "q": "आज भिवानी, हरियाणा में कपास का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "sarson", "q": "Bhiwani mandi sarso Bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "chana", "q": "Bhiwani mandi chana bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gwar", "q": "Bhiwani mandi guar bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "Bhiwani mandi gehun ka bhav", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "bajra", "q": "Bhiwani मंडी भाव today bajra", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "sarson", "q": "Bhiwani mandi sarson ka bhav", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "sirsa": [
    { "crop": "dhan", "q": "सिरसा मंडी में आज धान का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "सिरसा में गेहूं का क्या रेट है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "kapas", "q": "आज सिरसा मंडी में कपास का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "sarson", "q": "Sirsa mandi bhav today sarso", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "chana", "q": "Sirsa mandi chana bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "hisar": [
    { "crop": "gehun", "q": "हिसार मंडी में गेहूं का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "kapas", "q": "हिसार, हरियाणा में आज कपास का क्या भाव है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "हिसार मंडी भाव टुडे गेहूं", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "sarson", "q": "Hisar Mandi sarso bhav Today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "chana", "q": "Hisar mandi bhav today chana", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "gondal": [
    { "crop": "lahsun", "q": "गोंडल में लहसुन का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "rajkot": [
    { "crop": "jeera", "q": "राजकोट मंडी में जीरा का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
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
    { "crop": "mirch", "variety": "Red", "unit": "kg", "q": "1 किलो मिर्च का क्या रेट है?", "a": "{dateLead}{label}: मॉडल भाव लगभग {kgModal} प्रति किलो है। मंडी-वार और खुदरा भाव अलग हो सकते हैं।" },
    { "crop": "mirch", "variety": "Red", "q": "गुंटूर में लाल मिर्च का आज का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "byadgi": [
    { "crop": "mirch", "varieties": ["Kaddi", "Dabbi", "Guntur"], "q": "Byadgi mirchi price", "a": "{dateLead}{mandi} में {crop} के किस्म-वार मॉडल भाव: {varietyPrices}। किस्म के अनुसार भाव अलग हैं।" },
    { "crop": "mirch", "variety": "Kaddi", "unit": "kg", "q": "Byadgi Chilli 1kg price", "a": "{dateLead}{label}: मॉडल भाव लगभग {kgModal} प्रति किलो है। मंडी-वार और खुदरा भाव अलग हो सकते हैं।" },
    { "crop": "mirch", "variety": "Dabbi", "unit": "kg", "q": "Dabbi Byadgi Chilli Price today", "a": "{dateLead}{label}: मॉडल भाव लगभग {kgModal} प्रति किलो है। मंडी-वार और खुदरा भाव अलग हो सकते हैं।" }
  ],
  "jodhpur": (MB.dynamicMandiFaqs["jodhpur"] || []).concat([
    { "crop": "gehun", "q": "गेहूं का भाव जोधपुर मंडी", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ]),
  "jaipur": (MB.dynamicMandiFaqs["jaipur"] || []).concat([
    { "crop": "gehun", "q": "गेहूं का भाव जयपुर मंडी", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ])
});

Object.assign(MB.dynamicMandiFaqs, {
  "kekri": (MB.dynamicMandiFaqs["kekri"] || []).concat([
    { "crop": "kalonji", "q": "Kekri mandi mein kalonji ka bhav", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ]),
  "beawar": (MB.dynamicMandiFaqs["beawar"] || []).concat([
    { "crop": "gehun", "q": "आज ब्यावरा मंडी में गेहूं का क्या भाव है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "sarson", "q": "ब्यावर मंडी रायड़ा का भाव", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ]),
  "merta": (MB.dynamicMandiFaqs["merta"] || []).concat([
    { "crop": "asaliya", "q": "मेड़ता मंडी आज का भाव असालिया", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ])
});

Object.assign(MB.dynamicMandiFaqs, {
  "adampur": [
    { "crop": "sarson", "q": "Adampur Mandi sarso bhav Today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "siwani": [
    { "crop": "sarson", "q": "Siwani mandi sarso bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ]
});

Object.assign(MB.dynamicMandiFaqs, {
  "goluwala": [
    { "crop": "kapas", "q": "Narma bhav today goluwala", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "neemuch": [
    { "crop": "chirayata", "cropHi": "चिरायता", "q": "नीमच मंडी में चिरायता का आज का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "chia", "cropHi": "चिया", "q": "नीमच मंडी चिया भाव आज का", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ]
});

Object.assign(MB.dynamicMandiFaqs, {
  "indore": (MB.dynamicMandiFaqs["indore"] || []).concat([
    { "crop": "gehun", "variety": "Lokwan", "q": "इंदौर मंडी लोकवन में गेहूं का आज का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "pyaz", "q": "Indore Mandi Bhav Today pyaj", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "lahsun", "q": "Indore Mandi bhav today lahsun", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "aalu", "q": "Indore mandi bhav today aalu", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ])
});

Object.assign(MB.dynamicMandiFaqs, {
  "mandsaur": (MB.dynamicMandiFaqs["mandsaur"] || []).concat([
    { "crop": "lahsun", "q": "मंदसौर में आज लहसुन का मंडी भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "soyabean", "q": "Mandsaur Mandi Bhav today soyabean", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "alsi", "q": "Mandsaur Mandi Bhav today alsi", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "lahsun", "q": "Mandsaur Mandi Bhav today lahsun", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "pyaz", "q": "Mandsaur Mandi Bhav today pyaj", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "type": "previous", "q": "Mandsaur mandi bhav yesterday", "a": "{dateLead}{mandi} मंडी की पिछली सारणी में फसलों का मध्य मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "Mandsaur mandi bhav gehu", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ])
});

Object.assign(MB.dynamicMandiFaqs, {
  "agra": [
    { "crop": "sarson", "q": "Agra mandi bhav today sarso", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "sarson", "q": "Agra mandi bhav sarso", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "sarson", "q": "Agra mandi sarso rate today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "til", "q": "Agra mandi til ka bhav", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "bajra", "q": "agra mandi bajra bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ]
});

Object.assign(MB.dynamicMandiFaqs, {
  "kanpur": [
    { "crop": "gehun", "q": "Kanpur mandi gehun ka bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "dhan", "q": "Kanpur mandi dhan ka bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "aalu", "q": "Kanpur mandi aalu ka bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "meerut": [
    { "crop": "gehun", "q": "Meerut mandi gehun ka bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "sarson", "q": "Meerut mandi sarso bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "aligarh": [
    { "crop": "sarson", "q": "Aligarh mandi sarso bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "dhan", "q": "Aligarh mandi dhan bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "Aligarh mandi gehun bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "bareilly": [
    { "crop": "dhan", "q": "Bareilly mandi dhan bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "Bareilly mandi gehun bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "lucknow": [
    { "crop": "aalu", "q": "Lucknow mandi aalu bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "tamatar", "q": "Lucknow mandi tamatar rate today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "pyaz", "q": "Lucknow mandi pyaj bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "mathura": [
    { "crop": "sarson", "q": "Mathura mandi sarso bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "Mathura mandi gehun bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "bajra", "q": "Mathura mandi bajra bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "hathras": [
    { "crop": "sarson", "q": "Hathras mandi sarso bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "Hathras mandi gehun bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "bajra", "q": "Hathras mandi bajra bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "gorakhpur": [
    { "crop": "dhan", "q": "Gorakhpur mandi dhan bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "Gorakhpur mandi gehun bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "muzaffarnagar": [
    { "crop": "gehun", "q": "Muzaffarnagar mandi gehun bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "dhan", "q": "Muzaffarnagar mandi dhan bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "hapur": [
    { "crop": "gehun", "q": "Hapur mandi gehun bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "dhan", "q": "Hapur mandi dhan bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "saharanpur": [
    { "crop": "dhan", "q": "Saharanpur mandi dhan bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "gehun", "q": "Saharanpur mandi gehun bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "aalu", "q": "Saharanpur mandi aalu bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ],
  "mainpuri": [
    { "crop": "aalu", "q": "Mainpuri mandi aalu bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "crop": "lahsun", "q": "Mainpuri mandi lahsun bhav today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
  ]
});

MB.dynamicCropFaqs = {
  "moong": [
    { "type": "per-kg", "q": "1 किलो मूंग का दाम क्या है?", "a": "{dateLead}{label}: मॉडल भाव लगभग {kgModal} प्रति किलो है। मंडी-वार और खुदरा भाव अलग हो सकते हैं।" },
    { "type": "mandi", "mandi": "jhunjhunu", "mandiHi": "झुंझुनू", "q": "झुंझुनू मंडी में मूंग का आज का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "type": "mandi", "mandi": "malpura", "mandiHi": "मालपुरा", "q": "Moong ka bhav malpura mandi", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "type": "mandi", "mandi": "jaipur", "mandiHi": "जयपुर", "q": "Moong Price in Jaipur Mandi today", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" },
    { "type": "per-kg", "q": "1 kilo mung ka bhav", "a": "{dateLead}{label}: मॉडल भाव लगभग {kgModal} प्रति किलो है। मंडी-वार और खुदरा भाव अलग हो सकते हैं।" },
    { "type": "per-kg", "q": "Moong rate today per kg", "a": "{dateLead}{label}: मॉडल भाव लगभग {kgModal} प्रति किलो है। मंडी-वार और खुदरा भाव अलग हो सकते हैं।" }
  ],
  "gehun": [
    { "type": "per-kg", "q": "गेहूं का भाव 1 kg", "a": "{dateLead}{label}: मॉडल भाव लगभग {kgModal} प्रति किलो है। मंडी-वार और खुदरा भाव अलग हो सकते हैं।" },
    { "type": "msp", "q": "Gehu ka bhav msp", "a": "{crop} का सरकारी MSP {msp} प्रति क्विंटल है। यह मंडी भाव नहीं है।" }
  ],
  "mirch": [
    { "type": "per-kg", "q": "1 किलो मिर्च का क्या रेट है?", "a": "{dateLead}{label}: मॉडल भाव लगभग {kgModal} प्रति किलो है। मंडी-वार और खुदरा भाव अलग हो सकते हैं।" },
    { "type": "per-kg", "q": "1 किलो सूखी मिर्च का भाव कैसे समझें?", "a": "{dateLead}{label}: मॉडल भाव लगभग {kgModal} प्रति किलो है। मंडी-वार और खुदरा भाव अलग हो सकते हैं।" }
  ],
  "gwarphali": [
    { "type": "per-kg", "q": "ग्वार फली का रेट क्या है?", "a": "{dateLead}{label}: मॉडल भाव लगभग {kgModal} प्रति किलो है। मंडी-वार और खुदरा भाव अलग हो सकते हैं।" }
  ],
  "pyaz": [
    { "type": "per-kg", "q": "1 किलो प्याज का रेट क्या है?", "a": "{dateLead}{label}: मॉडल भाव लगभग {kgModal} प्रति किलो है। मंडी-वार और खुदरा भाव अलग हो सकते हैं।" },
    { "type": "per-kg", "q": "1 किलो प्याज का आज का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव लगभग {kgModal} प्रति किलो है। मंडी-वार और खुदरा भाव अलग हो सकते हैं।" }
  ],
  "lahsun": [
    { "type": "per-kg", "q": "1 किलो लहसुन का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव लगभग {kgModal} प्रति किलो है। मंडी-वार और खुदरा भाव अलग हो सकते हैं।" }
  ]
};

Object.assign(MB.dynamicCropFaqs, {
  "gehun": (MB.dynamicCropFaqs["gehun"] || []).concat([
    { "type": "msp", "q": "गेहूं का रेट सरकारी", "a": "{crop} का सरकारी MSP {msp} प्रति क्विंटल है। यह मंडी भाव नहीं है।" }
  ])
});

MB.dynamicStateFaqs = {
  "gujarat": [
    { "type": "mandi-crop", "mandi": "rajkot", "crop": "jeera", "q": "राजकोट मंडी में जीरा का भाव क्या है?", "a": "{dateLead}{label}: मॉडल भाव {modal} प्रति क्विंटल है। न्यूनतम भाव {min} और अधिकतम भाव {max} है।" }
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
    { "q": "Dhamnod Mandi Bhav", "a": "धामनोद मंडी में कपास, सोयाबीन, गेहूं, मक्का और चना जैसी प्रमुख फसलों के हाजिर भाव क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई तालिका को देखें।" }
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
    { "q": "Mehsana apmc Market Price today in Gujarat", "a": "आज मेहसाणा मंडी के नवीनतम फसल भाव ऊपर तालिका में दिए हैं। फसल के नाम पर क्लिक करके दूसरी मंडियों के भाव भी देख सकते हैं।" }
  ],
  "indore": [
    { "q": "Indore Mandi Bhav", "a": "इंदौर मंडी में सोयाबीन, गेहूं, चना, मक्का, मसूर, प्याज और लहसुन जैसी प्रमुख फसलों के हाजिर भाव क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई तालिका को देखें।" },
    { "q": "इंदौर मंडी कंटेनर भाव", "a": "इंदौर मंडी में काबुली चना और अन्य प्रमुख जिंसों के कंटेनर भाव (जैसे क्वालिटी और काउंट के अनुसार) क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई तालिका को देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" },
    { "q": "डालर चने का कंटेनर रेट क्या है?", "a": "इंदौर मंडी में काबुली चना और अन्य प्रमुख जिंसों के कंटेनर भाव (जैसे क्वालिटी और काउंट के अनुसार) क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई तालिका को देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" },
    { "q": "Indore Mandi Bhav container", "a": "इंदौर मंडी में काबुली चना और अन्य प्रमुख जिंसों के कंटेनर भाव (जैसे क्वालिटी और काउंट के अनुसार) क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई तालिका को देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
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
    { "q": "मंदसौर मंडी भाव", "a": "मंदसौर कृषि उपज मंडी में सोयाबीन, लहसुन, मेथी और धनिया जैसी प्रमुख फसलों की भारी आवक बनी हुई है। उच्च गुणवत्ता वाले माल और स्थानीय बोली के आधार पर इनके दाम तय हो रहे हैं, जहाँ विशेषकर लहसुन और मसालों के कारोबार में तेजी देखने को मिल रही है। सटीक और उपलब्ध भाव के लिए ऊपर दी गई प्राइस लिस्ट देखें।" },
    { "q": "मंदसौर मंडी कब खुलेगी", "a": "मंदसौर कृषि उपज मंडी आमतौर पर सुबह के समय (करीब 8:30 या 9:00 बजे) नीलाम प्रक्रिया के साथ शुरू होती है। हालांकि, रविवार को, त्योहारों के दिनों या सरकारी अवकाश के अवसर पर मंडी बंद रहती है। सटीक समय और अवकाश की पुष्टि के लिए मंडी समिति की आधिकारिक सूचना या स्थानीय बाजार का शेड्यूल देखना सबसे सही रहता है। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" },
    { "q": "Mandsaur Mandi Bhav", "a": "Trading at the Mandsaur Agricultural Produce Market is currently active for key commodities such as soybean, garlic, coriander, and fenugreek. Prices are driven by local auction bids, daily arrivals, and the moisture or cleaning grade of the produce. Please refer to the live price table above for exact, up-to-date figures." }
  ],
  "neemuch": [
    { "q": "Neemuch Mandi bhav Today", "a": "Today at the Neemuch Agricultural Produce Market, key commodities like soybean, wheat, maize, and lentils are actively traded, alongside strong demand for specialty crops and spices such as garlic, coriander seeds, and isabgol. Prices are fluctuating based on daily arrivals, moisture levels, and local auction bids. Please check the live price table above for precise, up-to-date figures." },
    { "q": "नीमच मंडी का आज का भाव क्या है?", "a": "नीमच कृषि उपज मंडी में आज सोयाबीन, गेहूं और मक्का के साथ-साथ लहसुन, कलौंजी, इसबगोल और धनिया जैसी प्रमुख मसालों व औषधीय फसलों की अच्छी आवक बनी हुई है। बढ़िया क्वालिटी की लहसुन और चुनिंदा फसलों के दाम ऊंचे स्तर पर चल रहे हैं, जबकि अन्य जिंसों के रेट क्वालिटी और बोली के अनुसार तय हो रहे हैं। फसलों के उपलब्ध हाजिर रेट्स के लिए ऊपर दी गई मूल्य तालिका देखें।" },
    { "q": "नीमच मंडी में सबसे महंगा क्या बिकता है?", "a": "एशिया की प्रमुख कृषि और औषधि मंडियों में शुमार नीमच मंडी में सबसे महंगे बिकने वाले उत्पादों में अफीम का दाना (पोस्ट दाना) और चुनिंदा औषधीय जड़ी-बूटियाँ (जैसे सफेद मूसली और अकरकरा) शामिल हैं। अच्छी क्वालिटी का पोस्ट दाना और कुछ खास मसाले व जड़ी-बूटियाँ बाजार में सबसे ऊंचे दामों (कई बार प्रति क्विंटल हजारों से लाखों रुपए तक) पर बिकती हैं, क्योंकि यहाँ मसालों के साथ दुर्लभ औषधियों का भी बड़ा कारोबार होता है।" },
    { "q": "नीमच मंडी में कौन-कौन सी फसल बिकती है?", "a": "एशिया की सबसे बड़ी कृषि और औषधीय उपज मंडियों में से एक नीमच मंडी में मुख्य रूप से अनाज, तिलहन, मसाले और दुर्लभ जड़ी-बूटियों का बड़ा कारोबार होता है। यहाँ बिकने वाली प्रमुख फसलों में शामिल हैं:  अनाज और दलहन: गेहूं, मक्का, जौ, ज्वार, चना, मूंग, उड़द और मसूर।तिलहन फसलें: सोयाबीन, सरसों, मूंगफली, अलसी और तिल।  प्रमुख मसाले: धनिया, मेथी, अजवायन, कलौंजी, जीरा और लहसुन-प्याज।  औषधियाँ और विशेष फसलें: अफीम (सरकारी लाइसेंस के तहत), पोस्ट दाना (खसखस), ईसबगोल, अश्वगंधा, सफेद मूसली, चिया सीड्स, कालमेघ और विभिन्न जड़ी-बूटियाँ।" },
    { "q": "नीमच मंडी औषधि लिस्ट", "a": "एशिया की सबसे बड़ी औषधीय मंडियों में शुमार नीमच मंडी में कई तरह की जड़ी-बूटियाँ, आयुर्वेदिक जड़ें और पौधे बिकने आते हैं। यहाँ की प्रमुख औषधीय फसलों और जड़ी-बूटियों की सूची में ये नाम शामिल हैं:  प्रमुख जड़ें और कंद: अश्वगंधा, सफेद मूसली, शतावरी, अकरकरा और चित्रक जड़।औषधीय पौधे व पंचांग: गिलोय (डंडी व स्टेम), कालमेघ, चिरायता, ब्राह्मी और ममीजवा।  फल, बीज और छिलके: ईसबगोल, कौंच बीज, मुसकदाना, बहेड़ा, हरड़, आंवला (सूखा व उबला हुआ), अमालतास, और नींबू/संतरे के सूखे छिलके।पत्तियाँ व फूल: मोरिंगा (सहजन) की सूखी पत्तियाँ, नीम पत्ती, मेहंदी पत्ता, सूखी कश्मीरी व देसी गुलाब की पंखुड़ियाँ।" },
    { "q": "नीमच मंडी भाव", "a": "नीमच कृषि उपज मंडी में सोयाबीन, गेहूं और मक्का जैसी सामान्य फसलों के साथ-साथ लहसुन, धनिया, कलौंजी और ईसबगोल जैसे मसालों व औषधीय उत्पादों का अच्छा कारोबार चल रहा है। उच्च गुणवत्ता वाले माल और स्थानीय बोली के आधार पर इनके दाम तय हो रहे हैं, जहाँ विशेषकर औषधियों और मसालों की मांग मजबूत बनी हुई है। सटीक और उपलब्ध भाव के लिए ऊपर दी गई प्राइस लिस्ट देखें।" },
    { "q": "नीमच मंडी औषधि भाव", "a": "नीमच कृषि उपज मंडी में बिकने वाली औषधीय फसलों और जड़ी-बूटियों के सटीक उपलब्ध भाव आपके इस पेज पर ऊपर दिए गए हैं। आप उन्हीं रेट्स को देखकर ताजा बाजार की स्थिति जान सकते हैं।" },
    { "q": "नीमच मंडी कब खुलेगी", "a": "नीमच कृषि उपज मंडी में नीलामी का कार्य आमतौर पर सुबह के समय (लगभग 9:00 से 10:00 बजे के बीच) शुरू होता है। ध्यान रहे कि रविवार, प्रमुख त्योहारों और सरकारी अवकाश के दिनों में मंडी बंद रहती है। सटीक समय और अवकाश की पुष्टि के लिए आप मंडी समिति की आधिकारिक सूचना देख सकते हैं।" },
  ],
  "ratlam": [
    { "q": "रतलाम मंडी आज का भाव", "a": "रतलाम कृषि उपज मंडी में आज लहसुन, सोयाबीन, प्याज, गेहूं और काबुली चने का कारोबार मुख्य रूप से देखने को मिल रहा है। बढ़िया क्वालिटी की लहसुन और सोयाबीन के दाम ऊंचे स्तर पर बने हुए हैं, जबकि स्थानीय बोली और माल की गुणवत्ता के आधार पर हर जिंस के दाम अलग-अलग तय हो रहे हैं। फसलों के उपलब्ध हाजिर रेट्स के लिए ऊपर दी गई मूल्य तालिका देखें।" },
    { "q": "रतलाम मंडी कब खुलेगी", "a": "रतलाम कृषि उपज मंडी में नीलामी का कार्य आमतौर पर सुबह 8:00 से 9:00 बजे के बीच शुरू हो जाता है। ध्यान रखें कि रविवार, प्रमुख त्योहारों और सरकारी अवकाश के दिन मंडी में काम बंद रहता है। मंडी खुलने के सटीक समय और अवकाश की जानकारी के लिए मंडी समिति द्वारा जारी की गई आधिकारिक समय-सारणी देखना सबसे उचित रहता है।" },
  ]
};

