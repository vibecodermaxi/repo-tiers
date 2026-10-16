// The greeting the page prints.

/* slot:greeting */
function greeting(name) {
  return `Hello, ${name}.`;
}
/* /slot */

function farewell(name) {
  return `Goodbye, ${name}.`;
}

if (typeof module !== 'undefined') module.exports = { greeting, farewell };
