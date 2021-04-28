// chrome.browserAction.onClicked.addListener((tab) => {
//   chrome.tabs.executeScript(tab.ib, { file: 'index.js' });
// });

window.listStorage = {};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.listStorage[request.url] = request;
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: 'popup.html' });
});
