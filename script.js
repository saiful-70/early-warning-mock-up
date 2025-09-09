// Translation data for multilingual support
const translations = {
  bengali: {
    // Header
    appTitle: "EWS",
    // Dashboard
    alerts: "সতর্কতা",
    events: "ইভেন্টস",
    temperature: "তাপমাত্রা",
    priorityAlert: "অগ্রাধিকার সতর্কতা",
    todaysTip: "আজকের টিপস",
    weatherAlert: "আবহাওয়া সতর্কতা",
    noHighPriorityAlerts: "কোন উচ্চ অগ্রাধিকার সতর্কতা নেই",
    activeNow: "এখন সক্রিয়",
    // Calendar
    selectMonth: "মাস নির্বাচন করুন:",
    location: "অবস্থান:",
    riskLevel: "ঝুঁকির মাত্রা:",
    managementAction: "ব্যবস্থাপনা পদক্ষেপ:",
    noEvents: "এই মাসে কোন ইভেন্ট নির্ধারিত নেই।",
    // Fish Farming
    selectFish: "মাছ নির্বাচন করুন:",
    selectWeek: "সপ্তাহ নির্বাচন করুন:",
    recommendedAction: "প্রস্তাবিত পদক্ষেপ:",
    note: "নোট:",
    followLocalWeather: "স্থানীয় আবহাওয়া অনুসরণ করুন এবং অনুশীলন সামঞ্জস্য করুন।",
    // Settings
    locationSettings: "অবস্থান সেটিংস",
    selectYourDistrict: "আপনার জেলা নির্বাচন করুন:",
    defaultMonth: "ডিফল্ট মাস",
    selectLanguage: "ভাষা নির্বাচন করুন:",
    notificationSettings: "বিজ্ঞপ্তি সেটিংস",
    highRiskAlerts: "উচ্চ ঝুঁকির সতর্কতা",
    weatherUpdates: "আবহাওয়া আপডেট",
    dailyTips: "দৈনিক টিপস",
    saveSettings: "সেটিংস সংরক্ষণ করুন",
    settingsSaved: "সেটিংস সফলভাবে সংরক্ষণ করা হয়েছে!",
    // Navigation
    home: "হোম",
    calendar: "ক্যালেন্ডার",
    fishFarming: "মাছ চাষ",
    settings: "সেটিংস",
    // Modal
    urgentAlerts: "জরুরি সতর্কতা",
    viewDetails: "বিস্তারিত দেখুন",
  },
  english: {
    // Header
    appTitle: "EWS",
    // Dashboard
    alerts: "Alerts",
    events: "Events",
    temperature: "Temperature",
    priorityAlert: "Priority Alert",
    todaysTip: "Today's Tip",
    weatherAlert: "Weather Alert",
    noHighPriorityAlerts: "No high priority alerts for",
    activeNow: "Active now",
    // Calendar
    selectMonth: "Select Month:",
    location: "Location:",
    riskLevel: "Risk Level:",
    managementAction: "Management Action:",
    noEvents: "No events scheduled for this month.",
    // Fish Farming
    selectFish: "Select Fish:",
    selectWeek: "Select Week:",
    recommendedAction: "Recommended Action:",
    note: "Note:",
    followLocalWeather:
      "Follow local weather conditions and adjust practices accordingly.",
    // Settings
    locationSettings: "Location Settings",
    selectYourDistrict: "Select Your District:",
    defaultMonth: "Default Month",
    selectLanguage: "Select Language:",
    notificationSettings: "Notification Settings",
    highRiskAlerts: "High Risk Alerts",
    weatherUpdates: "Weather Updates",
    dailyTips: "Daily Tips",
    saveSettings: "Save Settings",
    settingsSaved: "Settings saved successfully!",
    // Navigation
    home: "Home",
    calendar: "Calendar",
    fishFarming: "Fish Farming",
    settings: "Settings",
    // Modal
    urgentAlerts: "Urgent Alerts",
    viewDetails: "View Details",
  },
};

