let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");


let closeBtn = modal.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "block";
};


closeBtn.onclick = function() {
  modal.style.display = "none";
};


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};