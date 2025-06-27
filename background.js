let activeTabId = null;
let currentDomain = null;
let startTime = null;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  await updateTime();
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    startTracking(tab);
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === "complete") {
    updateTime().then(() => startTracking(tab));
  }
});

async function updateTime() {
  if (!startTime || !currentDomain) return;

  const timeSpent = Math.floor((Date.now() - startTime) / 1000); // in seconds
  await sendDataToServer(currentDomain, timeSpent);
}

function startTracking(tab) {
  if (!tab.url.startsWith('http')) return;

  const url = new URL(tab.url);
  currentDomain = url.hostname;
  startTime = Date.now();
}

async function sendDataToServer(domain, timeSpent) {
  await fetch('http://localhost:4000/api/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ domain, timeSpent })
  });
}
