const background = chrome.extension.getBackgroundPage();
Object.keys(background.listStorage).forEach((url) => {
  const div = document.createElement('div');
  div.textContent = `${url.replace('https://en.wikipedia.org/wiki/', '')}: ${background.listStorage[url].clickedElements.join(', ')}`;
  document.body.appendChild(div);
});
