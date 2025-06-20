console.log("--------bài 1---------");
let staff = {
    age: 35, name: "Luna", experience: 10, id: "16"
};
function Print() {
    for (let i in staff) {
        console.log(" " + i + "=" + staff[i]);
    }
}
Print();

console.log("--------bài 2---------");
function Check(sum) {
    sum = 0;
    for (let property in staff) {
        if (typeof staff[property] === "number") {
            sum = sum + staff[property];
        }
    }
    return sum;
}
console.log(Check(staff));

console.log("--------bài 3---------");
let propertyArr = [];
function createArr() {
    for (let p in staff) {
        propertyArr.push(p);
    }
    return propertyArr;
}
console.log(createArr());





