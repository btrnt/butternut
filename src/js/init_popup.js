console.log("running init_popop.js");

chrome.tabs.executeScript({
	code: "window.getSelection().toString();"
}, function (selection) {

	// Empty selection case: Instructions
	if (selection[0] == "") {
		selection[0] = "Select the text to analyze first.";
	}

	document.getElementById("textarea").value = selection[0];
	console.log(selection[0]);
});


