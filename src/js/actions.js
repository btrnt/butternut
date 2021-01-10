
document.getElementById("analyzeBtn").addEventListener("click", analyze); 

const channel = new BroadcastChannel("my-channel");
channel.addEventListener("message", e => {
	document.getElementById("textarea").value = e.data;
});

function analyze() {
	console.log("Analyzing");
	document.getElementById("infoAbtSelected").innerHTML = "Length: " + document.getElementById("textarea").value.length;
}