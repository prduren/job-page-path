const url = window.location.href;

document.body.style.border = "5px solid red";

const links = document.getElementsByTagName("a");

function checker() {
  for (const i in links) {
    const link = links[i];
    const text = link?.innerText;
    if (links[i]?.innerText.match(/Job|jobs|careers|career/i)) {
      console.log("found", text);
      const element = document.createElement("a");
      element.innerHTML = "View Jobs";
      // element.style = "display:fixed;top:0;right:0;";
    }
  }
}

checker();
