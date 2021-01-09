

console.log("from foreground");

document.getElementById("analyzeBtn").addEventListener("click", analyze); 

function analyze() {
	console.log("Analyzing");
	chrome.tabs.executeScript( {
		code: "window.getSelection().toString();"
	}, function(selection) {
		document.getElementById("textarea").value = selection[0];
		document.getElementById("infoAbtSelected").innerHTML = "Length: " + selection[0].length;
		console.log(selection[0]);
	});
}