
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
	console.log(info.selectionText);
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

	const channel = new BroadcastChannel("my-channel");
    channel.postMessage(info.selectionText);
}

// The Right-clicky option!
chrome.contextMenus.create({
	title: "Search: %s",
	contexts: ["selection"],
	onclick: viewAnalytics
});

