// Translation data for multilingual support
const translations = {
  bengali: {
    // Header
    appTitle: "ইডব্লিউএস",
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
    tips: "মাছ চাষ",
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
    tips: "Fish Farming",
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
      description:
        "A freshwater carp species native to rivers in Bangladesh. It's one of the most popular food fishes in the country.",
      details:
        "Rui fish (Labeo rohita) is a major carp species that thrives in freshwater ponds and rivers. It requires proper water quality management and regular feeding for optimal growth.",
    },
    Katla: {
      name: "কাতলা মাছ (Katla Fish)",
      description:
        "A large freshwater carp found in rivers and ponds throughout Bangladesh, known for its distinctive head.",
      details:
        "Katla (Catla catla) is a surface feeder that grows rapidly in well-managed ponds. It's highly valued for its taste and nutritional benefits in Bangladeshi cuisine.",
    },
    Chingri: {
      name: "চিংড়ি মাছ (Prawn)",
      description: "A highly valued aquaculture product in Bangladesh.",
      details:
        "Freshwater prawns are an important commercial species that thrive in both coastal and inland aquaculture systems.",
    },
    Pabda: {
      name: "পাবদা মাছ (Pabda Fish)",
      description:
        "A small indigenous catfish species popular for its soft texture and delicate taste.",
      details:
        "Pabda (Ompok pabda) is a small catfish that requires careful management in aquaculture. It prefers slow-moving water and is highly valued in local markets.",
    },
    Pangash: {
      name: "পাঙ্গাস মাছ (Pangasius Fish)",
      description:
        "A large catfish species widely farmed in Bangladesh for its fast growth rate and high yield.",
      details:
        "Pangasius (Pangasianodon hypophthalmus) is an economically important aquaculture species in Bangladesh. It's hardy, grows quickly, and adapts well to various farming conditions.",
    },
  },
  districtAlerts: [
    {
      event: "Heavy Rain",
      location: "Chittagong",
      risk: "Medium",
      notice: "Prepare for flooding (BMD/DoF Alert)",
    },
  ],
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
          <span class="risk-badge ${priorityAlert.risk.toLowerCase()}">${
      priorityAlert.risk
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

  const todayTipEl = document.getElementById("today-tip");
  if (todayTipEl && t && t.todaysTip) {
    todayTipEl.innerHTML = `
      <div class="tip-content">
        <div class="tip-header">
          <span class="fish-badge">${fishInfo.name}</span>
          <span class="week-badge">Fish Farming</span>
        </div>
        <div class="tip-text">${fishInfo.description}</div>
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
        <h3><i class="fas fa-${
          alert.risk === "High"
            ? "exclamation-triangle"
            : alert.risk === "Medium"
            ? "exclamation-circle"
            : "info-circle"
        }"></i> ${alert.event}</h3>
      </div>
      <div class="card-content">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ${
          alert.location
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
  const select = document.getElementById("month-select");
  const details = document.getElementById("calendar-details");

  // Set default to current month from settings
  select.value = appSettings.currentMonth;

  function update() {
    details.innerHTML = "";
    const month = select.value;
    const events = mockData.calendarEvents[month] || [];

    events.forEach((event) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-header">
          <h3><i class="fas fa-${
            event.event === "Flood"
              ? "water"
              : event.event === "Cyclone"
              ? "hurricane"
              : "snowflake"
          }"></i> ${event.event}</h3>
        </div>
        <div class="card-content">
          <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ${
            event.location
          }</p>
          <div class="risk-${event.risk.toLowerCase()}">
            <i class="fas fa-shield-alt"></i> Risk Level: ${event.risk}
          </div>
          <div style="margin-top: 15px; padding: 12px; background: #f8f9fa; border-radius: 8px;">
            <p><i class="fas fa-tools"></i> <strong>Management Action:</strong> ${
              event.management
            }</p>
          </div>
        </div>`;
      details.appendChild(card);
    });

    if (events.length === 0) {
      details.innerHTML =
        '<div class="no-events">No events scheduled for this month.</div>';
    }
  }
  select.onchange = update;
  update(); // Initial load
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

    // Create accordion items for each fish
    fishTypes.forEach((fishType) => {
      const fish = mockData.fishTips[fishType];
      accordionHTML += `
        <div class="accordion-item">
          <div class="accordion-header" onclick="toggleAccordion(this)">
            <h3><i class="fas fa-fish"></i> ${fish.name}</h3>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="accordion-content">
            <div class="fish-description">
              <p>${fish.description}</p>
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
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ${
          alert.location
        }</p>
        <div class="risk-${alert.risk.toLowerCase()}">
          <i class="fas fa-shield-alt"></i> Risk Level: ${alert.risk}
        </div>
        <div style="margin-top: 15px; padding: 12px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 8px;">
          <p><i class="fas fa-bell"></i> <strong>Official Notice:</strong> ${
            alert.notice
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
          <p><i class="fas fa-map-marker-alt"></i> <strong>${t.location}</strong> ${
        alert.location
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

  const tipsBtn = document.querySelector('button[data-section="tips"] span');
  if (tipsBtn) tipsBtn.textContent = t.tips;

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

    console.log(hash)

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
