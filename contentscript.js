function saveKeyboardEvent(e)
{
  console.log(e);
}

document.addEventListener('keydown', function (e){saveKeyboardEvent(e);}, false);

//document.getElementById("myBtn").addEventListener("click", displayDate);

const config = 
		{
			'keyword1' = 'I',
			'keyword2' = 'me',
			'keyword3' = 'myself',
		};

		function match(input, obj)
		{
			var matched = Object.keys(obj).find(key => input.toLowerCase().search(key) > -1);
			return obj[matched] || null;
		}

console.log(match())
