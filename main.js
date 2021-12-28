let panel;
setTimeout(() => {
  panel = document.querySelector(".settings__container");
  panel.style.display = "none";
}, 500);


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request === "on") {
    panel.style.display = "none";
  } else if (request === "off") {
    panel.style.display = "inherit";
  }
});
