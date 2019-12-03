const arr = [1, 2, 4, 5, 7, 8, 9, 10, 35, 78];

const el = 35;

let index = -1;
let cursor = Math.floor(arr.length / 2);

while (index === -1) {
  if (arr[cursor] === el) {
    index = cursor;
    break;
  }
  cursor =
    arr[cursor] > el
      ? Math.floor(cursor / 2)
      : Math.floor((arr.length - 1 + cursor) / 2);
}

console.log(`Found ${el} at arr[${index}]`);
