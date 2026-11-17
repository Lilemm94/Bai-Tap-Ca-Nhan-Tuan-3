// Exercise 8.11 – Arrays of Objects (đọc dữ liệu từ travel-data.js)

document.write("<h2>Bài viết (vòng lặp for)</h2>");
for (var i = 0; i < posts.length; i++) {
    document.write("<div class='post'><img src='images/travel/" + posts[i].thumb + "' alt=''>" +
        "<div><b>" + posts[i].title + "</b><br><small>" + posts[i].user + " – " + posts[i].postdate +
        "</small><p>" + posts[i].excerpt + "</p></div></div>");
}

document.write("<h2>Các quốc gia kèm cờ (for ... in)</h2>");
var flagCodes = { "Bahamas": "BS", "Canada": "CA", "Germany": "DE", "Ghana": "GH", "Hungary": "HU",
                  "Italy": "IT", "Spain": "ES", "United Kingdom": "GB", "United States": "US" };
for (var idx in countries) {
    var name = countries[idx];
    document.write("<span class='country'><img src='flags/" + flagCodes[name] + ".png' alt=''>" + name + "</span>");
}

document.write("<h2>Châu lục</h2><p>" + continents.join(" • ") + "</p>");
