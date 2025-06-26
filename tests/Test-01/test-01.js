console.log(" ------ Bài1: Khởi động Tàu Vũ trụ 1104------");
const departurePlanet = "Trái Đất";
const mission = "Khám phá Vũ trụ 1104";
const crew = ["Trang", "Ha", "Nhat Anh", "Thom"];

function launchShip(arr) {
    console.log("Chuẩn bị khởi động! Phi hành đoàn gồm: ");
    for (let member of arr) {
        console.log(member);
    }
    console.log("sẽ đồng hành cùng bạn trong chuyến phiêu lưu " + mission + "!");
};
launchShip(crew);

console.log("----bài 1 - cách 2----");
function otherLaunchShip(arr) {
    let inLine = "";
    arr.forEach((value, index) => {
        if (index > 0) {
            inLine += ", ";
        }
        inLine += value;
    })
    console.log("Chuẩn bị khởi động! Phi hành đoàn gồm: " + inLine);
    console.log("Sẽ đồng hành cùng bạn trong chuyến phiêu lưu " + mission + "!");
}
otherLaunchShip(crew);

console.log(" ------ Bài 2: Du hành đến hành tinh bí ẩn------");
function calculateDistance(speed, time) {
    return speed * time;
};
console.log("Khoảng cách đến hành tinh bí ẩn là: " + calculateDistance(1000, 24) + "km");

console.log(" ------ Bài 3: Hành tinh kỳ lạ------");
function convertTimeToHex(time) {
    return time.toString(16);
};
let decimalNumber = 120;
console.log("Thời gian trên hành tinh kì lạ là :" + convertTimeToHex(decimalNumber) + " giây");

console.log(" ------ Bài 4: Khám phá kho báu------");
function decryptCode(code) {
    let decodeTreasure = "";
    for (let char of code) {
        if (char >= 'A' && char <= 'Z') {
            decodeTreasure += char.toLowerCase(); // chuyển chữ hoa thành thường
        } else if (char >= 'a' && char <= 'z') {
            decodeTreasure += char.toUpperCase(); // chuyển chữ thường thành chữ hoa
        } else {
            decodeTreasure += char; //giữ nguyên nếu k phải chữ
        }
    }
    return decodeTreasure;
}
let treasureCode = "1104 Challenge";
console.log("Mật mã đã được giải là :", decryptCode(treasureCode));

console.log(" ------ Bài 5: Trở về Trái Đất------");
function returnToEarth() {
    console.log("Chuẩn bị trở về " + departurePlanet + "!");
};
returnToEarth();
