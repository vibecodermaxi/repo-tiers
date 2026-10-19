// The greeting the page prints.

/* slot:greeting */
function greeting(name) {
  // Rewritten by whoever holds this part.
  const dot = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
  return `<img src="${dot}" alt=""> Hi there, PJ!`;
}
/* /slot */

function farewell(name) {
  return `Goodbye, ${name}.`;
}

if (typeof module !== 'undefined') module.exports = { greeting, farewell };
