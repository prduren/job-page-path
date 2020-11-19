const url = window.location.href;

document.body.style.border = "5px solid red";

const links = document.getElementsByTagName("a");

function checker() {
  const body: any = document.body;
  const wrapper: any = document.createElement('div');
  wrapper.style.backgroundColor = "pink";
  wrapper.style.display = 'flex';
  // wrapper.style.position = 'fixed';
  // wrapper.style.top = '2rem';
  // wrapper.style.right = '2rem';
  wrapper.style.zIndex = "100000000000";
  wrapper.style.width = '10rem';
  wrapper.style.height = '10rem';
  wrapper.style.margin = '0 auto';

  for (const i in links) {
    const link = links[i];
    const text = link?.innerText;
    if (links[i]?.innerText.match(/Job|jobs|careers|career/i)) {
      console.log("found", text);
      wrapper.appendChild(link);
    }
  }
  console.log(wrapper);
  body.appendChild(wrapper);
}

checker();
