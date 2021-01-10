// For triggered events
console.log("running actions.js");

document.getElementById("analyzeBtn").addEventListener("click", analyze);

function analyze() {
	console.log("Analyzing");
	document.getElementById("infoAbtSelected").innerHTML = "Length: " + document.getElementById("textarea").value.length;
	console.log(document.getElementById("textarea").value);

	document.getElementById("viewAnalyticsContainer").innerHTML = "<a id='viewAnalytics' class='btn noselect'>View Analytics</a>";
	document.getElementById("viewAnalyticsContainer").style.display = 'inline';

	document.getElementById("searchResults").innerHTML = "<span>Similar News Search Results:</span>";
	document.getElementById("searchResults").style.display = 'inline';
}