chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
	$.post('https://apiv2.indico.io/political',
		JSON.stringify({
			'api_key': 'ae63f26c7f98d4b206d13c7779ad104c',
			'data': selection[0],
			'threshold': .01
		})).then(function(res){document.write(res)});
});

