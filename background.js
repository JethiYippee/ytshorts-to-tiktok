chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.storage.local.get("redirectEnabled", (data) => {
    if (data.redirectEnabled !== false && changeInfo.url && changeInfo.url.includes("youtube.com/shorts")) {
      chrome.tabs.update(tabId, { url: "https://www.tiktok.com" });
    }
  });
});
