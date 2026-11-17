/* Exercise 9.3 – Modifying the DOM */

// Bước 1: tạo <p> mới bằng JavaScript rồi thêm vào #first
var first = document.getElementById("first");
var text = document.createTextNode("this is programmatically created");
var p = document.createElement("p");
p.appendChild(text);
first.appendChild(p);

// Bước 3: xóa một thẻ <li> khỏi danh sách icon
var icons = document.getElementById("iconList");
icons.removeChild(document.getElementById("deleteThisOne"));
