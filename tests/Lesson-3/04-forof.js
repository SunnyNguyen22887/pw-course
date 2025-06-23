console.log("---------bài 1----------");
const str = "Automation test k1104";
let str1 = str.split("").reverse().join("");
for (let i of str1) {
    console.log(i);
}

console.log("---------bài 2----------");
const numberArr = [1, 1, 2, 2, 3, 5, 7, 11, 7];
function uniqueNumber(arr) {
    for (let [index, value] of arr.entries()) {
        let found = false;
        for (let i = 0; i < arr.length; i++) {
            if (i === index) {
                continue;
            }
            if (arr[i] === value) {
                found = true;
                break;
            }
        }
        if (found === false) {
            console.log(" unique number :", value);
        }
    }
}
uniqueNumber(numberArr);
