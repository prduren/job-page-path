
const url = window.location.href;


console.log("url: ", url);


/* function urlExists(url, callback) {
  fetch(url, { method: "head" }).then((status) => {
    callback(status.ok);
  });
}

urlExists(url, (exists) => {
  if (exists) {
    fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },

    }).then((res) => res.text());
  } else {
    console.log("def a 404");
  }
}); */

document.body.style.border = "5px solid red";
console.log(document)

const links = document.getElementsByTagName("a");


links.forEach((link) => {
  console.log('link: ', link);
  if (link.innerText.match( /Jobs|career/g )) console.log(link.innerText);
});


console.log("links: ", links);