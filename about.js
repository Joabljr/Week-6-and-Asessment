console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("submit");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

function changeBackground() {
  var text = (document.getElementById("para").style.backgroundColor = "blue");
}
function backToNormal() {
  var text = (document.getElementById("para").style.backgroundColor = "");
}
