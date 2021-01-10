
const btnAnalyze = document.getElementById("analyzeBtn")
const txtOutput = document.getElementById("infoAbtSelected")
const txtInput = document.getElementById("textarea")

btnAnalyze.addEventListener("click", analyze)

async function analyze() {
	console.log("Analyzing");
	console.log(document.getElementById("textarea").value);

	// document.getElementById("viewAnalyticsContainer").innerHTML = "<a id='viewAnalytics' class='btn noselect'>View Analytics</a>";
	// document.getElementById("viewAnalyticsContainer").style.display = 'block';
    //
	// document.getElementById("searchResults").innerHTML = "<span>Similar News Search Results:</span>";
	// document.getElementById("searchResults").style.display = 'block';

    var url = "http://b040ffa10081.ngrok.io/gp";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
       }};

    xhr.send("text="+encodeURI(txtInput.value));

	console.log(xhr.responseText)


    var response = JSON.parse(xhr.responseText)
    console.log(response)

	document.getElementById("infoAbtSelected").innerHTML = "Length: " + document.getElementById("textarea").value.length;
}

async function analyzeText(){