// Mock Data based on Excel
const mockData = {
  personalizedAlerts: [
    { location: 'Dhaka', event: 'Flood', risk: 'High' },
    { location: 'Sylhet', event: 'Heavy Rain', risk: 'Medium' },
    { location: 'Rajshahi', event: 'Drought', risk: 'Low' }
  ],
  calendarEvents: {
    September: [
      { event: 'Cyclone', location: 'Coastal Districts', risk: 'Low', management: 'Secure ponds' }
    ],
    October: [
      { event: 'Flood', location: 'Northern Districts', risk: 'Medium', management: 'Drain excess water' }
    ],
    November: [
      { event: 'Cold Wave', location: 'All Districts', risk: 'Low', management: 'Insulate ponds' }
    ]
  },
  fishTips: {
    Tilapia: {
      1: 'Monitor oxygen levels; feed twice daily.',
      2: 'Check pH balance.',
      3: 'Aerate water if needed.',
      4: 'Harvest if mature.'
    },
    Carp: {
      1: 'Ensure water depth; add feed.',
      2: 'Watch for parasites.',
      3: 'Fertilize pond naturally.',
      4: 'Monitor growth.'
    },
    Shrimp: {
      1: 'Salinity check; stock juveniles.',
      2: 'Feed plankton.',
      3: 'Aerate constantly.',
      4: 'Harvest post-molt.'
    }
  },
  districtAlerts: [
    { event: 'Heavy Rain', location: 'Chittagong', risk: 'Medium', notice: 'Prepare for flooding (BMD/DoF Alert)' }
  ],
  weather: { // Mock from OpenWeatherMap/AccuWeather format
    temperature: '28°C',
    humidity: '85%',
    precipitation: '20mm (50% chance)',
    wind: '12 km/h',
    location: 'Chittagong',
    risk: 'Medium'
  }
};

// App Settings
let appSettings = {
  selectedDistrict: 'Dhaka',
  currentMonth: 'September',
  notifications: {
    highRisk: true,
    weather: true,
    tips: true
  }
};

// Get current month name
function getCurrentMonth() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[new Date().getMonth()];
}

// Function to show/hide sections
function showSection(sectionId) {
  // Remove active class from all sections and nav buttons
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  // Add active class to selected section and nav button
  document.getElementById(sectionId).classList.add('active');
  const navBtn = document.querySelector(`[data-section="${sectionId}"]`);
  if (navBtn) navBtn.classList.add('active');

  // Load section-specific data
  if (sectionId === 'dashboard') loadDashboard();
  if (sectionId === 'alerts') loadAlerts();
  if (sectionId === 'calendar') loadCalendar();
  if (sectionId === 'tips') loadTips();
  if (sectionId === 'district') loadDistrict();
  if (sectionId === 'settings') loadSettings();
}// Load Mobile Dashboard
function loadDashboard() {
  updateHeaderInfo();

  // Update Stats Row
  const alertCount = mockData.personalizedAlerts.filter(a =>
    a.location === appSettings.selectedDistrict || a.risk === 'High'
  ).length;

  const eventCount = mockData.calendarEvents[appSettings.currentMonth] ?
    mockData.calendarEvents[appSettings.currentMonth].length : 0;

  document.getElementById('alert-count').textContent = alertCount;
  document.getElementById('event-count').textContent = eventCount;
  document.getElementById('weather-temp').textContent = mockData.weather.temperature;

  // Priority Alert
  const priorityAlert = mockData.personalizedAlerts.find(a =>
    a.risk === 'High' && (a.location === appSettings.selectedDistrict || a.risk === 'High')
  );

  if (priorityAlert) {
    document.getElementById('priority-alert').innerHTML = `
      <div class="alert-content">
        <div class="alert-header">
          <span class="risk-badge ${priorityAlert.risk.toLowerCase()}">${priorityAlert.risk}</span>
          <span class="location-badge">${priorityAlert.location}</span>
        </div>
        <div class="alert-text">${priorityAlert.event}</div>
        <div class="alert-time">Active now</div>
      </div>`;
  } else {
    document.getElementById('priority-alert').innerHTML = `
      <div class="no-alert">
        <i class="fas fa-check-circle"></i>
        <span>No high priority alerts for ${appSettings.selectedDistrict}</span>
      </div>`;
  }

  // Today's Tip
  const currentWeek = Math.ceil(new Date().getDate() / 7);
  const tip = mockData.fishTips.Tilapia[currentWeek] || mockData.fishTips.Tilapia[1];
  document.getElementById('today-tip').innerHTML = `
    <div class="tip-content">
      <div class="tip-header">
        <span class="fish-badge">Tilapia</span>
        <span class="week-badge">Week ${currentWeek}</span>
      </div>
      <div class="tip-text">${tip}</div>
    </div>`;

  // Weather Alert (if any district alerts)
  if (mockData.districtAlerts.length > 0) {
    document.getElementById('weather-mobile-card').style.display = 'block';
    const w = mockData.weather;
    document.getElementById('weather-mobile').innerHTML = `
      <div class="weather-content">
        <div class="weather-main">${w.temperature} • ${w.humidity} humidity</div>
        <div class="weather-detail">${w.precipitation} expected</div>
        <div class="weather-risk ${w.risk.toLowerCase()}">
          <i class="fas fa-exclamation-triangle"></i> ${w.risk} Risk
        </div>
      </div>`;
  } else {
    document.getElementById('weather-mobile-card').style.display = 'none';
  }
}

