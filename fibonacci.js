const fibonacci = n => {
  const series = [];
  let first = 0,
    second = 1;
  series.push(first);

  while (second <= n) {
    series.push(second);

    let temp;
    temp = first;
    first = second;
    second = second + temp;
  }
  return series;
};

console.log(fibonacci(20));
