// Exercise 8.6 – Built-in JavaScript Objects (String, Date, Math)

// String: đối tượng (object) và giá trị nguyên thủy (literal)
var strObj = new String("hello");
var strLit = "hello";
document.write("<p>strObj == strLit : " + (strObj == strLit) + "</p>");     // true  (so sánh giá trị)
document.write("<p>strObj === strLit : " + (strObj === strLit) + "</p>");   // false (khác kiểu)
document.write("<p>typeof strObj = " + typeof strObj + ", typeof strLit = " + typeof strLit + "</p>");
document.write("<p>Độ dài: " + strLit.length + " | In hoa: " + strLit.toUpperCase() +
               " | Vị trí chữ 'l': " + strLit.indexOf("l") + "</p>");

// Date
var today = new Date();
document.write("<p>Hôm nay: " + today.toLocaleDateString("vi-VN") +
               " – thứ " + (today.getDay() === 0 ? "CN" : today.getDay() + 1) + "</p>");
var daysLeft = Math.ceil((new Date(today.getFullYear(), 11, 31) - today) / (1000 * 60 * 60 * 24));
document.write("<p>Còn " + daysLeft + " ngày nữa là hết năm " + today.getFullYear() + "</p>");

// Math
document.write("<p>Math.PI = " + Math.PI.toFixed(4) + " | làm tròn 4.6 = " + Math.round(4.6) +
               " | max(3, 9, 5) = " + Math.max(3, 9, 5) + " | số ngẫu nhiên 1-10 = " +
               (Math.floor(Math.random() * 10) + 1) + "</p>");
