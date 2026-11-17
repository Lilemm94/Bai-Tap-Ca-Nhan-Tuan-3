/* Exercise 9.5 – Responding to Load Events */

var boxClass = 'movingDiv';   // biến toàn cục

function outputBox(num) {
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}

/* Bước 2-3: nếu chạy ngay (script nằm ở <head>) thì DOM chưa sẵn sàng -> lỗi:
   var divToGet = document.getElementById("div1");
   alert(divToGet.innerHTML);                      // TypeError: null
*/

// Bước 4: chờ sự kiện load rồi mới truy cập DOM
window.addEventListener("load", function () {
    var divToGet = document.getElementById("div1");
    alert(divToGet.innerHTML);
});
