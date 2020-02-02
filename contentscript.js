function saveKeyboardEvent(e)
{
  console.log(e);
  checkInputs();
}

function checkInputs()
{
  console.log("start check");
  var words = ['sad', 'hopeless', 'depressed', 'suicide', 'anxious', 'kill myself', 'self-harm', 'cut myself', 'cutting myself'];
  var all_inputs = document.getElementsByTagName('input');
  console.log(all_inputs);

  for(var i=0; i<all_inputs.length; i++) {
    if(all_inputs[i].type === 'text')
    {
      for(var j=0; j<words.length; j++) {
        if (~all_inputs[i].value.indexOf(words[j])){
          console.log('omg it worked');

          chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
            console.log(response.status);
          });

        }
      }
    }
  }
}

document.addEventListener('keydown', function (e){saveKeyboardEvent(e);}, false);
