try {
  const clickedElements = [];
  const listWrapperElements = document.querySelectorAll('.div-col'); // divs that surround a ul element

  listWrapperElements.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      clickedElements.push(event.target.textContent);
    });
  });

  setTimeout(
    () =>
      chrome.runtime.sendMessage({
        url: window.location.href,
        clickedElements: clickedElements,
      }),
    8000
  );
} catch {}
