const copyUri = function() {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    function(tabs) {
      const url = decodeURI(tabs[0].url);
      let e = document.createElement("textarea");
      document.body.appendChild(e);
      e.value = url;
      e.select();
      document.execCommand("copy");
      document.body.removeChild(e);
    }
  );
};

chrome.commands.onCommand.addListener(function(command) {
  copyUri();
});