// Mock Data based on Excel
const mockData = {
  personalizedAlerts: [
    { location: "Dhaka", event: "Flood", risk: "High" },
    { location: "Sylhet", event: "Heavy Rain", risk: "Medium" },
    { location: "Rajshahi", event: "Drought", risk: "Low" },
  ],
  calendarEvents: {
    September: [
      {
        event: "Cyclone",
        location: "Coastal Districts",
        risk: "Low",
        management: "Secure ponds",
      },
    ],
    October: [
      {
        event: "Flood",
        location: "Northern Districts",
        risk: "Medium",
        management: "Drain excess water",
      },
    ],
    November: [
      {
        event: "Cold Wave",
        location: "All Districts",
        risk: "Low",
        management: "Insulate ponds",
      },
    ],
  },
  fishTips: {
    // 5 Bangladeshi fishes with descriptions
    Rui: {
      name: "রুই মাছ (Rui Fish)",
      description: {
        english:
          "A freshwater carp species native to rivers in Bangladesh. It's one of the most popular food fishes in the country.",
        bengali:
          "বাংলাদেশের নদীতে পাওয়া একটি মিঠা পানির কার্প প্রজাতি। এটি দেশের সবচেয়ে জনপ্রিয় খাদ্য মাছের মধ্যে একটি।",
      },
      details: {
        english:
          "Rui fish (Labeo rohita) is a major carp species that thrives in freshwater ponds and rivers. It requires proper water quality management and regular feeding for optimal growth.",
        bengali:
          "রুই মাছ (লেবিও রোহিতা) একটি প্রধান কার্প প্রজাতি যা মিঠা পানির পুকুর এবং নদীতে বেড়ে ওঠে। সর্বোত্তম বৃদ্ধির জন্য এটি উপযুক্ত পানির গুণমান ব্যবস্থাপনা এবং নিয়মিত খাওয়ানো প্রয়োজন।",
      },
    },
    Katla: {
      name: "কাতলা মাছ (Katla Fish)",
      description: {
        english:
          "A large freshwater carp found in rivers and ponds throughout Bangladesh, known for its distinctive head.",
        bengali:
          "বাংলাদেশের নদী এবং পুকুরে পাওয়া একটি বড় মিঠা পানির কার্প, এর স্বতন্ত্র মাথার জন্য পরিচিত।",
      },
      details: {
        english:
          "Katla (Catla catla) is a surface feeder that grows rapidly in well-managed ponds. It's highly valued for its taste and nutritional benefits in Bangladeshi cuisine.",
        bengali:
          "কাতলা (ক্যাটলা ক্যাটলা) একটি পৃষ্ঠ ফিডার যা সুপরিচালিত পুকুরে দ্রুত বৃদ্ধি পায়। এটি বাংলাদেশী রান্নায় এর স্বাদ এবং পুষ্টিগত উপকারিতার জন্য অত্যন্ত মূল্যবান।",
      },
    },
    Chingri: {
      name: "চিংড়ি মাছ (Prawn)",
      description: {
        english: "A highly valued aquaculture product in Bangladesh.",
        bengali: "বাংলাদেশে অত্যন্ত মূল্যবান জলজ চাষের পণ্য।",
      },
      details: {
        english:
          "Freshwater prawns are an important commercial species that thrive in both coastal and inland aquaculture systems.",
        bengali:
          "মিঠা পানির চিংড়ি একটি গুরুত্বপূর্ণ বাণিজ্যিক প্রজাতি যা উপকূলীয় এবং অভ্যন্তরীণ জলজ চাষ ব্যবস্থায় বেড়ে ওঠে।",
      },
    },
    Pabda: {
      name: "পাবদা মাছ (Pabda Fish)",
      description: {
        english:
          "A small indigenous catfish species popular for its soft texture and delicate taste.",
        bengali:
          "একটি ছোট দেশীয় ক্যাটফিশ প্রজাতি যা এর নরম টেক্সচার এবং সূক্ষ্ম স্বাদের জন্য জনপ্রিয়।",
      },
      details: {
        english:
          "Pabda (Ompok pabda) is a small catfish that requires careful management in aquaculture. It prefers slow-moving water and is highly valued in local markets.",
        bengali:
          "পাবদা (ওমপক পাবদা) একটি ছোট ক্যাটফিশ যা জলজ চাষে সতর্ক ব্যবস্থাপনা প্রয়োজন। এটি ধীর গতির পানি পছন্দ করে এবং স্থানীয় বাজারে অত্যন্ত মূল্যবান।",
      },
    },
    Pangash: {
      name: "পাঙ্গাস মাছ (Pangasius Fish)",
      description: {
        english:
          "A large catfish species widely farmed in Bangladesh for its fast growth rate and high yield.",
        bengali:
          "একটি বড় ক্যাটফিশ প্রজাতি যা বাংলাদেশে এর দ্রুত বৃদ্ধির হার এবং উচ্চ ফলনের জন্য ব্যাপকভাবে চাষ করা হয়।",
      },
      details: {
        english:
          "Pangasius (Pangasianodon hypophthalmus) is an economically important aquaculture species in Bangladesh. It's hardy, grows quickly, and adapts well to various farming conditions.",
        bengali:
          "পাঙ্গাস (প্যাঙ্গাসিয়ানোডন হাইপোফথালমাস) বাংলাদেশে অর্থনৈতিকভাবে গুরুত্বপূর্ণ জলজ চাষের প্রজাতি। এটি শক্ত, দ্রুত বৃদ্ধি পায়, এবং বিভিন্ন চাষের অবস্থার সাথে ভালভাবে খাপ খায়।",
      },
    },
  },
  districtAlerts: [{ event: "Heavy Rain", location: "Chittagong", risk: "Medium", notice: "Prepare for flooding (BMD/DoF Alert)", },],
  // Fish farmer action recommendations for different disasters
  disasterActions: {
    Floods: {
      actions: [
        "Strengthen pond embankments to prevent overflow",
        "Install protective nets to prevent fish escape",
        "Move valuable brood stock to safer ponds",
        "Harvest marketable fish before flood peaks",
        "Monitor water quality closely after flooding subsides"
      ],
      actionsBengali: [
        "বন্যার পানি প্রবাহ রোধ করতে পুকুরের পাড় শক্তিশালী করুন",
        "মাছ পালিয়ে যাওয়া রোধ করতে সুরক্ষামূলক জাল স্থাপন করুন",
        "মূল্যবান প্রজনন স্টক নিরাপদ পুকুরে স্থানান্তর করুন",
        "বন্যার শীর্ষ সময়ের আগে বাজারজাত মাছ সংগ্রহ করুন",
        "বন্যার পানি কমার পর পানির গুণমান নিবিড়ভাবে পর্যবেক্ষণ করুন"
      ]
    },
    Cyclones: {
      actions: [
        "Lower water levels in ponds by 1-2 feet",
        "Cover ponds with nets to prevent debris damage",
        "Move equipment and feed to higher ground",
        "Secure all structures and equipment",
        "Prepare emergency oxygen supply systems"
      ],
      actionsBengali: [
        "পুকুরের পানির স্তর ১-২ ফুট কমিয়ে দিন",
        "আবর্জনা ক্ষতি রোধ করতে পুকুর জাল দিয়ে ঢেকে রাখুন",
        "সরঞ্জাম এবং খাবার উঁচু জায়গায় সরিয়ে রাখুন",
        "সমস্ত কাঠামো এবং সরঞ্জাম সুরক্ষিত করুন",
        "জরুরী অক্সিজেন সরবরাহ ব্যবস্থা প্রস্তুত রাখুন"
      ]
    },
    "Tidal/Storm Surges": {
      actions: [
        "Reinforce coastal pond embankments",
        "Install barriers to prevent saltwater intrusion",
        "Move freshwater species to inland ponds if possible",
        "Prepare freshwater reserves for post-surge dilution",
        "Monitor salinity levels closely after surge"
      ],
      actionsBengali: [
        "উপকূলীয় পুকুরের পাড় শক্তিশালী করুন",
        "লবণাক্ত পানি প্রবেশ রোধ করতে বাধা স্থাপন করুন",
        "সম্ভব হলে মিঠা পানির প্রজাতিগুলিকে অভ্যন্তরীণ পুকুরে স্থানান্তর করুন",
        "জলোচ্ছ্বাসের পরে পানি পাতলা করার জন্য মিঠা পানির সংরক্ষণ প্রস্তুত রাখুন",
        "জলোচ্ছ্বাসের পরে লবণাক্ততার মাত্রা নিবিড়ভাবে পর্যবেক্ষণ করুন"
      ]
    },
    Droughts: {
      actions: [
        "Deepen pond centers to create refuge areas",
        "Reduce stocking density to minimize oxygen demand",
        "Install water aeration systems",
        "Create shade over portions of ponds",
        "Establish emergency water supply options"
      ],
      actionsBengali: [
        "আশ্রয় এলাকা তৈরি করতে পুকুরের কেন্দ্র গভীর করুন",
        "অক্সিজেনের চাহিদা কমাতে স্টকিং ঘনত্ব কমান",
        "পানি বায়ুচলাচল ব্যবস্থা স্থাপন করুন",
        "পুকুরের অংশগুলির উপর ছায়া তৈরি করুন",
        "জরুরী পানি সরবরাহের বিকল্প স্থাপন করুন"
      ]
    },
    Heatwaves: {
      actions: [
        "Increase water depth to maintain lower temperatures",
        "Add aerators to increase oxygen levels",
        "Feed fish during cooler parts of the day",
        "Reduce feeding rates to decrease metabolism",
        "Monitor for signs of disease outbreaks"
      ],
      actionsBengali: [
        "নিম্ন তাপমাত্রা বজায় রাখতে পানির গভীরতা বাড়ান",
        "অক্সিজেনের মাত্রা বাড়াতে এয়ারেটর যোগ করুন",
        "দিনের ঠান্ডা সময়ে মাছকে খাওয়ান",
        "বিপাক কমাতে খাওয়ানোর হার কমান",
        "রোগের প্রাদুর্ভাবের লক্ষণগুলি পর্যবেক্ষণ করুন"
      ]
    },
    Coldwaves: {
      actions: [
        "Cover portions of ponds with plastic sheets",
        "Add organic materials to generate heat",
        "Reduce feeding during extreme cold periods",
        "Move fish to deeper ponds if possible",
        "Monitor for unusual behavior or mortality"
      ],
      actionsBengali: [
        "পুকুরের অংশগুলি প্লাস্টিক শীট দিয়ে ঢেকে রাখুন",
        "তাপ উৎপন্ন করতে জৈব উপাদান যোগ করুন",
        "অত্যধিক ঠান্ডার সময়ে খাওয়ানো কমান",
        "সম্ভব হলে মাছকে গভীর পুকুরে স্থানান্তর করুন",
        "অস্বাভাবিক আচরণ বা মৃত্যুর জন্য পর্যবেক্ষণ করুন"
      ]
    },
    "Heavy Rainfall": {
      actions: [
        "Ensure proper drainage systems are functioning",
        "Monitor water turbidity and oxygen levels",
        "Apply lime if pH drops significantly",
        "Temporarily stop feeding if water is highly turbid",
        "Check embankments for erosion or damage"
      ],
      actionsBengali: [
        "উপযুক্ত নিষ্কাশন ব্যবস্থা কার্যকর আছে তা নিশ্চিত করুন",
        "পানির ঘোলাটে এবং অক্সিজেনের মাত্রা পর্যবেক্ষণ করুন",
        "pH উল্লেখযোগ্যভাবে কমে গেলে চুন প্রয়োগ করুন",
        "পানি অত্যধিক ঘোলা হলে অস্থায়ীভাবে খাওয়ানো বন্ধ করুন",
        "ক্ষয় বা ক্ষতির জন্য পাড়গুলি পরীক্ষা করুন"
      ]
    },
    Lightning: {
      actions: [
        "Install lightning rods near large water bodies",
        "Avoid using metal equipment during storms",
        "Turn off electrical equipment during thunderstorms",
        "Check fish for unusual mortality after lightning strikes",
        "Have emergency aeration equipment ready"
      ],
      actionsBengali: [
        "বড় জলাশয়ের কাছে বজ্রপাত রড স্থাপন করুন",
        "ঝড়ের সময় ধাতব সরঞ্জাম ব্যবহার এড়িয়ে চলুন",
        "বজ্রঝড়ের সময় বৈদ্যুতিক সরঞ্জাম বন্ধ করুন",
        "বজ্রপাতের পরে অস্বাভাবিক মৃত্যুর জন্য মাছ পরীক্ষা করুন",
        "জরুরী বায়ুচলাচল সরঞ্জাম প্রস্তুত রাখুন"
      ]
    },
    Thunderstorm: {
      actions: [
        "Secure loose equipment that could be blown into ponds",
        "Check water quality after heavy storms",
        "Be prepared for sudden temperature changes",
        "Monitor oxygen levels after storms",
        "Check for debris that may have fallen into ponds"
      ],
      actionsBengali: [
        "আলগা সরঞ্জাম যা পুকুরে উড়ে যেতে পারে তা সুরক্ষিত করুন",
        "ভারী ঝড়ের পরে পানির গুণমান পরীক্ষা করুন",
        "হঠাৎ তাপমাত্রা পরিবর্তনের জন্য প্রস্তুত থাকুন",
        "ঝড়ের পরে অক্সিজেনের মাত্রা পর্যবেক্ষণ করুন",
        "পুকুরে পড়ে যাওয়া আবর্জনা পরীক্ষা করুন"
      ]
    },
    Diseases: {
      actions: [
        "Implement strict biosecurity measures",
        "Regularly monitor fish for signs of disease",
        "Maintain optimal water quality parameters",
        "Isolate affected ponds immediately",
        "Consult with fish health specialists for treatment options"
      ],
      actionsBengali: [
        "কঠোর জৈব নিরাপত্তা ব্যবস্থা বাস্তবায়ন করুন",
        "রোগের লক্ষণগুলির জন্য নিয়মিত মাছ পর্যবেক্ষণ করুন",
        "অনুকূল পানির গুণমান পরামিতি বজায় রাখুন",
        "প্রভাবিত পুকুরগুলি অবিলম্বে আলাদা করুন",
        "চিকিৎসার বিকল্পগুলির জন্য মাছের স্বাস্থ্য বিশেষজ্ঞদের সাথে পরামর্শ করুন"
      ]
    },
    Landslides: {
      actions: [
        "Avoid constructing ponds near steep slopes",
        "Build protective barriers above ponds in hilly areas",
        "Monitor soil stability during heavy rains",
        "Have emergency harvest plans ready",
        "Develop alternative water sources if primary sources are affected"
      ]
    }
  },
  weather: {
    // Mock from OpenWeatherMap/AccuWeather format
    temperature: "28°C",
    humidity: "85%",
    precipitation: "20mm (50% chance)",
    wind: "12 km/h",
    location: "Chittagong",
    risk: "Medium",
  },
};

