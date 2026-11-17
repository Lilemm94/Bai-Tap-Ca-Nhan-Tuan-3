/* Exercise 10.1 – Set up jQuery
   Kiểm tra jQuery đã được nạp (từ CDN hoặc bản dự phòng js/jquery-3.1.1.min.js). */

if (window.jQuery) {
    console.log("jQuery đã tải xong, phiên bản " + jQuery.fn.jquery);
    $(function () {
        $("#msgArea").val("jQuery loaded – version " + jQuery.fn.jquery);
    });
} else {
    console.error("Không tải được jQuery");
}
