"use strict";
var url = window.location.href;
document.body.style.border = "5px solid red";
var links = document.getElementsByTagName("a");
function checker() {
    var _a;
    var body = document.body;
    var wrapper = document.createElement('div');
    wrapper.style.backgroundColor = 'pink';
    wrapper.style.display = 'flex';
    //  wrapper.style.position = 'fixed';
    wrapper.style.top = '2rem';
    wrapper.style.right = '2rem';
    wrapper.style.zIndex = '10000000000000000';
    for (var i in links) {
        if (!((_a = links === null || links === void 0 ? void 0 : links[i]) === null || _a === void 0 ? void 0 : _a.innerText))
            return;
        var link = links[i];
        var text = link === null || link === void 0 ? void 0 : link.innerText;
        if (text) {
            if (text === null || text === void 0 ? void 0 : text.match(/job|jobs|careers|career|employment|work for us|work here/i)) {
                document.body.appendChild(link);
                wrapper.append(links[i]);
            }
        }
    }
    console.log(wrapper);
}
chrome.runtime.sendMessage({}, function (response) {
    var checkReady = setInterval(function () {
        if (document.readyState === 'complete') {
            clearInterval(checkReady);
            checker();
        }
    });
});
