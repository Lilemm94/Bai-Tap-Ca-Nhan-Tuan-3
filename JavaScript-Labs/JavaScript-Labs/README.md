# JavaScript Labs – Nguyễn Bảo Hân

## Thông tin sinh viên
- **Họ và tên:** Nguyễn Bảo Hân
- **MSSV:** 31241020124
- **Lớp học phần:** Phát triển ứng dụng TMĐT – bài cá nhân (TS. Nguyễn Mạnh Tuấn)
- **GitHub:** https://github.com/Lilemm94
- **Repository:** https://github.com/Lilemm94/ecommerce-ui-improvement

## Mục tiêu
Thực hành 03 bài Lab JavaScript (Lab 08, 09, 10) để xây dựng chức năng tương tác cho website: nền tảng ngôn ngữ, thao tác DOM và xử lý sự kiện, thư viện jQuery và GET Request. Các kỹ thuật được liên hệ với website thương mại điện tử như kiểm tra biểu mẫu đăng ký, giỏ hàng, cập nhật nội dung sản phẩm và hiệu ứng tương tác.

## Truy cập trên GitHub Pages
- Trang chủ: https://lilemm94.github.io/ecommerce-ui-improvement/JavaScript-Labs/
- Lab 08: https://lilemm94.github.io/ecommerce-ui-improvement/JavaScript-Labs/Lab08/
- Lab 09: https://lilemm94.github.io/ecommerce-ui-improvement/JavaScript-Labs/Lab09/
- Lab 10: https://lilemm94.github.io/ecommerce-ui-improvement/JavaScript-Labs/Lab10/

Mở trang chủ → chọn một Lab → bấm vào từng Exercise. Nhấn **F12 → Console** để xem các thông báo `console.log()`.

## Cấu trúc thư mục
```
JavaScript-Labs/
├── index.html          # Trang chủ portfolio
├── css/style.css       # Giao diện trang chủ và trang danh sách Lab
├── js/main.js          # Tương tác trang chủ: menu, tab, bộ đếm
├── images/             # Ảnh đại diện (avatar.jpg)
├── README.md
├── Lab08/              # index.html + exercise8-x.html, css/, js/, images/, flags/
├── Lab09/              # index.html + exercise9-x.html, css/, js/, images/, flags/
└── Lab10/              # index.html + exercise10-x.html, css/, js/, images/, data/
```
Mỗi Exercise có một trang HTML riêng (`exerciseX-Y.html`) và file JavaScript tương ứng trong thư mục `js/`. Mỗi Lab có `index.html` liệt kê toàn bộ Exercise.

## Nội dung từng Lab

### Lab 08 – JavaScript 1: Language Foundations

| Exercise | Nội dung | File |
|---|---|---|
| 8.1 | **Enabling/Disabling JavaScript** – Kiểm tra trang khi bật/tắt JavaScript bằng document.write và noscript. | `Lab08/exercise8-1.html` |
| 8.2 | **Embedded JavaScript** – Nhúng mã trực tiếp trong thẻ script, hiển thị hộp thoại alert(). | `Lab08/exercise8-2.html` |
| 8.3 | **External JavaScript** – Tách mã ra file hello.js và ghi nội dung bằng document.write(). | `Lab08/exercise8-3.html` |
| 8.4 | **Using noscript** – Thông báo thay thế cho người dùng đang tắt JavaScript. | `Lab08/exercise8-4.html` |
| 8.5 | **Using the Browser Console** – Đọc lỗi trên Console, dùng console.log(), warn(), error(). | `Lab08/exercise8-5.html` |
| 8.6 | **Built-in Objects** – So sánh String object và literal (== và ===), dùng Date và Math. | `Lab08/exercise8-6.html` |
| 8.7 | **Arrays** – Dùng push(), unshift(), vòng lặp để vẽ bảng lịch 30 ngày. | `Lab08/exercise8-7.html` |
| 8.8 | **JavaScript Functions** – Hàm có tham số, giá trị trả về, biến cục bộ và toàn cục. | `Lab08/exercise8-8.html` |
| 8.9 | **Functions as Objects** – Hàm lồng nhau, hàm ẩn danh và callback để tính tổng tiền. | `Lab08/exercise8-9.html` |
| 8.10 | **Creating Objects** – Tạo đối tượng đơn hàng bằng object literal và constructor. | `Lab08/exercise8-10.html` |
| 8.11 | **Arrays of Objects** – Duyệt mảng đối tượng bằng for và for…in, hiển thị bài viết và cờ. | `Lab08/exercise8-11.html` |

