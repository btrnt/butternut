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
	} else {
		document.getElementById("infoAbtSelected").innerHTML = "Length: " + extractedText.length;
	}

	document.getElementById("viewAnalyticsContainer").innerHTML = "<a id='viewAnalytics' class='btn noselect'>View Analytics</a>";
	document.getElementById("viewAnalyticsContainer").style.display = 'inline';
    
	document.getElementById("searchResults").innerHTML = "<p>Similar News Search Results:</p>";
	document.getElementById("searchResults").style.display = 'inline';

    var url = "http://b040ffa10081.ngrok.io/gp";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log("===xhr.status:\n" + xhr.status);
          console.log("===xhr.responseText:\n" + xhr.responseText);
       }};

    xhr.send("text="+encodeURI(txtInput.value));

	console.log("===xhr.responseText:\n" + xhr.responseText);

}