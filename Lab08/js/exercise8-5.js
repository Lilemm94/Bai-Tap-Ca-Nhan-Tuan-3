// Exercise 8.5 – Browser Console
// Bước thử lỗi: nếu viết sai "doccumment.write(...)" Console sẽ báo
// "Uncaught ReferenceError: doccumment is not defined" kèm tên file và số dòng.
document.write("Mở F12 → Console để xem log. ");
var count = 1;
console.log("count =", count);          // thông tin thường
count++;
console.warn("Cảnh báo: count đã tăng lên", count);
console.error("Đây là ví dụ một thông báo lỗi (cố ý)");
console.log("Kiểu của count:", typeof count);
