const url = window.location.href;

function urlExists(url, callback) {
  fetch(url, { method: "head" }).then(function (status) {
    callback(status.ok);
  });
}

urlExists(url, function (exists) {
  if (exists) {
    console.log("not a 404");
  } else {
    console.log("def a 404");
  }
});
