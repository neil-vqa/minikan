chrome.commands.onCommand.addListener(function(command) {
  if(command == 'open-minikan') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "open-modal" })
    })
  }
});