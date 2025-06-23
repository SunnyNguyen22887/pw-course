console.log("-----------bài 1------------");
function specialChar(str) {
    return /[!@#$%^&*(),?":{}|<>]/.test(str);
}
function alphabet(str) {
    return /^[A-Za-z]+$/.test(str);
}
function getBMI(w, h) {
    w = parseFloat(w);
    h = parseFloat(h);
    if (specialChar(w) || specialChar(h) || alphabet(w) || alphabet(h)) {
        console.log(" cân nặng or  chiều cao không hợp lệ ");
        return null;
    }
    if (w <= 0 || h <= 0) {
        console.log(" Cân nặng và chiều cao không hợp lệ ");
    }
    let bmi = w / (h * h);
    if (bmi < 18.5) {
        console.log(" Thiếu cân ");
    } else if (bmi < 25) {
        console.log(" Bình thường ");
    } else if (bmi < 30) {
        console.log(" Thừa cân ");
    } else {
        console.log(" Béo phì ");
    }
    return bmi;
}
getBMI(55, 1.57);

console.log("-----------bài 2------------");
function convert(value, type) {
    if (type == "C" || type == "c") {
        let doF = value * 9 / 5 + 32; // đổi C sang F -> nhập C
        console.log("Convert sang do F = ", doF);
        return doF;
    } else if (type == "F" || type == "f") {
        let doC = (value - 32) * 5 / 9; // đổi F sang C -> nhập F
        console.log("Convert sang do F = ", doC);
        return doC;
    } else {
        console.log(" wrong type !");
    }
}
convert(50, "C");

console.log("------------bài 3-----------");
const arrayA = [0, 1, 2, 3, 5, 7, 11, 25, 36, 41, 53, 91];
function isPrime(a) {
    if (a < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}
function filterPrimeArr(arr) {
    const primeArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeArr.push(arr[i]);
        }
    }
    return primeArr;
}
console.log(filterPrimeArr(arrayA));


console.log("-----------bài 4------------");
let customers = [
    { name: "Thom", email: "thom.nguyen@piscada.com" },
    { name: "Ha", email: "ha.do@piscada.com" },
    { name: "Nhat Anh", email: "nhatanh.tran@piscada.com" },
    { name: "Trang", email: "thuytrang.nguyen@piscada.com" }
];
function newCustomer(cusName, newEmail) {
    for (let i = 0; i < customers.length; i++) {
        if (cusName == customers[i]["name"]) {
            customers[i]["email"] = newEmail;
        }
    }
}

newCustomer("Thom", "luna.nguyen261991@gmail.com");
console.log(customers);

console.log("------------bài 5-----------");
var students = [
    { name: "Thom", score: 85 },
    { name: "Ha", score: 90 },
    { name: "Nhat Anh", score: 100 },
    { name: "Trang", score: 90 }
];
let total = 0;
function averageGrade(arr) {
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].score;
    }
    return total / arr.length;

}

console.log(averageGrade(students));

console.log("----------bài 6-------------");
function ticketPrice(age) {
    if ((age > 0) && (age < 5)) {
        console.log(" mien phi ve vao cua cho tre duoi 5 tuoi");
    } else if ((age >= 5) && (age <= 17)) {
        console.log(" gia ve vao cua cua tre em 6 - 17 tuoi la 50k");
    } else if (age >= 18) {
        console.log(" gia ve nguoi lon la 100k");
    } else { console.log(" tuoi khong hop le ") };
}
ticketPrice(100);

console.log("------------bài 7-----------");
function month(n) {
    switch (n) {
        case 1: {
            console.log(" January ");
            break;
        }
        case 2: {
            console.log(" February ");
            break;
        }
        case 3: {
            console.log(" March ");
            break;
        }
        case 4: {
            console.log(" April ");
            break;
        }
        case 5: {
            console.log(" May ");
            break;
        }
        case 6: {
            console.log(" June ");
            break;
        }
        case 7: {
            console.log(" July ");
            break;
        }
        case 8: {
            console.log(" August ");
            break;
        }
        case 9: {
            console.log(" September ");
            break;
        }
        case 10: {
            console.log(" October ");
            break;
        }
        case 11: {
            console.log(" November ");
            break;
        }
        case 12: {
            console.log(" December ");
            break;
        }
        default: {
            console.log(" Invalid month ");
        }
    }
}
month(4);

console.log("------------bài 8-----------");
function temperture(t) {
    if (t < 20) {
        console.log(" trời lạnh, nhiệt độ " + t + " độ C ");
    } else if ((t >= 20) && (t < 30)) {
        console.log(" trời mát, nhiệt độ " + t + " độ C ");
    } else if (t >= 30) {
        console.log(" trời nóng, nhiệt độ " + t + " độ C ");
    }
}
temperture(30);