// App Settings
let appSettings = {
  selectedDistrict: "Khulna",
  currentMonth: getCurrentMonth(),
  language: "bengali", // Default language is Bengali
  notifications: {
    highRisk: true,
    weather: true,
    tips: true,
  },
};

// Get current month name
function getCurrentMonth() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[new Date().getMonth()];
}

// Function to show/hide sections
function showSection(sectionId) {
  // Remove active class from all sections and nav buttons
  document.querySelectorAll("section").forEach((sec) => sec.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach((btn) => btn.classList.remove("active"));

  // Add active class to selected section and nav button
  // Handle the renamed section ID
  const actualSectionId = sectionId === "fish-farming" ? "tips" : sectionId;
  document.getElementById(actualSectionId).classList.add("active");
  const navBtn = document.querySelector(`[data-section="${sectionId}"]`);
  if (navBtn) navBtn.classList.add("active");

  // Load section-specific data
  if (sectionId === "dashboard") loadDashboard();
  if (sectionId === "calendar") loadCalendar();
  if (sectionId === "tips" || sectionId === "fish-farming") loadTips();
  if (sectionId === "district") loadDistrict();
  if (sectionId === "settings") loadSettings();

  // Update URL hash for navigation
  window.location.hash = sectionId;
} // Load dashboard content
function loadDashboard() {
  // Define t at the beginning of the function to ensure it's available throughout
  let t;
  try {
    updateHeaderInfo();

    t = translations[appSettings.language];
    if (!t) {
      console.error("Translation not found for language:", appSettings.language);
      return;
    }

    // Update stats
    const alertCount = mockData.personalizedAlerts.filter(
      (a) => a.location === appSettings.selectedDistrict || a.risk === "High"
    ).length;

    const eventCount = mockData.calendarEvents[appSettings.currentMonth]
      ? mockData.calendarEvents[appSettings.currentMonth].length
      : 0;

    const alertCountEl = document.getElementById("alert-count");
    if (alertCountEl) alertCountEl.textContent = alertCount;

    const eventCountEl = document.getElementById("event-count");
    if (eventCountEl) eventCountEl.textContent = eventCount;

    const weatherTempEl = document.getElementById("weather-temp");
    if (weatherTempEl) weatherTempEl.textContent = mockData.weather.temperature;

    // Update section titles
    const alertsLabel = document.querySelector("#dashboard .stats-label:nth-child(1)");
    if (alertsLabel) alertsLabel.textContent = t.alerts;

    const eventsLabel = document.querySelector("#dashboard .stats-label:nth-child(2)");
    if (eventsLabel) eventsLabel.textContent = t.events;

    const tempLabel = document.querySelector("#dashboard .stats-label:nth-child(3)");
    if (tempLabel) tempLabel.textContent = t.temperature;
  } catch (error) {
    console.error("Error loading dashboard:", error);
  }

  // Priority Alert
  const priorityAlert = mockData.personalizedAlerts.find(
    (a) =>
      a.risk === "High" &&
      (a.location === appSettings.selectedDistrict || a.risk === "High")
  );

  const priorityAlertEl = document.getElementById("priority-alert");
  if (priorityAlert && priorityAlertEl && t) {
    priorityAlertEl.innerHTML = `
      <div class="alert-content">
        <div class="alert-header">
          <span class="risk-badge ${priorityAlert.risk.toLowerCase()}">${priorityAlert.risk
      }</span>
          <span class="location-badge">${priorityAlert.location}</span>
        </div>
        <div class="alert-text">${priorityAlert.event}</div>
        <div class="alert-time">${t.activeNow}</div>
      </div>`;
  } else if (priorityAlertEl && t && t.noHighPriorityAlerts) {
    priorityAlertEl.innerHTML = `
      <div class="no-alert">
        <i class="fas fa-check-circle"></i>
        <span>${t.noHighPriorityAlerts} ${appSettings.selectedDistrict}</span>
      </div>`;
  }

  // Today's Tip - Fish Farming
  // Get a random fish from our list for the dashboard tip
  const fishTypes = Object.keys(mockData.fishTips);
  const randomFish = fishTypes[Math.floor(Math.random() * fishTypes.length)];
  const fishInfo = mockData.fishTips[randomFish];

  // Get the selected language
  const selectedLanguage = appSettings.language.toLowerCase();
  // Get description in the selected language or fallback to English
  const fishDescription =
    fishInfo.description[selectedLanguage] || fishInfo.description.english;

  const todayTipEl = document.getElementById("today-tip");
  if (todayTipEl && t && t.todaysTip) {
    todayTipEl.innerHTML = `
      <div class="tip-content">
        <div class="tip-header">
          <span class="fish-badge">${fishInfo.name}</span>
          <span class="week-badge">Fish Farming</span>
        </div>
        <div class="tip-text">${fishDescription}</div>
        <a href="fish-details.html?fish=${randomFish}&section=dashboard" class="tip-link">View Details</a>
      </div>`;
  }

  // Weather Alert (if any district alerts)
  if (mockData.districtAlerts.length > 0) {
    const weatherCardEl = document.getElementById("weather-mobile-card");
    if (weatherCardEl) weatherCardEl.style.display = "block";

    const w = mockData.weather;
    const weatherMobileEl = document.getElementById("weather-mobile");
    if (weatherMobileEl) {
      weatherMobileEl.innerHTML = `
        <div class="weather-content">
          <div class="weather-main">${w.temperature} • ${w.humidity} humidity</div>
          <div class="weather-detail">${w.precipitation} expected</div>
          <div class="weather-risk ${w.risk.toLowerCase()}">
            <i class="fas fa-exclamation-triangle"></i> ${w.risk} Risk
          </div>
        </div>`;
    }
  } else {
    const weatherCardEl = document.getElementById("weather-mobile-card");
    if (weatherCardEl) weatherCardEl.style.display = "none";
  }
}

// Update Header Information
function updateHeaderInfo() {
  document.getElementById("current-location").textContent = appSettings.selectedDistrict;
  document.getElementById("current-month").textContent = appSettings.currentMonth;

  // Use locale based on selected language
  const dateOptions = { month: "long", day: "numeric" };
  const locale = appSettings.language === "bengali" ? "bn-BD" : "en-US";
  // Update any date displays with proper localization
  const dateElements = document.querySelectorAll(".date-display");
  if (dateElements.length > 0) {
    dateElements.forEach((el) => {
      el.textContent = new Date().toLocaleDateString(locale, dateOptions);
    });
  }
}

// Load Personalized Alerts
function loadAlerts() {
  const list = document.getElementById("alerts-list");
  list.innerHTML = "";

  // Filter alerts based on selected district and show high-priority alerts from any location
  const relevantAlerts = mockData.personalizedAlerts.filter(
    (alert) => alert.location === appSettings.selectedDistrict || alert.risk === "High"
  );

  relevantAlerts.forEach((alert) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-header">
        <h3><i class="fas fa-${alert.risk === "High"
        ? "exclamation-triangle"
        : alert.risk === "Medium"
          ? "exclamation-circle"
          : "info-circle"
      }"></i> ${alert.event}</h3>
      </div>
      <div class="card-content">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ${alert.location
      }</p>
        <div class="risk-${alert.risk.toLowerCase()}">
          <i class="fas fa-shield-alt"></i> Risk Level: ${alert.risk}
        </div>
        <div class="alert-actions" style="margin-top: 15px;">
          <button class="action-btn" onclick="viewAlertDetails('${alert.event}')">
            <i class="fas fa-eye"></i> View Details
          </button>
        </div>
      </div>`;
    list.appendChild(card);
  });

  if (relevantAlerts.length === 0) {
    list.innerHTML = '<div class="no-alerts">No alerts for your selected district.</div>';
  }
}

// Load Calendar
function loadCalendar() {

  // ---- DATA ----
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // All 64 districts
  const districts = [
    // Barisal Division
    "Barguna",
    "Barisal",
    "Bhola",
    "Jhalokati",
    "Patuakhali",
    "Pirojpur",
    // Chittagong Division
    "Bandarban",
    "Brahmanbaria",
    "Chandpur",
    "Chittagong",
    "Cox's Bazar",
    "Comilla",
    "Feni",
    "Khagrachari",
    "Lakshmipur",
    "Noakhali",
    "Rangamati",
    // Dhaka Division
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Narayanganj",
    "Narsingdi",
    "Rajbari",
    "Shariatpur",
    "Tangail",
    // Khulna Division
    "Bagerhat",
    "Chuadanga",
    "Jessore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira",
    // Mymensingh Division
    "Jamalpur",
    "Mymensingh",
    "Netrokona",
    "Sherpur",
    // Rajshahi Division
    "Bogra",
    "Joypurhat",
    "Naogaon",
    "Natore",
    "Chapainawabganj",
    "Pabna",
    "Rajshahi",
    "Sirajganj",
    // Rangpur Division
    "Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon",
    // Sylhet Division
    "Habiganj",
    "Moulvibazar",
    "Sunamganj",
    "Sylhet",
  ];

  // Coastal districts (top-level array)
  const coastalDistricts = [
    "Bagerhat",
    "Barguna",
    "Barisal",
    "Bhola",
    "Chandpur",
    "Chittagong",
    "Cox's Bazar",
    "Feni",
    "Gopalganj",
    "Jhalokati",
    "Khulna",
    "Lakshmipur",
    "Narail",
    "Noakhali",
    "Patuakhali",
    "Pirojpur",
    "Satkhira",
    "Shariatpur",
    "Jessore",
  ];

  // base (default) matrix shared by most districts
  const baseMatrix = {
    Coldwaves: { months: ["January", "February", "December"], color: "#FFEB3B" },
    Diseases: {
      months: ["January", "February", "March", "April", "May", "June", "July"],
      color: "#F4A261",
    },
    Droughts: { months: ["February", "March", "April", "May"], color: "#0E6A87" },
    Floods: { months: ["June", "July", "August", "September"], color: "#F28C28" },
    Heatwaves: { months: ["April", "May", "June"], color: "#9ACD32" },
    "Heavy Rainfall": { months: ["June", "July", "August"], color: "#FFEB3B" },
    Lightning: { months: ["June", "July", "August", "September"], color: "#6A1B9A" },
    Thunderstorm: {
      months: ["March", "April", "May", "October", "November"],
      color: "#D16BAF",
    },
  };

  // districtOverrides: some example per-district overrides (these replace base entries for that district)
  const districtOverrides = {
    // Rangpur Division
    Rangpur: {
      Droughts: { months: ["January", "February", "March"], color: "#0E6A87" },
    },
    Dinajpur: {
      Heatwaves: { months: ["May", "June", "July"], color: "#9ACD32" },
    },

    // Sylhet Division
    Sylhet: {
      Floods: {
        months: ["May", "June", "July", "August", "September"],
        color: "#F28C28",
      },
      Diseases: { months: ["June", "July", "August"], color: "#F4A261" },
    },
    Sunamganj: {
      Floods: {
        months: ["May", "June", "July", "August", "September", "October"],
        color: "#F28C28",
      },
    },

    // Dhaka Division
    Dhaka: {
      Diseases: {
        months: ["March", "April", "May", "June", "July", "August"],
        color: "#F4A261",
      },
    },
    Tangail: {
      Lightning: {
        months: ["April", "May", "June", "July", "August", "September"],
        color: "#6A1B9A",
      },
    },

    // Khulna Division
    Jessore: {
      Droughts: { months: ["February", "March", "April"], color: "#0E6A87" },
    },
    Khulna: {
      Coldwaves: { months: ["January", "December"], color: "#FFEB3B" },
      Heatwaves: { months: ["April", "May"], color: "#9ACD32" },
    },

    // Rajshahi Division
    Rajshahi: {
      Heatwaves: { months: ["March", "April", "May", "June"], color: "#9ACD32" },
    },
    Naogaon: {
      Droughts: { months: ["March", "April", "May", "June"], color: "#0E6A87" },
    },

    // Example: hill-district landslide hazard (Bandarban)
    Bandarban: {
      Landslides: { months: ["June", "July", "August"], color: "#8B4513" },
    },
  };

  // programmatically add coastal hazards to coastal district overrides
  coastalDistricts.forEach((d) => {
    districtOverrides[d] = Object.assign({}, districtOverrides[d] || {}, {
      Cyclones: { months: ["April", "May", "October", "November"], color: "#F28C28" },
      "Tidal/Storm Surges": {
        months: ["April", "May", "October", "November"],
        color: "#0E6A87",
      },
    });
  });

  // ---- helpers ----
  function buildDistrictMatrix(districtName) {
    const override = districtOverrides[districtName] || {};
    const merged = {};
    // copy base
    Object.keys(baseMatrix).forEach(
      (k) =>
        (merged[k] = { months: [...baseMatrix[k].months], color: baseMatrix[k].color })
    );
    // apply overrides (adds or replaces)
    Object.keys(override).forEach(
      (k) =>
      (merged[k] = {
        months: [...(override[k].months || [])],
        color: override[k].color || "#ddd",
      })
    );
    return merged; // disaster -> { months, color }
  }

  // ---- DOM refs ----
  const districtSelect = document.getElementById("districtSelect");
  const disasterSelect = document.getElementById("disasterSelect");
  const calendarWrap = document.getElementById("calendarWrap");
  const legendWrap = document.getElementById("legend");

  // populate district select and set up listeners
  function initControls() {
    districts.forEach((d) => {
      const o = document.createElement("option");
      o.value = d;
      o.textContent = d;
      districtSelect.appendChild(o);
    });

    districtSelect.addEventListener("change", onDistrictChange);
    disasterSelect.addEventListener("change", onDisasterChange);

    // defaults
    districtSelect.value = districts.includes("Dhaka") ? "Dhaka" : districts[0];
    populateDisasterSelectAndRender();
  }

  // when district changes: rebuild matrix and repopulate disasters dropdown
  function populateDisasterSelectAndRender() {
    const district = districtSelect.value;
    const matrix = buildDistrictMatrix(district);
    const disasters = Object.keys(matrix).sort((a, b) => a.localeCompare(b));

    // Get translations for current language
    const t = translations[appSettings.language];

    // populate disaster select
    disasterSelect.innerHTML = "";
    const allOpt = document.createElement("option");
    allOpt.value = "all";

    // Translate "All disasters" based on language
    allOpt.textContent = appSettings.language === "bengali" ? "সব দুর্যোগ" : "All disasters";
    disasterSelect.appendChild(allOpt);
    // Disaster translations for Bengali
    const bengaliDisasters = {
      "Floods": "বন্যা",
      "Cyclones": "ঘূর্ণিঝড়",
      "Tidal/Storm Surges": "জলোচ্ছ্বাস",
      "Droughts": "খরা",
      "Heatwaves": "তাপপ্রবাহ",
      "Coldwaves": "শীতপ্রবাহ",
      "Heavy Rainfall": "ভারী বৃষ্টিপাত",
      "Lightning": "বজ্রপাত",
      "Thunderstorm": "বজ্রঝড়",
      "Diseases": "রোগ",
      "Landslides": "ভূমিধস"
    };

    disasters.forEach((d) => {
      const o = document.createElement("option");
      o.value = d;

      // Use translated disaster name if available
      if (appSettings.language === "bengali") {
        o.textContent = bengaliDisasters[d] || d;
      } else {
        o.textContent = d;
      }

      disasterSelect.appendChild(o);
    });
    disasterSelect.value = "all";
    renderCalendar(district, "all");
  }

  function onDistrictChange() {
    populateDisasterSelectAndRender();
    const disaster = disasterSelect.value;
    renderDisasterActions(disaster);
  }
  function onDisasterChange() {
    const district = districtSelect.value;
    const disaster = disasterSelect.value;
    renderCalendar(district, disaster);
    renderDisasterActions(disaster);
  }

  // render calendar: if selectedDisaster === 'all' show all rows; else show only that row
  function renderCalendar(district, selectedDisaster) {
    const matrix = buildDistrictMatrix(district);
    const disasters =
      selectedDisaster === "all" ? Object.keys(matrix) : [selectedDisaster];

    // table
    const table = document.createElement("table");
    table.className = "calendar";
    const thead = document.createElement("thead");
    const hrow = document.createElement("tr");
    const thTitle = document.createElement("th");
    // Use translated text for the header
    thTitle.textContent = appSettings.language === "bengali" ? "দুর্যোগ / মাস" : "Disaster / Month";
    hrow.appendChild(thTitle);
    months.forEach((m) => {
      const th = document.createElement("th");
      th.className = "month";

      // Get month abbreviation based on language
      let monthAbbr;
      if (appSettings.language === "bengali") {
        // Bengali month abbreviations
        const bengaliMonths = {
          "January": "জানু",
          "February": "ফেব্রু",
          "March": "মার্চ",
          "April": "এপ্রি",
          "May": "মে",
          "June": "জুন",
          "July": "জুলা",
          "August": "আগ",
          "September": "সেপ্টে",
          "October": "অক্টো",
          "November": "নভে",
          "December": "ডিসে"
        };
        monthAbbr = bengaliMonths[m] || m.slice(0, 3);
      } else {
        // Default English abbreviation
        monthAbbr = m.slice(0, 3);
      }

      th.textContent = monthAbbr;
      hrow.appendChild(th);
    });
    thead.appendChild(hrow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    // order disasters: put coastal hazards at end if present
    disasters.sort((a, b) => {
      if (a === "Cyclones") return 1;
      if (b === "Cyclones") return -1;
      if (a === "Tidal/Storm Surges") return 1;
      if (b === "Tidal/Storm Surges") return -1;
      return a.localeCompare(b);
    });

    disasters.forEach((disaster) => {
      const entry = matrix[disaster] || { months: [], color: "#fff" };
      const row = document.createElement("tr");
      const tdName = document.createElement("td");
      tdName.className = "disaster";
      tdName.textContent = disaster;
      row.appendChild(tdName);

      months.forEach((m) => {
        const td = document.createElement("td");
        if (entry.months.includes(m)) {
          td.style.backgroundColor = entry.color;
          td.title = `${disaster} — ${m}`;
        } else {
          td.style.backgroundColor = "#fff";
        }
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    calendarWrap.innerHTML = "";
    calendarWrap.appendChild(table);

    renderLegend(disasters, matrix);
  }

  function renderLegend(visibleDisasters, matrix) {
    legendWrap.innerHTML = "";
    // Disaster translations for Bengali
    const bengaliDisasters = {
      "Floods": "বন্যা",
      "Cyclones": "ঘূর্ণিঝড়",
      "Tidal/Storm Surges": "জলোচ্ছ্বাস",
      "Droughts": "খরা",
      "Heatwaves": "তাপপ্রবাহ",
      "Coldwaves": "শীতপ্রবাহ",
      "Heavy Rainfall": "ভারী বৃষ্টিপাত",
      "Lightning": "বজ্রপাত",
      "Thunderstorm": "বজ্রঝড়",
      "Diseases": "রোগ",
      "Landslides": "ভূমিধস"
    };

    visibleDisasters.forEach((d) => {
      const e = matrix[d];
      if (!e) return;
      const item = document.createElement("div");
      item.className = "item";
      const box = document.createElement("div");
      box.className = "color-box";
      box.style.backgroundColor = e.color || "#ddd";
      const label = document.createElement("div");

      // Use translated disaster name if available
      if (appSettings.language === "bengali") {
        label.textContent = bengaliDisasters[d] || d;
      } else {
        label.textContent = d;
      }

      item.appendChild(box);
      item.appendChild(label);
      legendWrap.appendChild(item);
    });
  }

  // Render disaster actions for fish farmers
  function renderDisasterActions(selectedDisaster) {
    const actionsContent = document.getElementById("actions-content");

    if (selectedDisaster === "all") {
      // Show a message to select a specific disaster
      const selectMessage = appSettings.language === "bengali" ?
        "অনুগ্রহ করে মাছ চাষীদের জন্য প্রস্তাবিত পদক্ষেপ দেখতে একটি নির্দিষ্ট দুর্যোগ নির্বাচন করুন।" :
        "Please select a specific disaster to see recommended actions for fish farmers.";

      actionsContent.innerHTML = `
        <div class="note">
          <i class="fas fa-info-circle"></i> ${selectMessage}
        </div>
      `;
      return;
    }

    // Get actions for the selected disaster
    const disasterAction = mockData.disasterActions[selectedDisaster];

    if (!disasterAction || !disasterAction.actions || disasterAction.actions.length === 0) {
      const noActionsMessage = appSettings.language === "bengali" ?
        `${selectedDisaster} এর জন্য কোন নির্দিষ্ট পদক্ষেপ উপলব্ধ নেই।` :
        `No specific actions available for ${selectedDisaster}.`;

      actionsContent.innerHTML = `
        <div class="no-actions">
          <i class="fas fa-exclamation-circle"></i> ${noActionsMessage}
        </div>
      `;
      return;
    }

    // Create list of actions
    let actionsList = '<ul class="action-list">';

    // Use Bengali actions if available and language is Bengali
    const actions = (appSettings.language === "bengali" && disasterAction.actionsBengali) ?
      disasterAction.actionsBengali : disasterAction.actions;

    actions.forEach(action => {
      actionsList += `<li>${action}</li>`;
    });
    actionsList += '</ul>';

    actionsContent.innerHTML = actionsList;
  }

  // init
  initControls();

  // Initialize disaster actions
  renderDisasterActions("all");

  // debug access:
  window.__DISASTER_DATA = {
    months,
    districts,
    coastalDistricts,
    baseMatrix,
    districtOverrides,
  };
}

// Load Tips - Fish Farming Accordion List
function loadTips() {
  const fishSelect = document.getElementById("fish-select");
  const details = document.getElementById("tips-details");

  // Function to create accordion list of all fish
  function createAccordionList() {
    let accordionHTML = '<div class="fish-accordion">';

    // Get all fish types
    const fishTypes = Object.keys(mockData.fishTips);

    // Get the selected language
    const selectedLanguage = appSettings.language.toLowerCase();

    // Create accordion items for each fish
    fishTypes.forEach((fishType) => {
      const fish = mockData.fishTips[fishType];
      // Get description in the selected language or fallback to English
      const description = fish.description[selectedLanguage] || fish.description.english;

      accordionHTML += `
        <div class="accordion-item">
          <div class="accordion-header" onclick="toggleAccordion(this)">
            <h3><i class="fas fa-fish"></i> ${fish.name}</h3>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="accordion-content">
            <div class="fish-description">
              <p>${description}</p>
              <button class="details-btn" onclick="showFishDetails('${fishType}')">View Details</button>
            </div>
          </div>
        </div>
      `;
    });

    accordionHTML += "</div>";
    details.innerHTML = accordionHTML;
  }

  // Function to show selected fish
  function showSelectedFish() {
    const fish = mockData.fishTips[fishSelect.value];
    details.innerHTML = `
      <div class="card">
        <div class="card-header">
          <h3><i class="fas fa-fish"></i> ${fish.name}</h3>
          <span class="status-badge">Fish Farming</span>
        </div>
        <div class="card-content">
          <div style="background: linear-gradient(135deg, #48bb78 0%, #38b2ac 100%); color: white; padding: 16px; border-radius: 12px; margin-bottom: 15px;">
            <p style="margin: 8px 0 0 0; font-size: 16px;">${fish.description}</p>
          </div>
          <div style="background: #f8f9fa; padding: 12px; border-radius: 8px; margin-bottom: 15px;">
            <p><i class="fas fa-info-circle"></i> <strong>Details:</strong> ${fish.details}</p>
          </div>
          <button class="btn primary-btn" onclick="createAccordionList()">Back to List</button>
        </div>
      </div>`;
  }

  // Add global functions for accordion and details
  window.toggleAccordion = function (element) {
    const content = element.nextElementSibling;
    const isActive = element.classList.contains("active");

    // Close all accordion items
    const allHeaders = document.querySelectorAll(".accordion-header");
    allHeaders.forEach((header) => {
      header.classList.remove("active");
      header.nextElementSibling.style.maxHeight = null;
    });

    // Toggle current item if it wasn't active
    if (!isActive) {
      element.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

  window.showFishDetails = function (fishType) {
    // Navigate to fish details page with fish type and current section as parameters
    const currentSection = document.querySelector("section.active").id;
    window.location.href = `fish-details.html?fish=${fishType}&section=${currentSection}`;
  };

  // Initialize with accordion list
  createAccordionList();
}

// Load District & Weather
function loadDistrict() {
  const list = document.getElementById("district-list");
  list.innerHTML = "";
  mockData.districtAlerts.forEach((alert) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-header">
        <h3><i class="fas fa-broadcast-tower"></i> ${alert.event}</h3>
        <span class="status-badge">BMD/DoF Alert</span>
      </div>
      <div class="card-content">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ${alert.location
      }</p>
        <div class="risk-${alert.risk.toLowerCase()}">
          <i class="fas fa-shield-alt"></i> Risk Level: ${alert.risk}
        </div>
        <div style="margin-top: 15px; padding: 12px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 8px;">
          <p><i class="fas fa-bell"></i> <strong>Official Notice:</strong> ${alert.notice
      }</p>
        </div>
      </div>`;
    list.appendChild(card);
  });

  // Weather if alerts
  const weatherDiv = document.getElementById("weather-details");
  const weatherInfo = document.getElementById("weather-info");
  if (mockData.districtAlerts.length > 0) {
    weatherDiv.style.display = "block";
    const w = mockData.weather;
    weatherInfo.innerHTML = `
      <div class="weather-grid">
        <div class="weather-item">
          <i class="fas fa-map-marker-alt"></i>
          <span><strong>Location:</strong> ${w.location}</span>
        </div>
        <div class="weather-item">
          <i class="fas fa-thermometer-half"></i>
          <span><strong>Temperature:</strong> ${w.temperature}</span>
        </div>
        <div class="weather-item">
          <i class="fas fa-tint"></i>
          <span><strong>Humidity:</strong> ${w.humidity}</span>
        </div>
        <div class="weather-item">
          <i class="fas fa-cloud-rain"></i>
          <span><strong>Precipitation:</strong> ${w.precipitation}</span>
        </div>
        <div class="weather-item">
          <i class="fas fa-wind"></i>
          <span><strong>Wind Speed:</strong> ${w.wind}</span>
        </div>
      </div>
      <div class="risk-${w.risk.toLowerCase()}" style="margin-top: 15px;">
        <i class="fas fa-exclamation-triangle"></i> Overall Weather Risk: ${w.risk}
      </div>`;
  } else {
    weatherDiv.style.display = "none";
  }
}

