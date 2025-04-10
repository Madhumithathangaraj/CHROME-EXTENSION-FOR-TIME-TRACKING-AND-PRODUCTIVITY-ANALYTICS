let activeTabId = null;
let startTime = null;

chrome.tabs.onActivated.addListener(activeInfo => {
  trackTime(); // Save previous tab time
  activeTabId = activeInfo.tabId;
  startTime = new Date();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tabId === activeTabId && changeInfo.status === "complete") {
    trackTime();
    startTime = new Date();
  }
});

function trackTime() {
  if (!activeTabId || !startTime) return;

  const endTime = new Date();
  const duration = (endTime - startTime) / 1000;

  chrome.tabs.get(activeTabId, tab => {
    const hostname = new URL(tab.url).hostname;
    saveTime(hostname, duration);
  });
}

function saveTime(site, duration) {
  chrome.storage.local.get(["timeData"], data => {
    const timeData = data.timeData || {};
    timeData[site] = (timeData[site] || 0) + duration;
    chrome.storage.local.set({ timeData });
  });
}
