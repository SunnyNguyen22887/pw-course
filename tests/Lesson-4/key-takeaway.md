I. DOM 
1. Define: 
Viết tắt của Document Object Model - một chuẩn giao diện lập trình dùng để truy cập, 
thao tác với nội dung của tài liệu HTML hoặc XML
vd:
```javascript
<html>
  <head>
    <title>Trang web</title>
  </head>
  <body>
    <h1>Xin chào!</h1>
    <p>Đây là một đoạn văn.</p>
  </body>
</html>
```
Thì chuyển sang DOM sẽ là:

`html
    ├── head
    │   └── title
    └── body
        ├── h1
        └── p`

Có thể hiểu là 1 cây đối tượng (object tree) thể hiện mỗi quan hệ giữa các node (là các thẻ) trong 1 HTML document

2. Các loại thẻ HTML:
- Thẻ mở, đóng: vd `<option>United States</option>`
-> `<option>` : thẻ mở or mở 1 thẻ
-> `</option>` : thẻ đóng or đóng 1 thẻ

- Thẻ tự đóng:
`<img src="image.png" alt="Image description"/>`

- Các thành phần khác trong thẻ:
`<option value="usa">United States</option>`

-> *value* là thuộc tính

-> "usa" là giá trị của thuộc tính

-> *United States* là text

- Các thẻ HTML thường gặp:
    div : chia các khối trong trang web

    h1 -> h6 : các thẻ tiêu đề từ lớn đến bé

    form : chứa 1 form thông tin

    input : text, email, radio, checkbox, file, color, range, date trên 1 row

    textarea: ô input nhiều row

    radio button : thường là type của the rinput ( chỉ được chọn 1, không thể untick)

    checkbox : có thể chọn nhiều, có thể untick

    list, dropdown : hiển thị danh sách hoặc menu thả xuống

    button : nút bấm

    table : dạng bảng, trong table chứa các hàng(`<tr>`) và các cột(`<td>`), thead : table heading, `<th>` : tiêu đề các cột

    td : chứa giá trị các ô

    **1 thẻ `<table>` thường sẽ chứa 2 thẻ con: `<thead>` và `<tbody>`. Trong `<thead>` sẽ chứa tên của table là `<thead>` và 1 row `<tr>` chứa tên các cột của table `<th>`**
    **thẻ `<tbody>` sẽ chứa các row, column còn lại, và data của cả table**
    vd:
    ```javascript
    <table>
  <thead>
    <tr>
      <th>Tiêu đề 1</th>
      <th>Tiêu đề 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dữ liệu 1</td>
      <td>Dữ liệu 2</td>
    </tr>
    <tr>
      <td>Dữ liệu 3</td>
      <td>Dữ liệu 4</td>
    </tr>
  </tbody>
</table>


  datapicker: tạo bộ chọn ngày

  slider: thanh trượt

  iframe: hiển thị nội dung từ 1 trang web khác bên trong trang web hiện tại

3. DOM - Mối quan hệ và quy ước:
- Self : node hiện tại

![Self](tests\images\node.png)

![Self](D:\playwright\pw-course\tests\images\node.png)

![Self](.\tests\images\node.png)

- parent : node cha
- children : node con
- ancestor : tổ tiên
bao gồm node cha, ông, cụ,.., nút gốc (không báo gồm các nút cùng cấp với cha, ông, cụ,...)

![ancestor](<./tests/images/tổ-tiên-ancestor.png>)

- descendant : hậu duệ
Bao gồm con, cháu, chắt của nút hiện tại

![descendant](<./tests/images/hậu-duệ-descendant.png>)

- sibling : anh em  (cùng cha)
bao gồm anh em đằng trước và anh em đằng sau

![sibling](<./tests/images/anh-em-sibling.png>)

- following : theo sau 
(gồm các node ở phía bên tay phải của node hiện tại,
 không bao gồm con của node hiện tại)

![following](<./tests/images/theo-sau-following.png>) 

- preceding : phía trước gồm các node ở phía bên tay trái node hiện tại, trừ các node ancestor
 (tức là lấy các node bên trái là anh em, và cha, ông, con, cháu... của anh em, k bao gồm con của nút hiện tại)

![preceding](<./tests/images/phía-trước-precesding.png>)  

- following-sibling: anh em phía sau = following + sibling

![following-sibling](<./tests/images/ae-phía-sau-following-sibling.png>)

- preceding-sibling: anh em phía trước = preceding + sibling

![preceding-sibling](<./tests/images/ae-phía-trước-preceding-sibling.png>) 

II. Selector
1. Xpath selector
- absolute xpath: xpath tuyệt đối, lấy theo DOM
vd
```javascript
/html/body/div[1]/table/tr[2]/td[1]
```
- relative xpath: xpath tương đối, dựa vào đặc tính 

`//tenthe[@thuoctinh=”giatri”]`

nên dùng xpath tương đối, với xpath tuyệt đối, nếu dev thêm thẻ, thì đường dẫn sẽ sai

- xpath advance methods

**Wildcard: `*`**
`*` : lấy tất cả các thẻ
vd:

`//*[@id='ancestor']`

![wildcard](<./tests/images/wildcard.png>) 

**Chứa thuộc tính**:
Lấy phần tử chứa thuộc tính

`//*[@checked]`

![chứa-thuộc-tính](<./tests/images/chứa-thuộc-tính.png>) 

**And và or**:
Logic giống với toán tử and/or

`//*[@id='parent' or @class='form-group']`

![or](<./tests/images/or.png>) 

![and](<./tests/images/and.png>) 

**innerText: text()**:

`//h1[@text()='User Registration']`

![text](<./tests/images/text.png>) 

