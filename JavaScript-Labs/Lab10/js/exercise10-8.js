/* Exercise 10.8 – Complex Animations */

$(function () {
    $("button").click(function () {
        // Bước 4: ba animation nối tiếp nhau (mỗi cái chạy sau khi cái trước kết thúc)
        $("#box")
            .animate({            // bước 3: animate nhiều thuộc tính cùng lúc
                left: '495px',
                opacity: '1',
                height: '50px'
            })
            .animate({ top: '400px', opacity: '0.2' })
            .animate({ height: '200px' }, 2000);
    });
});
