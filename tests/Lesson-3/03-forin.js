console.log("--------bài 1---------");
let staff = { age: 35, name: "Luna", experience: 10, id: "16" };

function printStaff() {
    for (let i in staff) {
        console.log(" " + i + " = " + staff[i]);
    }
}
printStaff();

console.log("--------bài 2---------");
let sum = 0;
function totalNumber(arr) {
    for (let property in arr) {
        if (typeof arr[property] === "number") {
            sum += arr[property];
        }
    }
    return sum;
}
console.log(totalNumber(staff));

console.log("--------bài 3---------");
let propertyArr = [];
function createPropertyArr(arr) {
    for (let p in arr) {
        propertyArr.push(p);
    }
    return propertyArr;
}
console.log(createPropertyArr(staff));





