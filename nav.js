/**
 * Hint: Open app navigator <search>
 */

javascript: (function () {
  let textToInject = '$0';
  let findAndClick = (root) => {
    let e = root.querySelector('[aria-label="All"]');
    if (e) {
      e.click();
      setTimeout(() => {
        findAndType(document);
      }, 350);
      return true;
    }
    let nodes = root.querySelectorAll('*');
    for (let n of nodes) {
      if (n.shadowRoot) {
        if (findAndClick(n.shadowRoot)) return true;
      }
    }
    return false;
  };
  let findAndType = (root) => {
    let input = root.querySelector('input[placeholder="Filter"]');
    if (input) {
      input.focus();
      input.value = textToInject;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    }
    let nodes = root.querySelectorAll('*');
    for (let n of nodes) {
      if (n.shadowRoot) {
        if (findAndType(n.shadowRoot)) return true;
      }
    }
    return false;
  };
  if (!findAndClick(document))
    console.log('SNUtils: Navigation element not found.');
})();
