const url = window.location.href;

document.body.style.border = "5px solid red";

const links = document.getElementsByTagName("a");

function checker() {
  const body = document.body;
  const wrapper = document.createElement('div');

  wrapper.style.backgroundColor = 'pink';
  wrapper.style.display = 'flex';
  //  wrapper.style.position = 'fixed';
  wrapper.style.top = '2rem';
  wrapper.style.right = '2rem';
  wrapper.style.zIndex = '10000000000000000';

  for (const i in links) {

    if (!links?.[i]?.innerText) return;
    const link = links[i];
    const text = link?.innerText;
    if (text) {
      if (
        text?.match(/job|jobs|careers|career|employment|work for us|work here/i)
      ) {
        document.body.appendChild(link);
        wrapper.append(links[i]);
      }
    }
  }


  console.log(wrapper);
}

chrome.runtime.sendMessage({}, (response) => {
  var checkReady = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(checkReady);

      checker();
    }
  });
});