console.log("===running analytics.js");

// document.getElementById("analyzeBtn").style.display = 'none';
// document.getElementById("textarea").disabled = true;
const txtInput = document.getElementById("textarea");

chrome.storage.local.get(['selectedText'], function(data) {
	let response = data.selectedText;

	for (var i = 0; i < response.bpe_strings.length; i++) {
		let token = response.bpe_strings[i];
		if (token.slice(0, 1).localeCompare('\u0120') == 0 ) {
			response.bpe_strings[i] = " " + token.slice(1, token.length);	
		}
	}

	for (var i = 0; i < response.real_topk.length; i++) {
		let token = response.bpe_strings[i+1];
		if (token.slice(0, 1).localeCompare('\u010a') == 0 ) {
			txtInput.innerHTML += "<br/>";	
		} else {
			txtInput.innerHTML += "<mark style='background-color:" 
						 + perc2color(100-(response.real_topk[i][0]*100))
						 + "'>" + response.bpe_strings[i+1] + "</mark>";
		}
	}
});

function perc2color(perc) {
	var r, g, b = 0;
	if(perc < 50) {
		r = 255;
		g = Math.round(5.1 * perc);
	}
	else {
		g = 255;
		r = Math.round(510 - 5.10 * perc);
	}
	var h = r * 0x10000 + g * 0x100 + b * 0x1;
	return '#' + ('000000' + h.toString(16)).slice(-6);
}


