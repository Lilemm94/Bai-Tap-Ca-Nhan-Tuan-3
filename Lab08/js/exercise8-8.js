// Exercise 8.8 – JavaScript Functions

var boxClass = "movingDiv";      // biến toàn cục

// hàm có tham số và giá trị trả về
function outputBox(num) {
    var local = "div" + num;     // biến cục bộ: chỉ tồn tại trong hàm
    var box = "<div class='" + boxClass + "' id='" + local + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}

// gọi hàm 5 lần
for (var count = 1; count < 6; count++) {
    document.write(outputBox(count));
}
console.log("boxClass (toàn cục) =", boxClass);
console.log("typeof local ngoài hàm =", typeof local);   // "undefined" vì là biến cục bộ
