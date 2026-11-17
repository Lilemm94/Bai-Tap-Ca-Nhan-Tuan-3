/* Exercise 10.10 – jqXHR Handling: done() / fail() / always() */

$(function () {
    $('.animLoading').hide();

    function consume(url) {
        $("#results ul").empty();
        $('.animLoading').show();

        $.get(url)
            // done chạy trước khi request thành công
            .done(function (data) {
                $.each(data, function (index, value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            })
            // fail chạy khi có lỗi, trước always()
            .fail(function (xhr, status, error) {
                alert("failed loading data - status=" + status + " error=" + error);
            })
            // always luôn chạy cuối cùng
            .always(function (data) {
                $('.animLoading').fadeOut("slow");
            });
    }

    $("#consume").click(function () {
        consume("data/cities.json");
    });

    // nút thử nghiệm: gọi URL không tồn tại để kiểm tra nhánh fail()
    $("#consumeBad").click(function () {
        consume("data/khong-ton-tai.json");
    });
});
