console.log("----------bài 1-----------");
function total(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(total(100));

console.log("----------bài 2-----------");
function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(" " + n + " * " + i + " = ", n * i);
    }
    return n;
}
for (let i = 2; i <= 9; i++) {
    console.log(" bảng cửu chương " + i + " ");
    table(i);
}


console.log("----------bài 3-----------");
var arr = [];
function arrOdd(n) {
    for (let i = 0; i <= n; i++) {
        if ((i % 2) === 0) {
            continue;
        }
        arr.push(i);
    }
    return n, arr;

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
function Tong(n) {
    n = 0;
    for (let i = 0; i < revenue.length; i++) {
        n = n + revenue[i].total;
    }
    return n;
}
console.log(Tong(revenue.length));


