"use strict";
var url = window.location.href;
document.body.style.border = "5px solid red";
var links = document.getElementsByTagName("a");
function checker() {
    var _a;
    var body = document.body;
    var wrapper = document.createElement('div');
    wrapper.style.backgroundColor = "pink";
    wrapper.style.display = 'flex';
    // wrapper.style.position = 'fixed';
    // wrapper.style.top = '2rem';
    // wrapper.style.right = '2rem';
    wrapper.style.zIndex = "100000000000";
    wrapper.style.width = '10rem';
    wrapper.style.height = '10rem';
    wrapper.style.margin = '0 auto';
    for (var i in links) {
        var link = links[i];
        var text = link === null || link === void 0 ? void 0 : link.innerText;
        if ((_a = links[i]) === null || _a === void 0 ? void 0 : _a.innerText.match(/Job|jobs|careers|career/i)) {
            console.log("found", text);
            wrapper.appendChild(link);
        }
    }
    console.log(wrapper);
    body.appendChild(wrapper);
}
checker();
