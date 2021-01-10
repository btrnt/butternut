

console.log("from foreground");

document.getElementById("analyzeBtn").addEventListener("click", analyze); 


chrome.tabs.executeScript( {
	code: "window.getSelection().toString();"
}, function(selection) {
	document.getElementById("textarea").value = selection[0];
	console.log(selection[0]);
});


function analyze() {
	console.log("Analyzing");
	chrome.tabs.executeScript( {
		code: "window.getSelection().toString();"
	}, function(selection) {
		document.getElementById("infoAbtSelected").innerHTML = "Length: " + selection[0].length;
		console.log(selection[0]);
	});
}