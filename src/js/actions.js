// For triggered events
console.log("===running actions.js");

const btnAnalyze = document.getElementById("analyzeBtn")
const txtOutput = document.getElementById("infoAbtSelected")
const txtInput = document.getElementById("textarea")

btnAnalyze.addEventListener("click", analyze)

async function analyze() {
	console.log("===Analyzing");
	var extractedText = document.getElementById("textarea").value;
	console.log("===Extracted text:\n" + extractedText);
	if (extractedText.length == 0) {
		document.getElementById("infoAbtSelected").innerHTML = "No input provided";
		document.getElementById("textarea").placeholder = "Please select text to analyze.";
	} else {
		document.getElementById("infoAbtSelected").innerHTML = "Length: " + extractedText.length;
	}

	document.getElementById("viewAnalyticsContainer").innerHTML = "<a id='viewAnalytics' class='btn noselect'>View Analytics</a>";
	document.getElementById("viewAnalyticsContainer").style.display = 'block';

	document.getElementById("searchResultsContainer").innerHTML = "<a id='searchResults' class='btn noselect'>Search on Google</a>";
	document.getElementById("searchResultsContainer").style.display = 'block';
	document.getElementById("searchResultsContainer").style.margin = '3em';


	document.getElementById('searchResults').addEventListener("click", function () {
		chrome.tabs.create({
			url: 'https://www.google.com/search?q=' + document.getElementById("textarea").value,
			active: false
		})
	});

	var url = "http://b040ffa10081.ngrok.io/gp";

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url);

	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	};

	xhr.send("text=" + encodeURI(txtInput.value));

	console.log("===xhr.responseText:\n" + xhr.responseText);

}