// Helper function for alert details (can be expanded)
function viewAlertDetails(eventName) {
  alert(
    `Viewing details for: ${eventName}\n\nThis would typically open a detailed view with more information about the alert, recommended actions, and real-time updates.`
  );
}

// Load Settings
function loadSettings() {
  try {
    // Set current values
    const districtSelect = document.getElementById("district-select");
    if (districtSelect) districtSelect.value = appSettings.selectedDistrict;

    const defaultMonthSelect = document.getElementById("default-month-select");
    if (defaultMonthSelect) {
      if (appSettings.currentMonth === getCurrentMonth()) {
        defaultMonthSelect.value = "current";
      } else {
        defaultMonthSelect.value = appSettings.currentMonth;
      }
    }

    // Set language selection
    const languageSelect = document.getElementById("language-select");
    if (languageSelect) languageSelect.value = appSettings.language;

    // Set notification toggles
    const highRiskToggle = document.getElementById("high-risk-toggle");
    if (highRiskToggle) highRiskToggle.checked = appSettings.notifications.highRisk;

    const weatherToggle = document.getElementById("weather-toggle");
    if (weatherToggle) weatherToggle.checked = appSettings.notifications.weather;

    const tipsToggle = document.getElementById("tips-toggle");
    if (tipsToggle) tipsToggle.checked = appSettings.notifications.tips;

    // Apply current language
    applyLanguage(appSettings.language);
  } catch (error) {
    console.error("Error loading settings:", error);
  }
}

