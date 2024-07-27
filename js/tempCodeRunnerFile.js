// Array7
function arra(n) {
  let arr = [];
  for (let i = n; i <= -1; i += 2) {
    arr.push(i);
  }
  return arr;
}

console.log(arra(-5));