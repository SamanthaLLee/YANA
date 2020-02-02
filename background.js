var contextMenuConcern = {
  "id": "concerned",
  "title": "I am concerned.",
  "contexts": ["editable", "selection"]
};

var words = ['hopeless', 'nothing matters', 'empty inside', 'always scared', 'feel worthless', 'no motivation', 'no energy', 'depressed', 'suicide', 'anxious', 'kill myself', 'self harm', 'cut myself', 'cutting myself'];

chrome.runtime.onInstalled.addListener(function() {
  var resourceMessage = "I am concerned about the state of your mental health. If you need it, the suicide hotline is 1-800-273-8255";
  chrome.storage.sync.set({'storageText': resourceMessage}, function() {
    console.log("Message set.");
  });
});

chrome.contextMenus.create(contextMenuConcern);

chrome.contextMenus.onClicked.addListener(function(clickData, tab){
  if(clickData.menuItemId == "concerned"){
    if(clickData.editable)
    {
      chrome.storage.sync.get('storageText', function(result){
        var text = result.storageText;
          chrome.tabs.executeScript(tab.id, {
            frameId: clickData.frameId || 0,
            matchAboutBlank: true,
            code: `document.execCommand('insertText', false, ${JSON.stringify(text)})`,
          });
      });
    }
    if(clickData.selectionText)
    {
      var opt1 = {
        iconUrl: '/img.png',
        type: 'basic',
        title: 'You are not alone.',
        message: "It seems that this person's mental health may require some attention. Please send them a message by starting a text and clicking again.",
        priority: 1,
      };
      console.log("selection");
      for(var k=0; k<words.length; k++) {
        var currWord = words[k];
        var location = clickData.selectionText.match(currWord);
        console.log(location, words[k]);
        if(location > -1)
        {
          chrome.notifications.create('', opt1, function() { console.log("Last error:", chrome.runtime.lastError); });
        }
      }
    }

  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    var opt2 = {
      iconUrl: '/img.png',
      type: 'basic',
      title: 'You are not alone.',
      message: 'Confidential help is available for free. Call 1-800-273-8255.',
      priority: 1,
    };

    chrome.notifications.create('', opt2, function() { console.log("Last error:", chrome.runtime.lastError); });
    sendResponse({status: "message received"});
  });
