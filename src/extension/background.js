console.log('Background loaded.')
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let results = { name: 'failure', payload: {} }
    switch (request) {
        case 'startPageAnalysis':
            // do scrape
            console.log('Recieved start signal', sender);
            results = { name: 'completePageAnalysis', payload: window.aist_scrape() }
            break;
        case 'startSelectorMode':
            console.log('SELECTOR MODE');
            results = { name: 'inSelectorMode', payload: null };
            window.agentx_selector();
            break;
        default:
            console.error('Should not be here!');
    }
    console.log('Sending Response', results);
    sendResponse(results);
});
