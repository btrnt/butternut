console.log("===running init_analytics.js");

chrome.storage.local.get(['selectedText'], function(data) {
	document.getElementById("textarea").value = data.selectedText;
	console.log("===data.selectedText:\n" + data.selectedText);
});