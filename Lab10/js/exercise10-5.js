/* Exercise 10.5 – Inserting DOM Elements
   Các bước 2 -> 8 lần lượt thay đổi dòng cuối. Bản đang chạy là bước 8; các bước còn lại ở dạng chú thích. */

$(function () {
    // tạo phần tử mới
    var img = $('<img src="images/art/thumbs/13030.jpg" >');
    var panel = $('.panel');

    // panel.after(img);        // bước 2: chèn SAU panel
    // panel.before(img);       // bước 3: chèn TRƯỚC panel
    // panel.append(img);       // bước 4: thêm vào CUỐI bên trong panel
    // panel.prepend(img);      // bước 5: thêm vào ĐẦU bên trong panel
    // img.appendTo(panel);     // bước 6: cách viết khác của append
    // img.prependTo(panel);    // bước 7: cách viết khác của prepend
    img.insertBefore(panel);    // bước 8: cách viết khác của before
});