// Save Settings
function saveSettings() {
  const districtSelect = document.getElementById("district-select");
  const defaultMonthSelect = document.getElementById("default-month-select");

  // Update app settings
  appSettings.selectedDistrict = districtSelect.value;

  if (defaultMonthSelect.value === "current") {
    appSettings.currentMonth = getCurrentMonth();
  } else {
    appSettings.currentMonth = defaultMonthSelect.value;
  }

  // Update language preference
  const newLanguage = document.getElementById("language-select").value;
  const languageChanged = appSettings.language !== newLanguage;
  appSettings.language = newLanguage;

  // Store language separately for access by other pages
  localStorage.setItem("language", newLanguage);

  appSettings.notifications.highRisk =
    document.getElementById("high-risk-toggle").checked;
  appSettings.notifications.weather = document.getElementById("weather-toggle").checked;
  appSettings.notifications.tips = document.getElementById("tips-toggle").checked;

  // Save to localStorage (in real app, would sync with backend)
  localStorage.setItem("ewsSettings", JSON.stringify(appSettings));

  // Apply language if changed
  if (languageChanged) {
    applyLanguage(appSettings.language);
  }

  // Update header
  updateHeaderInfo();

  // Show success message
  const successMessage = translations[appSettings.language].settingsSaved;
  showSuccessMessage(successMessage);

  // Refresh dashboard if it's currently active
  if (document.getElementById("dashboard").classList.contains("active")) {
    loadDashboard();
  }
}

