// The greeting the page prints.

function greeting(name) {
  return `Hello, ${name}.`;
}

function farewell(name) {
  return `Goodbye, ${name}.`;
}

if (typeof module !== 'undefined') module.exports = { greeting, farewell };
