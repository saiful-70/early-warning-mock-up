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

// Function to show/hide sections
function showSection(sectionId) {
  // Remove active class from all sections and nav buttons
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  // Add active class to selected section and nav button
  document.getElementById(sectionId).classList.add('active');
  document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

  // Load section-specific data
  if (sectionId === 'dashboard') loadDashboard();
  if (sectionId === 'alerts') loadAlerts();
  if (sectionId === 'calendar') loadCalendar();
  if (sectionId === 'tips') loadTips();
  if (sectionId === 'district') loadDistrict();
}

// Load Dashboard
function loadDashboard() {
  // Alerts summary
  const highAlert = mockData.personalizedAlerts.find(a => a.risk === 'High');
  document.getElementById('alert-summary').innerHTML = highAlert ?
    `<div class="risk-${highAlert.risk.toLowerCase()}">
      <i class="fas fa-exclamation-triangle"></i> 
      ${highAlert.event} in ${highAlert.location} (${highAlert.risk} Risk)
    </div>` : '<div class="no-alerts">No high-priority alerts</div>';

  // Calendar summary (current month, assume September)
  const currentEvents = mockData.calendarEvents.September;
  document.getElementById('calendar-summary').innerHTML = currentEvents.length > 0 ?
    `<div class="event-summary">
      <i class="fas fa-calendar-day"></i> 
      ${currentEvents[0].event} - ${currentEvents[0].location} (${currentEvents[0].risk} Risk)
    </div>` : '<div class="no-events">No upcoming events</div>';

  // Tips summary (default Tilapia Week 1)
  document.getElementById('tips-summary').innerHTML = `
    <div class="tip-summary">
      <i class="fas fa-fish"></i> 
      <strong>Tilapia - Week 1:</strong> ${mockData.fishTips.Tilapia[1]}
    </div>`;

  // District summary
  const districtAlert = mockData.districtAlerts[0];
  document.getElementById('district-summary').innerHTML = districtAlert ?
    `<div class="risk-${districtAlert.risk.toLowerCase()}">
      <i class="fas fa-broadcast-tower"></i> 
      ${districtAlert.event} in ${districtAlert.location} (${districtAlert.risk} Risk)
    </div>` : '<div class="no-alerts">No district alerts</div>';

  // Weather if alerts present
  if (mockData.districtAlerts.length > 0) {
    document.getElementById('weather-card').style.display = 'block';
    const w = mockData.weather;
    document.getElementById('weather-summary').innerHTML = `
      <div class="weather-info">
        <div class="weather-main">
          <i class="fas fa-thermometer-half"></i> ${w.temperature} | 
          <i class="fas fa-tint"></i> ${w.humidity} | 
          <i class="fas fa-cloud-rain"></i> ${w.precipitation}
        </div>
        <div class="weather-details">
          <i class="fas fa-wind"></i> Wind: ${w.wind} | Location: ${w.location}
        </div>
        <div class="risk-${w.risk.toLowerCase()}">
          <i class="fas fa-exclamation-circle"></i> Risk Level: ${w.risk}
        </div>
      </div>`;
  } else {
    document.getElementById('weather-card').style.display = 'none';
  }
}

// Load Personalized Alerts
function loadAlerts() {
  const list = document.getElementById('alerts-list');
  list.innerHTML = '';
  mockData.personalizedAlerts.forEach(alert => {
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
}

// Load Calendar
function loadCalendar() {
  const select = document.getElementById('month-select');
  const details = document.getElementById('calendar-details');
  function update() {
    details.innerHTML = '';
    const month = select.value;
    mockData.calendarEvents[month].forEach(event => {
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

// Initial Load
showSection('dashboard');