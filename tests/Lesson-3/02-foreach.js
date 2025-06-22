console.log("----------bài 1----------");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function printArr() {
    array.forEach((value) => {
        console.log(value);
    })
}
printArr();

console.log("----------bài 2----------");
let array1 = [1, 3, 31, 91, 46, 5, 6, 7, 8, 2];
function calculateTotal(n) {
    n = 0;
    array1.forEach((value) => {
        n = n + value;
    })
    return n;
}
function findMax(a) {
    a = array1[0];
    array1.forEach((value) => {
        if (value > a) {
            a = value
        };
    })
    return a;
}
function findMin(b) {
    b = array1[0];
    array1.forEach((value) => {
        if (value < b) {
            b = value;
        }
    })
    return b;
}
console.log(" Tổng của mảng là " + calculateTotal(array1));
console.log(" Phần tử lớn nhất của mảng là " + findMax(array1));
console.log(" Phần tử nhỏ nhất của mảng là " + findMin(array1));

console.log("----------bài 3----------");
let oldArr = [2, 4, 6, 8];
let newArr = [];
function printNewArr() {
    oldArr.forEach((value) => {
        value = value * 2;
        newArr.push(value);
    })
    console.log(newArr);
}
printNewArr();

