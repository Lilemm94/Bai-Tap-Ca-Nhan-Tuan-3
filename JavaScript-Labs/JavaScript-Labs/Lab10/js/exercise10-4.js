/* Exercise 10.4 – jQuery Listeners */

/* Bước 2: viết tắt click()
$(".panel").click(function () {
    $("#message").html("You clicked in the panel");
});
*/

/* Bước 3: dùng on() – dùng được với mọi sự kiện
$(".panel").on("click", function () {
    $("#message").html("You clicked in the panel");
});
*/

// Bước 4 + 5: bọc trong document ready và nối chuỗi nhiều sự kiện
$(function () {
    $(".panel")
        .on("mousemove", function (e) {
            $("#message").html("x=" + e.pageX + " y=" + e.pageY);
        })
        .on("mouseleave", function (e) {
            $("#message").html("goodbye!");
        })
        .on("click", function () {
            $("#message").html("stopped move reporting");
            $(".panel").off("mousemove");   // gỡ sự kiện mousemove
        });
});
