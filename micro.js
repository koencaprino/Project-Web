///* 1. selecteer elementen met document.querySelector */
//var section = document.querySelector('section.dancer'); // first section element
//var button = document.querySelector('section > button');
//
//var dance = function () {
//  /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: section.dance) */
//    section.classList.toggle('dancing')
//}
//
///* 2. voeg een event toe aan een element */
//button.addEventListener('click', dance);
//


//inspiratie van = https://codepen.io/anon/pen/xpOvVd



function changeLikeButton (e) {
  var sourceElement = e.target;
  // console.log('sourceElement.classList.contains("liked")');
  if (sourceElement.classList.contains("liked")) {
    sourceElement.src = "../IMG/like-01.png";
  } else {
    sourceElement.src = "../IMG/liked-01.png";
  }
  sourceElement.classList.toggle("liked");
  // console.log("test click on like");
}

var likeImages = document.getElementsByClassName("like");
if (likeImages.length > 0) {
  for (var i = 0; i < likeImages.length; i++) {
    likeImages[i].addEventListener("click", changeLikeButton);
  }
}










/* var logo = document.querySelector('header h1');
var infoBox = document.querySelector('.infoBox');

var showInfo = function () {
  infoBox.classList.toggle('show');
}

logo.addEventListener('click', showInfo); */

