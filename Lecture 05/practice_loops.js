// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }
// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// for (let i = 1; i < 21; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     };
// }
// for (let i = 1; i < 21; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     };
// }

// let sum = 0;
// for (let i = 1; i < 11; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// let num = 11;
// for (let i = 1; i < 11; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
// }

// let number = 12345;
// let count = 0;
// while (number > 0) {
//     number = Math.floor(number / 10)
//     count++;
// }
// console.log(count)

// let num1 = 987654321;
// let counter = 0;
// if (num1 === 0) {
//     console.log(1)
// } else {
//     let counter = 0
//     while (num1 > 0) {
//         num1 = Math.floor(num1 / 10);
//         counter++;
//     }
//     console.log(counter);
// }

// // 8. Print Stars
// // Loop use karke 5 stars print karo.
// // Expected Output:
// // *****
// // Hint: Ek string variable use kar sakte ho.

// // let str = "";
// // for (let i = 0; i < 5; i++) {
// //     let star = "*"
// //     str += star;
// // }
// // console.log(str)

// let resul = ""
// for (let i = 0; i < 10; i++) {
//     resul += "#"
// }
// console.log(resul)

// let res = ""
// for (let i = 0; i < 5; i++) {
//     res += "A"
// }
// console.log(res)

// let result = "";

// for (let i = 1; i < 6; i++) {
//     result = result + i;
// }
// console.log(result)



// // *
// // **
// // ***
// // ****
// // *****

// let n = 6;
// for (let i = 1; i < n; i++) {
//     star = ""
//     for (let j = 0; j < i; j++) {
//         star += "*"
//     }
//     console.log(star);
// }

// // *****
// // ****
// // ***
// // **
// // *
// let numbe = 6;
// for (let i = 1; i < numbe; i++) {
//     row = ""
//     for (let j = 1; j < numbe - i + 1; j++) {
//         row += "*"
//     }
//     console.log(row)
// }

// // 1
// // 12
// // 123
// // 1234
// // 12345  //12345
// let empty = "";
// for (let i = 1; i < 6; i++) {
//     // console.log(i)
//     empty += i
//     console.log(empty)
// }

// for (let i = 1; i < 6; i++) {
//     let t = ""
//     for (let j = 1; j <= i; j++) {
//         t += j
//     }
//     console.log(t)
// }

// for (let i = 1; i <= 5; i++) {
//     let f = ""
//     for (let j = 1; j <= i; j++) {
//         f += i
//     }
//     console.log(f)
// }

// // *
// // **
// // ***
// // **
// // *
// for (let i = 1; i <= 27; i++) {
//     let y = "";
//     let coun = i;
//     if (i > 14) {
//         coun = 28 - i
//     };
//     for (let j = 1; j <= coun; j++) {
//         y += "*"
//     };
//     console.log(y);
// }
