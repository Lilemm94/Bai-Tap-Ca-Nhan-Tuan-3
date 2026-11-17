/* Exercise 10.9 – GET Requests
   Dịch vụ gốc: http://www.randyconnolly.com/funwebdev/services/travel/cities.php
   Vì GitHub Pages chạy bằng https nên trình duyệt chặn gọi http (mixed content),
   bài này dùng file data/cities.json có cùng cấu trúc dữ liệu. */

$(function () {
    $("#consume").click(function () {
        var url = "data/cities.json";
        $("#results").html("<ul></ul>");

        $.get(url, function (data, status) {
            // bước 4: kiểm tra trạng thái trả về
            if (status == "success") {
                // bước 5: duyệt dữ liệu bằng $.each()
                $.each(data, function (index, value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            }
        });
    });
});
