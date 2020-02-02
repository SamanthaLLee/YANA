function saveKeyboardEvent(e)
{
  console.log(e);
}

document.addEventListener('keydown', function (e){saveKeyboardEvent(e);}, false);
