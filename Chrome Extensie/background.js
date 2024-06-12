// Function to update tab information in local storage
function updateTabInfo(tabId) {
    chrome.tabs.get(tabId, tab => {
        if (tab) {
            let url = tab.url;
            let title = tab.title;
            const tabInfo = { url: url, title: title };
            chrome.storage.local.set(tabInfo, () => {
                console.log('Tabb information has been updated in local storage:', tabInfo);
            });
        }
    });
}

// Function to send a message to content script to extract text
function sendMessageToContentScript(tabId) {
    chrome.tabs.sendMessage(tabId, { action: "extractText" }, function (response) {
        if (chrome.runtime.lastError) {
            console.error('Failed to send message to content script:', chrome.runtime.lastError);
        }
    });
}

// Listen for tab activation events
chrome.tabs.onActivated.addListener(activeInfo => {
    updateTabInfo(activeInfo.tabId);
    sendMessageToContentScript(activeInfo.tabId);
});

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        updateTabInfo(tabId);
        sendMessageToContentScript(tabId);
    }
});
