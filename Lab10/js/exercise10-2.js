/* Exercise 10.2 – Basic Selectors */

// Bước 2: chọn <textarea> bằng id rồi gán giá trị
var msg = $('#msgArea');
msg.val("here is some new text");

// Bước 3: html() đọc/ghi nội dung HTML
// (dùng #pageTitle thay cho #first để không ghi đè khối chứa <textarea>)
$('#pageTitle').html("new Title");

// Bước 4: attr() đọc thuộc tính
$('#msgArea').val("My class is " + $('#msgArea').attr("class"));

// Bước 5: chọn tất cả <button> và đổi màu nền – không cần vòng lặp
var buttons = $('button');
buttons.css('background-color', 'red');

// Bước 6: chọn body (tập chỉ có 1 phần tử) vẫn dùng css() như bình thường
var temp = $('body');
temp.css("background-color", "ivory");

// Bước 7: addClass() theo kiểu chuỗi phương thức (chaining)
$('.center-icons').addClass('selected');
