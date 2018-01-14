var zoekElement = document.querySelector("#zoek");
var loadingOverlay = document.getElementById('laden-overlay');
zoekElement.addEventListener("click",
function () {
  loadingOverlay.classList.remove("hidden");
  setTimeout(hideLoadingOverlay, 2000);
});

function hideLoadingOverlay () {
  console.log("hideLoadingOverlay");
  loadingOverlay.classList.add("hidden");
}
