const copyUrl = function() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(decodeURI(window.location.toString()));
  }
};

window.addEventListener("keydown", event => {
  if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
    copyUrl();
  }
});
