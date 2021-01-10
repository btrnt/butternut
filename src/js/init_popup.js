console.log("===running init_popop.js");

chrome.tabs.executeScript({
	code: "window.getSelection().toString();"
}, function (selection) {


	// Empty selection case: Instructions
	if (selection[0] == "") {
		document.getElementById("textarea").placeholder = "Please highlight text to analyze.";
	} else {
		document.getElementById("textarea").value = selection[0];
		console.log("===selection[0]:\n" + selection[0]);
	}
});

