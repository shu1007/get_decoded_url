const copyUrl = () => {
  const listener = event => {
    event.clipboardData.setData(
      "text/plain",
      decodeURI(window.location.toString())
    );
    event.preventDefault();
    document.removeEventListener("copy", listener);
  };
  document.addEventListener("copy", listener);
  document.execCommand("copy");
};

window.addEventListener("keydown", event => {
  if (event.ctrlKey && event.altKey && event.keyCode === 67) {
    copyUrl();
  }
});
