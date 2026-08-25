window.MB = window.MB || {};

MB.PRICE_DATE = "2026-08-25";
MB.LAST_UPDATED_DATE = "2026-08-26";
MB.BRAND_HI = "फसल भाव";
MB.BRAND_EN = "FasalBhav";
MB.GA_MEASUREMENT_ID = "G-WFENY16HN7";
MB.WA_GROUP = "https://chat.whatsapp.com/J6Q5UqZ86Q66sy0nRN3bt0";
MB.WA_JOIN_SHORT = "मुफ्त मंडी भाव";
MB.WA_JOIN = "मुफ्त मंडी भाव — WhatsApp ग्रुप जॉइन करें";

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
];

MB.crops = [
  { slug: "gehun", hi: "गेहूं", en: "Wheat", veg: false, msp: 2585 },
  { slug: "sarson", hi: "सरसों", en: "Mustard", veg: false, msp: 6200 },
  { slug: "chana", hi: "चना", en: "Gram", veg: false, msp: 5875 },
  { slug: "bajra", hi: "बाजरा", en: "Bajra", veg: false, msp: 2900 },
  { slug: "makka", hi: "मक्का", en: "Maize", veg: false, msp: 2410 },
  { slug: "narma", hi: "नरमा", en: "American / Bt Cotton", veg: false, msp: null },
  { slug: "kapas", hi: "देशी कपास", en: "Desi Cotton", veg: false, msp: null },
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
  { slug: "alsi", hi: "अलसी", en: "Linseed", veg: false, msp: null },
  { slug: "asaliya", hi: "असालिया", en: "Garden Cress", veg: false, msp: null },
  { slug: "kalonji", hi: "कलौंजी", en: "Nigella Seeds", veg: false, msp: null },
  { slug: "amrood", hi: "अमरूद", en: "Guava", veg: true, msp: null },
  { slug: "kela", hi: "केला", en: "Banana", veg: true, msp: null },
  { slug: "seb", hi: "सेब", en: "Apple", veg: true, msp: null },
  { slug: "anar", hi: "अनार", en: "Pomegranate", veg: true, msp: null },
];

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
];

MB.AGMARKNET_ALIASES = {
  "mandis": {},
  "crops": {
    "narma": ["Narma", "American Cotton", "Bt Cotton", "BT Cotton"],
    "kapas": ["Cotton", "Desi Cotton", "Kapas"],
    "dhan": ["Paddy(Common)"],
    "chana": ["Bengal Gram(Gram)(Whole)", "Kabuli Chana(Chickpeas-White)"],
    "moong": ["Green Gram(Moong)(Whole)"],
    "urad": ["Black Gram(Urd Beans)(Whole)"],
    "masoor": ["Lentil(Masur)(Whole)"],
    "gwar": ["Guar Seed(Cluster Beans Seed)"],
    "bajra": ["Bajra(Pearl Millet/Cumbu)"],
    "jowar": ["Jowar(Sorghum)"],
    "jau": ["Barley(Jau)"],
    "til": ["Sesamum(Sesame,Gingelly,Til)"],
    "jeera": ["Cummin Seed(Jeera)"],
    "isabgol": ["Isabgul(Psyllium)"],
    "asaliya": ["Asaliya", "Asalia", "Garden Cress", "Halim"],
    "kalonji": ["Kalonji", "Nigella Seeds", "Nigella"],
    "arhar": ["Red gram/Arhar/Tur(whole)"],
    "adrak": ["Ginger(Green)", "Ginger(Dry)"],
    "mirch": ["Chilli", "Chillies", "Chili"],
    "hari-mirch": ["Green Chilli", "Green Chillies"],
    "dhaniya": ["Corriander seed", "Coriander(Seed)"],
    "hara-dhaniya": ["Coriander(Leaves)"],
    "saunf": ["Soanf"],
    "sua": ["Dill", "Dill Seed", "Dill Seeds", "Sowa", "Suva"],
    "sua-patti": ["Dill Leaves", "Dill(Leaves)", "Sowa Leaves", "Suva Leaves", "Shepu"],
    "methi": ["Methi Seeds"],
    "hari-methi": ["Methi(Leaves)"],
    "arandi": ["Castor Seed"],
    "matar": ["Field Pea"],
    "hara-matar": ["Peas Wet", "Pea Pod/Pea Cod/हरी मटर"],
    "alsi": ["Linseed"]
  }
};

