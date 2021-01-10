// For triggered events

document.getElementById("analyzeBtn").addEventListener("click", analyze);

function analyze() {
	console.log("Analyzing");
	document.getElementById("infoAbtSelected").innerHTML = "Length: " + document.getElementById("textarea").value.length;
	console.log(document.getElementById("textarea").value);

	document.getElementById("viewAnalyticsContainer").innerHTML = "<a id='viewAnalytics' class='btn noselect'>View Analytics</a>";
	document.getElementById("viewAnalyticsContainer").style.display = 'inline';

	// document.getElementById("searchResultsContainer").innerHTML = "<a>Search on Google</a>";

	document.getElementById("searchResultsContainer").innerHTML = "<a id='searchResults' class='btn noselect'>Search on Google</a>";
	document.getElementById("searchResultsContainer").style.display = 'inline';

	document.getElementById('searchResults').addEventListener("click", function () {
		chrome.tabs.create({
			url: 'https://www.google.com/search?q=' + document.getElementById("textarea").value,
			active: false
		})
	});
}