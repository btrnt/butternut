
console.log('from background, hi friends');

chrome.tabs.onActivated.addListener(tab => {
	chrome.tabs.get(tab.tabId, current_tab_info => {
		console.log(tab); // getting tab id
		console.log(current_tab_info.url);
		// chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('I injected this.'))
	})
})

// Responsible for opening the extension, with the ID, to view the Analytics.
function viewAnalytics(info, tab) {
	chrome.tabs.create({
		url: "chrome-extension://" + chrome.runtime.id + "/analytics.html"
		// Use the variable "info.selectionText" to grab the selected text.
	});
}

// The Right-clicky option!
chrome.contextMenus.create({
	title: "Search: %s",
	contexts: ["selection"],
	onclick: viewAnalytics
});