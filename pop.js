document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ currentWindow: true, active: true}, function(tabs){
      chrome.runtime.sendMessage({name: 'bloiPageActionClicked', data: tabs});
    });
});