MB.prices = [
  { mandi: "sri-ganganagar", crop: "gehun", min: 2500, modal: 2531, max: 2540, vs: 0, arrivals: "high", date: "2026-08-25", fresh: true },
  { mandi: "jaipur", crop: "gehun", min: 2470, modal: 2585, max: 2700, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "kota", crop: "gehun", min: 2630, modal: 2630, max: 2630, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "indore", crop: "gehun", min: 1200, modal: 2708, max: 2976, vs: 0, arrivals: "high", date: "2026-08-25", fresh: true },
  { mandi: "ujjain", crop: "gehun", min: 2439, modal: 2515, max: 3025, vs: 0, arrivals: "low", date: "2026-08-25", fresh: true },
  { mandi: "gondal", crop: "gehun", min: 2455, modal: 2830, max: 3500, vs: 0, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "sarson", min: 7800, modal: 7800, max: 7800, vs: 0, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "baran", crop: "sarson", min: 7191, modal: 7525, max: 7890, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "sri-ganganagar", crop: "sarson", min: 7642, modal: 7642, max: 7642, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "indore", crop: "sarson", min: 6795, modal: 7500, max: 7500, vs: 0, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "indore", crop: "chana", min: 1405, modal: 7700, max: 8910, vs: 0, arrivals: "high", date: "2026-08-25", fresh: true },
  { mandi: "ujjain", crop: "chana", min: 3913, modal: 5661, max: 5662, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "kota", crop: "chana", min: 5450, modal: 5450, max: 5450, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jaipur", crop: "chana", min: 5822, modal: 5822, max: 5822, vs: 0, arrivals: "low", date: "2026-08-25", fresh: true },
  { mandi: "nagaur", crop: "bajra", min: 2050, modal: 2150, max: 2220, vs: 25, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "merta", crop: "bajra", min: 2030, modal: 2135, max: 2200, vs: 18, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "bikaner", crop: "bajra", min: 2000, modal: 2100, max: 2180, vs: 10, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jodhpur", crop: "bajra", min: 1980, modal: 2080, max: 2140, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jaipur", crop: "bajra", min: 1860, modal: 2005, max: 2151, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "sri-ganganagar", crop: "bajra", min: 2060, modal: 2160, max: 2230, vs: 12, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "deesa", crop: "bajra", min: 2325, modal: 2425, max: 2570, vs: 0, arrivals: "low", date: "2026-08-25", fresh: true },
  { mandi: "indore", crop: "makka", min: 2300, modal: 2453, max: 2453, vs: 0, arrivals: "high", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "makka", min: 1000, modal: 2400, max: 2400, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "kota", crop: "makka", min: 2050, modal: 2120, max: 2180, vs: 0, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "rajkot", crop: "makka", min: 2200, modal: 2280, max: 2350, vs: 30, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "rajkot", crop: "kapas", min: 8000, modal: 9250, max: 9500, vs: 0, arrivals: "high", date: "2026-08-25", fresh: true },
  { mandi: "amreli", crop: "kapas", min: 5500, modal: 9525, max: 10250, vs: 0, arrivals: "high", date: "2026-08-25", fresh: false },
  { mandi: "gondal", crop: "kapas", min: 5705, modal: 9005, max: 9805, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "indore", crop: "kapas", min: 6800, modal: 7100, max: 7450, vs: 0, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "gondal", crop: "moongphali", min: 5500, modal: 8080, max: 8080, vs: 0, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "amreli", crop: "moongphali", min: 4500, modal: 6625, max: 7000, vs: 0, arrivals: "high", date: "2026-08-25", fresh: false },
  { mandi: "rajkot", crop: "moongphali", min: 6450, modal: 7158, max: 7820, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "bikaner", crop: "moongphali", min: 5800, modal: 6050, max: 6280, vs: -15, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "deesa", crop: "moongphali", min: 5805, modal: 6500, max: 6605, vs: 0, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "unjha", crop: "jeera", min: 16000, modal: 19600, max: 23450, vs: 0, arrivals: "high", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "jeera", min: 15000, modal: 17500, max: 19650, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "nagaur", crop: "jeera", min: 16000, modal: 16650, max: 17200, vs: 50, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "merta", crop: "jeera", min: 16100, modal: 16780, max: 17350, vs: 70, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "unjha", crop: "isabgol", min: 14200, modal: 14800, max: 15100, vs: -100, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "merta", crop: "isabgol", min: 14050, modal: 14620, max: 14980, vs: -60, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "unjha", crop: "gwar", min: 5400, modal: 5650, max: 5800, vs: 30, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "nagaur", crop: "gwar", min: 5200, modal: 5480, max: 5700, vs: 20, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "merta", crop: "gwar", min: 5250, modal: 5520, max: 5740, vs: 25, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "bikaner", crop: "gwar", min: 6000, modal: 6000, max: 6000, vs: 0, arrivals: "low", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "gwar", min: 5150, modal: 5420, max: 5620, vs: 15, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "jaipur", crop: "gwar", min: 5559, modal: 5616, max: 5673, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "sri-ganganagar", crop: "gwar", min: 5320, modal: 5580, max: 5750, vs: 18, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "bikaner", crop: "moth", min: 4200, modal: 4450, max: 4600, vs: 40, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "nagaur", crop: "moth", min: 4100, modal: 4380, max: 4520, vs: 25, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "merta", crop: "moth", min: 4120, modal: 4410, max: 4560, vs: 22, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jodhpur", crop: "moth", min: 4050, modal: 4320, max: 4480, vs: 20, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jaipur", crop: "moth", min: 4180, modal: 4400, max: 4550, vs: 15, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "indore", crop: "soyabean", min: 4100, modal: 4250, max: 4380, vs: -30, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "ujjain", crop: "soyabean", min: 4050, modal: 4180, max: 4300, vs: -20, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "harda", crop: "soyabean", min: 4020, modal: 4150, max: 4260, vs: -10, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "soyabean", min: 3980, modal: 4100, max: 4220, vs: 0, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "indore", crop: "dhan", min: 2280, modal: 2350, max: 2420, vs: 10, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "dhan", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "low", date: "2026-08-25", fresh: true },
  { mandi: "kekri", crop: "pyaz", min: 2050, modal: 2200, max: 2400, vs: -40, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "pyaz", min: 3300, modal: 3300, max: 3300, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "baran", crop: "pyaz", min: 800, modal: 1200, max: 1600, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "gondal", crop: "pyaz", min: 1800, modal: 1950, max: 2100, vs: -60, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "indore", crop: "pyaz", min: 401, modal: 3537, max: 4187, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "aalu", min: 800, modal: 1050, max: 1300, vs: 0, arrivals: "high", date: "2026-08-25", fresh: true },
  { mandi: "indore", crop: "aalu", min: 914, modal: 914, max: 914, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jaipur", crop: "aalu", min: 400, modal: 1150, max: 2400, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "kota", crop: "aalu", min: 650, modal: 650, max: 650, vs: 0, arrivals: "low", date: "2026-08-25", fresh: true },
  { mandi: "indore", crop: "tamatar", min: 600, modal: 1000, max: 1600, vs: 0, arrivals: "high", date: "2026-08-25", fresh: true },
  { mandi: "kota", crop: "tamatar", min: 1200, modal: 1700, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jaipur", crop: "tamatar", min: 1600, modal: 2150, max: 4400, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "tamatar", min: 1090, modal: 1765, max: 2445, vs: 0, arrivals: "low", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "lahsun", min: 1000, modal: 7000, max: 28000, vs: 0, arrivals: "high", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "lahsun", min: 2500, modal: 7550, max: 82001, vs: 0, arrivals: "high", date: "2026-08-25", fresh: true },
  { mandi: "kota", crop: "lahsun", min: 14000, modal: 14000, max: 14000, vs: 0, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "nagaur", crop: "jau", min: 1850, modal: 1980, max: 2050, vs: 15, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "merta", crop: "jau", min: 1860, modal: 1995, max: 2065, vs: 12, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "sri-ganganagar", crop: "jau", min: 1900, modal: 2020, max: 2100, vs: 10, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "jaipur", crop: "moong", min: 7200, modal: 7550, max: 7800, vs: 60, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jodhpur", crop: "moong", min: 5000, modal: 6250, max: 7500, vs: 0, arrivals: "low", date: "2026-08-25", fresh: true },
  { mandi: "nagaur", crop: "moong", min: 7050, modal: 7380, max: 7620, vs: 35, arrivals: "high", date: "2026-08-22", fresh: false },
  { mandi: "merta", crop: "moong", min: 7080, modal: 7410, max: 7650, vs: 38, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "bikaner", crop: "moong", min: 6980, modal: 7280, max: 7500, vs: 20, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "sri-ganganagar", crop: "moong", min: 7150, modal: 7480, max: 7720, vs: 45, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "til", min: 8500, modal: 8500, max: 8500, vs: 0, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "indore", crop: "arhar", min: 5991, modal: 7000, max: 7000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ujjain", crop: "urad", min: 6900, modal: 7250, max: 7500, vs: 30, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "indore", crop: "masoor", min: 5290, modal: 5290, max: 5290, vs: 0, arrivals: "low", date: "2026-08-25", fresh: true },
  { mandi: "nagaur", crop: "haldi", min: 11200, modal: 11800, max: 12400, vs: 80, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "indore", crop: "adrak", min: 4000, modal: 8000, max: 12000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "gondal", crop: "mirch", min: 14500, modal: 15800, max: 17200, vs: 300, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "bikaner", crop: "jowar", min: 4200, modal: 4450, max: 4600, vs: 40, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "nagaur", crop: "jowar", min: 4100, modal: 4380, max: 4520, vs: 25, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "merta", crop: "jowar", min: 4120, modal: 4410, max: 4560, vs: 22, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jodhpur", crop: "jowar", min: 4050, modal: 4320, max: 4480, vs: 20, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jaipur", crop: "jowar", min: 2850, modal: 2850, max: 2850, vs: 0, arrivals: "low", date: "2026-08-22", fresh: false },
  { mandi: "gondal", crop: "tamatar", min: 1000, modal: 1900, max: 2800, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "gondal", crop: "gwar", min: 900, modal: 4200, max: 7500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "gondal", crop: "aalu", min: 750, modal: 1000, max: 1250, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "pyaz", min: 1000, modal: 1900, max: 2800, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "tamatar", min: 1000, modal: 2000, max: 2700, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "kapas", min: 7500, modal: 9350, max: 9875, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "moongphali", min: 5000, modal: 6250, max: 7000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "gehun", min: 2200, modal: 2550, max: 2655, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "lahsun", min: 5000, modal: 7500, max: 12000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "aalu", min: 500, modal: 650, max: 800, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jaipur", crop: "pyaz", min: 2000, modal: 3400, max: 5800, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jaipur", crop: "lahsun", min: 6000, modal: 11250, max: 17000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "sarson", min: 6300, modal: 7200, max: 7525, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "lahsun", min: 5550, modal: 8650, max: 12850, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "gehun", min: 2450, modal: 2678, max: 3090, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "pyaz", min: 2005, modal: 3305, max: 3975, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "aalu", min: 405, modal: 930, max: 1455, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "amreli", crop: "gehun", min: 2300, modal: 2688, max: 2925, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "deesa", crop: "lahsun", min: 8000, modal: 13000, max: 18000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "gwar", min: 5000, modal: 5852, max: 8000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "pyaz", min: 3000, modal: 3500, max: 4000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "tamatar", min: 1500, modal: 1800, max: 2100, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "gehun", min: 2500, modal: 2600, max: 2680, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "sarson", min: 7400, modal: 7550, max: 7585, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "indore", crop: "lahsun", min: 4200, modal: 11000, max: 15300, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ujjain", crop: "lahsun", min: 500, modal: 4000, max: 19100, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ujjain", crop: "aalu", min: 227, modal: 798, max: 844, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ujjain", crop: "pyaz", min: 100, modal: 3400, max: 4100, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ujjain", crop: "tamatar", min: 650, modal: 1338, max: 2130, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "makka", min: 1151, modal: 1799, max: 2400, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "gehun", min: 2461, modal: 2541, max: 3141, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "gehun", min: 1600, modal: 2626, max: 2686, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "sarson", min: 4700, modal: 7530, max: 7530, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "pyaz", min: 1800, modal: 2500, max: 3000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "aalu", min: 1200, modal: 1300, max: 1400, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "tamatar", min: 2000, modal: 2200, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "gehun", min: 1000, modal: 2640, max: 2991, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "moongphali", min: 4003, modal: 7400, max: 7801, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "makka", min: 2201, modal: 2389, max: 2389, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "sarson", min: 4196, modal: 7326, max: 7487, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "pyaz", min: 200, modal: 3074, max: 4003, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "aalu", min: 740, modal: 1100, max: 1200, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "tamatar", min: 1100, modal: 2300, max: 2550, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "baran", crop: "aalu", min: 600, modal: 650, max: 700, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "baran", crop: "gehun", min: 2500, modal: 2725, max: 2911, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "baran", crop: "lahsun", min: 6820, modal: 11900, max: 27000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "baran", crop: "tamatar", min: 1200, modal: 1400, max: 1700, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "baran", crop: "makka", min: 2185, modal: 2200, max: 2211, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jaipur", crop: "sarson", min: 7621, modal: 7783, max: 7946, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jalore", crop: "tamatar", min: 1500, modal: 1800, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "unjha", crop: "sarson", min: 7275, modal: 7275, max: 7300, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mehsana", crop: "aalu", min: 500, modal: 1000, max: 1500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mehsana", crop: "pyaz", min: 2000, modal: 3500, max: 5000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mehsana", crop: "tamatar", min: 60, modal: 70, max: 75, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mehsana", crop: "sarson", min: 7000, modal: 7450, max: 7530, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mehsana", crop: "gehun", min: 2350, modal: 2575, max: 2805, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "patan", crop: "tamatar", min: 1000, modal: 1100, max: 1200, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "gondal", crop: "makka", min: 1505, modal: 2705, max: 3005, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "neemuch", crop: "pyaz", min: 600, modal: 3500, max: 4351, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "moongphali", min: 5260, modal: 6900, max: 8311, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ratlam", crop: "pyaz", min: 200, modal: 3400, max: 4350, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ratlam", crop: "gehun", min: 2199, modal: 2790, max: 2979, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ratlam", crop: "lahsun", min: 600, modal: 9000, max: 23200, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "indore", crop: "moongphali", min: 8500, modal: 8500, max: 8500, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "ujjain", crop: "makka", min: 2454, modal: 2454, max: 2454, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "anupgarh", crop: "gehun", min: 2570, modal: 2570, max: 2570, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "anupgarh", crop: "sarson", min: 7678, modal: 7678, max: 7678, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "ramganj", crop: "aalu", min: 400, modal: 1000, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "ramganj", crop: "pyaz", min: 1800, modal: 3350, max: 4500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "ramganj", crop: "tamatar", min: 500, modal: 2000, max: 3000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "ramganj", crop: "gehun", min: 2450, modal: 2462, max: 2475, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "ramganj", crop: "makka", min: 2050, modal: 2050, max: 2050, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "beawar", crop: "makka", min: 2650, modal: 2650, max: 2650, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "nimbahera", crop: "sarson", min: 6600, modal: 7200, max: 7800, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "nimbahera", crop: "gehun", min: 2550, modal: 2701, max: 2851, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "nimbahera", crop: "moongphali", min: 6700, modal: 7150, max: 7600, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "nimbahera", crop: "lahsun", min: 5500, modal: 17200, max: 24200, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "hisar", crop: "lahsun", min: 11000, modal: 11500, max: 12000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "hisar", crop: "aalu", min: 800, modal: 900, max: 1000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "hisar", crop: "tamatar", min: 2000, modal: 2250, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "hisar", crop: "pyaz", min: 3500, modal: 3800, max: 4000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "fatehabad", crop: "aalu", min: 400, modal: 650, max: 880, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "fatehabad", crop: "tamatar", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "fatehabad", crop: "pyaz", min: 3500, modal: 3500, max: 3500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jind", crop: "aalu", min: 700, modal: 1000, max: 1100, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jind", crop: "pyaz", min: 1500, modal: 2500, max: 3800, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jind", crop: "tamatar", min: 1500, modal: 2200, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "sirsa", crop: "pyaz", min: 1800, modal: 2400, max: 3600, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "sirsa", crop: "aalu", min: 400, modal: 600, max: 1000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "sirsa", crop: "tamatar", min: 1500, modal: 2630, max: 2650, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "tarori", crop: "aalu", min: 1000, modal: 1200, max: 1500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "tarori", crop: "pyaz", min: 3000, modal: 3500, max: 4000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "panipat", crop: "pyaz", min: 1000, modal: 1500, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "panipat", crop: "tamatar", min: 700, modal: 1000, max: 1300, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "panipat", crop: "aalu", min: 1000, modal: 1200, max: 1400, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "sonepat", crop: "tamatar", min: 2500, modal: 2750, max: 3200, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "sonepat", crop: "pyaz", min: 2500, modal: 3000, max: 3000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "sonepat", crop: "aalu", min: 1100, modal: 1100, max: 1500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ganaur", crop: "tamatar", min: 2000, modal: 2500, max: 3000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ganaur", crop: "lahsun", min: 10000, modal: 12000, max: 15000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ganaur", crop: "aalu", min: 1000, modal: 1200, max: 1500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ganaur", crop: "pyaz", min: 4000, modal: 4500, max: 5000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rohtak", crop: "aalu", min: 500, modal: 600, max: 900, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rohtak", crop: "pyaz", min: 2000, modal: 2500, max: 3000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "lahsun", min: 4550, modal: 7100, max: 11500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "pyaz", min: 1800, modal: 2700, max: 4400, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "tamatar", min: 1200, modal: 1800, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "gehun", min: 2450, modal: 2450, max: 2450, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "makka", min: 2050, modal: 2050, max: 2050, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "aalu", min: 550, modal: 625, max: 800, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "anupgarh", crop: "moong", min: 6000, modal: 6000, max: 6000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "anupgarh", crop: "gwar", min: 5712, modal: 5712, max: 5712, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "sri-ganganagar", crop: "chana", min: 5700, modal: 5710, max: 7550, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "baran", crop: "moong", min: 6821, modal: 7085, max: 7150, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "baran", crop: "chana", min: 5291, modal: 5671, max: 5751, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "baran", crop: "urad", min: 7300, modal: 7560, max: 7712, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "baran", crop: "dhan", min: 3800, modal: 3890, max: 3927, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "baran", crop: "dhaniya", min: 13550, modal: 14711, max: 15400, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "baran", crop: "alsi", min: 9000, modal: 9000, max: 9000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jalore", crop: "adrak", min: 4500, modal: 4800, max: 5000, vs: 0, arrivals: "med", date: "2026-08-23", fresh: false },
  { mandi: "jalore", crop: "hara-dhaniya", min: 2500, modal: 2800, max: 3000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jaipur", crop: "jau", min: 2511, modal: 2552, max: 2593, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jaipur", crop: "hara-dhaniya", min: 1000, modal: 6500, max: 11000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jaipur", crop: "kela", min: 2000, modal: 2900, max: 3500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jaipur", crop: "adrak", min: 5500, modal: 8600, max: 14500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jaipur", crop: "amrood", min: 3000, modal: 5750, max: 8500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jaipur", crop: "seb", min: 5000, modal: 9250, max: 15000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jaipur", crop: "anar", min: 4000, modal: 8000, max: 12000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "chana", min: 5500, modal: 6125, max: 7850, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "adrak", min: 4000, modal: 5000, max: 6500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "til", min: 9000, modal: 11625, max: 16700, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "dhaniya", min: 14800, modal: 15150, max: 15500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "seb", min: 5000, modal: 7500, max: 10000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "amrood", min: 1000, modal: 1500, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "anar", min: 4000, modal: 6000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "arandi", min: 7000, modal: 7075, max: 7150, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "nimbahera", crop: "jau", min: 2400, modal: 2563, max: 2726, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "unjha", crop: "til", min: 10690, modal: 11600, max: 12000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "unjha", crop: "saunf", min: 7875, modal: 10250, max: 23500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mehsana", crop: "kela", min: 1250, modal: 2000, max: 2250, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mehsana", crop: "bajra", min: 2000, modal: 2275, max: 2550, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mehsana", crop: "arandi", min: 7105, modal: 7175, max: 7230, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "amreli", crop: "bajra", min: 1825, modal: 1875, max: 1875, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "amreli", crop: "arhar", min: 4500, modal: 6500, max: 7275, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "amreli", crop: "jeera", min: 15075, modal: 15250, max: 15250, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "amreli", crop: "jowar", min: 2875, modal: 5500, max: 6300, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "amreli", crop: "arandi", min: 6625, modal: 6825, max: 6825, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "amreli", crop: "til", min: 6950, modal: 12100, max: 17075, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "amreli", crop: "chana", min: 5000, modal: 6050, max: 6250, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "amreli", crop: "moong", min: 3025, modal: 6750, max: 6750, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "deesa", crop: "hara-dhaniya", min: 1000, modal: 1750, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "kela", min: 3000, modal: 3750, max: 4500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "anar", min: 6000, modal: 8000, max: 10000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "adrak", min: 5500, modal: 6250, max: 7000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "arandi", min: 7155, modal: 7225, max: 7255, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "seb", min: 7000, modal: 9500, max: 12000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "gondal", crop: "seb", min: 2000, modal: 7500, max: 13000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "gondal", crop: "kela", min: 1500, modal: 2150, max: 2800, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "gondal", crop: "anar", min: 1500, modal: 5750, max: 10000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "gondal", crop: "amrood", min: 2000, modal: 5250, max: 8500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "gondal", crop: "jowar", min: 2305, modal: 5605, max: 5805, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "gondal", crop: "bajra", min: 1455, modal: 2255, max: 2305, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "gondal", crop: "arandi", min: 6355, modal: 6930, max: 7030, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "indore", crop: "moong", min: 3100, modal: 6965, max: 6965, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "indore", crop: "hara-matar", min: 2560, modal: 3800, max: 3800, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "indore", crop: "kela", min: 600, modal: 1000, max: 1400, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "indore", crop: "hara-dhaniya", min: 300, modal: 500, max: 700, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "indore", crop: "seb", min: 5000, modal: 9000, max: 12000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "indore", crop: "anar", min: 3000, modal: 6000, max: 10000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ujjain", crop: "adrak", min: 575, modal: 1384, max: 2450, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ujjain", crop: "hara-dhaniya", min: 550, modal: 1268, max: 2260, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ujjain", crop: "seb", min: 3000, modal: 5179, max: 7500, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "harda", crop: "chana", min: 1000, modal: 6590, max: 7517, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "arhar", min: 6980, modal: 6980, max: 6980, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "hara-matar", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "urad", min: 5099, modal: 5099, max: 5099, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "moong", min: 1000, modal: 6400, max: 7421, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "anar", min: 8000, modal: 9000, max: 10000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "seb", min: 8000, modal: 9000, max: 10000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "hara-dhaniya", min: 600, modal: 700, max: 1000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "hara-dhaniya", min: 9001, modal: 11751, max: 14550, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "chana", min: 2850, modal: 6325, max: 8260, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "isabgol", min: 7700, modal: 11500, max: 13510, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "masoor", min: 3700, modal: 8350, max: 8350, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "moong", min: 4646, modal: 6835, max: 6835, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "jau", min: 2361, modal: 2801, max: 2801, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "til", min: 6500, modal: 11900, max: 12500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "alsi", min: 9001, modal: 9900, max: 9951, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "urad", min: 4500, modal: 7500, max: 8051, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ratlam", crop: "chana", min: 5350, modal: 7725, max: 9250, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ratlam", crop: "hara-matar", min: 2601, modal: 3191, max: 5140, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "bhiwani", crop: "amrood", min: 2240, modal: 2879, max: 3325, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "bhiwani", crop: "kela", min: 4214, modal: 4588, max: 4980, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "bhiwani", crop: "seb", min: 9580, modal: 10254, max: 11584, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "bhiwani", crop: "anar", min: 8587, modal: 9580, max: 10255, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "sirsa", crop: "kela", min: 2600, modal: 2600, max: 2600, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "sirsa", crop: "seb", min: 3000, modal: 7500, max: 9000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "sirsa", crop: "amrood", min: 1100, modal: 2200, max: 3000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "hisar", crop: "amrood", min: 2000, modal: 2500, max: 3000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "hisar", crop: "adrak", min: 14000, modal: 14500, max: 15000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "hisar", crop: "hara-matar", min: 9000, modal: 9500, max: 10000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "hisar", crop: "anar", min: 12000, modal: 14000, max: 15000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "hisar", crop: "seb", min: 8000, modal: 10000, max: 12000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ramganj", crop: "amrood", min: 2000, modal: 3250, max: 4500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "ramganj", crop: "anar", min: 3800, modal: 8000, max: 13000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "ramganj", crop: "seb", min: 3000, modal: 9500, max: 12000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "ramganj", crop: "adrak", min: 4000, modal: 10000, max: 15000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "ramganj", crop: "hara-dhaniya", min: 10000, modal: 12000, max: 15000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "ramganj", crop: "hara-matar", min: 4000, modal: 5000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "ramganj", crop: "dhan", min: 1800, modal: 1995, max: 2335, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "ramganj", crop: "kela", min: 850, modal: 2500, max: 4800, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "rohtak", crop: "seb", min: 8000, modal: 10000, max: 13000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rohtak", crop: "kela", min: 1800, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rohtak", crop: "amrood", min: 1500, modal: 2000, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "adrak", min: 8000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "hara-matar", min: 8500, modal: 9000, max: 10000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "anar", min: 7000, modal: 8000, max: 9400, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "seb", min: 4500, modal: 7000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "dhan", min: 1605, modal: 1606, max: 1608, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "patan", crop: "adrak", min: 1500, modal: 2000, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "patan", crop: "hara-dhaniya", min: 8, modal: 9, max: 10, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "tarori", crop: "kela", min: 2000, modal: 2200, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "panipat", crop: "kela", min: 2000, modal: 2500, max: 3000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "panipat", crop: "amrood", min: 2000, modal: 2500, max: 3000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "panipat", crop: "seb", min: 4000, modal: 8000, max: 12000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "panipat", crop: "anar", min: 4000, modal: 6000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "sonepat", crop: "seb", min: 6000, modal: 10000, max: 12000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "sonepat", crop: "amrood", min: 3500, modal: 4000, max: 4200, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "sonepat", crop: "kela", min: 3000, modal: 3300, max: 3300, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "sonepat", crop: "anar", min: 6500, modal: 11000, max: 12000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ganaur", crop: "hara-dhaniya", min: 5000, modal: 5500, max: 6000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ganaur", crop: "adrak", min: 10000, modal: 10000, max: 12000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ganaur", crop: "seb", min: 15000, modal: 18000, max: 20000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ganaur", crop: "amrood", min: 2500, modal: 2800, max: 3000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "mandsaur", crop: "til", min: 4701, modal: 10571, max: 10941, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "hara-dhaniya", min: 1301, modal: 14500, max: 15051, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "masoor", min: 5100, modal: 6510, max: 7750, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "urad", min: 3501, modal: 4612, max: 4612, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "alsi", min: 7801, modal: 9351, max: 9453, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "chana", min: 4431, modal: 7146, max: 8391, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "hara-matar", min: 2580, modal: 3190, max: 3190, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "moong", min: 5500, modal: 6150, max: 6150, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "isabgol", min: 7201, modal: 13000, max: 13000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "fatehabad", crop: "amrood", min: 3000, modal: 3000, max: 3000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "fatehabad", crop: "seb", min: 15000, modal: 15000, max: 15000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "fatehabad", crop: "kela", min: 1600, modal: 1600, max: 1600, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "fatehabad", crop: "anar", min: 6000, modal: 6000, max: 6000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "rajkot", crop: "jowar", min: 5705, modal: 6350, max: 6500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "til", min: 10200, modal: 11650, max: 12075, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "rajkot", crop: "chana", min: 6055, modal: 7338, max: 9255, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "dhaniya", min: 13625, modal: 14575, max: 15375, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "bajra", min: 1820, modal: 2205, max: 2420, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "arandi", min: 6950, modal: 7000, max: 7150, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "urad", min: 5625, modal: 8350, max: 9105, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "arhar", min: 5750, modal: 7200, max: 8305, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "moong", min: 5500, modal: 7150, max: 7900, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "jeera", min: 17800, modal: 18800, max: 19430, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "hara-dhaniya", min: 620, modal: 830, max: 1040, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "adrak", min: 7085, modal: 11090, max: 15095, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ramganj", crop: "matar", min: 8000, modal: 8300, max: 8500, vs: 0, arrivals: "med", date: "2026-08-24", fresh: false },
  { mandi: "mandsaur", crop: "jau", min: 2301, modal: 2801, max: 2801, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ujjain", crop: "sarson", min: 7290, modal: 7290, max: 7290, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "ujjain", crop: "moong", min: 6051, modal: 6235, max: 6235, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ujjain", crop: "til", min: 10225, modal: 10225, max: 10225, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "baran", crop: "methi", min: 6060, modal: 6060, max: 6060, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "nimbahera", crop: "methi", min: 5702, modal: 6850, max: 7982, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "amreli", crop: "methi", min: 6000, modal: 6575, max: 7025, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "rajkot", crop: "methi", min: 4450, modal: 7150, max: 8900, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "indore", crop: "hari-methi", min: 1500, modal: 2500, max: 3000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "methi", min: 3001, modal: 6301, max: 7231, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "methi", min: 900, modal: 5899, max: 7153, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "unjha", crop: "methi", min: 6050, modal: 6150, max: 6250, vs: 0, arrivals: "med", date: "2026-08-24", fresh: false },
  { mandi: "jodhpur", crop: "isabgol", min: 9000, modal: 10650, max: 12300, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "jodhpur", crop: "sarson", min: 6800, modal: 7100, max: 7340, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "seb", min: 8000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "kota", crop: "anar", min: 8000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "kota", crop: "kela", min: 2500, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "goluwala", crop: "gwar", min: 5800, modal: 5900, max: 5925, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "goluwala", crop: "tamatar", min: 2000, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "goluwala", crop: "pyaz", min: 3800, modal: 4000, max: 4000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "goluwala", crop: "sarson", min: 6501, modal: 7400, max: 7530, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "goluwala", crop: "aalu", min: 500, modal: 700, max: 700, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "goluwala", crop: "gehun", min: 2550, modal: 2560, max: 2575, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "goluwala", crop: "chana", min: 5401, modal: 5701, max: 5701, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ramganj", crop: "dhaniya", min: 11800, modal: 13596, max: 15391, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "ramganj", crop: "masoor", min: 6375, modal: 7563, max: 8751, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "ramganj", crop: "chana", min: 5400, modal: 5596, max: 5792, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "ramganj", crop: "sarson", min: 6800, modal: 7244, max: 7625, vs: 0, arrivals: "med", date: "2026-08-24", fresh: false },
  { mandi: "jaipur", crop: "urad", min: 5700, modal: 5700, max: 5700, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "amreli", crop: "urad", min: 6425, modal: 8500, max: 8500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "indore", crop: "jowar", min: 2500, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "deesa", crop: "saunf", min: 8505, modal: 8505, max: 8505, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "mandsaur", crop: "kalonji", min: 8201, modal: 17900, max: 17900, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "mandsaur", crop: "asaliya", min: 5600, modal: 6006, max: 6150, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "sarson", min: 6500, modal: 7428, max: 7711, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "neemuch", crop: "kalonji", min: 14276, modal: 18560, max: 19010, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "sirsa", crop: "gehun", min: 2500, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "adampur", crop: "aalu", min: 500, modal: 600, max: 600, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "adampur", crop: "pyaz", min: 4000, modal: 4300, max: 4300, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "adampur", crop: "tamatar", min: 2000, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "adampur", crop: "adrak", min: 7000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "adampur", crop: "lahsun", min: 10000, modal: 13000, max: 13000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "adampur", crop: "hara-matar", min: 7000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "kela", min: 2800, modal: 3500, max: 3900, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "amrood", min: 1600, modal: 1600, max: 1600, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "hisar", crop: "kela", min: 2000, modal: 2250, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jalore", crop: "aalu", min: 1200, modal: 1300, max: 1500, vs: 0, arrivals: "med", date: "2026-08-23", fresh: false },
  { mandi: "siwani", crop: "kapas", min: 7195, modal: 7195, max: 7195, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "ganaur", crop: "kela", min: 3000, modal: 3500, max: 4000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rohtak", crop: "anar", min: 8000, modal: 10000, max: 15000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "rohtak", crop: "tamatar", min: 1000, modal: 1500, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "kota", crop: "methi", min: 5800, modal: 5800, max: 5800, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "dhaniya", min: 12500, modal: 12500, max: 12500, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "alsi", min: 8000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "urad", min: 6200, modal: 6200, max: 6200, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "moong", min: 6850, modal: 6850, max: 6850, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "bajra", min: 1952, modal: 1952, max: 1952, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "kota", crop: "jau", min: 2650, modal: 2650, max: 2650, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "beawar", crop: "bajra", min: 2550, modal: 2550, max: 2550, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "beawar", crop: "jau", min: 2475, modal: 2475, max: 2475, vs: 0, arrivals: "med", date: "2026-08-24", fresh: false },
  { mandi: "amreli", crop: "sarson", min: 7500, modal: 8200, max: 8200, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "amreli", crop: "makka", min: 2425, modal: 2425, max: 2425, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "indore", crop: "urad", min: 9200, modal: 9200, max: 9200, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "fatehabad", crop: "moong", min: 6750, modal: 6750, max: 6750, vs: 0, arrivals: "med", date: "2026-08-22", fresh: false },
  { mandi: "ganaur", crop: "hara-matar", min: 10000, modal: 10000, max: 12000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "tarori", crop: "tamatar", min: 3000, modal: 3500, max: 4000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ramganj", crop: "hari-mirch", min: 500, modal: 2500, max: 6000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: false },
  { mandi: "jalore", crop: "hari-mirch", min: 1500, modal: 1600, max: 1800, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mehsana", crop: "hari-mirch", min: 1000, modal: 2000, max: 3500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "gondal", crop: "hari-mirch", min: 1000, modal: 2500, max: 4000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "rajkot", crop: "hari-mirch", min: 2455, modal: 3010, max: 3565, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "hari-mirch", min: 2000, modal: 2500, max: 3000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "indore", crop: "hari-mirch", min: 1500, modal: 2500, max: 3500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "hari-mirch", min: 3000, modal: 3500, max: 4050, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "adampur", crop: "hari-mirch", min: 2000, modal: 3000, max: 3000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "shahabad", crop: "hari-mirch", min: 2000, modal: 2500, max: 3000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ganaur", crop: "hari-mirch", min: 4000, modal: 4500, max: 5000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ujjain", crop: "hari-mirch", min: 635, modal: 1339, max: 2435, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "sri-ganganagar", crop: "hari-mirch", min: 3050, modal: 3050, max: 3050, vs: 0, arrivals: "med", date: "2026-08-24", fresh: false },
  { mandi: "goluwala", crop: "jau", min: 2301, modal: 2301, max: 2301, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ramganj", crop: "arhar", min: 5500, modal: 5500, max: 5500, vs: 0, arrivals: "med", date: "2026-08-24", fresh: false },
  { mandi: "beawar", crop: "sarson", min: 6550, modal: 6550, max: 6550, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "bikaner", crop: "tamatar", min: 2100, modal: 2100, max: 2100, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "bikaner", crop: "anar", min: 8000, modal: 8000, max: 8000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "bikaner", crop: "adrak", min: 4500, modal: 4500, max: 4500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "bikaner", crop: "seb", min: 6500, modal: 6500, max: 6500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "bikaner", crop: "amrood", min: 2500, modal: 2500, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "bikaner", crop: "pyaz", min: 1800, modal: 1800, max: 1800, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "bikaner", crop: "hari-mirch", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "bikaner", crop: "hara-dhaniya", min: 3500, modal: 3500, max: 3500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "bikaner", crop: "aalu", min: 1000, modal: 1000, max: 1000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "hari-mirch", min: 2500, modal: 3000, max: 37002, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "kela", min: 1000, modal: 1500, max: 2000, vs: 0, arrivals: "med", date: "2026-08-24", fresh: false },
  { mandi: "jaipur", crop: "hari-mirch", min: 2000, modal: 3375, max: 4000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "patan", crop: "hari-mirch", min: 2000, modal: 2750, max: 3500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "bikaner", crop: "kela", min: 2800, modal: 2800, max: 2800, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jalore", crop: "pyaz", min: 2000, modal: 2300, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jalore", crop: "lahsun", min: 13000, modal: 13500, max: 14000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jaipur", crop: "hara-matar", min: 11000, modal: 11000, max: 11000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "jeera", min: 18525, modal: 18750, max: 18805, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "deesa", crop: "til", min: 9000, modal: 9000, max: 9000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "harda", crop: "hari-mirch", min: 2000, modal: 2200, max: 2500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "fatehabad", crop: "makka", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "tarori", crop: "seb", min: 5500, modal: 6000, max: 6500, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "mandsaur", crop: "haldi", min: 14285, modal: 14285, max: 14285, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "unjha", crop: "sua", min: 8780, modal: 8840, max: 8900, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "jodhpur", crop: "sua-patti", min: 5000, modal: 5600, max: 7000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "kota", crop: "hari-mirch", min: 2000, modal: 2000, max: 2000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ratlam", crop: "urad", min: 7401, modal: 7401, max: 7401, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "fatehabad", crop: "gehun", min: 2450, modal: 2452, max: 2460, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "goluwala", crop: "moong", min: 5000, modal: 5000, max: 5000, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
  { mandi: "ratlam", crop: "moong", min: 6701, modal: 6701, max: 6701, vs: 0, arrivals: "med", date: "2026-08-25", fresh: true },
];

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
  ["banana", "kela"], ["kela", "kela"], ["केला", "kela"],
  ["apple", "seb"], ["seb", "seb"], ["सेब", "seb"],
  ["pomegranate", "anar"], ["anar", "anar"], ["अनार", "anar"],
  ["wheat", "gehun"], ["kanak", "gehun"], ["गेहूँ", "gehun"],
  ["mustard", "sarson"], ["rapeseed", "sarson"],
  ["gram", "chana"], ["chickpea", "chana"],
  ["pearl millet", "bajra"],
  ["maize", "makka"], ["corn", "makka"],
  ["cotton", "kapas"],
  ["groundnut", "moongphali"], ["peanut", "moongphali"],
  ["cumin", "jeera"], ["जीरो", "jeera"],
  ["soybean", "soyabean"], ["soya", "soyabean"],
  ["paddy", "dhan"], ["rice", "dhan"], ["धान", "dhan"],
  ["onion", "pyaz"], ["kanda", "pyaz"], ["कांदा", "pyaz"],
  ["potato", "aalu"], ["aloo", "aalu"], ["alu", "aalu"],
  ["tomato", "tamatar"],
  ["guar", "gwar"], ["cluster bean", "gwar"], ["गवार", "gwar"],
  ["barley", "jau"],
  ["green gram", "moong"],
  ["sesame", "til"],
  ["sorghum", "jowar"],
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
  kapas: { hi: "कपास का भाव राजकोट, अमरेली और गोंडल की गुजरात पट्टी से चलता है। क्विंटल का मॉडल देखें, फिर MSP से मिलाएँ जहाँ लागू हो।", en: "Cotton rates follow Gujarat’s Rajkot, Amreli and Gondal belt. Read ₹/qtl, then check MSP where it applies." },
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
  mirch: { hi: "मिर्च का मंडी भाव गोंडल से है, गुजरात की मसाला पट्टी। क्विंटल का मॉडल ऊँचा बैठता है — न्यूनतम-अधिकतम ज़रूर देखें।", en: "Chilli mandi rate is from Gondal, in Gujarat’s spice belt. Quintal modal runs high — always check min and max." },
  "hari-mirch": { hi: "हरी मिर्च जल्दी भाव बदलने वाली सब्जी है। नीचे उपलब्ध मंडियों के मॉडल भाव क्विंटल और प्रति किलो दोनों में देखें।", en: "Green chilli is a fast-moving vegetable. Read available mandi modal prices both per quintal and per kg below." },
  rajasthan: { hi: "राजस्थान में श्रीगंगानगर, कोटा, केकरी, बारां, बीकानेर, नागौर, मेड़ता, जोधपुर, जयपुर (बस्सी) और जालौर के आज के मॉडल भाव। ग्वार, बाजरा, मूंग, मोठ, गेहूं, सरसों, प्याज और जीरा यहीं की मुख्य खोज हैं।", en: "Today’s modal from Sri Ganganagar, Kota, Kekri, Baran, Bikaner, Nagaur, Merta, Jodhpur, Jaipur (Bassi) and Jalore. Guar, bajra, moong, moth, wheat, mustard, onion and cumin are the main searches." },
  gujarat: { hi: "गुजरात में उंझा, मेहसाणा, पाटन, गोंडल, राजकोट, अमरेली और डीसा। जीरा-इसबगोल उंझा, कपास-मूंगफली सौराष्ट्र, प्याज-आलू भी यहीं के भाव से चलते हैं।", en: "Gujarat: Unjha, Mehsana, Patan, Gondal, Rajkot, Amreli and Deesa. Cumin and isabgol at Unjha, cotton and groundnut in Saurashtra, onion and potato too." },
  "madhya-pradesh": { hi: "मध्य प्रदेश में इंदौर, उज्जैन, हरदा, मंदसौर, नीमच और रतलाम। सोयाबीन, चना, गेहूं, लहसुन और सब्जी का मालवा भाव यहीं मिलता है।", en: "Madhya Pradesh: Indore, Ujjain, Harda, Mandsaur, Neemuch and Ratlam. Soybean, gram, wheat, garlic and vegetables follow the Malwa mandis." },
  haryana: { hi: "हरियाणा में सिरसा, हिसार, फतेहाबाद, जींद, रोहतक, शाहाबाद, तरावड़ी, पानीपत, सोनीपत और गन्नौर के आज के मॉडल भाव। गेहूं, चना, सरसों और सब्जियों का मंडी रेट यहाँ देखें।", en: "Today’s modal rates from Haryana mandis including Sirsa, Hisar, Fatehabad, Jind, Rohtak, Shahabad, Tarori, Panipat, Sonepat and Ganaur. Check wheat, gram, mustard and vegetable market prices here." },
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
};

MB.articles = {
  "aalu": {
    "title": "आलू का भाव कैसे देखें और रेट किन बातों से बदलता है",
    "paragraphs": [
      "आलू का भाव अलग-अलग मंडियों में आवक, छंटाई, आकार, गुणवत्ता और स्थानीय मांग के अनुसार बदल सकता है। मंडी भाव और खुदरा दुकान का भाव एक जैसा होना जरूरी नहीं है, इसलिए बिक्री या खरीद से पहले उपलब्ध मंडी records की तुलना उपयोगी रहती है।"
    ],
    "sections": [
      {
        "title": "आज का आलू भाव कैसे देखें",
        "paragraphs": [
          "इस पेज की मंडी-वार तालिका में न्यूनतम, मॉडल और अधिकतम भाव देखें। अपनी नज़दीकी मंडी के साथ उपलब्ध दूसरी मंडियों की range देखने से केवल एक भाव पर निर्भर रहने की जरूरत नहीं पड़ती।"
        ],
        "items": [
          "आलू की मंडी और राज्य चुनकर भाव देखें।",
          "न्यूनतम, मॉडल और अधिकतम भाव के अंतर को समझें।",
          "भाव को प्रति क्विंटल और जरूरत हो तो प्रति किलो में देखें।"
        ]
      },
      {
        "title": "आकार, छंटाई और गुणवत्ता का असर",
        "paragraphs": [
          "आलू में size, छंटाई, छिलके की स्थिति, कटे या सड़े कंद और lot की एकरूपता से grade बनते हैं। बड़े, साफ और एक जैसे कंद की बोली छोटे या मिश्रित lot से अलग हो सकती है।"
        ]
      },
      {
        "title": "नई फसल, cold storage और आवक",
        "paragraphs": [
          "नई खुदाई की आवक और cold storage से निकला आलू बाजार में अलग स्थिति बना सकते हैं। स्थानीय उत्पादन, परिवहन और खरीदारों की मांग बदलने पर मंडी की भाव-range भी बदल सकती है।"
        ]
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
  "gehun": {
    "title": "गेहूं का भाव आज कैसे चेक करें",
    "paragraphs": [],
    "sections": [
      { "title": "", "paragraphs": ["मंडी भाव बदलता रहता है। गेहूं का उपलब्ध नवीनतम भाव देखने के लिए मंडी समिति के आधिकारिक पोर्टल या इस पेज की मूल्य तालिका में राज्य, ज़िला और मंडी के नाम से खोज करें।"], "items": ["राज्य और मंडी का नाम चुनें।", "फसल की श्रेणी में गेहूं चुनें।", "न्यूनतम, अधिकतम और मॉडल भाव की तुलना करें।"] },
      { "title": "राजस्थान, गुजरात, मध्य प्रदेश और हरियाणा में गेहूं का रेट क्यों अलग होता है", "paragraphs": ["हर राज्य और मंडी में गेहूं का भाव अलग हो सकता है। इसके पीछे मंडी की दूरी, परिवहन, गुणवत्ता, नमी, मांग और उपलब्ध आवक जैसे कारण होते हैं।"] },
      { "title": "1. मंडी की दूरी और परिवहन लागत", "paragraphs": ["उत्पादन क्षेत्र से दूर मंडी तक माल पहुँचाने में भाड़ा अधिक लग सकता है, जिससे भाव में अंतर आ सकता है।"] },
      { "title": "2. गुणवत्ता और नमी का स्तर", "paragraphs": ["गेहूं की चमक, दाने का आकार, सफाई और नमी की मात्रा मंडी भाव को प्रभावित करती है। बेहतर गुणवत्ता वाले गेहूं को अधिक दाम मिल सकता है।"] },
      { "title": "3. सरकारी न्यूनतम समर्थन मूल्य (MSP)", "paragraphs": ["सरकार हर विपणन सत्र के लिए MSP घोषित करती है। सरकारी खरीद में पात्र फसल के लिए यह समर्थन मूल्य होता है; खुली मंडी में भाव गुणवत्ता, आवक और मांग के अनुसार ऊपर या नीचे हो सकता है।"] },
      { "title": "4. मांग और आपूर्ति", "paragraphs": ["स्टॉक कम होने पर मांग बढ़ने से भाव ऊपर जा सकता है, जबकि नई फसल की आवक बढ़ने पर भाव में दबाव आ सकता है।"] },
      { "title": "गेहूं बेचने से पहले किसानों के लिए सुझाव", "items": ["बेचने से पहले 2–3 नज़दीकी मंडियों के भाव की तुलना करें।", "फसल को अच्छी तरह सुखाकर और साफ करके ले जाएँ; इससे बेहतर भाव मिलने की संभावना रहती है।", "मंडी जाने से पहले उपलब्ध नवीनतम भाव ऑनलाइन देख लें।", "MSP से कम भाव पर बेचने से पहले अपने क्षेत्र के सरकारी खरीद केंद्र की जानकारी लें।"], "ordered": true }
    ]
  }
};

MB.articleProfiles = {
  "sarson": {
    "intro": "सरसों का भाव तेलहन बाजार, मंडी की आवक और माल की गुणवत्ता के साथ बदलता है। एक ही दिन अलग मंडियों में दर अलग हो सकती है, इसलिए उपलब्ध भावों की तुलना उपयोगी रहती है।",
    "quality": "सरसों में दाने की सफाई, नमी, तेल की मात्रा और बाहरी मिलावट भाव पर असर डालती है। एक ही नाम की सरसों में अलग lot की गुणवत्ता अलग हो सकती है।",
    "market": "नई फसल की आवक, तेल मिलों की खरीद और खाद्य तेल की मांग से सरसों बाजार प्रभावित होता है। MSP सरकारी खरीद का समर्थन मूल्य है; खुली मंडी में कीमत अलग हो सकती है।",
    "advice": ["नमी और सफाई देखकर अपना lot अलग रखें।", "नज़दीकी तेलहन मंडियों के मॉडल भाव की तुलना करें।", "सरकारी खरीद की शर्तें और केंद्र की जानकारी अलग से जाँचें।"]
  },
  "chana": {
    "intro": "चना का भाव दाल बाजार, मंडी में उपलब्ध किस्म और माल की गुणवत्ता से बदलता है। देसी और काबुली जैसे अलग grade को एक ही भाव से नहीं मिलाना चाहिए।",
    "quality": "दाने का आकार, रंग, सफाई, टूटे दाने और नमी चने के lot की कीमत बदल सकते हैं। खरीददार किस्म और गुणवत्ता देखकर बोली लगाते हैं।",
    "market": "नई रबी आवक, दाल मिलों की मांग और स्थानीय व्यापार चने के भाव में उतार-चढ़ाव ला सकते हैं। MSP को सरकारी खरीद के संदर्भ में समझें, खुली मंडी की गारंटी के रूप में नहीं।",
    "advice": ["देसी और काबुली चने के भाव अलग-अलग तुलना करें।", "बिक्री से पहले दाने की सफाई और नमी पर ध्यान दें।", "एक ही भाव के बजाय 2–3 मंडियों का मॉडल भाव देखें।"]
  },
  "bajra": {
    "intro": "बाजरा शुष्क क्षेत्रों की प्रमुख मोटा अनाज फसल है। इसका भाव स्थानीय आवक, दाने की गुणवत्ता और खाद्य या पशु-आहार की मांग के अनुसार अलग हो सकता है।",
    "quality": "बाजरे में नमी, दाने की सफाई, रंग, आकार और अन्य दानों की मिलावट पर बोली का अंतर आ सकता है। सूखा और साफ माल अलग grade में देखा जाता है।",
    "market": "कटाई के समय नई आवक बढ़ने और स्थानीय मांग बदलने से बाजार पर असर पड़ता है। पास की मंडियों में परिवहन लागत भी मिलने वाले भाव का फर्क बढ़ा सकती है।",
    "advice": ["बाजरे को अच्छी तरह सुखाकर ले जाएँ।", "खाद्य और पशु-आहार खरीदारों की मांग का अंतर समझें।", "नागौर, बीकानेर या पास की उपलब्ध मंडियों से तुलना करें।"]
  },
  "makka": {
    "intro": "मक्का का भाव दाने की नमी, आवक और फीड तथा औद्योगिक खरीदारों की मांग से प्रभावित हो सकता है। नई और भंडारित फसल की स्थिति भी अलग तरह से देखी जाती है।",
    "quality": "मक्के में नमी, टूटे दाने, फफूंद का जोखिम, सफाई और विदेशी पदार्थ की मात्रा खरीददार के लिए महत्वपूर्ण होती है। एकसार और सूखे lot को अलग बोली मिल सकती है।",
    "market": "पोल्ट्री या पशु-आहार, स्टार्च और अन्य प्रसंस्करण खरीद की जरूरत बदलने पर मक्के के भाव में अंतर आ सकता है। कटाई के बाद आवक बढ़ना भी भाव को प्रभावित करता है।",
    "advice": ["नमी कम करने के बाद ही lot बेचने पर विचार करें।", "नया और पुराना माल अलग रखकर तुलना करें।", "मंडी का मॉडल भाव और न्यूनतम–अधिकतम range दोनों देखें।"]
  },
  "narma": {
    "intro": "नरमा American/Bt cotton की अलग फसल श्रेणी है; इसे देशी कपास के भाव के साथ नहीं मिलाना चाहिए। अलग lot की गुणवत्ता और नमी के कारण बोली बदल सकती है।",
    "quality": "नरमा में रेशे की गुणवत्ता, नमी, साफ-सफाई और कचरे की मात्रा मूल्यांकन के महत्वपूर्ण आधार हैं। दबाए या गीले माल में अलग कटौती हो सकती है।",
    "market": "जिनिंग, कपड़ा उद्योग की खरीद, स्थानीय आवक और मौसम की स्थिति नरमा बाजार को प्रभावित कर सकती है। मंडियों की भाव-range देखकर एक ही भाव पर निर्भर न रहें।",
    "advice": ["नरमा और देशी कपास के records अलग-अलग देखें।", "माल को सूखा और साफ रखें।", "बोली से पहले कचरे और नमी का अनुमान समझें।"]
  },
  "kapas": {
    "intro": "देशी कपास का भाव नरमा से अलग देखा जाता है। इसकी स्थानीय किस्म, lot की गुणवत्ता और बाजार की खरीद के अनुसार मंडी भाव में फर्क आ सकता है।",
    "quality": "देशी कपास में नमी, साफ-सफाई, कचरे की मात्रा और रेशे की स्थिति पर खरीदार ध्यान देते हैं। एक ही मंडी में अलग lot को अलग बोली मिलना सामान्य है।",
    "market": "जिनिंग इकाइयों की खरीद, स्थानीय आवक, बारिश या नमी तथा कपड़ा बाजार की मांग से देशी कपास के भाव प्रभावित हो सकते हैं।",
    "advice": ["इसे नरमा के साथ जोड़कर भाव की तुलना न करें।", "गीले या अधिक कचरे वाले माल को अलग रखें।", "बिक्री से पहले आसपास की कपास मंडियों के भाव देखें।"]
  },
  "moongphali": {
    "intro": "मूंगफली का भाव बेचने के रूप—फली सहित या दाना—के अनुसार अलग हो सकता है। तुलना करते समय दोनों रूपों के भाव को सीधे एक जैसा नहीं मानना चाहिए।",
    "quality": "दाने का आकार, नमी, भराव, टूट-फूट और lot की सफाई मूंगफली की कीमत में अंतर ला सकते हैं। फली और गिरी की गुणवत्ता की जांच अलग तरीके से होती है।",
    "market": "खाने के उपयोग और तेल मिलों की मांग, नई आवक तथा भंडारण की स्थिति से मूंगफली के भाव में बदलाव आ सकता है।",
    "advice": ["पहले स्पष्ट करें कि भाव फली का है या गिरी का।", "नमी और भराव देखकर lot तैयार करें।", "तेलहन मंडियों के उपलब्ध मॉडल भाव की तुलना करें।"]
  },
  "jeera": {
    "intro": "जीरा मसाला फसल है, इसलिए इसका भाव सामान्य अनाज से अलग तरह से चलता है। उपलब्ध मंडियों में दाने की गुणवत्ता, stock और खरीदारों की मांग के अनुसार rate बदल सकता है।",
    "quality": "जीरे के दाने का आकार, रंग, सुगंध, सफाई, नमी और टूटे या हल्के दाने lot की बोली बदल सकते हैं। अच्छे और सामान्य grade को अलग रखना उपयोगी है।",
    "market": "मसाला व्यापार की खरीद, उपलब्ध stock, नई आवक और घरेलू या निर्यात मांग जैसे कारक जीरे के बाजार को प्रभावित कर सकते हैं।",
    "advice": ["जीरे को साफ और सूखे lot में रखें।", "समान grade के भाव से ही तुलना करें।", "उंझा तथा अपने पास की उपलब्ध मंडियों के record देखें।"]
  },
  "soyabean": {
    "intro": "सोयाबीन का भाव तेल-निकासी, प्रसंस्करण मांग और मंडी की आवक से प्रभावित हो सकता है। अलग मंडियों में उपलब्ध lot और गुणवत्ता के कारण मॉडल भाव अलग दिख सकते हैं।",
    "quality": "नमी, खराब या टूटे दाने, विदेशी पदार्थ और lot की सफाई सोयाबीन की खरीद में देखे जाते हैं। अच्छी तरह सुखाया और साफ माल अलग grade में आ सकता है।",
    "market": "तेल मिलों और प्रोसेसरों की खरीद, नई फसल की आवक और stock की स्थिति भाव में उतार-चढ़ाव ला सकती है। MSP सरकारी खरीद का संदर्भ है, खुली मंडी की निश्चित दर नहीं।",
    "advice": ["नमी और विदेशी पदार्थ कम रखने पर ध्यान दें।", "इंदौर, उज्जैन या पास की उपलब्ध मंडियों से तुलना करें।", "सिर्फ उच्चतम भाव देखकर नहीं, model range देखकर निर्णय लें।"]
  },
  "dhan": {
    "intro": "धान बिना मिल वाला paddy है और इसे चावल के भाव से अलग समझना चाहिए। किस्म, नमी और मिलिंग के लिए उपयुक्तता के अनुसार इसकी मंडी कीमत बदल सकती है।",
    "quality": "धान में किस्म, नमी, भरे दाने, सफाई और टूटे या हल्के दानों का अनुपात खरीददार के लिए महत्वपूर्ण होता है। अलग किस्मों की तुलना एक ही भाव में नहीं करनी चाहिए।",
    "market": "कटाई के समय नई आवक, राइस मिलों की खरीद और सरकारी खरीद की प्रक्रिया धान बाजार को प्रभावित कर सकती है। MSP धान की सरकारी खरीद के संदर्भ में होता है।",
    "advice": ["धान और चावल के भाव अलग-अलग देखें।", "किस्म लिखकर ही नज़दीकी मंडियों की तुलना करें।", "नमी और सफाई की शर्तों की जानकारी पहले लें।"]
  },
  "pyaz": {
    "intro": "प्याज का भाव नई आवक, भंडारित माल और स्थानीय मांग के साथ तेज़ी से बदल सकता है। सब्जी होने के कारण आकार और ताजगी से एक ही मंडी में भी अलग grade बनते हैं।",
    "quality": "प्याज में bulb का आकार, सूखा छिलका, सड़न या चोट, रंग और भंडारण की स्थिति भाव पर असर डालती है। नया और पुराना stock अलग रखें।",
    "market": "बारिश, परिवहन, स्थानीय आवक और भंडारण से उपलब्धता बदलती है, इसलिए प्याज की भाव-range व्यापक हो सकती है।",
    "advice": ["सड़े या कटे प्याज को अच्छे lot से अलग करें।", "क्विंटल भाव के साथ प्रति किलो भाव भी समझें।", "आसपास की सब्जी मंडियों की तुलना करें।"]
  },
  "tamatar": {
    "intro": "टमाटर जल्दी खराब होने वाली सब्जी है, इसलिए इसका भाव आवक और ताजगी के साथ बहुत तेजी से बदल सकता है। केवल एक मंडी के भाव के बजाय उपलब्ध range देखना बेहतर रहता है।",
    "quality": "पकाव, firmness, आकार, रंग, चोट और सड़न टमाटर के grade बनाते हैं। एक ही खेप में बहुत पका और कच्चा माल मिलने पर बोली अलग हो सकती है।",
    "market": "मौसम, स्थानीय खेतों की आवक, परिवहन और जल्दी खराब होने की प्रकृति टमाटर के बाजार पर तत्काल असर डालते हैं।",
    "advice": ["बहुत पके और मजबूत टमाटर अलग-अलग रखें।", "दूर की मंडी भेजने से पहले परिवहन लागत जोड़ें।", "भाव प्रति किलो और प्रति क्विंटल दोनों रूप में देखें।"]
  },
  "gwar": {
    "intro": "यहाँ ग्वार को seed crop के रूप में देखा जाता है, सब्जी के रूप में नहीं। इसका भाव दाने की गुणवत्ता, नमी और प्रसंस्करण मांग के कारण अलग हो सकता है।",
    "quality": "ग्वार में दाने की सफाई, नमी, रंग, आकार और विदेशी पदार्थ की मात्रा lot की कीमत बदल सकती है। साफ और सूखा माल अलग grade में आता है।",
    "market": "ग्वार gum और अन्य प्रसंस्करण की खरीद, मौसमी आवक तथा stock की स्थिति बाजार के रुझान पर असर डाल सकती है।",
    "advice": ["ग्वार seed के भाव की ही तुलना करें।", "नमी और सफाई पर ध्यान दें।", "बीकानेर, नागौर या अपनी नज़दीकी उपलब्ध मंडी का record देखें।"]
  },
  "jau": {
    "intro": "जौ का भाव दाने की गुणवत्ता, स्थानीय आवक और अलग-अलग खरीदारों की जरूरत पर बदल सकता है। इसे गेहूं के भाव का सीधा विकल्प नहीं मानना चाहिए।",
    "quality": "दाने का आकार, भराव, सफाई, नमी और टूटे दाने जौ के lot की बोली को प्रभावित कर सकते हैं। एकसार और सूखे माल की तुलना अलग तरह से होती है।",
    "market": "खाद्य, पशु-आहार और प्रसंस्करण खरीदारों की मांग बदलने पर जौ के भाव में अंतर आ सकता है। कटाई के बाद आवक बढ़ना भी महत्वपूर्ण है।",
    "advice": ["जौ को साफ और सूखा रखकर बेचें।", "गेहूं नहीं, जौ के उपलब्ध records से तुलना करें।", "मंडी की range और record की ताजगी दोनों देखें।"]
  },
  "moong": {
    "intro": "मूंग दलहन फसल है और इसका भाव दाने की रंगत, आकार, नमी तथा दाल बाजार की मांग से बदल सकता है। नई और पुरानी मूंग की गुणवत्ता भी एक जैसी नहीं होती।",
    "quality": "हरेपन, दाने के आकार, सफाई, टूटे दाने और नमी के आधार पर मूंग का grade बनता है। अच्छी तरह साफ lot को अलग बोली मिल सकती है।",
    "market": "मंडी में नई आवक, दाल मिलों की जरूरत और स्थानीय व्यापार मूंग के भाव को प्रभावित कर सकते हैं। अलग राज्यों की उपलब्ध मंडियों की तुलना उपयोगी रहती है।",
    "advice": ["नमी और टूटे दाने कम रखने पर ध्यान दें।", "नागौर, मेड़ता या पास की उपलब्ध मंडियों से तुलना करें।", "मूंग की किस्म या grade मिलाकर भाव न देखें।"]
  },
  "moth": {
    "intro": "मोठ सूखा क्षेत्र की दलहन फसल है। इसकी मंडी आवक सभी जगह एक जैसी नहीं होती, इसलिए एक record को पूरे बाजार का भाव मानना ठीक नहीं है।",
    "quality": "दाने का आकार, रंग, सफाई, नमी और हल्के दानों की मात्रा मोठ की बोली में अंतर ला सकती है। lot की एकरूपता उपयोगी रहती है।",
    "market": "स्थानीय खरीदारों की जरूरत, उपलब्ध stock और सीमित या अधिक आवक के अनुसार मोठ का भाव बदल सकता है। पास की 2–3 मंडियों की तुलना बेहतर संकेत देती है।",
    "advice": ["एक ही ऊँचे भाव पर बिक्री तय न करें।", "साफ और सूखे दाने अलग lot में रखें।", "नोखा, बीकानेर, नागौर या पास के उपलब्ध records देखें।"]
  },
  "til": {
    "intro": "तिल तेलहन और खाद्य बीज दोनों रूप में कारोबार होता है। इसका भाव रंग, प्रकार, सफाई तथा मांग के अनुसार मंडी से मंडी अलग हो सकता है।",
    "quality": "तिल में रंग, बीज की एकरूपता, नमी, सफाई और अन्य बीजों की मिलावट पर खरीददार ध्यान देते हैं। अलग रंग या type के तिल की तुलना सावधानी से करें।",
    "market": "खाद्य उपयोग, तेल निकालने की मांग, seasonal आवक और stock की स्थिति तिल के भाव को प्रभावित कर सकती है।",
    "advice": ["रंग और type साफ लिखकर भाव पूछें।", "नमी तथा मिलावट कम रखें।", "एक ही मंडी की जगह उपलब्ध कई records देखें।"]
  },
  "jowar": {
    "intro": "ज्वार का भाव किस्म, दाने की गुणवत्ता और खाद्य या पशु-आहार की स्थानीय मांग से बदल सकता है। विभिन्न रंग या किस्मों को एक ही lot की तरह नहीं देखना चाहिए।",
    "quality": "दाने की सफाई, रंग, आकार, नमी और भराव ज्वार की मंडी बोली को प्रभावित कर सकते हैं। साफ और सूखे माल का grade अलग हो सकता है।",
    "market": "नई आवक, स्थानीय consumption और feed demand बदलने पर ज्वार के भाव में अंतर आ सकता है। नज़दीकी राज्यों की मंडियों में भी अलग range मिल सकती है।",
    "advice": ["किस्म बताकर ही भाव की तुलना करें।", "नमी और सफाई पर ध्यान दें।", "मंडी-वार मॉडल भाव देखकर निर्णय लें।"]
  },
  "arhar": {
    "intro": "अरहर को तूर भी कहा जाता है और इसका भाव दाल बाजार, दाने की गुणवत्ता तथा आवक से बदल सकता है। whole grain और processed दाल की कीमत अलग होती है।",
    "quality": "दाने का आकार, रंग, सफाई, नमी और टूटे दानों की मात्रा अरहर के grade में अंतर लाती है। lot की गुणवत्ता के अनुसार बोली बदल सकती है।",
    "market": "दाल मिलों की खरीद, नई फसल की आवक और उपलब्ध stock अरहर के बाजार को प्रभावित कर सकते हैं। MSP को सरकारी खरीद के संदर्भ में ही देखें।",
    "advice": ["अरहर और तैयार दाल के भाव न मिलाएँ।", "नमी और दाने की सफाई पर ध्यान दें।", "उपलब्ध मंडियों की range से तुलना करें।"]
  },
  "urad": {
    "intro": "उड़द का बाजार whole grain और दाल प्रसंस्करण की मांग से प्रभावित हो सकता है। रंग, आकार और lot की सफाई के कारण अलग मंडियों में भाव की range बदल सकती है।",
    "quality": "काले दाने की रंगत, आकार, सफाई, नमी और टूटे दाने उड़द की खरीद में देखे जाते हैं। एकसार lot की कीमत अलग हो सकती है।",
    "market": "दाल मिलों की जरूरत, मौसमी आवक और stock की स्थिति उड़द के भाव पर असर डाल सकती है। खुली मंडी का भाव सरकारी समर्थन मूल्य से अलग हो सकता है।",
    "advice": ["whole उड़द और processed दाल को अलग समझें।", "दाने का रंग और नमी देखकर lot तैयार करें।", "कई मंडियों के उपलब्ध भाव मिलाकर देखें।"]
  },
  "masoor": {
    "intro": "मसूर दाल की फसल है और इसका भाव दाने के रंग, आकार, गुणवत्ता तथा स्थानीय दाल व्यापार के अनुसार बदल सकता है। whole मसूर और तैयार दाल की कीमत अलग रहती है।",
    "quality": "समान रंग, दाने का आकार, सफाई, नमी और टूटे दानों की मात्रा मसूर के grade को प्रभावित करती है। साफ lot की तुलना साफ lot से ही करें।",
    "market": "रबी आवक, दाल मिलों की मांग और उपलब्ध stock बदलने पर मसूर बाजार में अंतर आ सकता है। अलग मंडियों की price range देखना उपयोगी है।",
    "advice": ["whole मसूर और दाल की कीमत न मिलाएँ।", "माल को सूखा और साफ रखें।", "एक दिन के एक भाव के बजाय मंडी-वार range देखें।"]
  },
  "isabgol": {
    "intro": "इसबगोल बीज और भूसी से जुड़े विशेष बाजार की फसल है। इसका भाव सामान्य अनाज की तरह नहीं समझना चाहिए; lot की शुद्धता और प्रसंस्करण-योग्यता महत्वपूर्ण हो सकती है।",
    "quality": "बीज की सफाई, नमी, विदेशी पदार्थ और lot की एकरूपता इसबगोल की खरीद में देखी जाती है। बीज और भूसी के बाजार-मूल्य को सीधे एक जैसा नहीं माना जाता।",
    "market": "प्रसंस्करण इकाइयों की मांग, उपलब्ध stock और seasonal आवक के अनुसार इसबगोल के भाव में अंतर आ सकता है। स्वास्थ्य संबंधी दावे कीमत का विश्वसनीय आधार नहीं हैं।",
    "advice": ["बीज और भूसी का भाव अलग-अलग पूछें।", "नमी और विदेशी पदार्थ कम रखें।", "उंझा या पास की उपलब्ध मंडियों के समान grade records से तुलना करें।"]
  },
  "lahsun": {
    "intro": "लहसुन का भाव गांठ के आकार, सूखाई, ताजगी और मंडी आवक के साथ बदल सकता है। नई और भंडारित फसल के lot की बोली अलग हो सकती है।",
    "quality": "गांठ का आकार, बाहरी छिलके की सूखाई, सफाई, टूटे bulb, सड़न और रंग लहसुन की quality को प्रभावित करते हैं। अलग grade को अलग lot में रखें।",
    "market": "नई आवक, भंडारण से निकला माल, घरेलू मांग और मौसम के कारण लहसुन की उपलब्धता तथा भाव बदल सकते हैं।",
    "advice": ["बड़े और छोटे bulb अलग करें।", "गीले या खराब lot को अच्छे माल से न मिलाएँ।", "प्रति क्विंटल और प्रति किलो दोनों भाव समझें।"]
  },
  "haldi": {
    "intro": "हल्दी मसाला फसल है और इसका भाव सूखी गांठ की गुणवत्ता, रंग तथा मंडी में उपलब्ध lot के अनुसार बदल सकता है। नई और stored हल्दी में भी अंतर हो सकता है।",
    "quality": "गांठ या finger का आकार, रंग, सुखाई, नमी, सफाई और टूट-फूट हल्दी की बोली को प्रभावित कर सकते हैं। समान grade की तुलना करना जरूरी है।",
    "market": "मसाला व्यापार, पिसाई या प्रसंस्करण की मांग, seasonal आवक और stock की स्थिति हल्दी बाजार में बदलाव ला सकती है।",
    "advice": ["अच्छी तरह सूखी हल्दी का lot अलग रखें।", "रंग और आकार के अनुसार grade समझें।", "एक से अधिक उपलब्ध मंडियों के भाव की तुलना करें।"]
  },
  "adrak": {
    "intro": "अदरक ताजी उपज है, इसलिए इसका भाव गांठ की ताजगी, आकार और परिवहन के साथ जल्दी बदल सकता है। अलग मंडियों में स्थानीय आवक का असर अलग दिखता है।",
    "quality": "गांठ का आकार, maturity, ताजगी, सफाई, टूट-फूट और अधिक रेशा quality में अंतर ला सकते हैं। गीला या चोट वाला माल अलग grade में जाता है।",
    "market": "बारिश, परिवहन, स्थानीय आवक और जल्दी खराब होने की प्रकृति अदरक के भाव को प्रभावित कर सकती है।",
    "advice": ["ताजा और पुराना/कमजोर माल अलग रखें।", "भेजने से पहले परिवहन खर्च जोड़ें।", "क्विंटल और किलो की दर का फर्क समझें।"]
  },
  "mirch": {
    "intro": "इस page पर मिर्च को सामान्य commodity के रूप में दिखाया गया है; source में जिस रूप का record उपलब्ध हो, उसी के अनुसार भाव समझें। इसे अपने-आप हरी या सूखी मिर्च मानना ठीक नहीं है।",
    "quality": "किस्म, रंग, आकार, नमी, सफाई और lot की स्थिति मिर्च की कीमत बदल सकते हैं। अलग form या variety के भाव को एक साथ न मिलाएँ।",
    "market": "मसाला या ताजी उपज की मांग, मौसमी आवक और stock के अनुसार मिर्च बाजार में अंतर आ सकता है। उपलब्ध record का commodity नाम पहले पढ़ें।",
    "advice": ["भाव देखने से पहले commodity form जाँचें।", "किस्म और quality एक जैसी रखकर तुलना करें।", "हरी मिर्च के लिए अलग page के भाव देखें।"]
  },
  "hari-mirch": {
    "intro": "हरी मिर्च ताजी और जल्दी खराब होने वाली सब्जी है; यह सामान्य मिर्च crop से अलग है। इसका भाव ताजगी, रंग और रोज की स्थानीय आवक से जल्दी बदल सकता है।",
    "quality": "हरा रंग, firmness, आकार, ताजगी, चोट और सड़न हरी मिर्च के grade को प्रभावित करते हैं। मिलेजुले आकार के lot को अलग बोली मिल सकती है।",
    "market": "मौसम, स्थानीय उत्पादन, परिवहन और कम shelf life के कारण हरी मिर्च की मंडी range तेजी से बदल सकती है।",
    "advice": ["हरी मिर्च को सामान्य मिर्च के record से न मिलाएँ।", "ताजा और खराब माल अलग रखें।", "प्रति किलो भाव ध्यान से देखें।"]
  },
  "rice": {
    "intro": "चावल धान से अलग, मिलिंग के बाद का उत्पाद है। इसलिए धान के भाव या MSP को चावल के मंडी भाव का सीधा विकल्प नहीं मानना चाहिए।",
    "how": "चावल में उपलब्ध record देखते समय variety, grain length, टूटे दाने और grade जरूर मिलाएँ। धान की table या paddy record से चावल का मूल्य अनुमानित न करें।",
    "quality": "चावल की किस्म, दाने की लंबाई, टूटे दानों का अनुपात, रंग, polish और सफाई grade तय कर सकते हैं। अलग प्रकार के rice का भाव अलग होता है।",
    "market": "मिलिंग, थोक खरीद, पैकिंग और seasonal supply चावल के व्यापार को प्रभावित कर सकते हैं। उपलब्ध record कम हों तो एक भाव को पूरे बाजार का मानक न समझें।",
    "advice": ["धान और चावल के भाव अलग-अलग देखें।", "किस्म और broken grade पूछकर ही तुलना करें।", "कम records होने पर नज़दीकी व्यापारी या मंडी से अतिरिक्त पुष्टि लें।"]
  },
  "dhaniya": {
    "intro": "धनिया दाना मसाला फसल है; इसे हरे धनिये की पत्तियों के भाव से अलग समझना चाहिए। दाने की quality और मसाला व्यापार की खरीद से इसका बाजार बदल सकता है।",
    "quality": "दाने का आकार, रंग, सुगंध, नमी, सफाई और हल्के दाने धनिया की बोली को प्रभावित करते हैं। छंटा हुआ lot अलग grade में आ सकता है।",
    "market": "मसाला व्यापार, नई आवक, उपलब्ध stock और घरेलू मांग धनिया के भाव पर असर डाल सकते हैं। अलग मंडियों की range देखकर निर्णय लेना बेहतर है।",
    "advice": ["धनिया दाना और हरा धनिया अलग रखें।", "सुगंध, रंग और सफाई के अनुसार lot बनाएं।", "रामगंज मंडी या पास के उपलब्ध records से तुलना करें।"]
  },
  "hara-dhaniya": {
    "intro": "हरा धनिया पत्तेदार ताजी उपज है और धनिया दाने से अलग crop है। इसकी कीमत पत्तियों की freshness, bunch quality और स्थानीय आवक पर तेजी से बदल सकती है।",
    "quality": "पत्तियों का हरा रंग, सुगंध, कोमलता, साफ-सफाई और bunch की एकरूपता भाव पर असर डालते हैं। मुरझाया या पीला माल अलग grade में जाता है।",
    "market": "मौसम, स्थानीय आपूर्ति, परिवहन और कम shelf life के कारण हरे धनिये की उपलब्धता जल्दी बदल सकती है।",
    "advice": ["हरा धनिया और धनिया दाना के भाव न मिलाएँ।", "ताजा bunch अलग रखें।", "प्रति किलो कीमत और bunch की गुणवत्ता दोनों समझें।"]
  },
  "saunf": {
    "intro": "सौंफ मसाला बीज है और इसका भाव दाने की गुणवत्ता, रंग, सुगंध और व्यापार की मांग के अनुसार बदल सकता है। समान नाम की अलग quality में भाव अलग होना सामान्य है।",
    "quality": "दाने का आकार, हरा या हल्का रंग, सुगंध, नमी, सफाई और मिलावट सौंफ के grade को प्रभावित करते हैं।",
    "market": "मसाला खरीदारों की मांग, seasonal आवक और stock की स्थिति सौंफ बाजार में अंतर ला सकती है।",
    "advice": ["रंग और आकार के आधार पर lot अलग रखें।", "नमी और सफाई की स्थिति जांचें।", "उंझा या उपलब्ध अन्य मंडियों के समान grade भाव देखें।"]
  },
  "methi": {
    "intro": "मेथी दाना मसाला और बीज फसल है; इसे पान मेथी की ताजी पत्तियों के भाव से अलग देखें। दाने की quality और seasonal आवक के साथ इसका रेट बदल सकता है।",
    "quality": "दाने का रंग, आकार, सफाई, नमी और टूटे दाने मेथी के lot की बोली को प्रभावित कर सकते हैं।",
    "market": "मसाला व्यापार, प्रसंस्करण मांग और नई आवक मेथी के भाव पर असर डाल सकते हैं। उपलब्ध मंडियों में range अलग हो सकती है।",
    "advice": ["मेथी दाना और पान मेथी अलग रखें।", "साफ और सूखे दाने बेचें।", "किस्म या grade मिलाकर तुलना न करें।"]
  },
  "hari-methi": {
    "intro": "पान मेथी ताजी पत्तेदार उपज है और मेथी दाने से अलग crop है। इसकी कीमत कोमल पत्तियों, freshness और स्थानीय supply के अनुसार जल्दी बदल सकती है।",
    "quality": "कोमल हरे पत्ते, bunch की सफाई, एकरूपता और मुरझाने की स्थिति पान मेथी की गुणवत्ता तय करती है।",
    "market": "ठंडे मौसम, दैनिक स्थानीय आवक, परिवहन और जल्दी खराब होने की प्रकृति पान मेथी के भाव पर असर डाल सकती है।",
    "advice": ["पान मेथी और मेथी दाना के भाव अलग देखें।", "ताजे bunch को खराब पत्तियों से अलग रखें।", "प्रति किलो भाव पर ध्यान दें।"]
  },
  "arandi": {
    "intro": "अरंडी castor seed है और इसका भाव बीज की quality, नमी तथा तेल-प्रसंस्करण की मांग से बदल सकता है। यह खाने वाले तेलहन की तरह सीधे नहीं समझी जाती।",
    "quality": "बीज की maturity, सफाई, नमी, टूटे दाने और विदेशी पदार्थ अरंडी के lot के मूल्यांकन को प्रभावित कर सकते हैं।",
    "market": "castor oil processing, औद्योगिक खरीद, seasonal आवक और उपलब्ध stock अरंडी बाजार में अंतर ला सकते हैं।",
    "advice": ["अरंडी के बीज की साफ-सफाई पर ध्यान दें।", "नमी वाले और सूखे lot अलग रखें।", "राजस्थान–गुजरात की उपलब्ध मंडियों से तुलना करें।"]
  },
  "matar": {
    "intro": "मटर यहाँ सूखी field pea फसल के रूप में है; इसे हरी मटर की ताजी फली के भाव से अलग समझना चाहिए। इसकी कीमत दाने की quality और स्थानीय खरीद से बदल सकती है।",
    "quality": "दाने का आकार, रंग, सफाई, नमी और टूटे दाने सूखी मटर के grade को प्रभावित कर सकते हैं।",
    "market": "स्थानीय आवक, प्रसंस्करण या खाद्य खरीदारों की मांग और उपलब्ध stock सूखी मटर के भाव में अंतर ला सकते हैं।",
    "advice": ["सूखी मटर और हरी मटर के भाव न मिलाएँ।", "दाने को सूखा और साफ रखें।", "कम records होने पर पास की मंडी से भी पुष्टि करें।"]
  },
  "hara-matar": {
    "intro": "हरी मटर ताजी फली वाली सब्जी है और सूखी field pea से अलग crop है। इसका भाव फली की भरावट, हरापन और seasonal आवक के अनुसार बदल सकता है।",
    "quality": "फली की भरावट, हरा रंग, कोमलता, आकार और ताजगी हरी मटर की quality में अंतर लाते हैं।",
    "market": "कटाई के मौसम, जल्दी खराब होने की प्रकृति, स्थानीय supply और परिवहन से हरी मटर की कीमत बदल सकती है।",
    "advice": ["हरी और सूखी मटर का भाव अलग देखें।", "भरी हुई, हरी फलियां अलग रखें।", "प्रति किलो भाव और क्वालिटी साथ में तुलना करें।"]
  },
  "alsi": {
    "intro": "अलसी तेलहन बीज है और इसका भाव बीज की सफाई, नमी तथा तेल या बीज उपयोग की मांग के अनुसार बदल सकता है। कम records में एक भाव को पूरा बाजार न मानें।",
    "quality": "दाने की एकरूपता, सफाई, नमी, टूटे बीज और विदेशी पदार्थ अलसी के lot की बोली पर असर डाल सकते हैं।",
    "market": "तेल या बीज खरीद, seasonal आवक और उपलब्ध stock से अलसी के भाव में अंतर आ सकता है। record की तारीख भी ध्यान से देखें।",
    "advice": ["कम उपलब्ध मंडियों में range और तारीख दोनों देखें।", "नमी और सफाई कमियों को अलग करें।", "एक record के बजाय पास के विकल्पों से तुलना करें।"]
  },
  "asaliya": {
    "intro": "असालिया garden cress seed की विशेष बीज फसल है। इसका बाजार सामान्य अनाज की तरह व्यापक नहीं हो सकता, इसलिए शुद्धता और lot की गुणवत्ता पर ध्यान देना जरूरी है।",
    "quality": "बीज की सफाई, शुद्धता, नमी, एकरूपता और विदेशी पदार्थ असालिया की खरीद में महत्व रखते हैं।",
    "market": "विशेष खरीदारों की मांग, seasonal आवक और सीमित उपलब्धता के कारण असालिया के भाव में मंडी-वार अंतर हो सकता है।",
    "advice": ["असालिया का भाव दूसरी बीज फसलों से न मिलाएँ।", "साफ और सूखा lot रखें।", "कम records होने पर समान quality की अतिरिक्त पुष्टि लें।"]
  },
  "kalonji": {
    "intro": "कलौंजी nigella seed की मसाला फसल है और इसका भाव शुद्धता, रंग तथा quality के अनुसार बदल सकता है। इसे सामान्य काले बीजों के भाव से नहीं मिलाना चाहिए।",
    "quality": "काला रंग, दाने की एकरूपता, सफाई, सुगंध, नमी और मिलावट कलौंजी के grade को प्रभावित करते हैं।",
    "market": "विशेष मसाला मांग, उपलब्ध stock और seasonal आवक से कलौंजी की price range बदल सकती है।",
    "advice": ["कलौंजी की purity और सफाई जांचें।", "नमी या मिलावट वाले lot अलग रखें।", "एक ही मंडी के बजाय उपलब्ध records की तुलना करें।"]
  },
  "amrood": {
    "intro": "अमरूद का भाव variety, आकार, पकाव और स्थानीय फल आवक के साथ बदल सकता है। फल होने के कारण चोट या दाग की स्थिति से grade में काफी फर्क आता है।",
    "quality": "आकार, maturity, बाहरी रंग, दाग, चोट, firmness और पैकिंग अमरूद की बोली को प्रभावित कर सकते हैं।",
    "market": "स्थानीय बागों की आवक, मौसम, जल्दी खराब होने की प्रकृति और transport से अमरूद बाजार में बदलाव आ सकता है।",
    "advice": ["अलग size और quality के फल अलग रखें।", "चोट या दाग वाले फल अच्छे grade में न मिलाएँ।", "प्रति किलो भाव और पैकिंग खर्च दोनों देखें।"]
  },
  "kela": {
    "intro": "केले का भाव variety, पकने की अवस्था और हाथ या फल के आकार के अनुसार बदल सकता है। handling और transport भी फल की गुणवत्ता को प्रभावित करते हैं।",
    "quality": "फल का आकार, रंग, maturity, चोट, हाथ की एकरूपता और पकाव केले के grade में अंतर लाते हैं।",
    "market": "स्थानीय supply, transport, मौसम और पकने की गति से केले की उपलब्धता तथा भाव बदल सकते हैं।",
    "advice": ["कच्चे और पके केले का lot अलग रखें।", "चोट लगे फल अलग करें।", "प्रति किलो/गुच्छा का आधार साफ करके भाव तुलना करें।"]
  },
  "seb": {
    "intro": "सेब का भाव variety, origin, आकार, रंग और firmness के अनुसार बदल सकता है। एक ही नाम के सेब में grade और storage की स्थिति के कारण बड़ा अंतर संभव है।",
    "quality": "फल का आकार, रंग, firmness, दाग, चोट और packing से सेब का grade तय हो सकता है। अलग variety का भाव सीधे न मिलाएँ।",
    "market": "seasonal supply, cold storage, transport और थोक खरीदारों की मांग से सेब की price range बदल सकती है।",
    "advice": ["variety और origin पूछकर ही भाव तुलना करें।", "grade और size अलग रखें।", "प्रति किलो भाव के साथ packing quality भी देखें।"]
  },
  "anar": {
    "intro": "अनार का भाव फल के आकार, वजन grade, रंग और छिलके की स्थिति के अनुसार बदल सकता है। fresh lot और handling की गुणवत्ता इसकी बोली में महत्वपूर्ण होती है।",
    "quality": "फल का आकार, वजन, बाहरी रंग, छिलके के दाग या दरार और firmness अनार की quality को प्रभावित करते हैं।",
    "market": "seasonal उपलब्धता, स्थानीय आवक, transport और थोक खरीदारों की मांग अनार के मंडी भाव में अंतर ला सकते हैं।",
    "advice": ["size और weight grade अलग रखें।", "दाग या फटे फल अच्छे lot में न मिलाएँ।", "प्रति किलो भाव के साथ फल की quality तुलना करें।"]
  },
  "sua": {
    "intro": "सुआ एक सुगंधित बीज वाली फसल है, जिसका उपयोग मसाले के रूप में होता है। इसे हरी सुआ पत्ती से अलग समझना जरूरी है, क्योंकि दोनों की बिक्री का रूप और भाव की इकाई अलग हो सकती है।",
    "quality": "सुआ के सूखे बीज में दाने की सफाई, एकरूपता, खुशबू, नमी और दूसरे बीजों या धूल की मिलावट बोली पर असर डाल सकती है। साफ और अच्छी तरह सूखा हुआ लॉट अलग गुणवत्ता में माना जाता है।",
    "market": "मौसमी आवक, स्थानीय मसाला कारोबार और उपलब्ध स्टॉक के कारण सुआ के भाव में मंडी-वार अंतर हो सकता है। उपलब्ध रिकॉर्ड आने पर मॉडल भाव के साथ न्यूनतम और अधिकतम रेट की तुलना करना उपयोगी रहेगा।",
    "advice": ["सुआ और सुआ पत्ती के भाव को एक-दूसरे से न मिलाएं।", "बिक्री से पहले दाने की नमी, सफाई और मिलावट अलग से जांचें।", "एक ही रेट के बजाय उपलब्ध मंडियों के मॉडल भाव और रिकॉर्ड की तारीख देखें।"]
  },
  "sua-patti": {
    "intro": "सुआ पत्ती ताजी, खुशबूदार हरी पत्तियों वाली मौसमी सब्जी है। यह सूखे सुआ बीज से अलग उत्पाद है और इसकी कीमत सामान्यतः प्रति किलो समझी जाती है।",
    "quality": "ताजगी, हरा रंग, कोमल पत्तियां, साफ छंटाई और बिना मुरझाए बंडल सुआ पत्ती की गुणवत्ता में फर्क लाते हैं। पीली, दबाई हुई या ज्यादा डंठल वाली पत्तियों का भाव अलग हो सकता है।",
    "market": "सर्दियों की स्थानीय आवक, जल्दी खराब होने की प्रकृति और आसपास की मांग के कारण सुआ पत्ती का बाजार भाव तेजी से बदल सकता है। उपलब्ध रिकॉर्ड में प्रति किलो भाव देखकर ही तुलना करें।",
    "advice": ["सुआ पत्ती का भाव सूखे सुआ बीज से अलग देखें।", "ताजे और मुरझाए बंडल अलग रखकर गुणवत्ता समझें।", "खरीद या बिक्री से पहले प्रति किलो दर और बंडल की ताजगी दोनों देखें।"]
  }
};

MB.faqs = {
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
  "gujarat": [
    {
      "q": "राजकोट में क्या खबर है?",
      "a": "राजकोट गुजरात की covered मंडियों में है। इस राज्य page पर उपलब्ध फसलों का भाव और राजकोट सहित सभी covered मंडियों की सूची देखी जा सकती है।"
    },
    {
      "q": "सूरत मंडी में आज के भाव क्या हैं?",
      "a": "सूरत मंडी अभी हमारी covered मंडियों की सूची में शामिल नहीं है। इस page पर गुजरात की जिन मंडियों के उपलब्ध भाव हैं, वे दिखाए जाते हैं।"
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
    { "q": "Rajasthan Mandi Bhav today", "a": "राजस्थान की सभी प्रमुख कृषि उपज मंडियों (जैसे कोटा, रामगंज मंडी, केकड़ी, बीकानेर, नोखा, श्रीगंगानगर, मेड़ता और जयपुर आदि) के आज के ताज़ा भाव (उपलब्ध भाव) भाव रोज़ाना source से प्राप्त और हमारी वेबसाइट पर अपडेट किए जाते हैं। यहाँ आप सरसों, गेहूं, चना, ग्वार, मूंगफली, सोयाबीन, धनिया, जीरा और इसबगोल जैसी सभी प्रमुख फसलों के न्यूनतम और अधिकतम भाव विस्तार से देख सकते हैं। आज के उपलब्ध नवीनतम और उपलब्ध मंडी भाव जानने के लिए कृपया पेज को ऊपर की तरफ स्क्रॉल करें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
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
    { "q": "मूंग का भाव क्या है?", "a": "अगर आप आज का ताज़ा मूंग का भाव जानना चाहते हैं, तो इसकी पूरी जानकारी ऊपर लिस्ट में दी गई है। मूंग की क्वालिटी (हल्का, मीडियम या बढ़िया) और मंडियों में उसकी डिमांड के हिसाब से हर दिन कीमतों में उतार-चढ़ाव देखने को मिलता है। हमने इसी पेज पर ऊपर की तरफ जो टेबल दी है, उसमें मूंग के आज के सबसे सटीक और उपलब्ध भाव दर्ज किए गए हैं, ताकि किसानों और व्यापारियों को तुरंत सही जानकारी मिल सके। कृपया आज का मंडी रेट देखने के लिए पेज को थोड़ा ऊपर की ओर स्क्रॉल करें।" }
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
  "pyaz": [{ "q": "1 किलो प्याज का रेट क्या है?", "a": "1 किलो प्याज का भाव मंडियों में दैनिक आवक, प्याज की वैरायटी और स्थानीय मांग के अनुसार तय होता है। विभिन्न कृषि उपज एवं सब्जी मंडियों में प्याज के ताज़ा न्यूनतम, अधिकतम और औसत भाव जानने के लिए कृपया इसी पेज के सबसे ऊपरी भाग में दी गई तालिका देखें। वहाँ आज के मंडी भाव की विस्तृत सूची नियमित रूप से अपडेट की जाती है। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }],
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
    { "q": "1 कुंटल धान की कीमत क्या है?", "a": "देश की विभिन्न मंडियों में 1 क्विंटल धान का मॉडल भाव (वह भाव जिस पर सबसे ज्यादा मात्रा में फसल का व्यापार हुआ हो) किस्म और गुणवत्ता के आधार पर अलग-अलग है। सामान्य धान का न्यूनतम समर्थन मूल्य (MSP) लगभग ₹2,441 से ₹2,461 प्रति क्विंटल तय किया गया है, जबकि बासमती व अन्य प्रीमियम किस्मों (जैसे 1121 या 1509) के मॉडल भाव मंडियों में ₹3,500 से ₹4,500 प्रति क्विंटल या उससे अधिक तक चल रहे हैं। सटीक और ताज़ा रेट देखने के लिए कृपया पेज को ऊपर स्क्रॉल करें।" },
    { "q": "Dhan 1121 mandi bhav today", "a": "The minimum, maximum, and modal prices (the price at which the highest volume of produce was traded) for 1121 paddy (dhan) in major mandis are updated in the table at the top of the page. Please scroll up to check the current rates." },
    { "q": "Dhan Mandi Bhav Today", "a": "The minimum, maximum, and modal prices (the price at which the highest volume of produce was traded) for paddy (dhan) across major mandis are updated in the table at the top of the page. Please scroll up to check the current rates." },
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
    { "crop": "narma", "q": "श्रीगंगानगर में नरमा का क्या भाव है?" },
    { "crop": "sarson", "q": "गंगानगर मंडी में आज सरसों का क्या भाव है?" },
    { "crop": "sarson", "q": "Sri ganganagar sarso mandi bhav today" },
    { "crop": "narma", "q": "Sri ganganagar mein narme ka bhav" },
    { "crop": "gwar", "q": "गंगानगर ग्वार का भाव" },
    { "crop": "narma", "q": "Narma ka bhav ganganagar" }
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
    { "crop": "pyaz", "q": "इंदौर मंडी में प्याज का आज का भाव क्या है?" },
    { "crop": "soyabean", "q": "आज इंदौर मंडी में सोयाबीन का क्या भाव है?" },
    { "crop": "gehun", "q": "इंदौर मंडी में गेहूं का आज का रेट क्या है?" },
    { "crop": "lahsun", "q": "इंदौर मंडी लहसुन भाव" },
    { "crop": "pyaz", "q": "Indore Mandi bhav pyaj" },
    { "crop": "gehun", "q": "इंदौर मंडी गेहूं का भाव" },
    { "crop": "chana", "q": "Indore Mandi Dollar Chana Bhav Today" },
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
    { "crop": "soyabean", "q": "मंदसौर मंडी में आज सोयाबीन का क्या भाव बिका?" },
    { "crop": "lahsun", "q": "मंदसौर में आज लहसुन का क्या भाव है?" },
    { "crop": "soyabean", "q": "मंदसौर मंडी भाव सोयाबीन" },
    { "crop": "gehun", "q": "मंदसौर मंडी गेहूं का भाव" },
    { "crop": "lahsun", "q": "मंदसौर मंडी भाव लहसुन" }
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
  "sri-ganganagar": MB.faqs["sri-ganganagar"],
  "anupgarh": MB.faqs["anupgarh"],
  "kota": MB.faqs["kota"],
  "indore": MB.faqs["indore"],
  "ujjain": MB.faqs["ujjain"],
  "harda": MB.faqs["harda"],
  "mandsaur": MB.faqs["mandsaur"],
  "ratlam": MB.faqs["ratlam"],
});
[
  "sri-ganganagar", "anupgarh", "kota", "indore",
  "ujjain", "harda", "mandsaur", "ratlam",
].forEach((slug) => delete MB.faqs[slug]);

Object.assign(MB.dynamicMandiFaqs, {
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
    { "crop": "narma", "q": "Narma bhav today goluwala" }
  ],
  "neemuch": [
    { "crop": "chirayata", "cropHi": "चिरायता", "q": "नीमच मंडी में चिरायता का आज का भाव क्या है?" },
    { "crop": "chia", "cropHi": "चिया", "q": "नीमच मंडी चिया भाव आज का" }
  ]
});

MB.dynamicCropFaqs = {
  "gehun": [
    { "type": "variety", "q": "1482 गेहूं का भाव" },
    { "type": "variety", "q": "देसी गेहूं का भाव" },
    { "type": "per-kg", "q": "गेहूं का भाव 1 kg" },
    { "type": "msp", "q": "Gehu ka bhav msp" }
  ],
  "dhan": [
    { "type": "variety", "q": "बासमती 30 नंबर का भाव क्या है?" },
    { "type": "variety", "q": "आज 1718 धान का ताजा भाव क्या है?" },
    { "type": "variety", "q": "बासमती का रेट क्या है?" }
  ]
};

Object.assign(MB.dynamicCropFaqs, {
  "gehun": (MB.dynamicCropFaqs["gehun"] || []).concat([
    { "type": "msp", "q": "गेहूं का रेट सरकारी" }
  ]),
  "pyaz": [
    { "type": "per-kg", "q": "1 किलो प्याज का आज का भाव क्या है?" }
  ],
  "lahsun": [
    { "type": "per-kg", "q": "1 किलो लहसुन का भाव क्या है?" }
  ]
});

MB.dynamicStateFaqs = {
  "rajasthan": [
    { "type": "state-crop", "crop": "gehun", "q": "गेहूं का भाव राजस्थान" }
  ],
  "haryana": [
    { "type": "state-crop", "crop": "dhan", "q": "आज हरियाणा में 1718 धान का भाव क्या है?" },
    { "type": "state-crop", "crop": "dhan", "q": "हरियाणा में 1509 धान का क्या रेट है?" },
    { "type": "state-crop", "crop": "gehun", "q": "हरियाणा में गेहूं का आज का रेट क्या है?" },
    { "type": "state-crop", "crop": "dhan", "q": "Dhan 1121 mandi bhav today haryana" },
    { "type": "state-crop", "crop": "bajra", "q": "हरियाणा में आज बाजरे का क्या भाव है?" }
  ],
  "gujarat": [
    { "type": "mandi-crop", "mandi": "rajkot", "crop": "jeera", "q": "राजकोट मंडी में जीरा का भाव क्या है?" },
    { "type": "state-crop", "crop": "gehun", "q": "आज गुजरात में गेहूं का क्या भाव है?" }
  ]
};

MB.pendingFaqs = {
  "sri-ganganagar": [
    { "q": "आज श्रीगंगानगर मंडी में क्या भाव चल रहे हैं?", "a": "श्रीगंगानगर मंडी में आज ग्वार, नरमा, कपास, गेंहू, जौ, सरसों और मूंग जैसी प्रमुख फसलों के हाजिर भाव क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई मंडी भाव सारणी में उपलब्ध है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई मूल्य तालिका को देखें। हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "sarson": [
    { "q": "Sarso ka bhav", "a": "इसकी विस्तृत जानकारी ऊपर दी गई मंडी भाव सारणी में उपलब्ध है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए, हमसे जुड़े रहने के लिए WhatsApp ग्रुप जॉइन करें।" }
  ],
  "narma": [
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
    { "q": "Dhamnod Mandi Bhav", "a": "धामनोद मंडी में आज कपास, सोयाबीन, गेहूं, मक्का और चना जैसी प्रमुख फसलों के हाजिर भाव क्या चल रहे हैं, इसकी विस्तृत जानकारी ऊपर दी गई है। कृषि जिंसों के ये दाम दैनिक आवक, गुणवत्ता और बाजार की मांग के अनुसार बदलते रहते हैं। सटीक और ताज़ा आंकड़ों के लिए कृपया ऊपर दी गई तालिका को देखें।" },
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

