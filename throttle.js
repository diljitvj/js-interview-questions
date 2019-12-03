function func() {
  console.log("Throttled !!");
}

function throttle(func, interval) {
  let timeout = null;

  return function(...args) {
    const context = this;
    if (timeout) return;

    func.apply(context, args);
    timeout = setTimeout(() => {
      timeout = null;
    }, interval);
  };
}

const throttledFunc = throttle(func, 300);
document.addEventListener("mousemove", throttledFunc);
