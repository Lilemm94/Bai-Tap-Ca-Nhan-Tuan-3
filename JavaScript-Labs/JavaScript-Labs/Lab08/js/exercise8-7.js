// Exercise 8.7 – Arrays: bảng lịch 30 ngày

var dayNames = ["T2", "T3", "T4", "T5", "T6", "T7"];
dayNames.push("CN");            // thêm vào cuối mảng
dayNames.unshift("Tuần");       // thêm vào đầu mảng (cột số tuần)

var html = "<table class='calendar'><tr>";
for (var i = 0; i < dayNames.length; i++) {
    html += "<th>" + dayNames[i] + "</th>";
}
html += "</tr>";

var startOffset = 2;            // ngày 1 rơi vào thứ 4 (T4) – bỏ trống 2 ô đầu
var totalDays = 30;
var cell = 0, week = 1, day = 1;

html += "<tr><td><b>" + week + "</b></td>";
for (cell = 0; cell < startOffset; cell++) html += "<td></td>";
while (day <= totalDays) {
    var isWeekend = (cell % 7) >= 5;                 // T7, CN
    html += "<td" + (isWeekend ? " class='weekend'" : "") + ">" + day + "</td>";
    cell++; day++;
    if (cell % 7 === 0 && day <= totalDays) {        // hết hàng -> sang tuần mới
        week++;
        html += "</tr><tr><td><b>" + week + "</b></td>";
    }
}
while (cell % 7 !== 0) { html += "<td></td>"; cell++; }  // điền ô trống cuối bảng
html += "</tr></table>";

document.getElementById("out").innerHTML = html;
