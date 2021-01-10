
document.getElementById("analyzeBtn").addEventListener("click", analyze); 

function analyze() {
	console.log("Analyzing");
	document.getElementById("infoAbtSelected").innerHTML = "Length: " + document.getElementById("textarea").value.length;
	console.log(document.getElementById("textarea").value);
}