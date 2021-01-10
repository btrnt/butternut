chrome.storage.local.get(['selectedText'], function(data) {
	document.getElementById("textarea").value = data.selectedText;
	console.log(data.selectedText);
});