/* Exercise 10.7 – More jQuery Animation: khung xem ảnh lớn đi theo con trỏ chuột */

$(function () {

    $('figure img').on('mouseover', function (e) {
        // tạo tên file ảnh lớn từ ảnh nhỏ
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace("small", "medium");

        // tạo phần tử động chứa ảnh lớn và chú thích
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');
        preview.append(image);
        preview.append(caption);
        $('body').append(preview);

        // làm ảnh nhỏ chuyển xám
        $(this).addClass("gray");

        // hiện preview mờ dần
        $("#preview").fadeIn(1000);
    });

    // khi rời chuột: gỡ preview và bỏ class gray
    function removePreview() {
        $(this).removeClass("gray");
        $("#preview").remove();
    }

    // di chuyển preview theo tọa độ chuột
    function movePreview(e) {
        $("#preview")
            .css("top", (e.pageY - 10) + "px")
            .css("left", (e.pageX + 30) + "px");
    }

    $("figure img").on("mouseleave", removePreview);
    $("figure img").on("mousemove", movePreview);
});
