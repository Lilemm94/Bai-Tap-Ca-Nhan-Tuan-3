// Exercise 8.10 – Creating JavaScript Objects

// Cách 1: object literal
var order1 = {
    id: 1001,
    customer: "Nguyễn Bảo Hân",
    items: ["Nến thơm", "Hộp quà"],
    total: 350000,
    describe: function () {
        return "Đơn " + this.id + " của " + this.customer + " – " + this.items.length + " sản phẩm";
    }
};

// Cách 2: hàm khởi tạo (constructor)
function Order(id, customer, total) {
    this.id = id;
    this.customer = customer;
    this.total = total;
    this.describe = function () {
        return "Đơn " + this.id + " của " + this.customer + " – " + this.total.toLocaleString("vi-VN") + "đ";
    };
}
var order2 = new Order(1002, "Trần Minh Anh", 520000);

document.write("<h2>Object literal</h2><p>" + order1.describe() + "</p>");
document.write("<h2>Constructor</h2><p>" + order2.describe() + "</p>");
console.log(order1, order2);
