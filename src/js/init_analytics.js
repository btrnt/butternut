chrome.storage.sync.get(['selectedText'], function(data) {
	document.getElementById("textarea").value = data.selectedText;
	console.log(data.selectedText);
});