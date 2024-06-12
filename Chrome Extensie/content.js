// Function to observe changes in the main content container and update page text
function observeMainTagAndUpdatePageText() {
    const observer = new MutationObserver(() => {
        const mainElement = document.querySelector('main');
        if (mainElement && mainElement.textContent.trim().length > 0) {
            const pageText = mainElement.textContent;
            chrome.storage.local.set({ pageText: pageText }, function () {
                console.log('Page text has been updated in local storage:', pageText);
            });
        } else {
            console.error('Main element not found or empty.');
        }
    });

    // Start observing the main content container
    const mainElement = document.querySelector('main');
    if (mainElement) {
        observer.observe(mainElement, { childList: true, subtree: true });
    } else {
        console.error('Main element not found.');
    }
}

// Function to retrieve and log page text from local storage
function logPageTextFromLocalStorage() {
    chrome.storage.local.get('pageText', function (data) {
        const pageText = data.pageText;
        if (pageText) {
            console.log('Page Text:', pageText);
        } else {
            console.log('Page Text not found in local storage.');
        }
    });
}

// Listen for messages from the background script to trigger text observation and update
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "extractText") {
        observeMainTagAndUpdatePageText();
    }
});

// Call the function to log page text from local storage when the content script is executed
logPageTextFromLocalStorage();
