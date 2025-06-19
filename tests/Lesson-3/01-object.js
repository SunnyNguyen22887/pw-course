// bài 1
console.log(" Bài 1:  ");
let student = {
    name: "Luna",
    grade: {
        math: 10,
        english: 9
    }
}
console.log("Điểm toán là : ", student["grade"]["math"]);
console.log("---------------------------");

//bài 2
console.log(" Bài 2:  ");
let product = {
    book: 10,
    pen: 5,
    bag: 15
}
for (let sp in product) {
    console.log(" Tên: " + sp + " - giá: " + product[sp]);
}
console.log("---------------------------");

// bài 3
console.log(" Bài 3:  ");
let bike = {
    brand: "Suzuki",
    price: 1000
}
bike.color = "Black Pink";
console.log(bike);
console.log("---------------------------");

// bài 4
console.log(" Bài 4:  ");
let employee = {
    name: "Luna",
    age: 18
}
delete employee.age;
console.log(employee);
console.log("---------------------------");

// bài 5
console.log(" Bài 5:  ");
let school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school);

