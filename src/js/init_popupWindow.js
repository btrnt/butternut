console.log("===running init_analytics.js");

// document.getElementById("analyzeBtn").style.display = 'none';
// document.getElementById("textarea").disabled = true;

chrome.storage.local.get(['selectedText'], function(data) {
	document.getElementById("textarea").value = data.selectedText;
	console.log("===data.selectedText:\n" + data.selectedText);
	analyze();
});



