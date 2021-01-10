
console.log('from background, hi friends');

chrome.tabs.onActivated.addListener(tab => {
	chrome.tabs.get(tab.tabId, current_tab_info => {
		console.log(tab); // getting tab id
		console.log(current_tab_info.url);
		chrome.tabs.executeScript(null, {file: './js/foreground.js'}, () => console.log('I injected this.'))
	})
})

// Responsible for opening the extension, with the ID, to view the Analytics.
function viewAnalytics(info, tab) {
		// Use the variable "info.selectionText" to grab the selected text.

	 chrome.tabs.create({
		url: chrome.extension.getURL('analytics.html'),
		active: false
	}, function(tab) {
		// After the tab has been created, open a window to inject the tab
		chrome.windows.create({
			tabId: tab.id,
			type: 'popup',
			focused: true
		});
	});
	console.log(info.selectionText);
	chrome.storage.local.set({'selectedText': info.selectionText}, function() {
		console.log('Value is set to ' + info.selectionText);
	});
}

// The Right-clicky option!
chrome.contextMenus.create({
	title: "Search: %s",
	contexts: ["selection"],
	onclick: viewAnalytics
});

