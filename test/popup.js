chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {

  alert(selection[0].length);
});

