let student = ["Muzamil", "Ali Reza", "Wajdan Ali", "Ahsan Ali", "Rehman Ali",];
console.log(student.length);
console.log(student);

let mark = [34, 97, 23, 54, 34, 55, 76];
console.log(mark);
console.log(mark.length);
console.log(mark[0]);
console.log(student[3]);
let result = student[2] = "Juma Lala";
console.log(result);
console.log(student);

// Lopping over an array
console.log(student[0])
console.log(student[1])
console.log(student[2])
console.log(student[3])

for (let i = 0; i < student.length; i++) {
    const element = student[i];
    console.log(element)
};
// Print each element using a loop. 
let nums = [10, 20, 30, 40, 50];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
};


for (let i = 0; i < nums.length; i++) {
    console.log("i =", i, "value =", nums[i]);
}

// Find total sum of all numbers. 
let num = [5, 10, 15, 20];
let sum1 = 0;
for (let i = 0; i < num.length; i++) {
    sum1 += num[i]
};
console.log(sum1)


// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.
// My logic 
let arr = [85, 97, 44, 37, 76, 60];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    totelSum = 85 + 97 + 44 + 37 + 76 + 60
    Avg = totelSum / arr.length
};
console.log("Average of the entire class is:", Avg)


// Logic of Apna College 
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(`Avg marks of the class = ${avg}`)


// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. 
// Change the array to store final price after applying offer.
// My logic
let itms = [250, 645, 300, 900, 50];

for (let index = 0; index < itms.length; index++) {
    let discount = itms[index] * 10 / 100;
    let final_price = itms[index] - discount
    // console.log(final_price)
    itms[index] = final_price
}
console.log(itms)
// Logic of Apna College 
let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items) {
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}

// Find maximum number:
let n = [12, 45, 7, 89, 23];
let max = n[0]
for (let idx = 0; idx < n.length; idx++) {
    if (n[idx] > max) {
        max = n[idx];
    }
}
console.log(max)

// Find minimum number:
let nu = [12, 45, 7, 89, 23];
let min = nu[0]
for (let idx = 0; idx < n.length; idx++) {
    if (nu[idx] < min) {
        min = nu[idx];
    }
}
console.log(min)

let arra = [1, 2, 3, 4, 5, 6, 10, 12, 232];
let count = 0;

for (let i = 0; i < arra.length; i++) {
    let element = arra[i];
    if (element % 2 === 0) {
        console.log(`${element} is an even number`)
        count++;
    } else {
        console.log(`${element} is an odd number`)
    }
}
console.log(count)


// Create a new array that contains the numbers in reverse order without using .reverse().
// let arrays = [1, 2, 3, 4, 5];

// let number = [1, 2, 3, 4, 5];


let m = "5" % 3;
console.log(m)

let a = 1;
let b = a++ + ++a + a++; // 1 + 3 + (3) 4 = 7 // 4, 7
console.log(a, b);

let count1 = 0;

for (let i = 0; i < 3; i++) { // 0 1 /2  3 is not < 3
    count1 += i++; // 0 1 2 3 is not < 3 so the output is 2:  
}

console.log(count1);


// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix" 
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

let removeFirstcompany = companies.splice(0, 1) // companies.shift()
// console.log(removeFirstcompany)
console.log(companies)

let addCompany = companies.splice(1, 1, "Ola")
console.log(companies)

let lastAdd = companies.splice(5, 0, "Amazon")  // companies.push("Amazon")
console.log(companies)


let ar = [11, 62, 3, 4, 25, 76, 33];
let sort = ar.sort(function (x, y) {
    return y - x;  // Descending Order. 
    // return x - y;  Ascending Order.
})
console.log(sort)

let fd = [1, 2, 3, 4, 5];
let newfd = fd.find(function (val) {
    if (val === 4) return val
})
console.log(newfd)

let chacha = ["apple", "banana"]
chacha.pop()
chacha.push("kiwi")

let jh = [1,2,3,4,5,6,7,8,9,10]
let newjh = [...jh]
// console.log(newjh)
newjh.pop()
console.log(newjh)
console.log(jh)

let numb = [1,2,3];
let nnnn = [...numb]
console.log(nnnn)
numb.pop()
console.log(nnnn)
console.log(numb)