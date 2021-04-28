window.listStorage = {};
chrome.runtime.onMessage.addListener((request) => {
  window.listStorage[request.url] = request;
});

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'popup.html' });
});