// Show success message
function showSuccessMessage(message) {
  const successDiv = document.createElement("div");
  successDiv.className = "success-message";
  successDiv.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(successDiv);

  // Remove after 3 seconds
  setTimeout(() => {
    successDiv.remove();
  }, 3000);
}

// Show Alert Modal
function showAlertModal() {
  const modal = document.getElementById("alert-modal");
  const modalAlertsList = document.getElementById("modal-alerts-list");
  modalAlertsList.innerHTML = "";

  // Get translations for current language
  const t = translations[appSettings.language];

  // Update modal title
  const modalTitle = document.querySelector("#alert-modal .modal-header h2");
  if (modalTitle && t && t.urgentAlerts) {
    modalTitle.textContent = t.urgentAlerts;
  }

  // Filter high risk alerts
  const urgentAlerts = mockData.personalizedAlerts.filter(
    (alert) =>
      alert.risk === "High" &&
      (alert.location === appSettings.selectedDistrict ||
        appSettings.notifications.highRisk)
  );

  if (urgentAlerts.length > 0) {
    urgentAlerts.forEach((alert) => {
      const alertElement = document.createElement("div");
      alertElement.className = "card";
      alertElement.innerHTML = `
        <div class="card-header">
          <h3><i class="fas fa-exclamation-triangle"></i> ${alert.event}</h3>
          <p><i class="fas fa-map-marker-alt"></i> <strong>${t.location}</strong> ${alert.location
        }</p>
        </div>
        <div class="card-content">
          <div class="risk-${alert.risk.toLowerCase()}">
            <i class="fas fa-shield-alt"></i> ${t.riskLevel} ${alert.risk}
          </div>
        </div>`;
      modalAlertsList.appendChild(alertElement);
    });

    modal.style.display = "block";
  }
}