// Update Header Information
function updateHeaderInfo() {
  document.getElementById('current-location').textContent = appSettings.selectedDistrict;
  document.getElementById('current-month').textContent = appSettings.currentMonth;
}

// Load Personalized Alerts
function loadAlerts() {
  const list = document.getElementById('alerts-list');
  list.innerHTML = '';

  // Filter alerts based on selected district and show high-priority alerts from any location
  const relevantAlerts = mockData.personalizedAlerts.filter(alert =>
    alert.location === appSettings.selectedDistrict || alert.risk === 'High'
  );

  relevantAlerts.forEach(alert => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-header">
        <h3><i class="fas fa-${alert.risk === 'High' ? 'exclamation-triangle' : alert.risk === 'Medium' ? 'exclamation-circle' : 'info-circle'}"></i> ${alert.event}</h3>
      </div>
      <div class="card-content">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ${alert.location}</p>
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
  const select = document.getElementById('month-select');
  const details = document.getElementById('calendar-details');

  // Set default to current month from settings
  select.value = appSettings.currentMonth;

  function update() {
    details.innerHTML = '';
    const month = select.value;
    const events = mockData.calendarEvents[month] || [];

    events.forEach(event => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-header">
          <h3><i class="fas fa-${event.event === 'Flood' ? 'water' : event.event === 'Cyclone' ? 'hurricane' : 'snowflake'}"></i> ${event.event}</h3>
        </div>
        <div class="card-content">
          <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ${event.location}</p>
          <div class="risk-${event.risk.toLowerCase()}">
            <i class="fas fa-shield-alt"></i> Risk Level: ${event.risk}
          </div>
          <div style="margin-top: 15px; padding: 12px; background: #f8f9fa; border-radius: 8px;">
            <p><i class="fas fa-tools"></i> <strong>Management Action:</strong> ${event.management}</p>
          </div>
        </div>`;
      details.appendChild(card);
    });

    if (events.length === 0) {
      details.innerHTML = '<div class="no-events">No events scheduled for this month.</div>';
    }
  }
  select.onchange = update;
  update(); // Initial load
}

// Load Tips
function loadTips() {
  const fishSelect = document.getElementById('fish-select');
  const weekSelect = document.getElementById('week-select');
  const details = document.getElementById('tips-details');
  function update() {
    const fish = fishSelect.value;
    const week = weekSelect.value;
    const tip = mockData.fishTips[fish][week];
    details.innerHTML = `
      <div class="card">
        <div class="card-header">
          <h3><i class="fas fa-fish"></i> ${fish} Management - Week ${week}</h3>
          <span class="status-badge">September 2025</span>
        </div>
        <div class="card-content">
          <div style="background: linear-gradient(135deg, #48bb78 0%, #38b2ac 100%); color: white; padding: 16px; border-radius: 12px; margin-bottom: 15px;">
            <i class="fas fa-lightbulb"></i> <strong>Recommended Action:</strong>
            <p style="margin: 8px 0 0 0; font-size: 16px;">${tip}</p>
          </div>
          <div style="background: #f8f9fa; padding: 12px; border-radius: 8px;">
            <p><i class="fas fa-info-circle"></i> <strong>Note:</strong> Follow local weather conditions and adjust practices accordingly.</p>
          </div>
        </div>
      </div>`;
  }
  fishSelect.onchange = update;
  weekSelect.onchange = update;
  update(); // Initial load
}

// Load District & Weather
function loadDistrict() {
  const list = document.getElementById('district-list');
  list.innerHTML = '';
  mockData.districtAlerts.forEach(alert => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-header">
        <h3><i class="fas fa-broadcast-tower"></i> ${alert.event}</h3>
        <span class="status-badge">BMD/DoF Alert</span>
      </div>
      <div class="card-content">
        <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ${alert.location}</p>
        <div class="risk-${alert.risk.toLowerCase()}">
          <i class="fas fa-shield-alt"></i> Risk Level: ${alert.risk}
        </div>
        <div style="margin-top: 15px; padding: 12px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 8px;">
          <p><i class="fas fa-bell"></i> <strong>Official Notice:</strong> ${alert.notice}</p>
        </div>
      </div>`;
    list.appendChild(card);
  });

  // Weather if alerts
  const weatherDiv = document.getElementById('weather-details');
  const weatherInfo = document.getElementById('weather-info');
  if (mockData.districtAlerts.length > 0) {
    weatherDiv.style.display = 'block';
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
    weatherDiv.style.display = 'none';
  }
}

// Helper function for alert details (can be expanded)
function viewAlertDetails(eventName) {
  alert(`Viewing details for: ${eventName}\n\nThis would typically open a detailed view with more information about the alert, recommended actions, and real-time updates.`);
}

// Load Settings
function loadSettings() {
  // Set current values
  document.getElementById('district-select').value = appSettings.selectedDistrict;

  const defaultMonthSelect = document.getElementById('default-month-select');
  if (appSettings.currentMonth === getCurrentMonth()) {
    defaultMonthSelect.value = 'current';
  } else {
    defaultMonthSelect.value = appSettings.currentMonth;
  }

  // Set notification toggles
  document.getElementById('high-risk-toggle').checked = appSettings.notifications.highRisk;
  document.getElementById('weather-toggle').checked = appSettings.notifications.weather;
  document.getElementById('tips-toggle').checked = appSettings.notifications.tips;
}

// Save Settings
function saveSettings() {
  const districtSelect = document.getElementById('district-select');
  const defaultMonthSelect = document.getElementById('default-month-select');

  // Update app settings
  appSettings.selectedDistrict = districtSelect.value;

  if (defaultMonthSelect.value === 'current') {
    appSettings.currentMonth = getCurrentMonth();
  } else {
    appSettings.currentMonth = defaultMonthSelect.value;
  }

  appSettings.notifications.highRisk = document.getElementById('high-risk-toggle').checked;
  appSettings.notifications.weather = document.getElementById('weather-toggle').checked;
  appSettings.notifications.tips = document.getElementById('tips-toggle').checked;

  // Save to localStorage (in real app, would sync with backend)
  localStorage.setItem('ewsSettings', JSON.stringify(appSettings));

  // Update header
  updateHeaderInfo();

  // Show success message
  showSuccessMessage('Settings saved successfully!');

  // Refresh dashboard if it's currently active
  if (document.getElementById('dashboard').classList.contains('active')) {
    loadDashboard();
  }
}

// Show success message
function showSuccessMessage(message) {
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
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

// Initialize app
function initializeApp() {
  // Load settings from localStorage
  const savedSettings = localStorage.getItem('ewsSettings');
  if (savedSettings) {
    appSettings = { ...appSettings, ...JSON.parse(savedSettings) };
  }

  // Set current month if not set
  if (!appSettings.currentMonth) {
    appSettings.currentMonth = getCurrentMonth();
  }

  // Initialize dashboard
  loadDashboard();
}

// Initial Load
initializeApp();