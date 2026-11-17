/* Exercise 10.3 – Advanced Selectors */

// Bước 2 (đã chuyển thành chú thích ở bước 3):
// $(':password').css('background-color', 'yellow');

// Bước 4: chọn mỗi phần tử con thứ 4 (4n) trong form
$('form :nth-child(4n)').css('background-color', 'yellow');

// Bước 5: chọn <label> có chứa chữ "word"
$('label:contains("word")').css("color", "black");
