I. Git 
1. Thay đổi commit message: 
```javascript
git commit --amend
```
    Gõ i -> vào chế độ insert để sửa message commit
    Gõ esc để thoát chế độ insert
    Gõ :wq -> để viết và thoát
```javascript
git commit --amend -m"message"
```
    Câu lệnh này thường dùng hơn
    Sau khi sửa message chạy *git log* để xem dc commit mình sửa

2. Đưa từ vùng Staging về Working Directory
```javascript
git restore --staged <file>
```
3. Đưa từ vùng Repository về Working Directory
```javascript
git reset HEAD~<số lượng commit>
```
    Thứ tự lấy commit sẽ là từ gần nhất
    Vd: có 3 commit được đưa vào vùng repository lần lượt là C1, C2, C3
    thì khi chạy câu lệnh "git reset HEAD~1" -> sẽ đưa commit C3 về vùng Working Directory
    chạy lệnh "git reset HEAD~2" -> sẽ đưa commit C3, C2 về vùng Working Directory

4. Branch model
Branch (nhánh): Dùng để tạo ra 1 vùng làm việc mới
Tạo 1 branch:
```javascript
git branch <ten_branch>
```
Chuyển sang nhánh đã tồn tại:
```javascript
git checkout <ten_branch>
```
Tạo mới và chuyển sang nhánh mới:
```javascript
git checkout -b <ten_branch>
```
Note: Trước khi tạo branch mới cần pull code về. 
Trước khi push code cũng cần pull code về để đảm bảo không bị conflict

File **.gitignore**:
File này chứa tên các file, folder mà khi add/commit code sẽ bỏ qua

II. Javacsript
1. Quy tắc đặt tên
snack_case: chưa dùng (các chữ nối với nhau bằng dấu _)
kebab-case: tên file (các chữ nối với nhau bằng -)
camelCase: tên biến (chữ cái đầu tiên viết thường, từ những từ sau viết hoa chữ cái đầu)
PascalCasse: tên class (tât cả chữ cái đầu viết hoa)

2. Console.log with variable:
```javascript
Console.log(' Toi la ${name}') = Console.log(" Toi la ", name) = Console.log(" Toi la " + name)
```
3. Object:
Là 1 đối tượng, lưu trữ các thuộc tính và giá trị của chúng. VD 1 person là 1 object,
các thuộc tính vd age, name, favoriteColor,... các giá trị của thuộc tính tùy vào người gán.
VD age = 34, name = "Luna", favoriteColor = "Orange"

Khai báo biến:
```javascript
let/const <ten_object> = {
    <thuoc_tinh1>: <gia_tri1>,
    <thuoc_tinh2>: <gia_tri2>,
    ...
}
```

Trong đó:
<thuoc_tinh>: giống quy tắc đặt tên biến (camelCase)
<gia_tri>: có kiểu giống biến, hoặc là 1 object khác

VD:
```javascript
let person = {
    name: "Luna",
    age: 18,
    email: "luna.nguyen261991@gmail.com",
    address : {
        district: "Nam Tu Liem",
        city: "Ha Noi"
    }
}
```

In ra name: console.log(person.name);
In ra city: console.log(person.address.city);
hoặc console.log(person["address"]["city"]);

Có thể gán lại giá trị cho các biến khi khai báo object dùng let

vd: peron.name = "Ha";
-> console.log(person.name); // sẽ in ra Ha thay vì Luna như ban đầu
tương tự person["address"]["city"] = "Nha Trang";

4. Logical operator:
&& (and), || (or), ! (đảo ngược lại giá trị mệnh đề)

5. Array:
const fruits = ["apple", "banana", "orange"]; // hay dùng

hoặc

const numbers = new Array(1, 2, 3, 4, 5);

Truy xuất phần tử của mảng:
```javascript
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "orange"
```
6. Function:
```javascript
function <nameFunction>() {
    // code
}
```

Khai báo 1 lần, tái sử dụng nhiều lần.

- Function không chứa tham số:
VD: 
```javascript
function sayHello() {
  console.log("Hello!");
}

sayHello(); // gọi tới function sayHello()
```
- Function 1 tham số:
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Luna"); // Kết quả: Hello, Luna!

- Function chứa nhiều tham số:
function add(a, b) {
  return a + b;
}

const result = add(3, 5); // result = 8
console.log(result); // In ra 8

add(3, 5); // gọi đến hàm add với tham số là a=3, b=5 -> nhưng không có console.log nên k in dc j ra màn hình

Muốn in được ra màn hình kết quả, cần phải viết như sau:

console.log(add(10, 20));

hoặc tạo biến chứa kết quả: 
const result = add(10, 20); 
console.log(result);

hoặc có thể đưa console.log vào thẳng hàm:
```javascript
function add(a, b) {
  const result = a + b;
  console.log(result); // In ra kết quả
  return result;       // Trả về kết quả cho hàm
}
```
7. Hosting:
Cơ chế mặc định của Javacsript là di chuyển tất cả biến, hàm lên đầu scope trước khi run source code

