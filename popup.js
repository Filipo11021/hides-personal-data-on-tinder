document.addEventListener("DOMContentLoaded", function () {
  var actionBtn = document.querySelector("button[data-on]");

  actionBtn.addEventListener("click", function () {
    let message = "";

    if (JSON.parse(actionBtn.dataset.on)) {
      actionBtn.innerText = "show";
      message = "on";
    } else if (!JSON.parse(actionBtn.dataset.on)) {
      actionBtn.innerText = "hide";
      message = "off";
    }

    actionBtn.dataset.on = !JSON.parse(actionBtn.dataset.on);

    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
    
  });

});
