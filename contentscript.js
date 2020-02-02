// const config =
// 		{
// 			'keyword1' : 'I',
// 			'keyword2' : 'me',
// 			'keyword3' : 'myself'
// 		};
//
// function saveKeyboardEvent(e)
// {
//   console.log(e);
//   match();
// }
//
// function match(input, obj)
// {
//   var matched = Object.keys(obj).find(key => input.toLowerCase().search(key) > -1);
//   return obj[matched] || null;
// }
//
// document.addEventListener('keydown', function (e){saveKeyboardEvent(e);}, false);

document.getElementsByTagName('input').addEventListener("click", function (){
  alert("Hi");
});

// let input = document.querySelector('input');
// let log = document.getElementById('log');
//
// input.oninput = handleInput;
//
// function handleInput(e) {
//   log.textContent = `The field's value is
//       ${e.target.value.length} character(s) long.`;
// }
