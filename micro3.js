//inspiratie van https://codepen.io/anon/pen/QaZxKO

var section = document.querySelector('li.dancer'); // first
var button = document.querySelector('li > button');

var dance = function () {

    section.classList.toggle('dancing')
}

button.addEventListener('click', dance);

















