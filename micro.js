//Met hulp van oud klasgenoot Jorik


function changeLikeButton (e) {
  var sourceElement = e.target;

  if (sourceElement.classList.contains("liked")) {
    sourceElement.src = "../IMG/like-01.png";
  } else {
    sourceElement.src = "../IMG/liked-01.png";
  }
  sourceElement.classList.toggle("liked");

}

var likeImages = document.getElementsByClassName("like");
if (likeImages.length > 0) {
  for (var i = 0; i < likeImages.length; i++) {
    likeImages[i].addEventListener("click", changeLikeButton);
  }
}












