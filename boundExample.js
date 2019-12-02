const bindWithPrototype = (fn, obj) => {
  Object.setPrototypeOf(obj, { fn });
  return () => obj.fn();
};

const bindWithApply = (fn, obj) => (...args) => fn.apply(obj, args);

function example() {
  console.log(this);
}

const boundExample1 = bindWithPrototype(example, { a: true });
const boundExample2 = bindWithApply(example, { a: true });

boundExample1.call({ b: true }); // logs { a: true }
boundExample2.call({ b: true }); // logs { a: true }
