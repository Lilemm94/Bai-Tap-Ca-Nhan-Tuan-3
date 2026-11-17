/* Exercise 9.4 – Simple Event Handling */

var btn = document.getElementById("testButton");
var img = document.getElementById("mainImage");

// Bước 2 -> 5 -> 6: hàm xử lý click, cuối cùng dùng hiệu ứng CSS3 transition + setTimeout
function simpleHandler(event) {
    var content = document.getElementById("content");
    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";
        // đổi display sau 1000 ms để hiệu ứng mờ dần kịp chạy
        setTimeout(function () {
            content.style.display = "none";
        }, 1000);
    } else {
        btn.innerHTML = "Hide";
        content.style.display = "block";
        // đổi class sau 500 ms
        setTimeout(function () {
            content.className = "makeItNormal";
        }, 500);
    }
}
btn.addEventListener("click", simpleHandler);

// Bước 3: rê chuột vào ảnh -> chuyển ảnh sang đen trắng
img.addEventListener("mouseover", function (event) {
    img.className = "makeItGray";
});

// Bước 4: rời chuột khỏi ảnh -> trả về bình thường
img.addEventListener("mouseout", function (event) {
    img.className = "makeItNormal";
});
