console.log("----------bài 1-----------");
function calculateTotal(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(calculateTotal(100));

console.log("----------bài 2 cách 1----------");
function printMultiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(" " + n + " * " + i + " = ", n * i);
    }
    return n;
}
for (let i = 2; i <= 9; i++) {
    console.log(" bảng cửu chương " + i + " ");
    printMultiplicationTable(i);
}

console.log("----------bài 2 cách 2----------");
function inBangCuuChuong() {
    for (let i = 2; i <= 9; i++) {
        console.log(`Bảng cửu chương ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(""); // Tạo một dòng trống giữa các bảng cửu chương
    }
}
inBangCuuChuong();


console.log("----------bài 3-----------");
let array = [];
function arrOdd(n) {
    for (let i = 0; i <= n; i++) {
        if ((i % 2) === 0) {
            continue;
        }
        array.push(i);
    }
    return n, array;

}
console.log(arrOdd(99));

console.log("----------bài 4-----------");
const revenue = [
    { month: 1, total: 100 },
    { month: 2, total: 95 },
    { month: 3, total: 91 },
    { month: 4, total: 92 },
    { month: 5, total: 98 },
    { month: 6, total: 88 },
    { month: 7, total: 50 },
    { month: 8, total: 69 },
    { month: 9, total: 96 },
    { month: 10, total: 99 },
    { month: 11, total: 85 },
    { month: 12, total: 76 }
];
function totalRevenue(n) {
    for (let i = 0; i < revenue.length; i++) {
        n = n + revenue[i].total;
    }
    return n;
}
console.log(totalRevenue(revenue.length));


