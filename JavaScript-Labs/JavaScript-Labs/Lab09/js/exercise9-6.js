/* Exercise 9.6 – Debugging Events
   Cách làm: F12 → Sources → mở file này → click vào số dòng chứa alert() để đặt breakpoint,
   rồi rê chuột vào các hộp div và quan sát biến e, e.target ở khung Scope/Watch. */

var boxClass = 'movingDiv';

function outputBox(num) {
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}

window.addEventListener("load", function () {
    var divs = document.querySelectorAll(".movingDiv");
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function (e) {
            console.log("sự kiện:", e.type, "- phần tử:", e.target);
            alert("triggered by " + e.target.id);   // <- đặt breakpoint ở dòng này
        });
    }
});
