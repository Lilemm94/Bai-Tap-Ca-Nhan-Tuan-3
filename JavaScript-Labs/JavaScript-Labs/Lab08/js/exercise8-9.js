// Exercise 8.9 – Functions as Objects (hàm lồng nhau, hàm ẩn danh, callback)

function calculateTotal(price, quantity) {
    var subtotal = price * quantity;

    // hàm lồng nhau, truy cập được biến subtotal của hàm cha
    function calculateTax() {
        return subtotal * 0.05;
    }
    return subtotal + calculateTax();
}

// hàm ẩn danh gán vào biến
var discount = function (total) {
    return total * 0.9;
};

// truyền hàm làm tham số (callback)
function applyRule(total, rule) {
    return rule(total);
}

console.log("Tổng chưa giảm:", calculateTotal(15, 2));
console.log("Sau giảm 10%:", applyRule(calculateTotal(15, 2), discount));
