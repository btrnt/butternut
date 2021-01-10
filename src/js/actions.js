
const btnAnalyze = document.getElementById("analyzeBtn")
const txtOutput = document.getElementById("infoAbtSelected")
const txtInput = document.getElementById("textarea")

btnAnalyze.addEventListener("click", analyze)

async function analyze() {
	console.log("Analyzing");
	console.log(document.getElementById("textarea").value);

	document.getElementById("viewAnalyticsContainer").innerHTML = "<a id='viewAnalytics' class='btn noselect'>View Analytics</a>";
	document.getElementById("viewAnalyticsContainer").style.display = 'block';

	document.getElementById("searchResults").innerHTML = "<span>Similar News Search Results:</span>";
	document.getElementById("searchResults").style.display = 'block';

	var url = "http://1f563e15eb5f.ngrok.io/gp";
	var data = "text=%22here%20is%20some%20text%22";
	var response = await postData(url, data)

	console.log(response)

	document.getElementById("infoAbtSelected").innerHTML = "Length: " + document.getElementById("textarea").value.length;
}

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });

  return response.json(); // parses JSON response into native JavaScript objects
}