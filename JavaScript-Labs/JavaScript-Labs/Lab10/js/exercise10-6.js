/* Exercise 10.6 – Simple jQuery Animation */

$(function () {
    // hiệu ứng mờ dần
    $("#btnFadeIn").click(function () {
        $("figure").fadeIn(1000);
    });
    $("#btnFadeOut").click(function () {
        $("figure").fadeOut(1000);
    });
    $("#btnFade").click(function () {
        $("figure").fadeToggle(500);
    });

    // hiệu ứng trượt
    $("#btnSlideDown").click(function () {
        $("figure").slideDown("slow");
    });
    $("#btnSlideUp").click(function () {
        $("figure").slideUp("slow");
    });
    $("#btnSlide").click(function () {
        $("figure").slideToggle(2000);
    });
});
