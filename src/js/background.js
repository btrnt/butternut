console.log('===running background.js, hi friends');

chrome.tabs.onActivated.addListener(tab => {
	chrome.tabs.get(tab.tabId, current_tab_info => {
		console.log("===tab:\n" + tab); // getting tab id
		console.log("===current_tab_info.url:\n" + current_tab_info.url);
		chrome.tabs.executeScript(null, { file: './js/foreground.js' }, () => console.log('I injected this.'))
	})
})

function viewPopupWindow(info, tab) {
	chrome.tabs.create({
		url: chrome.extension.getURL('popupWindow.html'),
		active: false
	}, function (tab) {
		// After the tab has been created, open a window to inject the tab
		chrome.windows.create({
			tabId: tab.id,
			type: 'popup',
			focused: true,
			width: 400,
			height: 500
		});
	});
	console.log("===info.selectionText:\n" + info.selectionText);
	chrome.storage.local.set({ 'selectedText': info.selectionText }, function () {
		console.log('===Value is set to: ' + info.selectionText);
	});
}

// The Right-clicky option!
chrome.contextMenus.create({
	title: "Search: %s",
	contexts: ["selection"],
	onclick: viewPopupWindow
});

