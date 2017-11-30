chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
	chrome.browserAction.setBadgeText( { text: request.key.toString() } );
	chrome.browserAction.setBadgeBackgroundColor({color: [55, 61, 64, 1]});
}
