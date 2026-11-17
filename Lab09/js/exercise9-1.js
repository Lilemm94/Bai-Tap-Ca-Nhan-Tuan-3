/* Exercise 9.1 – Basic DOM Selection
   Mỗi bước được chạy lần lượt cách nhau 2 giây để quan sát kết quả trên trang.
   (Có thể mở F12 → Console để xem thêm console.log) */

var msg = document.getElementById("msgArea");
var title = document.getElementById("pageTitle");
var elem, counts, ps, i;

var steps = [
    // Bước 2: chọn <textarea> và gán giá trị
    function () { msg.value = "here is some text"; },
    // Bước 3 + 4: đổi tiêu đề (có biến tạm, rồi viết gọn không dùng biến tạm)
    function () { title.innerHTML = "New Title"; },
    function () { document.getElementById("pageTitle").innerHTML = "Even newer title"; },
    // Bước 5: innerHTML trả về toàn bộ mã HTML bên trong
    function () { msg.value = document.getElementById("first").innerHTML; },
    // Bước 6: innerText chỉ trả về phần chữ, bỏ thẻ
    function () { msg.value = document.getElementById("first").innerText; },
    // Bước 7: getAttribute
    function () { msg.value = "My class is " + msg.getAttribute("class"); },
    // Bước 8: getElementsByTagName
    function () {
        elem = document.getElementsByTagName("textarea");
        elem[0].value = "selected by tag name";
    },
    // Bước 9: tất cả thẻ <span>
    function () {
        elem = document.getElementsByTagName("span");
        msg.value = "";
        for (i = 0; i < elem.length; i++) {
            msg.value += "\n" + elem[i].innerText;
        }
    },
    // Bước 10: getElementsByClassName
    function () {
        msg.value = "";
        counts = document.getElementsByClassName("count-number");
        for (i = 0; i < counts.length; i++) {
            msg.value += "\n" + counts[i].innerText;
        }
    },
    // Bước 11: querySelector (chỉ lấy phần tử đầu tiên khớp)
    function () {
        ps = document.querySelector("#first p");
        msg.value = ps.innerHTML;
    },
    // Bước 12: querySelectorAll (lấy tất cả phần tử khớp)
    function () {
        ps = document.querySelectorAll("#first p");
        msg.value = "";
        for (i = 0; i < ps.length; i++) {
            msg.value += ps[i].innerHTML + "\n";
        }
    },
    // Bước 13: đổi class thành "hidden" của Bootstrap -> ẩn textarea
    function () { msg.setAttribute("class", "hidden"); },
    // Bước 14: đổi màu nền khối #features
    function () { document.getElementById("features").style.backgroundColor = "green"; }
];

steps.forEach(function (run, index) {
    setTimeout(function () {
        console.log("Bước " + (index + 2));
        run();
    }, index * 2000);
});
