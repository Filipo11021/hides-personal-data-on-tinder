let prevHref = document.location.href;

window.onload = function () {
  const bodyList = document.querySelector("body");

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (prevHref != document.location.href) {
        prevHref = document.location.href;
        document.documentElement.style.display = "none";
        setTimeout(() => {
          document.documentElement.style.display = "";
        }, 1000);

        setTimeout(() => {
          const panel = document.querySelector(".settings__container");
          if (panel) {
            panel.style.display = "none";
          }
        }, 500);
      }
    });
  });

  const config = {
    childList: true,
    subtree: true,
  };

  observer.observe(bodyList, config);
};
