try {
  const clickedElements = [];
  const addClickedElement = (elem) => {
    clickedElements.push(elem);
    chrome.runtime.sendMessage({
      url: window.location.href,
      clickedElements: clickedElements,
    });
  };
  const listWrapperElements = document.querySelectorAll('.div-col'); // divs that surround a ul element

  listWrapperElements.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      addClickedElement(event.target.textContent);
    });
  });
} catch {}