**normalize-space()**:
Dùng cho trường hợp text chứa khoảng space ở đầu cuối

`//h1[@normalize-space()='User Registration']`

![normalize-space](<./tests/images/normalize-space.png>) 

**contains**:
Chứa chuỗi con
có thể dùng dc cả cho text và thuộc tính

`//h1[@contains(text(), 'User')]`

![contains-text](<./tests/images/contains-text.png>) 

`//h1[@contains(@id, 'sel')]` 

![contains-thuộc-tính](<./tests/images/contains-thuộc-tính.png>) 

**starts-with**:
Bắt đầu 1 text bằng starts-with

`//h1[starts-with(text(), 'User')]`

![start-with](<./tests/images/start-with.png>) 

**not**:

`//h1[not(@id='self')]`

-> lấy thẻ h1 có id khác `self'

![not](<./tests/images/not.png>)

- Xpath Axes:
Cú pháp:

`//tag/relationship::tagname[@att='value']`

**parent**: 
lấy parent của con có id='child', form là tên thẻ cha

`//div[@id='child']/parent::form`

![parent](<./tests/images/parent.png>)

**child**:
Lấy con của thẻ đang đứng

`//div[@id='child']/child::input`

![child](<./tests/images/child.png>)

**ancestor**:
ancestor là tổ tiên: nút gốc -> nút cụ -> nút ông -> nút cha

`//div[@id='child']/ancestor::*`

![ancestor](<./tests/images/ancestor.png>)

**descendant**:
Hậu duệ: con, cháu, chắt

`//div[@id='child']/descendant::*`

![descendant](<./tests/images/descendant.png>)

**following**:
Các node theo sau, bao gồm cả con cháu của những node sau, trừ con của nó

`//div[@id='child']/following::*`

![following](<./tests/images/following.png>)

**preceding**:
Các node đi trước, bao gồm con cháu của các node trước, trừ con của nó và các node cha trở lên

`//div[@id='child']/preceding::*`

**following-sibling**:
anh em phía sau

`//div[@id='child']/following-sibling::*`

**preceding-sibling**:
anh em phía trước

`//div[@id='child']/preceding-sibling::*`

2. CSS selector(buổi sau)
3. Playwright selector(buổi sau)

III. Playwright basic syntax
1. Cú pháp:
- test:
dùng để khai báo 1 test (~ 1 testcase)
cú pháp:

```javascript
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {

})
```

- step:
là đơn vị nhỏ hơn test, để khai báo từng step của testcase
cú pháp:

```javascript
await test.step('<tên step>', async () => {
  // code 
})
```
```javascript
test('<tên test>', async ({ page }) => {
await test.step('Tên step', async () => {
// Code here
    });
});
```
*Lưu ý: Step nên dc map 1-1 với testcase để dễ dàng maintain*

2. Basic action:
- Navigate:
```javascript
await page.goto('https://pw-practice.playwrightvn.com/');
```

- Click:
**Single click**:
```javascript
await page.locator("//button").click();
```

**Double click**:
```javascript
await page.locator("//button").dblclick();
```

**Click chuột phải**:
```javascript
page.locator("//button").click({
button: 'right'
})
```

**Click chuột kèm bấm phím khác (đồng thời)**:
```javascript
page.locator("").click({
modifiers: ['Shift'],
})
```

- Input:
**Fill (paste content)**:
```javascript
page.locator("//input").fill('Playwright Viet Nam');
```
**pressSequentially**:
```javascript
page.locator("//input").pressSequentially('Playwright Viet Nam', { 
      delay: 100,
});
```

**Radio/checkbox**:
*Kiểm tra giá trị hiện tại có phải là checked không*:
```javascript
const isChecked = page.locator("//input").isChecked();
```

*Check/uncheck*:
```javascript
page.locator("//input").check();
page.locator("//input").setChecked(false);
```

**Select option**:
Trong 1 menu droplist, gọi đến vị trí của parent (menu),
sau đó dùng selectOption() để chỉ định phần tử cần thao tác

*Single select matching with value/label*:
```javascript
await page.locator("//select").selectOption("blue");
```

*Single select matching label*:
```javascript
await page.locator("//select").selectOption({ label: 'Blue' });
```

*Multiple selection*:
```javascript
await page.locator("//select").selectOption(['red', 'green','blue']);
```

*Set Input file*:
```javascript
await page.locator("//input").setInputFiles("path_file");
```

**Bounding box & position**:

![Boundingbox](./images/bounding box.png)

*Lấy tọa độ, kích thước của element*:
```javascript
const box = await page.locator("#starRating").boundingBox();
```

*Tính tọa độ chính xác cho position*
```javascript
const starRatingBounding = await page.locator("#starRating").boundingBox();
x = starRatingBounding.width / 2;
y = starRatingBounding.height / 2;

await page.locator("#starRating").click({
position: {
      x: x,
      y: y
    }
})
```

3. Kiến thức bổ sung từ file bài tập
- hover:
```javascript
await page.locator("<xpath here>").hover();
```

- Hàm text():
Dùng để tìm ra phần tử có giá trị tương ứng
vd:
`<div @class=”playwright”>This is a text</div>`

  -> `//div[text()=’This is a text’]`

- Hàm contains():
trong nội dung có chứa space ở đầu, đuôi hoặc có giá trị động sẽ thay đổi tùy thời điểm
vd như thời gian
dùng hàm `contains(<giá trị>, <giá trị contains>)` để lấy phần tử này bằng cách truyền vào 1 chuỗi con

- Confirmation dialog:
```javascript
page.on('dialog', dialog => dialog.accept());
await page.getByRole('button').click();
```

*Lưu ý*: cần trigger dialog trước action vào button bật dialog







