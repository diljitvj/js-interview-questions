function debounce(func, interval) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, interval || 200);
  };
}

const obj = {
  a: 1,
  func: function() {
    console.log(this.a);
  }
};

const debouncedFn = debounce(obj.func.bind(obj), 300);

document.addEventListener("mousemove", debouncedFn);
