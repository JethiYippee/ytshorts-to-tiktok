document.addEventListener("DOMContentLoaded", () => {
  const redirectToggle = document.getElementById("redirectToggle");

  // Load saved toggle state
  chrome.storage.local.get("redirectEnabled", (data) => {
    redirectToggle.checked = data.redirectEnabled !== false; // Default to true
  });

  // Save toggle state
  redirectToggle.addEventListener("change", () => {
    const isEnabled = redirectToggle.checked;
    chrome.storage.local.set({ redirectEnabled: isEnabled });
  });
});
