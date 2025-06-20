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
function Tong(sum) {
    sum = 0;
    array.forEach((value) => {
        sum = sum + value;
    })
    return sum;
}
function Max(max) {
    max = array1[0];
    array1.forEach((value) => {
        if (value > max) {
            max = value
        };
    })
    return max;
}
function Min(min) {
    min = array1[0];
    array1.forEach((value) => {
        if (value < min) {
            min = value;
        }
    })
    return min;
}
console.log(" Tổng của mảng là " + Tong(array1));
console.log(" Phần tử lớn nhất của mảng là " + Max(array1));
console.log(" Phần tử nhỏ nhất của mảng là " + Min(array1));

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

