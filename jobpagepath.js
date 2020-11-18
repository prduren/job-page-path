"use strict";
var url = window.location.href;
document.body.style.border = "5px solid red";
var links = document.getElementsByTagName("a");
function checker() {
    var _a;
    for (var i in links) {
        var link = links[i];
        var text = link === null || link === void 0 ? void 0 : link.innerText;
        if ((_a = links[i]) === null || _a === void 0 ? void 0 : _a.innerText.match(/Job|jobs|careers|career/i)) {
            console.log("found", text);
            var element = document.createElement("a");
            element.innerHTML = "View Jobs";
            // element.style = "display:fixed;top:0;right:0;";
        }
    }
}
checker();
