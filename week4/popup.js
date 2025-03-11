document.addEventListener('DOMContentLoaded', function() {
    // Load stats and settings
    loadStats();
    loadSettings();
    loadRecentThreats();
    
    // Set up event listeners
    document.getElementById('gmail-toggle').addEventListener('change', updateSettings);
    document.getElementById('linkedin-toggle').addEventListener('change', updateSettings);
    document.getElementById('notifications-toggle').addEventListener('change', updateSettings);
    document.getElementById('scan-level').addEventListener('change', updateSettings);
    document.getElementById('view-dashboard').addEventListener('click', openDashboard);
    
    // Update stats periodically
    setInterval(loadStats, 5000);
  });
  
  // Load user stats
  function loadStats() {
    chrome.storage.local.get(['scansCompleted', 'threatsDetected'], function(data) {
      document.getElementById('scans-completed').textContent = data.scansCompleted || 0;
      document.getElementById('threats-detected').textContent = data.threatsDetected || 0;
    });
  }
  
  // Load user settings
  function loadSettings() {
    chrome.storage.local.get(['enabledSites', 'scanLevel', 'notifications'], function(data) {
      const enabledSites = data.enabledSites || ['gmail', 'linkedin'];
      document.getElementById('gmail-toggle').checked = enabledSites.includes('gmail');
      document.getElementById('linkedin-toggle').checked = enabledSites.includes('linkedin');
      
      document.getElementById('notifications-toggle').checked = data.notifications !== false;
      document.getElementById('scan-level').value = data.scanLevel || 'high';
    });
  }
  function updateSettings() {
    const enabledSites = [];
    if (document.getElementById('gmail-toggle').checked) enabledSites.push('gmail');
    if (document.getElementById('linkedin-toggle').checked) enabledSites.push('linkedin');
    
    const settings = {
      enabledSites: enabledSites,
      scanLevel: document.getElementById('scan-level').value,
      notifications: document.getElementById('notifications-toggle').checked
    };
    
    chrome.storage.local.set(settings, function() {
      console.log('Settings updated');
    });
  }
  
  // Load recent threats
  function loadRecentThreats() {
    chrome.storage.local.get('recentThreats', function(data) {
      const recentThreats = data.recentThreats || [];
      const container = document.getElementById('recent-threats');
      
      if (recentThreats.length === 0) {
        container.innerHTML = '<div class="empty-state">No threats detected recently</div>';
        return;
      }
      
      container.innerHTML = '';
      
      // Display up to 5 most recent threats
      recentThreats.slice(0, 5).forEach(function(threat) {
        const threatItem = document.createElement('div');
        threatItem.className = 'threat-item';
        threatItem.innerHTML = `
        <div class="threat-icon">⚠</div>
        <div class="threat-details">
          <div>${threat.type || 'Suspicious link'}</div>
          <div class="threat-url">${formatUrl(threat.url)}</div>
        </div>
      `;
      
      container.appendChild(threatItem);
    });
  });
}

// Format URL for display
function formatUrl(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname + urlObj.pathname.substring(0, 15) + (urlObj.pathname.length > 15 ? '...' : '');
  } catch (e) {
    return url.substring(0, 30) + (url.length > 30 ? '...' : '');
  }
}

// Open dashboard
function openDashboard() {
  chrome.tabs.create({ url: 'https://phishingshield.com/dashboard' });
}    