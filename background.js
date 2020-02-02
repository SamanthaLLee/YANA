var contextMenuConcern = {
  "id": "concerned",
  "title": "I am concerned.",
  "contexts": ["editable", "selection"]
};

chrome.runtime.onInstalled.addListener(function() {
  var resourceMessage = "new Array()";
  chrome.storage.sync.set({'storageText': resourceMessage}, function() {
    console.log("Default set.");
  });
});

chrome.contextMenus.create(contextMenuConcern);

chrome.contextMenus.onClicked.addListener(function(clickData, tab){
  if(clickData.menuItemId == "concerned"){
    chrome.storage.sync.get('storageText', function(result){

      var text = result.storageText;
        chrome.tabs.executeScript(tab.id, {
          frameId: clickData.frameId || 0,
          matchAboutBlank: true,
          code: `document.execCommand('insertText', false, ${JSON.stringify(text)})`,
        });
    });
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    var opt = {
      iconUrl: '/favicon.ico',
      type: 'basic',
      title: 'Primary Title',
      message: 'Primary message to display',
      priority: 1,
    };

    chrome.notifications.create('', opt, function() { console.log("Last error:", chrome.runtime.lastError); });
    sendResponse({status: "message received"});
  });
