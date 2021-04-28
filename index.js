(() => {
  try {
    const listWrapperElements = document.querySelectorAll('.div-col');
    listWrapperElements.forEach((elem) => {
      elem.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event.target.textContent);
      });
    });
    document.querySelectorAll('.div-col > ul > li > a');
  } catch {}
})();
