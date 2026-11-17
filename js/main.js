/* Trang chủ JavaScript-Labs – menu di động, tab kiến thức, giỏ hàng mini */
document.addEventListener("DOMContentLoaded", function () {

    // 1. Menu trên điện thoại
    var menuBtn = document.getElementById("menuBtn");
    var menu = document.getElementById("menu");
    menuBtn.addEventListener("click", function () {
        var open = menu.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", open);
    });
    menu.addEventListener("click", function (e) {
        if (e.target.tagName === "A") { menu.classList.remove("open"); }
    });

    // 2. Tab "Kiến thức đã học"
    var tabs = document.querySelectorAll(".tab");
    var panels = document.querySelectorAll(".panel");
    tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            tabs.forEach(function (t) { t.setAttribute("aria-selected", "false"); });
            panels.forEach(function (p) { p.hidden = true; });
            tab.setAttribute("aria-selected", "true");
            document.getElementById(tab.getAttribute("aria-controls")).hidden = false;
        });
    });

    // 3. Giỏ hàng mini: tăng/giảm số lượng và tính lại tổng tiền
    var TAX_RATE = 0.08;
    var cart = document.getElementById("cart");
    function formatVND(n) { return n.toLocaleString("vi-VN") + "đ"; }

    function recalc() {
        var subtotal = 0;
        cart.querySelectorAll(".cart-item").forEach(function (row) {
            var price = Number(row.dataset.price);
            var qty = Number(row.querySelector("output").textContent);
            var line = price * qty;
            row.querySelector(".line-total").textContent = formatVND(line);
            subtotal += line;
        });
        var tax = Math.round(subtotal * TAX_RATE);
        document.getElementById("subtotal").textContent = formatVND(subtotal);
        document.getElementById("tax").textContent = formatVND(tax);
        document.getElementById("grand").textContent = formatVND(subtotal + tax);
    }

    cart.addEventListener("click", function (e) {
        var btn = e.target.closest("button[data-step]");
        if (!btn) { return; }
        var out = btn.parentNode.querySelector("output");
        var next = Math.max(0, Number(out.textContent) + Number(btn.dataset.step));
        out.textContent = next;
        recalc();
    });
    recalc();
});