### Lab 09 – JavaScript 2: DOM and Events

| Exercise | Nội dung | File |
|---|---|---|
| 9.1 | **Basic DOM Selection** – getElementById, getElementsBy…, querySelector(All), innerHTML, innerText. | `Lab09/exercise9-1.html` |
| 9.2 | **DOM Family Relations** – Duyệt cây DOM: firstChild, nextSibling, parentNode, nodeType. | `Lab09/exercise9-2.html` |
| 9.3 | **Modifying the DOM** – Tạo phần tử bằng createElement/appendChild và xóa bằng removeChild. | `Lab09/exercise9-3.html` |
| 9.4 | **Simple Event Handling** – click, mouseover, mouseout; ẩn/hiện nội dung với hiệu ứng CSS3. | `Lab09/exercise9-4.html` |
| 9.5 | **Responding to Load Events** – Chờ trang tải xong bằng sự kiện load trước khi truy cập DOM. | `Lab09/exercise9-5.html` |
| 9.6 | **Debugging Events** – Đặt breakpoint trong DevTools, quan sát đối tượng e và e.target. | `Lab09/exercise9-6.html` |
| 9.7 | **Working with Forms** – Đổi màu ô nhập khi focus và blur. | `Lab09/exercise9-7.html` |
| 9.8 | **Form Validation** – Kiểm tra ô trống khi submit, chặn gửi form và hiện lỗi trên trang. | `Lab09/exercise9-8.html` |

### Lab 10 – JavaScript 3: jQuery

| Exercise | Nội dung | File |
|---|---|---|
| 10.1 | **Set up jQuery** – Nạp jQuery từ CDN và bản dự phòng cục bộ. | `Lab10/exercise10-1.html` |
| 10.2 | **Basic Selectors** – val(), html(), attr(), css(), addClass() trên tập phần tử. | `Lab10/exercise10-2.html` |
| 10.3 | **Advanced Selectors** – :password, :nth-child(4n), :contains() trên form đăng ký. | `Lab10/exercise10-3.html` |
| 10.4 | **jQuery Listeners** – on(), off(), document ready và chuỗi sự kiện mousemove/mouseleave/click. | `Lab10/exercise10-4.html` |
| 10.5 | **Inserting DOM Elements** – after, before, append, prepend, appendTo, prependTo, insertBefore. | `Lab10/exercise10-5.html` |
| 10.6 | **Simple jQuery Animation** – fadeIn/Out/Toggle và slideUp/Down/Toggle. | `Lab10/exercise10-6.html` |
| 10.7 | **More jQuery Animation** – Khung xem ảnh lớn đi theo con trỏ chuột. | `Lab10/exercise10-7.html` |
| 10.8 | **Complex Animations** – animate() nhiều thuộc tính và chuỗi animation nối tiếp. | `Lab10/exercise10-8.html` |
| 10.9 | **GET Requests** – $.get() đọc dữ liệu JSON, hiển thị danh sách bằng $.each(). | `Lab10/exercise10-9.html` |
| 10.10 | **jqXHR Handling** – done(), fail(), always() và biểu tượng đang tải. | `Lab10/exercise10-10.html` |

## Ghi chú kỹ thuật
- Bootstrap, Font Awesome và jQuery được tải qua **https** (jsDelivr, cdnjs, code.jquery.com) để chạy được trên GitHub Pages; jQuery có bản dự phòng `Lab10/js/jquery-3.1.1.min.js` (Exercise 10.1).
- Exercise 10.9–10.10: dịch vụ gốc `http://www.randyconnolly.com/funwebdev/services/travel/cities.php` dùng http nên trình duyệt chặn trên trang https. Bài dùng tệp `Lab10/data/cities.json` có cấu trúc tương tự (mảng đối tượng có thuộc tính `name`). Exercise 10.10 có thêm nút gọi URL lỗi để kiểm tra nhánh `fail()`.
- Exercise 10.2: dùng `#pageTitle` thay cho `#first` ở bước 3 để không ghi đè khối chứa textarea.
- Exercise 9.1: các bước chạy lần lượt cách nhau 2 giây để kịp quan sát từng kết quả.
- Khi mở file trực tiếp từ ổ đĩa (file://), Exercise 10.9–10.10 không đọc được JSON vì trình duyệt chặn; hãy xem qua GitHub Pages hoặc chạy bằng Live Server.

## Sử dụng AI
Có sử dụng Claude để hỗ trợ dựng khung bài, rà soát mã và gợi ý cách xử lý lỗi http/https. Mã đã được chạy thử và kiểm tra lại trên trình duyệt.
