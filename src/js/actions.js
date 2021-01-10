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

	document.getElementById("searchResultsContainer").innerHTML = "<a id='searchResults' class='btn noselect'>Search on Google</a>";
	document.getElementById("searchResultsContainer").style.display = 'inline';

	document.getElementById('searchResults').addEventListener("click", function () {
		chrome.tabs.create({
			url: 'https://www.google.com/search?q=' + document.getElementById("textarea").value,
			active: false
		})
	});

	try{
		let responseText = await getAnalysis();
		let response = JSON.parse(responseText)

		console.log("===xhr.responseText:\n" + responseText);
		console.log(response)

		let rankLen = 50257
		let avg = response.real_topk.reduce((total, val) => total + val[0], 0)/rankLen
		console.log(avg)
	}catch(e){
		console.log(e)
	}
}

function getAnalysis(){
	return new Promise(function(resolve, reject){
		var url = "http://5e42c4bac232.ngrok.io/gp";

		var xhr = new XMLHttpRequest();
		xhr.open("POST", url);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onload = function () {
		   if (xhr.status == 200) {
			  	resolve(xhr.responseText)
		   }else{
		   		reject(xhr.status)
		   }
		};
		xhr.send("text="+encodeURI(txtInput.value));
	});
}