// Close Alert Modal
function closeAlertModal() {
  const modal = document.getElementById("alert-modal");
  modal.style.display = "none";
}

// Apply selected language to the UI
function applyLanguage(language) {
  if (!language || !translations[language]) {
    console.error("Invalid language or translation not found:", language);
    return;
  }

  const t = translations[language];

  // Update header
  const appTitle = document.querySelector(".app-title span");
  if (appTitle) appTitle.textContent = t.appTitle;

  // Update navigation
  const dashboardBtn = document.querySelector('button[data-section="dashboard"] span');
  if (dashboardBtn) dashboardBtn.textContent = t.home;

  const calendarBtn = document.querySelector('button[data-section="calendar"] span');
  if (calendarBtn) calendarBtn.textContent = t.calendar;

  const fishFarmingBtn = document.querySelector(
    'button[data-section="fish-farming"] span'
  );
  if (fishFarmingBtn) fishFarmingBtn.textContent = t.fishFarming;

  const settingsBtn = document.querySelector('button[data-section="settings"] span');
  if (settingsBtn) settingsBtn.textContent = t.settings;

  // Update settings section
  const settingsGroups = document.querySelectorAll("#settings .settings-group");
  if (settingsGroups.length >= 1) {
    const h3 = settingsGroups[0].querySelector("h3");
    if (h3) h3.textContent = t.locationSettings;

    const label = settingsGroups[0].querySelector("label");
    if (label) label.textContent = t.selectYourDistrict;
  }
  if (settingsGroups.length >= 2) {
    const h3 = settingsGroups[1].querySelector("h3");
    if (h3) h3.textContent = t.selectLanguage;

    const label = settingsGroups[1].querySelector("label");
    if (label) label.textContent = t.selectLanguage;
  }
  if (settingsGroups.length >= 3) {
    const h3 = settingsGroups[2].querySelector("h3");
    if (h3) h3.textContent = t.defaultMonth;

    const label = settingsGroups[2].querySelector("label");
    if (label) label.textContent = t.selectMonth;
  }
  if (settingsGroups.length >= 4) {
    const h3 = settingsGroups[3].querySelector("h3");
    if (h3) h3.textContent = t.notificationSettings;

    const labels = settingsGroups[3].querySelectorAll(".toggle-item span.toggle-label");
    if (labels.length >= 1) labels[0].textContent = t.highRiskAlerts;
    if (labels.length >= 2) labels[1].textContent = t.dailyTips;
    if (labels.length >= 3) labels[2].textContent = t.weatherUpdates;
  }

  // Update save button
  const saveButton = document.querySelector(".settings-actions button");
  if (saveButton) saveButton.textContent = t.saveSettings;

  // Update modal title
  const modalTitle = document.querySelector("#alert-modal .modal-header h2");
  if (modalTitle && t && t.urgentAlerts) {
    modalTitle.textContent = t.urgentAlerts;
  }
}

