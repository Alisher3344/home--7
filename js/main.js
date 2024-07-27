// // Array1
// function getLevel(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     let x = Math.pow(2, i);
//     arr.push(x);
//   }
//   console.log(arr);
// }
// getLevel(6);

// // Array2
// let y = 0;
// function levlup(a, b, n) {
//   let arr = [a, b];
//   for (let i = 1; i <= n; i++) {
//     // console.log(i);
//     y = a + b;
//     arr.push(y+);
//   }
//   console.log(arr);
// }
// levlup(2, 3, 5);

// // Array3
// let n = 5;
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr.push(i);
// }
// arr.reverse();
// console.log(arr);

// // Array4
// const getSingleArr = (arr) => {
//   let res = [];
//   for (let el of arr) {
//     if (el % 2 == 1) {
//       res.push(el);
//     }
//   }
//   return res;
// }
// let arr = [4, 9, 7, 8, 6, 5];
// console.log(getSingleArr(arr));

// // Array5
// const grtlevel = (arr) => {
//   let res = [];
//   for (let el of arr) {
//     if (el % 2 == 0) {
//       res.push(el);
//     }
//   }
//   for (let el of arr) {
//     if (el % 2 == 1) {
//       res.push(el);
//     }
//   }
//   return res;
// };
// let arr = [4, 5, 7, 8, 6, 9];
// console.log(grtlevel(arr));

// 

// // Array7
// function arra(n) {
//   let arr = [];
//   for (let i = n; i <= -1; i += 2) {
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(arra(-5));

// // Array8
// function tutsa(n) {
//   let arr = [];
//   for (let i = 0; i <= n; i += 2) {
//     arr.push(i);
//   }
//   for (let i = 1; i <= n; i += 2) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(tutsa(5));

// // Array9
// function tutsa(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i += 2) {
//     arr.push(i);
//   }
//   for (let i = n; i >= 0; i -= 2) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(tutsa(6));

// // Array11
// let y = 0;
// function getOddMin(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   for (let el of arr) {
//     arr.fill(0, 1, 4);

//   }
//   return arr;
// }
// console.log(getOddMin(5));
// console.log(y);

// // Array12
// let darkwhl = (a, b, c, d) => {
//   let y = [];
//   let x = [];
//   if (a == 1) {
//     y.push(a);
//   }
//   if (b == "asdd") {
//     y.push(b);
//   }
//   if (c == 0) {
//     x.push(c);
//   }
//   if (d == null) {
//     x.push(d);
//   }
//   console.log("Truthy:", y);
//   console.log("Falsy:", x);
// };
// darkwhl(1, "asdd", false, null);

// // Array13
// function getEvenMax(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }

//   let min = arr[0];

//   for (let el of arr) {
//     if (el < min) {
//       min = el;
//     }
//   }
//   let inOffMin = arr.indexOf(min);

//   console.log("Min: " + min);
//   return arr;
// }
// console.log(getEvenMax(5));

// // Array14
// function getEvenMax(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   let max = arr[0];
//   for (let el of arr) {
//     if (el > max) {
//       max = el;
//     }
//   }
//   let inOffMax = arr.indexOf(max);

//   console.log("Max: " + max);
//   return arr;
// }
// console.log(getEvenMax(5));

// Array15

// // Array28
// const getSingleArr = (arr) => {
//   let res = [];
//   for (let el of arr) {
//     if (!res.includes(el)) {
//       res.push(el);
//     }
//   }
//   return res;
// };
// let arr = [3, 2, 3, 3, 2, 2, 1, 2, 5];
// console.log(getSingleArr(arr));

// // Array29
// const getSingleArr = (arr) => {
//   let res = [];
//   for (let el of arr) {
//     if (res.includes(el)) {
//       res.push(el);
//     }
//   }
//   return res;
// };
// let arr = [3, 2, 3, 3, 2, 2, 1, 2, 5];
// console.log(getSingleArr(arr));
