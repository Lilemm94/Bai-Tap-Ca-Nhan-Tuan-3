/* Exercise 9.2 – DOM Family Relations */

var first = document.getElementById("first");
console.log("first:", first);
// firstChild thực ra là một text node (khoảng trắng giữa các thẻ)
console.log("firstChild:", first.firstChild);
console.log("firstChild.nextSibling:", first.firstChild.nextSibling);
console.log("parentNode:", first.parentNode);

// Bước 6: duyệt các node con của #stories
var stories = document.getElementById("stories");
for (var i = 0; i < stories.childNodes.length; i++) {
    console.log("child " + i + " = " + stories.childNodes[i] +
                " nodeType=" + stories.childNodes[i].nodeType);
}

// Bước 7: chỉ tô màu nền cho các node là phần tử (nodeType == 1), bỏ qua text node
var colors = ["#ffd6e0", "#ffe8c7", "#d9f2e6"];
var n = 0;
for (var j = 0; j < stories.childNodes.length; j++) {
    var node = stories.childNodes[j];
    if (node.nodeType === 1) {
        node.style.backgroundColor = colors[n % colors.length];
        n++;
    }
}