// Initialize app
function initializeApp() {
  // Load settings from localStorage
  const savedSettings = localStorage.getItem("ewsSettings");
  if (savedSettings) {
    appSettings = { ...appSettings, ...JSON.parse(savedSettings) };
  }

  // Set current month if not set
  if (!appSettings.currentMonth) {
    appSettings.currentMonth = getCurrentMonth();
  }

  // Apply language and initialize app
  try {
    // Store language separately for access by other pages
    localStorage.setItem("language", appSettings.language);

    // Apply language settings immediately
    applyLanguage(appSettings.language);

    // Load settings and dashboard
    loadSettings();
    loadDashboard();

    // Check URL hash for navigation
    const hash = window.location.hash.substring(1);

    // Check if first time visit
    const isFirstLoad = localStorage.getItem("isFirstLoad") !== "false";

    if (isFirstLoad) {
      // First time users see settings
      localStorage.setItem("isFirstLoad", "false");
      showSection("settings");
    } else if (
      hash &&
      ["dashboard", "calendar", "tips", "fish-farming", "settings"].includes(hash)
    ) {
      // If valid hash exists in URL, show that section
      showSection(hash);
    } else {
      // Returning users see dashboard with alerts
      showSection("dashboard");
      if (typeof showAlertModal === "function") {
        showAlertModal();
      }
    }

    // Set up modal close button
    const closeBtn = document.querySelector(".close-btn");
    if (closeBtn && typeof closeAlertModal === "function") {
      closeBtn.addEventListener("click", closeAlertModal);
    }
  } catch (error) {
    console.error("Error initializing app:", error);
    // Fallback to dashboard on error
    showSection("dashboard");
  }
}

// Initial Load
if (document.readyState === "loading") {
  // Document still loading, add event listener
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  // Document already loaded, run immediately
  initializeApp();
}
