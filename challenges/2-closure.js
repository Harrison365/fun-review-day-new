function invert(func) {
  return function (...args) {
    return !func(...args);
  };
}

function flip(func) {
  return function (...args) {
    return func(...args.reverse());
  };
}

function rememberMe() {}

module.exports = { invert, flip, rememberMe };