- Biến var:
Với các biến khai báo var, không khai báo trước khi in biến ra màn hình sẽ show undefine (k báo lỗi), 
hoặc khai báo mà không gán giá trị vd: 
console.log(x); // undefined
var x = 5;

hoặc 

var x;
console.log(x); // undefined
x = 5;

- Biến let/const:
Nhưng với let sẽ báo lỗi, vd: 
console.log(b); //  Lỗi: Cannot access 'b' before initialization
let b = 10;

- Function:
Riêng function thì có thể gọi ở bất kì đâu, vd gọi trước khi khai báo:
sayHi(); //  In ra  Hi!
function sayHi() {
  console.log("Hi!");
}

- Arrow function: không hỗ trợ hoisting giống let/const, gọi trước sẽ lỗi

8. Điều kiện nâng cao if - else:
```javascript
if (<dieu_kien>) { // code }
    else if (<dieu_kien) { // code }
        else { // code }
        ```
Khi không thỏa mãn bất cứ điều kiện nào đằng trước, sẽ chạy câu lệnh trong else

9. Switch ... case ... default:
VD:
```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day number");
}
```
Giá trị của biến nhập vào nếu trùng với bất kì case nào thì chạy lệnh trong case đó, và break luôn
Trường hợp giá trị nhập vào k trùng với bất cứ case nào, thì chạy lệnh trong default.

10. So sánh tuyệt đối, so sánh lỏng lẻo:
===, !== là so sánh tuyệt đối bao gồm cả kiểu dữ liệu và giá trị

==, != là so sánh lỏng lẻo, chỉ so sánh giá trị, tự động convert kiểu để so sánh

11. Vòng lặp nâng cao:
- For ... in:
Thường dùng với object để in ra các thuộc tính của object

vd: 
```javascript
let product = {
  banana: 20,
  apple: 30,
  orange: 15
}

for (let property in product){
  console.log(property); // in ra banana, apple, orange
  console.log(product[property]); // in ra các giá trị của các property
}
console.log(product.banana); // in ra giá trị của banana là 20
console.log(product["banana"]); // in ra giá trị của banana
```
Khi dùng "for ... in" cho mảng, sẽ in ra index (vị trí các phần tử)

Vd:
```javascript
const products = ["Banana", "Apple", "Orange"];
for (let product in products) {
    console.log(product); // in ra các index của các phần tử trong mảng
}
```
-> it dùng

- forEach :
Thường dùng với mảng, để in ra các phần tử và vị trí các phần tử trong mảng
```javascript
<ten_mang>.forEach((value, index) => {
    // code
})
```
vd:
```javascript
const products = ["Banana", "Apple", "Orange"];
products.forEach((value, index) => {
    console.log(value + index); // in ra giá trị + vị trí 
})
```
- For ... of : 
Thường dùng cho mảng, in ra các phần tử trong mảng
```javascript
for (let value of arr) {
    // logic code
}
```
Vd:
```javascript
const products = ["Banana", "Apple", "Orange"];
for (let product of products) {
    console.log(product); // in ra các phần tử trong mảng
}
```
12. Phân biệt break và contine:
- Continue: 
Khi gặp continue sẽ bỏ qua đoạn code bên dưới để vào vòng lặp tiếp theo

Vd:
```javascript
for (let i = 1; i <= 5; i++) {
     if (i % 2 === 0) {
        continue;
    }

        console.log(i);
}
```
// In ra màn hình 1,3,5. khi i = 2,4 đều chia hết cho 2
// -> chạy tới câu lệnh continue -> bỏ qua câu lệnh console.log(i)
// để vào 1 vòng lặp mới

- break:
Khi gặp break sẽ thoát luôn khỏi vòng lặp

Vd: 
```javascript
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        break;
    }

    console.log(i);
}
```
// kết quả chỉ in ra 1, khi i = 2 -> thoả mãn điều kiện chia hết cho 2 
// -> chạy vào câu lệnh break -> thoát luôn vòng lặp -> k làm j tiếp

12. Kiến thức bổ sung từ file bài tập:
```javascript
git checkout <revision> 
```
về nhánh commit có commit id là <revision>

- Object với const:
const student = {“name”: “alex”, “age”: 20}
student = {“name”: “Nagi”, “age”: 18} // lỗi
không thể thay thế hoàn toàn 1 object thành object khác,
nhưng có thể thay đổi 1 thuộc tính trong object const
VD:
```javascript
const student = {“name”: “alex”, “age”: 20}
student.name = “Nagi”; // Hợp lệ
```
- Thêm thuộc tính mới vào object:
vd:
```javascript
let bike = {
make: 'Yamaha',
model: 'YZF-R3'
};
bike.color = “Blue”;
bike[“price new”] = 100;
```
- Xoá 1 thuộc tính của object:
```javascript
delete bike.model;
```
13. Tip đặt tên cho function:
- Đặt 1 động từ làm tiền tố giúp cho mục đích của hàm trở nên rõ ràng hơn
- 1  số Verb thường đc sử dụng làm tiền tố cho hàm: get, set, calculate, check, …