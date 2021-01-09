
console.log('from background, hi friends');

chrome.tabs.onActivated.addListener(tab => {
	chrome.tabs.get(tab.tabId, current_tab_info => {
		console.log(tab); // getting tab id
		console.log(current_tab_info.url);
		// chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('I injected this.'))
	})
})

