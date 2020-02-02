const config =
		{
			'keyword1' : 'I',
			'keyword2' : 'me',
			'keyword3' : 'myself'
		};

function saveKeyboardEvent(e)
{
  console.log(e);
  match();
}

function match(input, obj)
{
  var matched = Object.keys(obj).find(key => input.toLowerCase().search(key) > -1);
  return obj[matched] || null;
}

document.addEventListener('keydown', function (e){saveKeyboardEvent(e);}, false);
